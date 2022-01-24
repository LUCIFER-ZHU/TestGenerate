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
import doc.core.sample.domain.LeaveApplication;
/**
 * 关系型数据实体[LeaveApplication] 查询条件对象
 */
@Slf4j
@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
@ApiModel("请假申请")
public class LeaveApplicationSearchContext extends QueryWrapperContext<LeaveApplication> {

    @JsonProperty("n_leaveapplicationname_like")
    @JSONField(name = "n_leaveapplicationname_like")
    @ApiModelProperty("请假申请名称LIKE")
	private String leaveApplicationNameLIKE;
	public LeaveApplicationSearchContext setLeaveApplicationNameLIKE(String leaveApplicationNameLIKE) {
        this.leaveApplicationNameLIKE = leaveApplicationNameLIKE;
        if(!ObjectUtils.isEmpty(this.leaveApplicationNameLIKE)){
            this.getSearchCond().like("leaveapplicationname", leaveApplicationNameLIKE);
        }
        return this;
    }
                    
    @JsonProperty("n_leaveapplicationid_eq")
    @JSONField(name = "n_leaveapplicationid_eq")
    @ApiModelProperty("请假申请标识EQ")
	private String leaveApplicationIdEQ;
	public LeaveApplicationSearchContext setLeaveApplicationIdEQ(String leaveApplicationIdEQ) {
        this.leaveApplicationIdEQ = leaveApplicationIdEQ;
        if(!ObjectUtils.isEmpty(this.leaveApplicationIdEQ)){
            this.getSearchCond().eq("leaveapplicationid", leaveApplicationIdEQ);
        }
        return this;
    }
                    
    @JsonProperty("n_state_eq")
    @JSONField(name = "n_state_eq")
    @ApiModelProperty("申请状态EQ")
	private String stateEQ;
	public LeaveApplicationSearchContext setStateEQ(String stateEQ) {
        this.stateEQ = stateEQ;
        if(!ObjectUtils.isEmpty(this.stateEQ)){
            this.getSearchCond().eq("state", stateEQ);
        }
        return this;
    }
                    
    @JsonProperty("n_customerid_eq")
    @JSONField(name = "n_customerid_eq")
    @ApiModelProperty("客户标识EQ")
	private String customerIdEQ;
	public LeaveApplicationSearchContext setCustomerIdEQ(String customerIdEQ) {
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
	public LeaveApplicationSearchContext setCustomerNameEQ(String customerNameEQ) {
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
	public LeaveApplicationSearchContext setCustomerNameLIKE(String customerNameLIKE) {
        this.customerNameLIKE = customerNameLIKE;
        if(!ObjectUtils.isEmpty(this.customerNameLIKE)){
            this.getSearchCond().like("customername", customerNameLIKE);
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
                     wrapper.like("leaveapplicationname", query)
            );
		}
	}
}