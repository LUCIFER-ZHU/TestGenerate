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
 * 服务DTO对象[LeaveApplicationSimpleDTO]
 */
@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
@ApiModel("请假申请")
public class LeaveApplicationSimpleDTO extends DTOBase implements Serializable {

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
     * 组织部门标识
     */
    @JsonProperty("deptid")
    @JSONField(name = "deptid")
    @ApiModelProperty("组织部门标识")
    private String deptId;

    /**
     * 请假申请标识
     */
    @JsonProperty("leaveapplicationid")
    @JSONField(name = "leaveapplicationid")
    @ApiModelProperty("请假申请标识")
    private String leaveApplicationId;

    /**
     * 请假申请名称
     */
    @JsonProperty("leaveapplicationname")
    @JSONField(name = "leaveapplicationname")
    @ApiModelProperty("请假申请名称")
    private String leaveApplicationName;

    /**
     * 组织机构标识
     */
    @JsonProperty("orgid")
    @JSONField(name = "orgid")
    @ApiModelProperty("组织机构标识")
    private String orgId;

    /**
     * 申请状态
     */
    @JsonProperty("state")
    @JSONField(name = "state")
    @ApiModelProperty("申请状态")
    private String state;

    /**
     * 审批步骤
     */
    @JsonProperty("step")
    @JSONField(name = "step")
    @ApiModelProperty("审批步骤")
    private String step;

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
     * 设置 [请假申请名称]
     */
    public LeaveApplicationSimpleDTO setLeaveApplicationName(String leaveApplicationName) {
        this.leaveApplicationName = leaveApplicationName;
        this.modify("leaveapplicationname", leaveApplicationName);
        return this;
    }

    /**
     * 设置 [申请状态]
     */
    public LeaveApplicationSimpleDTO setState(String state) {
        this.state = state;
        this.modify("state", state);
        return this;
    }

    /**
     * 设置 [审批步骤]
     */
    public LeaveApplicationSimpleDTO setStep(String step) {
        this.step = step;
        this.modify("step", step);
        return this;
    }


}
