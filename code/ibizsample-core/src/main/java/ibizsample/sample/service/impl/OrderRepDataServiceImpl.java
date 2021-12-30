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
import ibizsample.core.sample.domain.OrderRepData;
import ibizsample.core.sample.filter.OrderRepDataSearchContext;
import ibizsample.core.sample.service.IOrderRepDataService;
import ibizsample.core.sample.mapper.${item.getCodeName()}Mapper;
import ibizsample.util.helper.CachedBeanCopier;
import ibizsample.util.helper.DEFieldCacheMap;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.conditions.Wrapper;


/**
 * 实体[订单报表数据] 服务对象接口实现
 */
@Slf4j
@Service("OrderRepDataServiceImpl")
public class OrderRepDataServiceImpl extends ServiceImpl<OrderRepData> implements IOrderRepDataService {

    protected IOrderRepDataService orderRepDataService = SpringContextHolder.getBean(this.getClass());



    public OrderRepData get(String key) {
        OrderRepData et = getById(key);
        Assert.notNull(et,"数据不存在,订单报表数据:"+key);
    }
    List<OrderRepData> getByIds(Collection<String> idList);
    List<OrderRepData> getByEntities(Collection<OrderRepData> entities);

    OrderRepData getDraft(OrderRepData et);

    boolean checkKey(OrderRepData et);

    @Override
    @Transactional
    public boolean create(OrderRepData et) {
        if(!this.retBool(this.baseMapper.insert(et))) 
            return false;
    }
    @Transactional
    public boolean createBatch(List<OrderRepData> list) {

    }

    boolean update(OrderRepData et);
    boolean updateBatch(List<OrderRepData> list);

    boolean save(OrderRepData et);
    boolean saveBatch(List<OrderRepData> list);

    boolean remove(String key);
    boolean removeBatch(Collection<String> idList);

    OrderRepData (OrderRepData et);
    boolean Batch(List<OrderRepData> list);

    Page<OrderRepData> searchDefault(OrderRepDataSearchContext context);
    List<OrderRepData> listDefault(OrderRepDataSearchContext context);

    Page<OrderRepData> searchGroup(OrderRepDataSearchContext context);
    List<OrderRepData> listGroup(OrderRepDataSearchContext context);


}