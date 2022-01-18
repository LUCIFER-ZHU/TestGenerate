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
import cn.ibizlab.sample.core.sample.domain.Category;
import cn.ibizlab.sample.core.sample.filter.CategorySearchContext;

public interface ICategoryService extends IService<Category> {

    Category get(Category et);
    default Category get(String key) {
        return get(new Category().setCategoryId(key));
    }
    default List<Category> getByIds(Collection<String> ids) {
        List<Category> entities =new ArrayList();
        ids.forEach(key -> entities.add(new Category().setCategoryId(key)));
        return getByEntities(entities);
    }
    List<Category> getByEntities(List<Category> entities);

    Category getDraft(Category et);

    boolean checkKey(Category et);

    boolean create(Category et);
    boolean createBatch(List<Category> list);

    boolean update(Category et);
    boolean updateBatch(List<Category> list);

    boolean save(Category et);
    boolean saveBatch(List<Category> list);

    default boolean remove(String key) {
        return remove(new Category().setCategoryId(key));
    }
    boolean remove(Category et);

    boolean removeBatch(Collection<String> ids);

    Page<Category> searchDefault(CategorySearchContext context);
    List<Category> listDefault(CategorySearchContext context);

    Page<Category> searchRoot(CategorySearchContext context);
    List<Category> listRoot(CategorySearchContext context);

    List<Category> selectByPcategoryid(String pcategoryid);
    boolean removeByPcategoryid(String pcategoryid);
    boolean resetByPcategoryid(String pcategoryid);
    boolean saveByPcategoryid(cn.ibizlab.sample.core.sample.domain.Category category,List<Category> list);
    default boolean saveByPcategoryid(String pcategoryid,List<Category> list) {
        return saveByPcategoryid(new cn.ibizlab.sample.core.sample.domain.Category().setCategoryId(pcategoryid),list);
    }

}