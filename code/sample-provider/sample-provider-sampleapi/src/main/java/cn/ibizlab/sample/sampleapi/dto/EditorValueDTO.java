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
 * 服务DTO对象[EditorValueDTO]
 */
@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
@ApiModel("编辑器值")
public class EditorValueDTO extends DTOBase implements Serializable {

	private static final long serialVersionUID = 1L;

    /**
     * 自动填充
     */
    @JsonProperty("ac")
    @JSONField(name = "ac")
    @ApiModelProperty("自动填充")
    private String ac;

    /**
     * 选项框
     */
    @JsonProperty("checkbox")
    @JSONField(name = "checkbox")
    @ApiModelProperty("选项框")
    private Integer checkbox;

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
     * 客户标识2
     */
    @JsonProperty("customerid2")
    @JSONField(name = "customerid2")
    @ApiModelProperty("客户标识2")
    private String customerid2;

    /**
     * 客户标识3
     */
    @JsonProperty("customerid3")
    @JSONField(name = "customerid3")
    @ApiModelProperty("客户标识3")
    private String customerid3;

    /**
     * 客户标识4
     */
    @JsonProperty("customerid4")
    @JSONField(name = "customerid4")
    @ApiModelProperty("客户标识4")
    private String customerid4;

    /**
     * 客户标识5
     */
    @JsonProperty("customerid5")
    @JSONField(name = "customerid5")
    @ApiModelProperty("客户标识5")
    private String customerid5;

    /**
     * 客户名称2
     */
    @JsonProperty("customername2")
    @JSONField(name = "customername2")
    @ApiModelProperty("客户名称2")
    private String customername2;

    /**
     * 客户名称3
     */
    @JsonProperty("customername3")
    @JSONField(name = "customername3")
    @ApiModelProperty("客户名称3")
    private String customername3;

    /**
     * 客户名称4
     */
    @JsonProperty("customername4")
    @JSONField(name = "customername4")
    @ApiModelProperty("客户名称4")
    private String customername4;

    /**
     * 客户名称5
     */
    @JsonProperty("customername5")
    @JSONField(name = "customername5")
    @ApiModelProperty("客户名称5")
    private String customername5;

    /**
     * 时间选择器
     */
    @JsonProperty("datepicker")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", locale = "zh", timezone = "GMT+8")
    @JSONField(name = "datepicker" , format = "yyyy-MM-dd HH:mm:ss")
    @ApiModelProperty("时间选择器")
    private Timestamp datepicker;

    /**
     * 时间选择器（YYYY-MM-DD HH）
     */
    @JsonProperty("datepickerex_hour")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", locale = "zh", timezone = "GMT+8")
    @JSONField(name = "datepickerex_hour" , format = "yyyy-MM-dd HH:mm:ss")
    @ApiModelProperty("时间选择器（YYYY-MM-DD HH）")
    private Timestamp datepickerexHour;

    /**
     * 时间选择器（YYYY-MM-DD HH:mm）
     */
    @JsonProperty("datepickerex_minute")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", locale = "zh", timezone = "GMT+8")
    @JSONField(name = "datepickerex_minute" , format = "yyyy-MM-dd HH:mm:ss")
    @ApiModelProperty("时间选择器（YYYY-MM-DD HH:mm）")
    private Timestamp datepickerexMinute;

    /**
     * 时间选择器（HH:mm:ss）
     */
    @JsonProperty("datepickerex_noday")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", locale = "zh", timezone = "GMT+8")
    @JSONField(name = "datepickerex_noday" , format = "yyyy-MM-dd HH:mm:ss")
    @ApiModelProperty("时间选择器（HH:mm:ss）")
    private Timestamp datepickerexNoday;

    /**
     * 时间选择器（HH:mm）
     */
    @JsonProperty("datepickerex_noday_nosecond")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", locale = "zh", timezone = "GMT+8")
    @JSONField(name = "datepickerex_noday_nosecond" , format = "yyyy-MM-dd HH:mm:ss")
    @ApiModelProperty("时间选择器（HH:mm）")
    private Timestamp datepickerexNodayNosecond;

    /**
     * 时间选择器（YYYY-MM-DD）
     */
    @JsonProperty("datepickerex_notime")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", locale = "zh", timezone = "GMT+8")
    @JSONField(name = "datepickerex_notime" , format = "yyyy-MM-dd HH:mm:ss")
    @ApiModelProperty("时间选择器（YYYY-MM-DD）")
    private Timestamp datepickerexNotime;

