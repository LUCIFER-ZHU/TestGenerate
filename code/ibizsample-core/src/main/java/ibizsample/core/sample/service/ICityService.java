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

import ibizsample.core.sample.domain.City;
import ibizsample.core.sample.filter.CitySearchContext;

public interface ICityService extends IService<City> {

    City get(String key);
    List<City> getByIds(Collection<String> idList);
    List<City> getByEntities(Collection<City> entities);

    City getDraft(City et);

    boolean checkKey(City et);

    boolean create(City et);
    boolean createBatch(List<City> list);

    boolean update(City et);
    boolean updateBatch(List<City> list);

    boolean save(City et);
    boolean saveBatch(List<City> list);

    boolean remove(String key);
    boolean removeBatch(Collection<String> idList);

    Page<City> searchDefault(CitySearchContext context);
    List<City> listDefault(CitySearchContext context);

    List<City> selectByProvinceId(String provinceId);
    boolean removeByProvinceId(String provinceId);
    boolean saveByProvinceId(String provinceId,List<City> list);

}