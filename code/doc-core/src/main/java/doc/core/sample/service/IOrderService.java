package doc.core.sample.service;

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
import doc.core.sample.domain.Order;
import doc.core.sample.filter.OrderSearchContext;

public interface IOrderService extends IService<Order> {

    Order get(Order et);
    default Order get(String key) {
        return get(new Order().setOrderId(key));
    }
    default List<Order> getByIds(Collection<String> ids) {
        List<Order> entities =new ArrayList();
        ids.forEach(key -> entities.add(new Order().setOrderId(key)));
        return getByEntities(entities);
    }
    List<Order> getByEntities(List<Order> entities);

    Order getDraft(Order et);

    boolean checkKey(Order et);

    boolean create(Order et);
    boolean createBatch(List<Order> list);

    boolean update(Order et);
    boolean updateBatch(List<Order> list);

    boolean save(Order et);
    boolean saveBatch(List<Order> list);

    default boolean remove(String key) {
        return remove(new Order().setOrderId(key));
    }
    boolean remove(Order et);

    boolean removeBatch(Collection<String> ids);

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
    boolean resetByCustomerId(String customerId);
    boolean saveByCustomerId(doc.core.sample.domain.Customer customer,List<Order> list);
    default boolean saveByCustomerId(String customerId,List<Order> list) {
        return saveByCustomerId(new doc.core.sample.domain.Customer().setCustomerId(customerId),list);
    }

}