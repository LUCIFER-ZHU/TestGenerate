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
import cn.ibizlab.sample.core.sample.domain.OrgData;
/**
 * 关系型数据实体[OrgData] 查询条件对象
 */
@Slf4j
@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
@ApiModel("组织数据")
public class OrgDataSearchContext extends QueryWrapperContext<OrgData> {

    @JsonProperty("n_orgdataname_like")
    @JSONField(name = "n_orgdataname_like")
    @ApiModelProperty("组织名称LIKE")
	private String orgDataNameLIKE;
	public OrgDataSearchContext setOrgDataNameLIKE(String orgDataNameLIKE) {
        this.orgDataNameLIKE = orgDataNameLIKE;
        if(!ObjectUtils.isEmpty(this.orgDataNameLIKE)){
            this.getSearchCond().like("orgdataname", orgDataNameLIKE);
        }
        return this;
    } 
    @JsonProperty("n_porgdataid_eq")
    @JSONField(name = "n_porgdataid_eq")
    @ApiModelProperty("父级组织数据标识EQ")
	private String porgdataidEQ;
	public OrgDataSearchContext setPorgdataidEQ(String porgdataidEQ) {
        this.porgdataidEQ = porgdataidEQ;
        if(!ObjectUtils.isEmpty(this.porgdataidEQ)){
            this.getSearchCond().eq("porgdataid", porgdataidEQ);
        }
        return this;
    } 
    @JsonProperty("n_porgdataname_eq")
    @JSONField(name = "n_porgdataname_eq")
    @ApiModelProperty("父级组织EQ")
	private String porgdatanameEQ;
	public OrgDataSearchContext setPorgdatanameEQ(String porgdatanameEQ) {
        this.porgdatanameEQ = porgdatanameEQ;
        if(!ObjectUtils.isEmpty(this.porgdatanameEQ)){
            this.getSearchCond().eq("porgdataname", porgdatanameEQ);
        }
        return this;
    } 
    @JsonProperty("n_porgdataname_like")
    @JSONField(name = "n_porgdataname_like")
    @ApiModelProperty("父级组织LIKE")
	private String porgdatanameLIKE;
	public OrgDataSearchContext setPorgdatanameLIKE(String porgdatanameLIKE) {
        this.porgdatanameLIKE = porgdatanameLIKE;
        if(!ObjectUtils.isEmpty(this.porgdatanameLIKE)){
            this.getSearchCond().like("porgdataname", porgdatanameLIKE);
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
                     wrapper.like("orgdataname", query)
            );
		}
	}
}