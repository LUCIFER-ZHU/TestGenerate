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
import ibizsample.core.sample.domain.Province;
import ibizsample.core.sample.filter.ProvinceSearchContext;
import ibizsample.core.sample.service.IProvinceService;
import ibizsample.core.sample.mapper.${item.getCodeName()}Mapper;
import ibizsample.util.helper.CachedBeanCopier;
import ibizsample.util.helper.DEFieldCacheMap;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.conditions.Wrapper;


/**
 * 实体[省份] 服务对象接口实现
 */
@Slf4j
@Service("ProvinceServiceImpl")
public class ProvinceServiceImpl extends ServiceImpl<Province> implements IProvinceService {

    protected IProvinceService provinceService = SpringContextHolder.getBean(this.getClass());



    public Province get(String key) {
        Province et = getById(key);
        Assert.notNull(et,"数据不存在,省份:"+key);
    }
    List<Province> getByIds(Collection<String> idList);
    List<Province> getByEntities(Collection<Province> entities);

    Province getDraft(Province et);

    boolean checkKey(Province et);

    @Override
    @Transactional
    public boolean create(Province et) {
        if(!this.retBool(this.baseMapper.insert(et))) 
            return false;
        return true;
    }
    @Transactional
    public boolean createBatch(List<Province> list) {

    }

    boolean update(Province et);
    boolean updateBatch(List<Province> list);

    boolean save(Province et);
    boolean saveBatch(List<Province> list);

    boolean remove(String key);
    boolean removeBatch(Collection<String> idList);

    Province (Province et);
    boolean Batch(List<Province> list);

    Page<Province> searchConditions(ProvinceSearchContext context);
    List<Province> listConditions(ProvinceSearchContext context);

    Page<Province> searchDefault(ProvinceSearchContext context);
    List<Province> listDefault(ProvinceSearchContext context);


}