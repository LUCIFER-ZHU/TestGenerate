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
@TableName(value = "T_ORGDATA", resultMap = "OrgDataResultMap")
@ApiModel("组织数据")
public class OrgData extends EntityMP implements Serializable
{

    /**
     * 组织数据标识
     */
    @TableId(value = "orgdataid" , type = IdType.ASSIGN_UUID)
    @DEField(name = "orgdataid" , isKeyField = true)
    @JsonProperty("orgdataid")
    @JSONField(name = "orgdataid")
    @ApiModelProperty("组织数据标识")
    private String orgDataId;

    /**
     * 组织名称
     */
    @TableField(value = "orgdataname")
    @DEField(name = "orgdataname")
    @JsonProperty("orgdataname")
    @JSONField(name = "orgdataname")
    @ApiModelProperty("组织名称")
    private String orgDataName;

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
     * 父级组织数据标识
     */
    @TableField(value = "porgdataid")
    @DEField(name = "porgdataid")
    @JsonProperty("porgdataid")
    @JSONField(name = "porgdataid")
    @ApiModelProperty("父级组织数据标识")
    private String porgdataid;

    /**
     * 父级组织
     */
    @TableField(value = "porgdataname" , exist = false)
    @DEField(name = "porgdataname")
    @JsonProperty("porgdataname")
    @JSONField(name = "porgdataname")
    @ApiModelProperty("父级组织")
    private String porgdataname;

    /**
     * 组织编码
     */
    @TableField(value = "orgdatacode")
    @DEField(name = "orgdatacode")
    @JsonProperty("orgdatacode")
    @JSONField(name = "orgdatacode")
    @ApiModelProperty("组织编码")
    private String orgdatacode;


    /**
     * 组织数据
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private ibizsample.core.sample.domain.OrgData pOrgData;



    /**
     * 设置 [组织名称]
     */
    public OrgData setOrgDataName(String orgDataName) {
        this.orgDataName = orgDataName;
        this.modify("orgdataname", orgDataName);
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
     * 设置 [父级组织数据标识]
     */
    public OrgData setPorgdataid(String porgdataid) {
        this.porgdataid = porgdataid;
        this.modify("porgdataid", porgdataid);
        return this;
    }

    /**
     * 设置 [父级组织]
     */
    public OrgData setPorgdataname(String porgdataname) {
        this.porgdataname = porgdataname;
        this.modify("porgdataname", porgdataname);
        return this;
    }

    /**
     * 设置 [组织编码]
     */
    public OrgData setOrgdatacode(String orgdatacode) {
        this.orgdatacode = orgdatacode;
        this.modify("orgdatacode", orgdatacode);
        return this;
    }



}