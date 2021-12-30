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
@TableName(value = "T_LOGICVALIDDATA2", resultMap = "LogicValidData2ResultMap")
@ApiModel("示例数据（启用逻辑删除）（主键数值）")
public class LogicValidData2 extends EntityMP implements Serializable
{

    /**
     * 示例数据（启用逻辑删除）（主键数值）标识
     */
    @TableId(value = "logicvaliddata2id" , type = IdType.ASSIGN_ID)
    @DEField(name = "logicvaliddata2id" , isKeyField = true)
    @JsonProperty("logicvaliddata2id")
    @JSONField(name = "logicvaliddata2id")
    @ApiModelProperty("示例数据（启用逻辑删除）（主键数值）标识")
    private Long logicValidData2Id;

    /**
     * 名称
     */
    @TableField(value = "logicvaliddata2name")
    @DEField(name = "logicvaliddata2name")
    @JsonProperty("logicvaliddata2name")
    @JSONField(name = "logicvaliddata2name")
    @ApiModelProperty("名称")
    private String logicValidData2Name;

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
     * 逻辑有效标志
     */
    @TableField(value = "enable")
    @TableLogic
    @DEField(name = "enable" , preType = DEPredefinedFieldType.LOGICVALID , logicval = "1" , logicdelval = "0")
    @JsonProperty("enable")
    @JSONField(name = "enable")
    @ApiModelProperty("逻辑有效标志")
    private Integer enable;

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
     * 唯一标识
     */
    @TableField(value = "unionkey")
    @DEField(name = "unionkey")
    @JsonProperty("unionkey")
    @JSONField(name = "unionkey")
    @ApiModelProperty("唯一标识")
    private String unionkey;

    /**
     * 区域
     */
    @TableField(value = "region")
    @DEField(name = "region")
    @JsonProperty("region")
    @JSONField(name = "region")
    @ApiModelProperty("区域")
    private String region;

    /**
     * 标识
     */
    @TableField(value = "code")
    @DEField(name = "code")
    @JsonProperty("code")
    @JSONField(name = "code")
    @ApiModelProperty("标识")
    private String code;





    /**
     * 设置 [名称]
     */
    public LogicValidData2 setLogicValidData2Name(String logicValidData2Name) {
        this.logicValidData2Name = logicValidData2Name;
        this.modify("logicvaliddata2name", logicValidData2Name);
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
     * 设置 [唯一标识]
     */
    public LogicValidData2 setUnionkey(String unionkey) {
        this.unionkey = unionkey;
        this.modify("unionkey", unionkey);
        return this;
    }

    /**
     * 设置 [区域]
     */
    public LogicValidData2 setRegion(String region) {
        this.region = region;
        this.modify("region", region);
        return this;
    }

    /**
     * 设置 [标识]
     */
    public LogicValidData2 setCode(String code) {
        this.code = code;
        this.modify("code", code);
        return this;
    }



}