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
 * 服务DTO对象[OpportunityDTO]
 */
@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
@ApiModel("商机")
public class OpportunityDTO extends DTOBase implements Serializable {

	private static final long serialVersionUID = 1L;

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
     * 电子邮件
     */
    @JsonProperty("email")
    @JSONField(name = "email")
    @ApiModelProperty("电子邮件")
    private String email;

    /**
     * 预计结束时间
     */
    @JsonProperty("expendtime")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", locale = "zh", timezone = "GMT+8")
    @JSONField(name = "expendtime" , format = "yyyy-MM-dd HH:mm:ss")
    @ApiModelProperty("预计结束时间")
    private Timestamp expendtime;

    /**
     * 预期收益
     */
    @JsonProperty("exprevenue")
    @JSONField(name = "exprevenue")
    @ApiModelProperty("预期收益")
    private BigDecimal exprevenue;

    /**
     * 商机标识
     */
    @JsonProperty("opportunityid")
    @JSONField(name = "opportunityid")
    @ApiModelProperty("商机标识")
    private String opportunityId;

    /**
     * 商机名称
     */
    @JsonProperty("opportunityname")
    @JSONField(name = "opportunityname")
    @ApiModelProperty("商机名称")
    private String opportunityName;

    /**
     * 组织机构标识
     */
    @JsonProperty("orgid")
    @JSONField(name = "orgid")
    @ApiModelProperty("组织机构标识")
    private String orgId;

    /**
     * 销售员标识
     */
    @JsonProperty("persondataid")
    @JSONField(name = "persondataid")
    @ApiModelProperty("销售员标识")
    private String personDataId;

    /**
     * 销售员
     */
    @JsonProperty("persondataname")
    @JSONField(name = "persondataname")
    @ApiModelProperty("销售员")
    private String personDataName;

    /**
     * 电话
     */
    @JsonProperty("phone")
    @JSONField(name = "phone")
    @ApiModelProperty("电话")
    private String phone;

    /**
     * 优先级
     */
    @JsonProperty("priority")
    @JSONField(name = "priority")
    @ApiModelProperty("优先级")
    private String priority;

    /**
     * 商机状态
     */
    @JsonProperty("state")
    @JSONField(name = "state")
    @ApiModelProperty("商机状态")
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
     * 设置 [客户标识]
     */
    public OpportunityDTO setCustomerId(String customerId) {
        this.customerId = customerId;
        this.modify("customerid", customerId);
        return this;
    }

    /**
     * 设置 [客户名称]
     */
    public OpportunityDTO setCustomerName(String customerName) {
        this.customerName = customerName;
        this.modify("customername", customerName);
        return this;
    }

    /**
     * 设置 [电子邮件]
     */
    public OpportunityDTO setEmail(String email) {
        this.email = email;
        this.modify("email", email);
        return this;
    }

    /**
     * 设置 [预计结束时间]
     */
    public OpportunityDTO setExpendtime(Timestamp expendtime) {
        this.expendtime = expendtime;
        this.modify("expendtime", expendtime);
        return this;
    }

    /**
     * 设置 [预期收益]
     */
    public OpportunityDTO setExprevenue(BigDecimal exprevenue) {
        this.exprevenue = exprevenue;
        this.modify("exprevenue", exprevenue);
        return this;
    }

    /**
     * 设置 [商机名称]
     */
    public OpportunityDTO setOpportunityName(String opportunityName) {
        this.opportunityName = opportunityName;
        this.modify("opportunityname", opportunityName);
        return this;
    }

    /**
     * 设置 [销售员标识]
     */
    public OpportunityDTO setPersonDataId(String personDataId) {
        this.personDataId = personDataId;
        this.modify("persondataid", personDataId);
        return this;
    }

    /**
     * 设置 [销售员]
     */
    public OpportunityDTO setPersonDataName(String personDataName) {
        this.personDataName = personDataName;
        this.modify("persondataname", personDataName);
        return this;
    }

    /**
     * 设置 [电话]
     */
    public OpportunityDTO setPhone(String phone) {
        this.phone = phone;
        this.modify("phone", phone);
        return this;
    }

    /**
     * 设置 [优先级]
     */
    public OpportunityDTO setPriority(String priority) {
        this.priority = priority;
        this.modify("priority", priority);
        return this;
    }

    /**
     * 设置 [商机状态]
     */
    public OpportunityDTO setState(String state) {
        this.state = state;
        this.modify("state", state);
        return this;
    }


}
