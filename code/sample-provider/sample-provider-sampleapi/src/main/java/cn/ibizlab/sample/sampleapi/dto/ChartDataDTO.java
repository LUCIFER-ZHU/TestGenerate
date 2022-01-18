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
 * 服务DTO对象[ChartDataDTO]
 */
@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
@ApiModel("图表")
public class ChartDataDTO extends DTOBase implements Serializable {

	private static final long serialVersionUID = 1L;

    /**
     * 开始时间
     */
    @JsonProperty("begintime")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", locale = "zh", timezone = "GMT+8")
    @JSONField(name = "begintime" , format = "yyyy-MM-dd HH:mm:ss")
    @ApiModelProperty("开始时间")
    private Timestamp beginTime;

    /**
     * 图表标识
     */
    @JsonProperty("chartdataid")
    @JSONField(name = "chartdataid")
    @ApiModelProperty("图表标识")
    private String chartDataId;

    /**
     * 图表名称
     */
    @JsonProperty("chartdataname")
    @JSONField(name = "chartdataname")
    @ApiModelProperty("图表名称")
    private String chartDataName;

    /**
     * 图表编号
     */
    @JsonProperty("chartdatano")
    @JSONField(name = "chartdatano")
    @ApiModelProperty("图表编号")
    private String chartDataNo;

    /**
     * 图表时间
     */
    @JsonProperty("chartdate")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", locale = "zh", timezone = "GMT+8")
    @JSONField(name = "chartdate" , format = "yyyy-MM-dd HH:mm:ss")
    @ApiModelProperty("图表时间")
    private Timestamp chartdate;

    /**
     * 收盘值
     */
    @JsonProperty("close")
    @JSONField(name = "close")
    @ApiModelProperty("收盘值")
    private BigDecimal close;

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
     * 数据
     */
    @JsonProperty("data")
    @JSONField(name = "data")
    @ApiModelProperty("数据")
    private BigDecimal data;

    /**
     * 数据分类
     */
    @JsonProperty("datatype")
    @JSONField(name = "datatype")
    @ApiModelProperty("数据分类")
    private String dataType;

    /**
     * 数据时间
     */
    @JsonProperty("datetime")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", locale = "zh", timezone = "GMT+8")
    @JSONField(name = "datetime" , format = "yyyy-MM-dd HH:mm:ss")
    @ApiModelProperty("数据时间")
    private Timestamp dateTime;

    /**
     * 组织部门标识
     */
    @JsonProperty("deptid")
    @JSONField(name = "deptid")
    @ApiModelProperty("组织部门标识")
    private String deptId;

    /**
     * 结束时间
     */
    @JsonProperty("endtime")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", locale = "zh", timezone = "GMT+8")
    @JSONField(name = "endtime" , format = "yyyy-MM-dd HH:mm:ss")
    @ApiModelProperty("结束时间")
    private Timestamp endTime;

    /**
     * 最大值
     */
    @JsonProperty("highest")
    @JSONField(name = "highest")
    @ApiModelProperty("最大值")
    private BigDecimal highest;

    /**
     * 图片路径
     */
    @JsonProperty("imagepath")
    @JSONField(name = "imagepath")
    @ApiModelProperty("图片路径")
    private String imagepath;

    /**
     * 备注
     */
    @JsonProperty("infomessage")
    @JSONField(name = "infomessage")
    @ApiModelProperty("备注")
    private String infomessage;

    /**
     * 纬度
     */
    @JsonProperty("latitude")
    @JSONField(name = "latitude")
    @ApiModelProperty("纬度")
    private BigDecimal latitude;

    /**
     * 经度
     */
    @JsonProperty("longitude")
    @JSONField(name = "longitude")
    @ApiModelProperty("经度")
    private BigDecimal longitude;

    /**
     * 最小值
     */
    @JsonProperty("lowest")
    @JSONField(name = "lowest")
    @ApiModelProperty("最小值")
    private BigDecimal lowest;

    /**
     * 月份
     */
    @JsonProperty("month")
    @JSONField(name = "month")
    @ApiModelProperty("月份")
    private Integer month;

    /**
     * 开盘值
     */
    @JsonProperty("open")
    @JSONField(name = "open")
    @ApiModelProperty("开盘值")
    private BigDecimal open;

    /**
     * 组织机构标识
     */
    @JsonProperty("orgid")
    @JSONField(name = "orgid")
    @ApiModelProperty("组织机构标识")
    private String orgId;

    /**
     * 计划收入
     */
    @JsonProperty("planincome")
    @JSONField(name = "planincome")
    @ApiModelProperty("计划收入")
    private BigDecimal planincome;

    /**
     * 实际收入
     */
    @JsonProperty("realincome")
    @JSONField(name = "realincome")
    @ApiModelProperty("实际收入")
    private BigDecimal realincome;

