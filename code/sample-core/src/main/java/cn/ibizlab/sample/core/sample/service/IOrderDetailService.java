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
import cn.ibizlab.sample.core.sample.domain.OrderDetail;
import cn.ibizlab.sample.core.sample.filter.OrderDetailSearchContext;

public interface IOrderDetailService extends IService<OrderDetail> {

    OrderDetail get(OrderDetail et);
    default OrderDetail get(String key) {
        return get(new OrderDetail().setOrderDetailId(key));
    }
    default List<OrderDetail> getByIds(Collection<String> ids) {
        List<OrderDetail> entities =new ArrayList();
        ids.forEach(key -> entities.add(new OrderDetail().setOrderDetailId(key)));
        return getByEntities(entities);
    }
    List<OrderDetail> getByEntities(List<OrderDetail> entities);

    OrderDetail getDraft(OrderDetail et);

    boolean checkKey(OrderDetail et);

    boolean create(OrderDetail et);
    boolean createBatch(List<OrderDetail> list);

    boolean update(OrderDetail et);
    boolean updateBatch(List<OrderDetail> list);

    boolean save(OrderDetail et);
    boolean saveBatch(List<OrderDetail> list);

    default boolean remove(String key) {
        return remove(new OrderDetail().setOrderDetailId(key));
    }
    boolean remove(OrderDetail et);

    boolean removeBatch(Collection<String> ids);

    Page<OrderDetail> searchDefault(OrderDetailSearchContext context);
    List<OrderDetail> listDefault(OrderDetailSearchContext context);

    List<OrderDetail> selectByOrderId(String orderId);
    boolean removeByOrderId(String orderId);
    boolean resetByOrderId(String orderId);
    boolean saveByOrderId(cn.ibizlab.sample.core.sample.domain.Order order,List<OrderDetail> list);
    default boolean saveByOrderId(String orderId,List<OrderDetail> list) {
        return saveByOrderId(new cn.ibizlab.sample.core.sample.domain.Order().setOrderId(orderId),list);
    }

    List<OrderDetail> selectByProductId(String productId);
    boolean removeByProductId(String productId);
    boolean resetByProductId(String productId);
    boolean saveByProductId(cn.ibizlab.sample.core.sample.domain.Product product,List<OrderDetail> list);
    default boolean saveByProductId(String productId,List<OrderDetail> list) {
        return saveByProductId(new cn.ibizlab.sample.core.sample.domain.Product().setProductId(productId),list);
    }

}