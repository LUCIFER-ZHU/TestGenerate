package cn.ibizlab.sample.core.sample.service.impl;

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
import cn.ibizlab.sample.core.sample.domain.Example;
import cn.ibizlab.sample.core.sample.filter.ExampleSearchContext;
import cn.ibizlab.sample.core.sample.service.IExampleService;
import cn.ibizlab.sample.core.sample.mapper.ExampleMapper;
import cn.ibizlab.util.helper.CachedBeanCopier;
import cn.ibizlab.util.helper.DEFieldCacheMap;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.core.conditions.Wrapper;


/**
 * 实体[示例] 服务对象接口实现
 */
@Slf4j
@Service("ExampleServiceImpl")
public class ExampleServiceImpl extends ServiceImpl<ExampleMapper,Example> implements IExampleService {

    protected IExampleService exampleService = SpringContextHolder.getBean(this.getClass());

    @Autowired
    @Lazy
    protected cn.ibizlab.sample.core.sample.service.ICityService cityService;
   
    @Autowired
    @Lazy
    protected cn.ibizlab.sample.core.sample.service.IDistrictService districtService;
   
    @Autowired
    @Lazy
    protected cn.ibizlab.sample.core.sample.service.IProvinceService provinceService;
   

    protected int batchSize = 500;

    public Example get(Example et) {
        Example rt = this.baseMapper.selectEntity(et);
        Assert.notNull(rt,"数据不存在,示例:"+et.getExampleId());
        CachedBeanCopier.copy(rt, et);
        return et;
    }
    
    public List<Example> getByEntities(List<Example> entities) {
        return this.baseMapper.selectEntities(entities);
    }

    public void fillParentData(Example et) {
        
    }

    public Example getDraft(Example et) {
        fillParentData(et);
        return et;
    }

    public boolean checkKey(Example et) {
        return this.count(Wrappers.lambdaQuery(et))>0;
    }

    @Override
    @Transactional
    public boolean create(Example et) {
        fillParentData(et);
        if(!this.retBool(this.baseMapper.insert(et))) 
            return false;
        get(et);
        return true;
    }
    @Transactional
    public boolean createBatch(List<Example> list) {
        list.forEach(et->fillParentData(et));
        this.saveBatch(list, batchSize);        
        return true;
    }

    @Transactional
    public boolean update(Example et) {
        fillParentData(et);
        if(!update(et, (Wrapper) et.getUpdateWrapper(true)
                .eq("exampleid", et.getExampleId())
            )) {
            return false;
        }
        get(et);
        return true;
    }

    @Transactional
    public boolean updateBatch(List<Example> list) {
        list.forEach(et->fillParentData(et));
        updateBatchById(list, batchSize);
        return true;
    }

    @Transactional
    public boolean save(Example et) {
        if(checkKey(et))
            return exampleService.update(et);
        else
            return exampleService.create(et);
    }

    @Transactional
    public boolean saveBatch(List<Example> list) {
        List<Example> rt=this.getByEntities(list);
        Set<Serializable> keys=new HashSet<>();
        rt.forEach(et->{
            Serializable key = et.getExampleId();
            if(!ObjectUtils.isEmpty(key))
                keys.add(key);
        });
        List<Example> _create=new ArrayList<>();
        List<Example> _update=new ArrayList<>();
        list.forEach(et-> {
            Serializable key = et.getExampleId();
            if(keys.contains(key))
                _update.add(et);
            else
                _create.add(et);
        });
        List rtList=new ArrayList<>();
        if(_update.size()>0 && (!exampleService.updateBatch(_update)))
            return false;
        if(_create.size()>0 && (!exampleService.createBatch(_create)))
            return false;
        return true;
    }

