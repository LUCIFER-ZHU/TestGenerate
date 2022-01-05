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
import org.springframework.beans.factory.annotation.Value;
import cn.ibizlab.util.errors.BadRequestAlertException;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Lazy;
import cn.ibizlab.sample.core.sample.domain.Customer;
import cn.ibizlab.sample.core.sample.filter.CustomerSearchContext;
import cn.ibizlab.sample.core.sample.service.ICustomerService;
import cn.ibizlab.sample.core.sample.mapper.CustomerMapper;
import cn.ibizlab.util.helper.CachedBeanCopier;
import cn.ibizlab.util.helper.DEFieldCacheMap;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.core.conditions.Wrapper;


/**
 * 实体[客户] 服务对象接口实现
 */
@Slf4j
@Service("CustomerServiceImpl")
public class CustomerServiceImpl extends ServiceImpl<CustomerMapper,Customer> implements ICustomerService {

    protected ICustomerService customerService = SpringContextHolder.getBean(this.getClass());

    @Autowired
    @Lazy
    protected cn.ibizlab.sample.core.sample.service.ICityService cityService;
   
    @Autowired
    @Lazy
    protected cn.ibizlab.sample.core.sample.service.IDistrictService districtService;
   
    @Autowired
    @Lazy
    protected cn.ibizlab.sample.core.sample.service.IProvinceService provinceService;
   

    protected int batchSize = 500;

    public Customer get(Customer et) {
        Customer rt = this.baseMapper.selectEntity(et);
        Assert.notNull(rt,"数据不存在,客户:"+et.getCustomerId());
        CachedBeanCopier.copy(rt, et);
        return et;
    }
    
    public List<Customer> getByEntities(List<Customer> entities) {
        return this.baseMapper.selectEntities(entities);
    }

    public void fillParentData(Customer et) {
        
    }

    public Customer getDraft(Customer et) {
        fillParentData(et);
        return et;
    }

    public boolean checkKey(Customer et) {
        return this.count(Wrappers.lambdaQuery(et))>0;
    }

    @Override
    @Transactional
    public boolean create(Customer et) {
        fillParentData(et);
        if(!this.retBool(this.baseMapper.insert(et))) 
            return false;
        get(et);
        return true;
    }
    @Transactional
    public boolean createBatch(List<Customer> list) {
        list.forEach(et->fillParentData(et));
        this.saveBatch(list, batchSize);        
        return true;
    }

    @Transactional
    public boolean update(Customer et) {
        fillParentData(et);
        if(!update(et, (Wrapper) et.getUpdateWrapper(true)
                .eq("customerid", et.getCustomerId())
            )) {
            return false;
        }
        get(et);
        return true;
    }

    @Transactional
    public boolean updateBatch(List<Customer> list) {
        list.forEach(et->fillParentData(et));
        updateBatchById(list, batchSize);
        return true;
    }

    @Transactional
    public boolean save(Customer et) {
        if(checkKey(et))
            return customerService.update(et);
        else
            return customerService.create(et);
    }

    @Transactional
    public boolean saveBatch(List<Customer> list) {
        List<Customer> rt=this.getByEntities(list);
        Set<Serializable> keys=new HashSet<>();
        rt.forEach(et->{
            Serializable key = et.getCustomerId();
            if(!ObjectUtils.isEmpty(key))
                keys.add(key);
        });
        List<Customer> _create=new ArrayList<>();
        List<Customer> _update=new ArrayList<>();
        list.forEach(et-> {
            Serializable key = et.getCustomerId();
            if(keys.contains(key))
                _update.add(et);
            else
                _create.add(et);
        });
        List rtList=new ArrayList<>();
        if(_update.size()>0 && (!customerService.updateBatch(_update)))
            return false;
        if(_create.size()>0 && (!customerService.createBatch(_create)))
            return false;
        return true;
    }

