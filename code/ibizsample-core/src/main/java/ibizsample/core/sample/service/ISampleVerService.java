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

import ibizsample.core.sample.domain.SampleVer;
import ibizsample.core.sample.filter.SampleVerSearchContext;

public interface ISampleVerService extends IService<SampleVer> {

    SampleVer get(String key);
    List<SampleVer> getByIds(Collection<String> idList);
    List<SampleVer> getByEntities(Collection<SampleVer> entities);

    SampleVer getDraft(SampleVer et);

    boolean checkKey(SampleVer et);

    boolean create(SampleVer et);
    boolean createBatch(List<SampleVer> list);

    boolean update(SampleVer et);
    boolean updateBatch(List<SampleVer> list);

    boolean save(SampleVer et);
    boolean saveBatch(List<SampleVer> list);

    boolean remove(String key);
    boolean removeBatch(Collection<String> idList);

    Page<SampleVer> searchDefault(SampleVerSearchContext context);
    List<SampleVer> listDefault(SampleVerSearchContext context);

    Page<SampleVer> searchJAVAR7D(SampleVerSearchContext context);
    List<SampleVer> listJAVAR7D(SampleVerSearchContext context);

    Page<SampleVer> searchMOBR7D(SampleVerSearchContext context);
    List<SampleVer> listMOBR7D(SampleVerSearchContext context);

    Page<SampleVer> searchWEBR7D(SampleVerSearchContext context);
    List<SampleVer> listWEBR7D(SampleVerSearchContext context);

}