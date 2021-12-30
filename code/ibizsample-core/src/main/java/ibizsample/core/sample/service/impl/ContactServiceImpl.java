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
import ibizsample.core.sample.domain.Contact;
import ibizsample.core.sample.filter.ContactSearchContext;
import ibizsample.core.sample.service.IContactService;
import ibizsample.core.sample.mapper.${item.getCodeName()}Mapper;
import ibizsample.util.helper.CachedBeanCopier;
import ibizsample.util.helper.DEFieldCacheMap;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.conditions.Wrapper;


/**
 * 实体[联系人] 服务对象接口实现
 */
@Slf4j
@Service("ContactServiceImpl")
public class ContactServiceImpl extends ServiceImpl<Contact> implements IContactService {

    protected IContactService contactService = SpringContextHolder.getBean(this.getClass());

    @Autowired
    @Lazy
    protected ibizsample.core.Customer.service.ICustomerService customerService;



    public Contact get(String key) {
        Contact et = getById(key);
        Assert.notNull(et,"数据不存在,联系人:"+key);
    }
    List<Contact> getByIds(Collection<String> idList);
    List<Contact> getByEntities(Collection<Contact> entities);

    Contact getDraft(Contact et);

    boolean checkKey(Contact et);

    @Override
    @Transactional
    public boolean create(Contact et) {
        fillParentData(et);
        if(!this.retBool(this.baseMapper.insert(et))) 
            return false;

        return true;
    }
    @Transactional
    public boolean createBatch(List<Contact> list) {

    }

    boolean update(Contact et);
    boolean updateBatch(List<Contact> list);

    boolean save(Contact et);
    boolean saveBatch(List<Contact> list);

    boolean remove(String key);
    boolean removeBatch(Collection<String> idList);

    Contact (Contact et);
    boolean Batch(List<Contact> list);

    Page<Contact> searchDefault(ContactSearchContext context);
    List<Contact> listDefault(ContactSearchContext context);

    List<Contact> selectByCustomerId(String customerId);
    boolean removeByCustomerId(String customerId);
    boolean saveByCustomerId(String customerId,List<Contact> list);


}