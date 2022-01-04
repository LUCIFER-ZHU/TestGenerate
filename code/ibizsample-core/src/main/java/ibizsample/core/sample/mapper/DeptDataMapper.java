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
import ibizsample.core.sample.domain.DeptData;
import ibizsample.core.sample.filter.DeptDataSearchContext;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import java.io.Serializable;
import com.baomidou.mybatisplus.core.toolkit.Constants;
import com.baomidou.dynamic.datasource.annotation.DS;
import com.alibaba.fastjson.JSONObject;

public interface DeptDataMapper extends BaseMapper<DeptData> {


    Page<DeptData> searchDefault(IPage page, @Param("srf") DeptDataSearchContext context, @Param("ew") Wrapper<DeptData> wrapper);
    List<DeptData> listDefault(@Param("srf") DeptDataSearchContext context, @Param("ew") Wrapper<DeptData> wrapper);

    @Override
    DeptData selectById(Serializable id);

    DeptData selectEntity(DeptData entity);

    List<DeptData> selectEntities(@Param("list") List<DeptData> list);

    @Override
    int insert(DeptData entity);

    @Override
    int updateById(@Param(Constants.ENTITY) DeptData entity);

    @Override
    int update(@Param(Constants.ENTITY) DeptData entity, @Param("ew") Wrapper<DeptData> updateWrapper);

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

    List<DeptData> selectByOrgDataId(@Param("orgDataId") Serializable orgDataId);

}