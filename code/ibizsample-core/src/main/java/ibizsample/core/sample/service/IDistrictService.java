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

import ibizsample.core.sample.domain.District;
import ibizsample.core.sample.filter.DistrictSearchContext;

public interface IDistrictService extends IService<District> {

    District get(String key);
    List<District> getByIds(Collection<String> idList);
    List<District> getByEntities(Collection<District> entities);

    District getDraft(District et);

    boolean checkKey(District et);

    boolean create(District et);
    boolean createBatch(List<District> list);

    boolean update(District et);
    boolean updateBatch(List<District> list);

    boolean save(District et);
    boolean saveBatch(List<District> list);

    boolean remove(String key);
    boolean removeBatch(Collection<String> idList);

    Page<District> searchDefault(DistrictSearchContext context);
    List<District> listDefault(DistrictSearchContext context);

    List<District> selectByCityId(String cityId);
    boolean removeByCityId(String cityId);
    boolean saveByCityId(String cityId,List<District> list);

}