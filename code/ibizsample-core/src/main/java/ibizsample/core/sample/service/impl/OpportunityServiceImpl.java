package ibizsample.core.sample.service.impl;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.Map;
import java.util.HashSet;
import java.util.HashMap;
import java.util.Collection;
import java.util.Objects;
import java.util.Optional;
import java.math.BigInteger;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cglib.beans.BeanCopier;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.util.ObjectUtils;
import org.springframework.util.StringUtils;
import org.springframework.beans.factory.annotation.Value;
import ibizsample.util.errors.BadRequestAlertException;
<#system.enableGlobalTransaction>
import io.seata.spring.annotation.GlobalTransactional;
</system.enableGlobalTransaction>
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Lazy;
import ibizsample.core.sample.domain.Opportunity;
import ibizsample.core.sample.filter.OpportunitySearchContext;
import ibizsample.core.sample.service.IOpportunityService;
import ibizsample.core.sample.mapper.${item.getCodeName()}Mapper;
import ibizsample.util.helper.CachedBeanCopier;
import ibizsample.util.helper.DEFieldCacheMap;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.conditions.Wrapper;


/**
 * 实体[商机] 服务对象接口实现
 */
@Slf4j
@Service("OpportunityServiceImpl")
public class OpportunityServiceImpl extends ServiceImpl<Opportunity> implements IOpportunityService {

    protected IOpportunityService opportunityService = SpringContextHolder.getBean(this.getClass());

    @Autowired
    @Lazy
    protected ibizsample.core.Customer.service.ICustomerService customerService;

    @Autowired
    @Lazy
    protected ibizsample.core.PersonData.service.IPersonDataService personDataService;



    public Opportunity get(String key) {
        Opportunity et = getById(key);
        Assert.notNull(et,"数据不存在,商机:"+key);
    }
    List<Opportunity> getByIds(Collection<String> idList);
    List<Opportunity> getByEntities(Collection<Opportunity> entities);

    Opportunity getDraft(Opportunity et);

    boolean checkKey(Opportunity et);

    @Override
    @Transactional
    public boolean create(Opportunity et) {
        fillParentData(et);
        if(!this.retBool(this.baseMapper.insert(et))) 
            return false;

        return true;
    }
    @Transactional
    public boolean createBatch(List<Opportunity> list) {

    }

    boolean update(Opportunity et);
    boolean updateBatch(List<Opportunity> list);

    boolean save(Opportunity et);
    boolean saveBatch(List<Opportunity> list);

    boolean remove(String key);
    boolean removeBatch(Collection<String> idList);

    Opportunity (Opportunity et);
    boolean Batch(List<Opportunity> list);

    Page<Opportunity> searchDefault(OpportunitySearchContext context);
    List<Opportunity> listDefault(OpportunitySearchContext context);

    List<Opportunity> selectByCustomerId(String customerId);
    boolean removeByCustomerId(String customerId);
    boolean saveByCustomerId(String customerId,List<Opportunity> list);

    List<Opportunity> selectByPersonDataId(String personDataId);
    boolean removeByPersonDataId(String personDataId);
    boolean saveByPersonDataId(String personDataId,List<Opportunity> list);


}