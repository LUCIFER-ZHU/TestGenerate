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
import doc.core.sample.domain.Category;
import doc.core.sample.domain.Product;

@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
@JsonIgnoreProperties(value = "handler")
@TableName(value = "T_PRODUCTCATEGORY", resultMap = "ProductCategoryResultMap")
@ApiModel("产品类别")
public class ProductCategory extends EntityMP implements Serializable
{

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
     * 产品类别名称
     */
    @TableField(value = "productcategoryname")
    @DEField(name = "productcategoryname")
    @JsonProperty("productcategoryname")
    @JSONField(name = "productcategoryname")
    @ApiModelProperty("产品类别名称")
    private String productCategoryName;

    /**
     * 产品类别标识
     */
    @TableId(value = "productcategoryid" , type = IdType.ASSIGN_UUID)
    @DEField(name = "productcategoryid" , isKeyField = true)
    @JsonProperty("productcategoryid")
    @JSONField(name = "productcategoryid")
    @ApiModelProperty("产品类别标识")
    private String productCategoryId;

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
     * 更新人
     */
    @TableField(value = "updateman")
    @DEField(name = "updateman" , preType = DEPredefinedFieldType.UPDATEMAN , dict = "SysOperator")
    @JsonProperty("updateman")
    @JSONField(name = "updateman")
    @ApiModelProperty("更新人")
    private String updateMan;

    /**
     * 产品标识
     */
    @TableField(value = "productid")
    @DEField(name = "productid")
    @JsonProperty("productid")
    @JSONField(name = "productid")
    @ApiModelProperty("产品标识")
    private String productId;

    /**
     * 类别标识
     */
    @TableField(value = "categoryid")
    @DEField(name = "categoryid")
    @JsonProperty("categoryid")
    @JSONField(name = "categoryid")
    @ApiModelProperty("类别标识")
    private String categoryId;

    /**
     * 类别
     */
    @TableField(value = "categoryname" , exist = false)
    @DEField(name = "categoryname")
    @JsonProperty("categoryname")
    @JSONField(name = "categoryname")
    @ApiModelProperty("类别")
    private String categoryName;

    /**
     * 产品
     */
    @TableField(value = "productname" , exist = false)
    @DEField(name = "productname")
    @JsonProperty("productname")
    @JSONField(name = "productname")
    @ApiModelProperty("产品")
    private String productName;


    /**
     * 类别
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private Category category;
    /**
     * 产品
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private Product product;



    /**
     * 设置 [产品类别名称]
     */
    public ProductCategory setProductCategoryName(String productCategoryName) {
        this.productCategoryName = productCategoryName;
        this.modify("productcategoryname", productCategoryName);
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
     * 设置 [产品标识]
     */
    public ProductCategory setProductId(String productId) {
        this.productId = productId;
        this.modify("productid", productId);
        return this;
    }

    /**
     * 设置 [类别标识]
     */
    public ProductCategory setCategoryId(String categoryId) {
        this.categoryId = categoryId;
        this.modify("categoryid", categoryId);
        return this;
    }

    /**
     * 设置 [类别]
     */
    public ProductCategory setCategoryName(String categoryName) {
        this.categoryName = categoryName;
        this.modify("categoryname", categoryName);
        return this;
    }

    /**
     * 设置 [产品]
     */
    public ProductCategory setProductName(String productName) {
        this.productName = productName;
        this.modify("productname", productName);
        return this;
    }



    


    @Override
    public Serializable getDefaultKey(boolean gen) {
        Assert.notNull(getProductId(),"未设置产品标识");    
        Assert.notNull(getCategoryId(),"未设置类别标识");    
        String key = String.format("%s||%s"
            ,getProductId(),getCategoryId());
        key = DigestUtils.md5DigestAsHex(key.getBytes());    
        return key;
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
        this.reset("productcategoryid");        
        return super.copyTo(targetEntity, bIncEmpty);
    }    
}