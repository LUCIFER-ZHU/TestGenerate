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
 * 服务DTO对象[LogicValidData2SimpleDTO]
 */
@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
@ApiModel("示例数据（启用逻辑删除）（主键数值）")
public class LogicValidData2SimpleDTO extends DTOBase implements Serializable {

	private static final long serialVersionUID = 1L;

    /**
     * 标识
     */
    @JsonProperty("code")
    @JSONField(name = "code")
    @ApiModelProperty("标识")
    private String code;

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
     * 示例数据（启用逻辑删除）（主键数值）标识
     */
    @JsonProperty("logicvaliddata2id")
    @JSONField(name = "logicvaliddata2id")
    @JsonSerialize(using = ToStringSerializer.class)
    @ApiModelProperty("示例数据（启用逻辑删除）（主键数值）标识")
    private Long logicValidData2Id;

    /**
     * 名称
     */
    @JsonProperty("logicvaliddata2name")
    @JSONField(name = "logicvaliddata2name")
    @ApiModelProperty("名称")
    private String logicValidData2Name;

    /**
     * 组织机构标识
     */
    @JsonProperty("orgid")
    @JSONField(name = "orgid")
    @ApiModelProperty("组织机构标识")
    private String orgId;

    /**
     * 区域
     */
    @JsonProperty("region")
    @JSONField(name = "region")
    @ApiModelProperty("区域")
    private String region;

    /**
     * 唯一标识
     */
    @JsonProperty("unionkey")
    @JSONField(name = "unionkey")
    @ApiModelProperty("唯一标识")
    private String unionkey;

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
     * 设置 [标识]
     */
    public LogicValidData2SimpleDTO setCode(String code) {
        this.code = code;
        this.modify("code", code);
        return this;
    }

    /**
     * 设置 [名称]
     */
    public LogicValidData2SimpleDTO setLogicValidData2Name(String logicValidData2Name) {
        this.logicValidData2Name = logicValidData2Name;
        this.modify("logicvaliddata2name", logicValidData2Name);
        return this;
    }

    /**
     * 设置 [区域]
     */
    public LogicValidData2SimpleDTO setRegion(String region) {
        this.region = region;
        this.modify("region", region);
        return this;
    }

    /**
     * 设置 [唯一标识]
     */
    public LogicValidData2SimpleDTO setUnionkey(String unionkey) {
        this.unionkey = unionkey;
        this.modify("unionkey", unionkey);
        return this;
    }


}
