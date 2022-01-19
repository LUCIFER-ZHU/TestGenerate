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
 * 服务DTO对象[CategoryDTO]
 */
@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
@ApiModel("类别")
public class CategoryDTO extends DTOBase implements Serializable {

	private static final long serialVersionUID = 1L;

    /**
     * 类别标识
     */
    @JsonProperty("categoryid")
    @JSONField(name = "categoryid")
    @ApiModelProperty("类别标识")
    private String categoryId;

    /**
     * 类别名称
     */
    @JsonProperty("categoryname")
    @JSONField(name = "categoryname")
    @ApiModelProperty("类别名称")
    private String categoryName;

    /**
     * 类别路径名称
     */
    @JsonProperty("categorynamepath")
    @JSONField(name = "categorynamepath")
    @ApiModelProperty("类别路径名称")
    private String categoryNamePath;

    /**
     * 类别路径
     */
    @JsonProperty("categorypath")
    @JSONField(name = "categorypath")
    @ApiModelProperty("类别路径")
    private String categoryPath;

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
     * 类别标识
     */
    @JsonProperty("pcategoryid")
    @JSONField(name = "pcategoryid")
    @ApiModelProperty("类别标识")
    private String pcategoryid;

    /**
     * 类别
     */
    @JsonProperty("pcategoryname")
    @JSONField(name = "pcategoryname")
    @ApiModelProperty("类别")
    private String pcategoryname;

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
     * 设置 [类别名称]
     */
    public CategoryDTO setCategoryName(String categoryName) {
        this.categoryName = categoryName;
        this.modify("categoryname", categoryName);
        return this;
    }

    /**
     * 设置 [类别路径名称]
     */
    public CategoryDTO setCategoryNamePath(String categoryNamePath) {
        this.categoryNamePath = categoryNamePath;
        this.modify("categorynamepath", categoryNamePath);
        return this;
    }

    /**
     * 设置 [类别路径]
     */
    public CategoryDTO setCategoryPath(String categoryPath) {
        this.categoryPath = categoryPath;
        this.modify("categorypath", categoryPath);
        return this;
    }

    /**
     * 设置 [类别标识]
     */
    public CategoryDTO setPcategoryid(String pcategoryid) {
        this.pcategoryid = pcategoryid;
        this.modify("pcategoryid", pcategoryid);
        return this;
    }

    /**
     * 设置 [类别]
     */
    public CategoryDTO setPcategoryname(String pcategoryname) {
        this.pcategoryname = pcategoryname;
        this.modify("pcategoryname", pcategoryname);
        return this;
    }


}
