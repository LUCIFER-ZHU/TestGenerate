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
import doc.core.sample.domain.DeptData;
import doc.core.sample.domain.OrgData;

@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
@JsonIgnoreProperties(value = "handler")
@TableName(value = "T_PERSONDATA", resultMap = "PersonDataResultMap")
@ApiModel("人员数据")
public class PersonData extends EntityMP implements Serializable
{

    /**
     * 人员数据标识
     */
    @TableId(value = "persondataid" , type = IdType.ASSIGN_UUID)
    @DEField(name = "persondataid" , isKeyField = true)
    @JsonProperty("persondataid")
    @JSONField(name = "persondataid")
    @ApiModelProperty("人员数据标识")
    private String personDataId;

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
     * 姓名
     */
    @TableField(value = "persondataname")
    @DEField(name = "persondataname")
    @JsonProperty("persondataname")
    @JSONField(name = "persondataname")
    @ApiModelProperty("姓名")
    private String personDataName;

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
     * 组织数据标识
     */
    @TableField(value = "orgdataid")
    @DEField(name = "orgdataid")
    @JsonProperty("orgdataid")
    @JSONField(name = "orgdataid")
    @ApiModelProperty("组织数据标识")
    private String orgDataId;

    /**
     * 组织名称
     */
    @TableField(value = "orgdataname" , exist = false)
    @DEField(name = "orgdataname")
    @JsonProperty("orgdataname")
    @JSONField(name = "orgdataname")
    @ApiModelProperty("组织名称")
    private String orgDataName;

    /**
     * 部门数据标识
     */
    @TableField(value = "deptdataid")
    @DEField(name = "deptdataid")
    @JsonProperty("deptdataid")
    @JSONField(name = "deptdataid")
    @ApiModelProperty("部门数据标识")
    private String deptDataId;

    /**
     * 部门名称
     */
    @TableField(value = "deptdataname" , exist = false)
    @DEField(name = "deptdataname")
    @JsonProperty("deptdataname")
    @JSONField(name = "deptdataname")
    @ApiModelProperty("部门名称")
    private String deptDataName;

    /**
     * 身份证
     */
    @TableField(value = "idcard")
    @DEField(name = "idcard")
    @JsonProperty("idcard")
    @JSONField(name = "idcard")
    @ApiModelProperty("身份证")
    private String idcard;

    /**
     * 性别
     */
    @TableField(value = "gender")
    @DEField(name = "gender" , defaultValue = "1" , dict = "Gender")
    @JsonProperty("gender")
    @JSONField(name = "gender")
    @ApiModelProperty("性别")
    private String gender;

    /**
     * 年龄
     */
    @TableField(value = "age")
    @DEField(name = "age")
    @JsonProperty("age")
    @JSONField(name = "age")
    @ApiModelProperty("年龄")
    private Integer age;

    /**
     * 头像
     */
    @TableField(value = "avatar")
    @DEField(name = "avatar")
    @JsonProperty("avatar")
    @JSONField(name = "avatar")
    @ApiModelProperty("头像")
    private String avatar;


    /**
     * 部门数据
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private DeptData deptdata;
    /**
     * 组织数据
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private OrgData orgdata;



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
     * 设置 [姓名]
     */
    public PersonData setPersonDataName(String personDataName) {
        this.personDataName = personDataName;
        this.modify("persondataname", personDataName);
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
     * 设置 [组织数据标识]
     */
    public PersonData setOrgDataId(String orgDataId) {
        this.orgDataId = orgDataId;
        this.modify("orgdataid", orgDataId);
        return this;
    }

    /**
     * 设置 [组织名称]
     */
    public PersonData setOrgDataName(String orgDataName) {
        this.orgDataName = orgDataName;
        this.modify("orgdataname", orgDataName);
        return this;
    }

    /**
     * 设置 [部门数据标识]
     */
    public PersonData setDeptDataId(String deptDataId) {
        this.deptDataId = deptDataId;
        this.modify("deptdataid", deptDataId);
        return this;
    }

    /**
     * 设置 [部门名称]
     */
    public PersonData setDeptDataName(String deptDataName) {
        this.deptDataName = deptDataName;
        this.modify("deptdataname", deptDataName);
        return this;
    }

    /**
     * 设置 [身份证]
     */
    public PersonData setIdcard(String idcard) {
        this.idcard = idcard;
        this.modify("idcard", idcard);
        return this;
    }

    /**
     * 设置 [性别]
     */
    public PersonData setGender(String gender) {
        this.gender = gender;
        this.modify("gender", gender);
        return this;
    }

    /**
     * 设置 [年龄]
     */
    public PersonData setAge(Integer age) {
        this.age = age;
        this.modify("age", age);
        return this;
    }

    /**
     * 设置 [头像]
     */
    public PersonData setAvatar(String avatar) {
        this.avatar = avatar;
        this.modify("avatar", avatar);
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
        this.reset("persondataid");        
        return super.copyTo(targetEntity, bIncEmpty);
    }    
}