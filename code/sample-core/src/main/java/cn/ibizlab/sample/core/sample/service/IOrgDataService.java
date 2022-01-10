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
import cn.ibizlab.sample.core.sample.domain.OrgData;
import cn.ibizlab.sample.core.sample.filter.OrgDataSearchContext;

public interface IOrgDataService extends IService<OrgData> {

    OrgData get(OrgData et);
    default OrgData get(String key) {
        return get(new OrgData().setOrgDataId(key));
    }
    default List<OrgData> getByIds(Collection<String> ids) {
        List<OrgData> entities =new ArrayList();
        ids.forEach(key -> entities.add(new OrgData().setOrgDataId(key)));
        return getByEntities(entities);
    }
    List<OrgData> getByEntities(List<OrgData> entities);

    OrgData getDraft(OrgData et);

    boolean checkKey(OrgData et);

    boolean create(OrgData et);
    boolean createBatch(List<OrgData> list);

    boolean update(OrgData et);
    boolean updateBatch(List<OrgData> list);

    boolean save(OrgData et);
    boolean saveBatch(List<OrgData> list);

    default boolean remove(String key) {
        return remove(new OrgData().setOrgDataId(key));
    }
    boolean remove(OrgData et);

    boolean removeBatch(Collection<String> ids);

    Page<OrgData> searchDefault(OrgDataSearchContext context);
    List<OrgData> listDefault(OrgDataSearchContext context);

    Page<OrgData> searchPORGDATA(OrgDataSearchContext context);
    List<OrgData> listPORGDATA(OrgDataSearchContext context);

    List<OrgData> selectByPorgdataid(String porgdataid);
    boolean removeByPorgdataid(String porgdataid);
    boolean resetByPorgdataid(String porgdataid);
    boolean saveByPorgdataid(String porgdataid,List<OrgData> list);

}