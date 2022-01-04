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
import ibizsample.core.sample.domain.DeptData;
import ibizsample.core.sample.filter.DeptDataSearchContext;
import ibizsample.core.sample.service.IDeptDataService;
import ibizsample.core.sample.mapper.DeptDataMapper;
import cn.ibizlab.util.helper.CachedBeanCopier;
import cn.ibizlab.util.helper.DEFieldCacheMap;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.core.conditions.Wrapper;


/**
 * 实体[部门数据] 服务对象接口实现
 */
@Slf4j
@Service("DeptDataServiceImpl")
public class DeptDataServiceImpl extends ServiceImpl<DeptDataMapper,DeptData> implements IDeptDataService {

    protected IDeptDataService deptDataService = SpringContextHolder.getBean(this.getClass());

    @Autowired
    @Lazy
    protected ibizsample.core.sample.service.IOrgDataService orgDataService;
   

    protected int batchSize = 500;

    public DeptData get(DeptData et) {
        DeptData rt = this.baseMapper.selectEntity(et);
        Assert.notNull(rt,"数据不存在,部门数据:"+et.getDeptDataId());
        CachedBeanCopier.copy(rt, et);
        return et;
    }
    
    public List<DeptData> getByEntities(List<DeptData> entities) {
        return this.baseMapper.selectEntities(entities);
    }

    public void fillParentData(DeptData et) {
        
    }

    public DeptData getDraft(DeptData et) {
        fillParentData(et);
        return et;
    }

    public boolean checkKey(DeptData et) {
        return this.count(Wrappers.lambdaQuery(et))>0;
    }

    @Override
    @Transactional
    public boolean create(DeptData et) {
        fillParentData(et);
        if(!this.retBool(this.baseMapper.insert(et))) 
            return false;
        get(et);
        return true;
    }
    @Transactional
    public boolean createBatch(List<DeptData> list) {
        list.forEach(et->fillParentData(et));
        this.saveBatch(list, batchSize);        
        return true;
    }

    @Transactional
    public boolean update(DeptData et) {
        fillParentData(et);
        if(!update(et, (Wrapper) et.getUpdateWrapper(true)
                .eq("deptdataid", et.getDeptDataId())
            )) {
            return false;
        }
        get(et);
        return true;
    }

    @Transactional
    public boolean updateBatch(List<DeptData> list) {
        list.forEach(et->fillParentData(et));
        updateBatchById(list, batchSize);
        return true;
    }

    @Transactional
    public boolean save(DeptData et) {
        if(checkKey(et))
            return deptDataService.update(et);
        else
            return deptDataService.create(et);
    }

    @Transactional
    public boolean saveBatch(List<DeptData> list) {
        List<DeptData> rt=this.getByEntities(list);
        Set<Serializable> keys=new HashSet<>();
        rt.forEach(et->{
            Serializable key = et.getDeptDataId();
            if(!ObjectUtils.isEmpty(key))
                keys.add(key);
        });
        List<DeptData> create=new ArrayList<>();
        List<DeptData> update=new ArrayList<>();
        list.forEach(et-> {
            Serializable key = et.getDeptDataId();
            if(keys.contains(key))
                update.add(et);
            else
                create.add(et);
        });
        List rtList=new ArrayList<>();
        if(update.size()>0 && (!deptDataService.updateBatch(update)))
            return false;
        if(create.size()>0 && (!deptDataService.createBatch(create)))
            return false;
        return true;
    }

    @Transactional
    public boolean remove(DeptData et) {
        String key = et.getDeptDataId();

        if(!remove(new QueryWrapper<DeptData>()
                .eq("deptdataid", et.getDeptDataId())
            )) {
            return false;
        }
        return true ;
    }
    
    @Transactional
    public boolean removeBatch(Collection<String> ids) {
        removeByIds(ids);
        return true;
    }

    public Page<DeptData> searchDefault(DeptDataSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<DeptData> pages=baseMapper.searchDefault(context.getPages(),context,context.getSelectCond());
        return new PageImpl<DeptData>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }
    public List<DeptData> listDefault(DeptDataSearchContext context) {
        return baseMapper.listDefault(context,context.getSelectCond());
    }

    public List<DeptData> selectByOrgDataId(String orgDataId) {
        return baseMapper.selectByOrgDataId(orgDataId);
    }

    public boolean removeByOrgDataId(String orgDataId) {
        return this.remove(new QueryWrapper<DeptData>().eq("orgdataid",orgDataId));
    }

    public boolean resetByOrgDataId(String orgDataId) {
        return this.update(new UpdateWrapper<DeptData>().set("orgdataid",null).eq("orgdataid",orgDataId));
    }

    public boolean saveByOrgDataId(String orgDataId,List<DeptData> list) {
        if(list==null)
            return true;
        Set<String> delIds=new HashSet<String>();
        List<DeptData> _update=new ArrayList<DeptData>();
        List<DeptData> _create=new ArrayList<DeptData>();
        for(DeptData before:selectByOrgDataId(orgDataId)){
            delIds.add(before.getDeptDataId());
        }
        for(DeptData sub:list) {
            sub.setOrgDataId(orgDataId);
            if(ObjectUtils.isEmpty(sub.getDeptDataId()))
                sub.setDeptDataId((String)sub.getDefaultKey(true));
            if(delIds.contains(sub.getDeptDataId())) {
                delIds.remove(sub.getDeptDataId());
                _update.add(sub);
            }
            else
                _create.add(sub);
        }
        if(_update.size()>0 && (!deptDataService.updateBatch(_update)))
            return false;
        if(_create.size()>0 && (!deptDataService.createBatch(_create)))
            return false;
        if(delIds.size()>0 && (!deptDataService.removeBatch(delIds)))
            return false;
        return true;
    }


}