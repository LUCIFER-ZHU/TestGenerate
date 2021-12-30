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

import ibizsample.sample.domain.Category;
import ibizsample.sample.filter.CategorySearchContext;

public interface ICategoryService extends IService<Category> {

    Category get(String key);
    List<Category> getByIds(Collection<String> idList);
    List<Category> getByEntities(Collection<Category> entities);

    Category getDraft(Category et);

    boolean checkKey(Category et);

    boolean create(Category et);
    boolean createBatch(List<Category> list);

    boolean update(Category et);
    boolean updateBatch(List<Category> list);

    boolean save(Category et);
    boolean saveBatch(List<Category> list);

    boolean remove(String key);
    boolean removeBatch(Collection<String> idList);

    Page<Category> searchDefault(CategorySearchContext context);
    List<Category> listDefault(CategorySearchContext context);

    Page<Category> searchRoot(CategorySearchContext context);
    List<Category> listRoot(CategorySearchContext context);

    List<Category> selectByPcategoryid(String pcategoryid);
    boolean removeByPcategoryid(String pcategoryid);
    boolean saveByPcategoryid(String pcategoryid,List<Category> list);

}