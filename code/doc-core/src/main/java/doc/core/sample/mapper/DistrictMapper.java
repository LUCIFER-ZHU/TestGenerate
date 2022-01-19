package doc.core.sample.mapper;

import java.util.List;
import org.apache.ibatis.annotations.*;
import java.util.Map;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import java.util.Map;
import org.apache.ibatis.annotations.Select;
import doc.core.sample.domain.District;
import doc.core.sample.filter.DistrictSearchContext;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import java.io.Serializable;
import com.baomidou.mybatisplus.core.toolkit.Constants;
import com.baomidou.dynamic.datasource.annotation.DS;
import com.alibaba.fastjson.JSONObject;

public interface DistrictMapper extends BaseMapper<District> {


    Page<District> searchDefault(IPage page, @Param("srf") DistrictSearchContext context, @Param("ew") Wrapper<District> wrapper);
    List<District> listDefault(@Param("srf") DistrictSearchContext context, @Param("ew") Wrapper<District> wrapper);

    @Override
    District selectById(Serializable id);

    District selectEntity(District entity);

    List<District> selectEntities(@Param("list") List<District> list);

    @Override
    int insert(District entity);

    @Override
    int updateById(@Param(Constants.ENTITY) District entity);

    @Override
    int update(@Param(Constants.ENTITY) District entity, @Param("ew") Wrapper<District> updateWrapper);

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

    List<District> selectByCityId(@Param("cityId") Serializable cityId);

}