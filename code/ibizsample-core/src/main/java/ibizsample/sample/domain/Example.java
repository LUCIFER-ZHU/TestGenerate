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
@TableName(value = "T_EXAMPLE", resultMap = "ExampleResultMap")
@ApiModel("示例")
public class Example extends EntityMP implements Serializable
{

    /**
     * 示例标识
     */
    @TableId(value = "exampleid" , type = IdType.ASSIGN_UUID)
    @DEField(name = "exampleid" , isKeyField = true)
    @JsonProperty("exampleid")
    @JSONField(name = "exampleid")
    @ApiModelProperty("示例标识")
    private String exampleId;

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
     * 名称
     */
    @TableField(value = "examplename")
    @DEField(name = "examplename")
    @JsonProperty("examplename")
    @JSONField(name = "examplename")
    @ApiModelProperty("名称")
    private String exampleName;

    /**
     * 数据选择
     */
    @TableField(value = "field")
    @DEField(name = "field")
    @JsonProperty("field")
    @JSONField(name = "field")
    @ApiModelProperty("数据选择")
    private String field;

    /**
     * 选择数据（值）
     */
    @TableField(value = "fieldvalue")
    @DEField(name = "fieldvalue")
    @JsonProperty("fieldvalue")
    @JSONField(name = "fieldvalue")
    @ApiModelProperty("选择数据（值）")
    private String fieldValue;

    /**
     * X值
     */
    @TableField(value = "fieldx")
    @DEField(name = "fieldx")
    @JsonProperty("fieldx")
    @JSONField(name = "fieldx")
    @ApiModelProperty("X值")
    private BigDecimal fieldx;

    /**
     * Y值
     */
    @TableField(value = "fieldy")
    @DEField(name = "fieldy")
    @JsonProperty("fieldy")
    @JSONField(name = "fieldy")
    @ApiModelProperty("Y值")
    private BigDecimal fieldy;

    /**
     * Z值
     */
    @TableField(value = "fieldz")
    @DEField(name = "fieldz")
    @JsonProperty("fieldz")
    @JSONField(name = "fieldz")
    @ApiModelProperty("Z值")
    private BigDecimal fieldz;

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
     * 数据分类
     */
    @TableField(value = "datatype")
    @DEField(name = "datatype" , defaultValue = "10" , dict = "ExampleDataType")
    @JsonProperty("datatype")
    @JSONField(name = "datatype")
    @ApiModelProperty("数据分类")
    private String dataType;

    /**
     * 市标识
     */
    @TableField(value = "cityid")
    @DEField(name = "cityid")
    @JsonProperty("cityid")
    @JSONField(name = "cityid")
    @ApiModelProperty("市标识")
    private String cityId;

    /**
     * 市
     */
    @TableField(value = "cityname" , exist = false)
    @DEField(name = "cityname")
    @JsonProperty("cityname")
    @JSONField(name = "cityname")
    @ApiModelProperty("市")
    private String cityName;

    /**
     * 省份标识
     */
    @TableField(value = "provinceid")
    @DEField(name = "provinceid")
    @JsonProperty("provinceid")
    @JSONField(name = "provinceid")
    @ApiModelProperty("省份标识")
    private String provinceId;

    /**
     * 省份
     */
    @TableField(value = "provincename" , exist = false)
    @DEField(name = "provincename")
    @JsonProperty("provincename")
    @JSONField(name = "provincename")
    @ApiModelProperty("省份")
    private String provinceName;

    /**
     * 区标识
     */
    @TableField(value = "districtid")
    @DEField(name = "districtid")
    @JsonProperty("districtid")
    @JSONField(name = "districtid")
    @ApiModelProperty("区标识")
    private String districtId;

    /**
     * 区/县
     */
    @TableField(value = "districtname" , exist = false)
    @DEField(name = "districtname")
    @JsonProperty("districtname")
    @JSONField(name = "districtname")
    @ApiModelProperty("区/县")
    private String districtName;

    /**
     * 数字占位符（#）
     */
    @TableField(value = "format1" , exist = false)
    @DEField(name = "format1")
    @JsonProperty("format1")
    @JSONField(name = "format1")
    @ApiModelProperty("数字占位符（#）")
    private BigDecimal format1;

    /**
     * 数字占位符（0）
     */
    @TableField(value = "format2" , exist = false)
    @DEField(name = "format2")
    @JsonProperty("format2")
    @JSONField(name = "format2")
    @ApiModelProperty("数字占位符（0）")
    private BigDecimal format2;

