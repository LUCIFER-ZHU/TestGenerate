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
 * 服务DTO对象[SampleVerDTO]
 */
@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
@ApiModel("示例版本")
public class SampleVerDTO extends DTOBase implements Serializable {

	private static final long serialVersionUID = 1L;

    /**
     * 内容
     */
    @JsonProperty("content")
    @JSONField(name = "content")
    @ApiModelProperty("内容")
    private String content;

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
     * 示例版本标识
     */
    @JsonProperty("sampleverid")
    @JSONField(name = "sampleverid")
    @ApiModelProperty("示例版本标识")
    private String sampleVerId;

    /**
     * 标题
     */
    @JsonProperty("samplevername")
    @JSONField(name = "samplevername")
    @ApiModelProperty("标题")
    private String sampleVerName;

    /**
     * 分类
     */
    @JsonProperty("type")
    @JSONField(name = "type")
    @ApiModelProperty("分类")
    private String type;

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
     * 版本号
     */
    @JsonProperty("verstr")
    @JSONField(name = "verstr")
    @ApiModelProperty("版本号")
    private String verstr;


    /**
     * 设置 [内容]
     */
    public SampleVerDTO setContent(String content) {
        this.content = content;
        this.modify("content", content);
        return this;
    }

    /**
     * 设置 [备注]
     */
    public SampleVerDTO setMemo(String memo) {
        this.memo = memo;
        this.modify("memo", memo);
        return this;
    }

    /**
     * 设置 [标题]
     */
    public SampleVerDTO setSampleVerName(String sampleVerName) {
        this.sampleVerName = sampleVerName;
        this.modify("samplevername", sampleVerName);
        return this;
    }

    /**
     * 设置 [分类]
     */
    public SampleVerDTO setType(String type) {
        this.type = type;
        this.modify("type", type);
        return this;
    }

    /**
     * 设置 [版本号]
     */
    public SampleVerDTO setVerstr(String verstr) {
        this.verstr = verstr;
        this.modify("verstr", verstr);
        return this;
    }


}
