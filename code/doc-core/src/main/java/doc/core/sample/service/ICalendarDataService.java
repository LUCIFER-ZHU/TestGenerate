package doc.core.sample.service;

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
import doc.core.sample.domain.CalendarData;
import doc.core.sample.filter.CalendarDataSearchContext;

public interface ICalendarDataService extends IService<CalendarData> {

    CalendarData get(CalendarData et);
    default CalendarData get(String key) {
        return get(new CalendarData().setCalendarDataId(key));
    }
    default List<CalendarData> getByIds(Collection<String> ids) {
        List<CalendarData> entities =new ArrayList();
        ids.forEach(key -> entities.add(new CalendarData().setCalendarDataId(key)));
        return getByEntities(entities);
    }
    List<CalendarData> getByEntities(List<CalendarData> entities);

    CalendarData getDraft(CalendarData et);

    boolean checkKey(CalendarData et);

    boolean create(CalendarData et);
    boolean createBatch(List<CalendarData> list);

    boolean update(CalendarData et);
    boolean updateBatch(List<CalendarData> list);

    boolean save(CalendarData et);
    boolean saveBatch(List<CalendarData> list);

    default boolean remove(String key) {
        return remove(new CalendarData().setCalendarDataId(key));
    }
    boolean remove(CalendarData et);

    boolean removeBatch(Collection<String> ids);

    Page<CalendarData> searchDefault(CalendarDataSearchContext context);
    List<CalendarData> listDefault(CalendarDataSearchContext context);

}