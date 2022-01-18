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
 * 服务DTO对象[OrgDataDTO]
 */
@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
@ApiModel("组织数据")
public class OrgDataDTO extends DTOBase implements Serializable {

	private static final long serialVersionUID = 1L;

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
     * 组织部门标识
     */
    @JsonProperty("deptid")
    @JSONField(name = "deptid")
    @ApiModelProperty("组织部门标识")
    private String deptId;

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
     * 组织编码
     */
    @JsonProperty("orgdatacode")
    @JSONField(name = "orgdatacode")
    @ApiModelProperty("组织编码")
    private String orgdatacode;

    /**
     * 父级组织数据标识
     */
    @JsonProperty("porgdataid")
    @JSONField(name = "porgdataid")
    @ApiModelProperty("父级组织数据标识")
    private String porgdataid;

    /**
     * 父级组织
     */
    @JsonProperty("porgdataname")
    @JSONField(name = "porgdataname")
    @ApiModelProperty("父级组织")
    private String porgdataname;

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
     * 设置 [组织名称]
     */
    public OrgDataDTO setOrgDataName(String orgDataName) {
        this.orgDataName = orgDataName;
        this.modify("orgdataname", orgDataName);
        return this;
    }

    /**
     * 设置 [组织编码]
     */
    public OrgDataDTO setOrgdatacode(String orgdatacode) {
        this.orgdatacode = orgdatacode;
        this.modify("orgdatacode", orgdatacode);
        return this;
    }

    /**
     * 设置 [父级组织数据标识]
     */
    public OrgDataDTO setPorgdataid(String porgdataid) {
        this.porgdataid = porgdataid;
        this.modify("porgdataid", porgdataid);
        return this;
    }

    /**
     * 设置 [父级组织]
     */
    public OrgDataDTO setPorgdataname(String porgdataname) {
        this.porgdataname = porgdataname;
        this.modify("porgdataname", porgdataname);
        return this;
    }


}
