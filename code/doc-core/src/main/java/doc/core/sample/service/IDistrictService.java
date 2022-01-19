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
import doc.core.sample.domain.District;
import doc.core.sample.filter.DistrictSearchContext;

public interface IDistrictService extends IService<District> {

    District get(District et);
    default District get(String key) {
        return get(new District().setDistrictId(key));
    }
    default List<District> getByIds(Collection<String> ids) {
        List<District> entities =new ArrayList();
        ids.forEach(key -> entities.add(new District().setDistrictId(key)));
        return getByEntities(entities);
    }
    List<District> getByEntities(List<District> entities);

    District getDraft(District et);

    boolean checkKey(District et);

    boolean create(District et);
    boolean createBatch(List<District> list);

    boolean update(District et);
    boolean updateBatch(List<District> list);

    boolean save(District et);
    boolean saveBatch(List<District> list);

    default boolean remove(String key) {
        return remove(new District().setDistrictId(key));
    }
    boolean remove(District et);

    boolean removeBatch(Collection<String> ids);

    Page<District> searchDefault(DistrictSearchContext context);
    List<District> listDefault(DistrictSearchContext context);

    List<District> selectByCityId(String cityId);
    boolean removeByCityId(String cityId);
    boolean resetByCityId(String cityId);
    boolean saveByCityId(doc.core.sample.domain.City city,List<District> list);
    default boolean saveByCityId(String cityId,List<District> list) {
        return saveByCityId(new doc.core.sample.domain.City().setCityId(cityId),list);
    }

}