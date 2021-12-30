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
import org.springframework.util.ObjectUtils;
import org.springframework.util.DigestUtils;
import ibizsample.util.domain.EntityBase;
import ibizsample.util.annotation.DEField;
import ibizsample.util.enums.DEPredefinedFieldType;
import ibizsample.util.enums.DEFieldDefaultValueType;
import ibizsample.util.helper.DataObject;
import ibizsample.util.annotation.Audit;
import ibizsample.util.enums.DupCheck;
import ibizsample.util.domain.EntityMP;
import java.io.Serializable;
import lombok.*;
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
@TableName(value = "T_CUSTOMER", resultMap = "CustomerResultMap")
@ApiModel("客户")
public class Customer extends EntityMP implements Serializable
{

    /**
     * 客户标识
     */
    @TableId(value = "customerid" , type = IdType.ASSIGN_UUID)
    @DEField(name = "customerid" , isKeyField = true)
    @JsonProperty("customerid")
    @JSONField(name = "customerid")
    @ApiModelProperty("客户标识")
    private String customerId;

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
     * 客户名称
     */
    @TableField(value = "customername")
    @DEField(name = "customername")
    @JsonProperty("customername")
    @JSONField(name = "customername")
    @ApiModelProperty("客户名称")
    private String customerName;

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
     * 上级客户标识
     */
    @TableField(value = "pcustomerid")
    @DEField(name = "pcustomerid")
    @JsonProperty("pcustomerid")
    @JSONField(name = "pcustomerid")
    @ApiModelProperty("上级客户标识")
    private String pcustomerid;

    /**
     * 上级客户
     */
    @TableField(value = "pcustomername" , exist = false)
    @DEField(name = "pcustomername")
    @JsonProperty("pcustomername")
    @JSONField(name = "pcustomername")
    @ApiModelProperty("上级客户")
    private String pcustomername;

    /**
     * 省份标识
     */
    @TableField(value = "provinceid")
    @DEField(name = "provinceid")
    @JsonProperty("provinceid")
    @JSONField(name = "provinceid")
    @ApiModelProperty("省份标识")
    private String provinceId;

    /**
     * 市标识
     */
    @TableField(value = "cityid")
    @DEField(name = "cityid")
    @JsonProperty("cityid")
    @JSONField(name = "cityid")
    @ApiModelProperty("市标识")
    private String cityId;

    /**
     * 区标识
     */
    @TableField(value = "districtid")
    @DEField(name = "districtid")
    @JsonProperty("districtid")
    @JSONField(name = "districtid")
    @ApiModelProperty("区标识")
    private String districtId;

    /**
     * 省份
     */
    @TableField(value = "provincename" , exist = false)
    @DEField(name = "provincename")
    @JsonProperty("provincename")
    @JSONField(name = "provincename")
    @ApiModelProperty("省份")
    private String provinceName;

    /**
     * 市
     */
    @TableField(value = "cityname" , exist = false)
    @DEField(name = "cityname")
    @JsonProperty("cityname")
    @JSONField(name = "cityname")
    @ApiModelProperty("市")
    private String cityName;

    /**
     * 区/县
     */
    @TableField(value = "districtname" , exist = false)
    @DEField(name = "districtname")
    @JsonProperty("districtname")
    @JSONField(name = "districtname")
    @ApiModelProperty("区/县")
    private String districtName;

    /**
     * 类型
     */
    @TableField(value = "type")
    @DEField(name = "type" , dict = "CustomerType")
    @JsonProperty("type")
    @JSONField(name = "type")
    @ApiModelProperty("类型")
    private String type;

    /**
     * 备注
     */
    @TableField(value = "memo")
    @DEField(name = "memo")
    @JsonProperty("memo")
    @JSONField(name = "memo")
    @ApiModelProperty("备注")
    private String memo;

    /**
     * 街道
     */
    @TableField(value = "street")
    @DEField(name = "street")
    @JsonProperty("street")
    @JSONField(name = "street")
    @ApiModelProperty("街道")
    private String street;

    /**
     * 电话
     */
    @TableField(value = "phone")
    @DEField(name = "phone")
    @JsonProperty("phone")
    @JSONField(name = "phone")
    @ApiModelProperty("电话")
    private String phone;

    /**
     * 手机
     */
    @TableField(value = "mobile")
    @DEField(name = "mobile")
    @JsonProperty("mobile")
    @JSONField(name = "mobile")
    @ApiModelProperty("手机")
    private String mobile;

    /**
     * 电子邮箱
     */
    @TableField(value = "email")
    @DEField(name = "email")
    @JsonProperty("email")
    @JSONField(name = "email")
    @ApiModelProperty("电子邮箱")
    private String email;

    /**
     * 图像
     */
    @TableField(value = "image")
    @DEField(name = "image")
    @JsonProperty("image")
    @JSONField(name = "image")
    @ApiModelProperty("图像")
    private String image;

    /**
     * 网站地址
     */
    @TableField(value = "website")
    @DEField(name = "website")
    @JsonProperty("website")
    @JSONField(name = "website")
    @ApiModelProperty("网站地址")
    private String website;

