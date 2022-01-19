package doc.core.sample.service;

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
import doc.core.sample.domain.PersonData;
import doc.core.sample.filter.PersonDataSearchContext;

public interface IPersonDataService extends IService<PersonData> {

    PersonData get(PersonData et);
    default PersonData get(String key) {
        return get(new PersonData().setPersonDataId(key));
    }
    default List<PersonData> getByIds(Collection<String> ids) {
        List<PersonData> entities =new ArrayList();
        ids.forEach(key -> entities.add(new PersonData().setPersonDataId(key)));
        return getByEntities(entities);
    }
    List<PersonData> getByEntities(List<PersonData> entities);

    PersonData getDraft(PersonData et);

    boolean checkKey(PersonData et);

    boolean create(PersonData et);
    boolean createBatch(List<PersonData> list);

    boolean update(PersonData et);
    boolean updateBatch(List<PersonData> list);

    boolean save(PersonData et);
    boolean saveBatch(List<PersonData> list);

    default boolean remove(String key) {
        return remove(new PersonData().setPersonDataId(key));
    }
    boolean remove(PersonData et);

    boolean removeBatch(Collection<String> ids);

    Page<PersonData> searchDefault(PersonDataSearchContext context);
    List<PersonData> listDefault(PersonDataSearchContext context);

    List<PersonData> selectByDeptDataId(String deptDataId);
    boolean removeByDeptDataId(String deptDataId);
    boolean resetByDeptDataId(String deptDataId);
    boolean saveByDeptDataId(doc.core.sample.domain.DeptData deptData,List<PersonData> list);
    default boolean saveByDeptDataId(String deptDataId,List<PersonData> list) {
        return saveByDeptDataId(new doc.core.sample.domain.DeptData().setDeptDataId(deptDataId),list);
    }

    List<PersonData> selectByOrgDataId(String orgDataId);
    boolean removeByOrgDataId(String orgDataId);
    boolean resetByOrgDataId(String orgDataId);
    boolean saveByOrgDataId(doc.core.sample.domain.OrgData orgData,List<PersonData> list);
    default boolean saveByOrgDataId(String orgDataId,List<PersonData> list) {
        return saveByOrgDataId(new doc.core.sample.domain.OrgData().setOrgDataId(orgDataId),list);
    }

}