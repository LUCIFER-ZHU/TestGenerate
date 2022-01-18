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
import cn.ibizlab.sample.core.sample.domain.ImpExpData;
import cn.ibizlab.sample.core.sample.filter.ImpExpDataSearchContext;

public interface IImpExpDataService extends IService<ImpExpData> {

    ImpExpData get(ImpExpData et);
    default ImpExpData get(String key) {
        return get(new ImpExpData().setImpExpDataId(key));
    }
    default List<ImpExpData> getByIds(Collection<String> ids) {
        List<ImpExpData> entities =new ArrayList();
        ids.forEach(key -> entities.add(new ImpExpData().setImpExpDataId(key)));
        return getByEntities(entities);
    }
    List<ImpExpData> getByEntities(List<ImpExpData> entities);

    ImpExpData getDraft(ImpExpData et);

    boolean checkKey(ImpExpData et);

    boolean create(ImpExpData et);
    boolean createBatch(List<ImpExpData> list);

    boolean update(ImpExpData et);
    boolean updateBatch(List<ImpExpData> list);

    boolean save(ImpExpData et);
    boolean saveBatch(List<ImpExpData> list);

    default boolean remove(String key) {
        return remove(new ImpExpData().setImpExpDataId(key));
    }
    boolean remove(ImpExpData et);

    boolean removeBatch(Collection<String> ids);

    Page<ImpExpData> searchDefault(ImpExpDataSearchContext context);
    List<ImpExpData> listDefault(ImpExpDataSearchContext context);

    List<ImpExpData> selectByCustomerId(String customerId);
    boolean removeByCustomerId(String customerId);
    boolean resetByCustomerId(String customerId);
    boolean saveByCustomerId(cn.ibizlab.sample.core.sample.domain.Customer customer,List<ImpExpData> list);
    default boolean saveByCustomerId(String customerId,List<ImpExpData> list) {
        return saveByCustomerId(new cn.ibizlab.sample.core.sample.domain.Customer().setCustomerId(customerId),list);
    }

}