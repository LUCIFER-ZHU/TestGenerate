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
import ibizsample.core.sample.domain.EditorValue;
import ibizsample.core.sample.filter.EditorValueSearchContext;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import java.io.Serializable;
import com.baomidou.mybatisplus.core.toolkit.Constants;
import com.baomidou.dynamic.datasource.annotation.DS;
import com.alibaba.fastjson.JSONObject;

public interface EditorValueMapper extends BaseMapper<EditorValue> {


    Page<EditorValue> searchDefault(IPage page, @Param("srf") EditorValueSearchContext context, @Param("ew") Wrapper<EditorValue> wrapper);
    List<EditorValue> listDefault(@Param("srf") EditorValueSearchContext context, @Param("ew") Wrapper<EditorValue> wrapper);

    @Override
    EditorValue selectById(Serializable id);

    EditorValue selectEntity(EditorValue entity);

    List<EditorValue> selectEntities(@Param("list") List<EditorValue> list);

    @Override
    int insert(EditorValue entity);

    @Override
    int updateById(@Param(Constants.ENTITY) EditorValue entity);

    @Override
    int update(@Param(Constants.ENTITY) EditorValue entity, @Param("ew") Wrapper<EditorValue> updateWrapper);

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

    List<EditorValue> selectByCustomerId(@Param("customerId") Serializable customerId);
    List<EditorValue> selectByCustomerid2(@Param("customerid2") Serializable customerid2);
    List<EditorValue> selectByCustomerid3(@Param("customerid3") Serializable customerid3);
    List<EditorValue> selectByCustomerid4(@Param("customerid4") Serializable customerid4);
    List<EditorValue> selectByCustomerid5(@Param("customerid5") Serializable customerid5);

}