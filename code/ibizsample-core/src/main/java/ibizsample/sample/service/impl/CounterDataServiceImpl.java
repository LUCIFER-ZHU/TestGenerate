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
import ibizsample.core.sample.domain.CounterData;
import ibizsample.core.sample.filter.CounterDataSearchContext;
import ibizsample.core.sample.service.ICounterDataService;
import ibizsample.core.sample.mapper.${item.getCodeName()}Mapper;
import ibizsample.util.helper.CachedBeanCopier;
import ibizsample.util.helper.DEFieldCacheMap;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.conditions.Wrapper;


/**
 * 实体[计数器数据] 服务对象接口实现
 */
@Slf4j
@Service("CounterDataServiceImpl")
public class CounterDataServiceImpl extends ServiceImpl<CounterData> implements ICounterDataService {

    protected ICounterDataService counterDataService = SpringContextHolder.getBean(this.getClass());



    public CounterData get(String key) {
        CounterData et = getById(key);
        Assert.notNull(et,"数据不存在,计数器数据:"+key);
    }
    List<CounterData> getByIds(Collection<String> idList);
    List<CounterData> getByEntities(Collection<CounterData> entities);

    CounterData getDraft(CounterData et);

    boolean checkKey(CounterData et);

    @Override
    @Transactional
    public boolean create(CounterData et) {
        if(!this.retBool(this.baseMapper.insert(et))) 
            return false;
    }
    @Transactional
    public boolean createBatch(List<CounterData> list) {

    }

    boolean update(CounterData et);
    boolean updateBatch(List<CounterData> list);

    boolean save(CounterData et);
    boolean saveBatch(List<CounterData> list);

    boolean remove(String key);
    boolean removeBatch(Collection<String> idList);

    CounterData (CounterData et);
    boolean Batch(List<CounterData> list);

    Page<CounterData> searchDefault(CounterDataSearchContext context);
    List<CounterData> listDefault(CounterDataSearchContext context);


}