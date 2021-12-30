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
import ibizsample.core.sample.domain.SampleVer;
import ibizsample.core.sample.filter.SampleVerSearchContext;
import ibizsample.core.sample.service.ISampleVerService;
import ibizsample.core.sample.mapper.${item.getCodeName()}Mapper;
import ibizsample.util.helper.CachedBeanCopier;
import ibizsample.util.helper.DEFieldCacheMap;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.conditions.Wrapper;


/**
 * 实体[示例版本] 服务对象接口实现
 */
@Slf4j
@Service("SampleVerServiceImpl")
public class SampleVerServiceImpl extends ServiceImpl<SampleVer> implements ISampleVerService {

    protected ISampleVerService sampleVerService = SpringContextHolder.getBean(this.getClass());



    public SampleVer get(String key) {
        SampleVer et = getById(key);
        Assert.notNull(et,"数据不存在,示例版本:"+key);
    }
    List<SampleVer> getByIds(Collection<String> idList);
    List<SampleVer> getByEntities(Collection<SampleVer> entities);

    SampleVer getDraft(SampleVer et);

    boolean checkKey(SampleVer et);

    @Override
    @Transactional
    public boolean create(SampleVer et) {
        if(!this.retBool(this.baseMapper.insert(et))) 
            return false;
        return true;
    }
    @Transactional
    public boolean createBatch(List<SampleVer> list) {

    }

    boolean update(SampleVer et);
    boolean updateBatch(List<SampleVer> list);

    boolean save(SampleVer et);
    boolean saveBatch(List<SampleVer> list);

    boolean remove(String key);
    boolean removeBatch(Collection<String> idList);

    SampleVer (SampleVer et);
    boolean Batch(List<SampleVer> list);

    Page<SampleVer> searchDefault(SampleVerSearchContext context);
    List<SampleVer> listDefault(SampleVerSearchContext context);

    Page<SampleVer> searchJavar7D(SampleVerSearchContext context);
    List<SampleVer> listJavar7D(SampleVerSearchContext context);

    Page<SampleVer> searchMobr7D(SampleVerSearchContext context);
    List<SampleVer> listMobr7D(SampleVerSearchContext context);

    Page<SampleVer> searchWebr7D(SampleVerSearchContext context);
    List<SampleVer> listWebr7D(SampleVerSearchContext context);


}