package cn.ibizlab.sample.core.sample.mapper;

import java.util.List;
import org.apache.ibatis.annotations.*;
import java.util.Map;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import java.util.Map;
import org.apache.ibatis.annotations.Select;
import cn.ibizlab.sample.core.sample.domain.Example;
import cn.ibizlab.sample.core.sample.filter.ExampleSearchContext;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import java.io.Serializable;
import com.baomidou.mybatisplus.core.toolkit.Constants;
import com.baomidou.dynamic.datasource.annotation.DS;
import com.alibaba.fastjson.JSONObject;

public interface ExampleMapper extends BaseMapper<Example> {


    Page<Example> searchDefault(IPage page, @Param("srf") ExampleSearchContext context, @Param("ew") Wrapper<Example> wrapper);
    List<Example> listDefault(@Param("srf") ExampleSearchContext context, @Param("ew") Wrapper<Example> wrapper);

    Page<Example> searchEmpty(IPage page, @Param("srf") ExampleSearchContext context, @Param("ew") Wrapper<Example> wrapper);
    List<Example> listEmpty(@Param("srf") ExampleSearchContext context, @Param("ew") Wrapper<Example> wrapper);

    @Override
    Example selectById(Serializable id);

    Example selectEntity(Example entity);

    List<Example> selectEntities(@Param("list") List<Example> list);

    @Override
    int insert(Example entity);

    @Override
    int updateById(@Param(Constants.ENTITY) Example entity);

    @Override
    int update(@Param(Constants.ENTITY) Example entity, @Param("ew") Wrapper<Example> updateWrapper);

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

    List<Example> selectByCityId(@Param("cityId") Serializable cityId);
    List<Example> selectByDistrictId(@Param("districtId") Serializable districtId);
    List<Example> selectByProvinceId(@Param("provinceId") Serializable provinceId);

}