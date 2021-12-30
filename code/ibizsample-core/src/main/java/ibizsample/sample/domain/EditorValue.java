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
@TableName(value = "T_EDITORVALUE", resultMap = "EditorValueResultMap")
@ApiModel("编辑器值")
public class EditorValue extends EntityMP implements Serializable
{

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
     * 建立人
     */
    @TableField(value = "createman" , fill = FieldFill.INSERT)
    @DEField(name = "createman" , preType = DEPredefinedFieldType.CREATEMAN , dict = "SysOperator")
    @JsonProperty("createman")
    @JSONField(name = "createman")
    @ApiModelProperty("建立人")
    private String createMan;

    /**
     * 编辑器值标识
     */
    @TableId(value = "editorvalueid" , type = IdType.ASSIGN_UUID)
    @DEField(name = "editorvalueid" , isKeyField = true)
    @JsonProperty("editorvalueid")
    @JSONField(name = "editorvalueid")
    @ApiModelProperty("编辑器值标识")
    private String editorValueId;

    /**
     * 编辑器值名称
     */
    @TableField(value = "editorvaluename")
    @DEField(name = "editorvaluename")
    @JsonProperty("editorvaluename")
    @JSONField(name = "editorvaluename")
    @ApiModelProperty("编辑器值名称")
    private String editorValueName;

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
     * 下拉列表框
     */
    @TableField(value = "dropdownlist")
    @DEField(name = "dropdownlist")
    @JsonProperty("dropdownlist")
    @JSONField(name = "dropdownlist")
    @ApiModelProperty("下拉列表框")
    private String dropdownlist;

    /**
     * 下拉列表框（多选）
     */
    @TableField(value = "mdropdownlist")
    @DEField(name = "mdropdownlist")
    @JsonProperty("mdropdownlist")
    @JSONField(name = "mdropdownlist")
    @ApiModelProperty("下拉列表框（多选）")
    private String mdropdownlist;

    /**
     * 开关部件
     */
    @TableField(value = "switchval")
    @DEField(name = "switchval" , dict = "YesNo")
    @JsonProperty("switchval")
    @JSONField(name = "switchval")
    @ApiModelProperty("开关部件")
    private Integer switchval;

    /**
     * 数值框
     */
    @TableField(value = "numberval")
    @DEField(name = "numberval")
    @JsonProperty("numberval")
    @JSONField(name = "numberval")
    @ApiModelProperty("数值框")
    private BigDecimal numberval;

    /**
     * 文本框
     */
    @TableField(value = "textbox")
    @DEField(name = "textbox")
    @JsonProperty("textbox")
    @JSONField(name = "textbox")
    @ApiModelProperty("文本框")
    private String textbox;

    /**
     * 时间选择器
     */
    @TableField(value = "datepicker")
    @DEField(name = "datepicker")
    @JsonProperty("datepicker")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", locale = "zh", timezone = "GMT+8")
    @JSONField(name = "datepicker" , format = "yyyy-MM-dd HH:mm:ss")
    @ApiModelProperty("时间选择器")
    private Timestamp datepicker;

    /**
     * 时间选择器（HH:mm:ss）
     */
    @TableField(value = "datepickerex_noday")
    @DEField(name = "datepickerex_noday")
    @JsonProperty("datepickerex_noday")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", locale = "zh", timezone = "GMT+8")
    @JSONField(name = "datepickerex_noday" , format = "yyyy-MM-dd HH:mm:ss")
    @ApiModelProperty("时间选择器（HH:mm:ss）")
    private Timestamp datepickerexNoday;

    /**
     * 时间选择器（HH:mm）
     */
    @TableField(value = "datepickerex_noday_nosecond")
    @DEField(name = "datepickerex_noday_nosecond")
    @JsonProperty("datepickerex_noday_nosecond")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", locale = "zh", timezone = "GMT+8")
    @JSONField(name = "datepickerex_noday_nosecond" , format = "yyyy-MM-dd HH:mm:ss")
    @ApiModelProperty("时间选择器（HH:mm）")
    private Timestamp datepickerexNodayNosecond;

    /**
     * 时间选择器（YYYY-MM-DD HH:mm:ss）
     */
    @TableField(value = "datepickerex_second")
    @DEField(name = "datepickerex_second")
    @JsonProperty("datepickerex_second")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", locale = "zh", timezone = "GMT+8")
    @JSONField(name = "datepickerex_second" , format = "yyyy-MM-dd HH:mm:ss")
    @ApiModelProperty("时间选择器（YYYY-MM-DD HH:mm:ss）")
    private Timestamp datepickerexSecond;

