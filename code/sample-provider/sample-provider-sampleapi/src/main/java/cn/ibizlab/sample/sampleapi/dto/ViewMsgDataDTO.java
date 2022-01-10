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
 * 服务DTO对象[ViewMsgDataDTO]
 */
@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
@ApiModel("视图消息数据")
public class ViewMsgDataDTO extends DTOBase implements Serializable {

	private static final long serialVersionUID = 1L;

    /**
     * 视图消息内容
     */
    @JsonProperty("content")
    @JSONField(name = "content")
    @ApiModelProperty("视图消息内容")
    private String content;

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
     * 视图消息位置
     */
    @JsonProperty("location")
    @JSONField(name = "location")
    @ApiModelProperty("视图消息位置")
    private String location;

    /**
     * 组织机构标识
     */
    @JsonProperty("orgid")
    @JSONField(name = "orgid")
    @ApiModelProperty("组织机构标识")
    private String orgId;

    /**
     * 视图消息类型
     */
    @JsonProperty("type")
    @JSONField(name = "type")
    @ApiModelProperty("视图消息类型")
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
     * 视图消息数据标识
     */
    @JsonProperty("viewmsgdataid")
    @JSONField(name = "viewmsgdataid")
    @ApiModelProperty("视图消息数据标识")
    private String viewMsgDataId;

    /**
     * 视图消息标题
     */
    @JsonProperty("viewmsgdataname")
    @JSONField(name = "viewmsgdataname")
    @ApiModelProperty("视图消息标题")
    private String viewMsgDataName;


    /**
     * 设置 [视图消息内容]
     */
    public ViewMsgDataDTO setContent(String content) {
        this.content = content;
        this.modify("content", content);
        return this;
    }

    /**
     * 设置 [视图消息位置]
     */
    public ViewMsgDataDTO setLocation(String location) {
        this.location = location;
        this.modify("location", location);
        return this;
    }

    /**
     * 设置 [视图消息类型]
     */
    public ViewMsgDataDTO setType(String type) {
        this.type = type;
        this.modify("type", type);
        return this;
    }

    /**
     * 设置 [视图消息标题]
     */
    public ViewMsgDataDTO setViewMsgDataName(String viewMsgDataName) {
        this.viewMsgDataName = viewMsgDataName;
        this.modify("viewmsgdataname", viewMsgDataName);
        return this;
    }


}
