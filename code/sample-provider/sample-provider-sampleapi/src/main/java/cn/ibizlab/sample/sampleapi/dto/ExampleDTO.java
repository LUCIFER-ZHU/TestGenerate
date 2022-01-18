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
 * 服务DTO对象[ExampleDTO]
 */
@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
@ApiModel("示例")
public class ExampleDTO extends DTOBase implements Serializable {

	private static final long serialVersionUID = 1L;

    /**
     * 自动填充属性
     */
    @JsonProperty("acfield")
    @JSONField(name = "acfield")
    @ApiModelProperty("自动填充属性")
    private String acfield;

    /**
     * XY前端计算值
     */
    @JsonProperty("appfield")
    @JSONField(name = "appfield")
    @ApiModelProperty("XY前端计算值")
    private String appfield;

    /**
     * XY前端计算值2
     */
    @JsonProperty("appfield2")
    @JSONField(name = "appfield2")
    @ApiModelProperty("XY前端计算值2")
    private String appfield2;

    /**
     * XY前端计算值3
     */
    @JsonProperty("appfield3")
    @JSONField(name = "appfield3")
    @ApiModelProperty("XY前端计算值3")
    private Integer appfield3;

    /**
     * XY前端计算值4
     */
    @JsonProperty("appfield4")
    @JSONField(name = "appfield4")
    @ApiModelProperty("XY前端计算值4")
    private String appfield4;

    /**
     * 开始时间
     */
    @JsonProperty("begintime")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", locale = "zh", timezone = "GMT+8")
    @JSONField(name = "begintime" , format = "yyyy-MM-dd HH:mm:ss")
    @ApiModelProperty("开始时间")
    private Timestamp beginTime;

    /**
     * 市标识
     */
    @JsonProperty("cityid")
    @JSONField(name = "cityid")
    @ApiModelProperty("市标识")
    private String cityId;

    /**
     * 市
     */
    @JsonProperty("cityname")
    @JSONField(name = "cityname")
    @ApiModelProperty("市")
    private String cityName;

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
     * 当前日期
     */
    @JsonProperty("currentdate")
    @JsonFormat(pattern = "yyyy-MM-dd", locale = "zh", timezone = "GMT+8")
    @JSONField(name = "currentdate" , format = "yyyy-MM-dd")
    @ApiModelProperty("当前日期")
    private Timestamp currentdate;

    /**
     * 数据分类
     */
    @JsonProperty("datatype")
    @JSONField(name = "datatype")
    @ApiModelProperty("数据分类")
    private String dataType;

    /**
     * 数值字段
     */
    @JsonProperty("decimalfield")
    @JSONField(name = "decimalfield")
    @ApiModelProperty("数值字段")
    private BigDecimal decimalfield;

    /**
     * 数值字段2
     */
    @JsonProperty("decimalfield2")
    @JSONField(name = "decimalfield2")
    @ApiModelProperty("数值字段2")
    private BigDecimal decimalfield2;

    /**
     * 区标识
     */
    @JsonProperty("districtid")
    @JSONField(name = "districtid")
    @ApiModelProperty("区标识")
    private String districtId;

    /**
     * 区/县
     */
    @JsonProperty("districtname")
    @JSONField(name = "districtname")
    @ApiModelProperty("区/县")
    private String districtName;

    /**
     * 结束时间
     */
    @JsonProperty("endtime")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", locale = "zh", timezone = "GMT+8")
    @JSONField(name = "endtime" , format = "yyyy-MM-dd HH:mm:ss")
    @ApiModelProperty("结束时间")
    private Timestamp endTime;

    /**
     * 示例标识
     */
    @JsonProperty("exampleid")
    @JSONField(name = "exampleid")
    @ApiModelProperty("示例标识")
    private String exampleId;

    /**
     * 名称
     */
    @JsonProperty("examplename")
    @JSONField(name = "examplename")
    @ApiModelProperty("名称")
    private String exampleName;

