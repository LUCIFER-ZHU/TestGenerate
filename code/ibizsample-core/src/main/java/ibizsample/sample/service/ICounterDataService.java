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

import ibizsample.sample.domain.CounterData;
import ibizsample.sample.filter.CounterDataSearchContext;

public interface ICounterDataService extends IService<CounterData> {

    CounterData get(String key);
    List<CounterData> getByIds(Collection<String> idList);
    List<CounterData> getByEntities(Collection<CounterData> entities);

    CounterData getDraft(CounterData et);

    boolean checkKey(CounterData et);

    boolean create(CounterData et);
    boolean createBatch(List<CounterData> list);

    boolean update(CounterData et);
    boolean updateBatch(List<CounterData> list);

    boolean save(CounterData et);
    boolean saveBatch(List<CounterData> list);

    boolean remove(String key);
    boolean removeBatch(Collection<String> idList);

    Page<CounterData> searchDefault(CounterDataSearchContext context);
    List<CounterData> listDefault(CounterDataSearchContext context);

}