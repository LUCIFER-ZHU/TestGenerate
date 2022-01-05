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
import cn.ibizlab.sample.core.sample.domain.Order;
import cn.ibizlab.sample.core.sample.filter.OrderSearchContext;
import cn.ibizlab.sample.core.sample.service.IOrderService;
import cn.ibizlab.sample.core.sample.mapper.OrderMapper;
import cn.ibizlab.util.helper.CachedBeanCopier;
import cn.ibizlab.util.helper.DEFieldCacheMap;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.core.conditions.Wrapper;


/**
 * 实体[订单] 服务对象接口实现
 */
@Slf4j
@Service("OrderServiceImpl")
public class OrderServiceImpl extends ServiceImpl<OrderMapper,Order> implements IOrderService {

    protected IOrderService orderService = SpringContextHolder.getBean(this.getClass());

    @Autowired
    @Lazy
    protected cn.ibizlab.sample.core.sample.service.ICustomerService customerService;
   
    @Autowired
    @Lazy
    protected cn.ibizlab.sample.core.sample.service.IOrderDetailService orderDetailService;
   

    protected int batchSize = 500;

    public Order get(Order et) {
        Order rt = this.baseMapper.selectEntity(et);
        Assert.notNull(rt,"数据不存在,订单:"+et.getOrderId());
        CachedBeanCopier.copy(rt, et);
        //设置 [订单明细]
        et.setOrderDetails(orderDetailService.selectByOrderId(et.getOrderId()));
        return et;
    }
    
    public List<Order> getByEntities(List<Order> entities) {
        return this.baseMapper.selectEntities(entities);
    }

    public void fillParentData(Order et) {
        
    }

    public Order getDraft(Order et) {
        fillParentData(et);
        return et;
    }

    public boolean checkKey(Order et) {
        return this.count(Wrappers.lambdaQuery(et))>0;
    }

    @Override
    @Transactional
    public boolean create(Order et) {
        fillParentData(et);
        if(!this.retBool(this.baseMapper.insert(et))) 
            return false;
        orderDetailService.saveByOrderId(et.getOrderId(),et.getOrderDetails());
        get(et);
        return true;
    }
    @Transactional
    public boolean createBatch(List<Order> list) {
        list.forEach(et->fillParentData(et));
        this.saveBatch(list, batchSize);        
        return true;
    }

    @Transactional
    public boolean update(Order et) {
        fillParentData(et);
        if(!update(et, (Wrapper) et.getUpdateWrapper(true)
                .eq("orderid", et.getOrderId())
            )) {
            return false;
        }
        orderDetailService.saveByOrderId(et.getOrderId(),et.getOrderDetails());
        get(et);
        return true;
    }

    @Transactional
    public boolean updateBatch(List<Order> list) {
        list.forEach(et->fillParentData(et));
        updateBatchById(list, batchSize);
        return true;
    }

    @Transactional
    public boolean save(Order et) {
        if(checkKey(et))
            return orderService.update(et);
        else
            return orderService.create(et);
    }

    @Transactional
    public boolean saveBatch(List<Order> list) {
        List<Order> rt=this.getByEntities(list);
        Set<Serializable> keys=new HashSet<>();
        rt.forEach(et->{
            Serializable key = et.getOrderId();
            if(!ObjectUtils.isEmpty(key))
                keys.add(key);
        });
        List<Order> _create=new ArrayList<>();
        List<Order> _update=new ArrayList<>();
        list.forEach(et-> {
            Serializable key = et.getOrderId();
            if(keys.contains(key))
                _update.add(et);
            else
                _create.add(et);
        });
        List rtList=new ArrayList<>();
        if(_update.size()>0 && (!orderService.updateBatch(_update)))
            return false;
        if(_create.size()>0 && (!orderService.createBatch(_create)))
            return false;
        return true;
    }

    @Transactional
    public boolean remove(Order et) {
        String key = et.getOrderId();

        if(!remove(new QueryWrapper<Order>()
                .eq("orderid", et.getOrderId())
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

    public Page<Order> searchDefault(OrderSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Order> pages=baseMapper.searchDefault(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Order>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }
    public List<Order> listDefault(OrderSearchContext context) {
        return baseMapper.listDefault(context,context.getSelectCond());
    }

    public Page<Order> searchGroup(OrderSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Order> pages=baseMapper.searchGroup(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Order>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }
    public List<Order> listGroup(OrderSearchContext context) {
        return baseMapper.listGroup(context,context.getSelectCond());
    }

    public Page<Order> searchPaying(OrderSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Order> pages=baseMapper.searchPaying(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Order>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }
    public List<Order> listPaying(OrderSearchContext context) {
        return baseMapper.listPaying(context,context.getSelectCond());
    }

    public Page<Order> searchProcessing(OrderSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Order> pages=baseMapper.searchProcessing(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Order>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }
    public List<Order> listProcessing(OrderSearchContext context) {
        return baseMapper.listProcessing(context,context.getSelectCond());
    }

    public List<Order> selectByCustomerId(String customerId) {
        return baseMapper.selectByCustomerId(customerId);
    }

    public boolean removeByCustomerId(String customerId) {
        return this.remove(new QueryWrapper<Order>().eq("customerid",customerId));
    }

    public boolean resetByCustomerId(String customerId) {
        return this.update(new UpdateWrapper<Order>().set("customerid",null).eq("customerid",customerId));
    }

    public boolean saveByCustomerId(String customerId,List<Order> list) {
        if(list==null)
            return true;
        Set<String> delIds=new HashSet<String>();
        List<Order> _update=new ArrayList<Order>();
        List<Order> _create=new ArrayList<Order>();
        for(Order before:selectByCustomerId(customerId)){
            delIds.add(before.getOrderId());
        }
        for(Order sub:list) {
            sub.setCustomerId(customerId);
            if(ObjectUtils.isEmpty(sub.getOrderId()))
                sub.setOrderId((String)sub.getDefaultKey(true));
            if(delIds.contains(sub.getOrderId())) {
                delIds.remove(sub.getOrderId());
                _update.add(sub);
            }
            else
                _create.add(sub);
        }
        if(_update.size()>0 && (!orderService.updateBatch(_update)))
            return false;
        if(_create.size()>0 && (!orderService.createBatch(_create)))
            return false;
        if(delIds.size()>0 && (!orderService.removeBatch(delIds)))
            return false;
        return true;
    }


}