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
import doc.core.sample.domain.EditorValue;
import doc.core.sample.filter.EditorValueSearchContext;
import doc.core.sample.service.IEditorValueService;
import doc.core.sample.mapper.EditorValueMapper;
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
 * 实体[编辑器值] 服务对象接口实现
 */
@Slf4j
@Service("EditorValueService")
public class EditorValueServiceImpl extends ServiceImpl<EditorValueMapper,EditorValue> implements IEditorValueService {

    protected IEditorValueService getProxyService() {
        return SpringContextHolder.getBean(this.getClass());
    }

    @Autowired
    @Lazy
    protected ICustomerService customerService;
   

    protected int batchSize = 500;

    public EditorValue get(EditorValue et) {
        EditorValue rt = this.baseMapper.selectEntity(et);
        Assert.notNull(rt,"数据不存在,编辑器值:"+et.getEditorValueId());
        BeanUtils.copyProperties(rt, et);
        return et;
    }
    
    public List<EditorValue> getByEntities(List<EditorValue> entities) {
        return this.baseMapper.selectEntities(entities);
    }

    public void fillParentData(EditorValue et) {
        if(!ObjectUtils.isEmpty(et.getCustomerId())) {
            Customer customer = et.getCustomer();
            if(!ObjectUtils.isEmpty(customer)) {
                et.setCustomerName(customer.getCustomerName());   
            }
        }    
        if(!ObjectUtils.isEmpty(et.getCustomerid2())) {
            Customer customer = et.getNo2Customer();
            if(!ObjectUtils.isEmpty(customer)) {
                et.setCustomername2(customer.getCustomerName());   
            }
        }    
        if(!ObjectUtils.isEmpty(et.getCustomerid3())) {
            Customer customer = et.getNo3Customer();
            if(!ObjectUtils.isEmpty(customer)) {
                et.setCustomername3(customer.getCustomerName());   
            }
        }    
        if(!ObjectUtils.isEmpty(et.getCustomerid4())) {
            Customer customer = et.getNo4Customer();
            if(!ObjectUtils.isEmpty(customer)) {
                et.setCustomername4(customer.getCustomerName());   
            }
        }    
        if(!ObjectUtils.isEmpty(et.getCustomerid5())) {
            Customer customer = et.getNo5Customer();
            if(!ObjectUtils.isEmpty(customer)) {
                et.setCustomername5(customer.getCustomerName());   
            }
        }    
    }

    public EditorValue getDraft(EditorValue et) {
        fillParentData(et);
        return et;
    }

    public boolean checkKey(EditorValue et) {
        return this.count(Wrappers.lambdaQuery(et))>0;
    }

    @Override
    @Transactional
    public boolean create(EditorValue et) {
        fillParentData(et);
        if(!this.retBool(this.baseMapper.insert(et))) 
            return false;
        get(et);
        return true;
    }
    @Transactional
    public boolean createBatch(List<EditorValue> list) {
        list.forEach(et->fillParentData(et));
        this.saveBatch(list, batchSize);        
        return true;
    }

    @Transactional
    public boolean update(EditorValue et) {
        fillParentData(et);
        if(!update(et, (Wrapper) et.getUpdateWrapper(true)
                .eq("editorvalueid", et.getEditorValueId())
            )) {
            return false;
        }
        get(et);
        return true;
    }

    @Transactional
    public boolean updateBatch(List<EditorValue> list) {
        list.forEach(et->fillParentData(et));
        updateBatchById(list, batchSize);
        return true;
    }

    @Transactional
    public boolean save(EditorValue et) {
        if(checkKey(et))
            return getProxyService().update(et);
        else
            return getProxyService().create(et);
    }

