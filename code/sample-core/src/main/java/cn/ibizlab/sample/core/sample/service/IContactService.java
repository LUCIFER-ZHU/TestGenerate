package cn.ibizlab.sample.core.sample.service;

import java.io.Serializable;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.HashMap;
import java.util.Collection;
import java.math.BigInteger;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.scheduling.annotation.Async;
import com.alibaba.fastjson.JSONObject;
import org.springframework.cache.annotation.CacheEvict;

import com.baomidou.mybatisplus.extension.service.IService;
import com.baomidou.dynamic.datasource.annotation.DS;
import cn.ibizlab.util.helper.CachedBeanCopier;
import cn.ibizlab.sample.core.sample.domain.Contact;
import cn.ibizlab.sample.core.sample.filter.ContactSearchContext;

public interface IContactService extends IService<Contact> {

    Contact get(Contact et);
    default Contact get(String key) {
        return get(new Contact().setContactId(key));
    }
    default List<Contact> getByIds(Collection<String> ids) {
        List<Contact> entities =new ArrayList();
        ids.forEach(key -> entities.add(new Contact().setContactId(key)));
        return getByEntities(entities);
    }
    List<Contact> getByEntities(List<Contact> entities);

    Contact getDraft(Contact et);

    boolean checkKey(Contact et);

    boolean create(Contact et);
    boolean createBatch(List<Contact> list);

    boolean update(Contact et);
    boolean updateBatch(List<Contact> list);

    boolean save(Contact et);
    boolean saveBatch(List<Contact> list);

    default boolean remove(String key) {
        return remove(new Contact().setContactId(key));
    }
    boolean remove(Contact et);

    boolean removeBatch(Collection<String> ids);

    Page<Contact> searchDefault(ContactSearchContext context);
    List<Contact> listDefault(ContactSearchContext context);

    List<Contact> selectByCustomerId(String customerId);
    boolean removeByCustomerId(String customerId);
    boolean resetByCustomerId(String customerId);
    boolean saveByCustomerId(cn.ibizlab.sample.core.sample.domain.Customer customer,List<Contact> list);
    default boolean saveByCustomerId(String customerId,List<Contact> list) {
        return saveByCustomerId(new cn.ibizlab.sample.core.sample.domain.Customer().setCustomerId(customerId),list);
    }

}