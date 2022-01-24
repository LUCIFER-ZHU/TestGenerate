package doc.core.sample.filter;

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
import doc.core.sample.domain.OrderRepData;
/**
 * 关系型数据实体[OrderRepData] 查询条件对象
 */
@Slf4j
@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
@ApiModel("订单报表数据")
public class OrderRepDataSearchContext extends QueryWrapperContext<OrderRepData> {

    @JsonProperty("n_orderrepdataid_eq")
    @JSONField(name = "n_orderrepdataid_eq")
    @ApiModelProperty("订单报表数据标识EQ")
	private String orderRepDataIdEQ;
	public OrderRepDataSearchContext setOrderRepDataIdEQ(String orderRepDataIdEQ) {
        this.orderRepDataIdEQ = orderRepDataIdEQ;
        if(!ObjectUtils.isEmpty(this.orderRepDataIdEQ)){
            this.getSearchCond().eq("orderrepdataid", orderRepDataIdEQ);
        }
        return this;
    }
                    
    @JsonProperty("n_orderrepdataname_like")
    @JSONField(name = "n_orderrepdataname_like")
    @ApiModelProperty("订单报表数据名称LIKE")
	private String orderRepDataNameLIKE;
	public OrderRepDataSearchContext setOrderRepDataNameLIKE(String orderRepDataNameLIKE) {
        this.orderRepDataNameLIKE = orderRepDataNameLIKE;
        if(!ObjectUtils.isEmpty(this.orderRepDataNameLIKE)){
            this.getSearchCond().like("orderrepdataname", orderRepDataNameLIKE);
        }
        return this;
    }
                    
    @JsonProperty("n_quarterval_eq")
    @JSONField(name = "n_quarterval_eq")
    @ApiModelProperty("季度EQ")
	private Integer quartervalEQ;
	public OrderRepDataSearchContext setQuartervalEQ(Integer quartervalEQ) {
        this.quartervalEQ = quartervalEQ;
        if(!ObjectUtils.isEmpty(this.quartervalEQ)){
            this.getSearchCond().eq("quarterval", quartervalEQ);
        }
        return this;
    }
                    
    @JsonProperty("n_yearval_eq")
    @JSONField(name = "n_yearval_eq")
    @ApiModelProperty("年份EQ")
	private Integer yearvalEQ;
	public OrderRepDataSearchContext setYearvalEQ(Integer yearvalEQ) {
        this.yearvalEQ = yearvalEQ;
        if(!ObjectUtils.isEmpty(this.yearvalEQ)){
            this.getSearchCond().eq("yearval", yearvalEQ);
        }
        return this;
    }
                    
    @JsonProperty("n_monthval_eq")
    @JSONField(name = "n_monthval_eq")
    @ApiModelProperty("月份EQ")
	private Integer monthvalEQ;
	public OrderRepDataSearchContext setMonthvalEQ(Integer monthvalEQ) {
        this.monthvalEQ = monthvalEQ;
        if(!ObjectUtils.isEmpty(this.monthvalEQ)){
            this.getSearchCond().eq("monthval", monthvalEQ);
        }
        return this;
    }
                    
    @JsonProperty("n_totalval_gtandeq")
    @JSONField(name = "n_totalval_gtandeq")
    @ApiModelProperty("合计GTANDEQ")
	private BigDecimal totalvalGTANDEQ;
	public OrderRepDataSearchContext setTotalvalGTANDEQ(BigDecimal totalvalGTANDEQ) {
        this.totalvalGTANDEQ = totalvalGTANDEQ;
        if(!ObjectUtils.isEmpty(this.totalvalGTANDEQ)){
            this.getSearchCond().ge("totalval", totalvalGTANDEQ);
        }
        return this;
    }
                    
    @JsonProperty("n_customername_like")
    @JSONField(name = "n_customername_like")
    @ApiModelProperty("客户名称LIKE")
	private String customerNameLIKE;
	public OrderRepDataSearchContext setCustomerNameLIKE(String customerNameLIKE) {
        this.customerNameLIKE = customerNameLIKE;
        if(!ObjectUtils.isEmpty(this.customerNameLIKE)){
            this.getSearchCond().like("customername", customerNameLIKE);
        }
        return this;
    }
                    
    @JsonProperty("n_state_eq")
    @JSONField(name = "n_state_eq")
    @ApiModelProperty("订单状态EQ")
	private String stateEQ;
	public OrderRepDataSearchContext setStateEQ(String stateEQ) {
        this.stateEQ = stateEQ;
        if(!ObjectUtils.isEmpty(this.stateEQ)){
            this.getSearchCond().eq("state", stateEQ);
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
                     wrapper.like("orderrepdataname", query)
            );
		}
	}
}