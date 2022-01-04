package ibizsample.core.sample.mapper;

import java.util.List;
import org.apache.ibatis.annotations.*;
import java.util.Map;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import java.util.Map;
import org.apache.ibatis.annotations.Select;
import ibizsample.core.sample.domain.Category;
import ibizsample.core.sample.filter.CategorySearchContext;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import java.io.Serializable;
import com.baomidou.mybatisplus.core.toolkit.Constants;
import com.baomidou.dynamic.datasource.annotation.DS;
import com.alibaba.fastjson.JSONObject;

public interface CategoryMapper extends BaseMapper<Category> {


    Page<Category> searchDefault(IPage page, @Param("srf") CategorySearchContext context, @Param("ew") Wrapper<Category> wrapper);
    List<Category> listDefault(@Param("srf") CategorySearchContext context, @Param("ew") Wrapper<Category> wrapper);

    Page<Category> searchRoot(IPage page, @Param("srf") CategorySearchContext context, @Param("ew") Wrapper<Category> wrapper);
    List<Category> listRoot(@Param("srf") CategorySearchContext context, @Param("ew") Wrapper<Category> wrapper);

    @Override
    Category selectById(Serializable id);

    Category selectEntity(Category entity);

    List<Category> selectEntities(@Param("list") List<Category> list);

    @Override
    int insert(Category entity);

    @Override
    int updateById(@Param(Constants.ENTITY) Category entity);

    @Override
    int update(@Param(Constants.ENTITY) Category entity, @Param("ew") Wrapper<Category> updateWrapper);

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

    List<Category> selectByPcategoryid(@Param("pcategoryid") Serializable pcategoryid);

}