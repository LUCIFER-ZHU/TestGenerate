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

import cn.ibizlab.util.security.SpringContextHolder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cglib.beans.BeanCopier;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.util.ObjectUtils;
import org.springframework.util.StringUtils;
import org.springframework.util.Assert;
import org.springframework.beans.factory.annotation.Value;
import cn.ibizlab.util.errors.BadRequestAlertException;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Lazy;
import ibizsample.core.sample.domain.CounterData2;
import ibizsample.core.sample.filter.CounterData2SearchContext;
import ibizsample.core.sample.service.ICounterData2Service;
import ibizsample.core.sample.mapper.CounterData2Mapper;
import cn.ibizlab.util.helper.CachedBeanCopier;
import cn.ibizlab.util.helper.DEFieldCacheMap;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.core.conditions.Wrapper;


/**
 * 实体[计数器数据2] 服务对象接口实现
 */
@Slf4j
@Service("CounterData2ServiceImpl")
public class CounterData2ServiceImpl extends ServiceImpl<CounterData2Mapper,CounterData2> implements ICounterData2Service {

    protected ICounterData2Service counterData2Service = SpringContextHolder.getBean(this.getClass());


    protected int batchSize = 500;

    public CounterData2 get(CounterData2 et) {
        CounterData2 rt = this.baseMapper.selectEntity(et);
        Assert.notNull(rt,"数据不存在,计数器数据2:"+et.getCounterData2Id());
        CachedBeanCopier.copy(rt, et);
        return et;
    }
    
    public List<CounterData2> getByEntities(List<CounterData2> entities) {
        return this.baseMapper.selectEntities(entities);
    }


    public CounterData2 getDraft(CounterData2 et) {
        return et;
    }

    public boolean checkKey(CounterData2 et) {
        return this.count(Wrappers.lambdaQuery(et))>0;
    }

    @Override
    @Transactional
    public boolean create(CounterData2 et) {
        if(!this.retBool(this.baseMapper.insert(et))) 
            return false;
        get(et);
        return true;
    }
    @Transactional
    public boolean createBatch(List<CounterData2> list) {
        this.saveBatch(list, batchSize);        
        return true;
    }

    @Transactional
    public boolean update(CounterData2 et) {
        if(!update(et, (Wrapper) et.getUpdateWrapper(true)
                .eq("counterdata2id", et.getCounterData2Id())
            )) {
            return false;
        }
        get(et);
        return true;
    }

    @Transactional
    public boolean updateBatch(List<CounterData2> list) {
        updateBatchById(list, batchSize);
        return true;
    }

    @Transactional
    public boolean save(CounterData2 et) {
        if(checkKey(et))
            return counterData2Service.update(et);
        else
            return counterData2Service.create(et);
    }

    @Transactional
    public boolean saveBatch(List<CounterData2> list) {
        List<CounterData2> rt=this.getByEntities(list);
        Set<Serializable> keys=new HashSet<>();
        rt.forEach(et->{
            Serializable key = et.getCounterData2Id();
            if(!ObjectUtils.isEmpty(key))
                keys.add(key);
        });
        List<CounterData2> create=new ArrayList<>();
        List<CounterData2> update=new ArrayList<>();
        list.forEach(et-> {
            Serializable key = et.getCounterData2Id();
            if(keys.contains(key))
                update.add(et);
            else
                create.add(et);
        });
        List rtList=new ArrayList<>();
        if(update.size()>0 && (!counterData2Service.updateBatch(update)))
            return false;
        if(create.size()>0 && (!counterData2Service.createBatch(create)))
            return false;
        return true;
    }

    @Transactional
    public boolean remove(CounterData2 et) {
        String key = et.getCounterData2Id();

        if(!remove(new QueryWrapper<CounterData2>()
                .eq("counterdata2id", et.getCounterData2Id())
            )) {
            return false;
        }
        return true ;
    }
    
    @Transactional
    public boolean removeBatch(Collection<String> ids) {
        removeByIds(ids);
        return true;
    }

    @Transactional
    public CounterData2 getRandom(CounterData2 et) {
        return et;
    }
    @Transactional
    public boolean getRandomBatch(List<CounterData2> list) {
        return true;
    }

    public Page<CounterData2> searchDefault(CounterData2SearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<CounterData2> pages=baseMapper.searchDefault(context.getPages(),context,context.getSelectCond());
        return new PageImpl<CounterData2>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }
    public List<CounterData2> listDefault(CounterData2SearchContext context) {
        return baseMapper.listDefault(context,context.getSelectCond());
    }


}