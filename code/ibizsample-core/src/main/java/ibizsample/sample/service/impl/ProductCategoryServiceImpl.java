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
import ibizsample.core.sample.domain.ProductCategory;
import ibizsample.core.sample.filter.ProductCategorySearchContext;
import ibizsample.core.sample.service.IProductCategoryService;
import ibizsample.core.sample.mapper.${item.getCodeName()}Mapper;
import ibizsample.util.helper.CachedBeanCopier;
import ibizsample.util.helper.DEFieldCacheMap;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.conditions.Wrapper;


/**
 * 实体[产品类别] 服务对象接口实现
 */
@Slf4j
@Service("ProductCategoryServiceImpl")
public class ProductCategoryServiceImpl extends ServiceImpl<ProductCategory> implements IProductCategoryService {

    protected IProductCategoryService productCategoryService = SpringContextHolder.getBean(this.getClass());

    @Autowired
    @Lazy
    protected ibizsample.core.Category.service.ICategoryService categoryService;

    @Autowired
    @Lazy
    protected ibizsample.core.Product.service.IProductService productService;



    public ProductCategory get(String key) {
        ProductCategory et = getById(key);
        Assert.notNull(et,"数据不存在,产品类别:"+key);
    }
    List<ProductCategory> getByIds(Collection<String> idList);
    List<ProductCategory> getByEntities(Collection<ProductCategory> entities);

    ProductCategory getDraft(ProductCategory et);

    boolean checkKey(ProductCategory et);

    @Override
    @Transactional
    public boolean create(ProductCategory et) {
        fillParentData(et);
        if(!this.retBool(this.baseMapper.insert(et))) 
            return false;
        ${srfr7templcaseformat(MinorEntity.getCodeName())}Service.saveBy${srfr7templcaseformat(MajorDerField.codeName)?cap_first}(et.get${srfr7templcaseformat(keyfield.codeName)?cap_first}(), et.get${srfr7templcaseformat(listcode)?cap_first}());
		
    }
    @Transactional
    public boolean createBatch(List<ProductCategory> list) {

    }

    boolean update(ProductCategory et);
    boolean updateBatch(List<ProductCategory> list);

    boolean save(ProductCategory et);
    boolean saveBatch(List<ProductCategory> list);

    boolean remove(String key);
    boolean removeBatch(Collection<String> idList);

    ProductCategory (ProductCategory et);
    boolean Batch(List<ProductCategory> list);

    Page<ProductCategory> searchDefault(ProductCategorySearchContext context);
    List<ProductCategory> listDefault(ProductCategorySearchContext context);

    List<ProductCategory> selectByCategoryId(String categoryId);
    boolean removeByCategoryId(String categoryId);
    boolean saveByCategoryId(String categoryId,List<ProductCategory> list);

    List<ProductCategory> selectByProductId(String productId);
    boolean removeByProductId(String productId);
    boolean saveByProductId(String productId,List<ProductCategory> list);


}