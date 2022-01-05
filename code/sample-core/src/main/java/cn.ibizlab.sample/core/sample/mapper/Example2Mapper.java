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
import cn.ibizlab.sample.core.sample.domain.Example2;
import cn.ibizlab.sample.core.sample.filter.Example2SearchContext;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import java.io.Serializable;
import com.baomidou.mybatisplus.core.toolkit.Constants;
import com.baomidou.dynamic.datasource.annotation.DS;
import com.alibaba.fastjson.JSONObject;

public interface Example2Mapper extends BaseMapper<Example2> {


    Page<Example2> searchDefault(IPage page, @Param("srf") Example2SearchContext context, @Param("ew") Wrapper<Example2> wrapper);
    List<Example2> listDefault(@Param("srf") Example2SearchContext context, @Param("ew") Wrapper<Example2> wrapper);

    @Override
    Example2 selectById(Serializable id);

    Example2 selectEntity(Example2 entity);

    List<Example2> selectEntities(@Param("list") List<Example2> list);

    @Override
    int insert(Example2 entity);

    @Override
    int updateById(@Param(Constants.ENTITY) Example2 entity);

    @Override
    int update(@Param(Constants.ENTITY) Example2 entity, @Param("ew") Wrapper<Example2> updateWrapper);

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

    List<Example2> selectByExampleId(@Param("exampleId") Serializable exampleId);

}