package doc.core.sample.service;

import java.io.Serializable;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.HashMap;
import java.util.Collection;
import java.math.BigInteger;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.scheduling.annotation.Async;
import com.alibaba.fastjson.JSONObject;
import org.springframework.cache.annotation.CacheEvict;

import com.baomidou.mybatisplus.extension.service.IService;
import com.baomidou.dynamic.datasource.annotation.DS;
import cn.ibizlab.util.helper.CachedBeanCopier;
import doc.core.sample.domain.Event;
import doc.core.sample.filter.EventSearchContext;

public interface IEventService extends IService<Event> {

    Event get(Event et);
    default Event get(String key) {
        return get(new Event().setEventId(key));
    }
    default List<Event> getByIds(Collection<String> ids) {
        List<Event> entities =new ArrayList();
        ids.forEach(key -> entities.add(new Event().setEventId(key)));
        return getByEntities(entities);
    }
    List<Event> getByEntities(List<Event> entities);

    Event getDraft(Event et);

    boolean checkKey(Event et);

    boolean create(Event et);
    boolean createBatch(List<Event> list);

    boolean update(Event et);
    boolean updateBatch(List<Event> list);

    boolean save(Event et);
    boolean saveBatch(List<Event> list);

    default boolean remove(String key) {
        return remove(new Event().setEventId(key));
    }
    boolean remove(Event et);

    boolean removeBatch(Collection<String> ids);

    Page<Event> searchDefault(EventSearchContext context);
    List<Event> listDefault(EventSearchContext context);

}