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
 * 服务DTO对象[KanbanDataDTO]
 */
@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
@ApiModel("看板数据")
public class KanbanDataDTO extends DTOBase implements Serializable {

	private static final long serialVersionUID = 1L;

    /**
     * 开始时间
     */
    @JsonProperty("begintime")
    @JSONField(name = "begintime")
    @ApiModelProperty("开始时间")
    private Timestamp beginTime;

    /**
     * 建立时间
     */
    @JsonProperty("createdate")
    @JSONField(name = "createdate")
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
     * 结束时间
     */
    @JsonProperty("endtime")
    @JSONField(name = "endtime")
    @ApiModelProperty("结束时间")
    private Timestamp endTime;

    /**
     * 看板数据标识
     */
    @JsonProperty("kanbandataid")
    @JSONField(name = "kanbandataid")
    @ApiModelProperty("看板数据标识")
    private String kanbanDataId;

    /**
     * 任务名称
     */
    @JsonProperty("kanbandataname")
    @JSONField(name = "kanbandataname")
    @ApiModelProperty("任务名称")
    private String kanbanDataName;

    /**
     * 备注
     */
    @JsonProperty("memo")
    @JSONField(name = "memo")
    @ApiModelProperty("备注")
    private String memo;

    /**
     * 组织机构标识
     */
    @JsonProperty("orgid")
    @JSONField(name = "orgid")
    @ApiModelProperty("组织机构标识")
    private String orgId;

    /**
     * 任务状态
     */
    @JsonProperty("taskstatus")
    @JSONField(name = "taskstatus")
    @ApiModelProperty("任务状态")
    private String taskstatus;

    /**
     * 更新时间
     */
    @JsonProperty("updatedate")
    @JSONField(name = "updatedate")
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
     * 设置 [开始时间]
     */
    public KanbanDataDTO setBeginTime(Timestamp beginTime) {
        this.beginTime = beginTime;
        this.modify("begintime", beginTime);
        return this;
    }

    /**
     * 设置 [结束时间]
     */
    public KanbanDataDTO setEndTime(Timestamp endTime) {
        this.endTime = endTime;
        this.modify("endtime", endTime);
        return this;
    }

    /**
     * 设置 [任务名称]
     */
    public KanbanDataDTO setKanbanDataName(String kanbanDataName) {
        this.kanbanDataName = kanbanDataName;
        this.modify("kanbandataname", kanbanDataName);
        return this;
    }

    /**
     * 设置 [备注]
     */
    public KanbanDataDTO setMemo(String memo) {
        this.memo = memo;
        this.modify("memo", memo);
        return this;
    }

    /**
     * 设置 [任务状态]
     */
    public KanbanDataDTO setTaskstatus(String taskstatus) {
        this.taskstatus = taskstatus;
        this.modify("taskstatus", taskstatus);
        return this;
    }


}
