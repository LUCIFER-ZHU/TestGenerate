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
import cn.ibizlab.sample.core.sample.domain.Product;
import cn.ibizlab.sample.core.sample.filter.ProductSearchContext;

public interface IProductService extends IService<Product> {

    Product get(Product et);
    default Product get(String key) {
        return get(new Product().setProductId(key));
    }
    default List<Product> getByIds(Collection<String> ids) {
        List<Product> entities =new ArrayList();
        ids.forEach(key -> entities.add(new Product().setProductId(key)));
        return getByEntities(entities);
    }
    List<Product> getByEntities(List<Product> entities);

    Product getDraft(Product et);

    boolean checkKey(Product et);

    boolean create(Product et);
    boolean createBatch(List<Product> list);

    boolean update(Product et);
    boolean updateBatch(List<Product> list);

    boolean save(Product et);
    boolean saveBatch(List<Product> list);

    default boolean remove(String key) {
        return remove(new Product().setProductId(key));
    }
    boolean remove(Product et);

    boolean removeBatch(Collection<String> ids);

    Page<Product> searchByCategory(ProductSearchContext context);
    List<Product> listByCategory(ProductSearchContext context);

    Page<Product> searchDefault(ProductSearchContext context);
    List<Product> listDefault(ProductSearchContext context);

}