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
import cn.ibizlab.sample.core.sample.domain.Opportunity;
import cn.ibizlab.sample.core.sample.filter.OpportunitySearchContext;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import java.io.Serializable;
import com.baomidou.mybatisplus.core.toolkit.Constants;
import com.baomidou.dynamic.datasource.annotation.DS;
import com.alibaba.fastjson.JSONObject;

public interface OpportunityMapper extends BaseMapper<Opportunity> {


    Page<Opportunity> searchDefault(IPage page, @Param("srf") OpportunitySearchContext context, @Param("ew") Wrapper<Opportunity> wrapper);
    List<Opportunity> listDefault(@Param("srf") OpportunitySearchContext context, @Param("ew") Wrapper<Opportunity> wrapper);

    @Override
    Opportunity selectById(Serializable id);

    Opportunity selectEntity(Opportunity entity);

    List<Opportunity> selectEntities(@Param("list") List<Opportunity> list);

    @Override
    int insert(Opportunity entity);

    @Override
    int updateById(@Param(Constants.ENTITY) Opportunity entity);

    @Override
    int update(@Param(Constants.ENTITY) Opportunity entity, @Param("ew") Wrapper<Opportunity> updateWrapper);

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

    List<Opportunity> selectByCustomerId(@Param("customerId") Serializable customerId);
    List<Opportunity> selectByPersonDataId(@Param("personDataId") Serializable personDataId);

}