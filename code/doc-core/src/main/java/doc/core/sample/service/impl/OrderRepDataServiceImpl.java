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
import doc.core.sample.domain.OrderRepData;
import doc.core.sample.filter.OrderRepDataSearchContext;
import doc.core.sample.service.IOrderRepDataService;
import doc.core.sample.mapper.OrderRepDataMapper;
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
 * 实体[订单报表数据] 服务对象接口实现
 */
@Slf4j
@Service("OrderRepDataService")
public class OrderRepDataServiceImpl extends ServiceImpl<OrderRepDataMapper,OrderRepData> implements IOrderRepDataService {

    protected IOrderRepDataService getProxyService() {
        return SpringContextHolder.getBean(this.getClass());
    }


    protected int batchSize = 500;

    public OrderRepData get(OrderRepData et) {
        OrderRepData rt = this.baseMapper.selectEntity(et);
        Assert.notNull(rt,"数据不存在,订单报表数据:"+et.getOrderRepDataId());
        BeanUtils.copyProperties(rt, et);
        return et;
    }
    
    public List<OrderRepData> getByEntities(List<OrderRepData> entities) {
        return this.baseMapper.selectEntities(entities);
    }


    public OrderRepData getDraft(OrderRepData et) {
        return et;
    }

    public boolean checkKey(OrderRepData et) {
        return this.count(Wrappers.lambdaQuery(et))>0;
    }

    @Override
    @Transactional
    public boolean create(OrderRepData et) {
        if(!this.retBool(this.baseMapper.insert(et))) 
            return false;
        get(et);
        return true;
    }
    @Transactional
    public boolean createBatch(List<OrderRepData> list) {
        this.saveBatch(list, batchSize);        
        return true;
    }

    @Transactional
    public boolean update(OrderRepData et) {
        if(!update(et, (Wrapper) et.getUpdateWrapper(true)
                .eq("orderrepdataid", et.getOrderRepDataId())
            )) {
            return false;
        }
        get(et);
        return true;
    }

    @Transactional
    public boolean updateBatch(List<OrderRepData> list) {
        updateBatchById(list, batchSize);
        return true;
    }

    @Transactional
    public boolean save(OrderRepData et) {
        if(checkKey(et))
            return getProxyService().update(et);
        else
            return getProxyService().create(et);
    }

    @Transactional
    public boolean saveBatch(List<OrderRepData> list) {
        List<OrderRepData> rt=this.getByEntities(list);
        Set<Serializable> keys=new HashSet<>();
        rt.forEach(et->{
            Serializable key = et.getOrderRepDataId();
            if(!ObjectUtils.isEmpty(key))
                keys.add(key);
        });
        List<OrderRepData> _create=new ArrayList<>();
        List<OrderRepData> _update=new ArrayList<>();
        list.forEach(et-> {
            Serializable key = et.getOrderRepDataId();
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
    public boolean remove(OrderRepData et) {
        String key = et.getOrderRepDataId();

        if(!remove(new QueryWrapper<OrderRepData>()
                .eq("orderrepdataid", et.getOrderRepDataId())
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

    public Page<OrderRepData> searchDefault(OrderRepDataSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<OrderRepData> pages=baseMapper.searchDefault(context.getPages(),context,context.getSelectCond());
        return new PageImpl<OrderRepData>(com.alibaba.fastjson.JSON.parseArray(com.alibaba.fastjson.JSON.toJSONString(pages.getRecords()),OrderRepData.class), context.getPageable(), pages.getTotal());
    }
    public List<OrderRepData> listDefault(OrderRepDataSearchContext context) {
        return com.alibaba.fastjson.JSON.parseArray(com.alibaba.fastjson.JSON.toJSONString(baseMapper.listDefault(context,context.getSelectCond())),OrderRepData.class);
    }

    public Page<OrderRepData> searchGroup(OrderRepDataSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Map> pages=baseMapper.searchGroup(context.getPages(),context,context.getSelectCond());
        return new PageImpl<OrderRepData>(com.alibaba.fastjson.JSON.parseArray(com.alibaba.fastjson.JSON.toJSONString(pages.getRecords()),OrderRepData.class), context.getPageable(), pages.getTotal());
    }
    public List<OrderRepData> listGroup(OrderRepDataSearchContext context) {
        return com.alibaba.fastjson.JSON.parseArray(com.alibaba.fastjson.JSON.toJSONString(baseMapper.listGroup(context,context.getSelectCond())),OrderRepData.class);
    }




}