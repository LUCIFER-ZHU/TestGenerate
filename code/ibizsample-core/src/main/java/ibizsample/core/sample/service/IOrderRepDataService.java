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

import ibizsample.core.sample.domain.OrderRepData;
import ibizsample.core.sample.filter.OrderRepDataSearchContext;

public interface IOrderRepDataService extends IService<OrderRepData> {

    OrderRepData get(String key);
    List<OrderRepData> getByIds(Collection<String> idList);
    List<OrderRepData> getByEntities(Collection<OrderRepData> entities);

    OrderRepData getDraft(OrderRepData et);

    boolean checkKey(OrderRepData et);

    boolean create(OrderRepData et);
    boolean createBatch(List<OrderRepData> list);

    boolean update(OrderRepData et);
    boolean updateBatch(List<OrderRepData> list);

    boolean save(OrderRepData et);
    boolean saveBatch(List<OrderRepData> list);

    boolean remove(String key);
    boolean removeBatch(Collection<String> idList);

    Page<OrderRepData> searchDefault(OrderRepDataSearchContext context);
    List<OrderRepData> listDefault(OrderRepDataSearchContext context);

    Page<Map> searchGroup(OrderRepDataSearchContext context);
    List<Map> listGroup(OrderRepDataSearchContext context);

}