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

import ibizsample.core.sample.domain.LogicValidData2;
import ibizsample.core.sample.filter.LogicValidData2SearchContext;

public interface ILogicValidData2Service extends IService<LogicValidData2> {

    LogicValidData2 get(Long key);
    List<LogicValidData2> getByIds(Collection<Long> idList);
    List<LogicValidData2> getByEntities(Collection<LogicValidData2> entities);

    LogicValidData2 getDraft(LogicValidData2 et);

    boolean checkKey(LogicValidData2 et);

    boolean create(LogicValidData2 et);
    boolean createBatch(List<LogicValidData2> list);

    boolean update(LogicValidData2 et);
    boolean updateBatch(List<LogicValidData2> list);

    boolean save(LogicValidData2 et);
    boolean saveBatch(List<LogicValidData2> list);

    boolean remove(Long key);
    boolean removeBatch(Collection<Long> idList);

    Page<LogicValidData2> searchDefault(LogicValidData2SearchContext context);
    List<LogicValidData2> listDefault(LogicValidData2SearchContext context);

}