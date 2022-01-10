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
 * 服务DTO对象[MapDataDTO]
 */
@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
@ApiModel("地图示例数据")
public class MapDataDTO extends DTOBase implements Serializable {

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
     * 组织部门标识
     */
    @JsonProperty("deptid")
    @JSONField(name = "deptid")
    @ApiModelProperty("组织部门标识")
    private String deptId;

    /**
     * 分组
     */
    @JsonProperty("grouping")
    @JSONField(name = "grouping")
    @ApiModelProperty("分组")
    private String grouping;

    /**
     * 纬度
     */
    @JsonProperty("latitude")
    @JSONField(name = "latitude")
    @ApiModelProperty("纬度")
    private BigDecimal latitude;

    /**
     * 经度
     */
    @JsonProperty("longitude")
    @JSONField(name = "longitude")
    @ApiModelProperty("经度")
    private BigDecimal longitude;

    /**
     * 地图示例数据标识
     */
    @JsonProperty("mapdataid")
    @JSONField(name = "mapdataid")
    @ApiModelProperty("地图示例数据标识")
    private String mapDataId;

    /**
     * 名称
     */
    @JsonProperty("mapdataname")
    @JSONField(name = "mapdataname")
    @ApiModelProperty("名称")
    private String mapDataName;

    /**
     * 编码
     */
    @JsonProperty("mapdatacode")
    @JSONField(name = "mapdatacode")
    @ApiModelProperty("编码")
    private Integer mapdatacode;

    /**
     * 组织机构标识
     */
    @JsonProperty("orgid")
    @JSONField(name = "orgid")
    @ApiModelProperty("组织机构标识")
    private String orgId;

    /**
     * 排序值
     */
    @JsonProperty("sortvalue")
    @JSONField(name = "sortvalue")
    @ApiModelProperty("排序值")
    private Integer sortvalue;

    /**
     * 类型
     */
    @JsonProperty("type")
    @JSONField(name = "type")
    @ApiModelProperty("类型")
    private String type;

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
     * 设置 [分组]
     */
    public MapDataDTO setGrouping(String grouping) {
        this.grouping = grouping;
        this.modify("grouping", grouping);
        return this;
    }

    /**
     * 设置 [纬度]
     */
    public MapDataDTO setLatitude(BigDecimal latitude) {
        this.latitude = latitude;
        this.modify("latitude", latitude);
        return this;
    }

    /**
     * 设置 [经度]
     */
    public MapDataDTO setLongitude(BigDecimal longitude) {
        this.longitude = longitude;
        this.modify("longitude", longitude);
        return this;
    }

    /**
     * 设置 [名称]
     */
    public MapDataDTO setMapDataName(String mapDataName) {
        this.mapDataName = mapDataName;
        this.modify("mapdataname", mapDataName);
        return this;
    }

    /**
     * 设置 [编码]
     */
    public MapDataDTO setMapdatacode(Integer mapdatacode) {
        this.mapdatacode = mapdatacode;
        this.modify("mapdatacode", mapdatacode);
        return this;
    }

    /**
     * 设置 [排序值]
     */
    public MapDataDTO setSortvalue(Integer sortvalue) {
        this.sortvalue = sortvalue;
        this.modify("sortvalue", sortvalue);
        return this;
    }

    /**
     * 设置 [类型]
     */
    public MapDataDTO setType(String type) {
        this.type = type;
        this.modify("type", type);
        return this;
    }


}
