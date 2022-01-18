package cn.ibizlab.sample.core.sample.domain;

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
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
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
@TableName(value = "T_CHARTDATA", resultMap = "ChartDataResultMap")
@ApiModel("图表")
public class ChartData extends EntityMP implements Serializable
{

    /**
     * 图表标识
     */
    @TableId(value = "chartdataid" , type = IdType.ASSIGN_UUID)
    @DEField(name = "chartdataid" , isKeyField = true)
    @JsonProperty("chartdataid")
    @JSONField(name = "chartdataid")
    @ApiModelProperty("图表标识")
    private String chartDataId;

    /**
     * 图表名称
     */
    @TableField(value = "chartdataname")
    @DEField(name = "chartdataname")
    @JsonProperty("chartdataname")
    @JSONField(name = "chartdataname")
    @ApiModelProperty("图表名称")
    private String chartDataName;

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
     * 组织部门标识
     */
    @TableField(value = "deptid")
    @DEField(name = "deptid" , preType = DEPredefinedFieldType.ORGSECTORID)
    @JsonProperty("deptid")
    @JSONField(name = "deptid")
    @ApiModelProperty("组织部门标识")
    private String deptId;

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
     * 图表时间
     */
    @TableField(value = "chartdate")
    @DEField(name = "chartdate")
    @JsonProperty("chartdate")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", locale = "zh", timezone = "GMT+8")
    @JSONField(name = "chartdate" , format = "yyyy-MM-dd HH:mm:ss")
    @ApiModelProperty("图表时间")
    private Timestamp chartdate;

    /**
     * 总计价格
     */
    @TableField(value = "totalprice")
    @DEField(name = "totalprice")
    @JsonProperty("totalprice")
    @JSONField(name = "totalprice")
    @ApiModelProperty("总计价格")
    private String totalprice;

    /**
     * 数据时间
     */
    @TableField(value = "datetime")
    @DEField(name = "datetime")
    @JsonProperty("datetime")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", locale = "zh", timezone = "GMT+8")
    @JSONField(name = "datetime" , format = "yyyy-MM-dd HH:mm:ss")
    @ApiModelProperty("数据时间")
    private Timestamp dateTime;

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
     * 经度
     */
    @TableField(value = "longitude")
    @DEField(name = "longitude")
    @JsonProperty("longitude")
    @JSONField(name = "longitude")
    @ApiModelProperty("经度")
    private BigDecimal longitude;

    /**
     * 纬度
     */
    @TableField(value = "latitude")
    @DEField(name = "latitude")
    @JsonProperty("latitude")
    @JSONField(name = "latitude")
    @ApiModelProperty("纬度")
    private BigDecimal latitude;

    /**
     * 年份
     */
    @TableField(value = "year")
    @DEField(name = "year")
    @JsonProperty("year")
    @JSONField(name = "year")
    @ApiModelProperty("年份")
    private Integer year;

    /**
     * 月份
     */
    @TableField(value = "month")
    @DEField(name = "month")
    @JsonProperty("month")
    @JSONField(name = "month")
    @ApiModelProperty("月份")
    private Integer month;

    /**
     * 季度
     */
    @TableField(value = "season")
    @DEField(name = "season")
    @JsonProperty("season")
    @JSONField(name = "season")
    @ApiModelProperty("季度")
    private Integer season;

    /**
     * 数据
     */
    @TableField(value = "data")
    @DEField(name = "data")
    @JsonProperty("data")
    @JSONField(name = "data")
    @ApiModelProperty("数据")
    private BigDecimal data;

    /**
     * 数据分类
     */
    @TableField(value = "datatype")
    @DEField(name = "datatype" , dict = "DataType")
    @JsonProperty("datatype")
    @JSONField(name = "datatype")
    @ApiModelProperty("数据分类")
    private String dataType;

    /**
     * 图表编号
     */
    @TableField(value = "chartdatano")
    @DEField(name = "chartdatano")
    @JsonProperty("chartdatano")
    @JSONField(name = "chartdatano")
    @ApiModelProperty("图表编号")
    private String chartDataNo;

    /**
     * 开盘值
     */
    @TableField(value = "open")
    @DEField(name = "open")
    @JsonProperty("open")
    @JSONField(name = "open")
    @ApiModelProperty("开盘值")
    private BigDecimal open;

    /**
     * 收盘值
     */
    @TableField(value = "close")
    @DEField(name = "close")
    @JsonProperty("close")
    @JSONField(name = "close")
    @ApiModelProperty("收盘值")
    private BigDecimal close;

    /**
     * 最小值
     */
    @TableField(value = "lowest")
    @DEField(name = "lowest")
    @JsonProperty("lowest")
    @JSONField(name = "lowest")
    @ApiModelProperty("最小值")
    private BigDecimal lowest;

    /**
     * 最大值
     */
    @TableField(value = "highest")
    @DEField(name = "highest")
    @JsonProperty("highest")
    @JSONField(name = "highest")
    @ApiModelProperty("最大值")
    private BigDecimal highest;

    /**
     * 备注
     */
    @TableField(value = "infomessage")
    @DEField(name = "infomessage")
    @JsonProperty("infomessage")
    @JSONField(name = "infomessage")
    @ApiModelProperty("备注")
    private String infomessage;

