package ibizsample.core.sample.domain;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.HashMap;
import java.math.BigInteger;
import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import com.alibaba.fastjson.annotation.JSONField;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import org.springframework.util.ObjectUtils;
import org.springframework.util.DigestUtils;
import org.springframework.util.Assert;
import cn.ibizlab.util.domain.EntityBase;
import cn.ibizlab.util.annotation.DEField;
import cn.ibizlab.util.enums.DEPredefinedFieldType;
import cn.ibizlab.util.enums.DEFieldDefaultValueType;
import cn.ibizlab.util.helper.DataObject;
import cn.ibizlab.util.annotation.Audit;
import cn.ibizlab.util.enums.DupCheck;
import cn.ibizlab.util.domain.EntityMP;
import java.io.Serializable;
import lombok.*;
import lombok.experimental.Accessors;
import org.springframework.data.annotation.Transient;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.baomidou.mybatisplus.annotation.*;
import com.baomidou.mybatisplus.core.toolkit.IdWorker;

@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
@JsonIgnoreProperties(value = "handler")
@TableName(value = "T_ORDERREPDATA", resultMap = "OrderRepDataResultMap")
@ApiModel("订单报表数据")
public class OrderRepData extends EntityMP implements Serializable
{

    /**
     * 建立人
     */
    @TableField(value = "createman" , fill = FieldFill.INSERT)
    @DEField(name = "createman" , preType = DEPredefinedFieldType.CREATEMAN , dict = "SysOperator")
    @JsonProperty("createman")
    @JSONField(name = "createman")
    @ApiModelProperty("建立人")
    private String createMan;

    /**
     * 订单报表数据标识
     */
    @TableId(value = "orderrepdataid" , type = IdType.ASSIGN_UUID)
    @DEField(name = "orderrepdataid" , isKeyField = true)
    @JsonProperty("orderrepdataid")
    @JSONField(name = "orderrepdataid")
    @ApiModelProperty("订单报表数据标识")
    private String orderRepDataId;

    /**
     * 建立时间
     */
    @TableField(value = "createdate" , fill = FieldFill.INSERT)
    @DEField(name = "createdate" , preType = DEPredefinedFieldType.CREATEDATE)
    @JsonProperty("createdate")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", locale = "zh", timezone = "GMT+8")
    @JSONField(name = "createdate" , format = "yyyy-MM-dd HH:mm:ss")
    @ApiModelProperty("建立时间")
    private Timestamp createDate;

    /**
     * 订单报表数据名称
     */
    @TableField(value = "orderrepdataname")
    @DEField(name = "orderrepdataname")
    @JsonProperty("orderrepdataname")
    @JSONField(name = "orderrepdataname")
    @ApiModelProperty("订单报表数据名称")
    private String orderRepDataName;

    /**
     * 更新人
     */
    @TableField(value = "updateman")
    @DEField(name = "updateman" , preType = DEPredefinedFieldType.UPDATEMAN , dict = "SysOperator")
    @JsonProperty("updateman")
    @JSONField(name = "updateman")
    @ApiModelProperty("更新人")
    private String updateMan;

    /**
     * 更新时间
     */
    @TableField(value = "updatedate")
    @DEField(name = "updatedate" , preType = DEPredefinedFieldType.UPDATEDATE)
    @JsonProperty("updatedate")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", locale = "zh", timezone = "GMT+8")
    @JSONField(name = "updatedate" , format = "yyyy-MM-dd HH:mm:ss")
    @ApiModelProperty("更新时间")
    private Timestamp updateDate;

    /**
     * 组织部门标识
     */
    @TableField(value = "deptid")
    @DEField(name = "deptid" , preType = DEPredefinedFieldType.ORGSECTORID)
    @JsonProperty("deptid")
    @JSONField(name = "deptid")
    @ApiModelProperty("组织部门标识")
    private String deptId;

    /**
     * 组织机构标识
     */
    @TableField(value = "orgid")
    @DEField(name = "orgid" , preType = DEPredefinedFieldType.ORGID)
    @JsonProperty("orgid")
    @JSONField(name = "orgid")
    @ApiModelProperty("组织机构标识")
    private String orgId;

    /**
     * 季度
     */
    @TableField(value = "quarterval")
    @DEField(name = "quarterval")
    @JsonProperty("quarterval")
    @JSONField(name = "quarterval")
    @ApiModelProperty("季度")
    private Integer quarterval;

    /**
     * 年份
     */
    @TableField(value = "yearval")
    @DEField(name = "yearval")
    @JsonProperty("yearval")
    @JSONField(name = "yearval")
    @ApiModelProperty("年份")
    private Integer yearval;

    /**
     * 月份
     */
    @TableField(value = "monthval")
    @DEField(name = "monthval")
    @JsonProperty("monthval")
    @JSONField(name = "monthval")
    @ApiModelProperty("月份")
    private Integer monthval;

    /**
     * 合计
     */
    @TableField(value = "totalval")
    @DEField(name = "totalval")
    @JsonProperty("totalval")
    @JSONField(name = "totalval")
    @ApiModelProperty("合计")
    private BigDecimal totalval;

