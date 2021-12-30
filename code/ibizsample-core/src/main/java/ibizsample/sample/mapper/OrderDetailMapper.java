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
import ibizsample.sample.domain.OrderDetail;
import ibizsample.sample.filter.OrderDetailSearchContext;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import java.io.Serializable;
import com.baomidou.mybatisplus.core.toolkit.Constants;
import om.baomidou.dynamic.datasource.annotation.DS;
import com.alibaba.fastjson.JSONObject;

public interface OrderDetailMapper extends BaseMapper<OrderDetail> {


    Page<OrderDetail> searchDefault(IPage page, @Param("srf") OrderDetailSearchContext context, @Param("ew") Wrapper<OrderDetail> wrapper);
    List<OrderDetail> listDefault(@Param("srf") OrderDetailSearchContext context, @Param("ew") Wrapper<OrderDetail> wrapper);

    @Override
    OrderDetail selectById(Serializable id);

    @Override
    int insert(OrderDetail entity);

    @Override
    int updateById(@Param(Constants.ENTITY) OrderDetail entity);

    @Override
    int update(@Param(Constants.ENTITY) OrderDetail entity, @Param("ew") Wrapper<OrderDetail> updateWrapper);

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

    List<OrderDetail> selectByOrderId(@Param("orderid") Serializable orderId);
    List<OrderDetail> selectByProductId(@Param("productid") Serializable productId);

}