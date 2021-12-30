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
import ibizsample.core.sample.domain.Example2;
import ibizsample.core.sample.filter.Example2SearchContext;
import ibizsample.core.sample.service.IExample2Service;
import ibizsample.core.sample.mapper.${item.getCodeName()}Mapper;
import ibizsample.util.helper.CachedBeanCopier;
import ibizsample.util.helper.DEFieldCacheMap;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.conditions.Wrapper;


/**
 * 实体[示例明细] 服务对象接口实现
 */
@Slf4j
@Service("Example2ServiceImpl")
public class Example2ServiceImpl extends ServiceImpl<Example2> implements IExample2Service {

    protected IExample2Service example2Service = SpringContextHolder.getBean(this.getClass());

    @Autowired
    @Lazy
    protected ibizsample.core.Example.service.IExampleService exampleService;



    public Example2 get(String key) {
        Example2 et = getById(key);
        Assert.notNull(et,"数据不存在,示例明细:"+key);
    }
    List<Example2> getByIds(Collection<String> idList);
    List<Example2> getByEntities(Collection<Example2> entities);

    Example2 getDraft(Example2 et);

    boolean checkKey(Example2 et);

    @Override
    @Transactional
    public boolean create(Example2 et) {
        fillParentData(et);
        if(!this.retBool(this.baseMapper.insert(et))) 
            return false;

        return true;
    }
    @Transactional
    public boolean createBatch(List<Example2> list) {

    }

    boolean update(Example2 et);
    boolean updateBatch(List<Example2> list);

    boolean save(Example2 et);
    boolean saveBatch(List<Example2> list);

    boolean remove(String key);
    boolean removeBatch(Collection<String> idList);

    Example2 (Example2 et);
    boolean Batch(List<Example2> list);

    Page<Example2> searchDefault(Example2SearchContext context);
    List<Example2> listDefault(Example2SearchContext context);

    List<Example2> selectByExampleId(String exampleId);
    boolean removeByExampleId(String exampleId);
    boolean saveByExampleId(String exampleId,List<Example2> list);


}