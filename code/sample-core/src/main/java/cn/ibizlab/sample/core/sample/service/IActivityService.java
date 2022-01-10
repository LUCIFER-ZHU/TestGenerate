package cn.ibizlab.sample.core.sample.service;

import java.io.Serializable;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.HashMap;
import java.util.Collection;
import java.math.BigInteger;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.scheduling.annotation.Async;
import com.alibaba.fastjson.JSONObject;
import org.springframework.cache.annotation.CacheEvict;

import com.baomidou.mybatisplus.extension.service.IService;
import com.baomidou.dynamic.datasource.annotation.DS;
import cn.ibizlab.util.helper.CachedBeanCopier;
import cn.ibizlab.sample.core.sample.domain.Activity;
import cn.ibizlab.sample.core.sample.filter.ActivitySearchContext;

public interface IActivityService extends IService<Activity> {

    Activity get(Activity et);
    default Activity get(String key) {
        return get(new Activity().setActivityId(key));
    }
    default List<Activity> getByIds(Collection<String> ids) {
        List<Activity> entities =new ArrayList();
        ids.forEach(key -> entities.add(new Activity().setActivityId(key)));
        return getByEntities(entities);
    }
    List<Activity> getByEntities(List<Activity> entities);

    Activity getDraft(Activity et);

    boolean checkKey(Activity et);

    boolean create(Activity et);
    boolean createBatch(List<Activity> list);

    boolean update(Activity et);
    boolean updateBatch(List<Activity> list);

    boolean save(Activity et);
    boolean saveBatch(List<Activity> list);

    default boolean remove(String key) {
        return remove(new Activity().setActivityId(key));
    }
    boolean remove(Activity et);

    boolean removeBatch(Collection<String> ids);

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
    boolean resetByCustomerId(String customerId);
    boolean saveByCustomerId(String customerId,List<Activity> list);

}