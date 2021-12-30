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
@TableName(value = "T_VIEWMSGDATA", resultMap = "ViewMsgDataResultMap")
@ApiModel("视图消息数据")
public class ViewMsgData extends EntityMP implements Serializable
{

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
     * 视图消息数据标识
     */
    @TableId(value = "viewmsgdataid" , type = IdType.ASSIGN_UUID)
    @DEField(name = "viewmsgdataid" , isKeyField = true)
    @JsonProperty("viewmsgdataid")
    @JSONField(name = "viewmsgdataid")
    @ApiModelProperty("视图消息数据标识")
    private String viewMsgDataId;

    /**
     * 视图消息标题
     */
    @TableField(value = "viewmsgdataname")
    @DEField(name = "viewmsgdataname")
    @JsonProperty("viewmsgdataname")
    @JSONField(name = "viewmsgdataname")
    @ApiModelProperty("视图消息标题")
    private String viewMsgDataName;

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
     * 视图消息类型
     */
    @TableField(value = "type")
    @DEField(name = "type" , dict = "CodeListViewMsgType")
    @JsonProperty("type")
    @JSONField(name = "type")
    @ApiModelProperty("视图消息类型")
    private String type;

    /**
     * 视图消息位置
     */
    @TableField(value = "location")
    @DEField(name = "location" , dict = "CodeListViewMsgLocation")
    @JsonProperty("location")
    @JSONField(name = "location")
    @ApiModelProperty("视图消息位置")
    private String location;

    /**
     * 视图消息内容
     */
    @TableField(value = "content")
    @DEField(name = "content")
    @JsonProperty("content")
    @JSONField(name = "content")
    @ApiModelProperty("视图消息内容")
    private String content;






    /**
     * 设置 [视图消息标题]
     */
    public ViewMsgData setViewMsgDataName(String viewMsgDataName) {
        this.viewMsgDataName = viewMsgDataName;
        this.modify("viewmsgdataname", viewMsgDataName);
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
     * 设置 [视图消息类型]
     */
    public ViewMsgData setType(String type) {
        this.type = type;
        this.modify("type", type);
        return this;
    }

    /**
     * 设置 [视图消息位置]
     */
    public ViewMsgData setLocation(String location) {
        this.location = location;
        this.modify("location", location);
        return this;
    }

    /**
     * 设置 [视图消息内容]
     */
    public ViewMsgData setContent(String content) {
        this.content = content;
        this.modify("content", content);
        return this;
    }



}