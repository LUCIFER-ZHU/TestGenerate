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
import cn.ibizlab.sample.core.sample.domain.Opportunity;
import cn.ibizlab.sample.core.sample.filter.OpportunitySearchContext;
import cn.ibizlab.sample.core.sample.service.IOpportunityService;
import cn.ibizlab.sample.core.sample.mapper.OpportunityMapper;
import cn.ibizlab.util.helper.CachedBeanCopier;
import cn.ibizlab.util.helper.DEFieldCacheMap;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.core.conditions.Wrapper;


/**
 * 实体[商机] 服务对象接口实现
 */
@Slf4j
@Service("OpportunityServiceImpl")
public class OpportunityServiceImpl extends ServiceImpl<OpportunityMapper,Opportunity> implements IOpportunityService {

    protected IOpportunityService opportunityService = SpringContextHolder.getBean(this.getClass());

    @Autowired
    @Lazy
    protected cn.ibizlab.sample.core.sample.service.ICustomerService customerService;
   
    @Autowired
    @Lazy
    protected cn.ibizlab.sample.core.sample.service.IPersonDataService personDataService;
   

    protected int batchSize = 500;

    public Opportunity get(Opportunity et) {
        Opportunity rt = this.baseMapper.selectEntity(et);
        Assert.notNull(rt,"数据不存在,商机:"+et.getOpportunityId());
        CachedBeanCopier.copy(rt, et);
        return et;
    }
    
    public List<Opportunity> getByEntities(List<Opportunity> entities) {
        return this.baseMapper.selectEntities(entities);
    }

    public void fillParentData(Opportunity et) {
        
    }

    public Opportunity getDraft(Opportunity et) {
        fillParentData(et);
        return et;
    }

    public boolean checkKey(Opportunity et) {
        return this.count(Wrappers.lambdaQuery(et))>0;
    }

    @Override
    @Transactional
    public boolean create(Opportunity et) {
        fillParentData(et);
        if(!this.retBool(this.baseMapper.insert(et))) 
            return false;
        get(et);
        return true;
    }
    @Transactional
    public boolean createBatch(List<Opportunity> list) {
        list.forEach(et->fillParentData(et));
        this.saveBatch(list, batchSize);        
        return true;
    }

    @Transactional
    public boolean update(Opportunity et) {
        fillParentData(et);
        if(!update(et, (Wrapper) et.getUpdateWrapper(true)
                .eq("opportunityid", et.getOpportunityId())
            )) {
            return false;
        }
        get(et);
        return true;
    }

    @Transactional
    public boolean updateBatch(List<Opportunity> list) {
        list.forEach(et->fillParentData(et));
        updateBatchById(list, batchSize);
        return true;
    }

    @Transactional
    public boolean save(Opportunity et) {
        if(checkKey(et))
            return opportunityService.update(et);
        else
            return opportunityService.create(et);
    }

    @Transactional
    public boolean saveBatch(List<Opportunity> list) {
        List<Opportunity> rt=this.getByEntities(list);
        Set<Serializable> keys=new HashSet<>();
        rt.forEach(et->{
            Serializable key = et.getOpportunityId();
            if(!ObjectUtils.isEmpty(key))
                keys.add(key);
        });
        List<Opportunity> _create=new ArrayList<>();
        List<Opportunity> _update=new ArrayList<>();
        list.forEach(et-> {
            Serializable key = et.getOpportunityId();
            if(keys.contains(key))
                _update.add(et);
            else
                _create.add(et);
        });
        List rtList=new ArrayList<>();
        if(_update.size()>0 && (!opportunityService.updateBatch(_update)))
            return false;
        if(_create.size()>0 && (!opportunityService.createBatch(_create)))
            return false;
        return true;
    }

    @Transactional
    public boolean remove(Opportunity et) {
        String key = et.getOpportunityId();

        if(!remove(new QueryWrapper<Opportunity>()
                .eq("opportunityid", et.getOpportunityId())
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

    public Page<Opportunity> searchDefault(OpportunitySearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Opportunity> pages=baseMapper.searchDefault(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Opportunity>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }
    public List<Opportunity> listDefault(OpportunitySearchContext context) {
        return baseMapper.listDefault(context,context.getSelectCond());
    }

    public List<Opportunity> selectByCustomerId(String customerId) {
        return baseMapper.selectByCustomerId(customerId);
    }

    public boolean removeByCustomerId(String customerId) {
        return this.remove(new QueryWrapper<Opportunity>().eq("customerid",customerId));
    }

    public boolean resetByCustomerId(String customerId) {
        return this.update(new UpdateWrapper<Opportunity>().set("customerid",null).eq("customerid",customerId));
    }

    public boolean saveByCustomerId(String customerId,List<Opportunity> list) {
        if(list==null)
            return true;
        Set<String> delIds=new HashSet<String>();
        List<Opportunity> _update=new ArrayList<Opportunity>();
        List<Opportunity> _create=new ArrayList<Opportunity>();
        for(Opportunity before:selectByCustomerId(customerId)){
            delIds.add(before.getOpportunityId());
        }
        for(Opportunity sub:list) {
            sub.setCustomerId(customerId);
            if(ObjectUtils.isEmpty(sub.getOpportunityId()))
                sub.setOpportunityId((String)sub.getDefaultKey(true));
            if(delIds.contains(sub.getOpportunityId())) {
                delIds.remove(sub.getOpportunityId());
                _update.add(sub);
            }
            else
                _create.add(sub);
        }
        if(_update.size()>0 && (!opportunityService.updateBatch(_update)))
            return false;
        if(_create.size()>0 && (!opportunityService.createBatch(_create)))
            return false;
        if(delIds.size()>0 && (!opportunityService.removeBatch(delIds)))
            return false;
        return true;
    }

    public List<Opportunity> selectByPersonDataId(String personDataId) {
        return baseMapper.selectByPersonDataId(personDataId);
    }

    public boolean removeByPersonDataId(String personDataId) {
        return this.remove(new QueryWrapper<Opportunity>().eq("persondataid",personDataId));
    }

    public boolean resetByPersonDataId(String personDataId) {
        return this.update(new UpdateWrapper<Opportunity>().set("persondataid",null).eq("persondataid",personDataId));
    }

    public boolean saveByPersonDataId(String personDataId,List<Opportunity> list) {
        if(list==null)
            return true;
        Set<String> delIds=new HashSet<String>();
        List<Opportunity> _update=new ArrayList<Opportunity>();
        List<Opportunity> _create=new ArrayList<Opportunity>();
        for(Opportunity before:selectByPersonDataId(personDataId)){
            delIds.add(before.getOpportunityId());
        }
        for(Opportunity sub:list) {
            sub.setPersonDataId(personDataId);
            if(ObjectUtils.isEmpty(sub.getOpportunityId()))
                sub.setOpportunityId((String)sub.getDefaultKey(true));
            if(delIds.contains(sub.getOpportunityId())) {
                delIds.remove(sub.getOpportunityId());
                _update.add(sub);
            }
            else
                _create.add(sub);
        }
        if(_update.size()>0 && (!opportunityService.updateBatch(_update)))
            return false;
        if(_create.size()>0 && (!opportunityService.createBatch(_create)))
            return false;
        if(delIds.size()>0 && (!opportunityService.removeBatch(delIds)))
            return false;
        return true;
    }


}