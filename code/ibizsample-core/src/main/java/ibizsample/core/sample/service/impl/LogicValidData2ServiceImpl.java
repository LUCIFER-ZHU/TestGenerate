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
import ibizsample.core.sample.domain.LogicValidData2;
import ibizsample.core.sample.filter.LogicValidData2SearchContext;
import ibizsample.core.sample.service.ILogicValidData2Service;
import ibizsample.core.sample.mapper.${item.getCodeName()}Mapper;
import ibizsample.util.helper.CachedBeanCopier;
import ibizsample.util.helper.DEFieldCacheMap;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.conditions.Wrapper;


/**
 * 实体[示例数据（启用逻辑删除）（主键数值）] 服务对象接口实现
 */
@Slf4j
@Service("LogicValidData2ServiceImpl")
public class LogicValidData2ServiceImpl extends ServiceImpl<LogicValidData2> implements ILogicValidData2Service {

    protected ILogicValidData2Service logicValidData2Service = SpringContextHolder.getBean(this.getClass());



    public LogicValidData2 get(Long key) {
        LogicValidData2 et = getById(key);
        Assert.notNull(et,"数据不存在,示例数据（启用逻辑删除）（主键数值）:"+key);
    }
    List<LogicValidData2> getByIds(Collection<Long> idList);
    List<LogicValidData2> getByEntities(Collection<LogicValidData2> entities);

    LogicValidData2 getDraft(LogicValidData2 et);

    boolean checkKey(LogicValidData2 et);

    @Override
    @Transactional
    public boolean create(LogicValidData2 et) {
        if(!this.retBool(this.baseMapper.insert(et))) 
            return false;
        return true;
    }
    @Transactional
    public boolean createBatch(List<LogicValidData2> list) {

    }

    boolean update(LogicValidData2 et);
    boolean updateBatch(List<LogicValidData2> list);

    boolean save(LogicValidData2 et);
    boolean saveBatch(List<LogicValidData2> list);

    boolean remove(Long key);
    boolean removeBatch(Collection<Long> idList);

    LogicValidData2 (LogicValidData2 et);
    boolean Batch(List<LogicValidData2> list);

    Page<LogicValidData2> searchDefault(LogicValidData2SearchContext context);
    List<LogicValidData2> listDefault(LogicValidData2SearchContext context);


}