    /**
     * 时间选择器（YYYY-MM-DD HH:mm）
     */
    @TableField(value = "datepickerex_minute")
    @DEField(name = "datepickerex_minute")
    @JsonProperty("datepickerex_minute")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", locale = "zh", timezone = "GMT+8")
    @JSONField(name = "datepickerex_minute" , format = "yyyy-MM-dd HH:mm:ss")
    @ApiModelProperty("时间选择器（YYYY-MM-DD HH:mm）")
    private Timestamp datepickerexMinute;

    /**
     * 时间选择器（YYYY-MM-DD HH）
     */
    @TableField(value = "datepickerex_hour")
    @DEField(name = "datepickerex_hour")
    @JsonProperty("datepickerex_hour")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", locale = "zh", timezone = "GMT+8")
    @JSONField(name = "datepickerex_hour" , format = "yyyy-MM-dd HH:mm:ss")
    @ApiModelProperty("时间选择器（YYYY-MM-DD HH）")
    private Timestamp datepickerexHour;

    /**
     * 时间选择器（YYYY-MM-DD）
     */
    @TableField(value = "datepickerex_notime")
    @DEField(name = "datepickerex_notime")
    @JsonProperty("datepickerex_notime")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", locale = "zh", timezone = "GMT+8")
    @JSONField(name = "datepickerex_notime" , format = "yyyy-MM-dd HH:mm:ss")
    @ApiModelProperty("时间选择器（YYYY-MM-DD）")
    private Timestamp datepickerexNotime;

    /**
     * 步进器
     */
    @TableField(value = "stepper")
    @DEField(name = "stepper")
    @JsonProperty("stepper")
    @JSONField(name = "stepper")
    @ApiModelProperty("步进器")
    private Integer stepper;

    /**
     * 滑动输入条
     */
    @TableField(value = "slider")
    @DEField(name = "slider")
    @JsonProperty("slider")
    @JSONField(name = "slider")
    @ApiModelProperty("滑动输入条")
    private Integer slider;

    /**
     * 自动填充
     */
    @TableField(value = "ac")
    @DEField(name = "ac")
    @JsonProperty("ac")
    @JSONField(name = "ac")
    @ApiModelProperty("自动填充")
    private String ac;

    /**
     * 评分器
     */
    @TableField(value = "rating")
    @DEField(name = "rating")
    @JsonProperty("rating")
    @JSONField(name = "rating")
    @ApiModelProperty("评分器")
    private Integer rating;

    /**
     * 选项框
     */
    @TableField(value = "checkbox")
    @DEField(name = "checkbox" , dict = "YesNo")
    @JsonProperty("checkbox")
    @JSONField(name = "checkbox")
    @ApiModelProperty("选项框")
    private Integer checkbox;

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
     * 客户标识2
     */
    @TableField(value = "customerid2")
    @DEField(name = "customerid2")
    @JsonProperty("customerid2")
    @JSONField(name = "customerid2")
    @ApiModelProperty("客户标识2")
    private String customerid2;

    /**
     * 客户名称2
     */
    @TableField(value = "customername2" , exist = false)
    @DEField(name = "customername2")
    @JsonProperty("customername2")
    @JSONField(name = "customername2")
    @ApiModelProperty("客户名称2")
    private String customername2;

    /**
     * 客户标识3
     */
    @TableField(value = "customerid3")
    @DEField(name = "customerid3")
    @JsonProperty("customerid3")
    @JSONField(name = "customerid3")
    @ApiModelProperty("客户标识3")
    private String customerid3;

    /**
     * 客户名称3
     */
    @TableField(value = "customername3" , exist = false)
    @DEField(name = "customername3")
    @JsonProperty("customername3")
    @JSONField(name = "customername3")
    @ApiModelProperty("客户名称3")
    private String customername3;

    /**
     * 客户标识4
     */
    @TableField(value = "customerid4")
    @DEField(name = "customerid4")
    @JsonProperty("customerid4")
    @JSONField(name = "customerid4")
    @ApiModelProperty("客户标识4")
    private String customerid4;

    /**
     * 客户名称4
     */
    @TableField(value = "customername4" , exist = false)
    @DEField(name = "customername4")
    @JsonProperty("customername4")
    @JSONField(name = "customername4")
    @ApiModelProperty("客户名称4")
    private String customername4;

