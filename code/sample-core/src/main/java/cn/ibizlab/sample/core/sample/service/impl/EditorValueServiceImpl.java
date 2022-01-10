package cn.ibizlab.sample.core.sample.service.impl;

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
import org.springframework.beans.factory.annotation.Value;
import cn.ibizlab.util.errors.BadRequestAlertException;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Lazy;
import cn.ibizlab.sample.core.sample.domain.EditorValue;
import cn.ibizlab.sample.core.sample.filter.EditorValueSearchContext;
import cn.ibizlab.sample.core.sample.service.IEditorValueService;
import cn.ibizlab.sample.core.sample.mapper.EditorValueMapper;
import cn.ibizlab.util.helper.CachedBeanCopier;
import cn.ibizlab.util.helper.DEFieldCacheMap;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.core.conditions.Wrapper;


/**
 * 实体[编辑器值] 服务对象接口实现
 */
@Slf4j
@Service("EditorValueServiceImpl")
public class EditorValueServiceImpl extends ServiceImpl<EditorValueMapper,EditorValue> implements IEditorValueService {

    protected IEditorValueService editorValueService = SpringContextHolder.getBean(this.getClass());

    @Autowired
    @Lazy
    protected cn.ibizlab.sample.core.sample.service.ICustomerService customerService;
   

    protected int batchSize = 500;

    public EditorValue get(EditorValue et) {
        EditorValue rt = this.baseMapper.selectEntity(et);
        Assert.notNull(rt,"数据不存在,编辑器值:"+et.getEditorValueId());
        CachedBeanCopier.copy(rt, et);
        return et;
    }
    
    public List<EditorValue> getByEntities(List<EditorValue> entities) {
        return this.baseMapper.selectEntities(entities);
    }

