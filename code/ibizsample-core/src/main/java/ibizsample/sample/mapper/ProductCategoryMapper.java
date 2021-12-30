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
import ibizsample.sample.domain.ProductCategory;
import ibizsample.sample.filter.ProductCategorySearchContext;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import java.io.Serializable;
import com.baomidou.mybatisplus.core.toolkit.Constants;
import om.baomidou.dynamic.datasource.annotation.DS;
import com.alibaba.fastjson.JSONObject;

public interface ProductCategoryMapper extends BaseMapper<ProductCategory> {


    Page<ProductCategory> searchDefault(IPage page, @Param("srf") ProductCategorySearchContext context, @Param("ew") Wrapper<ProductCategory> wrapper);
    List<ProductCategory> listDefault(@Param("srf") ProductCategorySearchContext context, @Param("ew") Wrapper<ProductCategory> wrapper);

    @Override
    ProductCategory selectById(Serializable id);

    @Override
    int insert(ProductCategory entity);

    @Override
    int updateById(@Param(Constants.ENTITY) ProductCategory entity);

    @Override
    int update(@Param(Constants.ENTITY) ProductCategory entity, @Param("ew") Wrapper<ProductCategory> updateWrapper);

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

    List<ProductCategory> selectByCategoryId(@Param("categoryid") Serializable categoryId);
    List<ProductCategory> selectByProductId(@Param("productid") Serializable productId);

}