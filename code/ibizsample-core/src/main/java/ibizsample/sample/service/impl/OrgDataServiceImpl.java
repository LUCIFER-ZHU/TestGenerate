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
import ibizsample.core.sample.domain.OrgData;
import ibizsample.core.sample.filter.OrgDataSearchContext;
import ibizsample.core.sample.service.IOrgDataService;
import ibizsample.core.sample.mapper.${item.getCodeName()}Mapper;
import ibizsample.util.helper.CachedBeanCopier;
import ibizsample.util.helper.DEFieldCacheMap;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.conditions.Wrapper;


/**
 * 实体[组织数据] 服务对象接口实现
 */
@Slf4j
@Service("OrgDataServiceImpl")
public class OrgDataServiceImpl extends ServiceImpl<OrgData> implements IOrgDataService {

    protected IOrgDataService orgDataService = SpringContextHolder.getBean(this.getClass());



    public OrgData get(String key) {
        OrgData et = getById(key);
        Assert.notNull(et,"数据不存在,组织数据:"+key);
    }
    List<OrgData> getByIds(Collection<String> idList);
    List<OrgData> getByEntities(Collection<OrgData> entities);

    OrgData getDraft(OrgData et);

    boolean checkKey(OrgData et);

    @Override
    @Transactional
    public boolean create(OrgData et) {
        fillParentData(et);
        if(!this.retBool(this.baseMapper.insert(et))) 
            return false;
        ${srfr7templcaseformat(MinorEntity.getCodeName())}Service.saveBy${srfr7templcaseformat(MajorDerField.codeName)?cap_first}(et.get${srfr7templcaseformat(keyfield.codeName)?cap_first}(), et.get${srfr7templcaseformat(listcode)?cap_first}());
		
    }
    @Transactional
    public boolean createBatch(List<OrgData> list) {

    }

    boolean update(OrgData et);
    boolean updateBatch(List<OrgData> list);

    boolean save(OrgData et);
    boolean saveBatch(List<OrgData> list);

    boolean remove(String key);
    boolean removeBatch(Collection<String> idList);

    OrgData (OrgData et);
    boolean Batch(List<OrgData> list);

    Page<OrgData> searchDefault(OrgDataSearchContext context);
    List<OrgData> listDefault(OrgDataSearchContext context);

    Page<OrgData> searchPORGDATA(OrgDataSearchContext context);
    List<OrgData> listPORGDATA(OrgDataSearchContext context);

    List<OrgData> selectByPorgdataid(String porgdataid);
    boolean removeByPorgdataid(String porgdataid);
    boolean saveByPorgdataid(String porgdataid,List<OrgData> list);


}