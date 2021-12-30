package ibizsample.sample.domain;

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
import org.springframework.util.ObjectUtils;
import org.springframework.util.DigestUtils;
import ibizsample.util.domain.EntityBase;
import ibizsample.util.annotation.DEField;
import ibizsample.util.enums.DEPredefinedFieldType;
import ibizsample.util.enums.DEFieldDefaultValueType;
import ibizsample.util.helper.DataObject;
import ibizsample.util.annotation.Audit;
import ibizsample.util.enums.DupCheck;
import ibizsample.util.domain.EntityMP;
import java.io.Serializable;
import lombok.*;
import org.springframework.data.annotation.Transient;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.baomidou.mybatisplus.annotation.*;
import com.baomidou.mybatisplus.core.toolkit.IdWorker;

@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
@JsonIgnoreProperties(value = "handler")
@TableName(value = "T_EVENT", resultMap = "EventResultMap")
@ApiModel("事件")
public class Event extends EntityMP implements Serializable
{

    /**
     * 事件名称
     */
    @TableField(value = "eventname")
    @DEField(name = "eventname")
    @JsonProperty("eventname")
    @JSONField(name = "eventname")
    @ApiModelProperty("事件名称")
    private String eventName;

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
     * 事件标识
     */
    @TableId(value = "eventid" , type = IdType.ASSIGN_UUID)
    @DEField(name = "eventid" , isKeyField = true)
    @JsonProperty("eventid")
    @JSONField(name = "eventid")
    @ApiModelProperty("事件标识")
    private String eventId;

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
     * 开始时间
     */
    @TableField(value = "begintime")
    @DEField(name = "begintime")
    @JsonProperty("begintime")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", locale = "zh", timezone = "GMT+8")
    @JSONField(name = "begintime" , format = "yyyy-MM-dd HH:mm:ss")
    @ApiModelProperty("开始时间")
    private Timestamp beginTime;

    /**
     * 结束时间
     */
    @TableField(value = "endtime")
    @DEField(name = "endtime")
    @JsonProperty("endtime")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", locale = "zh", timezone = "GMT+8")
    @JSONField(name = "endtime" , format = "yyyy-MM-dd HH:mm:ss")
    @ApiModelProperty("结束时间")
    private Timestamp endTime;




    /**
     * 设置 [事件名称]
     */
    public Event setEventName(String eventName) {
        this.eventName = eventName;
        this.modify("eventname", eventName);
        return this;
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
     * 设置 [开始时间]
     */
    public Event setBeginTime(Timestamp beginTime) {
        this.beginTime = beginTime;
        this.modify("begintime", beginTime);
        return this;
    }
    /**
     * 格式化日期 [开始时间]
     */
    public String formatBeginTime() {
        if (this.beginTime == null) {
            return null;
        }
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        return sdf.format(beginTime);
    }

    /**
     * 设置 [结束时间]
     */
    public Event setEndTime(Timestamp endTime) {
        this.endTime = endTime;
        this.modify("endtime", endTime);
        return this;
    }
    /**
     * 格式化日期 [结束时间]
     */
    public String formatEndTime() {
        if (this.endTime == null) {
            return null;
        }
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        return sdf.format(endTime);
    }



}