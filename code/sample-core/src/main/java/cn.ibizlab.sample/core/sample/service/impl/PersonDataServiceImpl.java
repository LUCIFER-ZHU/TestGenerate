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
import cn.ibizlab.sample.core.sample.domain.PersonData;
import cn.ibizlab.sample.core.sample.filter.PersonDataSearchContext;
import cn.ibizlab.sample.core.sample.service.IPersonDataService;
import cn.ibizlab.sample.core.sample.mapper.PersonDataMapper;
import cn.ibizlab.util.helper.CachedBeanCopier;
import cn.ibizlab.util.helper.DEFieldCacheMap;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.core.conditions.Wrapper;


/**
 * 实体[人员数据] 服务对象接口实现
 */
@Slf4j
@Service("PersonDataServiceImpl")
public class PersonDataServiceImpl extends ServiceImpl<PersonDataMapper,PersonData> implements IPersonDataService {

    protected IPersonDataService personDataService = SpringContextHolder.getBean(this.getClass());

    @Autowired
    @Lazy
    protected cn.ibizlab.sample.core.sample.service.IDeptDataService deptDataService;
   
    @Autowired
    @Lazy
    protected cn.ibizlab.sample.core.sample.service.IOrgDataService orgDataService;
   

    protected int batchSize = 500;

    public PersonData get(PersonData et) {
        PersonData rt = this.baseMapper.selectEntity(et);
        Assert.notNull(rt,"数据不存在,人员数据:"+et.getPersonDataId());
        CachedBeanCopier.copy(rt, et);
        return et;
    }
    
    public List<PersonData> getByEntities(List<PersonData> entities) {
        return this.baseMapper.selectEntities(entities);
    }

    public void fillParentData(PersonData et) {
        
    }

    public PersonData getDraft(PersonData et) {
        fillParentData(et);
        return et;
    }

    public boolean checkKey(PersonData et) {
        return this.count(Wrappers.lambdaQuery(et))>0;
    }

    @Override
    @Transactional
    public boolean create(PersonData et) {
        fillParentData(et);
        if(!this.retBool(this.baseMapper.insert(et))) 
            return false;
        get(et);
        return true;
    }
    @Transactional
    public boolean createBatch(List<PersonData> list) {
        list.forEach(et->fillParentData(et));
        this.saveBatch(list, batchSize);        
        return true;
    }

    @Transactional
    public boolean update(PersonData et) {
        fillParentData(et);
        if(!update(et, (Wrapper) et.getUpdateWrapper(true)
                .eq("persondataid", et.getPersonDataId())
            )) {
            return false;
        }
        get(et);
        return true;
    }

    @Transactional
    public boolean updateBatch(List<PersonData> list) {
        list.forEach(et->fillParentData(et));
        updateBatchById(list, batchSize);
        return true;
    }

    @Transactional
    public boolean save(PersonData et) {
        if(checkKey(et))
            return personDataService.update(et);
        else
            return personDataService.create(et);
    }

    @Transactional
    public boolean saveBatch(List<PersonData> list) {
        List<PersonData> rt=this.getByEntities(list);
        Set<Serializable> keys=new HashSet<>();
        rt.forEach(et->{
            Serializable key = et.getPersonDataId();
            if(!ObjectUtils.isEmpty(key))
                keys.add(key);
        });
        List<PersonData> _create=new ArrayList<>();
        List<PersonData> _update=new ArrayList<>();
        list.forEach(et-> {
            Serializable key = et.getPersonDataId();
            if(keys.contains(key))
                _update.add(et);
            else
                _create.add(et);
        });
        List rtList=new ArrayList<>();
        if(_update.size()>0 && (!personDataService.updateBatch(_update)))
            return false;
        if(_create.size()>0 && (!personDataService.createBatch(_create)))
            return false;
        return true;
    }

    @Transactional
    public boolean remove(PersonData et) {
        String key = et.getPersonDataId();

        if(!remove(new QueryWrapper<PersonData>()
                .eq("persondataid", et.getPersonDataId())
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

    public Page<PersonData> searchDefault(PersonDataSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<PersonData> pages=baseMapper.searchDefault(context.getPages(),context,context.getSelectCond());
        return new PageImpl<PersonData>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }
    public List<PersonData> listDefault(PersonDataSearchContext context) {
        return baseMapper.listDefault(context,context.getSelectCond());
    }

    public List<PersonData> selectByDeptDataId(String deptDataId) {
        return baseMapper.selectByDeptDataId(deptDataId);
    }

    public boolean removeByDeptDataId(String deptDataId) {
        return this.remove(new QueryWrapper<PersonData>().eq("deptdataid",deptDataId));
    }

    public boolean resetByDeptDataId(String deptDataId) {
        return this.update(new UpdateWrapper<PersonData>().set("deptdataid",null).eq("deptdataid",deptDataId));
    }

    public boolean saveByDeptDataId(String deptDataId,List<PersonData> list) {
        if(list==null)
            return true;
        Set<String> delIds=new HashSet<String>();
        List<PersonData> _update=new ArrayList<PersonData>();
        List<PersonData> _create=new ArrayList<PersonData>();
        for(PersonData before:selectByDeptDataId(deptDataId)){
            delIds.add(before.getPersonDataId());
        }
        for(PersonData sub:list) {
            sub.setDeptDataId(deptDataId);
            if(ObjectUtils.isEmpty(sub.getPersonDataId()))
                sub.setPersonDataId((String)sub.getDefaultKey(true));
            if(delIds.contains(sub.getPersonDataId())) {
                delIds.remove(sub.getPersonDataId());
                _update.add(sub);
            }
            else
                _create.add(sub);
        }
        if(_update.size()>0 && (!personDataService.updateBatch(_update)))
            return false;
        if(_create.size()>0 && (!personDataService.createBatch(_create)))
            return false;
        if(delIds.size()>0 && (!personDataService.removeBatch(delIds)))
            return false;
        return true;
    }

    public List<PersonData> selectByOrgDataId(String orgDataId) {
        return baseMapper.selectByOrgDataId(orgDataId);
    }

    public boolean removeByOrgDataId(String orgDataId) {
        return this.remove(new QueryWrapper<PersonData>().eq("orgdataid",orgDataId));
    }

    public boolean resetByOrgDataId(String orgDataId) {
        return this.update(new UpdateWrapper<PersonData>().set("orgdataid",null).eq("orgdataid",orgDataId));
    }

    public boolean saveByOrgDataId(String orgDataId,List<PersonData> list) {
        if(list==null)
            return true;
        Set<String> delIds=new HashSet<String>();
        List<PersonData> _update=new ArrayList<PersonData>();
        List<PersonData> _create=new ArrayList<PersonData>();
        for(PersonData before:selectByOrgDataId(orgDataId)){
            delIds.add(before.getPersonDataId());
        }
        for(PersonData sub:list) {
            sub.setOrgDataId(orgDataId);
            if(ObjectUtils.isEmpty(sub.getPersonDataId()))
                sub.setPersonDataId((String)sub.getDefaultKey(true));
            if(delIds.contains(sub.getPersonDataId())) {
                delIds.remove(sub.getPersonDataId());
                _update.add(sub);
            }
            else
                _create.add(sub);
        }
        if(_update.size()>0 && (!personDataService.updateBatch(_update)))
            return false;
        if(_create.size()>0 && (!personDataService.createBatch(_create)))
            return false;
        if(delIds.size()>0 && (!personDataService.removeBatch(delIds)))
            return false;
        return true;
    }


}