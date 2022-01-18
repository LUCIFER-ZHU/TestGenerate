package cn.ibizlab.sample.core.sample.service;

import java.io.Serializable;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.HashMap;
import java.util.Collection;
import java.math.BigInteger;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.scheduling.annotation.Async;
import com.alibaba.fastjson.JSONObject;
import org.springframework.cache.annotation.CacheEvict;

import com.baomidou.mybatisplus.extension.service.IService;
import com.baomidou.dynamic.datasource.annotation.DS;
import cn.ibizlab.util.helper.CachedBeanCopier;
import cn.ibizlab.sample.core.sample.domain.Customer;
import cn.ibizlab.sample.core.sample.filter.CustomerSearchContext;

public interface ICustomerService extends IService<Customer> {

    Customer get(Customer et);
    default Customer get(String key) {
        return get(new Customer().setCustomerId(key));
    }
    default List<Customer> getByIds(Collection<String> ids) {
        List<Customer> entities =new ArrayList();
        ids.forEach(key -> entities.add(new Customer().setCustomerId(key)));
        return getByEntities(entities);
    }
    List<Customer> getByEntities(List<Customer> entities);

    Customer getDraft(Customer et);

    boolean checkKey(Customer et);

    boolean create(Customer et);
    boolean createBatch(List<Customer> list);

    boolean update(Customer et);
    boolean updateBatch(List<Customer> list);

    boolean save(Customer et);
    boolean saveBatch(List<Customer> list);

    default boolean remove(String key) {
        return remove(new Customer().setCustomerId(key));
    }
    boolean remove(Customer et);

    boolean removeBatch(Collection<String> ids);

    Customer getOrderCnt(Customer et);
    boolean getOrderCntBatch(List<Customer> list);

    Page<Customer> searchDefault(CustomerSearchContext context);
    List<Customer> listDefault(CustomerSearchContext context);

    List<Customer> selectByCityId(String cityId);
    boolean removeByCityId(String cityId);
    boolean resetByCityId(String cityId);
    boolean saveByCityId(cn.ibizlab.sample.core.sample.domain.City city,List<Customer> list);
    default boolean saveByCityId(String cityId,List<Customer> list) {
        return saveByCityId(new cn.ibizlab.sample.core.sample.domain.City().setCityId(cityId),list);
    }

    List<Customer> selectByPcustomerid(String pcustomerid);
    boolean removeByPcustomerid(String pcustomerid);
    boolean resetByPcustomerid(String pcustomerid);
    boolean saveByPcustomerid(cn.ibizlab.sample.core.sample.domain.Customer customer,List<Customer> list);
    default boolean saveByPcustomerid(String pcustomerid,List<Customer> list) {
        return saveByPcustomerid(new cn.ibizlab.sample.core.sample.domain.Customer().setCustomerId(pcustomerid),list);
    }

    List<Customer> selectByDistrictId(String districtId);
    boolean removeByDistrictId(String districtId);
    boolean resetByDistrictId(String districtId);
    boolean saveByDistrictId(cn.ibizlab.sample.core.sample.domain.District district,List<Customer> list);
    default boolean saveByDistrictId(String districtId,List<Customer> list) {
        return saveByDistrictId(new cn.ibizlab.sample.core.sample.domain.District().setDistrictId(districtId),list);
    }

    List<Customer> selectByProvinceId(String provinceId);
    boolean removeByProvinceId(String provinceId);
    boolean resetByProvinceId(String provinceId);
    boolean saveByProvinceId(cn.ibizlab.sample.core.sample.domain.Province province,List<Customer> list);
    default boolean saveByProvinceId(String provinceId,List<Customer> list) {
        return saveByProvinceId(new cn.ibizlab.sample.core.sample.domain.Province().setProvinceId(provinceId),list);
    }

}