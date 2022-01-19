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
 * 服务DTO对象[CustomerDTO]
 */
@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
@ApiModel("客户")
public class CustomerDTO extends DTOBase implements Serializable {

	private static final long serialVersionUID = 1L;

    /**
     * 市标识
     */
    @JsonProperty("cityid")
    @JSONField(name = "cityid")
    @ApiModelProperty("市标识")
    private String cityId;

    /**
     * 市
     */
    @JsonProperty("cityname")
    @JSONField(name = "cityname")
    @ApiModelProperty("市")
    private String cityName;

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
     * 客户名称
     */
    @JsonProperty("customername")
    @JSONField(name = "customername")
    @ApiModelProperty("客户名称")
    private String customerName;

    /**
     * 区标识
     */
    @JsonProperty("districtid")
    @JSONField(name = "districtid")
    @ApiModelProperty("区标识")
    private String districtId;

    /**
     * 区/县
     */
    @JsonProperty("districtname")
    @JSONField(name = "districtname")
    @ApiModelProperty("区/县")
    private String districtName;

    /**
     * 电子邮箱
     */
    @JsonProperty("email")
    @JSONField(name = "email")
    @ApiModelProperty("电子邮箱")
    private String email;

    /**
     * 图像
     */
    @JsonProperty("image")
    @JSONField(name = "image")
    @ApiModelProperty("图像")
    private String image;

    /**
     * 备注
     */
    @JsonProperty("memo")
    @JSONField(name = "memo")
    @ApiModelProperty("备注")
    private String memo;

    /**
     * 手机
     */
    @JsonProperty("mobile")
    @JSONField(name = "mobile")
    @ApiModelProperty("手机")
    private String mobile;

    /**
     * 订单金额
     */
    @JsonProperty("orderamount")
    @JSONField(name = "orderamount")
    @ApiModelProperty("订单金额")
    private BigDecimal orderamount;

    /**
     * 上级客户标识
     */
    @JsonProperty("pcustomerid")
    @JSONField(name = "pcustomerid")
    @ApiModelProperty("上级客户标识")
    private String pcustomerid;

    /**
     * 上级客户
     */
    @JsonProperty("pcustomername")
    @JSONField(name = "pcustomername")
    @ApiModelProperty("上级客户")
    private String pcustomername;

    /**
     * 电话
     */
    @JsonProperty("phone")
    @JSONField(name = "phone")
    @ApiModelProperty("电话")
    private String phone;

    /**
     * 省份标识
     */
    @JsonProperty("provinceid")
    @JSONField(name = "provinceid")
    @ApiModelProperty("省份标识")
    private String provinceId;

    /**
     * 省份
     */
    @JsonProperty("provincename")
    @JSONField(name = "provincename")
    @ApiModelProperty("省份")
    private String provinceName;

    /**
     * 回款金额
     */
    @JsonProperty("returnamount")
    @JSONField(name = "returnamount")
    @ApiModelProperty("回款金额")
    private BigDecimal returnamount;

    /**
     * 回款率
     */
    @JsonProperty("returnrate")
    @JSONField(name = "returnrate")
    @ApiModelProperty("回款率")
    private BigDecimal returnrate;

    /**
     * 街道
     */
    @JsonProperty("street")
    @JSONField(name = "street")
    @ApiModelProperty("街道")
    private String street;

    /**
     * 税号
     */
    @JsonProperty("taxno")
    @JSONField(name = "taxno")
    @ApiModelProperty("税号")
    private String taxNo;

    /**
     * 类型
     */
    @JsonProperty("type")
    @JSONField(name = "type")
    @ApiModelProperty("类型")
    private String type;

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
     * 网站地址
     */
    @JsonProperty("website")
    @JSONField(name = "website")
    @ApiModelProperty("网站地址")
    private String website;


    /**
     * 设置 [市标识]
     */
    public CustomerDTO setCityId(String cityId) {
        this.cityId = cityId;
        this.modify("cityid", cityId);
        return this;
    }

