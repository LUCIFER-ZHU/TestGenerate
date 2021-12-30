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
import ibizsample.core.sample.domain.Category;
import ibizsample.core.sample.filter.CategorySearchContext;
import ibizsample.core.sample.service.ICategoryService;
import ibizsample.core.sample.mapper.${item.getCodeName()}Mapper;
import ibizsample.util.helper.CachedBeanCopier;
import ibizsample.util.helper.DEFieldCacheMap;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.conditions.Wrapper;


/**
 * 实体[类别] 服务对象接口实现
 */
@Slf4j
@Service("CategoryServiceImpl")
public class CategoryServiceImpl extends ServiceImpl<Category> implements ICategoryService {

    protected ICategoryService categoryService = SpringContextHolder.getBean(this.getClass());



    public Category get(String key) {
        Category et = getById(key);
        Assert.notNull(et,"数据不存在,类别:"+key);
    }
    List<Category> getByIds(Collection<String> idList);
    List<Category> getByEntities(Collection<Category> entities);

    Category getDraft(Category et);

    boolean checkKey(Category et);

    @Override
    @Transactional
    public boolean create(Category et) {
        fillParentData(et);
        if(!this.retBool(this.baseMapper.insert(et))) 
            return false;
        ${srfr7templcaseformat(MinorEntity.getCodeName())}Service.saveBy${srfr7templcaseformat(MajorDerField.codeName)?cap_first}(et.get${srfr7templcaseformat(keyfield.codeName)?cap_first}(), et.get${srfr7templcaseformat(listcode)?cap_first}());
		
    }
    @Transactional
    public boolean createBatch(List<Category> list) {

    }

    boolean update(Category et);
    boolean updateBatch(List<Category> list);

    boolean save(Category et);
    boolean saveBatch(List<Category> list);

    boolean remove(String key);
    boolean removeBatch(Collection<String> idList);

    Category (Category et);
    boolean Batch(List<Category> list);

    Page<Category> searchDefault(CategorySearchContext context);
    List<Category> listDefault(CategorySearchContext context);

    Page<Category> searchRoot(CategorySearchContext context);
    List<Category> listRoot(CategorySearchContext context);

    List<Category> selectByPcategoryid(String pcategoryid);
    boolean removeByPcategoryid(String pcategoryid);
    boolean saveByPcategoryid(String pcategoryid,List<Category> list);


}