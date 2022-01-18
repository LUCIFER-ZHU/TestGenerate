package cn.ibizlab.sample.sampleapi.dto;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.math.BigInteger;
import java.util.Map;
import java.util.HashMap;
import java.io.Serializable;
import java.math.BigDecimal;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import com.alibaba.fastjson.annotation.JSONField;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import cn.ibizlab.util.domain.DTOBase;
import cn.ibizlab.util.domain.DTOClient;
import lombok.*;
import lombok.experimental.Accessors;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

/**
 * 服务DTO对象[OrderDTO]
 */
@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
@ApiModel("订单")
public class OrderDTO extends DTOBase implements Serializable {

	private static final long serialVersionUID = 1L;

    /**
     * 金额
     */
    @JsonProperty("amount")
    @JSONField(name = "amount")
    @ApiModelProperty("金额")
    private BigDecimal amount;

    /**
     * 建立时间
     */
    @JsonProperty("createdate")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", locale = "zh", timezone = "GMT+8")
    @JSONField(name = "createdate" , format = "yyyy-MM-dd HH:mm:ss")
    @ApiModelProperty("建立时间")
    private Timestamp createDate;

    /**
     * 建立人
     */
    @JsonProperty("createman")
    @JSONField(name = "createman")
    @ApiModelProperty("建立人")
    private String createMan;

    /**
     * 客户标识
     */
    @JsonProperty("customerid")
    @JSONField(name = "customerid")
    @ApiModelProperty("客户标识")
    private String customerId;

    /**
     * 客户
     */
    @JsonProperty("customername")
    @JSONField(name = "customername")
    @ApiModelProperty("客户")
    private String customerName;

    /**
     * 订单时间
     */
    @JsonProperty("orderdate")
    @JsonFormat(pattern = "yyyy-MM-dd", locale = "zh", timezone = "GMT+8")
    @JSONField(name = "orderdate" , format = "yyyy-MM-dd")
    @ApiModelProperty("订单时间")
    private Timestamp orderDate;

    /**
     * 订单标识
     */
    @JsonProperty("orderid")
    @JSONField(name = "orderid")
    @ApiModelProperty("订单标识")
    private String orderId;

    /**
     * 订单号
     */
    @JsonProperty("ordername")
    @JSONField(name = "ordername")
    @ApiModelProperty("订单号")
    private String orderName;

    /**
     * 订单状态
     */
    @JsonProperty("state")
    @JSONField(name = "state")
    @ApiModelProperty("订单状态")
    private String state;

    /**
     * 更新时间
     */
    @JsonProperty("updatedate")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", locale = "zh", timezone = "GMT+8")
    @JSONField(name = "updatedate" , format = "yyyy-MM-dd HH:mm:ss")
    @ApiModelProperty("更新时间")
    private Timestamp updateDate;

    /**
     * 更新人
     */
    @JsonProperty("updateman")
    @JSONField(name = "updateman")
    @ApiModelProperty("更新人")
    private String updateMan;

    /**
     * 订单明细
     */
    @JsonProperty("orderdetails")
    @JSONField(name = "orderdetails")
    @ApiModelProperty("订单明细")
    private List<OrderDetailDTO> orderDetails;


    /**
     * 设置 [金额]
     */
    public OrderDTO setAmount(BigDecimal amount) {
        this.amount = amount;
        this.modify("amount", amount);
        return this;
    }

    /**
     * 设置 [客户标识]
     */
    public OrderDTO setCustomerId(String customerId) {
        this.customerId = customerId;
        this.modify("customerid", customerId);
        return this;
    }

    /**
     * 设置 [客户]
     */
    public OrderDTO setCustomerName(String customerName) {
        this.customerName = customerName;
        this.modify("customername", customerName);
        return this;
    }

    /**
     * 设置 [订单时间]
     */
    public OrderDTO setOrderDate(Timestamp orderDate) {
        this.orderDate = orderDate;
        this.modify("orderdate", orderDate);
        return this;
    }

    /**
     * 设置 [订单号]
     */
    public OrderDTO setOrderName(String orderName) {
        this.orderName = orderName;
        this.modify("ordername", orderName);
        return this;
    }

    /**
     * 设置 [订单状态]
     */
    public OrderDTO setState(String state) {
        this.state = state;
        this.modify("state", state);
        return this;
    }

    /**
     * 设置 [订单明细]
     */
    public OrderDTO setOrderDetails(List<OrderDetailDTO> orderDetails) {
        this.orderDetails = orderDetails;
        this.modify("orderdetails", orderDetails);
        return this;
    }


}
