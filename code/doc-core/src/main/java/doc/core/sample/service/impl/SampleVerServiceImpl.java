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
import doc.core.sample.domain.SampleVer;
import doc.core.sample.filter.SampleVerSearchContext;
import doc.core.sample.service.ISampleVerService;
import doc.core.sample.mapper.SampleVerMapper;
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
 * 实体[示例版本] 服务对象接口实现
 */
@Slf4j
@Service("SampleVerService")
public class SampleVerServiceImpl extends ServiceImpl<SampleVerMapper,SampleVer> implements ISampleVerService {

    protected ISampleVerService getProxyService() {
        return SpringContextHolder.getBean(this.getClass());
    }


    protected int batchSize = 500;

    public SampleVer get(SampleVer et) {
        SampleVer rt = this.baseMapper.selectEntity(et);
        Assert.notNull(rt,"数据不存在,示例版本:"+et.getSampleVerId());
        BeanUtils.copyProperties(rt, et);
        return et;
    }
    
    public List<SampleVer> getByEntities(List<SampleVer> entities) {
        return this.baseMapper.selectEntities(entities);
    }


    public SampleVer getDraft(SampleVer et) {
        return et;
    }

    public boolean checkKey(SampleVer et) {
        return this.count(Wrappers.lambdaQuery(et))>0;
    }

    @Override
    @Transactional
    public boolean create(SampleVer et) {
        if(!this.retBool(this.baseMapper.insert(et))) 
            return false;
        get(et);
        return true;
    }
    @Transactional
    public boolean createBatch(List<SampleVer> list) {
        this.saveBatch(list, batchSize);        
        return true;
    }

    @Transactional
    public boolean update(SampleVer et) {
        if(!update(et, (Wrapper) et.getUpdateWrapper(true)
                .eq("sampleverid", et.getSampleVerId())
            )) {
            return false;
        }
        get(et);
        return true;
    }

    @Transactional
    public boolean updateBatch(List<SampleVer> list) {
        updateBatchById(list, batchSize);
        return true;
    }

    @Transactional
    public boolean save(SampleVer et) {
        if(checkKey(et))
            return getProxyService().update(et);
        else
            return getProxyService().create(et);
    }

    @Transactional
    public boolean saveBatch(List<SampleVer> list) {
        List<SampleVer> rt=this.getByEntities(list);
        Set<Serializable> keys=new HashSet<>();
        rt.forEach(et->{
            Serializable key = et.getSampleVerId();
            if(!ObjectUtils.isEmpty(key))
                keys.add(key);
        });
        List<SampleVer> _create=new ArrayList<>();
        List<SampleVer> _update=new ArrayList<>();
        list.forEach(et-> {
            Serializable key = et.getSampleVerId();
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
    public boolean remove(SampleVer et) {
        String key = et.getSampleVerId();

        if(!remove(new QueryWrapper<SampleVer>()
                .eq("sampleverid", et.getSampleVerId())
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

    public Page<SampleVer> searchDefault(SampleVerSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<SampleVer> pages=baseMapper.searchDefault(context.getPages(),context,context.getSelectCond());
        return new PageImpl<SampleVer>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }
    public List<SampleVer> listDefault(SampleVerSearchContext context) {
        return baseMapper.listDefault(context,context.getSelectCond());
    }

    public Page<SampleVer> searchJavar7D(SampleVerSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<SampleVer> pages=baseMapper.searchJavar7D(context.getPages(),context,context.getSelectCond());
        return new PageImpl<SampleVer>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }
    public List<SampleVer> listJavar7D(SampleVerSearchContext context) {
        return baseMapper.listJavar7D(context,context.getSelectCond());
    }

    public Page<SampleVer> searchMobr7D(SampleVerSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<SampleVer> pages=baseMapper.searchMobr7D(context.getPages(),context,context.getSelectCond());
        return new PageImpl<SampleVer>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }
    public List<SampleVer> listMobr7D(SampleVerSearchContext context) {
        return baseMapper.listMobr7D(context,context.getSelectCond());
    }

    public Page<SampleVer> searchWebr7D(SampleVerSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<SampleVer> pages=baseMapper.searchWebr7D(context.getPages(),context,context.getSelectCond());
        return new PageImpl<SampleVer>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }
    public List<SampleVer> listWebr7D(SampleVerSearchContext context) {
        return baseMapper.listWebr7D(context,context.getSelectCond());
    }




}