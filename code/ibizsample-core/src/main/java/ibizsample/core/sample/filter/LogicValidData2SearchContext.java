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
import ibizsample.core.sample.domain.LogicValidData2;
/**
 * 关系型数据实体[LogicValidData2] 查询条件对象
 */
@Slf4j
@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
@ApiModel("示例数据（启用逻辑删除）（主键数值）")
public class LogicValidData2SearchContext extends QueryWrapperContext<LogicValidData2> {

    @JsonProperty("n_logicvaliddata2id_eq")
    @JSONField(name = "n_logicvaliddata2id_eq")
    @JsonSerialize(using = ToStringSerializer.class)            
    @ApiModelProperty("示例数据（启用逻辑删除）（主键数值）标识EQ")
	private Long logicValidData2IdEQ;
	public LogicValidData2SearchContext setLogicValidData2IdEQ(Long logicValidData2IdEQ) {
        this.logicValidData2IdEQ = logicValidData2IdEQ;
        if(!ObjectUtils.isEmpty(this.logicValidData2IdEQ)){
            this.getSearchCond().eq("logicvaliddata2id", logicValidData2IdEQ);
        }
        return this;
    } 
    @JsonProperty("n_logicvaliddata2name_like")
    @JSONField(name = "n_logicvaliddata2name_like")
    @ApiModelProperty("名称LIKE")
	private String logicValidData2NameLIKE;
	public LogicValidData2SearchContext setLogicValidData2NameLIKE(String logicValidData2NameLIKE) {
        this.logicValidData2NameLIKE = logicValidData2NameLIKE;
        if(!ObjectUtils.isEmpty(this.logicValidData2NameLIKE)){
            this.getSearchCond().like("logicvaliddata2name", logicValidData2NameLIKE);
        }
        return this;
    } 
    @JsonProperty("n_unionkey_eq")
    @JSONField(name = "n_unionkey_eq")
    @ApiModelProperty("唯一标识EQ")
	private String unionkeyEQ;
	public LogicValidData2SearchContext setUnionkeyEQ(String unionkeyEQ) {
        this.unionkeyEQ = unionkeyEQ;
        if(!ObjectUtils.isEmpty(this.unionkeyEQ)){
            this.getSearchCond().eq("unionkey", unionkeyEQ);
        }
        return this;
    } 
    @JsonProperty("n_region_eq")
    @JSONField(name = "n_region_eq")
    @ApiModelProperty("区域EQ")
	private String regionEQ;
	public LogicValidData2SearchContext setRegionEQ(String regionEQ) {
        this.regionEQ = regionEQ;
        if(!ObjectUtils.isEmpty(this.regionEQ)){
            this.getSearchCond().eq("region", regionEQ);
        }
        return this;
    } 
    @JsonProperty("n_code_eq")
    @JSONField(name = "n_code_eq")
    @ApiModelProperty("标识EQ")
	private String codeEQ;
	public LogicValidData2SearchContext setCodeEQ(String codeEQ) {
        this.codeEQ = codeEQ;
        if(!ObjectUtils.isEmpty(this.codeEQ)){
            this.getSearchCond().eq("code", codeEQ);
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
                     wrapper.like("logicvaliddata2name", query)
            );
		}
	}
}