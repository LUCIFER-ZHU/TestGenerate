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
import cn.ibizlab.sample.core.sample.domain.ProductCategory;
import cn.ibizlab.sample.core.sample.filter.ProductCategorySearchContext;

public interface IProductCategoryService extends IService<ProductCategory> {

    ProductCategory get(ProductCategory et);
    default ProductCategory get(String key) {
        return get(new ProductCategory().setProductCategoryId(key));
    }
    default List<ProductCategory> getByIds(Collection<String> ids) {
        List<ProductCategory> entities =new ArrayList();
        ids.forEach(key -> entities.add(new ProductCategory().setProductCategoryId(key)));
        return getByEntities(entities);
    }
    List<ProductCategory> getByEntities(List<ProductCategory> entities);

    ProductCategory getDraft(ProductCategory et);

    boolean checkKey(ProductCategory et);

    boolean create(ProductCategory et);
    boolean createBatch(List<ProductCategory> list);

    boolean update(ProductCategory et);
    boolean updateBatch(List<ProductCategory> list);

    boolean save(ProductCategory et);
    boolean saveBatch(List<ProductCategory> list);

    default boolean remove(String key) {
        return remove(new ProductCategory().setProductCategoryId(key));
    }
    boolean remove(ProductCategory et);

    boolean removeBatch(Collection<String> ids);

    Page<ProductCategory> searchDefault(ProductCategorySearchContext context);
    List<ProductCategory> listDefault(ProductCategorySearchContext context);

    List<ProductCategory> selectByCategoryId(String categoryId);
    boolean removeByCategoryId(String categoryId);
    boolean resetByCategoryId(String categoryId);
    boolean saveByCategoryId(String categoryId,List<ProductCategory> list);

    List<ProductCategory> selectByProductId(String productId);
    boolean removeByProductId(String productId);
    boolean resetByProductId(String productId);
    boolean saveByProductId(String productId,List<ProductCategory> list);

}