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
import cn.ibizlab.sample.core.sample.domain.OrderDetail;
/**
 * 关系型数据实体[OrderDetail] 查询条件对象
 */
@Slf4j
@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
@ApiModel("订单明细")
public class OrderDetailSearchContext extends QueryWrapperContext<OrderDetail> {

    @JsonProperty("n_orderdetailname_like")
    @JSONField(name = "n_orderdetailname_like")
    @ApiModelProperty("订单明细名称LIKE")
	private String orderDetailNameLIKE;
	public OrderDetailSearchContext setOrderDetailNameLIKE(String orderDetailNameLIKE) {
        this.orderDetailNameLIKE = orderDetailNameLIKE;
        if(!ObjectUtils.isEmpty(this.orderDetailNameLIKE)){
            this.getSearchCond().like("orderdetailname", orderDetailNameLIKE);
        }
        return this;
    } 
    @JsonProperty("n_orderid_eq")
    @JSONField(name = "n_orderid_eq")
    @ApiModelProperty("订单标识EQ")
	private String orderIdEQ;
	public OrderDetailSearchContext setOrderIdEQ(String orderIdEQ) {
        this.orderIdEQ = orderIdEQ;
        if(!ObjectUtils.isEmpty(this.orderIdEQ)){
            this.getSearchCond().eq("orderid", orderIdEQ);
        }
        return this;
    } 
    @JsonProperty("n_productid_eq")
    @JSONField(name = "n_productid_eq")
    @ApiModelProperty("产品标识EQ")
	private String productIdEQ;
	public OrderDetailSearchContext setProductIdEQ(String productIdEQ) {
        this.productIdEQ = productIdEQ;
        if(!ObjectUtils.isEmpty(this.productIdEQ)){
            this.getSearchCond().eq("productid", productIdEQ);
        }
        return this;
    } 
    @JsonProperty("n_productname_eq")
    @JSONField(name = "n_productname_eq")
    @ApiModelProperty("产品EQ")
	private String productNameEQ;
	public OrderDetailSearchContext setProductNameEQ(String productNameEQ) {
        this.productNameEQ = productNameEQ;
        if(!ObjectUtils.isEmpty(this.productNameEQ)){
            this.getSearchCond().eq("productname", productNameEQ);
        }
        return this;
    } 
    @JsonProperty("n_productname_like")
    @JSONField(name = "n_productname_like")
    @ApiModelProperty("产品LIKE")
	private String productNameLIKE;
	public OrderDetailSearchContext setProductNameLIKE(String productNameLIKE) {
        this.productNameLIKE = productNameLIKE;
        if(!ObjectUtils.isEmpty(this.productNameLIKE)){
            this.getSearchCond().like("productname", productNameLIKE);
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
                     wrapper.like("orderdetailname", query)
            );
		}
	}
}