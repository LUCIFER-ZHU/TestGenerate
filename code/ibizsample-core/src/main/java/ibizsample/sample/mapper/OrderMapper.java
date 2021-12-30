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
import ibizsample.sample.domain.Order;
import ibizsample.sample.filter.OrderSearchContext;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import java.io.Serializable;
import com.baomidou.mybatisplus.core.toolkit.Constants;
import om.baomidou.dynamic.datasource.annotation.DS;
import com.alibaba.fastjson.JSONObject;

public interface OrderMapper extends BaseMapper<Order> {


    Page<Order> searchDefault(IPage page, @Param("srf") OrderSearchContext context, @Param("ew") Wrapper<Order> wrapper);
    List<Order> listDefault(@Param("srf") OrderSearchContext context, @Param("ew") Wrapper<Order> wrapper);

    Page<Order> searchGroup(IPage page, @Param("srf") OrderSearchContext context, @Param("ew") Wrapper<Order> wrapper);
    List<Order> listGroup(@Param("srf") OrderSearchContext context, @Param("ew") Wrapper<Order> wrapper);

    Page<Order> searchPaying(IPage page, @Param("srf") OrderSearchContext context, @Param("ew") Wrapper<Order> wrapper);
    List<Order> listPaying(@Param("srf") OrderSearchContext context, @Param("ew") Wrapper<Order> wrapper);

    Page<Order> searchProcessing(IPage page, @Param("srf") OrderSearchContext context, @Param("ew") Wrapper<Order> wrapper);
    List<Order> listProcessing(@Param("srf") OrderSearchContext context, @Param("ew") Wrapper<Order> wrapper);

    @Override
    Order selectById(Serializable id);

    @Override
    int insert(Order entity);

    @Override
    int updateById(@Param(Constants.ENTITY) Order entity);

    @Override
    int update(@Param(Constants.ENTITY) Order entity, @Param("ew") Wrapper<Order> updateWrapper);

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

    List<Order> selectByCustomerId(@Param("customerid") Serializable customerId);
    List<Order> selectBy(@Param("") Serializable );

}