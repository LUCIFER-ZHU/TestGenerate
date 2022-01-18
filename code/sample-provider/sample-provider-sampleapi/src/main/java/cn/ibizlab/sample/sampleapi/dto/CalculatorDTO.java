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
 * 服务DTO对象[CalculatorDTO]
 */
@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
@ApiModel("计算器")
public class CalculatorDTO extends DTOBase implements Serializable {

	private static final long serialVersionUID = 1L;

    /**
     * 计算器标识
     */
    @JsonProperty("calculatorid")
    @JSONField(name = "calculatorid")
    @ApiModelProperty("计算器标识")
    private String calculatorId;

    /**
     * 计算器名称
     */
    @JsonProperty("calculatorname")
    @JSONField(name = "calculatorname")
    @ApiModelProperty("计算器名称")
    private String calculatorName;

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
     * 表单式
     */
    @JsonProperty("expression")
    @JSONField(name = "expression")
    @ApiModelProperty("表单式")
    private String expression;

    /**
     * 输入值
     */
    @JsonProperty("input")
    @JSONField(name = "input")
    @ApiModelProperty("输入值")
    private String input;

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
     * 设置 [计算器名称]
     */
    public CalculatorDTO setCalculatorName(String calculatorName) {
        this.calculatorName = calculatorName;
        this.modify("calculatorname", calculatorName);
        return this;
    }

    /**
     * 设置 [表单式]
     */
    public CalculatorDTO setExpression(String expression) {
        this.expression = expression;
        this.modify("expression", expression);
        return this;
    }

    /**
     * 设置 [输入值]
     */
    public CalculatorDTO setInput(String input) {
        this.input = input;
        this.modify("input", input);
        return this;
    }


}
