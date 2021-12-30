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

import ibizsample.sample.domain.PersonData;
import ibizsample.sample.filter.PersonDataSearchContext;

public interface IPersonDataService extends IService<PersonData> {

    PersonData get(String key);
    List<PersonData> getByIds(Collection<String> idList);
    List<PersonData> getByEntities(Collection<PersonData> entities);

    PersonData getDraft(PersonData et);

    boolean checkKey(PersonData et);

    boolean create(PersonData et);
    boolean createBatch(List<PersonData> list);

    boolean update(PersonData et);
    boolean updateBatch(List<PersonData> list);

    boolean save(PersonData et);
    boolean saveBatch(List<PersonData> list);

    boolean remove(String key);
    boolean removeBatch(Collection<String> idList);

    Page<PersonData> searchDefault(PersonDataSearchContext context);
    List<PersonData> listDefault(PersonDataSearchContext context);

    List<PersonData> selectByDeptDataId(String deptDataId);
    boolean removeByDeptDataId(String deptDataId);
    boolean saveByDeptDataId(String deptDataId,List<PersonData> list);

    List<PersonData> selectByOrgDataId(String orgDataId);
    boolean removeByOrgDataId(String orgDataId);
    boolean saveByOrgDataId(String orgDataId,List<PersonData> list);

}