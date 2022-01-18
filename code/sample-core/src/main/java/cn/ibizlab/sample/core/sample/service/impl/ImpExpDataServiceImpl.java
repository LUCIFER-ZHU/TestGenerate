package cn.ibizlab.sample.core.sample.service.impl;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.Map;
import java.util.HashSet;
import java.util.HashMap;
import java.util.Collection;
import java.util.Objects;
import java.util.Optional;
import java.math.BigInteger;
import lombok.extern.slf4j.Slf4j;

import cn.ibizlab.util.security.SpringContextHolder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cglib.beans.BeanCopier;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.util.ObjectUtils;
import org.springframework.util.StringUtils;
import org.springframework.util.Assert;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Value;
import cn.ibizlab.util.errors.BadRequestAlertException;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Lazy;
import cn.ibizlab.sample.core.sample.domain.ImpExpData;
import cn.ibizlab.sample.core.sample.filter.ImpExpDataSearchContext;
import cn.ibizlab.sample.core.sample.service.IImpExpDataService;
import cn.ibizlab.sample.core.sample.mapper.ImpExpDataMapper;
import cn.ibizlab.util.helper.CachedBeanCopier;
import cn.ibizlab.util.helper.DEFieldCacheMap;
import cn.ibizlab.util.security.AuthenticationUser;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import cn.ibizlab.sample.core.sample.domain.Customer;
import cn.ibizlab.sample.core.sample.service.ICustomerService;   


/**
 * 实体[导入导出数据] 服务对象接口实现
 */
@Slf4j
@Service("ImpExpDataService")
public class ImpExpDataServiceImpl extends ServiceImpl<ImpExpDataMapper,ImpExpData> implements IImpExpDataService {

    protected IImpExpDataService getProxyService() {
        return SpringContextHolder.getBean(this.getClass());
    }

    @Autowired
    @Lazy
    protected ICustomerService customerService;
   

    protected int batchSize = 500;

    public ImpExpData get(ImpExpData et) {
        ImpExpData rt = this.baseMapper.selectEntity(et);
        Assert.notNull(rt,"数据不存在,导入导出数据:"+et.getImpExpDataId());
        BeanUtils.copyProperties(rt, et);
        return et;
    }
    
    public List<ImpExpData> getByEntities(List<ImpExpData> entities) {
        return this.baseMapper.selectEntities(entities);
    }

    public void fillParentData(ImpExpData et) {
        if(!ObjectUtils.isEmpty(et.getCustomerId())) {
            Customer customer = et.getCustomer();
            if(!ObjectUtils.isEmpty(customer)) {
                et.setCustomerName(customer.getCustomerName());   
            }
        }    
    }

    public ImpExpData getDraft(ImpExpData et) {
        fillParentData(et);
        return et;
    }

    public boolean checkKey(ImpExpData et) {
        return this.count(Wrappers.lambdaQuery(et))>0;
    }

    @Override
    @Transactional
    public boolean create(ImpExpData et) {
        fillParentData(et);
        if(!this.retBool(this.baseMapper.insert(et))) 
            return false;
        get(et);
        return true;
    }
    @Transactional
    public boolean createBatch(List<ImpExpData> list) {
        list.forEach(et->fillParentData(et));
        this.saveBatch(list, batchSize);        
        return true;
    }

    @Transactional
    public boolean update(ImpExpData et) {
        fillParentData(et);
        if(!update(et, (Wrapper) et.getUpdateWrapper(true)
                .eq("impexpdataid", et.getImpExpDataId())
            )) {
            return false;
        }
        get(et);
        return true;
    }

    @Transactional
    public boolean updateBatch(List<ImpExpData> list) {
        list.forEach(et->fillParentData(et));
        updateBatchById(list, batchSize);
        return true;
    }

    @Transactional
    public boolean save(ImpExpData et) {
        if(checkKey(et))
            return getProxyService().update(et);
        else
            return getProxyService().create(et);
    }

    @Transactional
    public boolean saveBatch(List<ImpExpData> list) {
        List<ImpExpData> rt=this.getByEntities(list);
        Set<Serializable> keys=new HashSet<>();
        rt.forEach(et->{
            Serializable key = et.getImpExpDataId();
            if(!ObjectUtils.isEmpty(key))
                keys.add(key);
        });
        List<ImpExpData> _create=new ArrayList<>();
        List<ImpExpData> _update=new ArrayList<>();
        list.forEach(et-> {
            Serializable key = et.getImpExpDataId();
            if(keys.contains(key))
                _update.add(et);
            else
                _create.add(et);
        });
        List rtList=new ArrayList<>();
        if(_update.size()>0 && (!getProxyService().updateBatch(_update)))
            return false;
        if(_create.size()>0 && (!getProxyService().createBatch(_create)))
            return false;
        return true;
    }

    @Transactional
    public boolean remove(ImpExpData et) {
        String key = et.getImpExpDataId();

        if(!remove(new QueryWrapper<ImpExpData>()
                .eq("impexpdataid", et.getImpExpDataId())
            )) {
            return false;
        }
        return true ;
    }
    
    @Transactional
    public boolean removeBatch(Collection<String> ids) {
        if(!removeByIds(ids))
            return false;
        return true;
    }

    public Page<ImpExpData> searchDefault(ImpExpDataSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<ImpExpData> pages=baseMapper.searchDefault(context.getPages(),context,context.getSelectCond());
        return new PageImpl<ImpExpData>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }
    public List<ImpExpData> listDefault(ImpExpDataSearchContext context) {
        return baseMapper.listDefault(context,context.getSelectCond());
    }

    public List<ImpExpData> selectByCustomerId(String customerId) {
        return baseMapper.selectByCustomerId(customerId);
    }

    public boolean removeByCustomerId(String customerId) {
        return this.remove(new QueryWrapper<ImpExpData>().eq("customerid",customerId));
    }

    public boolean resetByCustomerId(String customerId) {
        return this.update(new UpdateWrapper<ImpExpData>().set("customerid",null).eq("customerid",customerId));
    }

    public boolean saveByCustomerId(Customer customer,List<ImpExpData> list) {
        if(list==null)
            return true;
        Set<String> delIds=new HashSet<String>();
        List<ImpExpData> _update=new ArrayList<ImpExpData>();
        List<ImpExpData> _create=new ArrayList<ImpExpData>();
        for(ImpExpData before:selectByCustomerId(customer.getCustomerId())){
            delIds.add(before.getImpExpDataId());
        }
        for(ImpExpData sub:list) {
            sub.setCustomerId(customer.getCustomerId());
            sub.setCustomer(customer);
            if(ObjectUtils.isEmpty(sub.getImpExpDataId()))
                sub.setImpExpDataId((String)sub.getDefaultKey(true));
            if(delIds.contains(sub.getImpExpDataId())) {
                delIds.remove(sub.getImpExpDataId());
                _update.add(sub);
            }
            else
                _create.add(sub);
        }
        if(_update.size()>0 && (!getProxyService().updateBatch(_update)))
            return false;
        if(_create.size()>0 && (!getProxyService().createBatch(_create)))
            return false;
        if(delIds.size()>0 && (!getProxyService().removeBatch(delIds)))
            return false;
        return true;
    }




}