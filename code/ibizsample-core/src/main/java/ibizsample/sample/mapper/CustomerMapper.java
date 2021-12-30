package ibizsample.sample.mapper;

import java.util.List;
import org.apache.ibatis.annotations.*;
import java.util.Map;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import java.util.Map;
import org.apache.ibatis.annotations.Select;
import ibizsample.sample.domain.Customer;
import ibizsample.sample.filter.CustomerSearchContext;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import java.io.Serializable;
import com.baomidou.mybatisplus.core.toolkit.Constants;
import om.baomidou.dynamic.datasource.annotation.DS;
import com.alibaba.fastjson.JSONObject;

public interface CustomerMapper extends BaseMapper<Customer> {


    Page<Customer> searchDefault(IPage page, @Param("srf") CustomerSearchContext context, @Param("ew") Wrapper<Customer> wrapper);
    List<Customer> listDefault(@Param("srf") CustomerSearchContext context, @Param("ew") Wrapper<Customer> wrapper);

    @Override
    Customer selectById(Serializable id);

    @Override
    int insert(Customer entity);

    @Override
    int updateById(@Param(Constants.ENTITY) Customer entity);

    @Override
    int update(@Param(Constants.ENTITY) Customer entity, @Param("ew") Wrapper<Customer> updateWrapper);

    @Override
    int deleteById(Serializable id);

    /**
    * 自定义查询SQL
    * @param sql
    * @return
    */
    @Select("${sql}")
    List<JSONObject> selectBySQL(@Param("sql") String sql, @Param("et")Map param);

    /**
    * 自定义更新SQL
    * @param sql
    * @return
    */
    @Update("${sql}")
    boolean updateBySQL(@Param("sql") String sql, @Param("et")Map param);

    /**
    * 自定义插入SQL
    * @param sql
    * @return
    */
    @Insert("${sql}")
    boolean insertBySQL(@Param("sql") String sql, @Param("et")Map param);

    /**
    * 自定义删除SQL
    * @param sql
    * @return
    */
    @Delete("${sql}")
    boolean deleteBySQL(@Param("sql") String sql, @Param("et")Map param);

    List<Customer> selectByCityId(@Param("cityid") Serializable cityId);
    List<Customer> selectByPcustomerid(@Param("pcustomerid") Serializable pcustomerid);
    List<Customer> selectByDistrictId(@Param("districtid") Serializable districtId);
    List<Customer> selectByProvinceId(@Param("provinceid") Serializable provinceId);

}