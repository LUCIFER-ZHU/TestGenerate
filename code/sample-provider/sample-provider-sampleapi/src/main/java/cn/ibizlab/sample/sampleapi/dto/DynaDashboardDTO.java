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
 * 服务DTO对象[DynaDashboardDTO]
 */
@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
@ApiModel("动态数据看板")
public class DynaDashboardDTO extends DTOBase implements Serializable {

	private static final long serialVersionUID = 1L;

    /**
     * 应用标识
     */
    @JsonProperty("appid")
    @JSONField(name = "appid")
    @ApiModelProperty("应用标识")
    private String appId;

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
     * 动态数据看板标识
     */
    @JsonProperty("dynadashboardid")
    @JSONField(name = "dynadashboardid")
    @ApiModelProperty("动态数据看板标识")
    private String dynaDashboardId;

    /**
     * 动态数据看板名称
     */
    @JsonProperty("dynadashboardname")
    @JSONField(name = "dynadashboardname")
    @ApiModelProperty("动态数据看板名称")
    private String dynaDashboardName;

    /**
     * 模型
     */
    @JsonProperty("model")
    @JSONField(name = "model")
    @ApiModelProperty("模型")
    private String model;

    /**
     * 模型标识
     */
    @JsonProperty("modelid")
    @JSONField(name = "modelid")
    @ApiModelProperty("模型标识")
    private String modelId;

    /**
     * 组织机构标识
     */
    @JsonProperty("orgid")
    @JSONField(name = "orgid")
    @ApiModelProperty("组织机构标识")
    private String orgId;

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
     * 用户标识
     */
    @JsonProperty("userid")
    @JSONField(name = "userid")
    @ApiModelProperty("用户标识")
    private String userId;


    /**
     * 设置 [应用标识]
     */
    public DynaDashboardDTO setAppId(String appId) {
        this.appId = appId;
        this.modify("appid", appId);
        return this;
    }

    /**
     * 设置 [动态数据看板名称]
     */
    public DynaDashboardDTO setDynaDashboardName(String dynaDashboardName) {
        this.dynaDashboardName = dynaDashboardName;
        this.modify("dynadashboardname", dynaDashboardName);
        return this;
    }

    /**
     * 设置 [模型]
     */
    public DynaDashboardDTO setModel(String model) {
        this.model = model;
        this.modify("model", model);
        return this;
    }

    /**
     * 设置 [模型标识]
     */
    public DynaDashboardDTO setModelId(String modelId) {
        this.modelId = modelId;
        this.modify("modelid", modelId);
        return this;
    }

    /**
     * 设置 [用户标识]
     */
    public DynaDashboardDTO setUserId(String userId) {
        this.userId = userId;
        this.modify("userid", userId);
        return this;
    }


}
