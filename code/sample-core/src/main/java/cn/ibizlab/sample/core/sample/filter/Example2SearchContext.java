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
import cn.ibizlab.sample.core.sample.domain.Example2;
/**
 * 关系型数据实体[Example2] 查询条件对象
 */
@Slf4j
@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
@ApiModel("示例明细")
public class Example2SearchContext extends QueryWrapperContext<Example2> {

    @JsonProperty("n_example2name_like")
    @JSONField(name = "n_example2name_like")
    @ApiModelProperty("示例明细名称LIKE")
	private String example2NameLIKE;
	public Example2SearchContext setExample2NameLIKE(String example2NameLIKE) {
        this.example2NameLIKE = example2NameLIKE;
        if(!ObjectUtils.isEmpty(this.example2NameLIKE)){
            this.getSearchCond().like("example2name", example2NameLIKE);
        }
        return this;
    } 
    @JsonProperty("n_exampleid_eq")
    @JSONField(name = "n_exampleid_eq")
    @ApiModelProperty("示例标识EQ")
	private String exampleIdEQ;
	public Example2SearchContext setExampleIdEQ(String exampleIdEQ) {
        this.exampleIdEQ = exampleIdEQ;
        if(!ObjectUtils.isEmpty(this.exampleIdEQ)){
            this.getSearchCond().eq("exampleid", exampleIdEQ);
        }
        return this;
    } 
    @JsonProperty("n_examplename_eq")
    @JSONField(name = "n_examplename_eq")
    @ApiModelProperty("示例名称EQ")
	private String exampleNameEQ;
	public Example2SearchContext setExampleNameEQ(String exampleNameEQ) {
        this.exampleNameEQ = exampleNameEQ;
        if(!ObjectUtils.isEmpty(this.exampleNameEQ)){
            this.getSearchCond().eq("examplename", exampleNameEQ);
        }
        return this;
    } 
    @JsonProperty("n_examplename_like")
    @JSONField(name = "n_examplename_like")
    @ApiModelProperty("示例名称LIKE")
	private String exampleNameLIKE;
	public Example2SearchContext setExampleNameLIKE(String exampleNameLIKE) {
        this.exampleNameLIKE = exampleNameLIKE;
        if(!ObjectUtils.isEmpty(this.exampleNameLIKE)){
            this.getSearchCond().like("examplename", exampleNameLIKE);
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
                     wrapper.like("example2name", query)
            );
		}
	}
}