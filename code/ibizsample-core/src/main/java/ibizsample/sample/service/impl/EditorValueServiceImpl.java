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
import ibizsample.core.sample.domain.EditorValue;
import ibizsample.core.sample.filter.EditorValueSearchContext;
import ibizsample.core.sample.service.IEditorValueService;
import ibizsample.core.sample.mapper.${item.getCodeName()}Mapper;
import ibizsample.util.helper.CachedBeanCopier;
import ibizsample.util.helper.DEFieldCacheMap;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.conditions.Wrapper;


/**
 * 实体[编辑器值] 服务对象接口实现
 */
@Slf4j
@Service("EditorValueServiceImpl")
public class EditorValueServiceImpl extends ServiceImpl<EditorValue> implements IEditorValueService {

    protected IEditorValueService editorValueService = SpringContextHolder.getBean(this.getClass());

    @Autowired
    @Lazy
    protected ibizsample.core.Customer.service.ICustomerService customerService;



    public EditorValue get(String key) {
        EditorValue et = getById(key);
        Assert.notNull(et,"数据不存在,编辑器值:"+key);
    }
    List<EditorValue> getByIds(Collection<String> idList);
    List<EditorValue> getByEntities(Collection<EditorValue> entities);

    EditorValue getDraft(EditorValue et);

    boolean checkKey(EditorValue et);

    @Override
    @Transactional
    public boolean create(EditorValue et) {
        fillParentData(et);
        if(!this.retBool(this.baseMapper.insert(et))) 
            return false;
        ${srfr7templcaseformat(MinorEntity.getCodeName())}Service.saveBy${srfr7templcaseformat(MajorDerField.codeName)?cap_first}(et.get${srfr7templcaseformat(keyfield.codeName)?cap_first}(), et.get${srfr7templcaseformat(listcode)?cap_first}());
		
    }
    @Transactional
    public boolean createBatch(List<EditorValue> list) {

    }

    boolean update(EditorValue et);
    boolean updateBatch(List<EditorValue> list);

    boolean save(EditorValue et);
    boolean saveBatch(List<EditorValue> list);

    boolean remove(String key);
    boolean removeBatch(Collection<String> idList);

    EditorValue (EditorValue et);
    boolean Batch(List<EditorValue> list);

    Page<EditorValue> searchDefault(EditorValueSearchContext context);
    List<EditorValue> listDefault(EditorValueSearchContext context);

    List<EditorValue> selectByCustomerId(String customerId);
    boolean removeByCustomerId(String customerId);
    boolean saveByCustomerId(String customerId,List<EditorValue> list);

    List<EditorValue> selectByCustomerid2(String customerid2);
    boolean removeByCustomerid2(String customerid2);
    boolean saveByCustomerid2(String customerid2,List<EditorValue> list);

    List<EditorValue> selectByCustomerid3(String customerid3);
    boolean removeByCustomerid3(String customerid3);
    boolean saveByCustomerid3(String customerid3,List<EditorValue> list);

    List<EditorValue> selectByCustomerid4(String customerid4);
    boolean removeByCustomerid4(String customerid4);
    boolean saveByCustomerid4(String customerid4,List<EditorValue> list);

    List<EditorValue> selectByCustomerid5(String customerid5);
    boolean removeByCustomerid5(String customerid5);
    boolean saveByCustomerid5(String customerid5,List<EditorValue> list);


}