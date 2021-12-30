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
import ibizsample.core.sample.domain.Example;
import ibizsample.core.sample.filter.ExampleSearchContext;
import ibizsample.core.sample.service.IExampleService;
import ibizsample.core.sample.mapper.${item.getCodeName()}Mapper;
import ibizsample.util.helper.CachedBeanCopier;
import ibizsample.util.helper.DEFieldCacheMap;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.conditions.Wrapper;


/**
 * 实体[示例] 服务对象接口实现
 */
@Slf4j
@Service("ExampleServiceImpl")
public class ExampleServiceImpl extends ServiceImpl<Example> implements IExampleService {

    protected IExampleService exampleService = SpringContextHolder.getBean(this.getClass());

    @Autowired
    @Lazy
    protected ibizsample.core.City.service.ICityService cityService;

    @Autowired
    @Lazy
    protected ibizsample.core.District.service.IDistrictService districtService;

    @Autowired
    @Lazy
    protected ibizsample.core.Province.service.IProvinceService provinceService;



    public Example get(String key) {
        Example et = getById(key);
        Assert.notNull(et,"数据不存在,示例:"+key);
    }
    List<Example> getByIds(Collection<String> idList);
    List<Example> getByEntities(Collection<Example> entities);

    Example getDraft(Example et);

    boolean checkKey(Example et);

    @Override
    @Transactional
    public boolean create(Example et) {
        fillParentData(et);
        if(!this.retBool(this.baseMapper.insert(et))) 
            return false;

        return true;
    }
    @Transactional
    public boolean createBatch(List<Example> list) {

    }

    boolean update(Example et);
    boolean updateBatch(List<Example> list);

    boolean save(Example et);
    boolean saveBatch(List<Example> list);

    boolean remove(String key);
    boolean removeBatch(Collection<String> idList);

    Example (Example et);
    boolean Batch(List<Example> list);

    Page<Example> searchDefault(ExampleSearchContext context);
    List<Example> listDefault(ExampleSearchContext context);

    Page<Example> searchEmpty(ExampleSearchContext context);
    List<Example> listEmpty(ExampleSearchContext context);

    List<Example> selectByCityId(String cityId);
    boolean removeByCityId(String cityId);
    boolean saveByCityId(String cityId,List<Example> list);

    List<Example> selectByDistrictId(String districtId);
    boolean removeByDistrictId(String districtId);
    boolean saveByDistrictId(String districtId,List<Example> list);

    List<Example> selectByProvinceId(String provinceId);
    boolean removeByProvinceId(String provinceId);
    boolean saveByProvinceId(String provinceId,List<Example> list);


}