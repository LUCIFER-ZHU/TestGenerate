package cn.ibizlab.sample.core.sample.filter;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.HashMap;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.*;
import lombok.experimental.Accessors;
import lombok.extern.slf4j.Slf4j;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.alibaba.fastjson.annotation.JSONField;

import org.springframework.util.ObjectUtils;
import org.springframework.util.StringUtils;
import cn.ibizlab.util.filter.QueryWrapperContext;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import cn.ibizlab.sample.core.sample.domain.MapData;
/**
 * 关系型数据实体[MapData] 查询条件对象
 */
@Slf4j
@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
@ApiModel("地图示例数据")
public class MapDataSearchContext extends QueryWrapperContext<MapData> {

    @JsonProperty("n_mapdataname_like")
    @JSONField(name = "n_mapdataname_like")
    @ApiModelProperty("名称LIKE")
	private String mapDataNameLIKE;
	public MapDataSearchContext setMapDataNameLIKE(String mapDataNameLIKE) {
        this.mapDataNameLIKE = mapDataNameLIKE;
        if(!ObjectUtils.isEmpty(this.mapDataNameLIKE)){
            this.getSearchCond().like("mapdataname", mapDataNameLIKE);
        }
        return this;
    } 
    @JsonProperty("n_type_eq")
    @JSONField(name = "n_type_eq")
    @ApiModelProperty("类型EQ")
	private String typeEQ;
	public MapDataSearchContext setTypeEQ(String typeEQ) {
        this.typeEQ = typeEQ;
        if(!ObjectUtils.isEmpty(this.typeEQ)){
            this.getSearchCond().eq("type", typeEQ);
        }
        return this;
    } 

    /**
	 * 启用快速搜索
	 */
	public void setQuery(String query)
	{
		this.query=query;
		if(!StringUtils.isEmpty(query)){
            this.getSearchCond().and( wrapper ->
                     wrapper.like("mapdataname", query)
            );
		}
	}
}