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
import cn.ibizlab.sample.core.sample.domain.Opportunity;
import cn.ibizlab.sample.core.sample.filter.OpportunitySearchContext;

public interface IOpportunityService extends IService<Opportunity> {

    Opportunity get(Opportunity et);
    default Opportunity get(String key) {
        return get(new Opportunity().setOpportunityId(key));
    }
    default List<Opportunity> getByIds(Collection<String> ids) {
        List<Opportunity> entities =new ArrayList();
        ids.forEach(key -> entities.add(new Opportunity().setOpportunityId(key)));
        return getByEntities(entities);
    }
    List<Opportunity> getByEntities(List<Opportunity> entities);

    Opportunity getDraft(Opportunity et);

    boolean checkKey(Opportunity et);

    boolean create(Opportunity et);
    boolean createBatch(List<Opportunity> list);

    boolean update(Opportunity et);
    boolean updateBatch(List<Opportunity> list);

    boolean save(Opportunity et);
    boolean saveBatch(List<Opportunity> list);

    default boolean remove(String key) {
        return remove(new Opportunity().setOpportunityId(key));
    }
    boolean remove(Opportunity et);

    boolean removeBatch(Collection<String> ids);

    Page<Opportunity> searchDefault(OpportunitySearchContext context);
    List<Opportunity> listDefault(OpportunitySearchContext context);

    List<Opportunity> selectByCustomerId(String customerId);
    boolean removeByCustomerId(String customerId);
    boolean resetByCustomerId(String customerId);
    boolean saveByCustomerId(String customerId,List<Opportunity> list);

    List<Opportunity> selectByPersonDataId(String personDataId);
    boolean removeByPersonDataId(String personDataId);
    boolean resetByPersonDataId(String personDataId);
    boolean saveByPersonDataId(String personDataId,List<Opportunity> list);

}