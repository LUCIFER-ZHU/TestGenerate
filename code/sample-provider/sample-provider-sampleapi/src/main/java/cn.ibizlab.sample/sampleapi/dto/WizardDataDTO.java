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
 * 服务DTO对象[WizardDataDTO]
 */
@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
@ApiModel("向导数据")
public class WizardDataDTO extends DTOBase implements Serializable {

	private static final long serialVersionUID = 1L;

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
     * 数值属性
     */
    @JsonProperty("numfield")
    @JSONField(name = "numfield")
    @ApiModelProperty("数值属性")
    private BigDecimal numfield;

    /**
     * 组织机构标识
     */
    @JsonProperty("orgid")
    @JSONField(name = "orgid")
    @ApiModelProperty("组织机构标识")
    private String orgId;

    /**
     * 下一步表单
     */
    @JsonProperty("srfnextform")
    @JSONField(name = "srfnextform")
    @ApiModelProperty("下一步表单")
    private String srfnextform;

    /**
     * 文本属性
     */
    @JsonProperty("textfield")
    @JSONField(name = "textfield")
    @ApiModelProperty("文本属性")
    private String textfield;

    /**
     * 时间属性
     */
    @JsonProperty("timefield")
    @JSONField(name = "timefield")
    @ApiModelProperty("时间属性")
    private Timestamp timefield;

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
     * 向导数据标识
     */
    @JsonProperty("wizarddataid")
    @JSONField(name = "wizarddataid")
    @ApiModelProperty("向导数据标识")
    private String wizardDataId;

    /**
     * 向导数据名称
     */
    @JsonProperty("wizarddataname")
    @JSONField(name = "wizarddataname")
    @ApiModelProperty("向导数据名称")
    private String wizardDataName;


    /**
     * 设置 [数值属性]
     */
    public WizardDataDTO setNumfield(BigDecimal numfield) {
        this.numfield = numfield;
        this.modify("numfield", numfield);
        return this;
    }

    /**
     * 设置 [下一步表单]
     */
    public WizardDataDTO setSrfnextform(String srfnextform) {
        this.srfnextform = srfnextform;
        this.modify("srfnextform", srfnextform);
        return this;
    }

    /**
     * 设置 [文本属性]
     */
    public WizardDataDTO setTextfield(String textfield) {
        this.textfield = textfield;
        this.modify("textfield", textfield);
        return this;
    }

    /**
     * 设置 [时间属性]
     */
    public WizardDataDTO setTimefield(Timestamp timefield) {
        this.timefield = timefield;
        this.modify("timefield", timefield);
        return this;
    }

    /**
     * 设置 [向导数据名称]
     */
    public WizardDataDTO setWizardDataName(String wizardDataName) {
        this.wizardDataName = wizardDataName;
        this.modify("wizarddataname", wizardDataName);
        return this;
    }


}
