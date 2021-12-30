package ibizsample.core.sample.service;

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

import ibizsample.core.sample.domain.EditorValue;
import ibizsample.core.sample.filter.EditorValueSearchContext;

public interface IEditorValueService extends IService<EditorValue> {

    EditorValue get(String key);
    List<EditorValue> getByIds(Collection<String> idList);
    List<EditorValue> getByEntities(Collection<EditorValue> entities);

    EditorValue getDraft(EditorValue et);

    boolean checkKey(EditorValue et);

    boolean create(EditorValue et);
    boolean createBatch(List<EditorValue> list);

    boolean update(EditorValue et);
    boolean updateBatch(List<EditorValue> list);

    boolean save(EditorValue et);
    boolean saveBatch(List<EditorValue> list);

    boolean remove(String key);
    boolean removeBatch(Collection<String> idList);

    Page<EditorValue> searchDefault(EditorValueSearchContext context);
    List<EditorValue> listDefault(EditorValueSearchContext context);

    List<EditorValue> selectByCustomerId(String customerId);
    boolean removeByCustomerId(String customerId);
    boolean saveByCustomerId(String customerId,List<EditorValue> list);

    List<EditorValue> selectByCustomerid2(String customerid2);
    boolean removeByCustomerid2(String customerid2);
    boolean saveByCustomerid2(String customerid2,List<EditorValue> list);

    List<EditorValue> selectByCustomerid3(String customerid3);
    boolean removeByCustomerid3(String customerid3);
    boolean saveByCustomerid3(String customerid3,List<EditorValue> list);

    List<EditorValue> selectByCustomerid4(String customerid4);
    boolean removeByCustomerid4(String customerid4);
    boolean saveByCustomerid4(String customerid4,List<EditorValue> list);

    List<EditorValue> selectByCustomerid5(String customerid5);
    boolean removeByCustomerid5(String customerid5);
    boolean saveByCustomerid5(String customerid5,List<EditorValue> list);

}