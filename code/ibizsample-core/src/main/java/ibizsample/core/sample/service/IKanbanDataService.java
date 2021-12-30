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

import ibizsample.core.sample.domain.KanbanData;
import ibizsample.core.sample.filter.KanbanDataSearchContext;

public interface IKanbanDataService extends IService<KanbanData> {

    KanbanData get(String key);
    List<KanbanData> getByIds(Collection<String> idList);
    List<KanbanData> getByEntities(Collection<KanbanData> entities);

    KanbanData getDraft(KanbanData et);

    boolean checkKey(KanbanData et);

    boolean create(KanbanData et);
    boolean createBatch(List<KanbanData> list);

    boolean update(KanbanData et);
    boolean updateBatch(List<KanbanData> list);

    boolean save(KanbanData et);
    boolean saveBatch(List<KanbanData> list);

    boolean remove(String key);
    boolean removeBatch(Collection<String> idList);

    Page<KanbanData> searchDefault(KanbanDataSearchContext context);
    List<KanbanData> listDefault(KanbanDataSearchContext context);

}