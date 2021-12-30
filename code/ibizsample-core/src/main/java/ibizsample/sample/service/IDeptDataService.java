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

import ibizsample.sample.domain.DeptData;
import ibizsample.sample.filter.DeptDataSearchContext;

public interface IDeptDataService extends IService<DeptData> {

    DeptData get(String key);
    List<DeptData> getByIds(Collection<String> idList);
    List<DeptData> getByEntities(Collection<DeptData> entities);

    DeptData getDraft(DeptData et);

    boolean checkKey(DeptData et);

    boolean create(DeptData et);
    boolean createBatch(List<DeptData> list);

    boolean update(DeptData et);
    boolean updateBatch(List<DeptData> list);

    boolean save(DeptData et);
    boolean saveBatch(List<DeptData> list);

    boolean remove(String key);
    boolean removeBatch(Collection<String> idList);

    Page<DeptData> searchDefault(DeptDataSearchContext context);
    List<DeptData> listDefault(DeptDataSearchContext context);

    List<DeptData> selectByOrgDataId(String orgDataId);
    boolean removeByOrgDataId(String orgDataId);
    boolean saveByOrgDataId(String orgDataId,List<DeptData> list);

}