    /**
     * 时间选择器（YYYY-MM-DD HH:mm:ss）
     */
    @JsonProperty("datepickerex_second")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", locale = "zh", timezone = "GMT+8")
    @JSONField(name = "datepickerex_second" , format = "yyyy-MM-dd HH:mm:ss")
    @ApiModelProperty("时间选择器（YYYY-MM-DD HH:mm:ss）")
    private Timestamp datepickerexSecond;

    /**
     * 组织部门标识
     */
    @JsonProperty("deptid")
    @JSONField(name = "deptid")
    @ApiModelProperty("组织部门标识")
    private String deptId;

    /**
     * 下拉列表框
     */
    @JsonProperty("dropdownlist")
    @JSONField(name = "dropdownlist")
    @ApiModelProperty("下拉列表框")
    private String dropdownlist;

    /**
     * 编辑器值标识
     */
    @JsonProperty("editorvalueid")
    @JSONField(name = "editorvalueid")
    @ApiModelProperty("编辑器值标识")
    private String editorValueId;

    /**
     * 编辑器值名称
     */
    @JsonProperty("editorvaluename")
    @JSONField(name = "editorvaluename")
    @ApiModelProperty("编辑器值名称")
    private String editorValueName;

    /**
     * 下拉列表框（多选）
     */
    @JsonProperty("mdropdownlist")
    @JSONField(name = "mdropdownlist")
    @ApiModelProperty("下拉列表框（多选）")
    private String mdropdownlist;

    /**
     * 数值框
     */
    @JsonProperty("numberval")
    @JSONField(name = "numberval")
    @ApiModelProperty("数值框")
    private BigDecimal numberval;

    /**
     * 组织机构标识
     */
    @JsonProperty("orgid")
    @JSONField(name = "orgid")
    @ApiModelProperty("组织机构标识")
    private String orgId;

    /**
     * 评分器
     */
    @JsonProperty("rating")
    @JSONField(name = "rating")
    @ApiModelProperty("评分器")
    private Integer rating;

    /**
     * 滑动输入条
     */
    @JsonProperty("slider")
    @JSONField(name = "slider")
    @ApiModelProperty("滑动输入条")
    private Integer slider;

    /**
     * 步进器
     */
    @JsonProperty("stepper")
    @JSONField(name = "stepper")
    @ApiModelProperty("步进器")
    private Integer stepper;

    /**
     * 开关部件
     */
    @JsonProperty("switchval")
    @JSONField(name = "switchval")
    @ApiModelProperty("开关部件")
    private Integer switchval;

    /**
     * 文本框
     */
    @JsonProperty("textbox")
    @JSONField(name = "textbox")
    @ApiModelProperty("文本框")
    private String textbox;

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
     * 设置 [自动填充]
     */
    public EditorValueDTO setAc(String ac) {
        this.ac = ac;
        this.modify("ac", ac);
        return this;
    }

    /**
     * 设置 [选项框]
     */
    public EditorValueDTO setCheckbox(Integer checkbox) {
        this.checkbox = checkbox;
        this.modify("checkbox", checkbox);
        return this;
    }

    /**
     * 设置 [客户标识]
     */
    public EditorValueDTO setCustomerId(String customerId) {
        this.customerId = customerId;
        this.modify("customerid", customerId);
        return this;
    }

    /**
     * 设置 [客户名称]
     */
    public EditorValueDTO setCustomerName(String customerName) {
        this.customerName = customerName;
        this.modify("customername", customerName);
        return this;
    }

    /**
     * 设置 [客户标识2]
     */
    public EditorValueDTO setCustomerid2(String customerid2) {
        this.customerid2 = customerid2;
        this.modify("customerid2", customerid2);
        return this;
    }

    /**
     * 设置 [客户标识3]
     */
    public EditorValueDTO setCustomerid3(String customerid3) {
        this.customerid3 = customerid3;
        this.modify("customerid3", customerid3);
        return this;
    }

    /**
     * 设置 [客户标识4]
     */
    public EditorValueDTO setCustomerid4(String customerid4) {
        this.customerid4 = customerid4;
        this.modify("customerid4", customerid4);
        return this;
    }

    /**
     * 设置 [客户标识5]
     */
    public EditorValueDTO setCustomerid5(String customerid5) {
        this.customerid5 = customerid5;
        this.modify("customerid5", customerid5);
        return this;
    }

    /**
     * 设置 [客户名称2]
     */
    public EditorValueDTO setCustomername2(String customername2) {
        this.customername2 = customername2;
        this.modify("customername2", customername2);
        return this;
    }

    /**
     * 设置 [客户名称3]
     */
    public EditorValueDTO setCustomername3(String customername3) {
        this.customername3 = customername3;
        this.modify("customername3", customername3);
        return this;
    }

