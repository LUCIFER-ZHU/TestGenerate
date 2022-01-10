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
import cn.ibizlab.sample.core.sample.domain.EditorValue;
import cn.ibizlab.sample.core.sample.filter.EditorValueSearchContext;

public interface IEditorValueService extends IService<EditorValue> {

    EditorValue get(EditorValue et);
    default EditorValue get(String key) {
        return get(new EditorValue().setEditorValueId(key));
    }
    default List<EditorValue> getByIds(Collection<String> ids) {
        List<EditorValue> entities =new ArrayList();
        ids.forEach(key -> entities.add(new EditorValue().setEditorValueId(key)));
        return getByEntities(entities);
    }
    List<EditorValue> getByEntities(List<EditorValue> entities);

    EditorValue getDraft(EditorValue et);

    boolean checkKey(EditorValue et);

    boolean create(EditorValue et);
    boolean createBatch(List<EditorValue> list);

    boolean update(EditorValue et);
    boolean updateBatch(List<EditorValue> list);

    boolean save(EditorValue et);
    boolean saveBatch(List<EditorValue> list);

    default boolean remove(String key) {
        return remove(new EditorValue().setEditorValueId(key));
    }
    boolean remove(EditorValue et);

    boolean removeBatch(Collection<String> ids);

    Page<EditorValue> searchDefault(EditorValueSearchContext context);
    List<EditorValue> listDefault(EditorValueSearchContext context);

    List<EditorValue> selectByCustomerId(String customerId);
    boolean removeByCustomerId(String customerId);
    boolean resetByCustomerId(String customerId);
    boolean saveByCustomerId(String customerId,List<EditorValue> list);

    List<EditorValue> selectByCustomerid2(String customerid2);
    boolean removeByCustomerid2(String customerid2);
    boolean resetByCustomerid2(String customerid2);
    boolean saveByCustomerid2(String customerid2,List<EditorValue> list);

    List<EditorValue> selectByCustomerid3(String customerid3);
    boolean removeByCustomerid3(String customerid3);
    boolean resetByCustomerid3(String customerid3);
    boolean saveByCustomerid3(String customerid3,List<EditorValue> list);

    List<EditorValue> selectByCustomerid4(String customerid4);
    boolean removeByCustomerid4(String customerid4);
    boolean resetByCustomerid4(String customerid4);
    boolean saveByCustomerid4(String customerid4,List<EditorValue> list);

    List<EditorValue> selectByCustomerid5(String customerid5);
    boolean removeByCustomerid5(String customerid5);
    boolean resetByCustomerid5(String customerid5);
    boolean saveByCustomerid5(String customerid5,List<EditorValue> list);

}