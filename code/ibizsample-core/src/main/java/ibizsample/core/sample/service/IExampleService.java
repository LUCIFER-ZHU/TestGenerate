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

import ibizsample.core.sample.domain.Example;
import ibizsample.core.sample.filter.ExampleSearchContext;

public interface IExampleService extends IService<Example> {

    Example get(String key);
    List<Example> getByIds(Collection<String> idList);
    List<Example> getByEntities(Collection<Example> entities);

    Example getDraft(Example et);

    boolean checkKey(Example et);

    boolean create(Example et);
    boolean createBatch(List<Example> list);

    boolean update(Example et);
    boolean updateBatch(List<Example> list);

    boolean save(Example et);
    boolean saveBatch(List<Example> list);

    boolean remove(String key);
    boolean removeBatch(Collection<String> idList);

    Example calcPf(Example et);
    boolean calcPfBatch(List<Example> list);

    Example calcPf2(Example et);
    boolean calcPf2Batch(List<Example> list);

    Example clearContent(Example et);
    boolean clearContentBatch(List<Example> list);

    Example prepareCtx(Example et);
    boolean prepareCtxBatch(List<Example> list);

    Page<Example> searchDefault(ExampleSearchContext context);
    List<Example> listDefault(ExampleSearchContext context);

    Page<Example> searchEmpty(ExampleSearchContext context);
    List<Example> listEmpty(ExampleSearchContext context);

    List<Example> selectByCityId(String cityId);
    boolean removeByCityId(String cityId);
    boolean saveByCityId(String cityId,List<Example> list);

    List<Example> selectByDistrictId(String districtId);
    boolean removeByDistrictId(String districtId);
    boolean saveByDistrictId(String districtId,List<Example> list);

    List<Example> selectByProvinceId(String provinceId);
    boolean removeByProvinceId(String provinceId);
    boolean saveByProvinceId(String provinceId,List<Example> list);

}