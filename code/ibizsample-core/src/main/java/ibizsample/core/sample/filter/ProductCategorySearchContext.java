package ibizsample.core.sample.filter;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.HashMap;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.*;
import lombok.experimental.Accessors;
import lombok.extern.slf4j.Slf4j;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.alibaba.fastjson.annotation.JSONField;

import org.springframework.util.ObjectUtils;
import org.springframework.util.StringUtils;
import cn.ibizlab.util.filter.QueryWrapperContext;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import ibizsample.core.sample.domain.ProductCategory;
/**
 * 关系型数据实体[ProductCategory] 查询条件对象
 */
@Slf4j
@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
@ApiModel("产品类别")
public class ProductCategorySearchContext extends QueryWrapperContext<ProductCategory> {

    @JsonProperty("n_productcategoryname_like")
    @JSONField(name = "n_productcategoryname_like")
    @ApiModelProperty("产品类别名称LIKE")
	private String productCategoryNameLIKE;
	public ProductCategorySearchContext setProductCategoryNameLIKE(String productCategoryNameLIKE) {
        this.productCategoryNameLIKE = productCategoryNameLIKE;
        if(!ObjectUtils.isEmpty(this.productCategoryNameLIKE)){
            this.getSearchCond().like("productcategoryname", productCategoryNameLIKE);
        }
        return this;
    } 
    @JsonProperty("n_productcategoryid_eq")
    @JSONField(name = "n_productcategoryid_eq")
    @ApiModelProperty("产品类别标识EQ")
	private String productCategoryIdEQ;
	public ProductCategorySearchContext setProductCategoryIdEQ(String productCategoryIdEQ) {
        this.productCategoryIdEQ = productCategoryIdEQ;
        if(!ObjectUtils.isEmpty(this.productCategoryIdEQ)){
            this.getSearchCond().eq("productcategoryid", productCategoryIdEQ);
        }
        return this;
    } 
    @JsonProperty("n_productid_eq")
    @JSONField(name = "n_productid_eq")
    @ApiModelProperty("产品标识EQ")
	private String productIdEQ;
	public ProductCategorySearchContext setProductIdEQ(String productIdEQ) {
        this.productIdEQ = productIdEQ;
        if(!ObjectUtils.isEmpty(this.productIdEQ)){
            this.getSearchCond().eq("productid", productIdEQ);
        }
        return this;
    } 
    @JsonProperty("n_categoryid_eq")
    @JSONField(name = "n_categoryid_eq")
    @ApiModelProperty("类别标识EQ")
	private String categoryIdEQ;
	public ProductCategorySearchContext setCategoryIdEQ(String categoryIdEQ) {
        this.categoryIdEQ = categoryIdEQ;
        if(!ObjectUtils.isEmpty(this.categoryIdEQ)){
            this.getSearchCond().eq("categoryid", categoryIdEQ);
        }
        return this;
    } 
    @JsonProperty("n_categoryname_eq")
    @JSONField(name = "n_categoryname_eq")
    @ApiModelProperty("类别EQ")
	private String categoryNameEQ;
	public ProductCategorySearchContext setCategoryNameEQ(String categoryNameEQ) {
        this.categoryNameEQ = categoryNameEQ;
        if(!ObjectUtils.isEmpty(this.categoryNameEQ)){
            this.getSearchCond().eq("categoryname", categoryNameEQ);
        }
        return this;
    } 
    @JsonProperty("n_categoryname_like")
    @JSONField(name = "n_categoryname_like")
    @ApiModelProperty("类别LIKE")
	private String categoryNameLIKE;
	public ProductCategorySearchContext setCategoryNameLIKE(String categoryNameLIKE) {
        this.categoryNameLIKE = categoryNameLIKE;
        if(!ObjectUtils.isEmpty(this.categoryNameLIKE)){
            this.getSearchCond().like("categoryname", categoryNameLIKE);
        }
        return this;
    } 
    @JsonProperty("n_productname_eq")
    @JSONField(name = "n_productname_eq")
    @ApiModelProperty("产品EQ")
	private String productNameEQ;
	public ProductCategorySearchContext setProductNameEQ(String productNameEQ) {
        this.productNameEQ = productNameEQ;
        if(!ObjectUtils.isEmpty(this.productNameEQ)){
            this.getSearchCond().eq("productname", productNameEQ);
        }
        return this;
    } 
    @JsonProperty("n_productname_like")
    @JSONField(name = "n_productname_like")
    @ApiModelProperty("产品LIKE")
	private String productNameLIKE;
	public ProductCategorySearchContext setProductNameLIKE(String productNameLIKE) {
        this.productNameLIKE = productNameLIKE;
        if(!ObjectUtils.isEmpty(this.productNameLIKE)){
            this.getSearchCond().like("productname", productNameLIKE);
        }
        return this;
    } 

    /**
	 * 启用快速搜索
	 */
	public void setQuery(String query)
	{
		this.query=query;
		if(!StringUtils.isEmpty(query)){
            this.getSearchCond().and( wrapper ->
                     wrapper.like("productcategoryname", query)
            );
		}
	}
}