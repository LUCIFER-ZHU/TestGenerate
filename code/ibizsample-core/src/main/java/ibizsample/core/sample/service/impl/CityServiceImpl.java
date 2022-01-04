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
import ibizsample.core.sample.domain.City;
import ibizsample.core.sample.filter.CitySearchContext;
import ibizsample.core.sample.service.ICityService;
import ibizsample.core.sample.mapper.CityMapper;
import cn.ibizlab.util.helper.CachedBeanCopier;
import cn.ibizlab.util.helper.DEFieldCacheMap;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.core.conditions.Wrapper;


/**
 * 实体[市] 服务对象接口实现
 */
@Slf4j
@Service("CityServiceImpl")
public class CityServiceImpl extends ServiceImpl<CityMapper,City> implements ICityService {

    protected ICityService cityService = SpringContextHolder.getBean(this.getClass());

    @Autowired
    @Lazy
    protected ibizsample.core.sample.service.IProvinceService provinceService;
   

    protected int batchSize = 500;

    public City get(City et) {
        City rt = this.baseMapper.selectEntity(et);
        Assert.notNull(rt,"数据不存在,市:"+et.getCityId());
        CachedBeanCopier.copy(rt, et);
        return et;
    }
    
    public List<City> getByEntities(List<City> entities) {
        return this.baseMapper.selectEntities(entities);
    }

    public void fillParentData(City et) {
        
    }

    public City getDraft(City et) {
        fillParentData(et);
        return et;
    }

    public boolean checkKey(City et) {
        return this.count(Wrappers.lambdaQuery(et))>0;
    }

    @Override
    @Transactional
    public boolean create(City et) {
        fillParentData(et);
        if(!this.retBool(this.baseMapper.insert(et))) 
            return false;
        get(et);
        return true;
    }
    @Transactional
    public boolean createBatch(List<City> list) {
        list.forEach(et->fillParentData(et));
        this.saveBatch(list, batchSize);        
        return true;
    }

    @Transactional
    public boolean update(City et) {
        fillParentData(et);
        if(!update(et, (Wrapper) et.getUpdateWrapper(true)
                .eq("cityid", et.getCityId())
            )) {
            return false;
        }
        get(et);
        return true;
    }

    @Transactional
    public boolean updateBatch(List<City> list) {
        list.forEach(et->fillParentData(et));
        updateBatchById(list, batchSize);
        return true;
    }

    @Transactional
    public boolean save(City et) {
        if(checkKey(et))
            return cityService.update(et);
        else
            return cityService.create(et);
    }

    @Transactional
    public boolean saveBatch(List<City> list) {
        List<City> rt=this.getByEntities(list);
        Set<Serializable> keys=new HashSet<>();
        rt.forEach(et->{
            Serializable key = et.getCityId();
            if(!ObjectUtils.isEmpty(key))
                keys.add(key);
        });
        List<City> create=new ArrayList<>();
        List<City> update=new ArrayList<>();
        list.forEach(et-> {
            Serializable key = et.getCityId();
            if(keys.contains(key))
                update.add(et);
            else
                create.add(et);
        });
        List rtList=new ArrayList<>();
        if(update.size()>0 && (!cityService.updateBatch(update)))
            return false;
        if(create.size()>0 && (!cityService.createBatch(create)))
            return false;
        return true;
    }

    @Transactional
    public boolean remove(City et) {
        String key = et.getCityId();

        if(!remove(new QueryWrapper<City>()
                .eq("cityid", et.getCityId())
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

    public Page<City> searchDefault(CitySearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<City> pages=baseMapper.searchDefault(context.getPages(),context,context.getSelectCond());
        return new PageImpl<City>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }
    public List<City> listDefault(CitySearchContext context) {
        return baseMapper.listDefault(context,context.getSelectCond());
    }

    public List<City> selectByProvinceId(String provinceId) {
        return baseMapper.selectByProvinceId(provinceId);
    }

    public boolean removeByProvinceId(String provinceId) {
        return this.remove(new QueryWrapper<City>().eq("provinceid",provinceId));
    }

    public boolean resetByProvinceId(String provinceId) {
        return this.update(new UpdateWrapper<City>().set("provinceid",null).eq("provinceid",provinceId));
    }

    public boolean saveByProvinceId(String provinceId,List<City> list) {
        if(list==null)
            return true;
        Set<String> delIds=new HashSet<String>();
        List<City> _update=new ArrayList<City>();
        List<City> _create=new ArrayList<City>();
        for(City before:selectByProvinceId(provinceId)){
            delIds.add(before.getCityId());
        }
        for(City sub:list) {
            sub.setProvinceId(provinceId);
            if(ObjectUtils.isEmpty(sub.getCityId()))
                sub.setCityId((String)sub.getDefaultKey(true));
            if(delIds.contains(sub.getCityId())) {
                delIds.remove(sub.getCityId());
                _update.add(sub);
            }
            else
                _create.add(sub);
        }
        if(_update.size()>0 && (!cityService.updateBatch(_update)))
            return false;
        if(_create.size()>0 && (!cityService.createBatch(_create)))
            return false;
        if(delIds.size()>0 && (!cityService.removeBatch(delIds)))
            return false;
        return true;
    }


}