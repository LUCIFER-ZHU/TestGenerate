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

import ibizsample.core.sample.domain.OrgData;
import ibizsample.core.sample.filter.OrgDataSearchContext;

public interface IOrgDataService extends IService<OrgData> {

    OrgData get(String key);
    List<OrgData> getByIds(Collection<String> idList);
    List<OrgData> getByEntities(Collection<OrgData> entities);

    OrgData getDraft(OrgData et);

    boolean checkKey(OrgData et);

    boolean create(OrgData et);
    boolean createBatch(List<OrgData> list);

    boolean update(OrgData et);
    boolean updateBatch(List<OrgData> list);

    boolean save(OrgData et);
    boolean saveBatch(List<OrgData> list);

    boolean remove(String key);
    boolean removeBatch(Collection<String> idList);

    Page<OrgData> searchDefault(OrgDataSearchContext context);
    List<OrgData> listDefault(OrgDataSearchContext context);

    Page<OrgData> searchPORGDATA(OrgDataSearchContext context);
    List<OrgData> listPORGDATA(OrgDataSearchContext context);

    List<OrgData> selectByPorgdataid(String porgdataid);
    boolean removeByPorgdataid(String porgdataid);
    boolean saveByPorgdataid(String porgdataid,List<OrgData> list);

}