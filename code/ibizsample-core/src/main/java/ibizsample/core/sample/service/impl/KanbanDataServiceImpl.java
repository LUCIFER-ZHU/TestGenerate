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
import ibizsample.core.sample.domain.KanbanData;
import ibizsample.core.sample.filter.KanbanDataSearchContext;
import ibizsample.core.sample.service.IKanbanDataService;
import ibizsample.core.sample.mapper.${item.getCodeName()}Mapper;
import ibizsample.util.helper.CachedBeanCopier;
import ibizsample.util.helper.DEFieldCacheMap;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.conditions.Wrapper;


/**
 * 实体[看板数据] 服务对象接口实现
 */
@Slf4j
@Service("KanbanDataServiceImpl")
public class KanbanDataServiceImpl extends ServiceImpl<KanbanData> implements IKanbanDataService {

    protected IKanbanDataService kanbanDataService = SpringContextHolder.getBean(this.getClass());



    public KanbanData get(String key) {
        KanbanData et = getById(key);
        Assert.notNull(et,"数据不存在,看板数据:"+key);
    }
    List<KanbanData> getByIds(Collection<String> idList);
    List<KanbanData> getByEntities(Collection<KanbanData> entities);

    KanbanData getDraft(KanbanData et);

    boolean checkKey(KanbanData et);

    @Override
    @Transactional
    public boolean create(KanbanData et) {
        if(!this.retBool(this.baseMapper.insert(et))) 
            return false;
        return true;
    }
    @Transactional
    public boolean createBatch(List<KanbanData> list) {

    }

    boolean update(KanbanData et);
    boolean updateBatch(List<KanbanData> list);

    boolean save(KanbanData et);
    boolean saveBatch(List<KanbanData> list);

    boolean remove(String key);
    boolean removeBatch(Collection<String> idList);

    KanbanData (KanbanData et);
    boolean Batch(List<KanbanData> list);

    Page<KanbanData> searchDefault(KanbanDataSearchContext context);
    List<KanbanData> listDefault(KanbanDataSearchContext context);


}