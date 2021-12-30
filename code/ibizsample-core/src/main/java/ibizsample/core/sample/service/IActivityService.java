package ibizsample.core.sample.service;

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
import om.baomidou.dynamic.datasource.annotation.DS;

import ibizsample.core.sample.domain.Activity;
import ibizsample.core.sample.filter.ActivitySearchContext;

public interface IActivityService extends IService<Activity> {

    Activity get(String key);
    List<Activity> getByIds(Collection<String> idList);
    List<Activity> getByEntities(Collection<Activity> entities);

    Activity getDraft(Activity et);

    boolean checkKey(Activity et);

    boolean create(Activity et);
    boolean createBatch(List<Activity> list);

    boolean update(Activity et);
    boolean updateBatch(List<Activity> list);

    boolean save(Activity et);
    boolean saveBatch(List<Activity> list);

    boolean remove(String key);
    boolean removeBatch(Collection<String> idList);

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