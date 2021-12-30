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

import ibizsample.core.sample.domain.Example2;
import ibizsample.core.sample.filter.Example2SearchContext;

public interface IExample2Service extends IService<Example2> {

    Example2 get(String key);
    List<Example2> getByIds(Collection<String> idList);
    List<Example2> getByEntities(Collection<Example2> entities);

    Example2 getDraft(Example2 et);

    boolean checkKey(Example2 et);

    boolean create(Example2 et);
    boolean createBatch(List<Example2> list);

    boolean update(Example2 et);
    boolean updateBatch(List<Example2> list);

    boolean save(Example2 et);
    boolean saveBatch(List<Example2> list);

    boolean remove(String key);
    boolean removeBatch(Collection<String> idList);

    Page<Example2> searchDefault(Example2SearchContext context);
    List<Example2> listDefault(Example2SearchContext context);

    List<Example2> selectByExampleId(String exampleId);
    boolean removeByExampleId(String exampleId);
    boolean saveByExampleId(String exampleId,List<Example2> list);

}