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
import cn.ibizlab.sample.core.sample.domain.Event;
import cn.ibizlab.sample.core.sample.filter.EventSearchContext;
import cn.ibizlab.sample.core.sample.service.IEventService;
import cn.ibizlab.sample.core.sample.mapper.EventMapper;
import cn.ibizlab.util.helper.CachedBeanCopier;
import cn.ibizlab.util.helper.DEFieldCacheMap;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.core.conditions.Wrapper;


/**
 * 实体[事件] 服务对象接口实现
 */
@Slf4j
@Service("EventServiceImpl")
public class EventServiceImpl extends ServiceImpl<EventMapper,Event> implements IEventService {

    protected IEventService eventService = SpringContextHolder.getBean(this.getClass());


    protected int batchSize = 500;

    public Event get(Event et) {
        Event rt = this.baseMapper.selectEntity(et);
        Assert.notNull(rt,"数据不存在,事件:"+et.getEventId());
        CachedBeanCopier.copy(rt, et);
        return et;
    }
    
    public List<Event> getByEntities(List<Event> entities) {
        return this.baseMapper.selectEntities(entities);
    }


    public Event getDraft(Event et) {
        return et;
    }

    public boolean checkKey(Event et) {
        return this.count(Wrappers.lambdaQuery(et))>0;
    }

    @Override
    @Transactional
    public boolean create(Event et) {
        if(!this.retBool(this.baseMapper.insert(et))) 
            return false;
        get(et);
        return true;
    }
    @Transactional
    public boolean createBatch(List<Event> list) {
        this.saveBatch(list, batchSize);        
        return true;
    }

    @Transactional
    public boolean update(Event et) {
        if(!update(et, (Wrapper) et.getUpdateWrapper(true)
                .eq("eventid", et.getEventId())
            )) {
            return false;
        }
        get(et);
        return true;
    }

    @Transactional
    public boolean updateBatch(List<Event> list) {
        updateBatchById(list, batchSize);
        return true;
    }

    @Transactional
    public boolean save(Event et) {
        if(checkKey(et))
            return eventService.update(et);
        else
            return eventService.create(et);
    }

    @Transactional
    public boolean saveBatch(List<Event> list) {
        List<Event> rt=this.getByEntities(list);
        Set<Serializable> keys=new HashSet<>();
        rt.forEach(et->{
            Serializable key = et.getEventId();
            if(!ObjectUtils.isEmpty(key))
                keys.add(key);
        });
        List<Event> _create=new ArrayList<>();
        List<Event> _update=new ArrayList<>();
        list.forEach(et-> {
            Serializable key = et.getEventId();
            if(keys.contains(key))
                _update.add(et);
            else
                _create.add(et);
        });
        List rtList=new ArrayList<>();
        if(_update.size()>0 && (!eventService.updateBatch(_update)))
            return false;
        if(_create.size()>0 && (!eventService.createBatch(_create)))
            return false;
        return true;
    }

    @Transactional
    public boolean remove(Event et) {
        String key = et.getEventId();

        if(!remove(new QueryWrapper<Event>()
                .eq("eventid", et.getEventId())
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

    public Page<Event> searchDefault(EventSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Event> pages=baseMapper.searchDefault(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Event>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }
    public List<Event> listDefault(EventSearchContext context) {
        return baseMapper.listDefault(context,context.getSelectCond());
    }


}