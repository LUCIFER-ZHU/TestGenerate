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
import ibizsample.core.sample.domain.ImpExpData;
import ibizsample.core.sample.filter.ImpExpDataSearchContext;
import ibizsample.core.sample.service.IImpExpDataService;
import ibizsample.core.sample.mapper.${item.getCodeName()}Mapper;
import ibizsample.util.helper.CachedBeanCopier;
import ibizsample.util.helper.DEFieldCacheMap;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.conditions.Wrapper;


/**
 * 实体[导入导出数据] 服务对象接口实现
 */
@Slf4j
@Service("ImpExpDataServiceImpl")
public class ImpExpDataServiceImpl extends ServiceImpl<ImpExpData> implements IImpExpDataService {

    protected IImpExpDataService impExpDataService = SpringContextHolder.getBean(this.getClass());

    @Autowired
    @Lazy
    protected ibizsample.core.Customer.service.ICustomerService customerService;



    public ImpExpData get(String key) {
        ImpExpData et = getById(key);
        Assert.notNull(et,"数据不存在,导入导出数据:"+key);
    }
    List<ImpExpData> getByIds(Collection<String> idList);
    List<ImpExpData> getByEntities(Collection<ImpExpData> entities);

    ImpExpData getDraft(ImpExpData et);

    boolean checkKey(ImpExpData et);

    @Override
    @Transactional
    public boolean create(ImpExpData et) {
        fillParentData(et);
        if(!this.retBool(this.baseMapper.insert(et))) 
            return false;

        return true;
    }
    @Transactional
    public boolean createBatch(List<ImpExpData> list) {

    }

    boolean update(ImpExpData et);
    boolean updateBatch(List<ImpExpData> list);

    boolean save(ImpExpData et);
    boolean saveBatch(List<ImpExpData> list);

    boolean remove(String key);
    boolean removeBatch(Collection<String> idList);

    ImpExpData (ImpExpData et);
    boolean Batch(List<ImpExpData> list);

    Page<ImpExpData> searchDefault(ImpExpDataSearchContext context);
    List<ImpExpData> listDefault(ImpExpDataSearchContext context);

    List<ImpExpData> selectByCustomerId(String customerId);
    boolean removeByCustomerId(String customerId);
    boolean saveByCustomerId(String customerId,List<ImpExpData> list);


}