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
import ibizsample.core.sample.domain.LogicValidData;
import ibizsample.core.sample.filter.LogicValidDataSearchContext;
import ibizsample.core.sample.service.ILogicValidDataService;
import ibizsample.core.sample.mapper.${item.getCodeName()}Mapper;
import ibizsample.util.helper.CachedBeanCopier;
import ibizsample.util.helper.DEFieldCacheMap;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.conditions.Wrapper;


/**
 * 实体[示例数据（启用逻辑删除）] 服务对象接口实现
 */
@Slf4j
@Service("LogicValidDataServiceImpl")
public class LogicValidDataServiceImpl extends ServiceImpl<LogicValidData> implements ILogicValidDataService {

    protected ILogicValidDataService logicValidDataService = SpringContextHolder.getBean(this.getClass());



    public LogicValidData get(String key) {
        LogicValidData et = getById(key);
        Assert.notNull(et,"数据不存在,示例数据（启用逻辑删除）:"+key);
    }
    List<LogicValidData> getByIds(Collection<String> idList);
    List<LogicValidData> getByEntities(Collection<LogicValidData> entities);

    LogicValidData getDraft(LogicValidData et);

    boolean checkKey(LogicValidData et);

    @Override
    @Transactional
    public boolean create(LogicValidData et) {
        if(!this.retBool(this.baseMapper.insert(et))) 
            return false;
        return true;
    }
    @Transactional
    public boolean createBatch(List<LogicValidData> list) {

    }

    boolean update(LogicValidData et);
    boolean updateBatch(List<LogicValidData> list);

    boolean save(LogicValidData et);
    boolean saveBatch(List<LogicValidData> list);

    boolean remove(String key);
    boolean removeBatch(Collection<String> idList);

    LogicValidData (LogicValidData et);
    boolean Batch(List<LogicValidData> list);

    Page<LogicValidData> searchDefault(LogicValidDataSearchContext context);
    List<LogicValidData> listDefault(LogicValidDataSearchContext context);


}