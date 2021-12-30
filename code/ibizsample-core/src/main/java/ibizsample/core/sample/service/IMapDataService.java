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

import ibizsample.core.sample.domain.MapData;
import ibizsample.core.sample.filter.MapDataSearchContext;

public interface IMapDataService extends IService<MapData> {

    MapData get(String key);
    List<MapData> getByIds(Collection<String> idList);
    List<MapData> getByEntities(Collection<MapData> entities);

    MapData getDraft(MapData et);

    boolean checkKey(MapData et);

    boolean create(MapData et);
    boolean createBatch(List<MapData> list);

    boolean update(MapData et);
    boolean updateBatch(List<MapData> list);

    boolean save(MapData et);
    boolean saveBatch(List<MapData> list);

    boolean remove(String key);
    boolean removeBatch(Collection<String> idList);

    Page<MapData> searchDefault(MapDataSearchContext context);
    List<MapData> listDefault(MapDataSearchContext context);

}