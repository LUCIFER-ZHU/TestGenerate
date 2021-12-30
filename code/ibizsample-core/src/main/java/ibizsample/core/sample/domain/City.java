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
@TableName(value = "T_CITY", resultMap = "CityResultMap")
@ApiModel("市")
public class City extends EntityMP implements Serializable
{

    /**
     * 市标识
     */
    @TableId(value = "cityid" , type = IdType.ASSIGN_UUID)
    @DEField(name = "cityid" , isKeyField = true)
    @JsonProperty("cityid")
    @JSONField(name = "cityid")
    @ApiModelProperty("市标识")
    private String cityId;

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
     * 市名称
     */
    @TableField(value = "cityname")
    @DEField(name = "cityname")
    @JsonProperty("cityname")
    @JSONField(name = "cityname")
    @ApiModelProperty("市名称")
    private String cityName;

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
     * 编号
     */
    @TableField(value = "code")
    @DEField(name = "code")
    @JsonProperty("code")
    @JSONField(name = "code")
    @ApiModelProperty("编号")
    private String code;

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
     * 省份名称
     */
    @TableField(value = "provincename" , exist = false)
    @DEField(name = "provincename")
    @JsonProperty("provincename")
    @JSONField(name = "provincename")
    @ApiModelProperty("省份名称")
    private String provinceName;

    /**
     * 备注
     */
    @TableField(value = "memo")
    @DEField(name = "memo")
    @JsonProperty("memo")
    @JSONField(name = "memo")
    @ApiModelProperty("备注")
    private String memo;


    /**
     * 省份
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private ibizsample.core.sample.domain.Province province;




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
     * 设置 [市名称]
     */
    public City setCityName(String cityName) {
        this.cityName = cityName;
        this.modify("cityname", cityName);
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
     * 设置 [编号]
     */
    public City setCode(String code) {
        this.code = code;
        this.modify("code", code);
        return this;
    }

    /**
     * 设置 [省份标识]
     */
    public City setProvinceId(String provinceId) {
        this.provinceId = provinceId;
        this.modify("provinceid", provinceId);
        return this;
    }

    /**
     * 设置 [省份名称]
     */
    public City setProvinceName(String provinceName) {
        this.provinceName = provinceName;
        this.modify("provincename", provinceName);
        return this;
    }

    /**
     * 设置 [备注]
     */
    public City setMemo(String memo) {
        this.memo = memo;
        this.modify("memo", memo);
        return this;
    }



}