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
import doc.core.sample.domain.CounterData;
import doc.core.sample.filter.CounterDataSearchContext;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import java.io.Serializable;
import com.baomidou.mybatisplus.core.toolkit.Constants;
import com.baomidou.dynamic.datasource.annotation.DS;
import com.alibaba.fastjson.JSONObject;

public interface CounterDataMapper extends BaseMapper<CounterData> {


    Page<CounterData> searchDefault(IPage page, @Param("ctx") CounterDataSearchContext context, @Param("ew") Wrapper<CounterData> wrapper);
    List<CounterData> listDefault(@Param("ctx") CounterDataSearchContext context, @Param("ew") Wrapper<CounterData> wrapper);

    @Override
    CounterData selectById(Serializable id);

    CounterData selectEntity(CounterData entity);

    List<CounterData> selectEntities(@Param("list") List<CounterData> list);

    @Override
    int insert(CounterData entity);

    @Override
    int updateById(@Param(Constants.ENTITY) CounterData entity);

    @Override
    int update(@Param(Constants.ENTITY) CounterData entity, @Param("ew") Wrapper<CounterData> updateWrapper);

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


}