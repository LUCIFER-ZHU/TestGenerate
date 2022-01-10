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
import cn.ibizlab.sample.core.sample.domain.LogicValidData2;
import cn.ibizlab.sample.core.sample.filter.LogicValidData2SearchContext;

public interface ILogicValidData2Service extends IService<LogicValidData2> {

    LogicValidData2 get(LogicValidData2 et);
    default LogicValidData2 get(Long key) {
        return get(new LogicValidData2().setLogicValidData2Id(key));
    }
    default List<LogicValidData2> getByIds(Collection<Long> ids) {
        List<LogicValidData2> entities =new ArrayList();
        ids.forEach(key -> entities.add(new LogicValidData2().setLogicValidData2Id(key)));
        return getByEntities(entities);
    }
    List<LogicValidData2> getByEntities(List<LogicValidData2> entities);

    LogicValidData2 getDraft(LogicValidData2 et);

    boolean checkKey(LogicValidData2 et);

    boolean create(LogicValidData2 et);
    boolean createBatch(List<LogicValidData2> list);

    boolean update(LogicValidData2 et);
    boolean updateBatch(List<LogicValidData2> list);

    boolean save(LogicValidData2 et);
    boolean saveBatch(List<LogicValidData2> list);

    default boolean remove(Long key) {
        return remove(new LogicValidData2().setLogicValidData2Id(key));
    }
    boolean remove(LogicValidData2 et);

    boolean removeBatch(Collection<Long> ids);

    Page<LogicValidData2> searchDefault(LogicValidData2SearchContext context);
    List<LogicValidData2> listDefault(LogicValidData2SearchContext context);

}