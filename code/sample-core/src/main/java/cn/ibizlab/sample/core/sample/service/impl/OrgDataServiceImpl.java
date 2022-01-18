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
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Value;
import cn.ibizlab.util.errors.BadRequestAlertException;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Lazy;
import cn.ibizlab.sample.core.sample.domain.OrgData;
import cn.ibizlab.sample.core.sample.filter.OrgDataSearchContext;
import cn.ibizlab.sample.core.sample.service.IOrgDataService;
import cn.ibizlab.sample.core.sample.mapper.OrgDataMapper;
import cn.ibizlab.util.helper.CachedBeanCopier;
import cn.ibizlab.util.helper.DEFieldCacheMap;
import cn.ibizlab.util.security.AuthenticationUser;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.core.conditions.Wrapper;


/**
 * 实体[组织数据] 服务对象接口实现
 */
@Slf4j
@Service("OrgDataService")
public class OrgDataServiceImpl extends ServiceImpl<OrgDataMapper,OrgData> implements IOrgDataService {

    protected IOrgDataService getProxyService() {
        return SpringContextHolder.getBean(this.getClass());
    }


    protected int batchSize = 500;

    public OrgData get(OrgData et) {
        OrgData rt = this.baseMapper.selectEntity(et);
        Assert.notNull(rt,"数据不存在,组织数据:"+et.getOrgDataId());
        BeanUtils.copyProperties(rt, et);
        return et;
    }
    
    public List<OrgData> getByEntities(List<OrgData> entities) {
        return this.baseMapper.selectEntities(entities);
    }

    public void fillParentData(OrgData et) {
        if(!ObjectUtils.isEmpty(et.getPorgdataid())) {
            OrgData orgData = et.getPOrgData();
            if(!ObjectUtils.isEmpty(orgData)) {
                et.setPorgdataname(orgData.getOrgDataName());   
            }
        }    
    }

    public OrgData getDraft(OrgData et) {
        fillParentData(et);
        return et;
    }

    public boolean checkKey(OrgData et) {
        return this.count(Wrappers.lambdaQuery(et))>0;
    }

    @Override
    @Transactional
    public boolean create(OrgData et) {
        fillParentData(et);
        if(!this.retBool(this.baseMapper.insert(et))) 
            return false;
        get(et);
        return true;
    }
    @Transactional
    public boolean createBatch(List<OrgData> list) {
        list.forEach(et->fillParentData(et));
        this.saveBatch(list, batchSize);        
        return true;
    }

    @Transactional
    public boolean update(OrgData et) {
        fillParentData(et);
        if(!update(et, (Wrapper) et.getUpdateWrapper(true)
                .eq("orgdataid", et.getOrgDataId())
            )) {
            return false;
        }
        get(et);
        return true;
    }

    @Transactional
    public boolean updateBatch(List<OrgData> list) {
        list.forEach(et->fillParentData(et));
        updateBatchById(list, batchSize);
        return true;
    }

    @Transactional
    public boolean save(OrgData et) {
        if(checkKey(et))
            return getProxyService().update(et);
        else
            return getProxyService().create(et);
    }

    @Transactional
    public boolean saveBatch(List<OrgData> list) {
        List<OrgData> rt=this.getByEntities(list);
        Set<Serializable> keys=new HashSet<>();
        rt.forEach(et->{
            Serializable key = et.getOrgDataId();
            if(!ObjectUtils.isEmpty(key))
                keys.add(key);
        });
        List<OrgData> _create=new ArrayList<>();
        List<OrgData> _update=new ArrayList<>();
        list.forEach(et-> {
            Serializable key = et.getOrgDataId();
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
    public boolean remove(OrgData et) {
        String key = et.getOrgDataId();

        if(!remove(new QueryWrapper<OrgData>()
                .eq("orgdataid", et.getOrgDataId())
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

    public Page<OrgData> searchDefault(OrgDataSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<OrgData> pages=baseMapper.searchDefault(context.getPages(),context,context.getSelectCond());
        return new PageImpl<OrgData>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }
    public List<OrgData> listDefault(OrgDataSearchContext context) {
        return baseMapper.listDefault(context,context.getSelectCond());
    }

    public Page<OrgData> searchPorgdata(OrgDataSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<OrgData> pages=baseMapper.searchPorgdata(context.getPages(),context,context.getSelectCond());
        return new PageImpl<OrgData>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }
    public List<OrgData> listPorgdata(OrgDataSearchContext context) {
        return baseMapper.listPorgdata(context,context.getSelectCond());
    }

    public List<OrgData> selectByPorgdataid(String porgdataid) {
        return baseMapper.selectByPorgdataid(porgdataid);
    }

    public boolean removeByPorgdataid(String porgdataid) {
        return this.remove(new QueryWrapper<OrgData>().eq("porgdataid",porgdataid));
    }

    public boolean resetByPorgdataid(String porgdataid) {
        return this.update(new UpdateWrapper<OrgData>().set("porgdataid",null).eq("porgdataid",porgdataid));
    }

    public boolean saveByPorgdataid(OrgData orgData,List<OrgData> list) {
        if(list==null)
            return true;
        Set<String> delIds=new HashSet<String>();
        List<OrgData> _update=new ArrayList<OrgData>();
        List<OrgData> _create=new ArrayList<OrgData>();
        for(OrgData before:selectByPorgdataid(orgData.getOrgDataId())){
            delIds.add(before.getOrgDataId());
        }
        for(OrgData sub:list) {
            sub.setPorgdataid(orgData.getOrgDataId());
            sub.setPOrgData(orgData);
            if(ObjectUtils.isEmpty(sub.getOrgDataId()))
                sub.setOrgDataId((String)sub.getDefaultKey(true));
            if(delIds.contains(sub.getOrgDataId())) {
                delIds.remove(sub.getOrgDataId());
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