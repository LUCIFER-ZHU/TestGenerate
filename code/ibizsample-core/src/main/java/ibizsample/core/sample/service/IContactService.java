package ibizsample.core.sample.service;

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
import om.baomidou.dynamic.datasource.annotation.DS;

import ibizsample.core.sample.domain.Contact;
import ibizsample.core.sample.filter.ContactSearchContext;

public interface IContactService extends IService<Contact> {

    Contact get(String key);
    List<Contact> getByIds(Collection<String> idList);
    List<Contact> getByEntities(Collection<Contact> entities);

    Contact getDraft(Contact et);

    boolean checkKey(Contact et);

    boolean create(Contact et);
    boolean createBatch(List<Contact> list);

    boolean update(Contact et);
    boolean updateBatch(List<Contact> list);

    boolean save(Contact et);
    boolean saveBatch(List<Contact> list);

    boolean remove(String key);
    boolean removeBatch(Collection<String> idList);

    Page<Contact> searchDefault(ContactSearchContext context);
    List<Contact> listDefault(ContactSearchContext context);

    List<Contact> selectByCustomerId(String customerId);
    boolean removeByCustomerId(String customerId);
    boolean saveByCustomerId(String customerId,List<Contact> list);

}