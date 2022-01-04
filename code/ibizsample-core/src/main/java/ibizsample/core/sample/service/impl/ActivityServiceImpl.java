package ibizsample.core.sample.service.impl;

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
import ibizsample.core.sample.domain.Activity;
import ibizsample.core.sample.filter.ActivitySearchContext;
import ibizsample.core.sample.service.IActivityService;
import ibizsample.core.sample.mapper.ActivityMapper;
import cn.ibizlab.util.helper.CachedBeanCopier;
import cn.ibizlab.util.helper.DEFieldCacheMap;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.core.conditions.Wrapper;


/**
 * 实体[活动] 服务对象接口实现
 */
@Slf4j
@Service("ActivityServiceImpl")
public class ActivityServiceImpl extends ServiceImpl<ActivityMapper,Activity> implements IActivityService {

    protected IActivityService activityService = SpringContextHolder.getBean(this.getClass());

    @Autowired
    @Lazy
    protected ibizsample.core.sample.service.ICustomerService customerService;
   

    protected int batchSize = 500;

    public Activity get(Activity et) {
        Activity rt = this.baseMapper.selectEntity(et);
        Assert.notNull(rt,"数据不存在,活动:"+et.getActivityId());
        CachedBeanCopier.copy(rt, et);
        return et;
    }
    
    public List<Activity> getByEntities(List<Activity> entities) {
        return this.baseMapper.selectEntities(entities);
    }

    public void fillParentData(Activity et) {
        
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
            return activityService.update(et);
        else
            return activityService.create(et);
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
        List<Activity> create=new ArrayList<>();
        List<Activity> update=new ArrayList<>();
        list.forEach(et-> {
            Serializable key = et.getActivityId();
            if(keys.contains(key))
                update.add(et);
            else
                create.add(et);
        });
        List rtList=new ArrayList<>();
        if(update.size()>0 && (!activityService.updateBatch(update)))
            return false;
        if(create.size()>0 && (!activityService.createBatch(create)))
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
        removeByIds(ids);
        return true;
    }

    public Page<Activity> searchDefault(ActivitySearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Activity> pages=baseMapper.searchDefault(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Activity>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }
    public List<Activity> listDefault(ActivitySearchContext context) {
        return baseMapper.listDefault(context,context.getSelectCond());
    }

    public Page<Activity> searchEmail(ActivitySearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Activity> pages=baseMapper.searchEmail(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Activity>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }
    public List<Activity> listEmail(ActivitySearchContext context) {
        return baseMapper.listEmail(context,context.getSelectCond());
    }

    public Page<Activity> searchMeeting(ActivitySearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Activity> pages=baseMapper.searchMeeting(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Activity>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }
    public List<Activity> listMeeting(ActivitySearchContext context) {
        return baseMapper.listMeeting(context,context.getSelectCond());
    }

    public Page<Activity> searchOther(ActivitySearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Activity> pages=baseMapper.searchOther(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Activity>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }
    public List<Activity> listOther(ActivitySearchContext context) {
        return baseMapper.listOther(context,context.getSelectCond());
    }

    public Page<Activity> searchPhone(ActivitySearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Activity> pages=baseMapper.searchPhone(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Activity>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }
    public List<Activity> listPhone(ActivitySearchContext context) {
        return baseMapper.listPhone(context,context.getSelectCond());
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

    public boolean saveByCustomerId(String customerId,List<Activity> list) {
        if(list==null)
            return true;
        Set<String> delIds=new HashSet<String>();
        List<Activity> _update=new ArrayList<Activity>();
        List<Activity> _create=new ArrayList<Activity>();
        for(Activity before:selectByCustomerId(customerId)){
            delIds.add(before.getActivityId());
        }
        for(Activity sub:list) {
            sub.setCustomerId(customerId);
            if(ObjectUtils.isEmpty(sub.getActivityId()))
                sub.setActivityId((String)sub.getDefaultKey(true));
            if(delIds.contains(sub.getActivityId())) {
                delIds.remove(sub.getActivityId());
                _update.add(sub);
            }
            else
                _create.add(sub);
        }
        if(_update.size()>0 && (!activityService.updateBatch(_update)))
            return false;
        if(_create.size()>0 && (!activityService.createBatch(_create)))
            return false;
        if(delIds.size()>0 && (!activityService.removeBatch(delIds)))
            return false;
        return true;
    }


}