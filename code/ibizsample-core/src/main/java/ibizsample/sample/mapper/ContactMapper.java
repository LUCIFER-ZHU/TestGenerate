package ibizsample.sample.mapper;

import java.util.List;
import org.apache.ibatis.annotations.*;
import java.util.Map;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import java.util.Map;
import org.apache.ibatis.annotations.Select;
import ibizsample.sample.domain.Contact;
import ibizsample.sample.filter.ContactSearchContext;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import java.io.Serializable;
import com.baomidou.mybatisplus.core.toolkit.Constants;
import om.baomidou.dynamic.datasource.annotation.DS;
import com.alibaba.fastjson.JSONObject;

public interface ContactMapper extends BaseMapper<Contact> {


    Page<Contact> searchDefault(IPage page, @Param("srf") ContactSearchContext context, @Param("ew") Wrapper<Contact> wrapper);
    List<Contact> listDefault(@Param("srf") ContactSearchContext context, @Param("ew") Wrapper<Contact> wrapper);

    @Override
    Contact selectById(Serializable id);

    @Override
    int insert(Contact entity);

    @Override
    int updateById(@Param(Constants.ENTITY) Contact entity);

    @Override
    int update(@Param(Constants.ENTITY) Contact entity, @Param("ew") Wrapper<Contact> updateWrapper);

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

    List<Contact> selectByCustomerId(@Param("customerid") Serializable customerId);

}