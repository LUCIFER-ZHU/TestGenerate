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
import doc.core.sample.domain.CounterData2;
import doc.core.sample.filter.CounterData2SearchContext;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import java.io.Serializable;
import com.baomidou.mybatisplus.core.toolkit.Constants;
import com.baomidou.dynamic.datasource.annotation.DS;
import com.alibaba.fastjson.JSONObject;

public interface CounterData2Mapper extends BaseMapper<CounterData2> {


    Page<CounterData2> searchDefault(IPage page, @Param("ctx") CounterData2SearchContext context, @Param("ew") Wrapper<CounterData2> wrapper);
    List<CounterData2> listDefault(@Param("ctx") CounterData2SearchContext context, @Param("ew") Wrapper<CounterData2> wrapper);

    @Override
    CounterData2 selectById(Serializable id);

    CounterData2 selectEntity(CounterData2 entity);

    List<CounterData2> selectEntities(@Param("list") List<CounterData2> list);

    @Override
    int insert(CounterData2 entity);

    @Override
    int updateById(@Param(Constants.ENTITY) CounterData2 entity);

    @Override
    int update(@Param(Constants.ENTITY) CounterData2 entity, @Param("ew") Wrapper<CounterData2> updateWrapper);

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