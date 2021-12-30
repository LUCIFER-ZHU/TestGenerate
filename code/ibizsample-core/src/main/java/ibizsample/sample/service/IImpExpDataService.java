package ibizsample.sample.service;

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

import ibizsample.sample.domain.ImpExpData;
import ibizsample.sample.filter.ImpExpDataSearchContext;

public interface IImpExpDataService extends IService<ImpExpData> {

    ImpExpData get(String key);
    List<ImpExpData> getByIds(Collection<String> idList);
    List<ImpExpData> getByEntities(Collection<ImpExpData> entities);

    ImpExpData getDraft(ImpExpData et);

    boolean checkKey(ImpExpData et);

    boolean create(ImpExpData et);
    boolean createBatch(List<ImpExpData> list);

    boolean update(ImpExpData et);
    boolean updateBatch(List<ImpExpData> list);

    boolean save(ImpExpData et);
    boolean saveBatch(List<ImpExpData> list);

    boolean remove(String key);
    boolean removeBatch(Collection<String> idList);

    Page<ImpExpData> searchDefault(ImpExpDataSearchContext context);
    List<ImpExpData> listDefault(ImpExpDataSearchContext context);

    List<ImpExpData> selectByCustomerId(String customerId);
    boolean removeByCustomerId(String customerId);
    boolean saveByCustomerId(String customerId,List<ImpExpData> list);

}