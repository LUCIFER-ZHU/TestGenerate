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
import doc.core.sample.domain.ChartData;
import doc.core.sample.filter.ChartDataSearchContext;

public interface IChartDataService extends IService<ChartData> {

    ChartData get(ChartData et);
    default ChartData get(String key) {
        return get(new ChartData().setChartDataId(key));
    }
    default List<ChartData> getByIds(Collection<String> ids) {
        List<ChartData> entities =new ArrayList();
        ids.forEach(key -> entities.add(new ChartData().setChartDataId(key)));
        return getByEntities(entities);
    }
    List<ChartData> getByEntities(List<ChartData> entities);

    ChartData getDraft(ChartData et);

    boolean checkKey(ChartData et);

    boolean create(ChartData et);
    boolean createBatch(List<ChartData> list);

    boolean update(ChartData et);
    boolean updateBatch(List<ChartData> list);

    boolean save(ChartData et);
    boolean saveBatch(List<ChartData> list);

    default boolean remove(String key) {
        return remove(new ChartData().setChartDataId(key));
    }
    boolean remove(ChartData et);

    boolean removeBatch(Collection<String> ids);

    ChartData getRandom(ChartData et);
    default ChartData getRandom(String key) {
        return getRandom(new ChartData().setChartDataId(key));
    }    
    boolean getRandomBatch(List<ChartData> list);

    ChartData htxWtest(ChartData et);
    boolean htxWtestBatch(List<ChartData> list);

    ChartData testBackEndAction(ChartData et);
    boolean testBackEndActionBatch(List<ChartData> list);

    Page<ChartData> searchDefault(ChartDataSearchContext context);
    List<ChartData> listDefault(ChartDataSearchContext context);

}