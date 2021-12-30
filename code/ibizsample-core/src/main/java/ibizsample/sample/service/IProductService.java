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

import ibizsample.sample.domain.Product;
import ibizsample.sample.filter.ProductSearchContext;

public interface IProductService extends IService<Product> {

    Product get(String key);
    List<Product> getByIds(Collection<String> idList);
    List<Product> getByEntities(Collection<Product> entities);

    Product getDraft(Product et);

    boolean checkKey(Product et);

    boolean create(Product et);
    boolean createBatch(List<Product> list);

    boolean update(Product et);
    boolean updateBatch(List<Product> list);

    boolean save(Product et);
    boolean saveBatch(List<Product> list);

    boolean remove(String key);
    boolean removeBatch(Collection<String> idList);

    Page<Product> searchByCategory(ProductSearchContext context);
    List<Product> listByCategory(ProductSearchContext context);

    Page<Product> searchDefault(ProductSearchContext context);
    List<Product> listDefault(ProductSearchContext context);

}