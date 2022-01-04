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
import ibizsample.core.sample.domain.Category;
import ibizsample.core.sample.filter.CategorySearchContext;
import ibizsample.core.sample.service.ICategoryService;
import ibizsample.core.sample.mapper.CategoryMapper;
import cn.ibizlab.util.helper.CachedBeanCopier;
import cn.ibizlab.util.helper.DEFieldCacheMap;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.core.conditions.Wrapper;


/**
 * 实体[类别] 服务对象接口实现
 */
@Slf4j
@Service("CategoryServiceImpl")
public class CategoryServiceImpl extends ServiceImpl<CategoryMapper,Category> implements ICategoryService {

    protected ICategoryService categoryService = SpringContextHolder.getBean(this.getClass());


    protected int batchSize = 500;

    public Category get(Category et) {
        Category rt = this.baseMapper.selectEntity(et);
        Assert.notNull(rt,"数据不存在,类别:"+et.getCategoryId());
        CachedBeanCopier.copy(rt, et);
        return et;
    }
    
    public List<Category> getByEntities(List<Category> entities) {
        return this.baseMapper.selectEntities(entities);
    }

    public void fillParentData(Category et) {
        
    }

    public Category getDraft(Category et) {
        fillParentData(et);
        return et;
    }

    public boolean checkKey(Category et) {
        return this.count(Wrappers.lambdaQuery(et))>0;
    }

    @Override
    @Transactional
    public boolean create(Category et) {
        fillParentData(et);
        if(!this.retBool(this.baseMapper.insert(et))) 
            return false;
        get(et);
        return true;
    }
    @Transactional
    public boolean createBatch(List<Category> list) {
        list.forEach(et->fillParentData(et));
        this.saveBatch(list, batchSize);        
        return true;
    }

    @Transactional
    public boolean update(Category et) {
        fillParentData(et);
        if(!update(et, (Wrapper) et.getUpdateWrapper(true)
                .eq("categoryid", et.getCategoryId())
            )) {
            return false;
        }
        get(et);
        return true;
    }

    @Transactional
    public boolean updateBatch(List<Category> list) {
        list.forEach(et->fillParentData(et));
        updateBatchById(list, batchSize);
        return true;
    }

    @Transactional
    public boolean save(Category et) {
        if(checkKey(et))
            return categoryService.update(et);
        else
            return categoryService.create(et);
    }

    @Transactional
    public boolean saveBatch(List<Category> list) {
        List<Category> rt=this.getByEntities(list);
        Set<Serializable> keys=new HashSet<>();
        rt.forEach(et->{
            Serializable key = et.getCategoryId();
            if(!ObjectUtils.isEmpty(key))
                keys.add(key);
        });
        List<Category> create=new ArrayList<>();
        List<Category> update=new ArrayList<>();
        list.forEach(et-> {
            Serializable key = et.getCategoryId();
            if(keys.contains(key))
                update.add(et);
            else
                create.add(et);
        });
        List rtList=new ArrayList<>();
        if(update.size()>0 && (!categoryService.updateBatch(update)))
            return false;
        if(create.size()>0 && (!categoryService.createBatch(create)))
            return false;
        return true;
    }

    @Transactional
    public boolean remove(Category et) {
        String key = et.getCategoryId();

        if(!remove(new QueryWrapper<Category>()
                .eq("categoryid", et.getCategoryId())
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

    public Page<Category> searchDefault(CategorySearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Category> pages=baseMapper.searchDefault(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Category>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }
    public List<Category> listDefault(CategorySearchContext context) {
        return baseMapper.listDefault(context,context.getSelectCond());
    }

    public Page<Category> searchRoot(CategorySearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Category> pages=baseMapper.searchRoot(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Category>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }
    public List<Category> listRoot(CategorySearchContext context) {
        return baseMapper.listRoot(context,context.getSelectCond());
    }

    public List<Category> selectByPcategoryid(String pcategoryid) {
        return baseMapper.selectByPcategoryid(pcategoryid);
    }

    public boolean removeByPcategoryid(String pcategoryid) {
        return this.remove(new QueryWrapper<Category>().eq("pcategoryid",pcategoryid));
    }

    public boolean resetByPcategoryid(String pcategoryid) {
        return this.update(new UpdateWrapper<Category>().set("pcategoryid",null).eq("pcategoryid",pcategoryid));
    }

    public boolean saveByPcategoryid(String pcategoryid,List<Category> list) {
        if(list==null)
            return true;
        Set<String> delIds=new HashSet<String>();
        List<Category> _update=new ArrayList<Category>();
        List<Category> _create=new ArrayList<Category>();
        for(Category before:selectByPcategoryid(pcategoryid)){
            delIds.add(before.getCategoryId());
        }
        for(Category sub:list) {
            sub.setPcategoryid(pcategoryid);
            if(ObjectUtils.isEmpty(sub.getCategoryId()))
                sub.setCategoryId((String)sub.getDefaultKey(true));
            if(delIds.contains(sub.getCategoryId())) {
                delIds.remove(sub.getCategoryId());
                _update.add(sub);
            }
            else
                _create.add(sub);
        }
        if(_update.size()>0 && (!categoryService.updateBatch(_update)))
            return false;
        if(_create.size()>0 && (!categoryService.createBatch(_create)))
            return false;
        if(delIds.size()>0 && (!categoryService.removeBatch(delIds)))
            return false;
        return true;
    }


}