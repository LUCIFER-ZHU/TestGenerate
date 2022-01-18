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
 * 服务DTO对象[ProductCategorySimpleDTO]
 */
@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
@ApiModel("产品类别")
public class ProductCategorySimpleDTO extends DTOBase implements Serializable {

	private static final long serialVersionUID = 1L;

    /**
     * 类别标识
     */
    @JsonProperty("categoryid")
    @JSONField(name = "categoryid")
    @ApiModelProperty("类别标识")
    private String categoryId;

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
     * 产品类别标识
     */
    @JsonProperty("productcategoryid")
    @JSONField(name = "productcategoryid")
    @ApiModelProperty("产品类别标识")
    private String productCategoryId;

    /**
     * 产品类别名称
     */
    @JsonProperty("productcategoryname")
    @JSONField(name = "productcategoryname")
    @ApiModelProperty("产品类别名称")
    private String productCategoryName;

    /**
     * 产品标识
     */
    @JsonProperty("productid")
    @JSONField(name = "productid")
    @ApiModelProperty("产品标识")
    private String productId;

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
     * 设置 [类别标识]
     */
    public ProductCategorySimpleDTO setCategoryId(String categoryId) {
        this.categoryId = categoryId;
        this.modify("categoryid", categoryId);
        return this;
    }

    /**
     * 设置 [产品类别名称]
     */
    public ProductCategorySimpleDTO setProductCategoryName(String productCategoryName) {
        this.productCategoryName = productCategoryName;
        this.modify("productcategoryname", productCategoryName);
        return this;
    }

    /**
     * 设置 [产品标识]
     */
    public ProductCategorySimpleDTO setProductId(String productId) {
        this.productId = productId;
        this.modify("productid", productId);
        return this;
    }


}
