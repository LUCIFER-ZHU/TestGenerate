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
import doc.core.sample.domain.CalendarData;
import doc.core.sample.filter.CalendarDataSearchContext;
import doc.core.sample.service.ICalendarDataService;
import doc.core.sample.mapper.CalendarDataMapper;
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
 * 实体[日历示例数据] 服务对象接口实现
 */
@Slf4j
@Service("CalendarDataService")
public class CalendarDataServiceImpl extends ServiceImpl<CalendarDataMapper,CalendarData> implements ICalendarDataService {

    protected ICalendarDataService getProxyService() {
        return SpringContextHolder.getBean(this.getClass());
    }


    protected int batchSize = 500;

    public CalendarData get(CalendarData et) {
        CalendarData rt = this.baseMapper.selectEntity(et);
        Assert.notNull(rt,"数据不存在,日历示例数据:"+et.getCalendarDataId());
        BeanUtils.copyProperties(rt, et);
        return et;
    }
    
    public List<CalendarData> getByEntities(List<CalendarData> entities) {
        return this.baseMapper.selectEntities(entities);
    }


    public CalendarData getDraft(CalendarData et) {
        return et;
    }

    public boolean checkKey(CalendarData et) {
        return this.count(Wrappers.lambdaQuery(et))>0;
    }

    @Override
    @Transactional
    public boolean create(CalendarData et) {
        if(!this.retBool(this.baseMapper.insert(et))) 
            return false;
        get(et);
        return true;
    }
    @Transactional
    public boolean createBatch(List<CalendarData> list) {
        this.saveBatch(list, batchSize);        
        return true;
    }

    @Transactional
    public boolean update(CalendarData et) {
        if(!update(et, (Wrapper) et.getUpdateWrapper(true)
                .eq("calendardataid", et.getCalendarDataId())
            )) {
            return false;
        }
        get(et);
        return true;
    }

    @Transactional
    public boolean updateBatch(List<CalendarData> list) {
        updateBatchById(list, batchSize);
        return true;
    }

    @Transactional
    public boolean save(CalendarData et) {
        if(checkKey(et))
            return getProxyService().update(et);
        else
            return getProxyService().create(et);
    }

    @Transactional
    public boolean saveBatch(List<CalendarData> list) {
        List<CalendarData> rt=this.getByEntities(list);
        Set<Serializable> keys=new HashSet<>();
        rt.forEach(et->{
            Serializable key = et.getCalendarDataId();
            if(!ObjectUtils.isEmpty(key))
                keys.add(key);
        });
        List<CalendarData> _create=new ArrayList<>();
        List<CalendarData> _update=new ArrayList<>();
        list.forEach(et-> {
            Serializable key = et.getCalendarDataId();
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
    public boolean remove(CalendarData et) {
        String key = et.getCalendarDataId();

        if(!remove(new QueryWrapper<CalendarData>()
                .eq("calendardataid", et.getCalendarDataId())
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

    public Page<CalendarData> searchDefault(CalendarDataSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<CalendarData> pages=baseMapper.searchDefault(context.getPages(),context,context.getSelectCond());
        return new PageImpl<CalendarData>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }
    public List<CalendarData> listDefault(CalendarDataSearchContext context) {
        return baseMapper.listDefault(context,context.getSelectCond());
    }




}