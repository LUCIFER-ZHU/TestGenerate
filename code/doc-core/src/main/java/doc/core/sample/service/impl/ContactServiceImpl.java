package doc.core.sample.service.impl;

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

import cn.ibizlab.util.security.SpringContextHolder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cglib.beans.BeanCopier;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.util.ObjectUtils;
import org.springframework.util.StringUtils;
import org.springframework.util.Assert;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Value;
import cn.ibizlab.util.errors.BadRequestAlertException;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Lazy;
import doc.core.sample.domain.Contact;
import doc.core.sample.filter.ContactSearchContext;
import doc.core.sample.service.IContactService;
import doc.core.sample.mapper.ContactMapper;
import cn.ibizlab.util.helper.CachedBeanCopier;
import cn.ibizlab.util.helper.DEFieldCacheMap;
import cn.ibizlab.util.security.AuthenticationUser;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import doc.core.sample.domain.Customer;
import doc.core.sample.service.ICustomerService;   


/**
 * 实体[联系人] 服务对象接口实现
 */
@Slf4j
@Service("ContactService")
public class ContactServiceImpl extends ServiceImpl<ContactMapper,Contact> implements IContactService {

    protected IContactService getProxyService() {
        return SpringContextHolder.getBean(this.getClass());
    }

    @Autowired
    @Lazy
    protected ICustomerService customerService;
   

    protected int batchSize = 500;

    public Contact get(Contact et) {
        Contact rt = this.baseMapper.selectEntity(et);
        Assert.notNull(rt,"数据不存在,联系人:"+et.getContactId());
        BeanUtils.copyProperties(rt, et);
        return et;
    }
    
    public List<Contact> getByEntities(List<Contact> entities) {
        return this.baseMapper.selectEntities(entities);
    }

    public void fillParentData(Contact et) {
        if(!ObjectUtils.isEmpty(et.getCustomerId())) {
            Customer customer = et.getCustomer();
            if(!ObjectUtils.isEmpty(customer)) {
                et.setCustomerName(customer.getCustomerName());   
            }
        }    
    }

    public Contact getDraft(Contact et) {
        fillParentData(et);
        return et;
    }

    public boolean checkKey(Contact et) {
        return this.count(Wrappers.lambdaQuery(et))>0;
    }

    @Override
    @Transactional
    public boolean create(Contact et) {
        fillParentData(et);
        if(!this.retBool(this.baseMapper.insert(et))) 
            return false;
        get(et);
        return true;
    }
    @Transactional
    public boolean createBatch(List<Contact> list) {
        list.forEach(et->fillParentData(et));
        this.saveBatch(list, batchSize);        
        return true;
    }

    @Transactional
    public boolean update(Contact et) {
        fillParentData(et);
        if(!update(et, (Wrapper) et.getUpdateWrapper(true)
                .eq("contactid", et.getContactId())
            )) {
            return false;
        }
        get(et);
        return true;
    }

    @Transactional
    public boolean updateBatch(List<Contact> list) {
        list.forEach(et->fillParentData(et));
        updateBatchById(list, batchSize);
        return true;
    }

    @Transactional
    public boolean save(Contact et) {
        if(checkKey(et))
            return getProxyService().update(et);
        else
            return getProxyService().create(et);
    }

    @Transactional
    public boolean saveBatch(List<Contact> list) {
        List<Contact> rt=this.getByEntities(list);
        Set<Serializable> keys=new HashSet<>();
        rt.forEach(et->{
            Serializable key = et.getContactId();
            if(!ObjectUtils.isEmpty(key))
                keys.add(key);
        });
        List<Contact> _create=new ArrayList<>();
        List<Contact> _update=new ArrayList<>();
        list.forEach(et-> {
            Serializable key = et.getContactId();
            if(keys.contains(key))
                _update.add(et);
            else
                _create.add(et);
        });
        List rtList=new ArrayList<>();
        if(_update.size()>0 && (!getProxyService().updateBatch(_update)))
            return false;
        if(_create.size()>0 && (!getProxyService().createBatch(_create)))
            return false;
        return true;
    }

    @Transactional
    public boolean remove(Contact et) {
        String key = et.getContactId();

        if(!remove(new QueryWrapper<Contact>()
                .eq("contactid", et.getContactId())
            )) {
            return false;
        }
        return true ;
    }
    
    @Transactional
    public boolean removeBatch(Collection<String> ids) {
        if(!removeByIds(ids))
            return false;
        return true;
    }

    public Page<Contact> searchDefault(ContactSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Contact> pages=baseMapper.searchDefault(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Contact>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }
    public List<Contact> listDefault(ContactSearchContext context) {
        return baseMapper.listDefault(context,context.getSelectCond());
    }

    public List<Contact> selectByCustomerId(String customerId) {
        return baseMapper.selectByCustomerId(customerId);
    }

    public boolean removeByCustomerId(String customerId) {
        return this.remove(new QueryWrapper<Contact>().eq("customerid",customerId));
    }

    public boolean resetByCustomerId(String customerId) {
        return this.update(new UpdateWrapper<Contact>().set("customerid",null).eq("customerid",customerId));
    }

    public boolean saveByCustomerId(Customer customer,List<Contact> list) {
        if(list==null)
            return true;
        Set<String> delIds=new HashSet<String>();
        List<Contact> _update=new ArrayList<Contact>();
        List<Contact> _create=new ArrayList<Contact>();
        for(Contact before:selectByCustomerId(customer.getCustomerId())){
            delIds.add(before.getContactId());
        }
        for(Contact sub:list) {
            sub.setCustomerId(customer.getCustomerId());
            sub.setCustomer(customer);
            if(ObjectUtils.isEmpty(sub.getContactId()))
                sub.setContactId((String)sub.getDefaultKey(true));
            if(delIds.contains(sub.getContactId())) {
                delIds.remove(sub.getContactId());
                _update.add(sub);
            }
            else
                _create.add(sub);
        }
        if(_update.size()>0 && (!getProxyService().updateBatch(_update)))
            return false;
        if(_create.size()>0 && (!getProxyService().createBatch(_create)))
            return false;
        if(delIds.size()>0 && (!getProxyService().removeBatch(delIds)))
            return false;
        return true;
    }




}