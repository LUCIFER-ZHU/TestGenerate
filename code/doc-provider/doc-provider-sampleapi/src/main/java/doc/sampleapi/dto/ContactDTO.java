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
 * 服务DTO对象[ContactDTO]
 */
@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
@ApiModel("联系人")
public class ContactDTO extends DTOBase implements Serializable {

	private static final long serialVersionUID = 1L;

    /**
     * 联系人标识
     */
    @JsonProperty("contactid")
    @JSONField(name = "contactid")
    @ApiModelProperty("联系人标识")
    private String contactId;

    /**
     * 联系人姓名
     */
    @JsonProperty("contactname")
    @JSONField(name = "contactname")
    @ApiModelProperty("联系人姓名")
    private String contactName;

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
     * 组织部门标识
     */
    @JsonProperty("deptid")
    @JSONField(name = "deptid")
    @ApiModelProperty("组织部门标识")
    private String deptId;

    /**
     * 电子邮箱
     */
    @JsonProperty("email")
    @JSONField(name = "email")
    @ApiModelProperty("电子邮箱")
    private String email;

    /**
     * 头像
     */
    @JsonProperty("image")
    @JSONField(name = "image")
    @ApiModelProperty("头像")
    private String image;

    /**
     * 手机
     */
    @JsonProperty("mobile")
    @JSONField(name = "mobile")
    @ApiModelProperty("手机")
    private String mobile;

    /**
     * 组织机构标识
     */
    @JsonProperty("orgid")
    @JSONField(name = "orgid")
    @ApiModelProperty("组织机构标识")
    private String orgId;

    /**
     * 电话
     */
    @JsonProperty("phone")
    @JSONField(name = "phone")
    @ApiModelProperty("电话")
    private String phone;

    /**
     * 工作岗位
     */
    @JsonProperty("post")
    @JSONField(name = "post")
    @ApiModelProperty("工作岗位")
    private String post;

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
     * 设置 [联系人姓名]
     */
    public ContactDTO setContactName(String contactName) {
        this.contactName = contactName;
        this.modify("contactname", contactName);
        return this;
    }

    /**
     * 设置 [客户标识]
     */
    public ContactDTO setCustomerId(String customerId) {
        this.customerId = customerId;
        this.modify("customerid", customerId);
        return this;
    }

    /**
     * 设置 [客户名称]
     */
    public ContactDTO setCustomerName(String customerName) {
        this.customerName = customerName;
        this.modify("customername", customerName);
        return this;
    }

    /**
     * 设置 [电子邮箱]
     */
    public ContactDTO setEmail(String email) {
        this.email = email;
        this.modify("email", email);
        return this;
    }

    /**
     * 设置 [头像]
     */
    public ContactDTO setImage(String image) {
        this.image = image;
        this.modify("image", image);
        return this;
    }

    /**
     * 设置 [手机]
     */
    public ContactDTO setMobile(String mobile) {
        this.mobile = mobile;
        this.modify("mobile", mobile);
        return this;
    }

    /**
     * 设置 [电话]
     */
    public ContactDTO setPhone(String phone) {
        this.phone = phone;
        this.modify("phone", phone);
        return this;
    }

    /**
     * 设置 [工作岗位]
     */
    public ContactDTO setPost(String post) {
        this.post = post;
        this.modify("post", post);
        return this;
    }


}
