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
import cn.ibizlab.sample.core.sample.domain.Product;
import cn.ibizlab.sample.core.sample.filter.ProductSearchContext;
import cn.ibizlab.sample.core.sample.service.IProductService;
import cn.ibizlab.sample.core.sample.mapper.ProductMapper;
import cn.ibizlab.util.helper.CachedBeanCopier;
import cn.ibizlab.util.helper.DEFieldCacheMap;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.core.conditions.Wrapper;


/**
 * 实体[产品] 服务对象接口实现
 */
@Slf4j
@Service("ProductServiceImpl")
public class ProductServiceImpl extends ServiceImpl<ProductMapper,Product> implements IProductService {

    protected IProductService productService = SpringContextHolder.getBean(this.getClass());


    protected int batchSize = 500;

    public Product get(Product et) {
        Product rt = this.baseMapper.selectEntity(et);
        Assert.notNull(rt,"数据不存在,产品:"+et.getProductId());
        CachedBeanCopier.copy(rt, et);
        return et;
    }
    
    public List<Product> getByEntities(List<Product> entities) {
        return this.baseMapper.selectEntities(entities);
    }


    public Product getDraft(Product et) {
        return et;
    }

    public boolean checkKey(Product et) {
        return this.count(Wrappers.lambdaQuery(et))>0;
    }

    @Override
    @Transactional
    public boolean create(Product et) {
        if(!this.retBool(this.baseMapper.insert(et))) 
            return false;
        get(et);
        return true;
    }
    @Transactional
    public boolean createBatch(List<Product> list) {
        this.saveBatch(list, batchSize);        
        return true;
    }

    @Transactional
    public boolean update(Product et) {
        if(!update(et, (Wrapper) et.getUpdateWrapper(true)
                .eq("productid", et.getProductId())
            )) {
            return false;
        }
        get(et);
        return true;
    }

    @Transactional
    public boolean updateBatch(List<Product> list) {
        updateBatchById(list, batchSize);
        return true;
    }

    @Transactional
    public boolean save(Product et) {
        if(checkKey(et))
            return productService.update(et);
        else
            return productService.create(et);
    }

    @Transactional
    public boolean saveBatch(List<Product> list) {
        List<Product> rt=this.getByEntities(list);
        Set<Serializable> keys=new HashSet<>();
        rt.forEach(et->{
            Serializable key = et.getProductId();
            if(!ObjectUtils.isEmpty(key))
                keys.add(key);
        });
        List<Product> _create=new ArrayList<>();
        List<Product> _update=new ArrayList<>();
        list.forEach(et-> {
            Serializable key = et.getProductId();
            if(keys.contains(key))
                _update.add(et);
            else
                _create.add(et);
        });
        List rtList=new ArrayList<>();
        if(_update.size()>0 && (!productService.updateBatch(_update)))
            return false;
        if(_create.size()>0 && (!productService.createBatch(_create)))
            return false;
        return true;
    }

    @Transactional
    public boolean remove(Product et) {
        String key = et.getProductId();

        if(!remove(new QueryWrapper<Product>()
                .eq("productid", et.getProductId())
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

    public Page<Product> searchByCategory(ProductSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Product> pages=baseMapper.searchByCategory(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Product>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }
    public List<Product> listByCategory(ProductSearchContext context) {
        return baseMapper.listByCategory(context,context.getSelectCond());
    }

    public Page<Product> searchDefault(ProductSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Product> pages=baseMapper.searchDefault(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Product>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }
    public List<Product> listDefault(ProductSearchContext context) {
        return baseMapper.listDefault(context,context.getSelectCond());
    }


}