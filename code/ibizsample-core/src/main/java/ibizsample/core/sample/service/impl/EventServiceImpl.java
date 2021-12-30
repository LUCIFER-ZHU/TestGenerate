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
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cglib.beans.BeanCopier;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.util.ObjectUtils;
import org.springframework.util.StringUtils;
import org.springframework.beans.factory.annotation.Value;
import ibizsample.util.errors.BadRequestAlertException;
<#system.enableGlobalTransaction>
import io.seata.spring.annotation.GlobalTransactional;
</system.enableGlobalTransaction>
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Lazy;
import ibizsample.core.sample.domain.Event;
import ibizsample.core.sample.filter.EventSearchContext;
import ibizsample.core.sample.service.IEventService;
import ibizsample.core.sample.mapper.${item.getCodeName()}Mapper;
import ibizsample.util.helper.CachedBeanCopier;
import ibizsample.util.helper.DEFieldCacheMap;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.conditions.Wrapper;


/**
 * 实体[事件] 服务对象接口实现
 */
@Slf4j
@Service("EventServiceImpl")
public class EventServiceImpl extends ServiceImpl<Event> implements IEventService {

    protected IEventService eventService = SpringContextHolder.getBean(this.getClass());



    public Event get(String key) {
        Event et = getById(key);
        Assert.notNull(et,"数据不存在,事件:"+key);
    }
    List<Event> getByIds(Collection<String> idList);
    List<Event> getByEntities(Collection<Event> entities);

    Event getDraft(Event et);

    boolean checkKey(Event et);

    @Override
    @Transactional
    public boolean create(Event et) {
        if(!this.retBool(this.baseMapper.insert(et))) 
            return false;
        return true;
    }
    @Transactional
    public boolean createBatch(List<Event> list) {

    }

    boolean update(Event et);
    boolean updateBatch(List<Event> list);

    boolean save(Event et);
    boolean saveBatch(List<Event> list);

    boolean remove(String key);
    boolean removeBatch(Collection<String> idList);

    Event (Event et);
    boolean Batch(List<Event> list);

    Page<Event> searchDefault(EventSearchContext context);
    List<Event> listDefault(EventSearchContext context);


}