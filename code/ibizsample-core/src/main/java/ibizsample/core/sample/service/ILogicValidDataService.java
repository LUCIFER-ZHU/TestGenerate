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

import ibizsample.core.sample.domain.LogicValidData;
import ibizsample.core.sample.filter.LogicValidDataSearchContext;

public interface ILogicValidDataService extends IService<LogicValidData> {

    LogicValidData get(String key);
    List<LogicValidData> getByIds(Collection<String> idList);
    List<LogicValidData> getByEntities(Collection<LogicValidData> entities);

    LogicValidData getDraft(LogicValidData et);

    boolean checkKey(LogicValidData et);

    boolean create(LogicValidData et);
    boolean createBatch(List<LogicValidData> list);

    boolean update(LogicValidData et);
    boolean updateBatch(List<LogicValidData> list);

    boolean save(LogicValidData et);
    boolean saveBatch(List<LogicValidData> list);

    boolean remove(String key);
    boolean removeBatch(Collection<String> idList);

    Page<LogicValidData> searchDefault(LogicValidDataSearchContext context);
    List<LogicValidData> listDefault(LogicValidDataSearchContext context);

}