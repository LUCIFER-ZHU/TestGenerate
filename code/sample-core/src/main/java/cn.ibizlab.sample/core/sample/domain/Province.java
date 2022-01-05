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
@TableName(value = "T_PROVINCE", resultMap = "ProvinceResultMap")
@ApiModel("省份")
public class Province extends EntityMP implements Serializable
{

    /**
     * 省份名称
     */
    @TableField(value = "provincename")
    @DEField(name = "provincename")
    @JsonProperty("provincename")
    @JSONField(name = "provincename")
    @ApiModelProperty("省份名称")
    private String provinceName;

    /**
     * 省份标识
     */
    @TableId(value = "provinceid" , type = IdType.ASSIGN_UUID)
    @DEField(name = "provinceid" , isKeyField = true)
    @JsonProperty("provinceid")
    @JSONField(name = "provinceid")
    @ApiModelProperty("省份标识")
    private String provinceId;

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
     * 编号
     */
    @TableField(value = "code")
    @DEField(name = "code")
    @JsonProperty("code")
    @JSONField(name = "code")
    @ApiModelProperty("编号")
    private String code;

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
     * 序号
     */
    @TableField(value = "sn")
    @DEField(name = "sn")
    @JsonProperty("sn")
    @JSONField(name = "sn")
    @ApiModelProperty("序号")
    private Integer sn;




    /**
     * 设置 [省份名称]
     */
    public Province setProvinceName(String provinceName) {
        this.provinceName = provinceName;
        this.modify("provincename", provinceName);
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
     * 设置 [编号]
     */
    public Province setCode(String code) {
        this.code = code;
        this.modify("code", code);
        return this;
    }

    /**
     * 设置 [备注]
     */
    public Province setMemo(String memo) {
        this.memo = memo;
        this.modify("memo", memo);
        return this;
    }

    /**
     * 设置 [序号]
     */
    public Province setSn(Integer sn) {
        this.sn = sn;
        this.modify("sn", sn);
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
        this.reset("provinceid");        
        return super.copyTo(targetEntity, bIncEmpty);
    }    
}