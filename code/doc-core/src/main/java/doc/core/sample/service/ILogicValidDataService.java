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
import doc.core.sample.domain.LogicValidData;
import doc.core.sample.filter.LogicValidDataSearchContext;

public interface ILogicValidDataService extends IService<LogicValidData> {

    LogicValidData get(LogicValidData et);
    default LogicValidData get(String key) {
        return get(new LogicValidData().setLogicValidDataId(key));
    }
    default List<LogicValidData> getByIds(Collection<String> ids) {
        List<LogicValidData> entities =new ArrayList();
        ids.forEach(key -> entities.add(new LogicValidData().setLogicValidDataId(key)));
        return getByEntities(entities);
    }
    List<LogicValidData> getByEntities(List<LogicValidData> entities);

    LogicValidData getDraft(LogicValidData et);

    boolean checkKey(LogicValidData et);

    boolean create(LogicValidData et);
    boolean createBatch(List<LogicValidData> list);

    boolean update(LogicValidData et);
    boolean updateBatch(List<LogicValidData> list);

    boolean save(LogicValidData et);
    boolean saveBatch(List<LogicValidData> list);

    default boolean remove(String key) {
        return remove(new LogicValidData().setLogicValidDataId(key));
    }
    boolean remove(LogicValidData et);

    boolean removeBatch(Collection<String> ids);

    Page<LogicValidData> searchDefault(LogicValidDataSearchContext context);
    List<LogicValidData> listDefault(LogicValidDataSearchContext context);

}