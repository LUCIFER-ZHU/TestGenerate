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

@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
@JsonIgnoreProperties(value = "handler")
@TableName(value = "T_LEAVEAPPLICATION", resultMap = "LeaveApplicationResultMap")
@ApiModel("请假申请")
public class LeaveApplication extends EntityMP implements Serializable
{

    /**
     * 请假申请名称
     */
    @TableField(value = "leaveapplicationname")
    @DEField(name = "leaveapplicationname")
    @JsonProperty("leaveapplicationname")
    @JSONField(name = "leaveapplicationname")
    @ApiModelProperty("请假申请名称")
    private String leaveApplicationName;

    /**
     * 请假申请标识
     */
    @TableId(value = "leaveapplicationid" , type = IdType.ASSIGN_UUID)
    @DEField(name = "leaveapplicationid" , isKeyField = true)
    @JsonProperty("leaveapplicationid")
    @JSONField(name = "leaveapplicationid")
    @ApiModelProperty("请假申请标识")
    private String leaveApplicationId;

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
     * 更新人
     */
    @TableField(value = "updateman")
    @DEField(name = "updateman" , preType = DEPredefinedFieldType.UPDATEMAN , dict = "SysOperator")
    @JsonProperty("updateman")
    @JSONField(name = "updateman")
    @ApiModelProperty("更新人")
    private String updateMan;

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
     * 申请状态
     */
    @TableField(value = "state")
    @DEField(name = "state" , dict = "LeaveApplicationState")
    @JsonProperty("state")
    @JSONField(name = "state")
    @ApiModelProperty("申请状态")
    private String state;

    /**
     * 审批步骤
     */
    @TableField(value = "step")
    @DEField(name = "step")
    @JsonProperty("step")
    @JSONField(name = "step")
    @ApiModelProperty("审批步骤")
    private String step;

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
     * 扩展数据
     */
    @TableField(value = "ext_data")
    @DEField(name = "ext_data")
    @JsonProperty("ext_data")
    @JSONField(name = "ext_data")
    @ApiModelProperty("扩展数据")
    private String extData;

    /**
     * 扩展参数
     */
    @TableField(value = "ext_param")
    @DEField(name = "ext_param")
    @JsonProperty("extparam")
    @JSONField(name = "extparam")
    @ApiModelProperty("扩展参数")
    private String extParam;

    /**
     * 扩展参数2
     */
    @TableField(value = "ext_param2")
    @DEField(name = "ext_param2")
    @JsonProperty("ext_param2")
    @JSONField(name = "ext_param2")
    @ApiModelProperty("扩展参数2")
    private String extParam2;

    /**
     * 扩展数据2
     */
    @TableField(value = "extdata2")
    @DEField(name = "extdata2")
    @JsonProperty("ext_data2")
    @JSONField(name = "ext_data2")
    @ApiModelProperty("扩展数据2")
    private String extData2;


    /**
     * 客户
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private Customer customer;


    /**
     * 设置 [请假申请名称]
     */
    public LeaveApplication setLeaveApplicationName(String leaveApplicationName) {
        this.leaveApplicationName = leaveApplicationName;
        this.modify("leaveapplicationname", leaveApplicationName);
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
     * 设置 [申请状态]
     */
    public LeaveApplication setState(String state) {
        this.state = state;
        this.modify("state", state);
        return this;
    }

    /**
     * 设置 [审批步骤]
     */
    public LeaveApplication setStep(String step) {
        this.step = step;
        this.modify("step", step);
        return this;
    }

    /**
     * 设置 [客户标识]
     */
    public LeaveApplication setCustomerId(String customerId) {
        this.customerId = customerId;
        this.modify("customerid", customerId);
        return this;
    }

    /**
     * 设置 [客户名称]
     */
    public LeaveApplication setCustomerName(String customerName) {
        this.customerName = customerName;
        this.modify("customername", customerName);
        return this;
    }

    /**
     * 设置 [扩展数据]
     */
    public LeaveApplication setExtData(String extData) {
        this.extData = extData;
        this.modify("ext_data", extData);
        return this;
    }

    /**
     * 设置 [扩展参数]
     */
    public LeaveApplication setExtParam(String extParam) {
        this.extParam = extParam;
        this.modify("ext_param", extParam);
        return this;
    }

    /**
     * 设置 [扩展参数2]
     */
    public LeaveApplication setExtParam2(String extParam2) {
        this.extParam2 = extParam2;
        this.modify("ext_param2", extParam2);
        return this;
    }

    /**
     * 设置 [扩展数据2]
     */
    public LeaveApplication setExtData2(String extData2) {
        this.extData2 = extData2;
        this.modify("extdata2", extData2);
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
        this.reset("leaveapplicationid");        
        return super.copyTo(targetEntity, bIncEmpty);
    }    
}