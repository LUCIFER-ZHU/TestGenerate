package doc.core.sample.service.impl;

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
import doc.core.sample.domain.Activity;
import doc.core.sample.filter.ActivitySearchContext;
import doc.core.sample.service.IActivityService;
import doc.core.sample.mapper.ActivityMapper;
import cn.ibizlab.util.helper.CachedBeanCopier;
import cn.ibizlab.util.helper.DEFieldCacheMap;
import cn.ibizlab.util.security.AuthenticationUser;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import doc.core.sample.domain.Customer;
import doc.core.sample.service.ICustomerService;   


/**
 * 实体[活动] 服务对象接口实现
 */
@Slf4j
@Service("ActivityService")
public class ActivityServiceImpl extends ServiceImpl<ActivityMapper,Activity> implements IActivityService {

    protected IActivityService getProxyService() {
        return SpringContextHolder.getBean(this.getClass());
    }

    @Autowired
    @Lazy
    protected ICustomerService customerService;
   

    protected int batchSize = 500;

    public Activity get(Activity et) {
        Activity rt = this.baseMapper.selectEntity(et);
        Assert.notNull(rt,"数据不存在,活动:"+et.getActivityId());
        BeanUtils.copyProperties(rt, et);
        return et;
    }
    
    public List<Activity> getByEntities(List<Activity> entities) {
        return this.baseMapper.selectEntities(entities);
    }

    public void fillParentData(Activity et) {
        if(!ObjectUtils.isEmpty(et.getCustomerId())) {
            Customer customer = et.getCustomer();
            if(!ObjectUtils.isEmpty(customer)) {
                et.setCustomerName(customer.getCustomerName());   
            }
        }    
    }

    public Activity getDraft(Activity et) {
        fillParentData(et);
        return et;
    }

    public boolean checkKey(Activity et) {
        return this.count(Wrappers.lambdaQuery(et))>0;
    }

    @Override
    @Transactional
    public boolean create(Activity et) {
        fillParentData(et);
        if(!this.retBool(this.baseMapper.insert(et))) 
            return false;
        get(et);
        return true;
    }
    @Transactional
    public boolean createBatch(List<Activity> list) {
        list.forEach(et->fillParentData(et));
        this.saveBatch(list, batchSize);        
        return true;
    }

    @Transactional
    public boolean update(Activity et) {
        fillParentData(et);
        if(!update(et, (Wrapper) et.getUpdateWrapper(true)
                .eq("activityid", et.getActivityId())
            )) {
            return false;
        }
        get(et);
        return true;
    }

    @Transactional
    public boolean updateBatch(List<Activity> list) {
        list.forEach(et->fillParentData(et));
        updateBatchById(list, batchSize);
        return true;
    }

    @Transactional
    public boolean save(Activity et) {
        if(checkKey(et))
            return getProxyService().update(et);
        else
            return getProxyService().create(et);
    }

    @Transactional
    public boolean saveBatch(List<Activity> list) {
        List<Activity> rt=this.getByEntities(list);
        Set<Serializable> keys=new HashSet<>();
        rt.forEach(et->{
            Serializable key = et.getActivityId();
            if(!ObjectUtils.isEmpty(key))
                keys.add(key);
        });
        List<Activity> _create=new ArrayList<>();
        List<Activity> _update=new ArrayList<>();
        list.forEach(et-> {
            Serializable key = et.getActivityId();
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
    public boolean remove(Activity et) {
        String key = et.getActivityId();

        if(!remove(new QueryWrapper<Activity>()
                .eq("activityid", et.getActivityId())
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

    public Page<Activity> searchDefault(ActivitySearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Activity> pages=baseMapper.searchDefault(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Activity>(com.alibaba.fastjson.JSON.parseArray(com.alibaba.fastjson.JSON.toJSONString(pages.getRecords()),Activity.class), context.getPageable(), pages.getTotal());
    }
    public List<Activity> listDefault(ActivitySearchContext context) {
        return com.alibaba.fastjson.JSON.parseArray(com.alibaba.fastjson.JSON.toJSONString(baseMapper.listDefault(context,context.getSelectCond())),Activity.class);
    }

    public Page<Activity> searchEmail(ActivitySearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Activity> pages=baseMapper.searchEmail(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Activity>(com.alibaba.fastjson.JSON.parseArray(com.alibaba.fastjson.JSON.toJSONString(pages.getRecords()),Activity.class), context.getPageable(), pages.getTotal());
    }
    public List<Activity> listEmail(ActivitySearchContext context) {
        return com.alibaba.fastjson.JSON.parseArray(com.alibaba.fastjson.JSON.toJSONString(baseMapper.listEmail(context,context.getSelectCond())),Activity.class);
    }

    public Page<Activity> searchMeeting(ActivitySearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Activity> pages=baseMapper.searchMeeting(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Activity>(com.alibaba.fastjson.JSON.parseArray(com.alibaba.fastjson.JSON.toJSONString(pages.getRecords()),Activity.class), context.getPageable(), pages.getTotal());
    }
    public List<Activity> listMeeting(ActivitySearchContext context) {
        return com.alibaba.fastjson.JSON.parseArray(com.alibaba.fastjson.JSON.toJSONString(baseMapper.listMeeting(context,context.getSelectCond())),Activity.class);
    }

    public Page<Activity> searchOther(ActivitySearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Activity> pages=baseMapper.searchOther(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Activity>(com.alibaba.fastjson.JSON.parseArray(com.alibaba.fastjson.JSON.toJSONString(pages.getRecords()),Activity.class), context.getPageable(), pages.getTotal());
    }
    public List<Activity> listOther(ActivitySearchContext context) {
        return com.alibaba.fastjson.JSON.parseArray(com.alibaba.fastjson.JSON.toJSONString(baseMapper.listOther(context,context.getSelectCond())),Activity.class);
    }

    public Page<Activity> searchPhone(ActivitySearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Activity> pages=baseMapper.searchPhone(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Activity>(com.alibaba.fastjson.JSON.parseArray(com.alibaba.fastjson.JSON.toJSONString(pages.getRecords()),Activity.class), context.getPageable(), pages.getTotal());
    }
    public List<Activity> listPhone(ActivitySearchContext context) {
        return com.alibaba.fastjson.JSON.parseArray(com.alibaba.fastjson.JSON.toJSONString(baseMapper.listPhone(context,context.getSelectCond())),Activity.class);
    }

    public List<Activity> selectByCustomerId(String customerId) {
        return baseMapper.selectByCustomerId(customerId);
    }

    public boolean removeByCustomerId(String customerId) {
        return this.remove(new QueryWrapper<Activity>().eq("customerid",customerId));
    }

    public boolean resetByCustomerId(String customerId) {
        return this.update(new UpdateWrapper<Activity>().set("customerid",null).eq("customerid",customerId));
    }

    public boolean saveByCustomerId(Customer customer,List<Activity> list) {
        if(list==null)
            return true;
        Set<String> delIds=new HashSet<String>();
        List<Activity> _update=new ArrayList<Activity>();
        List<Activity> _create=new ArrayList<Activity>();
        for(Activity before:selectByCustomerId(customer.getCustomerId())){
            delIds.add(before.getActivityId());
        }
        for(Activity sub:list) {
            sub.setCustomerId(customer.getCustomerId());
            sub.setCustomer(customer);
            if(ObjectUtils.isEmpty(sub.getActivityId()))
                sub.setActivityId((String)sub.getDefaultKey(true));
            if(delIds.contains(sub.getActivityId())) {
                delIds.remove(sub.getActivityId());
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