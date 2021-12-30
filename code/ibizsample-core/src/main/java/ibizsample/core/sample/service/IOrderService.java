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

import ibizsample.core.sample.domain.Order;
import ibizsample.core.sample.filter.OrderSearchContext;

public interface IOrderService extends IService<Order> {

    Order get(String key);
    List<Order> getByIds(Collection<String> idList);
    List<Order> getByEntities(Collection<Order> entities);

    Order getDraft(Order et);

    boolean checkKey(Order et);

    boolean create(Order et);
    boolean createBatch(List<Order> list);

    boolean update(Order et);
    boolean updateBatch(List<Order> list);

    boolean save(Order et);
    boolean saveBatch(List<Order> list);

    boolean remove(String key);
    boolean removeBatch(Collection<String> idList);

    Page<Order> searchDefault(OrderSearchContext context);
    List<Order> listDefault(OrderSearchContext context);

    Page<Order> searchGroup(OrderSearchContext context);
    List<Order> listGroup(OrderSearchContext context);

    Page<Order> searchPaying(OrderSearchContext context);
    List<Order> listPaying(OrderSearchContext context);

    Page<Order> searchProcessing(OrderSearchContext context);
    List<Order> listProcessing(OrderSearchContext context);

    List<Order> selectByCustomerId(String customerId);
    boolean removeByCustomerId(String customerId);
    boolean saveByCustomerId(String customerId,List<Order> list);

    List<Order> selectBy( );
    boolean removeBy( );
    boolean saveBy( ,List<Order> list);

}