    public void fillParentData(EditorValue et) {
        
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
            return editorValueService.update(et);
        else
            return editorValueService.create(et);
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
        if(_update.size()>0 && (!editorValueService.updateBatch(_update)))
            return false;
        if(_create.size()>0 && (!editorValueService.createBatch(_create)))
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
        return new PageImpl<EditorValue>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }
    public List<EditorValue> listDefault(EditorValueSearchContext context) {
        return baseMapper.listDefault(context,context.getSelectCond());
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

    public boolean saveByCustomerId(String customerId,List<EditorValue> list) {
        if(list==null)
            return true;
        Set<String> delIds=new HashSet<String>();
        List<EditorValue> _update=new ArrayList<EditorValue>();
        List<EditorValue> _create=new ArrayList<EditorValue>();
        for(EditorValue before:selectByCustomerId(customerId)){
            delIds.add(before.getEditorValueId());
        }
        for(EditorValue sub:list) {
            sub.setCustomerId(customerId);
            if(ObjectUtils.isEmpty(sub.getEditorValueId()))
                sub.setEditorValueId((String)sub.getDefaultKey(true));
            if(delIds.contains(sub.getEditorValueId())) {
                delIds.remove(sub.getEditorValueId());
                _update.add(sub);
            }
            else
                _create.add(sub);
        }
        if(_update.size()>0 && (!editorValueService.updateBatch(_update)))
            return false;
        if(_create.size()>0 && (!editorValueService.createBatch(_create)))
            return false;
        if(delIds.size()>0 && (!editorValueService.removeBatch(delIds)))
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

    public boolean saveByCustomerid2(String customerid2,List<EditorValue> list) {
        if(list==null)
            return true;
        Set<String> delIds=new HashSet<String>();
        List<EditorValue> _update=new ArrayList<EditorValue>();
        List<EditorValue> _create=new ArrayList<EditorValue>();
        for(EditorValue before:selectByCustomerid2(customerid2)){
            delIds.add(before.getEditorValueId());
        }
        for(EditorValue sub:list) {
            sub.setCustomerid2(customerid2);
            if(ObjectUtils.isEmpty(sub.getEditorValueId()))
                sub.setEditorValueId((String)sub.getDefaultKey(true));
            if(delIds.contains(sub.getEditorValueId())) {
                delIds.remove(sub.getEditorValueId());
                _update.add(sub);
            }
            else
                _create.add(sub);
        }
        if(_update.size()>0 && (!editorValueService.updateBatch(_update)))
            return false;
        if(_create.size()>0 && (!editorValueService.createBatch(_create)))
            return false;
        if(delIds.size()>0 && (!editorValueService.removeBatch(delIds)))
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

    public boolean saveByCustomerid3(String customerid3,List<EditorValue> list) {
        if(list==null)
            return true;
        Set<String> delIds=new HashSet<String>();
        List<EditorValue> _update=new ArrayList<EditorValue>();
        List<EditorValue> _create=new ArrayList<EditorValue>();
        for(EditorValue before:selectByCustomerid3(customerid3)){
            delIds.add(before.getEditorValueId());
        }
        for(EditorValue sub:list) {
            sub.setCustomerid3(customerid3);
            if(ObjectUtils.isEmpty(sub.getEditorValueId()))
                sub.setEditorValueId((String)sub.getDefaultKey(true));
            if(delIds.contains(sub.getEditorValueId())) {
                delIds.remove(sub.getEditorValueId());
                _update.add(sub);
            }
            else
                _create.add(sub);
        }
        if(_update.size()>0 && (!editorValueService.updateBatch(_update)))
            return false;
        if(_create.size()>0 && (!editorValueService.createBatch(_create)))
            return false;
        if(delIds.size()>0 && (!editorValueService.removeBatch(delIds)))
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

    public boolean saveByCustomerid4(String customerid4,List<EditorValue> list) {
        if(list==null)
            return true;
        Set<String> delIds=new HashSet<String>();
        List<EditorValue> _update=new ArrayList<EditorValue>();
        List<EditorValue> _create=new ArrayList<EditorValue>();
        for(EditorValue before:selectByCustomerid4(customerid4)){
            delIds.add(before.getEditorValueId());
        }
        for(EditorValue sub:list) {
            sub.setCustomerid4(customerid4);
            if(ObjectUtils.isEmpty(sub.getEditorValueId()))
                sub.setEditorValueId((String)sub.getDefaultKey(true));
            if(delIds.contains(sub.getEditorValueId())) {
                delIds.remove(sub.getEditorValueId());
                _update.add(sub);
            }
            else
                _create.add(sub);
        }
        if(_update.size()>0 && (!editorValueService.updateBatch(_update)))
            return false;
        if(_create.size()>0 && (!editorValueService.createBatch(_create)))
            return false;
        if(delIds.size()>0 && (!editorValueService.removeBatch(delIds)))
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

    public boolean saveByCustomerid5(String customerid5,List<EditorValue> list) {
        if(list==null)
            return true;
        Set<String> delIds=new HashSet<String>();
        List<EditorValue> _update=new ArrayList<EditorValue>();
        List<EditorValue> _create=new ArrayList<EditorValue>();
        for(EditorValue before:selectByCustomerid5(customerid5)){
            delIds.add(before.getEditorValueId());
        }
        for(EditorValue sub:list) {
            sub.setCustomerid5(customerid5);
            if(ObjectUtils.isEmpty(sub.getEditorValueId()))
                sub.setEditorValueId((String)sub.getDefaultKey(true));
            if(delIds.contains(sub.getEditorValueId())) {
                delIds.remove(sub.getEditorValueId());
                _update.add(sub);
            }
            else
                _create.add(sub);
        }
        if(_update.size()>0 && (!editorValueService.updateBatch(_update)))
            return false;
        if(_create.size()>0 && (!editorValueService.createBatch(_create)))
            return false;
        if(delIds.size()>0 && (!editorValueService.removeBatch(delIds)))
            return false;
        return true;
    }


}