    /**
     * 季度
     */
    @JsonProperty("season")
    @JSONField(name = "season")
    @ApiModelProperty("季度")
    private Integer season;

    /**
     * 总计价格
     */
    @JsonProperty("totalprice")
    @JSONField(name = "totalprice")
    @ApiModelProperty("总计价格")
    private String totalprice;

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
     * 年份
     */
    @JsonProperty("year")
    @JSONField(name = "year")
    @ApiModelProperty("年份")
    private Integer year;


    /**
     * 设置 [开始时间]
     */
    public ChartDataDTO setBeginTime(Timestamp beginTime) {
        this.beginTime = beginTime;
        this.modify("begintime", beginTime);
        return this;
    }

    /**
     * 设置 [图表名称]
     */
    public ChartDataDTO setChartDataName(String chartDataName) {
        this.chartDataName = chartDataName;
        this.modify("chartdataname", chartDataName);
        return this;
    }

    /**
     * 设置 [图表编号]
     */
    public ChartDataDTO setChartDataNo(String chartDataNo) {
        this.chartDataNo = chartDataNo;
        this.modify("chartdatano", chartDataNo);
        return this;
    }

    /**
     * 设置 [图表时间]
     */
    public ChartDataDTO setChartdate(Timestamp chartdate) {
        this.chartdate = chartdate;
        this.modify("chartdate", chartdate);
        return this;
    }

    /**
     * 设置 [收盘值]
     */
    public ChartDataDTO setClose(BigDecimal close) {
        this.close = close;
        this.modify("close", close);
        return this;
    }

    /**
     * 设置 [数据]
     */
    public ChartDataDTO setData(BigDecimal data) {
        this.data = data;
        this.modify("data", data);
        return this;
    }

    /**
     * 设置 [数据分类]
     */
    public ChartDataDTO setDataType(String dataType) {
        this.dataType = dataType;
        this.modify("datatype", dataType);
        return this;
    }

    /**
     * 设置 [数据时间]
     */
    public ChartDataDTO setDateTime(Timestamp dateTime) {
        this.dateTime = dateTime;
        this.modify("datetime", dateTime);
        return this;
    }

    /**
     * 设置 [结束时间]
     */
    public ChartDataDTO setEndTime(Timestamp endTime) {
        this.endTime = endTime;
        this.modify("endtime", endTime);
        return this;
    }

    /**
     * 设置 [最大值]
     */
    public ChartDataDTO setHighest(BigDecimal highest) {
        this.highest = highest;
        this.modify("highest", highest);
        return this;
    }

    /**
     * 设置 [图片路径]
     */
    public ChartDataDTO setImagepath(String imagepath) {
        this.imagepath = imagepath;
        this.modify("imagepath", imagepath);
        return this;
    }

    /**
     * 设置 [备注]
     */
    public ChartDataDTO setInfomessage(String infomessage) {
        this.infomessage = infomessage;
        this.modify("infomessage", infomessage);
        return this;
    }

    /**
     * 设置 [纬度]
     */
    public ChartDataDTO setLatitude(BigDecimal latitude) {
        this.latitude = latitude;
        this.modify("latitude", latitude);
        return this;
    }

    /**
     * 设置 [经度]
     */
    public ChartDataDTO setLongitude(BigDecimal longitude) {
        this.longitude = longitude;
        this.modify("longitude", longitude);
        return this;
    }

    /**
     * 设置 [最小值]
     */
    public ChartDataDTO setLowest(BigDecimal lowest) {
        this.lowest = lowest;
        this.modify("lowest", lowest);
        return this;
    }

    /**
     * 设置 [月份]
     */
    public ChartDataDTO setMonth(Integer month) {
        this.month = month;
        this.modify("month", month);
        return this;
    }

    /**
     * 设置 [开盘值]
     */
    public ChartDataDTO setOpen(BigDecimal open) {
        this.open = open;
        this.modify("open", open);
        return this;
    }

    /**
     * 设置 [计划收入]
     */
    public ChartDataDTO setPlanincome(BigDecimal planincome) {
        this.planincome = planincome;
        this.modify("planincome", planincome);
        return this;
    }

    /**
     * 设置 [实际收入]
     */
    public ChartDataDTO setRealincome(BigDecimal realincome) {
        this.realincome = realincome;
        this.modify("realincome", realincome);
        return this;
    }

    /**
     * 设置 [季度]
     */
    public ChartDataDTO setSeason(Integer season) {
        this.season = season;
        this.modify("season", season);
        return this;
    }

    /**
     * 设置 [总计价格]
     */
    public ChartDataDTO setTotalprice(String totalprice) {
        this.totalprice = totalprice;
        this.modify("totalprice", totalprice);
        return this;
    }

    /**
     * 设置 [年份]
     */
    public ChartDataDTO setYear(Integer year) {
        this.year = year;
        this.modify("year", year);
        return this;
    }


}
