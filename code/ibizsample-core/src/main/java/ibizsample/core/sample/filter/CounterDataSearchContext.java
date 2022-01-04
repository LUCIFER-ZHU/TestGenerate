package ibizsample.core.sample.filter;

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
import ibizsample.core.sample.domain.CounterData;
/**
 * 关系型数据实体[CounterData] 查询条件对象
 */
@Slf4j
@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
@ApiModel("计数器数据")
public class CounterDataSearchContext extends QueryWrapperContext<CounterData> {

    @JsonProperty("n_counterdataname_like")
    @JSONField(name = "n_counterdataname_like")
    @ApiModelProperty("计数器数据名称LIKE")
	private String counterDataNameLIKE;
	public CounterDataSearchContext setCounterDataNameLIKE(String counterDataNameLIKE) {
        this.counterDataNameLIKE = counterDataNameLIKE;
        if(!ObjectUtils.isEmpty(this.counterDataNameLIKE)){
            this.getSearchCond().like("counterdataname", counterDataNameLIKE);
        }
        return this;
    } 
    @JsonProperty("n_counterdataid_eq")
    @JSONField(name = "n_counterdataid_eq")
    @ApiModelProperty("计数器数据标识EQ")
	private String counterDataIdEQ;
	public CounterDataSearchContext setCounterDataIdEQ(String counterDataIdEQ) {
        this.counterDataIdEQ = counterDataIdEQ;
        if(!ObjectUtils.isEmpty(this.counterDataIdEQ)){
            this.getSearchCond().eq("counterdataid", counterDataIdEQ);
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
                     wrapper.like("counterdataname", query)
            );
		}
	}
}