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
import ibizsample.core.sample.domain.Order;
import ibizsample.core.sample.filter.OrderSearchContext;
import ibizsample.core.sample.service.IOrderService;
import ibizsample.core.sample.mapper.${item.getCodeName()}Mapper;
import ibizsample.util.helper.CachedBeanCopier;
import ibizsample.util.helper.DEFieldCacheMap;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.conditions.Wrapper;


/**
 * 实体[订单] 服务对象接口实现
 */
@Slf4j
@Service("OrderServiceImpl")
public class OrderServiceImpl extends ServiceImpl<Order> implements IOrderService {

    protected IOrderService orderService = SpringContextHolder.getBean(this.getClass());

    @Autowired
    @Lazy
    protected ibizsample.core.Customer.service.ICustomerService customerService;

    @Autowired
    @Lazy
    protected ibizsample.core.OrderRepData.service.IOrderRepDataService orderRepDataService;

    @Autowired
    @Lazy
    protected ibizsample.core.OrderDetail.service.IOrderDetailService orderDetailService;



    public Order get(String key) {
        Order et = getById(key);
        Assert.notNull(et,"数据不存在,订单:"+key);
        //设置 [订单明细]
        this.setOrderDetails(orderDetailService.selectByOrderId(key));
    }
    List<Order> getByIds(Collection<String> idList);
    List<Order> getByEntities(Collection<Order> entities);

    Order getDraft(Order et);

    boolean checkKey(Order et);

    @Override
    @Transactional
    public boolean create(Order et) {
        fillParentData(et);
        if(!this.retBool(this.baseMapper.insert(et))) 
            return false;
        orderDetailService.saveByOrderId(key,et.orderDetails);

        return true;
    }
    @Transactional
    public boolean createBatch(List<Order> list) {

    }

    boolean update(Order et);
    boolean updateBatch(List<Order> list);

    boolean save(Order et);
    boolean saveBatch(List<Order> list);

    boolean remove(String key);
    boolean removeBatch(Collection<String> idList);

    Order (Order et);
    boolean Batch(List<Order> list);

    Page<Order> searchDefault(OrderSearchContext context);
    List<Order> listDefault(OrderSearchContext context);

    Page<Order> searchGroup(OrderSearchContext context);
    List<Order> listGroup(OrderSearchContext context);

    Page<Order> searchPaying(OrderSearchContext context);
    List<Order> listPaying(OrderSearchContext context);

    Page<Order> searchProcessing(OrderSearchContext context);
    List<Order> listProcessing(OrderSearchContext context);

    List<Order> selectByCustomerId(String customerId);
    boolean removeByCustomerId(String customerId);
    boolean saveByCustomerId(String customerId,List<Order> list);

    List<Order> selectBy( );
    boolean removeBy( );
    boolean saveBy( ,List<Order> list);


}