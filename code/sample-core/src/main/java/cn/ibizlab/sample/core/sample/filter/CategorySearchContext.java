package cn.ibizlab.sample.core.sample.filter;

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
import cn.ibizlab.sample.core.sample.domain.Category;
/**
 * 关系型数据实体[Category] 查询条件对象
 */
@Slf4j
@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
@ApiModel("类别")
public class CategorySearchContext extends QueryWrapperContext<Category> {

    @JsonProperty("n_categoryname_like")
    @JSONField(name = "n_categoryname_like")
    @ApiModelProperty("类别名称LIKE")
	private String categoryNameLIKE;
	public CategorySearchContext setCategoryNameLIKE(String categoryNameLIKE) {
        this.categoryNameLIKE = categoryNameLIKE;
        if(!ObjectUtils.isEmpty(this.categoryNameLIKE)){
            this.getSearchCond().like("categoryname", categoryNameLIKE);
        }
        return this;
    } 
    @JsonProperty("n_pcategoryid_eq")
    @JSONField(name = "n_pcategoryid_eq")
    @ApiModelProperty("类别标识EQ")
	private String pcategoryidEQ;
	public CategorySearchContext setPcategoryidEQ(String pcategoryidEQ) {
        this.pcategoryidEQ = pcategoryidEQ;
        if(!ObjectUtils.isEmpty(this.pcategoryidEQ)){
            this.getSearchCond().eq("pcategoryid", pcategoryidEQ);
        }
        return this;
    } 
    @JsonProperty("n_pcategoryname_eq")
    @JSONField(name = "n_pcategoryname_eq")
    @ApiModelProperty("类别EQ")
	private String pcategorynameEQ;
	public CategorySearchContext setPcategorynameEQ(String pcategorynameEQ) {
        this.pcategorynameEQ = pcategorynameEQ;
        if(!ObjectUtils.isEmpty(this.pcategorynameEQ)){
            this.getSearchCond().eq("pcategoryname", pcategorynameEQ);
        }
        return this;
    } 
    @JsonProperty("n_pcategoryname_like")
    @JSONField(name = "n_pcategoryname_like")
    @ApiModelProperty("类别LIKE")
	private String pcategorynameLIKE;
	public CategorySearchContext setPcategorynameLIKE(String pcategorynameLIKE) {
        this.pcategorynameLIKE = pcategorynameLIKE;
        if(!ObjectUtils.isEmpty(this.pcategorynameLIKE)){
            this.getSearchCond().like("pcategoryname", pcategorynameLIKE);
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
                     wrapper.like("categoryname", query)
            );
		}
	}
}