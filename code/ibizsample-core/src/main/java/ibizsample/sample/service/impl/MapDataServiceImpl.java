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
import ibizsample.core.sample.domain.MapData;
import ibizsample.core.sample.filter.MapDataSearchContext;
import ibizsample.core.sample.service.IMapDataService;
import ibizsample.core.sample.mapper.${item.getCodeName()}Mapper;
import ibizsample.util.helper.CachedBeanCopier;
import ibizsample.util.helper.DEFieldCacheMap;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.conditions.Wrapper;


/**
 * 实体[地图示例数据] 服务对象接口实现
 */
@Slf4j
@Service("MapDataServiceImpl")
public class MapDataServiceImpl extends ServiceImpl<MapData> implements IMapDataService {

    protected IMapDataService mapDataService = SpringContextHolder.getBean(this.getClass());



    public MapData get(String key) {
        MapData et = getById(key);
        Assert.notNull(et,"数据不存在,地图示例数据:"+key);
    }
    List<MapData> getByIds(Collection<String> idList);
    List<MapData> getByEntities(Collection<MapData> entities);

    MapData getDraft(MapData et);

    boolean checkKey(MapData et);

    @Override
    @Transactional
    public boolean create(MapData et) {
        if(!this.retBool(this.baseMapper.insert(et))) 
            return false;
    }
    @Transactional
    public boolean createBatch(List<MapData> list) {

    }

    boolean update(MapData et);
    boolean updateBatch(List<MapData> list);

    boolean save(MapData et);
    boolean saveBatch(List<MapData> list);

    boolean remove(String key);
    boolean removeBatch(Collection<String> idList);

    MapData (MapData et);
    boolean Batch(List<MapData> list);

    Page<MapData> searchDefault(MapDataSearchContext context);
    List<MapData> listDefault(MapDataSearchContext context);


}