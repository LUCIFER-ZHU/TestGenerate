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
import cn.ibizlab.sample.core.sample.domain.Customer;
/**
 * 关系型数据实体[Customer] 查询条件对象
 */
@Slf4j
@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
@ApiModel("客户")
public class CustomerSearchContext extends QueryWrapperContext<Customer> {

    @JsonProperty("n_customername_like")
    @JSONField(name = "n_customername_like")
    @ApiModelProperty("客户名称LIKE")
	private String customerNameLIKE;
	public CustomerSearchContext setCustomerNameLIKE(String customerNameLIKE) {
        this.customerNameLIKE = customerNameLIKE;
        if(!ObjectUtils.isEmpty(this.customerNameLIKE)){
            this.getSearchCond().like("customername", customerNameLIKE);
        }
        return this;
    } 
    @JsonProperty("n_pcustomerid_eq")
    @JSONField(name = "n_pcustomerid_eq")
    @ApiModelProperty("上级客户标识EQ")
	private String pcustomeridEQ;
	public CustomerSearchContext setPcustomeridEQ(String pcustomeridEQ) {
        this.pcustomeridEQ = pcustomeridEQ;
        if(!ObjectUtils.isEmpty(this.pcustomeridEQ)){
            this.getSearchCond().eq("pcustomerid", pcustomeridEQ);
        }
        return this;
    } 
    @JsonProperty("n_pcustomername_eq")
    @JSONField(name = "n_pcustomername_eq")
    @ApiModelProperty("上级客户EQ")
	private String pcustomernameEQ;
	public CustomerSearchContext setPcustomernameEQ(String pcustomernameEQ) {
        this.pcustomernameEQ = pcustomernameEQ;
        if(!ObjectUtils.isEmpty(this.pcustomernameEQ)){
            this.getSearchCond().eq("pcustomername", pcustomernameEQ);
        }
        return this;
    } 
    @JsonProperty("n_pcustomername_like")
    @JSONField(name = "n_pcustomername_like")
    @ApiModelProperty("上级客户LIKE")
	private String pcustomernameLIKE;
	public CustomerSearchContext setPcustomernameLIKE(String pcustomernameLIKE) {
        this.pcustomernameLIKE = pcustomernameLIKE;
        if(!ObjectUtils.isEmpty(this.pcustomernameLIKE)){
            this.getSearchCond().like("pcustomername", pcustomernameLIKE);
        }
        return this;
    } 
    @JsonProperty("n_provinceid_eq")
    @JSONField(name = "n_provinceid_eq")
    @ApiModelProperty("省份标识EQ")
	private String provinceIdEQ;
	public CustomerSearchContext setProvinceIdEQ(String provinceIdEQ) {
        this.provinceIdEQ = provinceIdEQ;
        if(!ObjectUtils.isEmpty(this.provinceIdEQ)){
            this.getSearchCond().eq("provinceid", provinceIdEQ);
        }
        return this;
    } 
    @JsonProperty("n_cityid_eq")
    @JSONField(name = "n_cityid_eq")
    @ApiModelProperty("市标识EQ")
	private String cityIdEQ;
	public CustomerSearchContext setCityIdEQ(String cityIdEQ) {
        this.cityIdEQ = cityIdEQ;
        if(!ObjectUtils.isEmpty(this.cityIdEQ)){
            this.getSearchCond().eq("cityid", cityIdEQ);
        }
        return this;
    } 
    @JsonProperty("n_districtid_eq")
    @JSONField(name = "n_districtid_eq")
    @ApiModelProperty("区标识EQ")
	private String districtIdEQ;
	public CustomerSearchContext setDistrictIdEQ(String districtIdEQ) {
        this.districtIdEQ = districtIdEQ;
        if(!ObjectUtils.isEmpty(this.districtIdEQ)){
            this.getSearchCond().eq("districtid", districtIdEQ);
        }
        return this;
    } 
    @JsonProperty("n_provincename_eq")
    @JSONField(name = "n_provincename_eq")
    @ApiModelProperty("省份EQ")
	private String provinceNameEQ;
	public CustomerSearchContext setProvinceNameEQ(String provinceNameEQ) {
        this.provinceNameEQ = provinceNameEQ;
        if(!ObjectUtils.isEmpty(this.provinceNameEQ)){
            this.getSearchCond().eq("provincename", provinceNameEQ);
        }
        return this;
    } 
    @JsonProperty("n_provincename_like")
    @JSONField(name = "n_provincename_like")
    @ApiModelProperty("省份LIKE")
	private String provinceNameLIKE;
	public CustomerSearchContext setProvinceNameLIKE(String provinceNameLIKE) {
        this.provinceNameLIKE = provinceNameLIKE;
        if(!ObjectUtils.isEmpty(this.provinceNameLIKE)){
            this.getSearchCond().like("provincename", provinceNameLIKE);
        }
        return this;
    } 
    @JsonProperty("n_cityname_eq")
    @JSONField(name = "n_cityname_eq")
    @ApiModelProperty("市EQ")
	private String cityNameEQ;
	public CustomerSearchContext setCityNameEQ(String cityNameEQ) {
        this.cityNameEQ = cityNameEQ;
        if(!ObjectUtils.isEmpty(this.cityNameEQ)){
            this.getSearchCond().eq("cityname", cityNameEQ);
        }
        return this;
    } 
    @JsonProperty("n_cityname_like")
    @JSONField(name = "n_cityname_like")
    @ApiModelProperty("市LIKE")
	private String cityNameLIKE;
	public CustomerSearchContext setCityNameLIKE(String cityNameLIKE) {
        this.cityNameLIKE = cityNameLIKE;
        if(!ObjectUtils.isEmpty(this.cityNameLIKE)){
            this.getSearchCond().like("cityname", cityNameLIKE);
        }
        return this;
    } 
    @JsonProperty("n_districtname_eq")
    @JSONField(name = "n_districtname_eq")
    @ApiModelProperty("区/县EQ")
	private String districtNameEQ;
	public CustomerSearchContext setDistrictNameEQ(String districtNameEQ) {
        this.districtNameEQ = districtNameEQ;
        if(!ObjectUtils.isEmpty(this.districtNameEQ)){
            this.getSearchCond().eq("districtname", districtNameEQ);
        }
        return this;
    } 
    @JsonProperty("n_districtname_like")
    @JSONField(name = "n_districtname_like")
    @ApiModelProperty("区/县LIKE")
	private String districtNameLIKE;
	public CustomerSearchContext setDistrictNameLIKE(String districtNameLIKE) {
        this.districtNameLIKE = districtNameLIKE;
        if(!ObjectUtils.isEmpty(this.districtNameLIKE)){
            this.getSearchCond().like("districtname", districtNameLIKE);
        }
        return this;
    } 
    @JsonProperty("n_type_eq")
    @JSONField(name = "n_type_eq")
    @ApiModelProperty("类型EQ")
	private String typeEQ;
	public CustomerSearchContext setTypeEQ(String typeEQ) {
        this.typeEQ = typeEQ;
        if(!ObjectUtils.isEmpty(this.typeEQ)){
            this.getSearchCond().eq("type", typeEQ);
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
                     wrapper.like("customername", query)
            );
		}
	}
}