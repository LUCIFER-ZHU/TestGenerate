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
import ibizsample.core.sample.domain.CounterData2;
import ibizsample.core.sample.filter.CounterData2SearchContext;
import ibizsample.core.sample.service.ICounterData2Service;
import ibizsample.core.sample.mapper.${item.getCodeName()}Mapper;
import ibizsample.util.helper.CachedBeanCopier;
import ibizsample.util.helper.DEFieldCacheMap;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.conditions.Wrapper;


/**
 * 实体[计数器数据2] 服务对象接口实现
 */
@Slf4j
@Service("CounterData2ServiceImpl")
public class CounterData2ServiceImpl extends ServiceImpl<CounterData2> implements ICounterData2Service {

    protected ICounterData2Service counterData2Service = SpringContextHolder.getBean(this.getClass());



    public CounterData2 get(String key) {
        CounterData2 et = getById(key);
        Assert.notNull(et,"数据不存在,计数器数据2:"+key);
    }
    List<CounterData2> getByIds(Collection<String> idList);
    List<CounterData2> getByEntities(Collection<CounterData2> entities);

    CounterData2 getDraft(CounterData2 et);

    boolean checkKey(CounterData2 et);

    @Override
    @Transactional
    public boolean create(CounterData2 et) {
        if(!this.retBool(this.baseMapper.insert(et))) 
            return false;
    }
    @Transactional
    public boolean createBatch(List<CounterData2> list) {

    }

    boolean update(CounterData2 et);
    boolean updateBatch(List<CounterData2> list);

    boolean save(CounterData2 et);
    boolean saveBatch(List<CounterData2> list);

    boolean remove(String key);
    boolean removeBatch(Collection<String> idList);

    CounterData2 (CounterData2 et);
    boolean Batch(List<CounterData2> list);

    Page<CounterData2> searchDefault(CounterData2SearchContext context);
    List<CounterData2> listDefault(CounterData2SearchContext context);


}