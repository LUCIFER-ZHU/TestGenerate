package ibizsample.sample.service;

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
import om.baomidou.dynamic.datasource.annotation.DS;

import ibizsample.sample.domain.Event;
import ibizsample.sample.filter.EventSearchContext;

public interface IEventService extends IService<Event> {

    Event get(String key);
    List<Event> getByIds(Collection<String> idList);
    List<Event> getByEntities(Collection<Event> entities);

    Event getDraft(Event et);

    boolean checkKey(Event et);

    boolean create(Event et);
    boolean createBatch(List<Event> list);

    boolean update(Event et);
    boolean updateBatch(List<Event> list);

    boolean save(Event et);
    boolean saveBatch(List<Event> list);

    boolean remove(String key);
    boolean removeBatch(Collection<String> idList);

    Page<Event> searchDefault(EventSearchContext context);
    List<Event> listDefault(EventSearchContext context);

}