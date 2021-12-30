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
import ibizsample.core.sample.domain.City;
import ibizsample.core.sample.filter.CitySearchContext;
import ibizsample.core.sample.service.ICityService;
import ibizsample.core.sample.mapper.${item.getCodeName()}Mapper;
import ibizsample.util.helper.CachedBeanCopier;
import ibizsample.util.helper.DEFieldCacheMap;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.conditions.Wrapper;


/**
 * 实体[市] 服务对象接口实现
 */
@Slf4j
@Service("CityServiceImpl")
public class CityServiceImpl extends ServiceImpl<City> implements ICityService {

    protected ICityService cityService = SpringContextHolder.getBean(this.getClass());

    @Autowired
    @Lazy
    protected ibizsample.core.Province.service.IProvinceService provinceService;



    public City get(String key) {
        City et = getById(key);
        Assert.notNull(et,"数据不存在,市:"+key);
    }
    List<City> getByIds(Collection<String> idList);
    List<City> getByEntities(Collection<City> entities);

    City getDraft(City et);

    boolean checkKey(City et);

    @Override
    @Transactional
    public boolean create(City et) {
        fillParentData(et);
        if(!this.retBool(this.baseMapper.insert(et))) 
            return false;

        return true;
    }
    @Transactional
    public boolean createBatch(List<City> list) {

    }

    boolean update(City et);
    boolean updateBatch(List<City> list);

    boolean save(City et);
    boolean saveBatch(List<City> list);

    boolean remove(String key);
    boolean removeBatch(Collection<String> idList);

    City (City et);
    boolean Batch(List<City> list);

    Page<City> searchDefault(CitySearchContext context);
    List<City> listDefault(CitySearchContext context);

    List<City> selectByProvinceId(String provinceId);
    boolean removeByProvinceId(String provinceId);
    boolean saveByProvinceId(String provinceId,List<City> list);


}