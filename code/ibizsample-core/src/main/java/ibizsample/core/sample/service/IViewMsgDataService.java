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

import ibizsample.core.sample.domain.ViewMsgData;
import ibizsample.core.sample.filter.ViewMsgDataSearchContext;

public interface IViewMsgDataService extends IService<ViewMsgData> {

    ViewMsgData get(String key);
    List<ViewMsgData> getByIds(Collection<String> idList);
    List<ViewMsgData> getByEntities(Collection<ViewMsgData> entities);

    ViewMsgData getDraft(ViewMsgData et);

    boolean checkKey(ViewMsgData et);

    boolean create(ViewMsgData et);
    boolean createBatch(List<ViewMsgData> list);

    boolean update(ViewMsgData et);
    boolean updateBatch(List<ViewMsgData> list);

    boolean save(ViewMsgData et);
    boolean saveBatch(List<ViewMsgData> list);

    boolean remove(String key);
    boolean removeBatch(Collection<String> idList);

    Page<ViewMsgData> searchDefault(ViewMsgDataSearchContext context);
    List<ViewMsgData> listDefault(ViewMsgDataSearchContext context);

}