package doc.sampleapi.dto;

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
 * 服务DTO对象[OrderDetailDTO]
 */
@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
@ApiModel("订单明细")
public class OrderDetailDTO extends DTOBase implements Serializable {

	private static final long serialVersionUID = 1L;

    /**
     * 小计
     */
    @JsonProperty("amount")
    @JSONField(name = "amount")
    @ApiModelProperty("小计")
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
     * 订单明细标识
     */
    @JsonProperty("orderdetailid")
    @JSONField(name = "orderdetailid")
    @ApiModelProperty("订单明细标识")
    private String orderDetailId;

    /**
     * 订单明细名称
     */
    @JsonProperty("orderdetailname")
    @JSONField(name = "orderdetailname")
    @ApiModelProperty("订单明细名称")
    private String orderDetailName;

    /**
     * 订单标识
     */
    @JsonProperty("orderid")
    @JSONField(name = "orderid")
    @ApiModelProperty("订单标识")
    private String orderId;

    /**
     * 单价
     */
    @JsonProperty("price")
    @JSONField(name = "price")
    @ApiModelProperty("单价")
    private BigDecimal price;

    /**
     * 产品标识
     */
    @JsonProperty("productid")
    @JSONField(name = "productid")
    @ApiModelProperty("产品标识")
    private String productId;

    /**
     * 产品
     */
    @JsonProperty("productname")
    @JSONField(name = "productname")
    @ApiModelProperty("产品")
    private String productName;

    /**
     * 数量
     */
    @JsonProperty("qty")
    @JSONField(name = "qty")
    @ApiModelProperty("数量")
    private Integer qty;

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
     * 设置 [小计]
     */
    public OrderDetailDTO setAmount(BigDecimal amount) {
        this.amount = amount;
        this.modify("amount", amount);
        return this;
    }

    /**
     * 设置 [订单明细名称]
     */
    public OrderDetailDTO setOrderDetailName(String orderDetailName) {
        this.orderDetailName = orderDetailName;
        this.modify("orderdetailname", orderDetailName);
        return this;
    }

    /**
     * 设置 [订单标识]
     */
    public OrderDetailDTO setOrderId(String orderId) {
        this.orderId = orderId;
        this.modify("orderid", orderId);
        return this;
    }

    /**
     * 设置 [单价]
     */
    public OrderDetailDTO setPrice(BigDecimal price) {
        this.price = price;
        this.modify("price", price);
        return this;
    }

    /**
     * 设置 [产品标识]
     */
    public OrderDetailDTO setProductId(String productId) {
        this.productId = productId;
        this.modify("productid", productId);
        return this;
    }

    /**
     * 设置 [产品]
     */
    public OrderDetailDTO setProductName(String productName) {
        this.productName = productName;
        this.modify("productname", productName);
        return this;
    }

    /**
     * 设置 [数量]
     */
    public OrderDetailDTO setQty(Integer qty) {
        this.qty = qty;
        this.modify("qty", qty);
        return this;
    }


}
