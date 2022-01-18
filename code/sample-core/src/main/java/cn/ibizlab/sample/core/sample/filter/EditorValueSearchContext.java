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
import cn.ibizlab.sample.core.sample.domain.EditorValue;
/**
 * 关系型数据实体[EditorValue] 查询条件对象
 */
@Slf4j
@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
@ApiModel("编辑器值")
public class EditorValueSearchContext extends QueryWrapperContext<EditorValue> {

    @JsonProperty("n_editorvaluename_like")
    @JSONField(name = "n_editorvaluename_like")
    @ApiModelProperty("编辑器值名称LIKE")
	private String editorValueNameLIKE;
	public EditorValueSearchContext setEditorValueNameLIKE(String editorValueNameLIKE) {
        this.editorValueNameLIKE = editorValueNameLIKE;
        if(!ObjectUtils.isEmpty(this.editorValueNameLIKE)){
            this.getSearchCond().like("editorvaluename", editorValueNameLIKE);
        }
        return this;
    } 
    @JsonProperty("n_dropdownlist_eq")
    @JSONField(name = "n_dropdownlist_eq")
    @ApiModelProperty("下拉列表框EQ")
	private String dropdownlistEQ;
	public EditorValueSearchContext setDropdownlistEQ(String dropdownlistEQ) {
        this.dropdownlistEQ = dropdownlistEQ;
        if(!ObjectUtils.isEmpty(this.dropdownlistEQ)){
            this.getSearchCond().eq("dropdownlist", dropdownlistEQ);
        }
        return this;
    } 
    @JsonProperty("n_customerid_eq")
    @JSONField(name = "n_customerid_eq")
    @ApiModelProperty("客户标识EQ")
	private String customerIdEQ;
	public EditorValueSearchContext setCustomerIdEQ(String customerIdEQ) {
        this.customerIdEQ = customerIdEQ;
        if(!ObjectUtils.isEmpty(this.customerIdEQ)){
            this.getSearchCond().eq("customerid", customerIdEQ);
        }
        return this;
    } 
    @JsonProperty("n_customername_eq")
    @JSONField(name = "n_customername_eq")
    @ApiModelProperty("客户名称EQ")
	private String customerNameEQ;
	public EditorValueSearchContext setCustomerNameEQ(String customerNameEQ) {
        this.customerNameEQ = customerNameEQ;
        if(!ObjectUtils.isEmpty(this.customerNameEQ)){
            this.getSearchCond().eq("customername", customerNameEQ);
        }
        return this;
    } 
    @JsonProperty("n_customername_like")
    @JSONField(name = "n_customername_like")
    @ApiModelProperty("客户名称LIKE")
	private String customerNameLIKE;
	public EditorValueSearchContext setCustomerNameLIKE(String customerNameLIKE) {
        this.customerNameLIKE = customerNameLIKE;
        if(!ObjectUtils.isEmpty(this.customerNameLIKE)){
            this.getSearchCond().like("customername", customerNameLIKE);
        }
        return this;
    } 
    @JsonProperty("n_customerid2_eq")
    @JSONField(name = "n_customerid2_eq")
    @ApiModelProperty("客户标识2EQ")
	private String customerid2EQ;
	public EditorValueSearchContext setCustomerid2EQ(String customerid2EQ) {
        this.customerid2EQ = customerid2EQ;
        if(!ObjectUtils.isEmpty(this.customerid2EQ)){
            this.getSearchCond().eq("customerid2", customerid2EQ);
        }
        return this;
    } 
    @JsonProperty("n_customername2_eq")
    @JSONField(name = "n_customername2_eq")
    @ApiModelProperty("客户名称2EQ")
	private String customername2EQ;
	public EditorValueSearchContext setCustomername2EQ(String customername2EQ) {
        this.customername2EQ = customername2EQ;
        if(!ObjectUtils.isEmpty(this.customername2EQ)){
            this.getSearchCond().eq("customername2", customername2EQ);
        }
        return this;
    } 
    @JsonProperty("n_customername2_like")
    @JSONField(name = "n_customername2_like")
    @ApiModelProperty("客户名称2LIKE")
	private String customername2LIKE;
	public EditorValueSearchContext setCustomername2LIKE(String customername2LIKE) {
        this.customername2LIKE = customername2LIKE;
        if(!ObjectUtils.isEmpty(this.customername2LIKE)){
            this.getSearchCond().like("customername2", customername2LIKE);
        }
        return this;
    } 
    @JsonProperty("n_customerid3_eq")
    @JSONField(name = "n_customerid3_eq")
    @ApiModelProperty("客户标识3EQ")
	private String customerid3EQ;
	public EditorValueSearchContext setCustomerid3EQ(String customerid3EQ) {
        this.customerid3EQ = customerid3EQ;
        if(!ObjectUtils.isEmpty(this.customerid3EQ)){
            this.getSearchCond().eq("customerid3", customerid3EQ);
        }
        return this;
    } 
    @JsonProperty("n_customername3_eq")
    @JSONField(name = "n_customername3_eq")
    @ApiModelProperty("客户名称3EQ")
	private String customername3EQ;
	public EditorValueSearchContext setCustomername3EQ(String customername3EQ) {
        this.customername3EQ = customername3EQ;
        if(!ObjectUtils.isEmpty(this.customername3EQ)){
            this.getSearchCond().eq("customername3", customername3EQ);
        }
        return this;
    } 
    @JsonProperty("n_customername3_like")
    @JSONField(name = "n_customername3_like")
    @ApiModelProperty("客户名称3LIKE")
	private String customername3LIKE;
	public EditorValueSearchContext setCustomername3LIKE(String customername3LIKE) {
        this.customername3LIKE = customername3LIKE;
        if(!ObjectUtils.isEmpty(this.customername3LIKE)){
            this.getSearchCond().like("customername3", customername3LIKE);
        }
        return this;
    } 
    @JsonProperty("n_customerid4_eq")
    @JSONField(name = "n_customerid4_eq")
    @ApiModelProperty("客户标识4EQ")
	private String customerid4EQ;
	public EditorValueSearchContext setCustomerid4EQ(String customerid4EQ) {
        this.customerid4EQ = customerid4EQ;
        if(!ObjectUtils.isEmpty(this.customerid4EQ)){
            this.getSearchCond().eq("customerid4", customerid4EQ);
        }
        return this;
    } 
    @JsonProperty("n_customername4_eq")
    @JSONField(name = "n_customername4_eq")
    @ApiModelProperty("客户名称4EQ")
	private String customername4EQ;
	public EditorValueSearchContext setCustomername4EQ(String customername4EQ) {
        this.customername4EQ = customername4EQ;
        if(!ObjectUtils.isEmpty(this.customername4EQ)){
            this.getSearchCond().eq("customername4", customername4EQ);
        }
        return this;
    } 
    @JsonProperty("n_customername4_like")
    @JSONField(name = "n_customername4_like")
    @ApiModelProperty("客户名称4LIKE")
	private String customername4LIKE;
	public EditorValueSearchContext setCustomername4LIKE(String customername4LIKE) {
        this.customername4LIKE = customername4LIKE;
        if(!ObjectUtils.isEmpty(this.customername4LIKE)){
            this.getSearchCond().like("customername4", customername4LIKE);
        }
        return this;
    } 
    @JsonProperty("n_customerid5_eq")
    @JSONField(name = "n_customerid5_eq")
    @ApiModelProperty("客户标识5EQ")
	private String customerid5EQ;
	public EditorValueSearchContext setCustomerid5EQ(String customerid5EQ) {
        this.customerid5EQ = customerid5EQ;
        if(!ObjectUtils.isEmpty(this.customerid5EQ)){
            this.getSearchCond().eq("customerid5", customerid5EQ);
        }
        return this;
    } 
    @JsonProperty("n_customername5_eq")
    @JSONField(name = "n_customername5_eq")
    @ApiModelProperty("客户名称5EQ")
	private String customername5EQ;
	public EditorValueSearchContext setCustomername5EQ(String customername5EQ) {
        this.customername5EQ = customername5EQ;
        if(!ObjectUtils.isEmpty(this.customername5EQ)){
            this.getSearchCond().eq("customername5", customername5EQ);
        }
        return this;
    } 
    @JsonProperty("n_customername5_like")
    @JSONField(name = "n_customername5_like")
    @ApiModelProperty("客户名称5LIKE")
	private String customername5LIKE;
	public EditorValueSearchContext setCustomername5LIKE(String customername5LIKE) {
        this.customername5LIKE = customername5LIKE;
        if(!ObjectUtils.isEmpty(this.customername5LIKE)){
            this.getSearchCond().like("customername5", customername5LIKE);
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
                     wrapper.like("editorvaluename", query)
            );
		}
	}
}