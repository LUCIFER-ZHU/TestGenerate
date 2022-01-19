package doc.core.sample.service.impl;

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

import cn.ibizlab.util.security.SpringContextHolder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cglib.beans.BeanCopier;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.util.ObjectUtils;
import org.springframework.util.StringUtils;
import org.springframework.util.Assert;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Value;
import cn.ibizlab.util.errors.BadRequestAlertException;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Lazy;
import doc.core.sample.domain.MapData;
import doc.core.sample.filter.MapDataSearchContext;
import doc.core.sample.service.IMapDataService;
import doc.core.sample.mapper.MapDataMapper;
import cn.ibizlab.util.helper.CachedBeanCopier;
import cn.ibizlab.util.helper.DEFieldCacheMap;
import cn.ibizlab.util.security.AuthenticationUser;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.core.conditions.Wrapper;


/**
 * 实体[地图示例数据] 服务对象接口实现
 */
@Slf4j
@Service("MapDataService")
public class MapDataServiceImpl extends ServiceImpl<MapDataMapper,MapData> implements IMapDataService {

    protected IMapDataService getProxyService() {
        return SpringContextHolder.getBean(this.getClass());
    }


    protected int batchSize = 500;

    public MapData get(MapData et) {
        MapData rt = this.baseMapper.selectEntity(et);
        Assert.notNull(rt,"数据不存在,地图示例数据:"+et.getMapDataId());
        BeanUtils.copyProperties(rt, et);
        return et;
    }
    
    public List<MapData> getByEntities(List<MapData> entities) {
        return this.baseMapper.selectEntities(entities);
    }


    public MapData getDraft(MapData et) {
        return et;
    }

    public boolean checkKey(MapData et) {
        return this.count(Wrappers.lambdaQuery(et))>0;
    }

    @Override
    @Transactional
    public boolean create(MapData et) {
        if(!this.retBool(this.baseMapper.insert(et))) 
            return false;
        get(et);
        return true;
    }
    @Transactional
    public boolean createBatch(List<MapData> list) {
        this.saveBatch(list, batchSize);        
        return true;
    }

    @Transactional
    public boolean update(MapData et) {
        if(!update(et, (Wrapper) et.getUpdateWrapper(true)
                .eq("mapdataid", et.getMapDataId())
            )) {
            return false;
        }
        get(et);
        return true;
    }

    @Transactional
    public boolean updateBatch(List<MapData> list) {
        updateBatchById(list, batchSize);
        return true;
    }

    @Transactional
    public boolean save(MapData et) {
        if(checkKey(et))
            return getProxyService().update(et);
        else
            return getProxyService().create(et);
    }

    @Transactional
    public boolean saveBatch(List<MapData> list) {
        List<MapData> rt=this.getByEntities(list);
        Set<Serializable> keys=new HashSet<>();
        rt.forEach(et->{
            Serializable key = et.getMapDataId();
            if(!ObjectUtils.isEmpty(key))
                keys.add(key);
        });
        List<MapData> _create=new ArrayList<>();
        List<MapData> _update=new ArrayList<>();
        list.forEach(et-> {
            Serializable key = et.getMapDataId();
            if(keys.contains(key))
                _update.add(et);
            else
                _create.add(et);
        });
        List rtList=new ArrayList<>();
        if(_update.size()>0 && (!getProxyService().updateBatch(_update)))
            return false;
        if(_create.size()>0 && (!getProxyService().createBatch(_create)))
            return false;
        return true;
    }

    @Transactional
    public boolean remove(MapData et) {
        String key = et.getMapDataId();

        if(!remove(new QueryWrapper<MapData>()
                .eq("mapdataid", et.getMapDataId())
            )) {
            return false;
        }
        return true ;
    }
    
    @Transactional
    public boolean removeBatch(Collection<String> ids) {
        if(!removeByIds(ids))
            return false;
        return true;
    }

    public Page<MapData> searchDefault(MapDataSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<MapData> pages=baseMapper.searchDefault(context.getPages(),context,context.getSelectCond());
        return new PageImpl<MapData>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }
    public List<MapData> listDefault(MapDataSearchContext context) {
        return baseMapper.listDefault(context,context.getSelectCond());
    }




}