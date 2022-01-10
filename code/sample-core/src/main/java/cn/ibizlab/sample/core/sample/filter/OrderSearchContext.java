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
import cn.ibizlab.sample.core.sample.domain.Order;
/**
 * 关系型数据实体[Order] 查询条件对象
 */
@Slf4j
@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
@ApiModel("订单")
public class OrderSearchContext extends QueryWrapperContext<Order> {

    @JsonProperty("n_ordername_like")
    @JSONField(name = "n_ordername_like")
    @ApiModelProperty("订单号LIKE")
	private String orderNameLIKE;
	public OrderSearchContext setOrderNameLIKE(String orderNameLIKE) {
        this.orderNameLIKE = orderNameLIKE;
        if(!ObjectUtils.isEmpty(this.orderNameLIKE)){
            this.getSearchCond().like("ordername", orderNameLIKE);
        }
        return this;
    } 
    @JsonProperty("f_orderdate_datediffnow2_ltandeq")
    @JsonFormat(pattern = "yyyy-MM-dd", locale = "zh", timezone = "GMT+8")
    @JSONField(name = "f_orderdate_datediffnow2_ltandeq" , format = "yyyy-MM-dd")
    @ApiModelProperty("订单时间LTANDEQ")
	private Timestamp orderDateLTANDEQ;
	public OrderSearchContext setOrderDateLTANDEQ(Timestamp orderDateLTANDEQ) {
        this.orderDateLTANDEQ = orderDateLTANDEQ;
        if(!ObjectUtils.isEmpty(this.orderDateLTANDEQ)){
            this.getSearchCond().le("orderdate", orderDateLTANDEQ);
        }
        return this;
    } 
    @JsonProperty("f_orderdate_datediffnow_ltandeq")
    @JsonFormat(pattern = "yyyy-MM-dd", locale = "zh", timezone = "GMT+8")
    @JSONField(name = "f_orderdate_datediffnow_ltandeq" , format = "yyyy-MM-dd")
    @ApiModelProperty("订单时间LTANDEQ")
	private Timestamp orderDateLTANDEQ;
	public OrderSearchContext setOrderDateLTANDEQ(Timestamp orderDateLTANDEQ) {
        this.orderDateLTANDEQ = orderDateLTANDEQ;
        if(!ObjectUtils.isEmpty(this.orderDateLTANDEQ)){
            this.getSearchCond().le("orderdate", orderDateLTANDEQ);
        }
        return this;
    } 
    @JsonProperty("n_orderdate_gtandeq")
    @JsonFormat(pattern = "yyyy-MM-dd", locale = "zh", timezone = "GMT+8")
    @JSONField(name = "n_orderdate_gtandeq" , format = "yyyy-MM-dd")
    @ApiModelProperty("订单时间GTANDEQ")
	private Timestamp orderDateGTANDEQ;
	public OrderSearchContext setOrderDateGTANDEQ(Timestamp orderDateGTANDEQ) {
        this.orderDateGTANDEQ = orderDateGTANDEQ;
        if(!ObjectUtils.isEmpty(this.orderDateGTANDEQ)){
            this.getSearchCond().ge("orderdate", orderDateGTANDEQ);
        }
        return this;
    } 
    @JsonProperty("n_orderdate_ltandeq")
    @JsonFormat(pattern = "yyyy-MM-dd", locale = "zh", timezone = "GMT+8")
    @JSONField(name = "n_orderdate_ltandeq" , format = "yyyy-MM-dd")
    @ApiModelProperty("订单时间LTANDEQ")
	private Timestamp orderDateLTANDEQ;
	public OrderSearchContext setOrderDateLTANDEQ(Timestamp orderDateLTANDEQ) {
        this.orderDateLTANDEQ = orderDateLTANDEQ;
        if(!ObjectUtils.isEmpty(this.orderDateLTANDEQ)){
            this.getSearchCond().le("orderdate", orderDateLTANDEQ);
        }
        return this;
    } 
    @JsonProperty("n_state_eq")
    @JSONField(name = "n_state_eq")
    @ApiModelProperty("订单状态EQ")
	private String stateEQ;
	public OrderSearchContext setStateEQ(String stateEQ) {
        this.stateEQ = stateEQ;
        if(!ObjectUtils.isEmpty(this.stateEQ)){
            this.getSearchCond().eq("state", stateEQ);
        }
        return this;
    } 
    @JsonProperty("n_customerid_eq")
    @JSONField(name = "n_customerid_eq")
    @ApiModelProperty("客户标识EQ")
	private String customerIdEQ;
	public OrderSearchContext setCustomerIdEQ(String customerIdEQ) {
        this.customerIdEQ = customerIdEQ;
        if(!ObjectUtils.isEmpty(this.customerIdEQ)){
            this.getSearchCond().eq("customerid", customerIdEQ);
        }
        return this;
    } 
    @JsonProperty("n_customername_eq")
    @JSONField(name = "n_customername_eq")
    @ApiModelProperty("客户EQ")
	private String customerNameEQ;
	public OrderSearchContext setCustomerNameEQ(String customerNameEQ) {
        this.customerNameEQ = customerNameEQ;
        if(!ObjectUtils.isEmpty(this.customerNameEQ)){
            this.getSearchCond().eq("customername", customerNameEQ);
        }
        return this;
    } 
    @JsonProperty("n_customername_like")
    @JSONField(name = "n_customername_like")
    @ApiModelProperty("客户LIKE")
	private String customerNameLIKE;
	public OrderSearchContext setCustomerNameLIKE(String customerNameLIKE) {
        this.customerNameLIKE = customerNameLIKE;
        if(!ObjectUtils.isEmpty(this.customerNameLIKE)){
            this.getSearchCond().like("customername", customerNameLIKE);
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
                     wrapper.like("ordername", query)
            );
		}
	}
}