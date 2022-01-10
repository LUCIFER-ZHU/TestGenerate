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
 * 服务DTO对象[Example2DTO]
 */
@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
@ApiModel("示例明细")
public class Example2DTO extends DTOBase implements Serializable {

	private static final long serialVersionUID = 1L;

    /**
     * 建立时间
     */
    @JsonProperty("createdate")
    @JSONField(name = "createdate")
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
     * 示例明细标识
     */
    @JsonProperty("example2id")
    @JSONField(name = "example2id")
    @ApiModelProperty("示例明细标识")
    private String example2Id;

    /**
     * 示例明细名称
     */
    @JsonProperty("example2name")
    @JSONField(name = "example2name")
    @ApiModelProperty("示例明细名称")
    private String example2Name;

    /**
     * 示例标识
     */
    @JsonProperty("exampleid")
    @JSONField(name = "exampleid")
    @ApiModelProperty("示例标识")
    private String exampleId;

    /**
     * 示例名称
     */
    @JsonProperty("examplename")
    @JSONField(name = "examplename")
    @ApiModelProperty("示例名称")
    private String exampleName;

    /**
     * 更新时间
     */
    @JsonProperty("updatedate")
    @JSONField(name = "updatedate")
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
     * 设置 [示例明细名称]
     */
    public Example2DTO setExample2Name(String example2Name) {
        this.example2Name = example2Name;
        this.modify("example2name", example2Name);
        return this;
    }

    /**
     * 设置 [示例标识]
     */
    public Example2DTO setExampleId(String exampleId) {
        this.exampleId = exampleId;
        this.modify("exampleid", exampleId);
        return this;
    }

    /**
     * 设置 [示例名称]
     */
    public Example2DTO setExampleName(String exampleName) {
        this.exampleName = exampleName;
        this.modify("examplename", exampleName);
        return this;
    }


}
