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
 * 服务DTO对象[CalendarDataDTO]
 */
@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
@ApiModel("日历示例数据")
public class CalendarDataDTO extends DTOBase implements Serializable {

	private static final long serialVersionUID = 1L;

    /**
     * 开始时间
     */
    @JsonProperty("begintime")
    @JSONField(name = "begintime")
    @ApiModelProperty("开始时间")
    private Timestamp beginTime;

    /**
     * 日历示例数据标识
     */
    @JsonProperty("calendardataid")
    @JSONField(name = "calendardataid")
    @ApiModelProperty("日历示例数据标识")
    private String calendarDataId;

    /**
     * 事项
     */
    @JsonProperty("calendardataname")
    @JSONField(name = "calendardataname")
    @ApiModelProperty("事项")
    private String calendarDataName;

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
    public CalendarDataDTO setBeginTime(Timestamp beginTime) {
        this.beginTime = beginTime;
        this.modify("begintime", beginTime);
        return this;
    }

    /**
     * 设置 [事项]
     */
    public CalendarDataDTO setCalendarDataName(String calendarDataName) {
        this.calendarDataName = calendarDataName;
        this.modify("calendardataname", calendarDataName);
        return this;
    }

    /**
     * 设置 [结束时间]
     */
    public CalendarDataDTO setEndTime(Timestamp endTime) {
        this.endTime = endTime;
        this.modify("endtime", endTime);
        return this;
    }

    /**
     * 设置 [备注]
     */
    public CalendarDataDTO setMemo(String memo) {
        this.memo = memo;
        this.modify("memo", memo);
        return this;
    }

    /**
     * 设置 [类型]
     */
    public CalendarDataDTO setType(String type) {
        this.type = type;
        this.modify("type", type);
        return this;
    }


}
