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
import cn.ibizlab.sample.core.sample.domain.SampleVer;
import cn.ibizlab.sample.core.sample.filter.SampleVerSearchContext;

public interface ISampleVerService extends IService<SampleVer> {

    SampleVer get(SampleVer et);
    default SampleVer get(String key) {
        return get(new SampleVer().setSampleVerId(key));
    }
    default List<SampleVer> getByIds(Collection<String> ids) {
        List<SampleVer> entities =new ArrayList();
        ids.forEach(key -> entities.add(new SampleVer().setSampleVerId(key)));
        return getByEntities(entities);
    }
    List<SampleVer> getByEntities(List<SampleVer> entities);

    SampleVer getDraft(SampleVer et);

    boolean checkKey(SampleVer et);

    boolean create(SampleVer et);
    boolean createBatch(List<SampleVer> list);

    boolean update(SampleVer et);
    boolean updateBatch(List<SampleVer> list);

    boolean save(SampleVer et);
    boolean saveBatch(List<SampleVer> list);

    default boolean remove(String key) {
        return remove(new SampleVer().setSampleVerId(key));
    }
    boolean remove(SampleVer et);

    boolean removeBatch(Collection<String> ids);

    Page<SampleVer> searchDefault(SampleVerSearchContext context);
    List<SampleVer> listDefault(SampleVerSearchContext context);

    Page<SampleVer> searchJavar7D(SampleVerSearchContext context);
    List<SampleVer> listJavar7D(SampleVerSearchContext context);

    Page<SampleVer> searchMobr7D(SampleVerSearchContext context);
    List<SampleVer> listMobr7D(SampleVerSearchContext context);

    Page<SampleVer> searchWebr7D(SampleVerSearchContext context);
    List<SampleVer> listWebr7D(SampleVerSearchContext context);

}