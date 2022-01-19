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
import doc.core.sample.domain.ViewMsgData;
import doc.core.sample.filter.ViewMsgDataSearchContext;

public interface IViewMsgDataService extends IService<ViewMsgData> {

    ViewMsgData get(ViewMsgData et);
    default ViewMsgData get(String key) {
        return get(new ViewMsgData().setViewMsgDataId(key));
    }
    default List<ViewMsgData> getByIds(Collection<String> ids) {
        List<ViewMsgData> entities =new ArrayList();
        ids.forEach(key -> entities.add(new ViewMsgData().setViewMsgDataId(key)));
        return getByEntities(entities);
    }
    List<ViewMsgData> getByEntities(List<ViewMsgData> entities);

    ViewMsgData getDraft(ViewMsgData et);

    boolean checkKey(ViewMsgData et);

    boolean create(ViewMsgData et);
    boolean createBatch(List<ViewMsgData> list);

    boolean update(ViewMsgData et);
    boolean updateBatch(List<ViewMsgData> list);

    boolean save(ViewMsgData et);
    boolean saveBatch(List<ViewMsgData> list);

    default boolean remove(String key) {
        return remove(new ViewMsgData().setViewMsgDataId(key));
    }
    boolean remove(ViewMsgData et);

    boolean removeBatch(Collection<String> ids);

    Page<ViewMsgData> searchDefault(ViewMsgDataSearchContext context);
    List<ViewMsgData> listDefault(ViewMsgDataSearchContext context);

}