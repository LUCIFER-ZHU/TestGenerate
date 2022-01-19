package doc.sampleapi.dto;

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
 * 服务DTO对象[CounterData2DTO]
 */
@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
@ApiModel("计数器数据2")
public class CounterData2DTO extends DTOBase implements Serializable {

	private static final long serialVersionUID = 1L;

    /**
     * 计数器数据2标识
     */
    @JsonProperty("counterdata2id")
    @JSONField(name = "counterdata2id")
    @ApiModelProperty("计数器数据2标识")
    private String counterData2Id;

    /**
     * 计数器数据2名称
     */
    @JsonProperty("counterdata2name")
    @JSONField(name = "counterdata2name")
    @ApiModelProperty("计数器数据2名称")
    private String counterData2Name;

    /**
     * 计数1
     */
    @JsonProperty("countertag")
    @JSONField(name = "countertag")
    @ApiModelProperty("计数1")
    private Integer countertag;

    /**
     * 计数2
     */
    @JsonProperty("countertag2")
    @JSONField(name = "countertag2")
    @ApiModelProperty("计数2")
    private Integer countertag2;

    /**
     * 计数3
     */
    @JsonProperty("countertag3")
    @JSONField(name = "countertag3")
    @ApiModelProperty("计数3")
    private Integer countertag3;

    /**
     * 计数4
     */
    @JsonProperty("countertag4")
    @JSONField(name = "countertag4")
    @ApiModelProperty("计数4")
    private Integer countertag4;

    /**
     * 计数5
     */
    @JsonProperty("countertag5")
    @JSONField(name = "countertag5")
    @ApiModelProperty("计数5")
    private Integer countertag5;

    /**
     * 计数6
     */
    @JsonProperty("countertag6")
    @JSONField(name = "countertag6")
    @ApiModelProperty("计数6")
    private Integer countertag6;

    /**
     * 计数7
     */
    @JsonProperty("countertag7")
    @JSONField(name = "countertag7")
    @ApiModelProperty("计数7")
    private Integer countertag7;

    /**
     * 计数8
     */
    @JsonProperty("countertag8")
    @JSONField(name = "countertag8")
    @ApiModelProperty("计数8")
    private Integer countertag8;

    /**
     * 计数9
     */
    @JsonProperty("countertag9")
    @JSONField(name = "countertag9")
    @ApiModelProperty("计数9")
    private Integer countertag9;

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
     * 设置 [计数器数据2名称]
     */
    public CounterData2DTO setCounterData2Name(String counterData2Name) {
        this.counterData2Name = counterData2Name;
        this.modify("counterdata2name", counterData2Name);
        return this;
    }

    /**
     * 设置 [计数1]
     */
    public CounterData2DTO setCountertag(Integer countertag) {
        this.countertag = countertag;
        this.modify("countertag", countertag);
        return this;
    }

    /**
     * 设置 [计数2]
     */
    public CounterData2DTO setCountertag2(Integer countertag2) {
        this.countertag2 = countertag2;
        this.modify("countertag2", countertag2);
        return this;
    }

    /**
     * 设置 [计数3]
     */
    public CounterData2DTO setCountertag3(Integer countertag3) {
        this.countertag3 = countertag3;
        this.modify("countertag3", countertag3);
        return this;
    }

    /**
     * 设置 [计数4]
     */
    public CounterData2DTO setCountertag4(Integer countertag4) {
        this.countertag4 = countertag4;
        this.modify("countertag4", countertag4);
        return this;
    }

    /**
     * 设置 [计数5]
     */
    public CounterData2DTO setCountertag5(Integer countertag5) {
        this.countertag5 = countertag5;
        this.modify("countertag5", countertag5);
        return this;
    }

    /**
     * 设置 [计数6]
     */
    public CounterData2DTO setCountertag6(Integer countertag6) {
        this.countertag6 = countertag6;
        this.modify("countertag6", countertag6);
        return this;
    }

    /**
     * 设置 [计数7]
     */
    public CounterData2DTO setCountertag7(Integer countertag7) {
        this.countertag7 = countertag7;
        this.modify("countertag7", countertag7);
        return this;
    }

    /**
     * 设置 [计数8]
     */
    public CounterData2DTO setCountertag8(Integer countertag8) {
        this.countertag8 = countertag8;
        this.modify("countertag8", countertag8);
        return this;
    }

    /**
     * 设置 [计数9]
     */
    public CounterData2DTO setCountertag9(Integer countertag9) {
        this.countertag9 = countertag9;
        this.modify("countertag9", countertag9);
        return this;
    }


}
