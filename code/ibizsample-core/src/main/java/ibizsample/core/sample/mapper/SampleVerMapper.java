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
import ibizsample.core.sample.domain.SampleVer;
import ibizsample.core.sample.filter.SampleVerSearchContext;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import java.io.Serializable;
import com.baomidou.mybatisplus.core.toolkit.Constants;
import om.baomidou.dynamic.datasource.annotation.DS;
import com.alibaba.fastjson.JSONObject;

public interface SampleVerMapper extends BaseMapper<SampleVer> {


    Page<SampleVer> searchDefault(IPage page, @Param("srf") SampleVerSearchContext context, @Param("ew") Wrapper<SampleVer> wrapper);
    List<SampleVer> listDefault(@Param("srf") SampleVerSearchContext context, @Param("ew") Wrapper<SampleVer> wrapper);

    Page<SampleVer> searchJavar7D(IPage page, @Param("srf") SampleVerSearchContext context, @Param("ew") Wrapper<SampleVer> wrapper);
    List<SampleVer> listJavar7D(@Param("srf") SampleVerSearchContext context, @Param("ew") Wrapper<SampleVer> wrapper);

    Page<SampleVer> searchMobr7D(IPage page, @Param("srf") SampleVerSearchContext context, @Param("ew") Wrapper<SampleVer> wrapper);
    List<SampleVer> listMobr7D(@Param("srf") SampleVerSearchContext context, @Param("ew") Wrapper<SampleVer> wrapper);

    Page<SampleVer> searchWebr7D(IPage page, @Param("srf") SampleVerSearchContext context, @Param("ew") Wrapper<SampleVer> wrapper);
    List<SampleVer> listWebr7D(@Param("srf") SampleVerSearchContext context, @Param("ew") Wrapper<SampleVer> wrapper);

    @Override
    SampleVer selectById(Serializable id);

    @Override
    int insert(SampleVer entity);

    @Override
    int updateById(@Param(Constants.ENTITY) SampleVer entity);

    @Override
    int update(@Param(Constants.ENTITY) SampleVer entity, @Param("ew") Wrapper<SampleVer> updateWrapper);

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