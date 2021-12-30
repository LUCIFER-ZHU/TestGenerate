package ibizsample.core.sample.service;

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

import ibizsample.core.sample.domain.CounterData2;
import ibizsample.core.sample.filter.CounterData2SearchContext;

public interface ICounterData2Service extends IService<CounterData2> {

    CounterData2 get(String key);
    List<CounterData2> getByIds(Collection<String> idList);
    List<CounterData2> getByEntities(Collection<CounterData2> entities);

    CounterData2 getDraft(CounterData2 et);

    boolean checkKey(CounterData2 et);

    boolean create(CounterData2 et);
    boolean createBatch(List<CounterData2> list);

    boolean update(CounterData2 et);
    boolean updateBatch(List<CounterData2> list);

    boolean save(CounterData2 et);
    boolean saveBatch(List<CounterData2> list);

    boolean remove(String key);
    boolean removeBatch(Collection<String> idList);

    CounterData2 getRandom(CounterData2 et);
    boolean getRandomBatch(List<CounterData2> list);

    Page<CounterData2> searchDefault(CounterData2SearchContext context);
    List<CounterData2> listDefault(CounterData2SearchContext context);

}