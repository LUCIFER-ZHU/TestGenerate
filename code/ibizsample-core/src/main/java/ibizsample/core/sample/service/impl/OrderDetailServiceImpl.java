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
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cglib.beans.BeanCopier;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.util.ObjectUtils;
import org.springframework.util.StringUtils;
import org.springframework.beans.factory.annotation.Value;
import ibizsample.util.errors.BadRequestAlertException;
<#system.enableGlobalTransaction>
import io.seata.spring.annotation.GlobalTransactional;
</system.enableGlobalTransaction>
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Lazy;
import ibizsample.core.sample.domain.OrderDetail;
import ibizsample.core.sample.filter.OrderDetailSearchContext;
import ibizsample.core.sample.service.IOrderDetailService;
import ibizsample.core.sample.mapper.${item.getCodeName()}Mapper;
import ibizsample.util.helper.CachedBeanCopier;
import ibizsample.util.helper.DEFieldCacheMap;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.conditions.Wrapper;


/**
 * 实体[订单明细] 服务对象接口实现
 */
@Slf4j
@Service("OrderDetailServiceImpl")
public class OrderDetailServiceImpl extends ServiceImpl<OrderDetail> implements IOrderDetailService {

    protected IOrderDetailService orderDetailService = SpringContextHolder.getBean(this.getClass());

    @Autowired
    @Lazy
    protected ibizsample.core.Order.service.IOrderService orderService;

    @Autowired
    @Lazy
    protected ibizsample.core.Product.service.IProductService productService;



    public OrderDetail get(String key) {
        OrderDetail et = getById(key);
        Assert.notNull(et,"数据不存在,订单明细:"+key);
    }
    List<OrderDetail> getByIds(Collection<String> idList);
    List<OrderDetail> getByEntities(Collection<OrderDetail> entities);

    OrderDetail getDraft(OrderDetail et);

    boolean checkKey(OrderDetail et);

    @Override
    @Transactional
    public boolean create(OrderDetail et) {
        fillParentData(et);
        if(!this.retBool(this.baseMapper.insert(et))) 
            return false;

        return true;
    }
    @Transactional
    public boolean createBatch(List<OrderDetail> list) {

    }

    boolean update(OrderDetail et);
    boolean updateBatch(List<OrderDetail> list);

    boolean save(OrderDetail et);
    boolean saveBatch(List<OrderDetail> list);

    boolean remove(String key);
    boolean removeBatch(Collection<String> idList);

    OrderDetail (OrderDetail et);
    boolean Batch(List<OrderDetail> list);

    Page<OrderDetail> searchDefault(OrderDetailSearchContext context);
    List<OrderDetail> listDefault(OrderDetailSearchContext context);

    List<OrderDetail> selectByOrderId(String orderId);
    boolean removeByOrderId(String orderId);
    boolean saveByOrderId(String orderId,List<OrderDetail> list);

    List<OrderDetail> selectByProductId(String productId);
    boolean removeByProductId(String productId);
    boolean saveByProductId(String productId,List<OrderDetail> list);


}