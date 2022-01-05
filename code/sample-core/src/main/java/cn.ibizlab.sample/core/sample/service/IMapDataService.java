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
import cn.ibizlab.sample.core.sample.domain.MapData;
import cn.ibizlab.sample.core.sample.filter.MapDataSearchContext;

public interface IMapDataService extends IService<MapData> {

    MapData get(MapData et);
    default MapData get(String key) {
        return get(new MapData().setMapDataId(key));
    }
    default List<MapData> getByIds(Collection<String> ids) {
        List<MapData> entities =new ArrayList();
        ids.forEach(key -> entities.add(new MapData().setMapDataId(key)));
        return getByEntities(entities);
    }
    List<MapData> getByEntities(List<MapData> entities);

    MapData getDraft(MapData et);

    boolean checkKey(MapData et);

    boolean create(MapData et);
    boolean createBatch(List<MapData> list);

    boolean update(MapData et);
    boolean updateBatch(List<MapData> list);

    boolean save(MapData et);
    boolean saveBatch(List<MapData> list);

    default boolean remove(String key) {
        return remove(new MapData().setMapDataId(key));
    }
    boolean remove(MapData et);

    boolean removeBatch(Collection<String> ids);

    Page<MapData> searchDefault(MapDataSearchContext context);
    List<MapData> listDefault(MapDataSearchContext context);

}