    @Transactional
    public boolean remove(Example et) {
        String key = et.getExampleId();

        if(!remove(new QueryWrapper<Example>()
                .eq("exampleid", et.getExampleId())
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

    @Transactional
    public Example calcPf(Example et) {
        return et;
    }
    @Transactional
    public boolean calcPfBatch(List<Example> list) {
        return true;
    }

    @Transactional
    public Example calcPf2(Example et) {
        return et;
    }
    @Transactional
    public boolean calcPf2Batch(List<Example> list) {
        return true;
    }

    @Transactional
    public Example clearContent(Example et) {
        return et;
    }
    @Transactional
    public boolean clearContentBatch(List<Example> list) {
        return true;
    }

    @Transactional
    public Example prepareCtx(Example et) {
        return et;
    }
    @Transactional
    public boolean prepareCtxBatch(List<Example> list) {
        return true;
    }

    public Page<Example> searchDefault(ExampleSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Example> pages=baseMapper.searchDefault(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Example>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }
    public List<Example> listDefault(ExampleSearchContext context) {
        return baseMapper.listDefault(context,context.getSelectCond());
    }

    public Page<Example> searchEmpty(ExampleSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Example> pages=baseMapper.searchEmpty(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Example>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }
    public List<Example> listEmpty(ExampleSearchContext context) {
        return baseMapper.listEmpty(context,context.getSelectCond());
    }

    public List<Example> selectByCityId(String cityId) {
        return baseMapper.selectByCityId(cityId);
    }

    public boolean removeByCityId(String cityId) {
        return this.remove(new QueryWrapper<Example>().eq("cityid",cityId));
    }

    public boolean resetByCityId(String cityId) {
        return this.update(new UpdateWrapper<Example>().set("cityid",null).eq("cityid",cityId));
    }

    public boolean saveByCityId(String cityId,List<Example> list) {
        if(list==null)
            return true;
        Set<String> delIds=new HashSet<String>();
        List<Example> _update=new ArrayList<Example>();
        List<Example> _create=new ArrayList<Example>();
        for(Example before:selectByCityId(cityId)){
            delIds.add(before.getExampleId());
        }
        for(Example sub:list) {
            sub.setCityId(cityId);
            if(ObjectUtils.isEmpty(sub.getExampleId()))
                sub.setExampleId((String)sub.getDefaultKey(true));
            if(delIds.contains(sub.getExampleId())) {
                delIds.remove(sub.getExampleId());
                _update.add(sub);
            }
            else
                _create.add(sub);
        }
        if(_update.size()>0 && (!exampleService.updateBatch(_update)))
            return false;
        if(_create.size()>0 && (!exampleService.createBatch(_create)))
            return false;
        if(delIds.size()>0 && (!exampleService.removeBatch(delIds)))
            return false;
        return true;
    }

    public List<Example> selectByDistrictId(String districtId) {
        return baseMapper.selectByDistrictId(districtId);
    }

    public boolean removeByDistrictId(String districtId) {
        return this.remove(new QueryWrapper<Example>().eq("districtid",districtId));
    }

    public boolean resetByDistrictId(String districtId) {
        return this.update(new UpdateWrapper<Example>().set("districtid",null).eq("districtid",districtId));
    }

    public boolean saveByDistrictId(String districtId,List<Example> list) {
        if(list==null)
            return true;
        Set<String> delIds=new HashSet<String>();
        List<Example> _update=new ArrayList<Example>();
        List<Example> _create=new ArrayList<Example>();
        for(Example before:selectByDistrictId(districtId)){
            delIds.add(before.getExampleId());
        }
        for(Example sub:list) {
            sub.setDistrictId(districtId);
            if(ObjectUtils.isEmpty(sub.getExampleId()))
                sub.setExampleId((String)sub.getDefaultKey(true));
            if(delIds.contains(sub.getExampleId())) {
                delIds.remove(sub.getExampleId());
                _update.add(sub);
            }
            else
                _create.add(sub);
        }
        if(_update.size()>0 && (!exampleService.updateBatch(_update)))
            return false;
        if(_create.size()>0 && (!exampleService.createBatch(_create)))
            return false;
        if(delIds.size()>0 && (!exampleService.removeBatch(delIds)))
            return false;
        return true;
    }

    public List<Example> selectByProvinceId(String provinceId) {
        return baseMapper.selectByProvinceId(provinceId);
    }

    public boolean removeByProvinceId(String provinceId) {
        return this.remove(new QueryWrapper<Example>().eq("provinceid",provinceId));
    }

    public boolean resetByProvinceId(String provinceId) {
        return this.update(new UpdateWrapper<Example>().set("provinceid",null).eq("provinceid",provinceId));
    }

    public boolean saveByProvinceId(String provinceId,List<Example> list) {
        if(list==null)
            return true;
        Set<String> delIds=new HashSet<String>();
        List<Example> _update=new ArrayList<Example>();
        List<Example> _create=new ArrayList<Example>();
        for(Example before:selectByProvinceId(provinceId)){
            delIds.add(before.getExampleId());
        }
        for(Example sub:list) {
            sub.setProvinceId(provinceId);
            if(ObjectUtils.isEmpty(sub.getExampleId()))
                sub.setExampleId((String)sub.getDefaultKey(true));
            if(delIds.contains(sub.getExampleId())) {
                delIds.remove(sub.getExampleId());
                _update.add(sub);
            }
            else
                _create.add(sub);
        }
        if(_update.size()>0 && (!exampleService.updateBatch(_update)))
            return false;
        if(_create.size()>0 && (!exampleService.createBatch(_create)))
            return false;
        if(delIds.size()>0 && (!exampleService.removeBatch(delIds)))
            return false;
        return true;
    }


}