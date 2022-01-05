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
 * 服务DTO对象[OrderRepDataDTO]
 */
@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
@ApiModel("订单报表数据")
public class OrderRepDataDTO extends DTOBase implements Serializable {

	private static final long serialVersionUID = 1L;

    /**
     * 订单金额
     */
    @JsonProperty("amount")
    @JSONField(name = "amount")
    @ApiModelProperty("订单金额")
    private BigDecimal amount;

    /**
     * 建立时间
     */
    @JsonProperty("createdate")
    @JSONField(name = "createdate")
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
     * 客户名称
     */
    @JsonProperty("customername")
    @JSONField(name = "customername")
    @ApiModelProperty("客户名称")
    private String customerName;

    /**
     * 组织部门标识
     */
    @JsonProperty("deptid")
    @JSONField(name = "deptid")
    @ApiModelProperty("组织部门标识")
    private String deptId;

    /**
     * 已完成金额
     */
    @JsonProperty("finishedval")
    @JSONField(name = "finishedval")
    @ApiModelProperty("已完成金额")
    private BigDecimal finishedval;

    /**
     * 月份
     */
    @JsonProperty("monthval")
    @JSONField(name = "monthval")
    @ApiModelProperty("月份")
    private Integer monthval;

    /**
     * 订单报表数据标识
     */
    @JsonProperty("orderrepdataid")
    @JSONField(name = "orderrepdataid")
    @ApiModelProperty("订单报表数据标识")
    private String orderRepDataId;

    /**
     * 订单报表数据名称
     */
    @JsonProperty("orderrepdataname")
    @JSONField(name = "orderrepdataname")
    @ApiModelProperty("订单报表数据名称")
    private String orderRepDataName;

    /**
     * 组织机构标识
     */
    @JsonProperty("orgid")
    @JSONField(name = "orgid")
    @ApiModelProperty("组织机构标识")
    private String orgId;

    /**
     * 待支付金额
     */
    @JsonProperty("payingval")
    @JSONField(name = "payingval")
    @ApiModelProperty("待支付金额")
    private BigDecimal payingVal;

    /**
     * 处理中金额
     */
    @JsonProperty("processingval")
    @JSONField(name = "processingval")
    @ApiModelProperty("处理中金额")
    private BigDecimal processingVal;

    /**
     * 季度
     */
    @JsonProperty("quarterval")
    @JSONField(name = "quarterval")
    @ApiModelProperty("季度")
    private Integer quarterval;

    /**
     * 订单状态
     */
    @JsonProperty("state")
    @JSONField(name = "state")
    @ApiModelProperty("订单状态")
    private String state;

    /**
     * 合计
     */
    @JsonProperty("totalval")
    @JSONField(name = "totalval")
    @ApiModelProperty("合计")
    private BigDecimal totalval;

    /**
     * 更新时间
     */
    @JsonProperty("updatedate")
    @JSONField(name = "updatedate")
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
     * 年份
     */
    @JsonProperty("yearval")
    @JSONField(name = "yearval")
    @ApiModelProperty("年份")
    private Integer yearval;


    /**
     * 设置 [订单金额]
     */
    public OrderRepDataDTO setAmount(BigDecimal amount) {
        this.amount = amount;
        this.modify("amount", amount);
        return this;
    }

    /**
     * 设置 [客户标识]
     */
    public OrderRepDataDTO setCustomerId(String customerId) {
        this.customerId = customerId;
        this.modify("customerid", customerId);
        return this;
    }

    /**
     * 设置 [客户名称]
     */
    public OrderRepDataDTO setCustomerName(String customerName) {
        this.customerName = customerName;
        this.modify("customername", customerName);
        return this;
    }

    /**
     * 设置 [已完成金额]
     */
    public OrderRepDataDTO setFinishedval(BigDecimal finishedval) {
        this.finishedval = finishedval;
        this.modify("finishedval", finishedval);
        return this;
    }

    /**
     * 设置 [月份]
     */
    public OrderRepDataDTO setMonthval(Integer monthval) {
        this.monthval = monthval;
        this.modify("monthval", monthval);
        return this;
    }

    /**
     * 设置 [订单报表数据名称]
     */
    public OrderRepDataDTO setOrderRepDataName(String orderRepDataName) {
        this.orderRepDataName = orderRepDataName;
        this.modify("orderrepdataname", orderRepDataName);
        return this;
    }

    /**
     * 设置 [待支付金额]
     */
    public OrderRepDataDTO setPayingVal(BigDecimal payingVal) {
        this.payingVal = payingVal;
        this.modify("payingval", payingVal);
        return this;
    }

    /**
     * 设置 [处理中金额]
     */
    public OrderRepDataDTO setProcessingVal(BigDecimal processingVal) {
        this.processingVal = processingVal;
        this.modify("processingval", processingVal);
        return this;
    }

    /**
     * 设置 [季度]
     */
    public OrderRepDataDTO setQuarterval(Integer quarterval) {
        this.quarterval = quarterval;
        this.modify("quarterval", quarterval);
        return this;
    }

    /**
     * 设置 [订单状态]
     */
    public OrderRepDataDTO setState(String state) {
        this.state = state;
        this.modify("state", state);
        return this;
    }

    /**
     * 设置 [合计]
     */
    public OrderRepDataDTO setTotalval(BigDecimal totalval) {
        this.totalval = totalval;
        this.modify("totalval", totalval);
        return this;
    }

    /**
     * 设置 [年份]
     */
    public OrderRepDataDTO setYearval(Integer yearval) {
        this.yearval = yearval;
        this.modify("yearval", yearval);
        return this;
    }


}
