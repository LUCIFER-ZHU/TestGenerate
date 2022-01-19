package doc.core.sample.service.impl;

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
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Value;
import cn.ibizlab.util.errors.BadRequestAlertException;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Lazy;
import doc.core.sample.domain.CounterData;
import doc.core.sample.filter.CounterDataSearchContext;
import doc.core.sample.service.ICounterDataService;
import doc.core.sample.mapper.CounterDataMapper;
import cn.ibizlab.util.helper.CachedBeanCopier;
import cn.ibizlab.util.helper.DEFieldCacheMap;
import cn.ibizlab.util.security.AuthenticationUser;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.core.conditions.Wrapper;


/**
 * 实体[计数器数据] 服务对象接口实现
 */
@Slf4j
@Service("CounterDataService")
public class CounterDataServiceImpl extends ServiceImpl<CounterDataMapper,CounterData> implements ICounterDataService {

    protected ICounterDataService getProxyService() {
        return SpringContextHolder.getBean(this.getClass());
    }


    protected int batchSize = 500;

    public CounterData get(CounterData et) {
        CounterData rt = this.baseMapper.selectEntity(et);
        Assert.notNull(rt,"数据不存在,计数器数据:"+et.getCounterDataId());
        BeanUtils.copyProperties(rt, et);
        return et;
    }
    
    public List<CounterData> getByEntities(List<CounterData> entities) {
        return this.baseMapper.selectEntities(entities);
    }


    public CounterData getDraft(CounterData et) {
        return et;
    }

    public boolean checkKey(CounterData et) {
        return this.count(Wrappers.lambdaQuery(et))>0;
    }

    @Override
    @Transactional
    public boolean create(CounterData et) {
        if(!this.retBool(this.baseMapper.insert(et))) 
            return false;
        get(et);
        return true;
    }
    @Transactional
    public boolean createBatch(List<CounterData> list) {
        this.saveBatch(list, batchSize);        
        return true;
    }

    @Transactional
    public boolean update(CounterData et) {
        if(!update(et, (Wrapper) et.getUpdateWrapper(true)
                .eq("counterdataid", et.getCounterDataId())
            )) {
            return false;
        }
        get(et);
        return true;
    }

    @Transactional
    public boolean updateBatch(List<CounterData> list) {
        updateBatchById(list, batchSize);
        return true;
    }

    @Transactional
    public boolean save(CounterData et) {
        if(checkKey(et))
            return getProxyService().update(et);
        else
            return getProxyService().create(et);
    }

    @Transactional
    public boolean saveBatch(List<CounterData> list) {
        List<CounterData> rt=this.getByEntities(list);
        Set<Serializable> keys=new HashSet<>();
        rt.forEach(et->{
            Serializable key = et.getCounterDataId();
            if(!ObjectUtils.isEmpty(key))
                keys.add(key);
        });
        List<CounterData> _create=new ArrayList<>();
        List<CounterData> _update=new ArrayList<>();
        list.forEach(et-> {
            Serializable key = et.getCounterDataId();
            if(keys.contains(key))
                _update.add(et);
            else
                _create.add(et);
        });
        List rtList=new ArrayList<>();
        if(_update.size()>0 && (!getProxyService().updateBatch(_update)))
            return false;
        if(_create.size()>0 && (!getProxyService().createBatch(_create)))
            return false;
        return true;
    }

    @Transactional
    public boolean remove(CounterData et) {
        String key = et.getCounterDataId();

        if(!remove(new QueryWrapper<CounterData>()
                .eq("counterdataid", et.getCounterDataId())
            )) {
            return false;
        }
        return true ;
    }
    
    @Transactional
    public boolean removeBatch(Collection<String> ids) {
        if(!removeByIds(ids))
            return false;
        return true;
    }

    public Page<CounterData> searchDefault(CounterDataSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<CounterData> pages=baseMapper.searchDefault(context.getPages(),context,context.getSelectCond());
        return new PageImpl<CounterData>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }
    public List<CounterData> listDefault(CounterDataSearchContext context) {
        return baseMapper.listDefault(context,context.getSelectCond());
    }




}