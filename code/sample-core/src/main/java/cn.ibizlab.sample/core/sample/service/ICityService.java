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
import cn.ibizlab.sample.core.sample.domain.City;
import cn.ibizlab.sample.core.sample.filter.CitySearchContext;

public interface ICityService extends IService<City> {

    City get(City et);
    default City get(String key) {
        return get(new City().setCityId(key));
    }
    default List<City> getByIds(Collection<String> ids) {
        List<City> entities =new ArrayList();
        ids.forEach(key -> entities.add(new City().setCityId(key)));
        return getByEntities(entities);
    }
    List<City> getByEntities(List<City> entities);

    City getDraft(City et);

    boolean checkKey(City et);

    boolean create(City et);
    boolean createBatch(List<City> list);

    boolean update(City et);
    boolean updateBatch(List<City> list);

    boolean save(City et);
    boolean saveBatch(List<City> list);

    default boolean remove(String key) {
        return remove(new City().setCityId(key));
    }
    boolean remove(City et);

    boolean removeBatch(Collection<String> ids);

    Page<City> searchDefault(CitySearchContext context);
    List<City> listDefault(CitySearchContext context);

    List<City> selectByProvinceId(String provinceId);
    boolean removeByProvinceId(String provinceId);
    boolean resetByProvinceId(String provinceId);
    boolean saveByProvinceId(String provinceId,List<City> list);

}