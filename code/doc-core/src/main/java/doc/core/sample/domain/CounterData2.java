package doc.core.sample.domain;

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
@TableName(value = "T_COUNTERDATA2", resultMap = "CounterData2ResultMap")
@ApiModel("计数器数据2")
public class CounterData2 extends EntityMP implements Serializable
{

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
     * 计数器数据2标识
     */
    @TableId(value = "counterdata2id" , type = IdType.ASSIGN_UUID)
    @DEField(name = "counterdata2id" , isKeyField = true)
    @JsonProperty("counterdata2id")
    @JSONField(name = "counterdata2id")
    @ApiModelProperty("计数器数据2标识")
    private String counterData2Id;

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
     * 计数器数据2名称
     */
    @TableField(value = "counterdata2name")
    @DEField(name = "counterdata2name")
    @JsonProperty("counterdata2name")
    @JSONField(name = "counterdata2name")
    @ApiModelProperty("计数器数据2名称")
    private String counterData2Name;

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
     * 计数1
     */
    @TableField(value = "countertag")
    @DEField(name = "countertag")
    @JsonProperty("countertag")
    @JSONField(name = "countertag")
    @ApiModelProperty("计数1")
    private Integer countertag;

    /**
     * 计数2
     */
    @TableField(value = "countertag2")
    @DEField(name = "countertag2")
    @JsonProperty("countertag2")
    @JSONField(name = "countertag2")
    @ApiModelProperty("计数2")
    private Integer countertag2;

    /**
     * 计数3
     */
    @TableField(value = "countertag3")
    @DEField(name = "countertag3")
    @JsonProperty("countertag3")
    @JSONField(name = "countertag3")
    @ApiModelProperty("计数3")
    private Integer countertag3;

    /**
     * 计数4
     */
    @TableField(value = "countertag4")
    @DEField(name = "countertag4")
    @JsonProperty("countertag4")
    @JSONField(name = "countertag4")
    @ApiModelProperty("计数4")
    private Integer countertag4;

    /**
     * 计数5
     */
    @TableField(value = "countertag5")
    @DEField(name = "countertag5")
    @JsonProperty("countertag5")
    @JSONField(name = "countertag5")
    @ApiModelProperty("计数5")
    private Integer countertag5;

    /**
     * 计数6
     */
    @TableField(value = "countertag6")
    @DEField(name = "countertag6")
    @JsonProperty("countertag6")
    @JSONField(name = "countertag6")
    @ApiModelProperty("计数6")
    private Integer countertag6;

    /**
     * 计数7
     */
    @TableField(value = "countertag7")
    @DEField(name = "countertag7")
    @JsonProperty("countertag7")
    @JSONField(name = "countertag7")
    @ApiModelProperty("计数7")
    private Integer countertag7;

    /**
     * 计数8
     */
    @TableField(value = "countertag8")
    @DEField(name = "countertag8")
    @JsonProperty("countertag8")
    @JSONField(name = "countertag8")
    @ApiModelProperty("计数8")
    private Integer countertag8;

    /**
     * 计数9
     */
    @TableField(value = "countertag9")
    @DEField(name = "countertag9")
    @JsonProperty("countertag9")
    @JSONField(name = "countertag9")
    @ApiModelProperty("计数9")
    private Integer countertag9;





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
     * 设置 [计数器数据2名称]
     */
    public CounterData2 setCounterData2Name(String counterData2Name) {
        this.counterData2Name = counterData2Name;
        this.modify("counterdata2name", counterData2Name);
        return this;
    }



    /**
     * 设置 [计数1]
     */
    public CounterData2 setCountertag(Integer countertag) {
        this.countertag = countertag;
        this.modify("countertag", countertag);
        return this;
    }

    /**
     * 设置 [计数2]
     */
    public CounterData2 setCountertag2(Integer countertag2) {
        this.countertag2 = countertag2;
        this.modify("countertag2", countertag2);
        return this;
    }

    /**
     * 设置 [计数3]
     */
    public CounterData2 setCountertag3(Integer countertag3) {
        this.countertag3 = countertag3;
        this.modify("countertag3", countertag3);
        return this;
    }

    /**
     * 设置 [计数4]
     */
    public CounterData2 setCountertag4(Integer countertag4) {
        this.countertag4 = countertag4;
        this.modify("countertag4", countertag4);
        return this;
    }

    /**
     * 设置 [计数5]
     */
    public CounterData2 setCountertag5(Integer countertag5) {
        this.countertag5 = countertag5;
        this.modify("countertag5", countertag5);
        return this;
    }

    /**
     * 设置 [计数6]
     */
    public CounterData2 setCountertag6(Integer countertag6) {
        this.countertag6 = countertag6;
        this.modify("countertag6", countertag6);
        return this;
    }

    /**
     * 设置 [计数7]
     */
    public CounterData2 setCountertag7(Integer countertag7) {
        this.countertag7 = countertag7;
        this.modify("countertag7", countertag7);
        return this;
    }

    /**
     * 设置 [计数8]
     */
    public CounterData2 setCountertag8(Integer countertag8) {
        this.countertag8 = countertag8;
        this.modify("countertag8", countertag8);
        return this;
    }

    /**
     * 设置 [计数9]
     */
    public CounterData2 setCountertag9(Integer countertag9) {
        this.countertag9 = countertag9;
        this.modify("countertag9", countertag9);
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
        this.reset("counterdata2id");        
        return super.copyTo(targetEntity, bIncEmpty);
    }    
}