    @Transactional
    public boolean remove(Customer et) {
        String key = et.getCustomerId();

        if(!remove(new QueryWrapper<Customer>()
                .eq("customerid", et.getCustomerId())
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

    @Transactional
    public Customer getOrderCnt(Customer et) {
        return et;
    }
    @Transactional
    public boolean getOrderCntBatch(List<Customer> list) {
        return true;
    }

    public Page<Customer> searchDefault(CustomerSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Customer> pages=baseMapper.searchDefault(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Customer>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }
    public List<Customer> listDefault(CustomerSearchContext context) {
        return baseMapper.listDefault(context,context.getSelectCond());
    }

    public List<Customer> selectByCityId(String cityId) {
        return baseMapper.selectByCityId(cityId);
    }

    public boolean removeByCityId(String cityId) {
        return this.remove(new QueryWrapper<Customer>().eq("cityid",cityId));
    }

    public boolean resetByCityId(String cityId) {
        return this.update(new UpdateWrapper<Customer>().set("cityid",null).eq("cityid",cityId));
    }

    public boolean saveByCityId(String cityId,List<Customer> list) {
        if(list==null)
            return true;
        Set<String> delIds=new HashSet<String>();
        List<Customer> _update=new ArrayList<Customer>();
        List<Customer> _create=new ArrayList<Customer>();
        for(Customer before:selectByCityId(cityId)){
            delIds.add(before.getCustomerId());
        }
        for(Customer sub:list) {
            sub.setCityId(cityId);
            if(ObjectUtils.isEmpty(sub.getCustomerId()))
                sub.setCustomerId((String)sub.getDefaultKey(true));
            if(delIds.contains(sub.getCustomerId())) {
                delIds.remove(sub.getCustomerId());
                _update.add(sub);
            }
            else
                _create.add(sub);
        }
        if(_update.size()>0 && (!customerService.updateBatch(_update)))
            return false;
        if(_create.size()>0 && (!customerService.createBatch(_create)))
            return false;
        if(delIds.size()>0 && (!customerService.removeBatch(delIds)))
            return false;
        return true;
    }

    public List<Customer> selectByPcustomerid(String pcustomerid) {
        return baseMapper.selectByPcustomerid(pcustomerid);
    }

    public boolean removeByPcustomerid(String pcustomerid) {
        return this.remove(new QueryWrapper<Customer>().eq("pcustomerid",pcustomerid));
    }

    public boolean resetByPcustomerid(String pcustomerid) {
        return this.update(new UpdateWrapper<Customer>().set("pcustomerid",null).eq("pcustomerid",pcustomerid));
    }

    public boolean saveByPcustomerid(String pcustomerid,List<Customer> list) {
        if(list==null)
            return true;
        Set<String> delIds=new HashSet<String>();
        List<Customer> _update=new ArrayList<Customer>();
        List<Customer> _create=new ArrayList<Customer>();
        for(Customer before:selectByPcustomerid(pcustomerid)){
            delIds.add(before.getCustomerId());
        }
        for(Customer sub:list) {
            sub.setPcustomerid(pcustomerid);
            if(ObjectUtils.isEmpty(sub.getCustomerId()))
                sub.setCustomerId((String)sub.getDefaultKey(true));
            if(delIds.contains(sub.getCustomerId())) {
                delIds.remove(sub.getCustomerId());
                _update.add(sub);
            }
            else
                _create.add(sub);
        }
        if(_update.size()>0 && (!customerService.updateBatch(_update)))
            return false;
        if(_create.size()>0 && (!customerService.createBatch(_create)))
            return false;
        if(delIds.size()>0 && (!customerService.removeBatch(delIds)))
            return false;
        return true;
    }

    public List<Customer> selectByDistrictId(String districtId) {
        return baseMapper.selectByDistrictId(districtId);
    }

    public boolean removeByDistrictId(String districtId) {
        return this.remove(new QueryWrapper<Customer>().eq("districtid",districtId));
    }

    public boolean resetByDistrictId(String districtId) {
        return this.update(new UpdateWrapper<Customer>().set("districtid",null).eq("districtid",districtId));
    }

    public boolean saveByDistrictId(String districtId,List<Customer> list) {
        if(list==null)
            return true;
        Set<String> delIds=new HashSet<String>();
        List<Customer> _update=new ArrayList<Customer>();
        List<Customer> _create=new ArrayList<Customer>();
        for(Customer before:selectByDistrictId(districtId)){
            delIds.add(before.getCustomerId());
        }
        for(Customer sub:list) {
            sub.setDistrictId(districtId);
            if(ObjectUtils.isEmpty(sub.getCustomerId()))
                sub.setCustomerId((String)sub.getDefaultKey(true));
            if(delIds.contains(sub.getCustomerId())) {
                delIds.remove(sub.getCustomerId());
                _update.add(sub);
            }
            else
                _create.add(sub);
        }
        if(_update.size()>0 && (!customerService.updateBatch(_update)))
            return false;
        if(_create.size()>0 && (!customerService.createBatch(_create)))
            return false;
        if(delIds.size()>0 && (!customerService.removeBatch(delIds)))
            return false;
        return true;
    }

    public List<Customer> selectByProvinceId(String provinceId) {
        return baseMapper.selectByProvinceId(provinceId);
    }

    public boolean removeByProvinceId(String provinceId) {
        return this.remove(new QueryWrapper<Customer>().eq("provinceid",provinceId));
    }

    public boolean resetByProvinceId(String provinceId) {
        return this.update(new UpdateWrapper<Customer>().set("provinceid",null).eq("provinceid",provinceId));
    }

    public boolean saveByProvinceId(String provinceId,List<Customer> list) {
        if(list==null)
            return true;
        Set<String> delIds=new HashSet<String>();
        List<Customer> _update=new ArrayList<Customer>();
        List<Customer> _create=new ArrayList<Customer>();
        for(Customer before:selectByProvinceId(provinceId)){
            delIds.add(before.getCustomerId());
        }
        for(Customer sub:list) {
            sub.setProvinceId(provinceId);
            if(ObjectUtils.isEmpty(sub.getCustomerId()))
                sub.setCustomerId((String)sub.getDefaultKey(true));
            if(delIds.contains(sub.getCustomerId())) {
                delIds.remove(sub.getCustomerId());
                _update.add(sub);
            }
            else
                _create.add(sub);
        }
        if(_update.size()>0 && (!customerService.updateBatch(_update)))
            return false;
        if(_create.size()>0 && (!customerService.createBatch(_create)))
            return false;
        if(delIds.size()>0 && (!customerService.removeBatch(delIds)))
            return false;
        return true;
    }


}