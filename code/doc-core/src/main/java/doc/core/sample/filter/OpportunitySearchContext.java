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
import doc.core.sample.domain.Opportunity;
/**
 * 关系型数据实体[Opportunity] 查询条件对象
 */
@Slf4j
@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
@ApiModel("商机")
public class OpportunitySearchContext extends QueryWrapperContext<Opportunity> {

    @JsonProperty("n_opportunityid_eq")
    @JSONField(name = "n_opportunityid_eq")
    @ApiModelProperty("商机标识EQ")
	private String opportunityIdEQ;
	public OpportunitySearchContext setOpportunityIdEQ(String opportunityIdEQ) {
        this.opportunityIdEQ = opportunityIdEQ;
        if(!ObjectUtils.isEmpty(this.opportunityIdEQ)){
            this.getSearchCond().eq("opportunityid", opportunityIdEQ);
        }
        return this;
    }
                    
    @JsonProperty("n_opportunityname_like")
    @JSONField(name = "n_opportunityname_like")
    @ApiModelProperty("商机名称LIKE")
	private String opportunityNameLIKE;
	public OpportunitySearchContext setOpportunityNameLIKE(String opportunityNameLIKE) {
        this.opportunityNameLIKE = opportunityNameLIKE;
        if(!ObjectUtils.isEmpty(this.opportunityNameLIKE)){
            this.getSearchCond().like("opportunityname", opportunityNameLIKE);
        }
        return this;
    }
                    
    @JsonProperty("n_customerid_eq")
    @JSONField(name = "n_customerid_eq")
    @ApiModelProperty("客户标识EQ")
	private String customerIdEQ;
	public OpportunitySearchContext setCustomerIdEQ(String customerIdEQ) {
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
	public OpportunitySearchContext setCustomerNameEQ(String customerNameEQ) {
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
	public OpportunitySearchContext setCustomerNameLIKE(String customerNameLIKE) {
        this.customerNameLIKE = customerNameLIKE;
        if(!ObjectUtils.isEmpty(this.customerNameLIKE)){
            this.getSearchCond().like("customername", customerNameLIKE);
        }
        return this;
    }
                    
    @JsonProperty("n_priority_eq")
    @JSONField(name = "n_priority_eq")
    @ApiModelProperty("优先级EQ")
	private String priorityEQ;
	public OpportunitySearchContext setPriorityEQ(String priorityEQ) {
        this.priorityEQ = priorityEQ;
        if(!ObjectUtils.isEmpty(this.priorityEQ)){
            this.getSearchCond().eq("priority", priorityEQ);
        }
        return this;
    }
                    
    @JsonProperty("n_persondataid_eq")
    @JSONField(name = "n_persondataid_eq")
    @ApiModelProperty("销售员标识EQ")
	private String personDataIdEQ;
	public OpportunitySearchContext setPersonDataIdEQ(String personDataIdEQ) {
        this.personDataIdEQ = personDataIdEQ;
        if(!ObjectUtils.isEmpty(this.personDataIdEQ)){
            this.getSearchCond().eq("persondataid", personDataIdEQ);
        }
        return this;
    }
                    
    @JsonProperty("n_persondataname_eq")
    @JSONField(name = "n_persondataname_eq")
    @ApiModelProperty("销售员EQ")
	private String personDataNameEQ;
	public OpportunitySearchContext setPersonDataNameEQ(String personDataNameEQ) {
        this.personDataNameEQ = personDataNameEQ;
        if(!ObjectUtils.isEmpty(this.personDataNameEQ)){
            this.getSearchCond().eq("persondataname", personDataNameEQ);
        }
        return this;
    }
                    
    @JsonProperty("n_persondataname_like")
    @JSONField(name = "n_persondataname_like")
    @ApiModelProperty("销售员LIKE")
	private String personDataNameLIKE;
	public OpportunitySearchContext setPersonDataNameLIKE(String personDataNameLIKE) {
        this.personDataNameLIKE = personDataNameLIKE;
        if(!ObjectUtils.isEmpty(this.personDataNameLIKE)){
            this.getSearchCond().like("persondataname", personDataNameLIKE);
        }
        return this;
    }
                    
    @JsonProperty("n_state_eq")
    @JSONField(name = "n_state_eq")
    @ApiModelProperty("商机状态EQ")
	private String stateEQ;
	public OpportunitySearchContext setStateEQ(String stateEQ) {
        this.stateEQ = stateEQ;
        if(!ObjectUtils.isEmpty(this.stateEQ)){
            this.getSearchCond().eq("state", stateEQ);
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
                     wrapper.like("opportunityname", query)
            );
		}
	}
}