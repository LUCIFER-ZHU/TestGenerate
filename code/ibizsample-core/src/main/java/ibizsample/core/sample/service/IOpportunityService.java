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

import ibizsample.core.sample.domain.Opportunity;
import ibizsample.core.sample.filter.OpportunitySearchContext;

public interface IOpportunityService extends IService<Opportunity> {

    Opportunity get(String key);
    List<Opportunity> getByIds(Collection<String> idList);
    List<Opportunity> getByEntities(Collection<Opportunity> entities);

    Opportunity getDraft(Opportunity et);

    boolean checkKey(Opportunity et);

    boolean create(Opportunity et);
    boolean createBatch(List<Opportunity> list);

    boolean update(Opportunity et);
    boolean updateBatch(List<Opportunity> list);

    boolean save(Opportunity et);
    boolean saveBatch(List<Opportunity> list);

    boolean remove(String key);
    boolean removeBatch(Collection<String> idList);

    Page<Opportunity> searchDefault(OpportunitySearchContext context);
    List<Opportunity> listDefault(OpportunitySearchContext context);

    List<Opportunity> selectByCustomerId(String customerId);
    boolean removeByCustomerId(String customerId);
    boolean saveByCustomerId(String customerId,List<Opportunity> list);

    List<Opportunity> selectByPersonDataId(String personDataId);
    boolean removeByPersonDataId(String personDataId);
    boolean saveByPersonDataId(String personDataId,List<Opportunity> list);

}