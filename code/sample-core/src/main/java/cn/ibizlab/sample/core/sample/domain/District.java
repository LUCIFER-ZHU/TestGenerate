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
import cn.ibizlab.sample.core.sample.domain.City;

@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
@JsonIgnoreProperties(value = "handler")
@TableName(value = "T_DISTRICT", resultMap = "DistrictResultMap")
@ApiModel("区")
public class District extends EntityMP implements Serializable
{

    /**
     * 区名称
     */
    @TableField(value = "districtname")
    @DEField(name = "districtname")
    @JsonProperty("districtname")
    @JSONField(name = "districtname")
    @ApiModelProperty("区名称")
    private String districtName;

    /**
     * 区标识
     */
    @TableId(value = "districtid" , type = IdType.ASSIGN_UUID)
    @DEField(name = "districtid" , isKeyField = true)
    @JsonProperty("districtid")
    @JSONField(name = "districtid")
    @ApiModelProperty("区标识")
    private String districtId;

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
     * 市标识
     */
    @TableField(value = "cityid")
    @DEField(name = "cityid")
    @JsonProperty("cityid")
    @JSONField(name = "cityid")
    @ApiModelProperty("市标识")
    private String cityId;

    /**
     * 市名称
     */
    @TableField(value = "cityname" , exist = false)
    @DEField(name = "cityname")
    @JsonProperty("cityname")
    @JSONField(name = "cityname")
    @ApiModelProperty("市名称")
    private String cityName;

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
     * 市
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private City city;


    /**
     * 设置 [区名称]
     */
    public District setDistrictName(String districtName) {
        this.districtName = districtName;
        this.modify("districtname", districtName);
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
     * 设置 [编号]
     */
    public District setCode(String code) {
        this.code = code;
        this.modify("code", code);
        return this;
    }

    /**
     * 设置 [市标识]
     */
    public District setCityId(String cityId) {
        this.cityId = cityId;
        this.modify("cityid", cityId);
        return this;
    }

    /**
     * 设置 [市名称]
     */
    public District setCityName(String cityName) {
        this.cityName = cityName;
        this.modify("cityname", cityName);
        return this;
    }

    /**
     * 设置 [备注]
     */
    public District setMemo(String memo) {
        this.memo = memo;
        this.modify("memo", memo);
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
        this.reset("districtid");        
        return super.copyTo(targetEntity, bIncEmpty);
    }    
}