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
import cn.ibizlab.sample.core.sample.domain.PersonData;
import cn.ibizlab.sample.core.sample.filter.PersonDataSearchContext;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import java.io.Serializable;
import com.baomidou.mybatisplus.core.toolkit.Constants;
import com.baomidou.dynamic.datasource.annotation.DS;
import com.alibaba.fastjson.JSONObject;

public interface PersonDataMapper extends BaseMapper<PersonData> {


    Page<PersonData> searchDefault(IPage page, @Param("srf") PersonDataSearchContext context, @Param("ew") Wrapper<PersonData> wrapper);
    List<PersonData> listDefault(@Param("srf") PersonDataSearchContext context, @Param("ew") Wrapper<PersonData> wrapper);

    @Override
    PersonData selectById(Serializable id);

    PersonData selectEntity(PersonData entity);

    List<PersonData> selectEntities(@Param("list") List<PersonData> list);

    @Override
    int insert(PersonData entity);

    @Override
    int updateById(@Param(Constants.ENTITY) PersonData entity);

    @Override
    int update(@Param(Constants.ENTITY) PersonData entity, @Param("ew") Wrapper<PersonData> updateWrapper);

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

    List<PersonData> selectByDeptDataId(@Param("deptDataId") Serializable deptDataId);
    List<PersonData> selectByOrgDataId(@Param("orgDataId") Serializable orgDataId);

}