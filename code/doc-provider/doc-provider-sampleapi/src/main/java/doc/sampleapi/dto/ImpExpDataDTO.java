package doc.sampleapi.dto;

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
 * 服务DTO对象[ImpExpDataDTO]
 */
@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
@ApiModel("导入导出数据")
public class ImpExpDataDTO extends DTOBase implements Serializable {

	private static final long serialVersionUID = 1L;

    /**
     * 代码表属性
     */
    @JsonProperty("codelistfield")
    @JSONField(name = "codelistfield")
    @ApiModelProperty("代码表属性")
    private String codelistfield;

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
     * 客户标识
     */
    @JsonProperty("customerid")
    @JSONField(name = "customerid")
    @ApiModelProperty("客户标识")
    private String customerId;

    /**
     * 客户名称
     */
    @JsonProperty("customername")
    @JSONField(name = "customername")
    @ApiModelProperty("客户名称")
    private String customerName;

    /**
     * 组织部门标识
     */
    @JsonProperty("deptid")
    @JSONField(name = "deptid")
    @ApiModelProperty("组织部门标识")
    private String deptId;

    /**
     * 导入导出数据标识
     */
    @JsonProperty("impexpdataid")
    @JSONField(name = "impexpdataid")
    @ApiModelProperty("导入导出数据标识")
    private String impExpDataId;

    /**
     * 导入导出数据名称
     */
    @JsonProperty("impexpdataname")
    @JSONField(name = "impexpdataname")
    @ApiModelProperty("导入导出数据名称")
    private String impExpDataName;

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
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", locale = "zh", timezone = "GMT+8")
    @JSONField(name = "timefield" , format = "yyyy-MM-dd HH:mm:ss")
    @ApiModelProperty("时间属性")
    private Timestamp timefield;

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
     * 设置 [代码表属性]
     */
    public ImpExpDataDTO setCodelistfield(String codelistfield) {
        this.codelistfield = codelistfield;
        this.modify("codelistfield", codelistfield);
        return this;
    }

    /**
     * 设置 [客户标识]
     */
    public ImpExpDataDTO setCustomerId(String customerId) {
        this.customerId = customerId;
        this.modify("customerid", customerId);
        return this;
    }

    /**
     * 设置 [客户名称]
     */
    public ImpExpDataDTO setCustomerName(String customerName) {
        this.customerName = customerName;
        this.modify("customername", customerName);
        return this;
    }

    /**
     * 设置 [导入导出数据名称]
     */
    public ImpExpDataDTO setImpExpDataName(String impExpDataName) {
        this.impExpDataName = impExpDataName;
        this.modify("impexpdataname", impExpDataName);
        return this;
    }

    /**
     * 设置 [数值属性]
     */
    public ImpExpDataDTO setNumfield(BigDecimal numfield) {
        this.numfield = numfield;
        this.modify("numfield", numfield);
        return this;
    }

    /**
     * 设置 [文本属性]
     */
    public ImpExpDataDTO setTextfield(String textfield) {
        this.textfield = textfield;
        this.modify("textfield", textfield);
        return this;
    }

    /**
     * 设置 [时间属性]
     */
    public ImpExpDataDTO setTimefield(Timestamp timefield) {
        this.timefield = timefield;
        this.modify("timefield", timefield);
        return this;
    }


}
