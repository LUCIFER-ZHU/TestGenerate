package doc.core.sample.domain;

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
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
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
import doc.core.sample.domain.Customer;
import doc.core.sample.domain.OrderDetail;

@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
@JsonIgnoreProperties(value = "handler")
@TableName(value = "T_ORDER", resultMap = "OrderResultMap")
@ApiModel("订单")
public class Order extends EntityMP implements Serializable
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
     * 订单号
     */
    @TableField(value = "ordername")
    @DEField(name = "ordername")
    @JsonProperty("ordername")
    @JSONField(name = "ordername")
    @ApiModelProperty("订单号")
    private String orderName;

    /**
     * 订单标识
     */
    @TableId(value = "orderid" , type = IdType.ASSIGN_UUID)
    @DEField(name = "orderid" , isKeyField = true)
    @JsonProperty("orderid")
    @JSONField(name = "orderid")
    @ApiModelProperty("订单标识")
    private String orderId;

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
     * 金额
     */
    @TableField(value = "amount")
    @DEField(name = "amount")
    @JsonProperty("amount")
    @JSONField(name = "amount")
    @ApiModelProperty("金额")
    private BigDecimal amount;

    /**
     * 订单时间
     */
    @TableField(value = "orderdate")
    @DEField(name = "orderdate")
    @JsonProperty("orderdate")
    @JsonFormat(pattern = "yyyy-MM-dd", locale = "zh", timezone = "GMT+8")
    @JSONField(name = "orderdate" , format = "yyyy-MM-dd")
    @ApiModelProperty("订单时间")
    private Timestamp orderDate;

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
     * 客户标识
     */
    @TableField(value = "customerid")
    @DEField(name = "customerid")
    @JsonProperty("customerid")
    @JSONField(name = "customerid")
    @ApiModelProperty("客户标识")
    private String customerId;

    /**
     * 客户
     */
    @TableField(value = "customername" , exist = false)
    @DEField(name = "customername")
    @JsonProperty("customername")
    @JSONField(name = "customername")
    @ApiModelProperty("客户")
    private String customerName;


    /**
     * 客户
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private Customer customer;

    /**
     * 订单明细
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    protected List<OrderDetail> orderDetails;


    /**
     * 设置 [订单号]
     */
    public Order setOrderName(String orderName) {
        this.orderName = orderName;
        this.modify("ordername", orderName);
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
     * 设置 [金额]
     */
    public Order setAmount(BigDecimal amount) {
        this.amount = amount;
        this.modify("amount", amount);
        return this;
    }

    /**
     * 设置 [订单时间]
     */
    public Order setOrderDate(Timestamp orderDate) {
        this.orderDate = orderDate;
        this.modify("orderdate", orderDate);
        return this;
    }
    /**
     * 格式化日期 [订单时间]
     */
    public String formatOrderDate() {
        if (this.orderDate == null) {
            return null;
        }
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        return sdf.format(orderDate);
    }

    /**
     * 设置 [订单状态]
     */
    public Order setState(String state) {
        this.state = state;
        this.modify("state", state);
        return this;
    }

    /**
     * 设置 [客户标识]
     */
    public Order setCustomerId(String customerId) {
        this.customerId = customerId;
        this.modify("customerid", customerId);
        return this;
    }

    /**
     * 设置 [客户]
     */
    public Order setCustomerName(String customerName) {
        this.customerName = customerName;
        this.modify("customername", customerName);
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
        this.reset("orderid");        
        return super.copyTo(targetEntity, bIncEmpty);
    }    
}