    /**
     * 设置 [客户名称4]
     */
    public EditorValueDTO setCustomername4(String customername4) {
        this.customername4 = customername4;
        this.modify("customername4", customername4);
        return this;
    }

    /**
     * 设置 [客户名称5]
     */
    public EditorValueDTO setCustomername5(String customername5) {
        this.customername5 = customername5;
        this.modify("customername5", customername5);
        return this;
    }

    /**
     * 设置 [时间选择器]
     */
    public EditorValueDTO setDatepicker(Timestamp datepicker) {
        this.datepicker = datepicker;
        this.modify("datepicker", datepicker);
        return this;
    }

    /**
     * 设置 [时间选择器（YYYY-MM-DD HH）]
     */
    public EditorValueDTO setDatepickerexHour(Timestamp datepickerexHour) {
        this.datepickerexHour = datepickerexHour;
        this.modify("datepickerex_hour", datepickerexHour);
        return this;
    }

    /**
     * 设置 [时间选择器（YYYY-MM-DD HH:mm）]
     */
    public EditorValueDTO setDatepickerexMinute(Timestamp datepickerexMinute) {
        this.datepickerexMinute = datepickerexMinute;
        this.modify("datepickerex_minute", datepickerexMinute);
        return this;
    }

    /**
     * 设置 [时间选择器（HH:mm:ss）]
     */
    public EditorValueDTO setDatepickerexNoday(Timestamp datepickerexNoday) {
        this.datepickerexNoday = datepickerexNoday;
        this.modify("datepickerex_noday", datepickerexNoday);
        return this;
    }

    /**
     * 设置 [时间选择器（HH:mm）]
     */
    public EditorValueDTO setDatepickerexNodayNosecond(Timestamp datepickerexNodayNosecond) {
        this.datepickerexNodayNosecond = datepickerexNodayNosecond;
        this.modify("datepickerex_noday_nosecond", datepickerexNodayNosecond);
        return this;
    }

    /**
     * 设置 [时间选择器（YYYY-MM-DD）]
     */
    public EditorValueDTO setDatepickerexNotime(Timestamp datepickerexNotime) {
        this.datepickerexNotime = datepickerexNotime;
        this.modify("datepickerex_notime", datepickerexNotime);
        return this;
    }

    /**
     * 设置 [时间选择器（YYYY-MM-DD HH:mm:ss）]
     */
    public EditorValueDTO setDatepickerexSecond(Timestamp datepickerexSecond) {
        this.datepickerexSecond = datepickerexSecond;
        this.modify("datepickerex_second", datepickerexSecond);
        return this;
    }

    /**
     * 设置 [下拉列表框]
     */
    public EditorValueDTO setDropdownlist(String dropdownlist) {
        this.dropdownlist = dropdownlist;
        this.modify("dropdownlist", dropdownlist);
        return this;
    }

    /**
     * 设置 [编辑器值名称]
     */
    public EditorValueDTO setEditorValueName(String editorValueName) {
        this.editorValueName = editorValueName;
        this.modify("editorvaluename", editorValueName);
        return this;
    }

    /**
     * 设置 [下拉列表框（多选）]
     */
    public EditorValueDTO setMdropdownlist(String mdropdownlist) {
        this.mdropdownlist = mdropdownlist;
        this.modify("mdropdownlist", mdropdownlist);
        return this;
    }

    /**
     * 设置 [数值框]
     */
    public EditorValueDTO setNumberval(BigDecimal numberval) {
        this.numberval = numberval;
        this.modify("numberval", numberval);
        return this;
    }

    /**
     * 设置 [评分器]
     */
    public EditorValueDTO setRating(Integer rating) {
        this.rating = rating;
        this.modify("rating", rating);
        return this;
    }

    /**
     * 设置 [滑动输入条]
     */
    public EditorValueDTO setSlider(Integer slider) {
        this.slider = slider;
        this.modify("slider", slider);
        return this;
    }

    /**
     * 设置 [步进器]
     */
    public EditorValueDTO setStepper(Integer stepper) {
        this.stepper = stepper;
        this.modify("stepper", stepper);
        return this;
    }

    /**
     * 设置 [开关部件]
     */
    public EditorValueDTO setSwitchval(Integer switchval) {
        this.switchval = switchval;
        this.modify("switchval", switchval);
        return this;
    }

    /**
     * 设置 [文本框]
     */
    public EditorValueDTO setTextbox(String textbox) {
        this.textbox = textbox;
        this.modify("textbox", textbox);
        return this;
    }


}
