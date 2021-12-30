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

import ibizsample.sample.domain.ProductCategory;
import ibizsample.sample.filter.ProductCategorySearchContext;

public interface IProductCategoryService extends IService<ProductCategory> {

    ProductCategory get(String key);
    List<ProductCategory> getByIds(Collection<String> idList);
    List<ProductCategory> getByEntities(Collection<ProductCategory> entities);

    ProductCategory getDraft(ProductCategory et);

    boolean checkKey(ProductCategory et);

    boolean create(ProductCategory et);
    boolean createBatch(List<ProductCategory> list);

    boolean update(ProductCategory et);
    boolean updateBatch(List<ProductCategory> list);

    boolean save(ProductCategory et);
    boolean saveBatch(List<ProductCategory> list);

    boolean remove(String key);
    boolean removeBatch(Collection<String> idList);

    Page<ProductCategory> searchDefault(ProductCategorySearchContext context);
    List<ProductCategory> listDefault(ProductCategorySearchContext context);

    List<ProductCategory> selectByCategoryId(String categoryId);
    boolean removeByCategoryId(String categoryId);
    boolean saveByCategoryId(String categoryId,List<ProductCategory> list);

    List<ProductCategory> selectByProductId(String productId);
    boolean removeByProductId(String productId);
    boolean saveByProductId(String productId,List<ProductCategory> list);

}