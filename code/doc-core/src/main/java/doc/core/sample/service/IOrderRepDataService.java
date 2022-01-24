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
import doc.core.sample.domain.OrderRepData;
import doc.core.sample.filter.OrderRepDataSearchContext;

public interface IOrderRepDataService extends IService<OrderRepData> {

    OrderRepData get(OrderRepData et);
    default OrderRepData get(String key) {
        return get(new OrderRepData().setOrderRepDataId(key));
    }
    default List<OrderRepData> getByIds(Collection<String> ids) {
        List<OrderRepData> entities =new ArrayList();
        ids.forEach(key -> entities.add(new OrderRepData().setOrderRepDataId(key)));
        return getByEntities(entities);
    }
    List<OrderRepData> getByEntities(List<OrderRepData> entities);

    OrderRepData getDraft(OrderRepData et);

    boolean checkKey(OrderRepData et);

    boolean create(OrderRepData et);
    boolean createBatch(List<OrderRepData> list);

    boolean update(OrderRepData et);
    boolean updateBatch(List<OrderRepData> list);

    boolean save(OrderRepData et);
    boolean saveBatch(List<OrderRepData> list);

    default boolean remove(String key) {
        return remove(new OrderRepData().setOrderRepDataId(key));
    }
    boolean remove(OrderRepData et);

    boolean removeBatch(Collection<String> ids);

    Page<OrderRepData> searchDefault(OrderRepDataSearchContext context);
    List<OrderRepData> listDefault(OrderRepDataSearchContext context);

    Page<OrderRepData> searchGroup(OrderRepDataSearchContext context);
    List<OrderRepData> listGroup(OrderRepDataSearchContext context);

}