    /**
     * 数据选择
     */
    @JsonProperty("field")
    @JSONField(name = "field")
    @ApiModelProperty("数据选择")
    private String field;

    /**
     * 选择数据（值）
     */
    @JsonProperty("fieldvalue")
    @JSONField(name = "fieldvalue")
    @ApiModelProperty("选择数据（值）")
    private String fieldValue;

    /**
     * 更新值
     */
    @JsonProperty("fieldupdate")
    @JSONField(name = "fieldupdate")
    @ApiModelProperty("更新值")
    private BigDecimal fieldupdate;

    /**
     * X值
     */
    @JsonProperty("fieldx")
    @JSONField(name = "fieldx")
    @ApiModelProperty("X值")
    private BigDecimal fieldx;

    /**
     * Y值
     */
    @JsonProperty("fieldy")
    @JSONField(name = "fieldy")
    @ApiModelProperty("Y值")
    private BigDecimal fieldy;

    /**
     * Z值
     */
    @JsonProperty("fieldz")
    @JSONField(name = "fieldz")
    @ApiModelProperty("Z值")
    private BigDecimal fieldz;

    /**
     * 数字占位符（#）
     */
    @JsonProperty("format1")
    @JSONField(name = "format1")
    @ApiModelProperty("数字占位符（#）")
    private BigDecimal format1;

    /**
     * 显示下一个字符
     */
    @JsonProperty("format10")
    @JSONField(name = "format10")
    @ApiModelProperty("显示下一个字符")
    private String format10;

    /**
     * 属性颜色（[]）
     */
    @JsonProperty("format11")
    @JSONField(name = "format11")
    @ApiModelProperty("属性颜色（[]）")
    private String format11;

    /**
     * 条件
     */
    @JsonProperty("format12")
    @JSONField(name = "format12")
    @ApiModelProperty("条件")
    private String format12;

    /**
     * 时间和日期代码
     */
    @JsonProperty("format13")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", locale = "zh", timezone = "GMT+8")
    @JSONField(name = "format13" , format = "yyyy-MM-dd HH:mm:ss")
    @ApiModelProperty("时间和日期代码")
    private Timestamp format13;

    /**
     * 占位符（_）
     */
    @JsonProperty("format14")
    @JSONField(name = "format14")
    @ApiModelProperty("占位符（_）")
    private String format14;

    /**
     * 数字占位符（0）
     */
    @JsonProperty("format2")
    @JSONField(name = "format2")
    @ApiModelProperty("数字占位符（0）")
    private BigDecimal format2;

    /**
     * 数字占位符（?）
     */
    @JsonProperty("format3")
    @JSONField(name = "format3")
    @ApiModelProperty("数字占位符（?）")
    private BigDecimal format3;

    /**
     * 百分比（%）
     */
    @JsonProperty("format4")
    @JSONField(name = "format4")
    @ApiModelProperty("百分比（%）")
    private BigDecimal format4;

    /**
     * 千位分隔符（,）
     */
    @JsonProperty("format5")
    @JSONField(name = "format5")
    @ApiModelProperty("千位分隔符（,）")
    private BigDecimal format5;

    /**
     * 正负零区分显示
     */
    @JsonProperty("format6")
    @JSONField(name = "format6")
    @ApiModelProperty("正负零区分显示")
    private String format6;

    /**
     * 科学计数法
     */
    @JsonProperty("format7")
    @JSONField(name = "format7")
    @ApiModelProperty("科学计数法")
    private String format7;

    /**
     * 文本占位符（@）
     */
    @JsonProperty("format8")
    @JSONField(name = "format8")
    @ApiModelProperty("文本占位符（@）")
    private String format8;

    /**
     * 星号占位符（*）
     */
    @JsonProperty("format9")
    @JSONField(name = "format9")
    @ApiModelProperty("星号占位符（*）")
    private String format9;

    /**
     * 省份标识
     */
    @JsonProperty("provinceid")
    @JSONField(name = "provinceid")
    @ApiModelProperty("省份标识")
    private String provinceId;

