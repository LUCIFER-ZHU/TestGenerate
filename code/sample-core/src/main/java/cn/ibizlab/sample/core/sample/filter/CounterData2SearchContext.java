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
import cn.ibizlab.sample.core.sample.domain.CounterData2;
/**
 * 关系型数据实体[CounterData2] 查询条件对象
 */
@Slf4j
@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
@ApiModel("计数器数据2")
public class CounterData2SearchContext extends QueryWrapperContext<CounterData2> {

    @JsonProperty("n_counterdata2name_like")
    @JSONField(name = "n_counterdata2name_like")
    @ApiModelProperty("计数器数据2名称LIKE")
	private String counterData2NameLIKE;
	public CounterData2SearchContext setCounterData2NameLIKE(String counterData2NameLIKE) {
        this.counterData2NameLIKE = counterData2NameLIKE;
        if(!ObjectUtils.isEmpty(this.counterData2NameLIKE)){
            this.getSearchCond().like("counterdata2name", counterData2NameLIKE);
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
                     wrapper.like("counterdata2name", query)
            );
		}
	}
}