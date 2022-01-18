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
 * 服务DTO对象[PersonDataDTO]
 */
@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
@ApiModel("人员数据")
public class PersonDataDTO extends DTOBase implements Serializable {

	private static final long serialVersionUID = 1L;

    /**
     * 年龄
     */
    @JsonProperty("age")
    @JSONField(name = "age")
    @ApiModelProperty("年龄")
    private Integer age;

    /**
     * 头像
     */
    @JsonProperty("avatar")
    @JSONField(name = "avatar")
    @ApiModelProperty("头像")
    private String avatar;

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
     * 部门数据标识
     */
    @JsonProperty("deptdataid")
    @JSONField(name = "deptdataid")
    @ApiModelProperty("部门数据标识")
    private String deptDataId;

    /**
     * 部门名称
     */
    @JsonProperty("deptdataname")
    @JSONField(name = "deptdataname")
    @ApiModelProperty("部门名称")
    private String deptDataName;

    /**
     * 组织部门标识
     */
    @JsonProperty("deptid")
    @JSONField(name = "deptid")
    @ApiModelProperty("组织部门标识")
    private String deptId;

    /**
     * 性别
     */
    @JsonProperty("gender")
    @JSONField(name = "gender")
    @ApiModelProperty("性别")
    private String gender;

    /**
     * 身份证
     */
    @JsonProperty("idcard")
    @JSONField(name = "idcard")
    @ApiModelProperty("身份证")
    private String idcard;

    /**
     * 组织数据标识
     */
    @JsonProperty("orgdataid")
    @JSONField(name = "orgdataid")
    @ApiModelProperty("组织数据标识")
    private String orgDataId;

    /**
     * 组织名称
     */
    @JsonProperty("orgdataname")
    @JSONField(name = "orgdataname")
    @ApiModelProperty("组织名称")
    private String orgDataName;

    /**
     * 组织机构标识
     */
    @JsonProperty("orgid")
    @JSONField(name = "orgid")
    @ApiModelProperty("组织机构标识")
    private String orgId;

    /**
     * 人员数据标识
     */
    @JsonProperty("persondataid")
    @JSONField(name = "persondataid")
    @ApiModelProperty("人员数据标识")
    private String personDataId;

    /**
     * 姓名
     */
    @JsonProperty("persondataname")
    @JSONField(name = "persondataname")
    @ApiModelProperty("姓名")
    private String personDataName;

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
     * 设置 [年龄]
     */
    public PersonDataDTO setAge(Integer age) {
        this.age = age;
        this.modify("age", age);
        return this;
    }

    /**
     * 设置 [头像]
     */
    public PersonDataDTO setAvatar(String avatar) {
        this.avatar = avatar;
        this.modify("avatar", avatar);
        return this;
    }

    /**
     * 设置 [部门数据标识]
     */
    public PersonDataDTO setDeptDataId(String deptDataId) {
        this.deptDataId = deptDataId;
        this.modify("deptdataid", deptDataId);
        return this;
    }

    /**
     * 设置 [部门名称]
     */
    public PersonDataDTO setDeptDataName(String deptDataName) {
        this.deptDataName = deptDataName;
        this.modify("deptdataname", deptDataName);
        return this;
    }

    /**
     * 设置 [性别]
     */
    public PersonDataDTO setGender(String gender) {
        this.gender = gender;
        this.modify("gender", gender);
        return this;
    }

    /**
     * 设置 [身份证]
     */
    public PersonDataDTO setIdcard(String idcard) {
        this.idcard = idcard;
        this.modify("idcard", idcard);
        return this;
    }

    /**
     * 设置 [组织数据标识]
     */
    public PersonDataDTO setOrgDataId(String orgDataId) {
        this.orgDataId = orgDataId;
        this.modify("orgdataid", orgDataId);
        return this;
    }

    /**
     * 设置 [组织名称]
     */
    public PersonDataDTO setOrgDataName(String orgDataName) {
        this.orgDataName = orgDataName;
        this.modify("orgdataname", orgDataName);
        return this;
    }

    /**
     * 设置 [姓名]
     */
    public PersonDataDTO setPersonDataName(String personDataName) {
        this.personDataName = personDataName;
        this.modify("persondataname", personDataName);
        return this;
    }


}