    @Transactional
    public boolean saveBatch(List<EditorValue> list) {
        List<EditorValue> rt=this.getByEntities(list);
        Set<Serializable> keys=new HashSet<>();
        rt.forEach(et->{
            Serializable key = et.getEditorValueId();
            if(!ObjectUtils.isEmpty(key))
                keys.add(key);
        });
        List<EditorValue> _create=new ArrayList<>();
        List<EditorValue> _update=new ArrayList<>();
        list.forEach(et-> {
            Serializable key = et.getEditorValueId();
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
    public boolean remove(EditorValue et) {
        String key = et.getEditorValueId();

        if(!remove(new QueryWrapper<EditorValue>()
                .eq("editorvalueid", et.getEditorValueId())
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

    public Page<EditorValue> searchDefault(EditorValueSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<EditorValue> pages=baseMapper.searchDefault(context.getPages(),context,context.getSelectCond());
        return new PageImpl<EditorValue>(com.alibaba.fastjson.JSON.parseArray(com.alibaba.fastjson.JSON.toJSONString(pages.getRecords()),EditorValue.class), context.getPageable(), pages.getTotal());
    }
    public List<EditorValue> listDefault(EditorValueSearchContext context) {
        return com.alibaba.fastjson.JSON.parseArray(com.alibaba.fastjson.JSON.toJSONString(baseMapper.listDefault(context,context.getSelectCond())),EditorValue.class);
    }

    public List<EditorValue> selectByCustomerId(String customerId) {
        return baseMapper.selectByCustomerId(customerId);
    }

    public boolean removeByCustomerId(String customerId) {
        return this.remove(new QueryWrapper<EditorValue>().eq("customerid",customerId));
    }

    public boolean resetByCustomerId(String customerId) {
        return this.update(new UpdateWrapper<EditorValue>().set("customerid",null).eq("customerid",customerId));
    }

    public boolean saveByCustomerId(Customer customer,List<EditorValue> list) {
        if(list==null)
            return true;
        Set<String> delIds=new HashSet<String>();
        List<EditorValue> _update=new ArrayList<EditorValue>();
        List<EditorValue> _create=new ArrayList<EditorValue>();
        for(EditorValue before:selectByCustomerId(customer.getCustomerId())){
            delIds.add(before.getEditorValueId());
        }
        for(EditorValue sub:list) {
            sub.setCustomerId(customer.getCustomerId());
            sub.setCustomer(customer);
            if(ObjectUtils.isEmpty(sub.getEditorValueId()))
                sub.setEditorValueId((String)sub.getDefaultKey(true));
            if(delIds.contains(sub.getEditorValueId())) {
                delIds.remove(sub.getEditorValueId());
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

    public List<EditorValue> selectByCustomerid2(String customerid2) {
        return baseMapper.selectByCustomerid2(customerid2);
    }

    public boolean removeByCustomerid2(String customerid2) {
        return this.remove(new QueryWrapper<EditorValue>().eq("customerid2",customerid2));
    }

    public boolean resetByCustomerid2(String customerid2) {
        return this.update(new UpdateWrapper<EditorValue>().set("customerid2",null).eq("customerid2",customerid2));
    }

    public boolean saveByCustomerid2(Customer customer,List<EditorValue> list) {
        if(list==null)
            return true;
        Set<String> delIds=new HashSet<String>();
        List<EditorValue> _update=new ArrayList<EditorValue>();
        List<EditorValue> _create=new ArrayList<EditorValue>();
        for(EditorValue before:selectByCustomerid2(customer.getCustomerId())){
            delIds.add(before.getEditorValueId());
        }
        for(EditorValue sub:list) {
            sub.setCustomerid2(customer.getCustomerId());
            sub.setNo2Customer(customer);
            if(ObjectUtils.isEmpty(sub.getEditorValueId()))
                sub.setEditorValueId((String)sub.getDefaultKey(true));
            if(delIds.contains(sub.getEditorValueId())) {
                delIds.remove(sub.getEditorValueId());
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

    public List<EditorValue> selectByCustomerid3(String customerid3) {
        return baseMapper.selectByCustomerid3(customerid3);
    }

    public boolean removeByCustomerid3(String customerid3) {
        return this.remove(new QueryWrapper<EditorValue>().eq("customerid3",customerid3));
    }

    public boolean resetByCustomerid3(String customerid3) {
        return this.update(new UpdateWrapper<EditorValue>().set("customerid3",null).eq("customerid3",customerid3));
    }

    public boolean saveByCustomerid3(Customer customer,List<EditorValue> list) {
        if(list==null)
            return true;
        Set<String> delIds=new HashSet<String>();
        List<EditorValue> _update=new ArrayList<EditorValue>();
        List<EditorValue> _create=new ArrayList<EditorValue>();
        for(EditorValue before:selectByCustomerid3(customer.getCustomerId())){
            delIds.add(before.getEditorValueId());
        }
        for(EditorValue sub:list) {
            sub.setCustomerid3(customer.getCustomerId());
            sub.setNo3Customer(customer);
            if(ObjectUtils.isEmpty(sub.getEditorValueId()))
                sub.setEditorValueId((String)sub.getDefaultKey(true));
            if(delIds.contains(sub.getEditorValueId())) {
                delIds.remove(sub.getEditorValueId());
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

    public List<EditorValue> selectByCustomerid4(String customerid4) {
        return baseMapper.selectByCustomerid4(customerid4);
    }

    public boolean removeByCustomerid4(String customerid4) {
        return this.remove(new QueryWrapper<EditorValue>().eq("customerid4",customerid4));
    }

    public boolean resetByCustomerid4(String customerid4) {
        return this.update(new UpdateWrapper<EditorValue>().set("customerid4",null).eq("customerid4",customerid4));
    }

    public boolean saveByCustomerid4(Customer customer,List<EditorValue> list) {
        if(list==null)
            return true;
        Set<String> delIds=new HashSet<String>();
        List<EditorValue> _update=new ArrayList<EditorValue>();
        List<EditorValue> _create=new ArrayList<EditorValue>();
        for(EditorValue before:selectByCustomerid4(customer.getCustomerId())){
            delIds.add(before.getEditorValueId());
        }
        for(EditorValue sub:list) {
            sub.setCustomerid4(customer.getCustomerId());
            sub.setNo4Customer(customer);
            if(ObjectUtils.isEmpty(sub.getEditorValueId()))
                sub.setEditorValueId((String)sub.getDefaultKey(true));
            if(delIds.contains(sub.getEditorValueId())) {
                delIds.remove(sub.getEditorValueId());
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

    public List<EditorValue> selectByCustomerid5(String customerid5) {
        return baseMapper.selectByCustomerid5(customerid5);
    }

    public boolean removeByCustomerid5(String customerid5) {
        return this.remove(new QueryWrapper<EditorValue>().eq("customerid5",customerid5));
    }

    public boolean resetByCustomerid5(String customerid5) {
        return this.update(new UpdateWrapper<EditorValue>().set("customerid5",null).eq("customerid5",customerid5));
    }

    public boolean saveByCustomerid5(Customer customer,List<EditorValue> list) {
        if(list==null)
            return true;
        Set<String> delIds=new HashSet<String>();
        List<EditorValue> _update=new ArrayList<EditorValue>();
        List<EditorValue> _create=new ArrayList<EditorValue>();
        for(EditorValue before:selectByCustomerid5(customer.getCustomerId())){
            delIds.add(before.getEditorValueId());
        }
        for(EditorValue sub:list) {
            sub.setCustomerid5(customer.getCustomerId());
            sub.setNo5Customer(customer);
            if(ObjectUtils.isEmpty(sub.getEditorValueId()))
                sub.setEditorValueId((String)sub.getDefaultKey(true));
            if(delIds.contains(sub.getEditorValueId())) {
                delIds.remove(sub.getEditorValueId());
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