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
import doc.core.sample.domain.CounterData;
import doc.core.sample.filter.CounterDataSearchContext;

public interface ICounterDataService extends IService<CounterData> {

    CounterData get(CounterData et);
    default CounterData get(String key) {
        return get(new CounterData().setCounterDataId(key));
    }
    default List<CounterData> getByIds(Collection<String> ids) {
        List<CounterData> entities =new ArrayList();
        ids.forEach(key -> entities.add(new CounterData().setCounterDataId(key)));
        return getByEntities(entities);
    }
    List<CounterData> getByEntities(List<CounterData> entities);

    CounterData getDraft(CounterData et);

    boolean checkKey(CounterData et);

    boolean create(CounterData et);
    boolean createBatch(List<CounterData> list);

    boolean update(CounterData et);
    boolean updateBatch(List<CounterData> list);

    boolean save(CounterData et);
    boolean saveBatch(List<CounterData> list);

    default boolean remove(String key) {
        return remove(new CounterData().setCounterDataId(key));
    }
    boolean remove(CounterData et);

    boolean removeBatch(Collection<String> ids);

    Page<CounterData> searchDefault(CounterDataSearchContext context);
    List<CounterData> listDefault(CounterDataSearchContext context);

}