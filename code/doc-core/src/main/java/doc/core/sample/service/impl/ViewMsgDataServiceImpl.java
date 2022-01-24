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
import doc.core.sample.domain.ViewMsgData;
import doc.core.sample.filter.ViewMsgDataSearchContext;
import doc.core.sample.service.IViewMsgDataService;
import doc.core.sample.mapper.ViewMsgDataMapper;
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
 * 实体[视图消息数据] 服务对象接口实现
 */
@Slf4j
@Service("ViewMsgDataService")
public class ViewMsgDataServiceImpl extends ServiceImpl<ViewMsgDataMapper,ViewMsgData> implements IViewMsgDataService {

    protected IViewMsgDataService getProxyService() {
        return SpringContextHolder.getBean(this.getClass());
    }


    protected int batchSize = 500;

    public ViewMsgData get(ViewMsgData et) {
        ViewMsgData rt = this.baseMapper.selectEntity(et);
        Assert.notNull(rt,"数据不存在,视图消息数据:"+et.getViewMsgDataId());
        BeanUtils.copyProperties(rt, et);
        return et;
    }
    
    public List<ViewMsgData> getByEntities(List<ViewMsgData> entities) {
        return this.baseMapper.selectEntities(entities);
    }


    public ViewMsgData getDraft(ViewMsgData et) {
        return et;
    }

    public boolean checkKey(ViewMsgData et) {
        return this.count(Wrappers.lambdaQuery(et))>0;
    }

    @Override
    @Transactional
    public boolean create(ViewMsgData et) {
        if(!this.retBool(this.baseMapper.insert(et))) 
            return false;
        get(et);
        return true;
    }
    @Transactional
    public boolean createBatch(List<ViewMsgData> list) {
        this.saveBatch(list, batchSize);        
        return true;
    }

    @Transactional
    public boolean update(ViewMsgData et) {
        if(!update(et, (Wrapper) et.getUpdateWrapper(true)
                .eq("viewmsgdataid", et.getViewMsgDataId())
            )) {
            return false;
        }
        get(et);
        return true;
    }

    @Transactional
    public boolean updateBatch(List<ViewMsgData> list) {
        updateBatchById(list, batchSize);
        return true;
    }

    @Transactional
    public boolean save(ViewMsgData et) {
        if(checkKey(et))
            return getProxyService().update(et);
        else
            return getProxyService().create(et);
    }

    @Transactional
    public boolean saveBatch(List<ViewMsgData> list) {
        List<ViewMsgData> rt=this.getByEntities(list);
        Set<Serializable> keys=new HashSet<>();
        rt.forEach(et->{
            Serializable key = et.getViewMsgDataId();
            if(!ObjectUtils.isEmpty(key))
                keys.add(key);
        });
        List<ViewMsgData> _create=new ArrayList<>();
        List<ViewMsgData> _update=new ArrayList<>();
        list.forEach(et-> {
            Serializable key = et.getViewMsgDataId();
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
    public boolean remove(ViewMsgData et) {
        String key = et.getViewMsgDataId();

        if(!remove(new QueryWrapper<ViewMsgData>()
                .eq("viewmsgdataid", et.getViewMsgDataId())
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

    public Page<ViewMsgData> searchDefault(ViewMsgDataSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<ViewMsgData> pages=baseMapper.searchDefault(context.getPages(),context,context.getSelectCond());
        return new PageImpl<ViewMsgData>(com.alibaba.fastjson.JSON.parseArray(com.alibaba.fastjson.JSON.toJSONString(pages.getRecords()),ViewMsgData.class), context.getPageable(), pages.getTotal());
    }
    public List<ViewMsgData> listDefault(ViewMsgDataSearchContext context) {
        return com.alibaba.fastjson.JSON.parseArray(com.alibaba.fastjson.JSON.toJSONString(baseMapper.listDefault(context,context.getSelectCond())),ViewMsgData.class);
    }




}