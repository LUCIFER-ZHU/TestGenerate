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
import doc.core.sample.domain.ChartData;
import doc.core.sample.filter.ChartDataSearchContext;
import doc.core.sample.service.IChartDataService;
import doc.core.sample.mapper.ChartDataMapper;
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
 * 实体[图表] 服务对象接口实现
 */
@Slf4j
@Service("ChartDataService")
public class ChartDataServiceImpl extends ServiceImpl<ChartDataMapper,ChartData> implements IChartDataService {

    protected IChartDataService getProxyService() {
        return SpringContextHolder.getBean(this.getClass());
    }


    protected int batchSize = 500;

    public ChartData get(ChartData et) {
        ChartData rt = this.baseMapper.selectEntity(et);
        Assert.notNull(rt,"数据不存在,图表:"+et.getChartDataId());
        BeanUtils.copyProperties(rt, et);
        return et;
    }
    
    public List<ChartData> getByEntities(List<ChartData> entities) {
        return this.baseMapper.selectEntities(entities);
    }


    public ChartData getDraft(ChartData et) {
        return et;
    }

    public boolean checkKey(ChartData et) {
        return this.count(Wrappers.lambdaQuery(et))>0;
    }

    @Override
    @Transactional
    public boolean create(ChartData et) {
        if(!this.retBool(this.baseMapper.insert(et))) 
            return false;
        get(et);
        return true;
    }
    @Transactional
    public boolean createBatch(List<ChartData> list) {
        this.saveBatch(list, batchSize);        
        return true;
    }

    @Transactional
    public boolean update(ChartData et) {
        if(!update(et, (Wrapper) et.getUpdateWrapper(true)
                .eq("chartdataid", et.getChartDataId())
            )) {
            return false;
        }
        get(et);
        return true;
    }

    @Transactional
    public boolean updateBatch(List<ChartData> list) {
        updateBatchById(list, batchSize);
        return true;
    }

    @Transactional
    public boolean save(ChartData et) {
        if(checkKey(et))
            return getProxyService().update(et);
        else
            return getProxyService().create(et);
    }

    @Transactional
    public boolean saveBatch(List<ChartData> list) {
        List<ChartData> rt=this.getByEntities(list);
        Set<Serializable> keys=new HashSet<>();
        rt.forEach(et->{
            Serializable key = et.getChartDataId();
            if(!ObjectUtils.isEmpty(key))
                keys.add(key);
        });
        List<ChartData> _create=new ArrayList<>();
        List<ChartData> _update=new ArrayList<>();
        list.forEach(et-> {
            Serializable key = et.getChartDataId();
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
    public boolean remove(ChartData et) {
        String key = et.getChartDataId();

        if(!remove(new QueryWrapper<ChartData>()
                .eq("chartdataid", et.getChartDataId())
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

    @Transactional
    public ChartData getRandom(ChartData et) {
        return et;
    }
    @Transactional
    public boolean getRandomBatch(List<ChartData> list) {
        return true;
    }

    @Transactional
    public ChartData htxWtest(ChartData et) {
        return et;
    }
    @Transactional
    public boolean htxWtestBatch(List<ChartData> list) {
        return true;
    }

    @Transactional
    public ChartData testBackEndAction(ChartData et) {
        return et;
    }
    @Transactional
    public boolean testBackEndActionBatch(List<ChartData> list) {
        return true;
    }

    public Page<ChartData> searchDefault(ChartDataSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<ChartData> pages=baseMapper.searchDefault(context.getPages(),context,context.getSelectCond());
        return new PageImpl<ChartData>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }
    public List<ChartData> listDefault(ChartDataSearchContext context) {
        return baseMapper.listDefault(context,context.getSelectCond());
    }




}