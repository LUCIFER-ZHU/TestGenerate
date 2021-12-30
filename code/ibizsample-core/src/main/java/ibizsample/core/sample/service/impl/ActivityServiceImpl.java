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
import ibizsample.core.sample.domain.Activity;
import ibizsample.core.sample.filter.ActivitySearchContext;
import ibizsample.core.sample.service.IActivityService;
import ibizsample.core.sample.mapper.${item.getCodeName()}Mapper;
import ibizsample.util.helper.CachedBeanCopier;
import ibizsample.util.helper.DEFieldCacheMap;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.conditions.Wrapper;


/**
 * 实体[活动] 服务对象接口实现
 */
@Slf4j
@Service("ActivityServiceImpl")
public class ActivityServiceImpl extends ServiceImpl<Activity> implements IActivityService {

    protected IActivityService activityService = SpringContextHolder.getBean(this.getClass());

    @Autowired
    @Lazy
    protected ibizsample.core.Customer.service.ICustomerService customerService;



    public Activity get(String key) {
        Activity et = getById(key);
        Assert.notNull(et,"数据不存在,活动:"+key);
    }
    List<Activity> getByIds(Collection<String> idList);
    List<Activity> getByEntities(Collection<Activity> entities);

    Activity getDraft(Activity et);

    boolean checkKey(Activity et);

    @Override
    @Transactional
    public boolean create(Activity et) {
        fillParentData(et);
        if(!this.retBool(this.baseMapper.insert(et))) 
            return false;

        return true;
    }
    @Transactional
    public boolean createBatch(List<Activity> list) {

    }

    boolean update(Activity et);
    boolean updateBatch(List<Activity> list);

    boolean save(Activity et);
    boolean saveBatch(List<Activity> list);

    boolean remove(String key);
    boolean removeBatch(Collection<String> idList);

    Activity (Activity et);
    boolean Batch(List<Activity> list);

    Page<Activity> searchDefault(ActivitySearchContext context);
    List<Activity> listDefault(ActivitySearchContext context);

    Page<Activity> searchEmail(ActivitySearchContext context);
    List<Activity> listEmail(ActivitySearchContext context);

    Page<Activity> searchMeeting(ActivitySearchContext context);
    List<Activity> listMeeting(ActivitySearchContext context);

    Page<Activity> searchOther(ActivitySearchContext context);
    List<Activity> listOther(ActivitySearchContext context);

    Page<Activity> searchPhone(ActivitySearchContext context);
    List<Activity> listPhone(ActivitySearchContext context);

    List<Activity> selectByCustomerId(String customerId);
    boolean removeByCustomerId(String customerId);
    boolean saveByCustomerId(String customerId,List<Activity> list);


}