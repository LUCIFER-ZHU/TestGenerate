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
import doc.core.sample.domain.CounterData2;
import doc.core.sample.filter.CounterData2SearchContext;

public interface ICounterData2Service extends IService<CounterData2> {

    CounterData2 get(CounterData2 et);
    default CounterData2 get(String key) {
        return get(new CounterData2().setCounterData2Id(key));
    }
    default List<CounterData2> getByIds(Collection<String> ids) {
        List<CounterData2> entities =new ArrayList();
        ids.forEach(key -> entities.add(new CounterData2().setCounterData2Id(key)));
        return getByEntities(entities);
    }
    List<CounterData2> getByEntities(List<CounterData2> entities);

    CounterData2 getDraft(CounterData2 et);

    boolean checkKey(CounterData2 et);

    boolean create(CounterData2 et);
    boolean createBatch(List<CounterData2> list);

    boolean update(CounterData2 et);
    boolean updateBatch(List<CounterData2> list);

    boolean save(CounterData2 et);
    boolean saveBatch(List<CounterData2> list);

    default boolean remove(String key) {
        return remove(new CounterData2().setCounterData2Id(key));
    }
    boolean remove(CounterData2 et);

    boolean removeBatch(Collection<String> ids);

    CounterData2 getRandom(CounterData2 et);
    boolean getRandomBatch(List<CounterData2> list);

    Page<CounterData2> searchDefault(CounterData2SearchContext context);
    List<CounterData2> listDefault(CounterData2SearchContext context);

}