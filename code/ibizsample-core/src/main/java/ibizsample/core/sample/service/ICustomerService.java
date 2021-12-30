package ibizsample.core.sample.service;

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
import om.baomidou.dynamic.datasource.annotation.DS;

import ibizsample.core.sample.domain.Customer;
import ibizsample.core.sample.filter.CustomerSearchContext;

public interface ICustomerService extends IService<Customer> {

    Customer get(String key);
    List<Customer> getByIds(Collection<String> idList);
    List<Customer> getByEntities(Collection<Customer> entities);

    Customer getDraft(Customer et);

    boolean checkKey(Customer et);

    boolean create(Customer et);
    boolean createBatch(List<Customer> list);

    boolean update(Customer et);
    boolean updateBatch(List<Customer> list);

    boolean save(Customer et);
    boolean saveBatch(List<Customer> list);

    boolean remove(String key);
    boolean removeBatch(Collection<String> idList);

    Customer getOrderCnt(Customer et);
    boolean getOrderCntBatch(List<Customer> list);

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