package cn.ibizlab.sample.core.sample.service;

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
import cn.ibizlab.sample.core.sample.domain.Example2;
import cn.ibizlab.sample.core.sample.filter.Example2SearchContext;

public interface IExample2Service extends IService<Example2> {

    Example2 get(Example2 et);
    default Example2 get(String key) {
        return get(new Example2().setExample2Id(key));
    }
    default List<Example2> getByIds(Collection<String> ids) {
        List<Example2> entities =new ArrayList();
        ids.forEach(key -> entities.add(new Example2().setExample2Id(key)));
        return getByEntities(entities);
    }
    List<Example2> getByEntities(List<Example2> entities);

    Example2 getDraft(Example2 et);

    boolean checkKey(Example2 et);

    boolean create(Example2 et);
    boolean createBatch(List<Example2> list);

    boolean update(Example2 et);
    boolean updateBatch(List<Example2> list);

    boolean save(Example2 et);
    boolean saveBatch(List<Example2> list);

    default boolean remove(String key) {
        return remove(new Example2().setExample2Id(key));
    }
    boolean remove(Example2 et);

    boolean removeBatch(Collection<String> ids);

    Page<Example2> searchDefault(Example2SearchContext context);
    List<Example2> listDefault(Example2SearchContext context);

    List<Example2> selectByExampleId(String exampleId);
    boolean removeByExampleId(String exampleId);
    boolean resetByExampleId(String exampleId);
    boolean saveByExampleId(cn.ibizlab.sample.core.sample.domain.Example example,List<Example2> list);
    default boolean saveByExampleId(String exampleId,List<Example2> list) {
        return saveByExampleId(new cn.ibizlab.sample.core.sample.domain.Example().setExampleId(exampleId),list);
    }

}