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
import ibizsample.core.sample.domain.PersonData;
import ibizsample.core.sample.filter.PersonDataSearchContext;
import ibizsample.core.sample.service.IPersonDataService;
import ibizsample.core.sample.mapper.${item.getCodeName()}Mapper;
import ibizsample.util.helper.CachedBeanCopier;
import ibizsample.util.helper.DEFieldCacheMap;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.conditions.Wrapper;


/**
 * 实体[人员数据] 服务对象接口实现
 */
@Slf4j
@Service("PersonDataServiceImpl")
public class PersonDataServiceImpl extends ServiceImpl<PersonData> implements IPersonDataService {

    protected IPersonDataService personDataService = SpringContextHolder.getBean(this.getClass());

    @Autowired
    @Lazy
    protected ibizsample.core.DeptData.service.IDeptDataService deptDataService;

    @Autowired
    @Lazy
    protected ibizsample.core.OrgData.service.IOrgDataService orgDataService;



    public PersonData get(String key) {
        PersonData et = getById(key);
        Assert.notNull(et,"数据不存在,人员数据:"+key);
    }
    List<PersonData> getByIds(Collection<String> idList);
    List<PersonData> getByEntities(Collection<PersonData> entities);

    PersonData getDraft(PersonData et);

    boolean checkKey(PersonData et);

    @Override
    @Transactional
    public boolean create(PersonData et) {
        fillParentData(et);
        if(!this.retBool(this.baseMapper.insert(et))) 
            return false;

        return true;
    }
    @Transactional
    public boolean createBatch(List<PersonData> list) {

    }

    boolean update(PersonData et);
    boolean updateBatch(List<PersonData> list);

    boolean save(PersonData et);
    boolean saveBatch(List<PersonData> list);

    boolean remove(String key);
    boolean removeBatch(Collection<String> idList);

    PersonData (PersonData et);
    boolean Batch(List<PersonData> list);

    Page<PersonData> searchDefault(PersonDataSearchContext context);
    List<PersonData> listDefault(PersonDataSearchContext context);

    List<PersonData> selectByDeptDataId(String deptDataId);
    boolean removeByDeptDataId(String deptDataId);
    boolean saveByDeptDataId(String deptDataId,List<PersonData> list);

    List<PersonData> selectByOrgDataId(String orgDataId);
    boolean removeByOrgDataId(String orgDataId);
    boolean saveByOrgDataId(String orgDataId,List<PersonData> list);


}