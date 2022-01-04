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
import ibizsample.core.sample.domain.LogicValidData2;
import ibizsample.core.sample.filter.LogicValidData2SearchContext;
import ibizsample.core.sample.service.ILogicValidData2Service;
import ibizsample.core.sample.mapper.LogicValidData2Mapper;
import cn.ibizlab.util.helper.CachedBeanCopier;
import cn.ibizlab.util.helper.DEFieldCacheMap;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.core.conditions.Wrapper;


/**
 * 实体[示例数据（启用逻辑删除）（主键数值）] 服务对象接口实现
 */
@Slf4j
@Service("LogicValidData2ServiceImpl")
public class LogicValidData2ServiceImpl extends ServiceImpl<LogicValidData2Mapper,LogicValidData2> implements ILogicValidData2Service {

    protected ILogicValidData2Service logicValidData2Service = SpringContextHolder.getBean(this.getClass());


    protected int batchSize = 500;

    public LogicValidData2 get(LogicValidData2 et) {
        LogicValidData2 rt = this.baseMapper.selectEntity(et);
        Assert.notNull(rt,"数据不存在,示例数据（启用逻辑删除）（主键数值）:"+et.getLogicValidData2Id());
        CachedBeanCopier.copy(rt, et);
        return et;
    }
    
    public List<LogicValidData2> getByEntities(List<LogicValidData2> entities) {
        return this.baseMapper.selectEntities(entities);
    }


    public LogicValidData2 getDraft(LogicValidData2 et) {
        return et;
    }

    public boolean checkKey(LogicValidData2 et) {
        return this.count(Wrappers.lambdaQuery(et))>0;
    }

    @Override
    @Transactional
    public boolean create(LogicValidData2 et) {
        if(!this.retBool(this.baseMapper.insert(et))) 
            return false;
        get(et);
        return true;
    }
    @Transactional
    public boolean createBatch(List<LogicValidData2> list) {
        this.saveOrUpdateBatch(list,batchSize);
        return true;
    }

    @Transactional
    public boolean update(LogicValidData2 et) {
        if(!update(et, (Wrapper) et.getUpdateWrapper(true)
                .eq("logicvaliddata2id", et.getLogicValidData2Id())
            )) {
            return false;
        }
        get(et);
        return true;
    }

    @Transactional
    public boolean updateBatch(List<LogicValidData2> list) {
        updateBatchById(list, batchSize);
        return true;
    }

    @Transactional
    public boolean save(LogicValidData2 et) {
        if(checkKey(et))
            return logicValidData2Service.update(et);
        else
            return logicValidData2Service.create(et);
    }

    @Transactional
    public boolean saveBatch(List<LogicValidData2> list) {
        List<LogicValidData2> rt=this.getByEntities(list);
        Set<Serializable> keys=new HashSet<>();
        rt.forEach(et->{
            Serializable key = et.getLogicValidData2Id();
            if(!ObjectUtils.isEmpty(key))
                keys.add(key);
        });
        List<LogicValidData2> create=new ArrayList<>();
        List<LogicValidData2> update=new ArrayList<>();
        list.forEach(et-> {
            Serializable key = et.getLogicValidData2Id();
            if(keys.contains(key))
                update.add(et);
            else
                create.add(et);
        });
        List rtList=new ArrayList<>();
        if(update.size()>0 && (!logicValidData2Service.updateBatch(update)))
            return false;
        if(create.size()>0 && (!logicValidData2Service.createBatch(create)))
            return false;
        return true;
    }

    @Transactional
    public boolean remove(LogicValidData2 et) {
        Long key = et.getLogicValidData2Id();

        if(!remove(new QueryWrapper<LogicValidData2>()
                .eq("logicvaliddata2id", et.getLogicValidData2Id())
            )) {
            return false;
        }
        return true ;
    }
    
    @Transactional
    public boolean removeBatch(Collection<Long> ids) {
        removeByIds(ids);
        return true;
    }

    public Page<LogicValidData2> searchDefault(LogicValidData2SearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<LogicValidData2> pages=baseMapper.searchDefault(context.getPages(),context,context.getSelectCond());
        return new PageImpl<LogicValidData2>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }
    public List<LogicValidData2> listDefault(LogicValidData2SearchContext context) {
        return baseMapper.listDefault(context,context.getSelectCond());
    }


}