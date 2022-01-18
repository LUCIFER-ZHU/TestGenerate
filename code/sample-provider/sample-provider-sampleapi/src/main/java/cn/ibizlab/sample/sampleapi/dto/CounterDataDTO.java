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
 * 服务DTO对象[CounterDataDTO]
 */
@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
@ApiModel("计数器数据")
public class CounterDataDTO extends DTOBase implements Serializable {

	private static final long serialVersionUID = 1L;

    /**
     * 计数
     */
    @JsonProperty("cnt")
    @JSONField(name = "cnt")
    @ApiModelProperty("计数")
    private Integer cnt;

    /**
     * 计数器数据标识
     */
    @JsonProperty("counterdataid")
    @JSONField(name = "counterdataid")
    @ApiModelProperty("计数器数据标识")
    private String counterDataId;

    /**
     * 计数器数据名称
     */
    @JsonProperty("counterdataname")
    @JSONField(name = "counterdataname")
    @ApiModelProperty("计数器数据名称")
    private String counterDataName;

    /**
     * 计数标记
     */
    @JsonProperty("countertag")
    @JSONField(name = "countertag")
    @ApiModelProperty("计数标记")
    private String countertag;

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
     * 组织机构标识
     */
    @JsonProperty("orgid")
    @JSONField(name = "orgid")
    @ApiModelProperty("组织机构标识")
    private String orgId;

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
     * 设置 [计数]
     */
    public CounterDataDTO setCnt(Integer cnt) {
        this.cnt = cnt;
        this.modify("cnt", cnt);
        return this;
    }

    /**
     * 设置 [计数器数据名称]
     */
    public CounterDataDTO setCounterDataName(String counterDataName) {
        this.counterDataName = counterDataName;
        this.modify("counterdataname", counterDataName);
        return this;
    }

    /**
     * 设置 [计数标记]
     */
    public CounterDataDTO setCountertag(String countertag) {
        this.countertag = countertag;
        this.modify("countertag", countertag);
        return this;
    }


}
