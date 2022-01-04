package ibizsample.core.sample.domain;

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
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import org.springframework.util.ObjectUtils;
import org.springframework.util.DigestUtils;
import org.springframework.util.Assert;
import cn.ibizlab.util.domain.EntityBase;
import cn.ibizlab.util.annotation.DEField;
import cn.ibizlab.util.enums.DEPredefinedFieldType;
import cn.ibizlab.util.enums.DEFieldDefaultValueType;
import cn.ibizlab.util.helper.DataObject;
import cn.ibizlab.util.annotation.Audit;
import cn.ibizlab.util.enums.DupCheck;
import cn.ibizlab.util.domain.EntityMP;
import java.io.Serializable;
import lombok.*;
import lombok.experimental.Accessors;
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
@TableName(value = "T_IMPEXPDATA", resultMap = "ImpExpDataResultMap")
@ApiModel("导入导出数据")
public class ImpExpData extends EntityMP implements Serializable
{

    /**
     * 导入导出数据标识
     */
    @TableId(value = "impexpdataid" , type = IdType.ASSIGN_UUID)
    @DEField(name = "impexpdataid" , isKeyField = true)
    @JsonProperty("impexpdataid")
    @JSONField(name = "impexpdataid")
    @ApiModelProperty("导入导出数据标识")
    private String impExpDataId;

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
     * 导入导出数据名称
     */
    @TableField(value = "impexpdataname")
    @DEField(name = "impexpdataname")
    @JsonProperty("impexpdataname")
    @JSONField(name = "impexpdataname")
    @ApiModelProperty("导入导出数据名称")
    private String impExpDataName;

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
     * 更新人
     */
    @TableField(value = "updateman")
    @DEField(name = "updateman" , preType = DEPredefinedFieldType.UPDATEMAN , dict = "SysOperator")
    @JsonProperty("updateman")
    @JSONField(name = "updateman")
    @ApiModelProperty("更新人")
    private String updateMan;

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
     * 数值属性
     */
    @TableField(value = "numfield")
    @DEField(name = "numfield")
    @JsonProperty("numfield")
    @JSONField(name = "numfield")
    @ApiModelProperty("数值属性")
    private BigDecimal numfield;

    /**
     * 时间属性
     */
    @TableField(value = "timefield")
    @DEField(name = "timefield")
    @JsonProperty("timefield")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", locale = "zh", timezone = "GMT+8")
    @JSONField(name = "timefield" , format = "yyyy-MM-dd HH:mm:ss")
    @ApiModelProperty("时间属性")
    private Timestamp timefield;

    /**
     * 文本属性
     */
    @TableField(value = "textfield")
    @DEField(name = "textfield")
    @JsonProperty("textfield")
    @JSONField(name = "textfield")
    @ApiModelProperty("文本属性")
    private String textfield;

    /**
     * 代码表属性
     */
    @TableField(value = "codelistfield")
    @DEField(name = "codelistfield" , dict = "YesNo")
    @JsonProperty("codelistfield")
    @JSONField(name = "codelistfield")
    @ApiModelProperty("代码表属性")
    private String codelistfield;

    /**
     * 客户标识
     */
    @TableField(value = "customerid")
    @DEField(name = "customerid")
    @JsonProperty("customerid")
    @JSONField(name = "customerid")
    @ApiModelProperty("客户标识")
    private String customerId;

    /**
     * 客户名称
     */
    @TableField(value = "customername" , exist = false)
    @DEField(name = "customername")
    @JsonProperty("customername")
    @JSONField(name = "customername")
    @ApiModelProperty("客户名称")
    private String customerName;


    /**
     * 客户
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private ibizsample.core.sample.domain.Customer customer;




    /**
     * 设置 [导入导出数据名称]
     */
    public ImpExpData setImpExpDataName(String impExpDataName) {
        this.impExpDataName = impExpDataName;
        this.modify("impexpdataname", impExpDataName);
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
     * 设置 [数值属性]
     */
    public ImpExpData setNumfield(BigDecimal numfield) {
        this.numfield = numfield;
        this.modify("numfield", numfield);
        return this;
    }

    /**
     * 设置 [时间属性]
     */
    public ImpExpData setTimefield(Timestamp timefield) {
        this.timefield = timefield;
        this.modify("timefield", timefield);
        return this;
    }
    /**
     * 格式化日期 [时间属性]
     */
    public String formatTimefield() {
        if (this.timefield == null) {
            return null;
        }
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        return sdf.format(timefield);
    }

    /**
     * 设置 [文本属性]
     */
    public ImpExpData setTextfield(String textfield) {
        this.textfield = textfield;
        this.modify("textfield", textfield);
        return this;
    }

    /**
     * 设置 [代码表属性]
     */
    public ImpExpData setCodelistfield(String codelistfield) {
        this.codelistfield = codelistfield;
        this.modify("codelistfield", codelistfield);
        return this;
    }

    /**
     * 设置 [客户标识]
     */
    public ImpExpData setCustomerId(String customerId) {
        this.customerId = customerId;
        this.modify("customerid", customerId);
        return this;
    }

    /**
     * 设置 [客户名称]
     */
    public ImpExpData setCustomerName(String customerName) {
        this.customerName = customerName;
        this.modify("customername", customerName);
        return this;
    }





    /**
     * 复制当前对象数据到目标对象(粘贴重置)
     * @param targetEntity 目标数据对象
     * @param bIncEmpty  是否包括空值
     * @param <T>
     * @return
     */
    @Override
    public <T> T copyTo(T targetEntity, boolean bIncEmpty) {
        this.reset("impexpdataid");        
        return super.copyTo(targetEntity, bIncEmpty);
    }    
}