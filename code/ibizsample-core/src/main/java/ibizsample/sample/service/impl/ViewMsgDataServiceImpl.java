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
import ibizsample.core.sample.domain.ViewMsgData;
import ibizsample.core.sample.filter.ViewMsgDataSearchContext;
import ibizsample.core.sample.service.IViewMsgDataService;
import ibizsample.core.sample.mapper.${item.getCodeName()}Mapper;
import ibizsample.util.helper.CachedBeanCopier;
import ibizsample.util.helper.DEFieldCacheMap;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.conditions.Wrapper;


/**
 * 实体[视图消息数据] 服务对象接口实现
 */
@Slf4j
@Service("ViewMsgDataServiceImpl")
public class ViewMsgDataServiceImpl extends ServiceImpl<ViewMsgData> implements IViewMsgDataService {

    protected IViewMsgDataService viewMsgDataService = SpringContextHolder.getBean(this.getClass());



    public ViewMsgData get(String key) {
        ViewMsgData et = getById(key);
        Assert.notNull(et,"数据不存在,视图消息数据:"+key);
    }
    List<ViewMsgData> getByIds(Collection<String> idList);
    List<ViewMsgData> getByEntities(Collection<ViewMsgData> entities);

    ViewMsgData getDraft(ViewMsgData et);

    boolean checkKey(ViewMsgData et);

    @Override
    @Transactional
    public boolean create(ViewMsgData et) {
        if(!this.retBool(this.baseMapper.insert(et))) 
            return false;
    }
    @Transactional
    public boolean createBatch(List<ViewMsgData> list) {

    }

    boolean update(ViewMsgData et);
    boolean updateBatch(List<ViewMsgData> list);

    boolean save(ViewMsgData et);
    boolean saveBatch(List<ViewMsgData> list);

    boolean remove(String key);
    boolean removeBatch(Collection<String> idList);

    ViewMsgData (ViewMsgData et);
    boolean Batch(List<ViewMsgData> list);

    Page<ViewMsgData> searchDefault(ViewMsgDataSearchContext context);
    List<ViewMsgData> listDefault(ViewMsgDataSearchContext context);


}