    /**
     * 数字占位符（?）
     */
    @TableField(value = "format3" , exist = false)
    @DEField(name = "format3")
    @JsonProperty("format3")
    @JSONField(name = "format3")
    @ApiModelProperty("数字占位符（?）")
    private BigDecimal format3;

    /**
     * 百分比（%）
     */
    @TableField(value = "format4" , exist = false)
    @DEField(name = "format4")
    @JsonProperty("format4")
    @JSONField(name = "format4")
    @ApiModelProperty("百分比（%）")
    private BigDecimal format4;

    /**
     * 千位分隔符（,）
     */
    @TableField(value = "format5" , exist = false)
    @DEField(name = "format5")
    @JsonProperty("format5")
    @JSONField(name = "format5")
    @ApiModelProperty("千位分隔符（,）")
    private BigDecimal format5;

    /**
     * 正负零区分显示
     */
    @TableField(value = "format6" , exist = false)
    @DEField(name = "format6")
    @JsonProperty("format6")
    @JSONField(name = "format6")
    @ApiModelProperty("正负零区分显示")
    private String format6;

    /**
     * 科学计数法
     */
    @TableField(value = "format7" , exist = false)
    @DEField(name = "format7")
    @JsonProperty("format7")
    @JSONField(name = "format7")
    @ApiModelProperty("科学计数法")
    private String format7;

    /**
     * 文本占位符（@）
     */
    @TableField(value = "format8" , exist = false)
    @DEField(name = "format8")
    @JsonProperty("format8")
    @JSONField(name = "format8")
    @ApiModelProperty("文本占位符（@）")
    private String format8;

    /**
     * 星号占位符（*）
     */
    @TableField(value = "format9" , exist = false)
    @DEField(name = "format9")
    @JsonProperty("format9")
    @JSONField(name = "format9")
    @ApiModelProperty("星号占位符（*）")
    private String format9;

    /**
     * 显示下一个字符
     */
    @TableField(value = "format10" , exist = false)
    @DEField(name = "format10")
    @JsonProperty("format10")
    @JSONField(name = "format10")
    @ApiModelProperty("显示下一个字符")
    private String format10;

    /**
     * 属性颜色（[]）
     */
    @TableField(value = "format11" , exist = false)
    @DEField(name = "format11")
    @JsonProperty("format11")
    @JSONField(name = "format11")
    @ApiModelProperty("属性颜色（[]）")
    private String format11;

    /**
     * 条件
     */
    @TableField(value = "format12" , exist = false)
    @DEField(name = "format12")
    @JsonProperty("format12")
    @JSONField(name = "format12")
    @ApiModelProperty("条件")
    private String format12;

    /**
     * 时间和日期代码
     */
    @TableField(value = "format13" , exist = false)
    @DEField(name = "format13")
    @JsonProperty("format13")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", locale = "zh", timezone = "GMT+8")
    @JSONField(name = "format13" , format = "yyyy-MM-dd HH:mm:ss")
    @ApiModelProperty("时间和日期代码")
    private Timestamp format13;

    /**
     * 占位符（_）
     */
    @TableField(value = "format14" , exist = false)
    @DEField(name = "format14")
    @JsonProperty("format14")
    @JSONField(name = "format14")
    @ApiModelProperty("占位符（_）")
    private String format14;

    /**
     * XY前端计算值
     */
    @TableField(value = "appfield" , exist = false)
    @DEField(name = "appfield")
    @JsonProperty("appfield")
    @JSONField(name = "appfield")
    @ApiModelProperty("XY前端计算值")
    private String appfield;

    /**
     * XY前端计算值2
     */
    @TableField(value = "appfield2" , exist = false)
    @DEField(name = "appfield2")
    @JsonProperty("appfield2")
    @JSONField(name = "appfield2")
    @ApiModelProperty("XY前端计算值2")
    private String appfield2;

    /**
     * XY前端计算值3
     */
    @TableField(value = "appfield3" , exist = false)
    @DEField(name = "appfield3")
    @JsonProperty("appfield3")
    @JSONField(name = "appfield3")
    @ApiModelProperty("XY前端计算值3")
    private Integer appfield3;

    /**
     * 更新值
     */
    @TableField(value = "fieldupdate")
    @DEField(name = "fieldupdate")
    @JsonProperty("fieldupdate")
    @JSONField(name = "fieldupdate")
    @ApiModelProperty("更新值")
    private BigDecimal fieldupdate;

    /**
     * 自动填充属性
     */
    @TableField(value = "acfield")
    @DEField(name = "acfield")
    @JsonProperty("acfield")
    @JSONField(name = "acfield")
    @ApiModelProperty("自动填充属性")
    private String acfield;

