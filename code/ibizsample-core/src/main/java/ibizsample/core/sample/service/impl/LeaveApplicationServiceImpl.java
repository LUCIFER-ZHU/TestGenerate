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
import ibizsample.core.sample.domain.LeaveApplication;
import ibizsample.core.sample.filter.LeaveApplicationSearchContext;
import ibizsample.core.sample.service.ILeaveApplicationService;
import ibizsample.core.sample.mapper.${item.getCodeName()}Mapper;
import ibizsample.util.helper.CachedBeanCopier;
import ibizsample.util.helper.DEFieldCacheMap;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.conditions.Wrapper;


/**
 * 实体[请假申请] 服务对象接口实现
 */
@Slf4j
@Service("LeaveApplicationServiceImpl")
public class LeaveApplicationServiceImpl extends ServiceImpl<LeaveApplication> implements ILeaveApplicationService {

    protected ILeaveApplicationService leaveApplicationService = SpringContextHolder.getBean(this.getClass());

    @Autowired
    @Lazy
    protected ibizsample.core.Customer.service.ICustomerService customerService;



    public LeaveApplication get(String key) {
        LeaveApplication et = getById(key);
        Assert.notNull(et,"数据不存在,请假申请:"+key);
    }
    List<LeaveApplication> getByIds(Collection<String> idList);
    List<LeaveApplication> getByEntities(Collection<LeaveApplication> entities);

    LeaveApplication getDraft(LeaveApplication et);

    boolean checkKey(LeaveApplication et);

    @Override
    @Transactional
    public boolean create(LeaveApplication et) {
        fillParentData(et);
        if(!this.retBool(this.baseMapper.insert(et))) 
            return false;

        return true;
    }
    @Transactional
    public boolean createBatch(List<LeaveApplication> list) {

    }

    boolean update(LeaveApplication et);
    boolean updateBatch(List<LeaveApplication> list);

    boolean save(LeaveApplication et);
    boolean saveBatch(List<LeaveApplication> list);

    boolean remove(String key);
    boolean removeBatch(Collection<String> idList);

    LeaveApplication (LeaveApplication et);
    boolean Batch(List<LeaveApplication> list);

    Page<LeaveApplication> searchDefault(LeaveApplicationSearchContext context);
    List<LeaveApplication> listDefault(LeaveApplicationSearchContext context);

    List<LeaveApplication> selectByCustomerId(String customerId);
    boolean removeByCustomerId(String customerId);
    boolean saveByCustomerId(String customerId,List<LeaveApplication> list);


}