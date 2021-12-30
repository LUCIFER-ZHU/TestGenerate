package ibizsample.sample.service;

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

import ibizsample.sample.domain.CalendarData;
import ibizsample.sample.filter.CalendarDataSearchContext;

public interface ICalendarDataService extends IService<CalendarData> {

    CalendarData get(String key);
    List<CalendarData> getByIds(Collection<String> idList);
    List<CalendarData> getByEntities(Collection<CalendarData> entities);

    CalendarData getDraft(CalendarData et);

    boolean checkKey(CalendarData et);

    boolean create(CalendarData et);
    boolean createBatch(List<CalendarData> list);

    boolean update(CalendarData et);
    boolean updateBatch(List<CalendarData> list);

    boolean save(CalendarData et);
    boolean saveBatch(List<CalendarData> list);

    boolean remove(String key);
    boolean removeBatch(Collection<String> idList);

    Page<CalendarData> searchDefault(CalendarDataSearchContext context);
    List<CalendarData> listDefault(CalendarDataSearchContext context);

}