    /**
     * 税号
     */
    @TableField(value = "taxno")
    @DEField(name = "taxno")
    @JsonProperty("taxno")
    @JSONField(name = "taxno")
    @ApiModelProperty("税号")
    private String taxNo;

    /**
     * 订单金额
     */
    @TableField(value = "orderamount")
    @DEField(name = "orderamount")
    @JsonProperty("orderamount")
    @JSONField(name = "orderamount")
    @ApiModelProperty("订单金额")
    private BigDecimal orderamount;

    /**
     * 回款金额
     */
    @TableField(value = "returnamount")
    @DEField(name = "returnamount")
    @JsonProperty("returnamount")
    @JSONField(name = "returnamount")
    @ApiModelProperty("回款金额")
    private BigDecimal returnamount;

    /**
     * 回款率
     */
    @TableField(value = "returnrate" , exist = false)
    @DEField(name = "returnrate")
    @JsonProperty("returnrate")
    @JSONField(name = "returnrate")
    @ApiModelProperty("回款率")
    private BigDecimal returnrate;


    /**
     * 市
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private ibizsample.core.sample.domain.City city;
    /**
     * 客户
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private ibizsample.core.sample.domain.Customer parentCustomer;
    /**
     * 区
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private ibizsample.core.sample.domain.District district;
    /**
     * 省份
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private ibizsample.core.sample.domain.Province province;




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
     * 设置 [客户名称]
     */
    public Customer setCustomerName(String customerName) {
        this.customerName = customerName;
        this.modify("customername", customerName);
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
     * 设置 [上级客户标识]
     */
    public Customer setPcustomerid(String pcustomerid) {
        this.pcustomerid = pcustomerid;
        this.modify("pcustomerid", pcustomerid);
        return this;
    }

    /**
     * 设置 [上级客户]
     */
    public Customer setPcustomername(String pcustomername) {
        this.pcustomername = pcustomername;
        this.modify("pcustomername", pcustomername);
        return this;
    }

    /**
     * 设置 [省份标识]
     */
    public Customer setProvinceId(String provinceId) {
        this.provinceId = provinceId;
        this.modify("provinceid", provinceId);
        return this;
    }

    /**
     * 设置 [市标识]
     */
    public Customer setCityId(String cityId) {
        this.cityId = cityId;
        this.modify("cityid", cityId);
        return this;
    }

    /**
     * 设置 [区标识]
     */
    public Customer setDistrictId(String districtId) {
        this.districtId = districtId;
        this.modify("districtid", districtId);
        return this;
    }

    /**
     * 设置 [省份]
     */
    public Customer setProvinceName(String provinceName) {
        this.provinceName = provinceName;
        this.modify("provincename", provinceName);
        return this;
    }

    /**
     * 设置 [市]
     */
    public Customer setCityName(String cityName) {
        this.cityName = cityName;
        this.modify("cityname", cityName);
        return this;
    }

    /**
     * 设置 [区/县]
     */
    public Customer setDistrictName(String districtName) {
        this.districtName = districtName;
        this.modify("districtname", districtName);
        return this;
    }

    /**
     * 设置 [类型]
     */
    public Customer setType(String type) {
        this.type = type;
        this.modify("type", type);
        return this;
    }

    /**
     * 设置 [备注]
     */
    public Customer setMemo(String memo) {
        this.memo = memo;
        this.modify("memo", memo);
        return this;
    }

    /**
     * 设置 [街道]
     */
    public Customer setStreet(String street) {
        this.street = street;
        this.modify("street", street);
        return this;
    }

    /**
     * 设置 [电话]
     */
    public Customer setPhone(String phone) {
        this.phone = phone;
        this.modify("phone", phone);
        return this;
    }

    /**
     * 设置 [手机]
     */
    public Customer setMobile(String mobile) {
        this.mobile = mobile;
        this.modify("mobile", mobile);
        return this;
    }

    /**
     * 设置 [电子邮箱]
     */
    public Customer setEmail(String email) {
        this.email = email;
        this.modify("email", email);
        return this;
    }

    /**
     * 设置 [图像]
     */
    public Customer setImage(String image) {
        this.image = image;
        this.modify("image", image);
        return this;
    }

    /**
     * 设置 [网站地址]
     */
    public Customer setWebsite(String website) {
        this.website = website;
        this.modify("website", website);
        return this;
    }

    /**
     * 设置 [税号]
     */
    public Customer setTaxNo(String taxNo) {
        this.taxNo = taxNo;
        this.modify("taxno", taxNo);
        return this;
    }

    /**
     * 设置 [订单金额]
     */
    public Customer setOrderamount(BigDecimal orderamount) {
        this.orderamount = orderamount;
        this.modify("orderamount", orderamount);
        return this;
    }

    /**
     * 设置 [回款金额]
     */
    public Customer setReturnamount(BigDecimal returnamount) {
        this.returnamount = returnamount;
        this.modify("returnamount", returnamount);
        return this;
    }

    /**
     * 设置 [回款率]
     */
    public Customer setReturnrate(BigDecimal returnrate) {
        this.returnrate = returnrate;
        this.modify("returnrate", returnrate);
        return this;
    }



}