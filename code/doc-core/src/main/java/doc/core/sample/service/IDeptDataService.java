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
import doc.core.sample.domain.DeptData;
import doc.core.sample.filter.DeptDataSearchContext;

public interface IDeptDataService extends IService<DeptData> {

    DeptData get(DeptData et);
    default DeptData get(String key) {
        return get(new DeptData().setDeptDataId(key));
    }
    default List<DeptData> getByIds(Collection<String> ids) {
        List<DeptData> entities =new ArrayList();
        ids.forEach(key -> entities.add(new DeptData().setDeptDataId(key)));
        return getByEntities(entities);
    }
    List<DeptData> getByEntities(List<DeptData> entities);

    DeptData getDraft(DeptData et);

    boolean checkKey(DeptData et);

    boolean create(DeptData et);
    boolean createBatch(List<DeptData> list);

    boolean update(DeptData et);
    boolean updateBatch(List<DeptData> list);

    boolean save(DeptData et);
    boolean saveBatch(List<DeptData> list);

    default boolean remove(String key) {
        return remove(new DeptData().setDeptDataId(key));
    }
    boolean remove(DeptData et);

    boolean removeBatch(Collection<String> ids);

    Page<DeptData> searchDefault(DeptDataSearchContext context);
    List<DeptData> listDefault(DeptDataSearchContext context);

    List<DeptData> selectByOrgDataId(String orgDataId);
    boolean removeByOrgDataId(String orgDataId);
    boolean resetByOrgDataId(String orgDataId);
    boolean saveByOrgDataId(doc.core.sample.domain.OrgData orgData,List<DeptData> list);
    default boolean saveByOrgDataId(String orgDataId,List<DeptData> list) {
        return saveByOrgDataId(new doc.core.sample.domain.OrgData().setOrgDataId(orgDataId),list);
    }

}