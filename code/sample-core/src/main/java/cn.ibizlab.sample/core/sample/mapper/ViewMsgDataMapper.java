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
import cn.ibizlab.sample.core.sample.domain.ViewMsgData;
import cn.ibizlab.sample.core.sample.filter.ViewMsgDataSearchContext;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import java.io.Serializable;
import com.baomidou.mybatisplus.core.toolkit.Constants;
import com.baomidou.dynamic.datasource.annotation.DS;
import com.alibaba.fastjson.JSONObject;

public interface ViewMsgDataMapper extends BaseMapper<ViewMsgData> {


    Page<ViewMsgData> searchDefault(IPage page, @Param("srf") ViewMsgDataSearchContext context, @Param("ew") Wrapper<ViewMsgData> wrapper);
    List<ViewMsgData> listDefault(@Param("srf") ViewMsgDataSearchContext context, @Param("ew") Wrapper<ViewMsgData> wrapper);

    @Override
    ViewMsgData selectById(Serializable id);

    ViewMsgData selectEntity(ViewMsgData entity);

    List<ViewMsgData> selectEntities(@Param("list") List<ViewMsgData> list);

    @Override
    int insert(ViewMsgData entity);

    @Override
    int updateById(@Param(Constants.ENTITY) ViewMsgData entity);

    @Override
    int update(@Param(Constants.ENTITY) ViewMsgData entity, @Param("ew") Wrapper<ViewMsgData> updateWrapper);

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