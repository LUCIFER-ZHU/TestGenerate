package doc.core.sample.filter;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.HashMap;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
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
import doc.core.sample.domain.Product;
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

    @JsonProperty("n_productid_eq")
    @JSONField(name = "n_productid_eq")
    @ApiModelProperty("产品标识EQ")
	private String productIdEQ;
	public ProductSearchContext setProductIdEQ(String productIdEQ) {
        this.productIdEQ = productIdEQ;
        if(!ObjectUtils.isEmpty(this.productIdEQ)){
            this.getSearchCond().eq("productid", productIdEQ);
        }
        return this;
    } 
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