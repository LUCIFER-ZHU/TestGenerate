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
import ibizsample.core.sample.domain.District;
import ibizsample.core.sample.filter.DistrictSearchContext;
import ibizsample.core.sample.service.IDistrictService;
import ibizsample.core.sample.mapper.DistrictMapper;
import cn.ibizlab.util.helper.CachedBeanCopier;
import cn.ibizlab.util.helper.DEFieldCacheMap;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.core.conditions.Wrapper;


/**
 * 实体[区] 服务对象接口实现
 */
@Slf4j
@Service("DistrictServiceImpl")
public class DistrictServiceImpl extends ServiceImpl<DistrictMapper,District> implements IDistrictService {

    protected IDistrictService districtService = SpringContextHolder.getBean(this.getClass());

    @Autowired
    @Lazy
    protected ibizsample.core.sample.service.ICityService cityService;
   

    protected int batchSize = 500;

    public District get(District et) {
        District rt = this.baseMapper.selectEntity(et);
        Assert.notNull(rt,"数据不存在,区:"+et.getDistrictId());
        CachedBeanCopier.copy(rt, et);
        return et;
    }
    
    public List<District> getByEntities(List<District> entities) {
        return this.baseMapper.selectEntities(entities);
    }

    public void fillParentData(District et) {
        
    }

    public District getDraft(District et) {
        fillParentData(et);
        return et;
    }

    public boolean checkKey(District et) {
        return this.count(Wrappers.lambdaQuery(et))>0;
    }

    @Override
    @Transactional
    public boolean create(District et) {
        fillParentData(et);
        if(!this.retBool(this.baseMapper.insert(et))) 
            return false;
        get(et);
        return true;
    }
    @Transactional
    public boolean createBatch(List<District> list) {
        list.forEach(et->fillParentData(et));
        this.saveBatch(list, batchSize);        
        return true;
    }

    @Transactional
    public boolean update(District et) {
        fillParentData(et);
        if(!update(et, (Wrapper) et.getUpdateWrapper(true)
                .eq("districtid", et.getDistrictId())
            )) {
            return false;
        }
        get(et);
        return true;
    }

    @Transactional
    public boolean updateBatch(List<District> list) {
        list.forEach(et->fillParentData(et));
        updateBatchById(list, batchSize);
        return true;
    }

    @Transactional
    public boolean save(District et) {
        if(checkKey(et))
            return districtService.update(et);
        else
            return districtService.create(et);
    }

    @Transactional
    public boolean saveBatch(List<District> list) {
        List<District> rt=this.getByEntities(list);
        Set<Serializable> keys=new HashSet<>();
        rt.forEach(et->{
            Serializable key = et.getDistrictId();
            if(!ObjectUtils.isEmpty(key))
                keys.add(key);
        });
        List<District> create=new ArrayList<>();
        List<District> update=new ArrayList<>();
        list.forEach(et-> {
            Serializable key = et.getDistrictId();
            if(keys.contains(key))
                update.add(et);
            else
                create.add(et);
        });
        List rtList=new ArrayList<>();
        if(update.size()>0 && (!districtService.updateBatch(update)))
            return false;
        if(create.size()>0 && (!districtService.createBatch(create)))
            return false;
        return true;
    }

    @Transactional
    public boolean remove(District et) {
        String key = et.getDistrictId();

        if(!remove(new QueryWrapper<District>()
                .eq("districtid", et.getDistrictId())
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

    public Page<District> searchDefault(DistrictSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<District> pages=baseMapper.searchDefault(context.getPages(),context,context.getSelectCond());
        return new PageImpl<District>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }
    public List<District> listDefault(DistrictSearchContext context) {
        return baseMapper.listDefault(context,context.getSelectCond());
    }

    public List<District> selectByCityId(String cityId) {
        return baseMapper.selectByCityId(cityId);
    }

    public boolean removeByCityId(String cityId) {
        return this.remove(new QueryWrapper<District>().eq("cityid",cityId));
    }

    public boolean resetByCityId(String cityId) {
        return this.update(new UpdateWrapper<District>().set("cityid",null).eq("cityid",cityId));
    }

    public boolean saveByCityId(String cityId,List<District> list) {
        if(list==null)
            return true;
        Set<String> delIds=new HashSet<String>();
        List<District> _update=new ArrayList<District>();
        List<District> _create=new ArrayList<District>();
        for(District before:selectByCityId(cityId)){
            delIds.add(before.getDistrictId());
        }
        for(District sub:list) {
            sub.setCityId(cityId);
            if(ObjectUtils.isEmpty(sub.getDistrictId()))
                sub.setDistrictId((String)sub.getDefaultKey(true));
            if(delIds.contains(sub.getDistrictId())) {
                delIds.remove(sub.getDistrictId());
                _update.add(sub);
            }
            else
                _create.add(sub);
        }
        if(_update.size()>0 && (!districtService.updateBatch(_update)))
            return false;
        if(_create.size()>0 && (!districtService.createBatch(_create)))
            return false;
        if(delIds.size()>0 && (!districtService.removeBatch(delIds)))
            return false;
        return true;
    }


}