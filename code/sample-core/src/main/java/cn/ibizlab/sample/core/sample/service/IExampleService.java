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
import cn.ibizlab.sample.core.sample.domain.Example;
import cn.ibizlab.sample.core.sample.filter.ExampleSearchContext;

public interface IExampleService extends IService<Example> {

    Example get(Example et);
    default Example get(String key) {
        return get(new Example().setExampleId(key));
    }
    default List<Example> getByIds(Collection<String> ids) {
        List<Example> entities =new ArrayList();
        ids.forEach(key -> entities.add(new Example().setExampleId(key)));
        return getByEntities(entities);
    }
    List<Example> getByEntities(List<Example> entities);

    Example getDraft(Example et);

    boolean checkKey(Example et);

    boolean create(Example et);
    boolean createBatch(List<Example> list);

    boolean update(Example et);
    boolean updateBatch(List<Example> list);

    boolean save(Example et);
    boolean saveBatch(List<Example> list);

    default boolean remove(String key) {
        return remove(new Example().setExampleId(key));
    }
    boolean remove(Example et);

    boolean removeBatch(Collection<String> ids);

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
    boolean resetByCityId(String cityId);
    boolean saveByCityId(cn.ibizlab.sample.core.sample.domain.City city,List<Example> list);
    default boolean saveByCityId(String cityId,List<Example> list) {
        return saveByCityId(new cn.ibizlab.sample.core.sample.domain.City().setCityId(cityId),list);
    }

    List<Example> selectByDistrictId(String districtId);
    boolean removeByDistrictId(String districtId);
    boolean resetByDistrictId(String districtId);
    boolean saveByDistrictId(cn.ibizlab.sample.core.sample.domain.District district,List<Example> list);
    default boolean saveByDistrictId(String districtId,List<Example> list) {
        return saveByDistrictId(new cn.ibizlab.sample.core.sample.domain.District().setDistrictId(districtId),list);
    }

    List<Example> selectByProvinceId(String provinceId);
    boolean removeByProvinceId(String provinceId);
    boolean resetByProvinceId(String provinceId);
    boolean saveByProvinceId(cn.ibizlab.sample.core.sample.domain.Province province,List<Example> list);
    default boolean saveByProvinceId(String provinceId,List<Example> list) {
        return saveByProvinceId(new cn.ibizlab.sample.core.sample.domain.Province().setProvinceId(provinceId),list);
    }

}