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
import doc.core.sample.domain.Province;
import doc.core.sample.filter.ProvinceSearchContext;
import doc.core.sample.service.IProvinceService;
import doc.core.sample.mapper.ProvinceMapper;
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
 * 实体[省份] 服务对象接口实现
 */
@Slf4j
@Service("ProvinceService")
public class ProvinceServiceImpl extends ServiceImpl<ProvinceMapper,Province> implements IProvinceService {

    protected IProvinceService getProxyService() {
        return SpringContextHolder.getBean(this.getClass());
    }


    protected int batchSize = 500;

    public Province get(Province et) {
        Province rt = this.baseMapper.selectEntity(et);
        Assert.notNull(rt,"数据不存在,省份:"+et.getProvinceId());
        BeanUtils.copyProperties(rt, et);
        return et;
    }
    
    public List<Province> getByEntities(List<Province> entities) {
        return this.baseMapper.selectEntities(entities);
    }


    public Province getDraft(Province et) {
        return et;
    }

    public boolean checkKey(Province et) {
        return this.count(Wrappers.lambdaQuery(et))>0;
    }

    @Override
    @Transactional
    public boolean create(Province et) {
        if(!this.retBool(this.baseMapper.insert(et))) 
            return false;
        get(et);
        return true;
    }
    @Transactional
    public boolean createBatch(List<Province> list) {
        this.saveBatch(list, batchSize);        
        return true;
    }

    @Transactional
    public boolean update(Province et) {
        if(!update(et, (Wrapper) et.getUpdateWrapper(true)
                .eq("provinceid", et.getProvinceId())
            )) {
            return false;
        }
        get(et);
        return true;
    }

    @Transactional
    public boolean updateBatch(List<Province> list) {
        updateBatchById(list, batchSize);
        return true;
    }

    @Transactional
    public boolean save(Province et) {
        if(checkKey(et))
            return getProxyService().update(et);
        else
            return getProxyService().create(et);
    }

    @Transactional
    public boolean saveBatch(List<Province> list) {
        List<Province> rt=this.getByEntities(list);
        Set<Serializable> keys=new HashSet<>();
        rt.forEach(et->{
            Serializable key = et.getProvinceId();
            if(!ObjectUtils.isEmpty(key))
                keys.add(key);
        });
        List<Province> _create=new ArrayList<>();
        List<Province> _update=new ArrayList<>();
        list.forEach(et-> {
            Serializable key = et.getProvinceId();
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
    public boolean remove(Province et) {
        String key = et.getProvinceId();

        if(!remove(new QueryWrapper<Province>()
                .eq("provinceid", et.getProvinceId())
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

    public Page<Province> searchConditions(ProvinceSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Province> pages=baseMapper.searchConditions(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Province>(com.alibaba.fastjson.JSON.parseArray(com.alibaba.fastjson.JSON.toJSONString(pages.getRecords()),Province.class), context.getPageable(), pages.getTotal());
    }
    public List<Province> listConditions(ProvinceSearchContext context) {
        return com.alibaba.fastjson.JSON.parseArray(com.alibaba.fastjson.JSON.toJSONString(baseMapper.listConditions(context,context.getSelectCond())),Province.class);
    }

    public Page<Province> searchDefault(ProvinceSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Province> pages=baseMapper.searchDefault(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Province>(com.alibaba.fastjson.JSON.parseArray(com.alibaba.fastjson.JSON.toJSONString(pages.getRecords()),Province.class), context.getPageable(), pages.getTotal());
    }
    public List<Province> listDefault(ProvinceSearchContext context) {
        return com.alibaba.fastjson.JSON.parseArray(com.alibaba.fastjson.JSON.toJSONString(baseMapper.listDefault(context,context.getSelectCond())),Province.class);
    }




}