package cn.ibizlab.sample.core.sample.domain;

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
import cn.ibizlab.sample.core.sample.domain.Customer;

@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
@JsonIgnoreProperties(value = "handler")
@TableName(value = "T_CONTACT", resultMap = "ContactResultMap")
@ApiModel("联系人")
public class Contact extends EntityMP implements Serializable
{

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
     * 更新人
     */
    @TableField(value = "updateman")
    @DEField(name = "updateman" , preType = DEPredefinedFieldType.UPDATEMAN , dict = "SysOperator")
    @JsonProperty("updateman")
    @JSONField(name = "updateman")
    @ApiModelProperty("更新人")
    private String updateMan;

    /**
     * 联系人姓名
     */
    @TableField(value = "contactname")
    @DEField(name = "contactname")
    @JsonProperty("contactname")
    @JSONField(name = "contactname")
    @ApiModelProperty("联系人姓名")
    private String contactName;

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
     * 联系人标识
     */
    @TableId(value = "contactid" , type = IdType.ASSIGN_UUID)
    @DEField(name = "contactid" , isKeyField = true)
    @JsonProperty("contactid")
    @JSONField(name = "contactid")
    @ApiModelProperty("联系人标识")
    private String contactId;

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
     * 组织部门标识
     */
    @TableField(value = "deptid")
    @DEField(name = "deptid" , preType = DEPredefinedFieldType.ORGSECTORID)
    @JsonProperty("deptid")
    @JSONField(name = "deptid")
    @ApiModelProperty("组织部门标识")
    private String deptId;

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
     * 头像
     */
    @TableField(value = "image")
    @DEField(name = "image")
    @JsonProperty("image")
    @JSONField(name = "image")
    @ApiModelProperty("头像")
    private String image;

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
     * 工作岗位
     */
    @TableField(value = "post")
    @DEField(name = "post")
    @JsonProperty("post")
    @JSONField(name = "post")
    @ApiModelProperty("工作岗位")
    private String post;

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
    @TableField(value = "customername" , exist = false)
    @DEField(name = "customername")
    @JsonProperty("customername")
    @JSONField(name = "customername")
    @ApiModelProperty("客户名称")
    private String customerName;


    /**
     * 客户
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private Customer customer;


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
     * 设置 [联系人姓名]
     */
    public Contact setContactName(String contactName) {
        this.contactName = contactName;
        this.modify("contactname", contactName);
        return this;
    }





    /**
     * 设置 [电话]
     */
    public Contact setPhone(String phone) {
        this.phone = phone;
        this.modify("phone", phone);
        return this;
    }

    /**
     * 设置 [手机]
     */
    public Contact setMobile(String mobile) {
        this.mobile = mobile;
        this.modify("mobile", mobile);
        return this;
    }

    /**
     * 设置 [头像]
     */
    public Contact setImage(String image) {
        this.image = image;
        this.modify("image", image);
        return this;
    }

    /**
     * 设置 [电子邮箱]
     */
    public Contact setEmail(String email) {
        this.email = email;
        this.modify("email", email);
        return this;
    }

    /**
     * 设置 [工作岗位]
     */
    public Contact setPost(String post) {
        this.post = post;
        this.modify("post", post);
        return this;
    }

    /**
     * 设置 [客户标识]
     */
    public Contact setCustomerId(String customerId) {
        this.customerId = customerId;
        this.modify("customerid", customerId);
        return this;
    }

    /**
     * 设置 [客户名称]
     */
    public Contact setCustomerName(String customerName) {
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
        this.reset("contactid");        
        return super.copyTo(targetEntity, bIncEmpty);
    }    
}