    /**
     * 当前日期
     */
    @TableField(value = "currentdate" , exist = false)
    @DEField(name = "currentdate")
    @JsonProperty("currentdate")
    @JsonFormat(pattern = "yyyy-MM-dd", locale = "zh", timezone = "GMT+8")
    @JSONField(name = "currentdate" , format = "yyyy-MM-dd")
    @ApiModelProperty("当前日期")
    private Timestamp currentdate;

    /**
     * XY前端计算值4
     */
    @TableField(value = "appfield4" , exist = false)
    @DEField(name = "appfield4")
    @JsonProperty("appfield4")
    @JSONField(name = "appfield4")
    @ApiModelProperty("XY前端计算值4")
    private String appfield4;

    /**
     * 数值字段
     */
    @TableField(value = "decimalfield")
    @DEField(name = "decimalfield")
    @JsonProperty("decimalfield")
    @JSONField(name = "decimalfield")
    @ApiModelProperty("数值字段")
    private BigDecimal decimalfield;

    /**
     * 数值字段2
     */
    @TableField(value = "decimalfield2")
    @DEField(name = "decimalfield2")
    @JsonProperty("decimalfield2")
    @JSONField(name = "decimalfield2")
    @ApiModelProperty("数值字段2")
    private BigDecimal decimalfield2;


    /**
     * 市
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private ibizsample.core.sample.domain.City city;
    /**
     * 区
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private ibizsample.core.sample.domain.District district;
    /**
     * 省份
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private ibizsample.core.sample.domain.Province province;




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
     * 设置 [名称]
     */
    public Example setExampleName(String exampleName) {
        this.exampleName = exampleName;
        this.modify("examplename", exampleName);
        return this;
    }

    /**
     * 设置 [数据选择]
     */
    public Example setField(String field) {
        this.field = field;
        this.modify("field", field);
        return this;
    }

    /**
     * 设置 [选择数据（值）]
     */
    public Example setFieldValue(String fieldValue) {
        this.fieldValue = fieldValue;
        this.modify("fieldvalue", fieldValue);
        return this;
    }

    /**
     * 设置 [X值]
     */
    public Example setFieldx(BigDecimal fieldx) {
        this.fieldx = fieldx;
        this.modify("fieldx", fieldx);
        return this;
    }

    /**
     * 设置 [Y值]
     */
    public Example setFieldy(BigDecimal fieldy) {
        this.fieldy = fieldy;
        this.modify("fieldy", fieldy);
        return this;
    }

    /**
     * 设置 [Z值]
     */
    public Example setFieldz(BigDecimal fieldz) {
        this.fieldz = fieldz;
        this.modify("fieldz", fieldz);
        return this;
    }

