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
import ibizsample.core.sample.domain.LeaveApplication;
import ibizsample.core.sample.filter.LeaveApplicationSearchContext;
import ibizsample.core.sample.service.ILeaveApplicationService;
import ibizsample.core.sample.mapper.LeaveApplicationMapper;
import cn.ibizlab.util.helper.CachedBeanCopier;
import cn.ibizlab.util.helper.DEFieldCacheMap;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.core.conditions.Wrapper;


/**
 * 实体[请假申请] 服务对象接口实现
 */
@Slf4j
@Service("LeaveApplicationServiceImpl")
public class LeaveApplicationServiceImpl extends ServiceImpl<LeaveApplicationMapper,LeaveApplication> implements ILeaveApplicationService {

    protected ILeaveApplicationService leaveApplicationService = SpringContextHolder.getBean(this.getClass());

    @Autowired
    @Lazy
    protected ibizsample.core.sample.service.ICustomerService customerService;
   

    protected int batchSize = 500;

    public LeaveApplication get(LeaveApplication et) {
        LeaveApplication rt = this.baseMapper.selectEntity(et);
        Assert.notNull(rt,"数据不存在,请假申请:"+et.getLeaveApplicationId());
        CachedBeanCopier.copy(rt, et);
        return et;
    }
    
    public List<LeaveApplication> getByEntities(List<LeaveApplication> entities) {
        return this.baseMapper.selectEntities(entities);
    }

    public void fillParentData(LeaveApplication et) {
        
    }

    public LeaveApplication getDraft(LeaveApplication et) {
        fillParentData(et);
        return et;
    }

    public boolean checkKey(LeaveApplication et) {
        return this.count(Wrappers.lambdaQuery(et))>0;
    }

    @Override
    @Transactional
    public boolean create(LeaveApplication et) {
        fillParentData(et);
        if(!this.retBool(this.baseMapper.insert(et))) 
            return false;
        get(et);
        return true;
    }
    @Transactional
    public boolean createBatch(List<LeaveApplication> list) {
        list.forEach(et->fillParentData(et));
        this.saveBatch(list, batchSize);        
        return true;
    }

    @Transactional
    public boolean update(LeaveApplication et) {
        fillParentData(et);
        if(!update(et, (Wrapper) et.getUpdateWrapper(true)
                .eq("leaveapplicationid", et.getLeaveApplicationId())
            )) {
            return false;
        }
        get(et);
        return true;
    }

    @Transactional
    public boolean updateBatch(List<LeaveApplication> list) {
        list.forEach(et->fillParentData(et));
        updateBatchById(list, batchSize);
        return true;
    }

    @Transactional
    public boolean save(LeaveApplication et) {
        if(checkKey(et))
            return leaveApplicationService.update(et);
        else
            return leaveApplicationService.create(et);
    }

    @Transactional
    public boolean saveBatch(List<LeaveApplication> list) {
        List<LeaveApplication> rt=this.getByEntities(list);
        Set<Serializable> keys=new HashSet<>();
        rt.forEach(et->{
            Serializable key = et.getLeaveApplicationId();
            if(!ObjectUtils.isEmpty(key))
                keys.add(key);
        });
        List<LeaveApplication> create=new ArrayList<>();
        List<LeaveApplication> update=new ArrayList<>();
        list.forEach(et-> {
            Serializable key = et.getLeaveApplicationId();
            if(keys.contains(key))
                update.add(et);
            else
                create.add(et);
        });
        List rtList=new ArrayList<>();
        if(update.size()>0 && (!leaveApplicationService.updateBatch(update)))
            return false;
        if(create.size()>0 && (!leaveApplicationService.createBatch(create)))
            return false;
        return true;
    }

    @Transactional
    public boolean remove(LeaveApplication et) {
        String key = et.getLeaveApplicationId();

        if(!remove(new QueryWrapper<LeaveApplication>()
                .eq("leaveapplicationid", et.getLeaveApplicationId())
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

    @Transactional
    public LeaveApplication a(LeaveApplication et) {
        return et;
    }
    @Transactional
    public boolean aBatch(List<LeaveApplication> list) {
        return true;
    }

    @Transactional
    public LeaveApplication wfError(LeaveApplication et) {
        return et;
    }
    @Transactional
    public boolean wfErrorBatch(List<LeaveApplication> list) {
        return true;
    }

    @Transactional
    public LeaveApplication wfFinish(LeaveApplication et) {
        return et;
    }
    @Transactional
    public boolean wfFinishBatch(List<LeaveApplication> list) {
        return true;
    }

    @Transactional
    public LeaveApplication wfInit(LeaveApplication et) {
        return et;
    }
    @Transactional
    public boolean wfInitBatch(List<LeaveApplication> list) {
        return true;
    }

    @Transactional
    public LeaveApplication wfStart(LeaveApplication et) {
        return et;
    }
    @Transactional
    public boolean wfStartBatch(List<LeaveApplication> list) {
        return true;
    }

    @Transactional
    public LeaveApplication wfUpdate(LeaveApplication et) {
        return et;
    }
    @Transactional
    public boolean wfUpdateBatch(List<LeaveApplication> list) {
        return true;
    }

    public Page<LeaveApplication> searchDefault(LeaveApplicationSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<LeaveApplication> pages=baseMapper.searchDefault(context.getPages(),context,context.getSelectCond());
        return new PageImpl<LeaveApplication>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }
    public List<LeaveApplication> listDefault(LeaveApplicationSearchContext context) {
        return baseMapper.listDefault(context,context.getSelectCond());
    }

    public List<LeaveApplication> selectByCustomerId(String customerId) {
        return baseMapper.selectByCustomerId(customerId);
    }

    public boolean removeByCustomerId(String customerId) {
        return this.remove(new QueryWrapper<LeaveApplication>().eq("customerid",customerId));
    }

    public boolean resetByCustomerId(String customerId) {
        return this.update(new UpdateWrapper<LeaveApplication>().set("customerid",null).eq("customerid",customerId));
    }

    public boolean saveByCustomerId(String customerId,List<LeaveApplication> list) {
        if(list==null)
            return true;
        Set<String> delIds=new HashSet<String>();
        List<LeaveApplication> _update=new ArrayList<LeaveApplication>();
        List<LeaveApplication> _create=new ArrayList<LeaveApplication>();
        for(LeaveApplication before:selectByCustomerId(customerId)){
            delIds.add(before.getLeaveApplicationId());
        }
        for(LeaveApplication sub:list) {
            sub.setCustomerId(customerId);
            if(ObjectUtils.isEmpty(sub.getLeaveApplicationId()))
                sub.setLeaveApplicationId((String)sub.getDefaultKey(true));
            if(delIds.contains(sub.getLeaveApplicationId())) {
                delIds.remove(sub.getLeaveApplicationId());
                _update.add(sub);
            }
            else
                _create.add(sub);
        }
        if(_update.size()>0 && (!leaveApplicationService.updateBatch(_update)))
            return false;
        if(_create.size()>0 && (!leaveApplicationService.createBatch(_create)))
            return false;
        if(delIds.size()>0 && (!leaveApplicationService.removeBatch(delIds)))
            return false;
        return true;
    }


}