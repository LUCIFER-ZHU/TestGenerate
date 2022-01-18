package cn.ibizlab.sample.core.sample.filter;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.HashMap;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
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
import cn.ibizlab.sample.core.sample.domain.LogicValidData;
/**
 * 关系型数据实体[LogicValidData] 查询条件对象
 */
@Slf4j
@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
@ApiModel("示例数据（启用逻辑删除）")
public class LogicValidDataSearchContext extends QueryWrapperContext<LogicValidData> {

    @JsonProperty("n_logicvaliddataname_like")
    @JSONField(name = "n_logicvaliddataname_like")
    @ApiModelProperty("名称LIKE")
	private String logicValidDataNameLIKE;
	public LogicValidDataSearchContext setLogicValidDataNameLIKE(String logicValidDataNameLIKE) {
        this.logicValidDataNameLIKE = logicValidDataNameLIKE;
        if(!ObjectUtils.isEmpty(this.logicValidDataNameLIKE)){
            this.getSearchCond().like("logicvaliddataname", logicValidDataNameLIKE);
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
                     wrapper.like("logicvaliddataname", query)
            );
		}
	}
}