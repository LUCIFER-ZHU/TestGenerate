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
import cn.ibizlab.sample.core.sample.domain.PersonData;

@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
@JsonIgnoreProperties(value = "handler")
@TableName(value = "T_OPPORTUNITY", resultMap = "OpportunityResultMap")
@ApiModel("商机")
public class Opportunity extends EntityMP implements Serializable
{

    /**
     * 商机标识
     */
    @TableId(value = "opportunityid" , type = IdType.ASSIGN_UUID)
    @DEField(name = "opportunityid" , isKeyField = true)
    @JsonProperty("opportunityid")
    @JSONField(name = "opportunityid")
    @ApiModelProperty("商机标识")
    private String opportunityId;

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
     * 商机名称
     */
    @TableField(value = "opportunityname")
    @DEField(name = "opportunityname")
    @JsonProperty("opportunityname")
    @JSONField(name = "opportunityname")
    @ApiModelProperty("商机名称")
    private String opportunityName;

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
     * 优先级
     */
    @TableField(value = "priority")
    @DEField(name = "priority" , dict = "Priority")
    @JsonProperty("priority")
    @JSONField(name = "priority")
    @ApiModelProperty("优先级")
    private String priority;

    /**
     * 预期收益
     */
    @TableField(value = "exprevenue")
    @DEField(name = "exprevenue")
    @JsonProperty("exprevenue")
    @JSONField(name = "exprevenue")
    @ApiModelProperty("预期收益")
    private BigDecimal exprevenue;

    /**
     * 预计结束时间
     */
    @TableField(value = "expendtime")
    @DEField(name = "expendtime")
    @JsonProperty("expendtime")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", locale = "zh", timezone = "GMT+8")
    @JSONField(name = "expendtime" , format = "yyyy-MM-dd HH:mm:ss")
    @ApiModelProperty("预计结束时间")
    private Timestamp expendtime;

    /**
     * 销售员标识
     */
    @TableField(value = "persondataid")
    @DEField(name = "persondataid")
    @JsonProperty("persondataid")
    @JSONField(name = "persondataid")
    @ApiModelProperty("销售员标识")
    private String personDataId;

    /**
     * 销售员
     */
    @TableField(value = "persondataname" , exist = false)
    @DEField(name = "persondataname")
    @JsonProperty("persondataname")
    @JSONField(name = "persondataname")
    @ApiModelProperty("销售员")
    private String personDataName;

    /**
     * 电子邮件
     */
    @TableField(value = "email")
    @DEField(name = "email")
    @JsonProperty("email")
    @JSONField(name = "email")
    @ApiModelProperty("电子邮件")
    private String email;

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
     * 商机状态
     */
    @TableField(value = "state")
    @DEField(name = "state" , dict = "OpportunityState")
    @JsonProperty("state")
    @JSONField(name = "state")
    @ApiModelProperty("商机状态")
    private String state;


    /**
     * 客户
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private Customer customer;
    /**
     * 人员数据
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private PersonData personData;




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
     * 设置 [商机名称]
     */
    public Opportunity setOpportunityName(String opportunityName) {
        this.opportunityName = opportunityName;
        this.modify("opportunityname", opportunityName);
        return this;
    }




    /**
     * 设置 [客户标识]
     */
    public Opportunity setCustomerId(String customerId) {
        this.customerId = customerId;
        this.modify("customerid", customerId);
        return this;
    }

    /**
     * 设置 [客户名称]
     */
    public Opportunity setCustomerName(String customerName) {
        this.customerName = customerName;
        this.modify("customername", customerName);
        return this;
    }

    /**
     * 设置 [优先级]
     */
    public Opportunity setPriority(String priority) {
        this.priority = priority;
        this.modify("priority", priority);
        return this;
    }

    /**
     * 设置 [预期收益]
     */
    public Opportunity setExprevenue(BigDecimal exprevenue) {
        this.exprevenue = exprevenue;
        this.modify("exprevenue", exprevenue);
        return this;
    }

    /**
     * 设置 [预计结束时间]
     */
    public Opportunity setExpendtime(Timestamp expendtime) {
        this.expendtime = expendtime;
        this.modify("expendtime", expendtime);
        return this;
    }
    /**
     * 格式化日期 [预计结束时间]
     */
    public String formatExpendtime() {
        if (this.expendtime == null) {
            return null;
        }
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        return sdf.format(expendtime);
    }

    /**
     * 设置 [销售员标识]
     */
    public Opportunity setPersonDataId(String personDataId) {
        this.personDataId = personDataId;
        this.modify("persondataid", personDataId);
        return this;
    }

    /**
     * 设置 [销售员]
     */
    public Opportunity setPersonDataName(String personDataName) {
        this.personDataName = personDataName;
        this.modify("persondataname", personDataName);
        return this;
    }

    /**
     * 设置 [电子邮件]
     */
    public Opportunity setEmail(String email) {
        this.email = email;
        this.modify("email", email);
        return this;
    }

    /**
     * 设置 [电话]
     */
    public Opportunity setPhone(String phone) {
        this.phone = phone;
        this.modify("phone", phone);
        return this;
    }

    /**
     * 设置 [商机状态]
     */
    public Opportunity setState(String state) {
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
        this.reset("opportunityid");        
        return super.copyTo(targetEntity, bIncEmpty);
    }    
}