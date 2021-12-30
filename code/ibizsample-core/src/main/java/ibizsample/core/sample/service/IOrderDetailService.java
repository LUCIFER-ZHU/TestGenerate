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

import ibizsample.core.sample.domain.OrderDetail;
import ibizsample.core.sample.filter.OrderDetailSearchContext;

public interface IOrderDetailService extends IService<OrderDetail> {

    OrderDetail get(String key);
    List<OrderDetail> getByIds(Collection<String> idList);
    List<OrderDetail> getByEntities(Collection<OrderDetail> entities);

    OrderDetail getDraft(OrderDetail et);

    boolean checkKey(OrderDetail et);

    boolean create(OrderDetail et);
    boolean createBatch(List<OrderDetail> list);

    boolean update(OrderDetail et);
    boolean updateBatch(List<OrderDetail> list);

    boolean save(OrderDetail et);
    boolean saveBatch(List<OrderDetail> list);

    boolean remove(String key);
    boolean removeBatch(Collection<String> idList);

    Page<OrderDetail> searchDefault(OrderDetailSearchContext context);
    List<OrderDetail> listDefault(OrderDetailSearchContext context);

    List<OrderDetail> selectByOrderId(String orderId);
    boolean removeByOrderId(String orderId);
    boolean saveByOrderId(String orderId,List<OrderDetail> list);

    List<OrderDetail> selectByProductId(String productId);
    boolean removeByProductId(String productId);
    boolean saveByProductId(String productId,List<OrderDetail> list);

}