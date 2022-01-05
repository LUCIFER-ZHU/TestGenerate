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
 * 服务DTO对象[EventDTO]
 */
@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
@ApiModel("事件")
public class EventDTO extends DTOBase implements Serializable {

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
     * 结束时间
     */
    @JsonProperty("endtime")
    @JSONField(name = "endtime")
    @ApiModelProperty("结束时间")
    private Timestamp endTime;

    /**
     * 事件标识
     */
    @JsonProperty("eventid")
    @JSONField(name = "eventid")
    @ApiModelProperty("事件标识")
    private String eventId;

    /**
     * 事件名称
     */
    @JsonProperty("eventname")
    @JSONField(name = "eventname")
    @ApiModelProperty("事件名称")
    private String eventName;

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
    public EventDTO setBeginTime(Timestamp beginTime) {
        this.beginTime = beginTime;
        this.modify("begintime", beginTime);
        return this;
    }

    /**
     * 设置 [结束时间]
     */
    public EventDTO setEndTime(Timestamp endTime) {
        this.endTime = endTime;
        this.modify("endtime", endTime);
        return this;
    }

    /**
     * 设置 [事件名称]
     */
    public EventDTO setEventName(String eventName) {
        this.eventName = eventName;
        this.modify("eventname", eventName);
        return this;
    }


}
