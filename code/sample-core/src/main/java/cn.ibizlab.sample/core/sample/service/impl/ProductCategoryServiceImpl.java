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
import cn.ibizlab.sample.core.sample.domain.ProductCategory;
import cn.ibizlab.sample.core.sample.filter.ProductCategorySearchContext;
import cn.ibizlab.sample.core.sample.service.IProductCategoryService;
import cn.ibizlab.sample.core.sample.mapper.ProductCategoryMapper;
import cn.ibizlab.util.helper.CachedBeanCopier;
import cn.ibizlab.util.helper.DEFieldCacheMap;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.core.conditions.Wrapper;


/**
 * 实体[产品类别] 服务对象接口实现
 */
@Slf4j
@Service("ProductCategoryServiceImpl")
public class ProductCategoryServiceImpl extends ServiceImpl<ProductCategoryMapper,ProductCategory> implements IProductCategoryService {

    protected IProductCategoryService productCategoryService = SpringContextHolder.getBean(this.getClass());

    @Autowired
    @Lazy
    protected cn.ibizlab.sample.core.sample.service.ICategoryService categoryService;
   
    @Autowired
    @Lazy
    protected cn.ibizlab.sample.core.sample.service.IProductService productService;
   

    protected int batchSize = 500;

    public ProductCategory get(ProductCategory et) {
        ProductCategory rt = this.baseMapper.selectEntity(et);
        Assert.notNull(rt,"数据不存在,产品类别:"+et.getProductCategoryId());
        CachedBeanCopier.copy(rt, et);
        return et;
    }
    
    public List<ProductCategory> getByEntities(List<ProductCategory> entities) {
        return this.baseMapper.selectEntities(entities);
    }

    public void fillParentData(ProductCategory et) {
        
    }

    public ProductCategory getDraft(ProductCategory et) {
        fillParentData(et);
        return et;
    }

    public boolean checkKey(ProductCategory et) {
        return this.count(Wrappers.lambdaQuery(et))>0;
    }

    @Override
    @Transactional
    public boolean create(ProductCategory et) {
        fillParentData(et);
        if(!this.retBool(this.baseMapper.insert(et))) 
            return false;
        get(et);
        return true;
    }
    @Transactional
    public boolean createBatch(List<ProductCategory> list) {
        list.forEach(et->fillParentData(et));
        this.saveOrUpdateBatch(list,batchSize);
        return true;
    }

    @Transactional
    public boolean update(ProductCategory et) {
        fillParentData(et);
        if(!update(et, (Wrapper) et.getUpdateWrapper(true)
                .eq("productcategoryid", et.getProductCategoryId())
            )) {
            return false;
        }
        get(et);
        return true;
    }

    @Transactional
    public boolean updateBatch(List<ProductCategory> list) {
        list.forEach(et->fillParentData(et));
        updateBatchById(list, batchSize);
        return true;
    }

    @Transactional
    public boolean save(ProductCategory et) {
        if(checkKey(et))
            return productCategoryService.update(et);
        else
            return productCategoryService.create(et);
    }

    @Transactional
    public boolean saveBatch(List<ProductCategory> list) {
        List<ProductCategory> rt=this.getByEntities(list);
        Set<Serializable> keys=new HashSet<>();
        rt.forEach(et->{
            Serializable key = et.getProductCategoryId();
            if(!ObjectUtils.isEmpty(key))
                keys.add(key);
        });
        List<ProductCategory> _create=new ArrayList<>();
        List<ProductCategory> _update=new ArrayList<>();
        list.forEach(et-> {
            Serializable key = et.getProductCategoryId();
            if(keys.contains(key))
                _update.add(et);
            else
                _create.add(et);
        });
        List rtList=new ArrayList<>();
        if(_update.size()>0 && (!productCategoryService.updateBatch(_update)))
            return false;
        if(_create.size()>0 && (!productCategoryService.createBatch(_create)))
            return false;
        return true;
    }

    @Transactional
    public boolean remove(ProductCategory et) {
        String key = et.getProductCategoryId();

        if(!remove(new QueryWrapper<ProductCategory>()
                .eq("productcategoryid", et.getProductCategoryId())
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

    public Page<ProductCategory> searchDefault(ProductCategorySearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<ProductCategory> pages=baseMapper.searchDefault(context.getPages(),context,context.getSelectCond());
        return new PageImpl<ProductCategory>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }
    public List<ProductCategory> listDefault(ProductCategorySearchContext context) {
        return baseMapper.listDefault(context,context.getSelectCond());
    }

    public List<ProductCategory> selectByCategoryId(String categoryId) {
        return baseMapper.selectByCategoryId(categoryId);
    }

    public boolean removeByCategoryId(String categoryId) {
        return this.remove(new QueryWrapper<ProductCategory>().eq("categoryid",categoryId));
    }

    public boolean resetByCategoryId(String categoryId) {
        return this.update(new UpdateWrapper<ProductCategory>().set("categoryid",null).eq("categoryid",categoryId));
    }

    public boolean saveByCategoryId(String categoryId,List<ProductCategory> list) {
        if(list==null)
            return true;
        Set<String> delIds=new HashSet<String>();
        List<ProductCategory> _update=new ArrayList<ProductCategory>();
        List<ProductCategory> _create=new ArrayList<ProductCategory>();
        for(ProductCategory before:selectByCategoryId(categoryId)){
            delIds.add(before.getProductCategoryId());
        }
        for(ProductCategory sub:list) {
            sub.setCategoryId(categoryId);
            if(ObjectUtils.isEmpty(sub.getProductCategoryId()))
                sub.setProductCategoryId((String)sub.getDefaultKey(true));
            if(delIds.contains(sub.getProductCategoryId())) {
                delIds.remove(sub.getProductCategoryId());
                _update.add(sub);
            }
            else
                _create.add(sub);
        }
        if(_update.size()>0 && (!productCategoryService.updateBatch(_update)))
            return false;
        if(_create.size()>0 && (!productCategoryService.createBatch(_create)))
            return false;
        if(delIds.size()>0 && (!productCategoryService.removeBatch(delIds)))
            return false;
        return true;
    }

    public List<ProductCategory> selectByProductId(String productId) {
        return baseMapper.selectByProductId(productId);
    }

    public boolean removeByProductId(String productId) {
        return this.remove(new QueryWrapper<ProductCategory>().eq("productid",productId));
    }

    public boolean resetByProductId(String productId) {
        return this.update(new UpdateWrapper<ProductCategory>().set("productid",null).eq("productid",productId));
    }

    public boolean saveByProductId(String productId,List<ProductCategory> list) {
        if(list==null)
            return true;
        Set<String> delIds=new HashSet<String>();
        List<ProductCategory> _update=new ArrayList<ProductCategory>();
        List<ProductCategory> _create=new ArrayList<ProductCategory>();
        for(ProductCategory before:selectByProductId(productId)){
            delIds.add(before.getProductCategoryId());
        }
        for(ProductCategory sub:list) {
            sub.setProductId(productId);
            if(ObjectUtils.isEmpty(sub.getProductCategoryId()))
                sub.setProductCategoryId((String)sub.getDefaultKey(true));
            if(delIds.contains(sub.getProductCategoryId())) {
                delIds.remove(sub.getProductCategoryId());
                _update.add(sub);
            }
            else
                _create.add(sub);
        }
        if(_update.size()>0 && (!productCategoryService.updateBatch(_update)))
            return false;
        if(_create.size()>0 && (!productCategoryService.createBatch(_create)))
            return false;
        if(delIds.size()>0 && (!productCategoryService.removeBatch(delIds)))
            return false;
        return true;
    }


}