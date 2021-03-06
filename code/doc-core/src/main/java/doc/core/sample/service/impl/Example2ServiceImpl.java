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
import doc.core.sample.domain.Example2;
import doc.core.sample.filter.Example2SearchContext;
import doc.core.sample.service.IExample2Service;
import doc.core.sample.mapper.Example2Mapper;
import cn.ibizlab.util.helper.CachedBeanCopier;
import cn.ibizlab.util.helper.DEFieldCacheMap;
import cn.ibizlab.util.security.AuthenticationUser;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import doc.core.sample.domain.Example;
import doc.core.sample.service.IExampleService;   


/**
 * 实体[示例明细] 服务对象接口实现
 */
@Slf4j
@Service("Example2Service")
public class Example2ServiceImpl extends ServiceImpl<Example2Mapper,Example2> implements IExample2Service {

    protected IExample2Service getProxyService() {
        return SpringContextHolder.getBean(this.getClass());
    }

    @Autowired
    @Lazy
    protected IExampleService exampleService;
   

    protected int batchSize = 500;

    public Example2 get(Example2 et) {
        Example2 rt = this.baseMapper.selectEntity(et);
        Assert.notNull(rt,"数据不存在,示例明细:"+et.getExample2Id());
        BeanUtils.copyProperties(rt, et);
        return et;
    }
    
    public List<Example2> getByEntities(List<Example2> entities) {
        return this.baseMapper.selectEntities(entities);
    }

    public void fillParentData(Example2 et) {
        if(!ObjectUtils.isEmpty(et.getExampleId())) {
            Example example = et.getExample();
            if(!ObjectUtils.isEmpty(example)) {
                et.setExampleName(example.getExampleName());   
            }
        }    
    }

    public Example2 getDraft(Example2 et) {
        fillParentData(et);
        return et;
    }

    public boolean checkKey(Example2 et) {
        return this.count(Wrappers.lambdaQuery(et))>0;
    }

    @Override
    @Transactional
    public boolean create(Example2 et) {
        fillParentData(et);
        if(!this.retBool(this.baseMapper.insert(et))) 
            return false;
        get(et);
        return true;
    }
    @Transactional
    public boolean createBatch(List<Example2> list) {
        list.forEach(et->fillParentData(et));
        this.saveBatch(list, batchSize);        
        return true;
    }

    @Transactional
    public boolean update(Example2 et) {
        fillParentData(et);
        if(!update(et, (Wrapper) et.getUpdateWrapper(true)
                .eq("example2id", et.getExample2Id())
            )) {
            return false;
        }
        get(et);
        return true;
    }

    @Transactional
    public boolean updateBatch(List<Example2> list) {
        list.forEach(et->fillParentData(et));
        updateBatchById(list, batchSize);
        return true;
    }

    @Transactional
    public boolean save(Example2 et) {
        if(checkKey(et))
            return getProxyService().update(et);
        else
            return getProxyService().create(et);
    }

    @Transactional
    public boolean saveBatch(List<Example2> list) {
        List<Example2> rt=this.getByEntities(list);
        Set<Serializable> keys=new HashSet<>();
        rt.forEach(et->{
            Serializable key = et.getExample2Id();
            if(!ObjectUtils.isEmpty(key))
                keys.add(key);
        });
        List<Example2> _create=new ArrayList<>();
        List<Example2> _update=new ArrayList<>();
        list.forEach(et-> {
            Serializable key = et.getExample2Id();
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
    public boolean remove(Example2 et) {
        String key = et.getExample2Id();

        if(!remove(new QueryWrapper<Example2>()
                .eq("example2id", et.getExample2Id())
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

    public Page<Example2> searchDefault(Example2SearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Example2> pages=baseMapper.searchDefault(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Example2>(com.alibaba.fastjson.JSON.parseArray(com.alibaba.fastjson.JSON.toJSONString(pages.getRecords()),Example2.class), context.getPageable(), pages.getTotal());
    }
    public List<Example2> listDefault(Example2SearchContext context) {
        return com.alibaba.fastjson.JSON.parseArray(com.alibaba.fastjson.JSON.toJSONString(baseMapper.listDefault(context,context.getSelectCond())),Example2.class);
    }

    public List<Example2> selectByExampleId(String exampleId) {
        return baseMapper.selectByExampleId(exampleId);
    }

    public boolean removeByExampleId(String exampleId) {
        return this.remove(new QueryWrapper<Example2>().eq("exampleid",exampleId));
    }

    public boolean resetByExampleId(String exampleId) {
        return this.update(new UpdateWrapper<Example2>().set("exampleid",null).eq("exampleid",exampleId));
    }

    public boolean saveByExampleId(Example example,List<Example2> list) {
        if(list==null)
            return true;
        Set<String> delIds=new HashSet<String>();
        List<Example2> _update=new ArrayList<Example2>();
        List<Example2> _create=new ArrayList<Example2>();
        for(Example2 before:selectByExampleId(example.getExampleId())){
            delIds.add(before.getExample2Id());
        }
        for(Example2 sub:list) {
            sub.setExampleId(example.getExampleId());
            sub.setExample(example);
            if(ObjectUtils.isEmpty(sub.getExample2Id()))
                sub.setExample2Id((String)sub.getDefaultKey(true));
            if(delIds.contains(sub.getExample2Id())) {
                delIds.remove(sub.getExample2Id());
                _update.add(sub);
            }
            else
                _create.add(sub);
        }
        if(_update.size()>0 && (!getProxyService().updateBatch(_update)))
            return false;
        if(_create.size()>0 && (!getProxyService().createBatch(_create)))
            return false;
        if(delIds.size()>0 && (!getProxyService().removeBatch(delIds)))
            return false;
        return true;
    }




}