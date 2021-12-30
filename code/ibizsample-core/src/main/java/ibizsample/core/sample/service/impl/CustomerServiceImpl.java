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
import ibizsample.core.sample.domain.Customer;
import ibizsample.core.sample.filter.CustomerSearchContext;
import ibizsample.core.sample.service.ICustomerService;
import ibizsample.core.sample.mapper.${item.getCodeName()}Mapper;
import ibizsample.util.helper.CachedBeanCopier;
import ibizsample.util.helper.DEFieldCacheMap;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.conditions.Wrapper;


/**
 * 实体[客户] 服务对象接口实现
 */
@Slf4j
@Service("CustomerServiceImpl")
public class CustomerServiceImpl extends ServiceImpl<Customer> implements ICustomerService {

    protected ICustomerService customerService = SpringContextHolder.getBean(this.getClass());

    @Autowired
    @Lazy
    protected ibizsample.core.City.service.ICityService cityService;

    @Autowired
    @Lazy
    protected ibizsample.core.District.service.IDistrictService districtService;

    @Autowired
    @Lazy
    protected ibizsample.core.Province.service.IProvinceService provinceService;



    public Customer get(String key) {
        Customer et = getById(key);
        Assert.notNull(et,"数据不存在,客户:"+key);
    }
    List<Customer> getByIds(Collection<String> idList);
    List<Customer> getByEntities(Collection<Customer> entities);

    Customer getDraft(Customer et);

    boolean checkKey(Customer et);

    @Override
    @Transactional
    public boolean create(Customer et) {
        fillParentData(et);
        if(!this.retBool(this.baseMapper.insert(et))) 
            return false;

        return true;
    }
    @Transactional
    public boolean createBatch(List<Customer> list) {

    }

    boolean update(Customer et);
    boolean updateBatch(List<Customer> list);

    boolean save(Customer et);
    boolean saveBatch(List<Customer> list);

    boolean remove(String key);
    boolean removeBatch(Collection<String> idList);

    Customer (Customer et);
    boolean Batch(List<Customer> list);

    Page<Customer> searchDefault(CustomerSearchContext context);
    List<Customer> listDefault(CustomerSearchContext context);

    List<Customer> selectByCityId(String cityId);
    boolean removeByCityId(String cityId);
    boolean saveByCityId(String cityId,List<Customer> list);

    List<Customer> selectByPcustomerid(String pcustomerid);
    boolean removeByPcustomerid(String pcustomerid);
    boolean saveByPcustomerid(String pcustomerid,List<Customer> list);

    List<Customer> selectByDistrictId(String districtId);
    boolean removeByDistrictId(String districtId);
    boolean saveByDistrictId(String districtId,List<Customer> list);

    List<Customer> selectByProvinceId(String provinceId);
    boolean removeByProvinceId(String provinceId);
    boolean saveByProvinceId(String provinceId,List<Customer> list);


}