    /**
     * 客户标识5
     */
    @TableField(value = "customerid5")
    @DEField(name = "customerid5")
    @JsonProperty("customerid5")
    @JSONField(name = "customerid5")
    @ApiModelProperty("客户标识5")
    private String customerid5;

    /**
     * 客户名称5
     */
    @TableField(value = "customername5" , exist = false)
    @DEField(name = "customername5")
    @JsonProperty("customername5")
    @JSONField(name = "customername5")
    @ApiModelProperty("客户名称5")
    private String customername5;


    /**
     * 客户
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private ibizsample.core.sample.domain.Customer customer;
    /**
     * 客户
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private ibizsample.core.sample.domain.Customer no2Customer;
    /**
     * 客户
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private ibizsample.core.sample.domain.Customer no3Customer;
    /**
     * 客户
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private ibizsample.core.sample.domain.Customer no4Customer;
    /**
     * 客户
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private ibizsample.core.sample.domain.Customer no5Customer;


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
     * 设置 [编辑器值名称]
     */
    public EditorValue setEditorValueName(String editorValueName) {
        this.editorValueName = editorValueName;
        this.modify("editorvaluename", editorValueName);
        return this;
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
     * 设置 [下拉列表框]
     */
    public EditorValue setDropdownlist(String dropdownlist) {
        this.dropdownlist = dropdownlist;
        this.modify("dropdownlist", dropdownlist);
        return this;
    }

    /**
     * 设置 [下拉列表框（多选）]
     */
    public EditorValue setMdropdownlist(String mdropdownlist) {
        this.mdropdownlist = mdropdownlist;
        this.modify("mdropdownlist", mdropdownlist);
        return this;
    }

    /**
     * 设置 [开关部件]
     */
    public EditorValue setSwitchval(Integer switchval) {
        this.switchval = switchval;
        this.modify("switchval", switchval);
        return this;
    }

    /**
     * 设置 [数值框]
     */
    public EditorValue setNumberval(BigDecimal numberval) {
        this.numberval = numberval;
        this.modify("numberval", numberval);
        return this;
    }

    /**
     * 设置 [文本框]
     */
    public EditorValue setTextbox(String textbox) {
        this.textbox = textbox;
        this.modify("textbox", textbox);
        return this;
    }

    /**
     * 设置 [时间选择器]
     */
    public EditorValue setDatepicker(Timestamp datepicker) {
        this.datepicker = datepicker;
        this.modify("datepicker", datepicker);
        return this;
    }
    /**
     * 格式化日期 [时间选择器]
     */
    public String formatDatepicker() {
        if (this.datepicker == null) {
            return null;
        }
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        return sdf.format(datepicker);
    }

    /**
     * 设置 [时间选择器（HH:mm:ss）]
     */
    public EditorValue setDatepickerexNoday(Timestamp datepickerexNoday) {
        this.datepickerexNoday = datepickerexNoday;
        this.modify("datepickerex_noday", datepickerexNoday);
        return this;
    }
    /**
     * 格式化日期 [时间选择器（HH:mm:ss）]
     */
    public String formatDatepickerexNoday() {
        if (this.datepickerexNoday == null) {
            return null;
        }
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        return sdf.format(datepickerexNoday);
    }

    /**
     * 设置 [时间选择器（HH:mm）]
     */
    public EditorValue setDatepickerexNodayNosecond(Timestamp datepickerexNodayNosecond) {
        this.datepickerexNodayNosecond = datepickerexNodayNosecond;
        this.modify("datepickerex_noday_nosecond", datepickerexNodayNosecond);
        return this;
    }
    /**
     * 格式化日期 [时间选择器（HH:mm）]
     */
    public String formatDatepickerexNodayNosecond() {
        if (this.datepickerexNodayNosecond == null) {
            return null;
        }
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        return sdf.format(datepickerexNodayNosecond);
    }

    /**
     * 设置 [时间选择器（YYYY-MM-DD HH:mm:ss）]
     */
    public EditorValue setDatepickerexSecond(Timestamp datepickerexSecond) {
        this.datepickerexSecond = datepickerexSecond;
        this.modify("datepickerex_second", datepickerexSecond);
        return this;
    }
    /**
     * 格式化日期 [时间选择器（YYYY-MM-DD HH:mm:ss）]
     */
    public String formatDatepickerexSecond() {
        if (this.datepickerexSecond == null) {
            return null;
        }
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        return sdf.format(datepickerexSecond);
    }

    /**
     * 设置 [时间选择器（YYYY-MM-DD HH:mm）]
     */
    public EditorValue setDatepickerexMinute(Timestamp datepickerexMinute) {
        this.datepickerexMinute = datepickerexMinute;
        this.modify("datepickerex_minute", datepickerexMinute);
        return this;
    }
    /**
     * 格式化日期 [时间选择器（YYYY-MM-DD HH:mm）]
     */
    public String formatDatepickerexMinute() {
        if (this.datepickerexMinute == null) {
            return null;
        }
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        return sdf.format(datepickerexMinute);
    }

    /**
     * 设置 [时间选择器（YYYY-MM-DD HH）]
     */
    public EditorValue setDatepickerexHour(Timestamp datepickerexHour) {
        this.datepickerexHour = datepickerexHour;
        this.modify("datepickerex_hour", datepickerexHour);
        return this;
    }
    /**
     * 格式化日期 [时间选择器（YYYY-MM-DD HH）]
     */
    public String formatDatepickerexHour() {
        if (this.datepickerexHour == null) {
            return null;
        }
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        return sdf.format(datepickerexHour);
    }

    /**
     * 设置 [时间选择器（YYYY-MM-DD）]
     */
    public EditorValue setDatepickerexNotime(Timestamp datepickerexNotime) {
        this.datepickerexNotime = datepickerexNotime;
        this.modify("datepickerex_notime", datepickerexNotime);
        return this;
    }
    /**
     * 格式化日期 [时间选择器（YYYY-MM-DD）]
     */
    public String formatDatepickerexNotime() {
        if (this.datepickerexNotime == null) {
            return null;
        }
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        return sdf.format(datepickerexNotime);
    }

    /**
     * 设置 [步进器]
     */
    public EditorValue setStepper(Integer stepper) {
        this.stepper = stepper;
        this.modify("stepper", stepper);
        return this;
    }

    /**
     * 设置 [滑动输入条]
     */
    public EditorValue setSlider(Integer slider) {
        this.slider = slider;
        this.modify("slider", slider);
        return this;
    }

    /**
     * 设置 [自动填充]
     */
    public EditorValue setAc(String ac) {
        this.ac = ac;
        this.modify("ac", ac);
        return this;
    }

    /**
     * 设置 [评分器]
     */
    public EditorValue setRating(Integer rating) {
        this.rating = rating;
        this.modify("rating", rating);
        return this;
    }

    /**
     * 设置 [选项框]
     */
    public EditorValue setCheckbox(Integer checkbox) {
        this.checkbox = checkbox;
        this.modify("checkbox", checkbox);
        return this;
    }

    /**
     * 设置 [客户标识]
     */
    public EditorValue setCustomerId(String customerId) {
        this.customerId = customerId;
        this.modify("customerid", customerId);
        return this;
    }

    /**
     * 设置 [客户名称]
     */
    public EditorValue setCustomerName(String customerName) {
        this.customerName = customerName;
        this.modify("customername", customerName);
        return this;
    }

    /**
     * 设置 [客户标识2]
     */
    public EditorValue setCustomerid2(String customerid2) {
        this.customerid2 = customerid2;
        this.modify("customerid2", customerid2);
        return this;
    }

    /**
     * 设置 [客户名称2]
     */
    public EditorValue setCustomername2(String customername2) {
        this.customername2 = customername2;
        this.modify("customername2", customername2);
        return this;
    }

    /**
     * 设置 [客户标识3]
     */
    public EditorValue setCustomerid3(String customerid3) {
        this.customerid3 = customerid3;
        this.modify("customerid3", customerid3);
        return this;
    }

    /**
     * 设置 [客户名称3]
     */
    public EditorValue setCustomername3(String customername3) {
        this.customername3 = customername3;
        this.modify("customername3", customername3);
        return this;
    }

    /**
     * 设置 [客户标识4]
     */
    public EditorValue setCustomerid4(String customerid4) {
        this.customerid4 = customerid4;
        this.modify("customerid4", customerid4);
        return this;
    }

    /**
     * 设置 [客户名称4]
     */
    public EditorValue setCustomername4(String customername4) {
        this.customername4 = customername4;
        this.modify("customername4", customername4);
        return this;
    }

    /**
     * 设置 [客户标识5]
     */
    public EditorValue setCustomerid5(String customerid5) {
        this.customerid5 = customerid5;
        this.modify("customerid5", customerid5);
        return this;
    }

    /**
     * 设置 [客户名称5]
     */
    public EditorValue setCustomername5(String customername5) {
        this.customername5 = customername5;
        this.modify("customername5", customername5);
        return this;
    }



}