    /**
     * 省份
     */
    @JsonProperty("provincename")
    @JSONField(name = "provincename")
    @ApiModelProperty("省份")
    private String provinceName;

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
     * 设置 [自动填充属性]
     */
    public ExampleDTO setAcfield(String acfield) {
        this.acfield = acfield;
        this.modify("acfield", acfield);
        return this;
    }

    /**
     * 设置 [XY前端计算值]
     */
    public ExampleDTO setAppfield(String appfield) {
        this.appfield = appfield;
        this.modify("appfield", appfield);
        return this;
    }

    /**
     * 设置 [XY前端计算值2]
     */
    public ExampleDTO setAppfield2(String appfield2) {
        this.appfield2 = appfield2;
        this.modify("appfield2", appfield2);
        return this;
    }

    /**
     * 设置 [XY前端计算值3]
     */
    public ExampleDTO setAppfield3(Integer appfield3) {
        this.appfield3 = appfield3;
        this.modify("appfield3", appfield3);
        return this;
    }

    /**
     * 设置 [XY前端计算值4]
     */
    public ExampleDTO setAppfield4(String appfield4) {
        this.appfield4 = appfield4;
        this.modify("appfield4", appfield4);
        return this;
    }

    /**
     * 设置 [开始时间]
     */
    public ExampleDTO setBeginTime(Timestamp beginTime) {
        this.beginTime = beginTime;
        this.modify("begintime", beginTime);
        return this;
    }

    /**
     * 设置 [市标识]
     */
    public ExampleDTO setCityId(String cityId) {
        this.cityId = cityId;
        this.modify("cityid", cityId);
        return this;
    }

    /**
     * 设置 [市]
     */
    public ExampleDTO setCityName(String cityName) {
        this.cityName = cityName;
        this.modify("cityname", cityName);
        return this;
    }

    /**
     * 设置 [当前日期]
     */
    public ExampleDTO setCurrentdate(Timestamp currentdate) {
        this.currentdate = currentdate;
        this.modify("currentdate", currentdate);
        return this;
    }

    /**
     * 设置 [数据分类]
     */
    public ExampleDTO setDataType(String dataType) {
        this.dataType = dataType;
        this.modify("datatype", dataType);
        return this;
    }

    /**
     * 设置 [数值字段]
     */
    public ExampleDTO setDecimalfield(BigDecimal decimalfield) {
        this.decimalfield = decimalfield;
        this.modify("decimalfield", decimalfield);
        return this;
    }

    /**
     * 设置 [数值字段2]
     */
    public ExampleDTO setDecimalfield2(BigDecimal decimalfield2) {
        this.decimalfield2 = decimalfield2;
        this.modify("decimalfield2", decimalfield2);
        return this;
    }

    /**
     * 设置 [区标识]
     */
    public ExampleDTO setDistrictId(String districtId) {
        this.districtId = districtId;
        this.modify("districtid", districtId);
        return this;
    }

    /**
     * 设置 [区/县]
     */
    public ExampleDTO setDistrictName(String districtName) {
        this.districtName = districtName;
        this.modify("districtname", districtName);
        return this;
    }

    /**
     * 设置 [结束时间]
     */
    public ExampleDTO setEndTime(Timestamp endTime) {
        this.endTime = endTime;
        this.modify("endtime", endTime);
        return this;
    }

    /**
     * 设置 [名称]
     */
    public ExampleDTO setExampleName(String exampleName) {
        this.exampleName = exampleName;
        this.modify("examplename", exampleName);
        return this;
    }

    /**
     * 设置 [数据选择]
     */
    public ExampleDTO setField(String field) {
        this.field = field;
        this.modify("field", field);
        return this;
    }

    /**
     * 设置 [选择数据（值）]
     */
    public ExampleDTO setFieldValue(String fieldValue) {
        this.fieldValue = fieldValue;
        this.modify("fieldvalue", fieldValue);
        return this;
    }