    /**
     * 计划收入
     */
    @TableField(value = "planincome")
    @DEField(name = "planincome")
    @JsonProperty("planincome")
    @JSONField(name = "planincome")
    @ApiModelProperty("计划收入")
    private BigDecimal planincome;

    /**
     * 实际收入
     */
    @TableField(value = "realincome")
    @DEField(name = "realincome")
    @JsonProperty("realincome")
    @JSONField(name = "realincome")
    @ApiModelProperty("实际收入")
    private BigDecimal realincome;

    /**
     * 图片路径
     */
    @TableField(value = "imagepath")
    @DEField(name = "imagepath")
    @JsonProperty("imagepath")
    @JSONField(name = "imagepath")
    @ApiModelProperty("图片路径")
    private String imagepath;





    /**
     * 设置 [图表名称]
     */
    public ChartData setChartDataName(String chartDataName) {
        this.chartDataName = chartDataName;
        this.modify("chartdataname", chartDataName);
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
     * 设置 [图表时间]
     */
    public ChartData setChartdate(Timestamp chartdate) {
        this.chartdate = chartdate;
        this.modify("chartdate", chartdate);
        return this;
    }
    /**
     * 格式化日期 [图表时间]
     */
    public String formatChartdate() {
        if (this.chartdate == null) {
            return null;
        }
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        return sdf.format(chartdate);
    }

    /**
     * 设置 [总计价格]
     */
    public ChartData setTotalprice(String totalprice) {
        this.totalprice = totalprice;
        this.modify("totalprice", totalprice);
        return this;
    }

    /**
     * 设置 [数据时间]
     */
    public ChartData setDateTime(Timestamp dateTime) {
        this.dateTime = dateTime;
        this.modify("datetime", dateTime);
        return this;
    }
    /**
     * 格式化日期 [数据时间]
     */
    public String formatDateTime() {
        if (this.dateTime == null) {
            return null;
        }
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        return sdf.format(dateTime);
    }

    /**
     * 设置 [开始时间]
     */
    public ChartData setBeginTime(Timestamp beginTime) {
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
    public ChartData setEndTime(Timestamp endTime) {
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
     * 设置 [经度]
     */
    public ChartData setLongitude(BigDecimal longitude) {
        this.longitude = longitude;
        this.modify("longitude", longitude);
        return this;
    }

    /**
     * 设置 [纬度]
     */
    public ChartData setLatitude(BigDecimal latitude) {
        this.latitude = latitude;
        this.modify("latitude", latitude);
        return this;
    }

    /**
     * 设置 [年份]
     */
    public ChartData setYear(Integer year) {
        this.year = year;
        this.modify("year", year);
        return this;
    }

    /**
     * 设置 [月份]
     */
    public ChartData setMonth(Integer month) {
        this.month = month;
        this.modify("month", month);
        return this;
    }

    /**
     * 设置 [季度]
     */
    public ChartData setSeason(Integer season) {
        this.season = season;
        this.modify("season", season);
        return this;
    }

    /**
     * 设置 [数据]
     */
    public ChartData setData(BigDecimal data) {
        this.data = data;
        this.modify("data", data);
        return this;
    }

    /**
     * 设置 [数据分类]
     */
    public ChartData setDataType(String dataType) {
        this.dataType = dataType;
        this.modify("datatype", dataType);
        return this;
    }

    /**
     * 设置 [图表编号]
     */
    public ChartData setChartDataNo(String chartDataNo) {
        this.chartDataNo = chartDataNo;
        this.modify("chartdatano", chartDataNo);
        return this;
    }

    /**
     * 设置 [开盘值]
     */
    public ChartData setOpen(BigDecimal open) {
        this.open = open;
        this.modify("open", open);
        return this;
    }

    /**
     * 设置 [收盘值]
     */
    public ChartData setClose(BigDecimal close) {
        this.close = close;
        this.modify("close", close);
        return this;
    }

    /**
     * 设置 [最小值]
     */
    public ChartData setLowest(BigDecimal lowest) {
        this.lowest = lowest;
        this.modify("lowest", lowest);
        return this;
    }

    /**
     * 设置 [最大值]
     */
    public ChartData setHighest(BigDecimal highest) {
        this.highest = highest;
        this.modify("highest", highest);
        return this;
    }

    /**
     * 设置 [备注]
     */
    public ChartData setInfomessage(String infomessage) {
        this.infomessage = infomessage;
        this.modify("infomessage", infomessage);
        return this;
    }

    /**
     * 设置 [计划收入]
     */
    public ChartData setPlanincome(BigDecimal planincome) {
        this.planincome = planincome;
        this.modify("planincome", planincome);
        return this;
    }

    /**
     * 设置 [实际收入]
     */
    public ChartData setRealincome(BigDecimal realincome) {
        this.realincome = realincome;
        this.modify("realincome", realincome);
        return this;
    }

    /**
     * 设置 [图片路径]
     */
    public ChartData setImagepath(String imagepath) {
        this.imagepath = imagepath;
        this.modify("imagepath", imagepath);
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
        this.reset("chartdataid");        
        return super.copyTo(targetEntity, bIncEmpty);
    }    
}