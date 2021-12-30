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

import ibizsample.core.sample.domain.ChartData;
import ibizsample.core.sample.filter.ChartDataSearchContext;

public interface IChartDataService extends IService<ChartData> {

    ChartData get(String key);
    List<ChartData> getByIds(Collection<String> idList);
    List<ChartData> getByEntities(Collection<ChartData> entities);

    ChartData getDraft(ChartData et);

    boolean checkKey(ChartData et);

    boolean create(ChartData et);
    boolean createBatch(List<ChartData> list);

    boolean update(ChartData et);
    boolean updateBatch(List<ChartData> list);

    boolean save(ChartData et);
    boolean saveBatch(List<ChartData> list);

    boolean remove(String key);
    boolean removeBatch(Collection<String> idList);

    ChartData getRandom(ChartData et);
    boolean getRandomBatch(List<ChartData> list);

    ChartData testBackEndAction(ChartData et);
    boolean testBackEndActionBatch(List<ChartData> list);

    Page<ChartData> searchDefault(ChartDataSearchContext context);
    List<ChartData> listDefault(ChartDataSearchContext context);

}