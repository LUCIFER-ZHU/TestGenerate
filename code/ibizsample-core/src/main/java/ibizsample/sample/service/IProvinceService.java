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

import ibizsample.sample.domain.Province;
import ibizsample.sample.filter.ProvinceSearchContext;

public interface IProvinceService extends IService<Province> {

    Province get(String key);
    List<Province> getByIds(Collection<String> idList);
    List<Province> getByEntities(Collection<Province> entities);

    Province getDraft(Province et);

    boolean checkKey(Province et);

    boolean create(Province et);
    boolean createBatch(List<Province> list);

    boolean update(Province et);
    boolean updateBatch(List<Province> list);

    boolean save(Province et);
    boolean saveBatch(List<Province> list);

    boolean remove(String key);
    boolean removeBatch(Collection<String> idList);

    Page<Province> searchConditions(ProvinceSearchContext context);
    List<Province> listConditions(ProvinceSearchContext context);

    Page<Province> searchDefault(ProvinceSearchContext context);
    List<Province> listDefault(ProvinceSearchContext context);

}