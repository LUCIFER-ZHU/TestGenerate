package cn.ibizlab.sample.core.sample.filter;

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
import cn.ibizlab.sample.core.sample.domain.Product;
/**
 * 关系型数据实体[Product] 查询条件对象
 */
@Slf4j
@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
@ApiModel("产品")
public class ProductSearchContext extends QueryWrapperContext<Product> {

    @JsonProperty("n_productname_like")
    @JSONField(name = "n_productname_like")
    @ApiModelProperty("产品名称LIKE")
	private String productNameLIKE;
	public ProductSearchContext setProductNameLIKE(String productNameLIKE) {
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
                     wrapper.like("productname", query)
            );
		}
	}
}