    /**
     * 设置 [开始时间]
     */
    public Example setBeginTime(Timestamp beginTime) {
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
    public Example setEndTime(Timestamp endTime) {
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

    /**
     * 设置 [数据分类]
     */
    public Example setDataType(String dataType) {
        this.dataType = dataType;
        this.modify("datatype", dataType);
        return this;
    }

    /**
     * 设置 [市标识]
     */
    public Example setCityId(String cityId) {
        this.cityId = cityId;
        this.modify("cityid", cityId);
        return this;
    }

    /**
     * 设置 [市]
     */
    public Example setCityName(String cityName) {
        this.cityName = cityName;
        this.modify("cityname", cityName);
        return this;
    }

    /**
     * 设置 [省份标识]
     */
    public Example setProvinceId(String provinceId) {
        this.provinceId = provinceId;
        this.modify("provinceid", provinceId);
        return this;
    }

    /**
     * 设置 [省份]
     */
    public Example setProvinceName(String provinceName) {
        this.provinceName = provinceName;
        this.modify("provincename", provinceName);
        return this;
    }

    /**
     * 设置 [区标识]
     */
    public Example setDistrictId(String districtId) {
        this.districtId = districtId;
        this.modify("districtid", districtId);
        return this;
    }

    /**
     * 设置 [区/县]
     */
    public Example setDistrictName(String districtName) {
        this.districtName = districtName;
        this.modify("districtname", districtName);
        return this;
    }

    /**
     * 设置 [数字占位符（#）]
     */
    public Example setFormat1(BigDecimal format1) {
        this.format1 = format1;
        this.modify("format1", format1);
        return this;
    }

    /**
     * 设置 [数字占位符（0）]
     */
    public Example setFormat2(BigDecimal format2) {
        this.format2 = format2;
        this.modify("format2", format2);
        return this;
    }

    /**
     * 设置 [数字占位符（?）]
     */
    public Example setFormat3(BigDecimal format3) {
        this.format3 = format3;
        this.modify("format3", format3);
        return this;
    }

    /**
     * 设置 [百分比（%）]
     */
    public Example setFormat4(BigDecimal format4) {
        this.format4 = format4;
        this.modify("format4", format4);
        return this;
    }

    /**
     * 设置 [千位分隔符（,）]
     */
    public Example setFormat5(BigDecimal format5) {
        this.format5 = format5;
        this.modify("format5", format5);
        return this;
    }

    /**
     * 设置 [正负零区分显示]
     */
    public Example setFormat6(String format6) {
        this.format6 = format6;
        this.modify("format6", format6);
        return this;
    }

    /**
     * 设置 [科学计数法]
     */
    public Example setFormat7(String format7) {
        this.format7 = format7;
        this.modify("format7", format7);
        return this;
    }

    /**
     * 设置 [文本占位符（@）]
     */
    public Example setFormat8(String format8) {
        this.format8 = format8;
        this.modify("format8", format8);
        return this;
    }

    /**
     * 设置 [星号占位符（*）]
     */
    public Example setFormat9(String format9) {
        this.format9 = format9;
        this.modify("format9", format9);
        return this;
    }

    /**
     * 设置 [显示下一个字符]
     */
    public Example setFormat10(String format10) {
        this.format10 = format10;
        this.modify("format10", format10);
        return this;
    }

    /**
     * 设置 [属性颜色（[]）]
     */
    public Example setFormat11(String format11) {
        this.format11 = format11;
        this.modify("format11", format11);
        return this;
    }

    /**
     * 设置 [条件]
     */
    public Example setFormat12(String format12) {
        this.format12 = format12;
        this.modify("format12", format12);
        return this;
    }

    /**
     * 设置 [时间和日期代码]
     */
    public Example setFormat13(Timestamp format13) {
        this.format13 = format13;
        this.modify("format13", format13);
        return this;
    }
    /**
     * 格式化日期 [时间和日期代码]
     */
    public String formatFormat13() {
        if (this.format13 == null) {
            return null;
        }
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        return sdf.format(format13);
    }

    /**
     * 设置 [占位符（_）]
     */
    public Example setFormat14(String format14) {
        this.format14 = format14;
        this.modify("format14", format14);
        return this;
    }

    /**
     * 设置 [XY前端计算值]
     */
    public Example setAppfield(String appfield) {
        this.appfield = appfield;
        this.modify("appfield", appfield);
        return this;
    }

    /**
     * 设置 [XY前端计算值2]
     */
    public Example setAppfield2(String appfield2) {
        this.appfield2 = appfield2;
        this.modify("appfield2", appfield2);
        return this;
    }

    /**
     * 设置 [XY前端计算值3]
     */
    public Example setAppfield3(Integer appfield3) {
        this.appfield3 = appfield3;
        this.modify("appfield3", appfield3);
        return this;
    }

    /**
     * 设置 [更新值]
     */
    public Example setFieldupdate(BigDecimal fieldupdate) {
        this.fieldupdate = fieldupdate;
        this.modify("fieldupdate", fieldupdate);
        return this;
    }

    /**
     * 设置 [自动填充属性]
     */
    public Example setAcfield(String acfield) {
        this.acfield = acfield;
        this.modify("acfield", acfield);
        return this;
    }

    /**
     * 设置 [当前日期]
     */
    public Example setCurrentdate(Timestamp currentdate) {
        this.currentdate = currentdate;
        this.modify("currentdate", currentdate);
        return this;
    }
    /**
     * 格式化日期 [当前日期]
     */
    public String formatCurrentdate() {
        if (this.currentdate == null) {
            return null;
        }
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        return sdf.format(currentdate);
    }

    /**
     * 设置 [XY前端计算值4]
     */
    public Example setAppfield4(String appfield4) {
        this.appfield4 = appfield4;
        this.modify("appfield4", appfield4);
        return this;
    }

    /**
     * 设置 [数值字段]
     */
    public Example setDecimalfield(BigDecimal decimalfield) {
        this.decimalfield = decimalfield;
        this.modify("decimalfield", decimalfield);
        return this;
    }

    /**
     * 设置 [数值字段2]
     */
    public Example setDecimalfield2(BigDecimal decimalfield2) {
        this.decimalfield2 = decimalfield2;
        this.modify("decimalfield2", decimalfield2);
        return this;
    }



}