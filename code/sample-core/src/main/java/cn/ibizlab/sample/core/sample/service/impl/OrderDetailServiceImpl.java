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
import cn.ibizlab.sample.core.sample.domain.OrderDetail;
import cn.ibizlab.sample.core.sample.filter.OrderDetailSearchContext;
import cn.ibizlab.sample.core.sample.service.IOrderDetailService;
import cn.ibizlab.sample.core.sample.mapper.OrderDetailMapper;
import cn.ibizlab.util.helper.CachedBeanCopier;
import cn.ibizlab.util.helper.DEFieldCacheMap;
import cn.ibizlab.util.security.AuthenticationUser;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import cn.ibizlab.sample.core.sample.domain.Order;
import cn.ibizlab.sample.core.sample.service.IOrderService;   
import cn.ibizlab.sample.core.sample.domain.Product;
import cn.ibizlab.sample.core.sample.service.IProductService;   


/**
 * 实体[订单明细] 服务对象接口实现
 */
@Slf4j
@Service("OrderDetailService")
public class OrderDetailServiceImpl extends ServiceImpl<OrderDetailMapper,OrderDetail> implements IOrderDetailService {

    protected IOrderDetailService getProxyService() {
        return SpringContextHolder.getBean(this.getClass());
    }

    @Autowired
    @Lazy
    protected IOrderService orderService;
   
    @Autowired
    @Lazy
    protected IProductService productService;
   

    protected int batchSize = 500;

    public OrderDetail get(OrderDetail et) {
        OrderDetail rt = this.baseMapper.selectEntity(et);
        Assert.notNull(rt,"数据不存在,订单明细:"+et.getOrderDetailId());
        BeanUtils.copyProperties(rt, et);
        return et;
    }
    
    public List<OrderDetail> getByEntities(List<OrderDetail> entities) {
        return this.baseMapper.selectEntities(entities);
    }

    public void fillParentData(OrderDetail et) {
        if(!ObjectUtils.isEmpty(et.getProductId())) {
            Product product = et.getProduct();
            if(!ObjectUtils.isEmpty(product)) {
                et.setProductName(product.getProductName());   
            }
        }    
    }

    public OrderDetail getDraft(OrderDetail et) {
        fillParentData(et);
        return et;
    }

    public boolean checkKey(OrderDetail et) {
        return this.count(Wrappers.lambdaQuery(et))>0;
    }

    @Override
    @Transactional
    public boolean create(OrderDetail et) {
        fillParentData(et);
        if(!this.retBool(this.baseMapper.insert(et))) 
            return false;
        get(et);
        return true;
    }
    @Transactional
    public boolean createBatch(List<OrderDetail> list) {
        list.forEach(et->fillParentData(et));
        this.saveBatch(list, batchSize);        
        return true;
    }

    @Transactional
    public boolean update(OrderDetail et) {
        fillParentData(et);
        if(!update(et, (Wrapper) et.getUpdateWrapper(true)
                .eq("orderdetailid", et.getOrderDetailId())
            )) {
            return false;
        }
        get(et);
        return true;
    }

    @Transactional
    public boolean updateBatch(List<OrderDetail> list) {
        list.forEach(et->fillParentData(et));
        updateBatchById(list, batchSize);
        return true;
    }

    @Transactional
    public boolean save(OrderDetail et) {
        if(checkKey(et))
            return getProxyService().update(et);
        else
            return getProxyService().create(et);
    }

    @Transactional
    public boolean saveBatch(List<OrderDetail> list) {
        List<OrderDetail> rt=this.getByEntities(list);
        Set<Serializable> keys=new HashSet<>();
        rt.forEach(et->{
            Serializable key = et.getOrderDetailId();
            if(!ObjectUtils.isEmpty(key))
                keys.add(key);
        });
        List<OrderDetail> _create=new ArrayList<>();
        List<OrderDetail> _update=new ArrayList<>();
        list.forEach(et-> {
            Serializable key = et.getOrderDetailId();
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
    public boolean remove(OrderDetail et) {
        String key = et.getOrderDetailId();

        if(!remove(new QueryWrapper<OrderDetail>()
                .eq("orderdetailid", et.getOrderDetailId())
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

    public Page<OrderDetail> searchDefault(OrderDetailSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<OrderDetail> pages=baseMapper.searchDefault(context.getPages(),context,context.getSelectCond());
        return new PageImpl<OrderDetail>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }
    public List<OrderDetail> listDefault(OrderDetailSearchContext context) {
        return baseMapper.listDefault(context,context.getSelectCond());
    }

    public List<OrderDetail> selectByOrderId(String orderId) {
        return baseMapper.selectByOrderId(orderId);
    }

    public boolean removeByOrderId(String orderId) {
        return this.remove(new QueryWrapper<OrderDetail>().eq("orderid",orderId));
    }

    public boolean resetByOrderId(String orderId) {
        return this.update(new UpdateWrapper<OrderDetail>().set("orderid",null).eq("orderid",orderId));
    }

    public boolean saveByOrderId(Order order,List<OrderDetail> list) {
        if(list==null)
            return true;
        Set<String> delIds=new HashSet<String>();
        List<OrderDetail> _update=new ArrayList<OrderDetail>();
        List<OrderDetail> _create=new ArrayList<OrderDetail>();
        for(OrderDetail before:selectByOrderId(order.getOrderId())){
            delIds.add(before.getOrderDetailId());
        }
        for(OrderDetail sub:list) {
            sub.setOrderId(order.getOrderId());
            sub.setOrder(order);
            if(ObjectUtils.isEmpty(sub.getOrderDetailId()))
                sub.setOrderDetailId((String)sub.getDefaultKey(true));
            if(delIds.contains(sub.getOrderDetailId())) {
                delIds.remove(sub.getOrderDetailId());
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

    public List<OrderDetail> selectByProductId(String productId) {
        return baseMapper.selectByProductId(productId);
    }

    public boolean removeByProductId(String productId) {
        return this.remove(new QueryWrapper<OrderDetail>().eq("productid",productId));
    }

    public boolean resetByProductId(String productId) {
        return this.update(new UpdateWrapper<OrderDetail>().set("productid",null).eq("productid",productId));
    }

    public boolean saveByProductId(Product product,List<OrderDetail> list) {
        if(list==null)
            return true;
        Set<String> delIds=new HashSet<String>();
        List<OrderDetail> _update=new ArrayList<OrderDetail>();
        List<OrderDetail> _create=new ArrayList<OrderDetail>();
        for(OrderDetail before:selectByProductId(product.getProductId())){
            delIds.add(before.getOrderDetailId());
        }
        for(OrderDetail sub:list) {
            sub.setProductId(product.getProductId());
            sub.setProduct(product);
            if(ObjectUtils.isEmpty(sub.getOrderDetailId()))
                sub.setOrderDetailId((String)sub.getDefaultKey(true));
            if(delIds.contains(sub.getOrderDetailId())) {
                delIds.remove(sub.getOrderDetailId());
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