    /**
     * 客户标识
     */
    @TableField(value = "customerid")
    @DEField(name = "customerid")
    @JsonProperty("customerid")
    @JSONField(name = "customerid")
    @ApiModelProperty("客户标识")
    private String customerId;

    /**
     * 客户名称
     */
    @TableField(value = "customername")
    @DEField(name = "customername")
    @JsonProperty("customername")
    @JSONField(name = "customername")
    @ApiModelProperty("客户名称")
    private String customerName;

    /**
     * 已完成金额
     */
    @TableField(value = "finishedval")
    @DEField(name = "finishedval")
    @JsonProperty("finishedval")
    @JSONField(name = "finishedval")
    @ApiModelProperty("已完成金额")
    private BigDecimal finishedval;

    /**
     * 处理中金额
     */
    @TableField(value = "processingval")
    @DEField(name = "processingval")
    @JsonProperty("processingval")
    @JSONField(name = "processingval")
    @ApiModelProperty("处理中金额")
    private BigDecimal processingVal;

    /**
     * 待支付金额
     */
    @TableField(value = "payingval")
    @DEField(name = "payingval")
    @JsonProperty("payingval")
    @JSONField(name = "payingval")
    @ApiModelProperty("待支付金额")
    private BigDecimal payingVal;

    /**
     * 订单金额
     */
    @TableField(value = "amount")
    @DEField(name = "amount")
    @JsonProperty("amount")
    @JSONField(name = "amount")
    @ApiModelProperty("订单金额")
    private BigDecimal amount;

    /**
     * 订单状态
     */
    @TableField(value = "state")
    @DEField(name = "state" , defaultValue = "10" , dict = "OrderState")
    @JsonProperty("state")
    @JSONField(name = "state")
    @ApiModelProperty("订单状态")
    private String state;






    /**
     * 格式化日期 [建立时间]
     */
    public String formatCreateDate() {
        if (this.createDate == null) {
            return null;
        }
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        return sdf.format(createDate);
    }

    /**
     * 设置 [订单报表数据名称]
     */
    public OrderRepData setOrderRepDataName(String orderRepDataName) {
        this.orderRepDataName = orderRepDataName;
        this.modify("orderrepdataname", orderRepDataName);
        return this;
    }


    /**
     * 格式化日期 [更新时间]
     */
    public String formatUpdateDate() {
        if (this.updateDate == null) {
            return null;
        }
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        return sdf.format(updateDate);
    }



    /**
     * 设置 [季度]
     */
    public OrderRepData setQuarterval(Integer quarterval) {
        this.quarterval = quarterval;
        this.modify("quarterval", quarterval);
        return this;
    }

    /**
     * 设置 [年份]
     */
    public OrderRepData setYearval(Integer yearval) {
        this.yearval = yearval;
        this.modify("yearval", yearval);
        return this;
    }

    /**
     * 设置 [月份]
     */
    public OrderRepData setMonthval(Integer monthval) {
        this.monthval = monthval;
        this.modify("monthval", monthval);
        return this;
    }

    /**
     * 设置 [合计]
     */
    public OrderRepData setTotalval(BigDecimal totalval) {
        this.totalval = totalval;
        this.modify("totalval", totalval);
        return this;
    }

    /**
     * 设置 [客户标识]
     */
    public OrderRepData setCustomerId(String customerId) {
        this.customerId = customerId;
        this.modify("customerid", customerId);
        return this;
    }

    /**
     * 设置 [客户名称]
     */
    public OrderRepData setCustomerName(String customerName) {
        this.customerName = customerName;
        this.modify("customername", customerName);
        return this;
    }

    /**
     * 设置 [已完成金额]
     */
    public OrderRepData setFinishedval(BigDecimal finishedval) {
        this.finishedval = finishedval;
        this.modify("finishedval", finishedval);
        return this;
    }

    /**
     * 设置 [处理中金额]
     */
    public OrderRepData setProcessingVal(BigDecimal processingVal) {
        this.processingVal = processingVal;
        this.modify("processingval", processingVal);
        return this;
    }

    /**
     * 设置 [待支付金额]
     */
    public OrderRepData setPayingVal(BigDecimal payingVal) {
        this.payingVal = payingVal;
        this.modify("payingval", payingVal);
        return this;
    }

    /**
     * 设置 [订单金额]
     */
    public OrderRepData setAmount(BigDecimal amount) {
        this.amount = amount;
        this.modify("amount", amount);
        return this;
    }

    /**
     * 设置 [订单状态]
     */
    public OrderRepData setState(String state) {
        this.state = state;
        this.modify("state", state);
        return this;
    }





    /**
     * 复制当前对象数据到目标对象(粘贴重置)
     * @param targetEntity 目标数据对象
     * @param bIncEmpty  是否包括空值
     * @param <T>
     * @return
     */
    @Override
    public <T> T copyTo(T targetEntity, boolean bIncEmpty) {
        this.reset("orderrepdataid");        
        return super.copyTo(targetEntity, bIncEmpty);
    }    
}