    /**
     * 设置 [更新值]
     */
    public ExampleDTO setFieldupdate(BigDecimal fieldupdate) {
        this.fieldupdate = fieldupdate;
        this.modify("fieldupdate", fieldupdate);
        return this;
    }

    /**
     * 设置 [X值]
     */
    public ExampleDTO setFieldx(BigDecimal fieldx) {
        this.fieldx = fieldx;
        this.modify("fieldx", fieldx);
        return this;
    }

    /**
     * 设置 [Y值]
     */
    public ExampleDTO setFieldy(BigDecimal fieldy) {
        this.fieldy = fieldy;
        this.modify("fieldy", fieldy);
        return this;
    }

    /**
     * 设置 [Z值]
     */
    public ExampleDTO setFieldz(BigDecimal fieldz) {
        this.fieldz = fieldz;
        this.modify("fieldz", fieldz);
        return this;
    }

    /**
     * 设置 [数字占位符（#）]
     */
    public ExampleDTO setFormat1(BigDecimal format1) {
        this.format1 = format1;
        this.modify("format1", format1);
        return this;
    }

    /**
     * 设置 [显示下一个字符]
     */
    public ExampleDTO setFormat10(String format10) {
        this.format10 = format10;
        this.modify("format10", format10);
        return this;
    }

    /**
     * 设置 [属性颜色（[]）]
     */
    public ExampleDTO setFormat11(String format11) {
        this.format11 = format11;
        this.modify("format11", format11);
        return this;
    }

    /**
     * 设置 [条件]
     */
    public ExampleDTO setFormat12(String format12) {
        this.format12 = format12;
        this.modify("format12", format12);
        return this;
    }

    /**
     * 设置 [时间和日期代码]
     */
    public ExampleDTO setFormat13(Timestamp format13) {
        this.format13 = format13;
        this.modify("format13", format13);
        return this;
    }

    /**
     * 设置 [占位符（_）]
     */
    public ExampleDTO setFormat14(String format14) {
        this.format14 = format14;
        this.modify("format14", format14);
        return this;
    }

    /**
     * 设置 [数字占位符（0）]
     */
    public ExampleDTO setFormat2(BigDecimal format2) {
        this.format2 = format2;
        this.modify("format2", format2);
        return this;
    }

    /**
     * 设置 [数字占位符（?）]
     */
    public ExampleDTO setFormat3(BigDecimal format3) {
        this.format3 = format3;
        this.modify("format3", format3);
        return this;
    }

    /**
     * 设置 [百分比（%）]
     */
    public ExampleDTO setFormat4(BigDecimal format4) {
        this.format4 = format4;
        this.modify("format4", format4);
        return this;
    }

    /**
     * 设置 [千位分隔符（,）]
     */
    public ExampleDTO setFormat5(BigDecimal format5) {
        this.format5 = format5;
        this.modify("format5", format5);
        return this;
    }

    /**
     * 设置 [正负零区分显示]
     */
    public ExampleDTO setFormat6(String format6) {
        this.format6 = format6;
        this.modify("format6", format6);
        return this;
    }

    /**
     * 设置 [科学计数法]
     */
    public ExampleDTO setFormat7(String format7) {
        this.format7 = format7;
        this.modify("format7", format7);
        return this;
    }

    /**
     * 设置 [文本占位符（@）]
     */
    public ExampleDTO setFormat8(String format8) {
        this.format8 = format8;
        this.modify("format8", format8);
        return this;
    }

    /**
     * 设置 [星号占位符（*）]
     */
    public ExampleDTO setFormat9(String format9) {
        this.format9 = format9;
        this.modify("format9", format9);
        return this;
    }

    /**
     * 设置 [省份标识]
     */
    public ExampleDTO setProvinceId(String provinceId) {
        this.provinceId = provinceId;
        this.modify("provinceid", provinceId);
        return this;
    }

    /**
     * 设置 [省份]
     */
    public ExampleDTO setProvinceName(String provinceName) {
        this.provinceName = provinceName;
        this.modify("provincename", provinceName);
        return this;
    }


}
