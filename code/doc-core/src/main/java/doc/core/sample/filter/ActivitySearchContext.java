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
import doc.core.sample.domain.Activity;
/**
 * 关系型数据实体[Activity] 查询条件对象
 */
@Slf4j
@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
@ApiModel("活动")
public class ActivitySearchContext extends QueryWrapperContext<Activity> {

    @JsonProperty("n_activityid_eq")
    @JSONField(name = "n_activityid_eq")
    @ApiModelProperty("活动标识EQ")
	private String activityIdEQ;
	public ActivitySearchContext setActivityIdEQ(String activityIdEQ) {
        this.activityIdEQ = activityIdEQ;
        if(!ObjectUtils.isEmpty(this.activityIdEQ)){
            this.getSearchCond().eq("activityid", activityIdEQ);
        }
        return this;
    } 
    @JsonProperty("n_activityname_like")
    @JSONField(name = "n_activityname_like")
    @ApiModelProperty("活动名称LIKE")
	private String activityNameLIKE;
	public ActivitySearchContext setActivityNameLIKE(String activityNameLIKE) {
        this.activityNameLIKE = activityNameLIKE;
        if(!ObjectUtils.isEmpty(this.activityNameLIKE)){
            this.getSearchCond().like("activityname", activityNameLIKE);
        }
        return this;
    } 
    @JsonProperty("n_activitytype_eq")
    @JSONField(name = "n_activitytype_eq")
    @ApiModelProperty("活动类型EQ")
	private String activitytypeEQ;
	public ActivitySearchContext setActivitytypeEQ(String activitytypeEQ) {
        this.activitytypeEQ = activitytypeEQ;
        if(!ObjectUtils.isEmpty(this.activitytypeEQ)){
            this.getSearchCond().eq("activitytype", activitytypeEQ);
        }
        return this;
    } 
    @JsonProperty("n_customerid_eq")
    @JSONField(name = "n_customerid_eq")
    @ApiModelProperty("客户标识EQ")
	private String customerIdEQ;
	public ActivitySearchContext setCustomerIdEQ(String customerIdEQ) {
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
	public ActivitySearchContext setCustomerNameEQ(String customerNameEQ) {
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
	public ActivitySearchContext setCustomerNameLIKE(String customerNameLIKE) {
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
                     wrapper.like("activityname", query)
            );
		}
	}
}