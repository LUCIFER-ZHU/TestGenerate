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
import ibizsample.core.sample.domain.District;
import ibizsample.core.sample.filter.DistrictSearchContext;
import ibizsample.core.sample.service.IDistrictService;
import ibizsample.core.sample.mapper.${item.getCodeName()}Mapper;
import ibizsample.util.helper.CachedBeanCopier;
import ibizsample.util.helper.DEFieldCacheMap;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.conditions.Wrapper;


/**
 * 实体[区] 服务对象接口实现
 */
@Slf4j
@Service("DistrictServiceImpl")
public class DistrictServiceImpl extends ServiceImpl<District> implements IDistrictService {

    protected IDistrictService districtService = SpringContextHolder.getBean(this.getClass());

    @Autowired
    @Lazy
    protected ibizsample.core.City.service.ICityService cityService;



    public District get(String key) {
        District et = getById(key);
        Assert.notNull(et,"数据不存在,区:"+key);
    }
    List<District> getByIds(Collection<String> idList);
    List<District> getByEntities(Collection<District> entities);

    District getDraft(District et);

    boolean checkKey(District et);

    @Override
    @Transactional
    public boolean create(District et) {
        fillParentData(et);
        if(!this.retBool(this.baseMapper.insert(et))) 
            return false;
        ${srfr7templcaseformat(MinorEntity.getCodeName())}Service.saveBy${srfr7templcaseformat(MajorDerField.codeName)?cap_first}(et.get${srfr7templcaseformat(keyfield.codeName)?cap_first}(), et.get${srfr7templcaseformat(listcode)?cap_first}());
		
    }
    @Transactional
    public boolean createBatch(List<District> list) {

    }

    boolean update(District et);
    boolean updateBatch(List<District> list);

    boolean save(District et);
    boolean saveBatch(List<District> list);

    boolean remove(String key);
    boolean removeBatch(Collection<String> idList);

    District (District et);
    boolean Batch(List<District> list);

    Page<District> searchDefault(DistrictSearchContext context);
    List<District> listDefault(DistrictSearchContext context);

    List<District> selectByCityId(String cityId);
    boolean removeByCityId(String cityId);
    boolean saveByCityId(String cityId,List<District> list);


}