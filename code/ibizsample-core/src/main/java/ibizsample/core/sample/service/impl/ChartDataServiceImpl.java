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
import ibizsample.core.sample.domain.ChartData;
import ibizsample.core.sample.filter.ChartDataSearchContext;
import ibizsample.core.sample.service.IChartDataService;
import ibizsample.core.sample.mapper.${item.getCodeName()}Mapper;
import ibizsample.util.helper.CachedBeanCopier;
import ibizsample.util.helper.DEFieldCacheMap;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.conditions.Wrapper;


/**
 * 实体[图表] 服务对象接口实现
 */
@Slf4j
@Service("ChartDataServiceImpl")
public class ChartDataServiceImpl extends ServiceImpl<ChartData> implements IChartDataService {

    protected IChartDataService chartDataService = SpringContextHolder.getBean(this.getClass());



    public ChartData get(String key) {
        ChartData et = getById(key);
        Assert.notNull(et,"数据不存在,图表:"+key);
    }
    List<ChartData> getByIds(Collection<String> idList);
    List<ChartData> getByEntities(Collection<ChartData> entities);

    ChartData getDraft(ChartData et);

    boolean checkKey(ChartData et);

    @Override
    @Transactional
    public boolean create(ChartData et) {
        if(!this.retBool(this.baseMapper.insert(et))) 
            return false;
        return true;
    }
    @Transactional
    public boolean createBatch(List<ChartData> list) {

    }

    boolean update(ChartData et);
    boolean updateBatch(List<ChartData> list);

    boolean save(ChartData et);
    boolean saveBatch(List<ChartData> list);

    boolean remove(String key);
    boolean removeBatch(Collection<String> idList);

    ChartData (ChartData et);
    boolean Batch(List<ChartData> list);

    Page<ChartData> searchDefault(ChartDataSearchContext context);
    List<ChartData> listDefault(ChartDataSearchContext context);


}