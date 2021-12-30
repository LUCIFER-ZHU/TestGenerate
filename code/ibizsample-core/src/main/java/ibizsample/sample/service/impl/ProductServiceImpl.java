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
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cglib.beans.BeanCopier;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.util.ObjectUtils;
import org.springframework.util.StringUtils;
import org.springframework.beans.factory.annotation.Value;
import ibizsample.util.errors.BadRequestAlertException;
<#system.enableGlobalTransaction>
import io.seata.spring.annotation.GlobalTransactional;
</system.enableGlobalTransaction>
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Lazy;
import ibizsample.core.sample.domain.Product;
import ibizsample.core.sample.filter.ProductSearchContext;
import ibizsample.core.sample.service.IProductService;
import ibizsample.core.sample.mapper.${item.getCodeName()}Mapper;
import ibizsample.util.helper.CachedBeanCopier;
import ibizsample.util.helper.DEFieldCacheMap;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.conditions.Wrapper;


/**
 * 实体[产品] 服务对象接口实现
 */
@Slf4j
@Service("ProductServiceImpl")
public class ProductServiceImpl extends ServiceImpl<Product> implements IProductService {

    protected IProductService productService = SpringContextHolder.getBean(this.getClass());



    public Product get(String key) {
        Product et = getById(key);
        Assert.notNull(et,"数据不存在,产品:"+key);
    }
    List<Product> getByIds(Collection<String> idList);
    List<Product> getByEntities(Collection<Product> entities);

    Product getDraft(Product et);

    boolean checkKey(Product et);

    @Override
    @Transactional
    public boolean create(Product et) {
        if(!this.retBool(this.baseMapper.insert(et))) 
            return false;
    }
    @Transactional
    public boolean createBatch(List<Product> list) {

    }

    boolean update(Product et);
    boolean updateBatch(List<Product> list);

    boolean save(Product et);
    boolean saveBatch(List<Product> list);

    boolean remove(String key);
    boolean removeBatch(Collection<String> idList);

    Product (Product et);
    boolean Batch(List<Product> list);

    Page<Product> searchByCategory(ProductSearchContext context);
    List<Product> listByCategory(ProductSearchContext context);

    Page<Product> searchDefault(ProductSearchContext context);
    List<Product> listDefault(ProductSearchContext context);


}