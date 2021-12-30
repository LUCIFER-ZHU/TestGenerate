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
@TableName(value = "T_MAPDATA", resultMap = "MapDataResultMap")
@ApiModel("地图示例数据")
public class MapData extends EntityMP implements Serializable
{

    /**
     * 地图示例数据标识
     */
    @TableId(value = "mapdataid" , type = IdType.ASSIGN_UUID)
    @DEField(name = "mapdataid" , isKeyField = true)
    @JsonProperty("mapdataid")
    @JSONField(name = "mapdataid")
    @ApiModelProperty("地图示例数据标识")
    private String mapDataId;

    /**
     * 名称
     */
    @TableField(value = "mapdataname")
    @DEField(name = "mapdataname")
    @JsonProperty("mapdataname")
    @JSONField(name = "mapdataname")
    @ApiModelProperty("名称")
    private String mapDataName;

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
     * 排序值
     */
    @TableField(value = "sortvalue")
    @DEField(name = "sortvalue")
    @JsonProperty("sortvalue")
    @JSONField(name = "sortvalue")
    @ApiModelProperty("排序值")
    private Integer sortvalue;

    /**
     * 经度
     */
    @TableField(value = "longitude")
    @DEField(name = "longitude")
    @JsonProperty("longitude")
    @JSONField(name = "longitude")
    @ApiModelProperty("经度")
    private BigDecimal longitude;

    /**
     * 纬度
     */
    @TableField(value = "latitude")
    @DEField(name = "latitude")
    @JsonProperty("latitude")
    @JSONField(name = "latitude")
    @ApiModelProperty("纬度")
    private BigDecimal latitude;

    /**
     * 类型
     */
    @TableField(value = "type")
    @DEField(name = "type" , dict = "MapDataType")
    @JsonProperty("type")
    @JSONField(name = "type")
    @ApiModelProperty("类型")
    private String type;

    /**
     * 分组
     */
    @TableField(value = "grouping")
    @DEField(name = "grouping")
    @JsonProperty("grouping")
    @JSONField(name = "grouping")
    @ApiModelProperty("分组")
    private String grouping;

    /**
     * 编码
     */
    @TableField(value = "mapdatacode")
    @DEField(name = "mapdatacode")
    @JsonProperty("mapdatacode")
    @JSONField(name = "mapdatacode")
    @ApiModelProperty("编码")
    private Integer mapdatacode;





    /**
     * 设置 [名称]
     */
    public MapData setMapDataName(String mapDataName) {
        this.mapDataName = mapDataName;
        this.modify("mapdataname", mapDataName);
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
     * 设置 [排序值]
     */
    public MapData setSortvalue(Integer sortvalue) {
        this.sortvalue = sortvalue;
        this.modify("sortvalue", sortvalue);
        return this;
    }

    /**
     * 设置 [经度]
     */
    public MapData setLongitude(BigDecimal longitude) {
        this.longitude = longitude;
        this.modify("longitude", longitude);
        return this;
    }

    /**
     * 设置 [纬度]
     */
    public MapData setLatitude(BigDecimal latitude) {
        this.latitude = latitude;
        this.modify("latitude", latitude);
        return this;
    }

    /**
     * 设置 [类型]
     */
    public MapData setType(String type) {
        this.type = type;
        this.modify("type", type);
        return this;
    }

    /**
     * 设置 [分组]
     */
    public MapData setGrouping(String grouping) {
        this.grouping = grouping;
        this.modify("grouping", grouping);
        return this;
    }

    /**
     * 设置 [编码]
     */
    public MapData setMapdatacode(Integer mapdatacode) {
        this.mapdatacode = mapdatacode;
        this.modify("mapdatacode", mapdatacode);
        return this;
    }



}