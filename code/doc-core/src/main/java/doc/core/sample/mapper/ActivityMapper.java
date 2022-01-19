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
import doc.core.sample.domain.Activity;
import doc.core.sample.filter.ActivitySearchContext;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import java.io.Serializable;
import com.baomidou.mybatisplus.core.toolkit.Constants;
import com.baomidou.dynamic.datasource.annotation.DS;
import com.alibaba.fastjson.JSONObject;

public interface ActivityMapper extends BaseMapper<Activity> {


    Page<Activity> searchDefault(IPage page, @Param("srf") ActivitySearchContext context, @Param("ew") Wrapper<Activity> wrapper);
    List<Activity> listDefault(@Param("srf") ActivitySearchContext context, @Param("ew") Wrapper<Activity> wrapper);

    Page<Activity> searchEmail(IPage page, @Param("srf") ActivitySearchContext context, @Param("ew") Wrapper<Activity> wrapper);
    List<Activity> listEmail(@Param("srf") ActivitySearchContext context, @Param("ew") Wrapper<Activity> wrapper);

    Page<Activity> searchMeeting(IPage page, @Param("srf") ActivitySearchContext context, @Param("ew") Wrapper<Activity> wrapper);
    List<Activity> listMeeting(@Param("srf") ActivitySearchContext context, @Param("ew") Wrapper<Activity> wrapper);

    Page<Activity> searchOther(IPage page, @Param("srf") ActivitySearchContext context, @Param("ew") Wrapper<Activity> wrapper);
    List<Activity> listOther(@Param("srf") ActivitySearchContext context, @Param("ew") Wrapper<Activity> wrapper);

    Page<Activity> searchPhone(IPage page, @Param("srf") ActivitySearchContext context, @Param("ew") Wrapper<Activity> wrapper);
    List<Activity> listPhone(@Param("srf") ActivitySearchContext context, @Param("ew") Wrapper<Activity> wrapper);

    @Override
    Activity selectById(Serializable id);

    Activity selectEntity(Activity entity);

    List<Activity> selectEntities(@Param("list") List<Activity> list);

    @Override
    int insert(Activity entity);

    @Override
    int updateById(@Param(Constants.ENTITY) Activity entity);

    @Override
    int update(@Param(Constants.ENTITY) Activity entity, @Param("ew") Wrapper<Activity> updateWrapper);

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

    List<Activity> selectByCustomerId(@Param("customerId") Serializable customerId);

}