    /**
     * 设置 [市]
     */
    public CustomerDTO setCityName(String cityName) {
        this.cityName = cityName;
        this.modify("cityname", cityName);
        return this;
    }

    /**
     * 设置 [客户名称]
     */
    public CustomerDTO setCustomerName(String customerName) {
        this.customerName = customerName;
        this.modify("customername", customerName);
        return this;
    }

    /**
     * 设置 [区标识]
     */
    public CustomerDTO setDistrictId(String districtId) {
        this.districtId = districtId;
        this.modify("districtid", districtId);
        return this;
    }

    /**
     * 设置 [区/县]
     */
    public CustomerDTO setDistrictName(String districtName) {
        this.districtName = districtName;
        this.modify("districtname", districtName);
        return this;
    }

    /**
     * 设置 [电子邮箱]
     */
    public CustomerDTO setEmail(String email) {
        this.email = email;
        this.modify("email", email);
        return this;
    }

    /**
     * 设置 [图像]
     */
    public CustomerDTO setImage(String image) {
        this.image = image;
        this.modify("image", image);
        return this;
    }

    /**
     * 设置 [备注]
     */
    public CustomerDTO setMemo(String memo) {
        this.memo = memo;
        this.modify("memo", memo);
        return this;
    }

    /**
     * 设置 [手机]
     */
    public CustomerDTO setMobile(String mobile) {
        this.mobile = mobile;
        this.modify("mobile", mobile);
        return this;
    }

    /**
     * 设置 [订单金额]
     */
    public CustomerDTO setOrderamount(BigDecimal orderamount) {
        this.orderamount = orderamount;
        this.modify("orderamount", orderamount);
        return this;
    }

    /**
     * 设置 [上级客户标识]
     */
    public CustomerDTO setPcustomerid(String pcustomerid) {
        this.pcustomerid = pcustomerid;
        this.modify("pcustomerid", pcustomerid);
        return this;
    }

    /**
     * 设置 [上级客户]
     */
    public CustomerDTO setPcustomername(String pcustomername) {
        this.pcustomername = pcustomername;
        this.modify("pcustomername", pcustomername);
        return this;
    }

    /**
     * 设置 [电话]
     */
    public CustomerDTO setPhone(String phone) {
        this.phone = phone;
        this.modify("phone", phone);
        return this;
    }

    /**
     * 设置 [省份标识]
     */
    public CustomerDTO setProvinceId(String provinceId) {
        this.provinceId = provinceId;
        this.modify("provinceid", provinceId);
        return this;
    }

    /**
     * 设置 [省份]
     */
    public CustomerDTO setProvinceName(String provinceName) {
        this.provinceName = provinceName;
        this.modify("provincename", provinceName);
        return this;
    }

    /**
     * 设置 [回款金额]
     */
    public CustomerDTO setReturnamount(BigDecimal returnamount) {
        this.returnamount = returnamount;
        this.modify("returnamount", returnamount);
        return this;
    }

    /**
     * 设置 [回款率]
     */
    public CustomerDTO setReturnrate(BigDecimal returnrate) {
        this.returnrate = returnrate;
        this.modify("returnrate", returnrate);
        return this;
    }

    /**
     * 设置 [街道]
     */
    public CustomerDTO setStreet(String street) {
        this.street = street;
        this.modify("street", street);
        return this;
    }

    /**
     * 设置 [税号]
     */
    public CustomerDTO setTaxNo(String taxNo) {
        this.taxNo = taxNo;
        this.modify("taxno", taxNo);
        return this;
    }

    /**
     * 设置 [类型]
     */
    public CustomerDTO setType(String type) {
        this.type = type;
        this.modify("type", type);
        return this;
    }

    /**
     * 设置 [网站地址]
     */
    public CustomerDTO setWebsite(String website) {
        this.website = website;
        this.modify("website", website);
        return this;
    }


}
