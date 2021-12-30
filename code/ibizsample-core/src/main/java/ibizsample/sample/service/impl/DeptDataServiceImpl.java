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
import ibizsample.core.sample.domain.DeptData;
import ibizsample.core.sample.filter.DeptDataSearchContext;
import ibizsample.core.sample.service.IDeptDataService;
import ibizsample.core.sample.mapper.${item.getCodeName()}Mapper;
import ibizsample.util.helper.CachedBeanCopier;
import ibizsample.util.helper.DEFieldCacheMap;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.conditions.Wrapper;


/**
 * 实体[部门数据] 服务对象接口实现
 */
@Slf4j
@Service("DeptDataServiceImpl")
public class DeptDataServiceImpl extends ServiceImpl<DeptData> implements IDeptDataService {

    protected IDeptDataService deptDataService = SpringContextHolder.getBean(this.getClass());

    @Autowired
    @Lazy
    protected ibizsample.core.OrgData.service.IOrgDataService orgDataService;



    public DeptData get(String key) {
        DeptData et = getById(key);
        Assert.notNull(et,"数据不存在,部门数据:"+key);
    }
    List<DeptData> getByIds(Collection<String> idList);
    List<DeptData> getByEntities(Collection<DeptData> entities);

    DeptData getDraft(DeptData et);

    boolean checkKey(DeptData et);

    @Override
    @Transactional
    public boolean create(DeptData et) {
        fillParentData(et);
        if(!this.retBool(this.baseMapper.insert(et))) 
            return false;
        ${srfr7templcaseformat(MinorEntity.getCodeName())}Service.saveBy${srfr7templcaseformat(MajorDerField.codeName)?cap_first}(et.get${srfr7templcaseformat(keyfield.codeName)?cap_first}(), et.get${srfr7templcaseformat(listcode)?cap_first}());
		
    }
    @Transactional
    public boolean createBatch(List<DeptData> list) {

    }

    boolean update(DeptData et);
    boolean updateBatch(List<DeptData> list);

    boolean save(DeptData et);
    boolean saveBatch(List<DeptData> list);

    boolean remove(String key);
    boolean removeBatch(Collection<String> idList);

    DeptData (DeptData et);
    boolean Batch(List<DeptData> list);

    Page<DeptData> searchDefault(DeptDataSearchContext context);
    List<DeptData> listDefault(DeptDataSearchContext context);

    List<DeptData> selectByOrgDataId(String orgDataId);
    boolean removeByOrgDataId(String orgDataId);
    boolean saveByOrgDataId(String orgDataId,List<DeptData> list);


}