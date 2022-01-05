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
import cn.ibizlab.sample.core.sample.domain.KanbanData;
import cn.ibizlab.sample.core.sample.filter.KanbanDataSearchContext;

public interface IKanbanDataService extends IService<KanbanData> {

    KanbanData get(KanbanData et);
    default KanbanData get(String key) {
        return get(new KanbanData().setKanbanDataId(key));
    }
    default List<KanbanData> getByIds(Collection<String> ids) {
        List<KanbanData> entities =new ArrayList();
        ids.forEach(key -> entities.add(new KanbanData().setKanbanDataId(key)));
        return getByEntities(entities);
    }
    List<KanbanData> getByEntities(List<KanbanData> entities);

    KanbanData getDraft(KanbanData et);

    boolean checkKey(KanbanData et);

    boolean create(KanbanData et);
    boolean createBatch(List<KanbanData> list);

    boolean update(KanbanData et);
    boolean updateBatch(List<KanbanData> list);

    boolean save(KanbanData et);
    boolean saveBatch(List<KanbanData> list);

    default boolean remove(String key) {
        return remove(new KanbanData().setKanbanDataId(key));
    }
    boolean remove(KanbanData et);

    boolean removeBatch(Collection<String> ids);

    Page<KanbanData> searchDefault(KanbanDataSearchContext context);
    List<KanbanData> listDefault(KanbanDataSearchContext context);

}