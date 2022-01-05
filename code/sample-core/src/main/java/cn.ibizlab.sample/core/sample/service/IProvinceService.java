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
import cn.ibizlab.sample.core.sample.domain.Province;
import cn.ibizlab.sample.core.sample.filter.ProvinceSearchContext;

public interface IProvinceService extends IService<Province> {

    Province get(Province et);
    default Province get(String key) {
        return get(new Province().setProvinceId(key));
    }
    default List<Province> getByIds(Collection<String> ids) {
        List<Province> entities =new ArrayList();
        ids.forEach(key -> entities.add(new Province().setProvinceId(key)));
        return getByEntities(entities);
    }
    List<Province> getByEntities(List<Province> entities);

    Province getDraft(Province et);

    boolean checkKey(Province et);

    boolean create(Province et);
    boolean createBatch(List<Province> list);

    boolean update(Province et);
    boolean updateBatch(List<Province> list);

    boolean save(Province et);
    boolean saveBatch(List<Province> list);

    default boolean remove(String key) {
        return remove(new Province().setProvinceId(key));
    }
    boolean remove(Province et);

    boolean removeBatch(Collection<String> ids);

    Page<Province> searchConditions(ProvinceSearchContext context);
    List<Province> listConditions(ProvinceSearchContext context);

    Page<Province> searchDefault(ProvinceSearchContext context);
    List<Province> listDefault(ProvinceSearchContext context);

}