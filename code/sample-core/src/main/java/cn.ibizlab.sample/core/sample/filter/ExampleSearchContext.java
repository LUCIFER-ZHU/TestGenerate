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
import cn.ibizlab.sample.core.sample.domain.Example;
/**
 * 关系型数据实体[Example] 查询条件对象
 */
@Slf4j
@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
@ApiModel("示例")
public class ExampleSearchContext extends QueryWrapperContext<Example> {

    @JsonProperty("n_examplename_like")
    @JSONField(name = "n_examplename_like")
    @ApiModelProperty("名称LIKE")
	private String exampleNameLIKE;
	public ExampleSearchContext setExampleNameLIKE(String exampleNameLIKE) {
        this.exampleNameLIKE = exampleNameLIKE;
        if(!ObjectUtils.isEmpty(this.exampleNameLIKE)){
            this.getSearchCond().like("examplename", exampleNameLIKE);
        }
        return this;
    } 
    @JsonProperty("n_datatype_eq")
    @JSONField(name = "n_datatype_eq")
    @ApiModelProperty("数据分类EQ")
	private String dataTypeEQ;
	public ExampleSearchContext setDataTypeEQ(String dataTypeEQ) {
        this.dataTypeEQ = dataTypeEQ;
        if(!ObjectUtils.isEmpty(this.dataTypeEQ)){
            this.getSearchCond().eq("datatype", dataTypeEQ);
        }
        return this;
    } 
    @JsonProperty("n_cityid_eq")
    @JSONField(name = "n_cityid_eq")
    @ApiModelProperty("市标识EQ")
	private String cityIdEQ;
	public ExampleSearchContext setCityIdEQ(String cityIdEQ) {
        this.cityIdEQ = cityIdEQ;
        if(!ObjectUtils.isEmpty(this.cityIdEQ)){
            this.getSearchCond().eq("cityid", cityIdEQ);
        }
        return this;
    } 
    @JsonProperty("n_cityname_eq")
    @JSONField(name = "n_cityname_eq")
    @ApiModelProperty("市EQ")
	private String cityNameEQ;
	public ExampleSearchContext setCityNameEQ(String cityNameEQ) {
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
	public ExampleSearchContext setCityNameLIKE(String cityNameLIKE) {
        this.cityNameLIKE = cityNameLIKE;
        if(!ObjectUtils.isEmpty(this.cityNameLIKE)){
            this.getSearchCond().like("cityname", cityNameLIKE);
        }
        return this;
    } 
    @JsonProperty("n_provinceid_eq")
    @JSONField(name = "n_provinceid_eq")
    @ApiModelProperty("省份标识EQ")
	private String provinceIdEQ;
	public ExampleSearchContext setProvinceIdEQ(String provinceIdEQ) {
        this.provinceIdEQ = provinceIdEQ;
        if(!ObjectUtils.isEmpty(this.provinceIdEQ)){
            this.getSearchCond().eq("provinceid", provinceIdEQ);
        }
        return this;
    } 
    @JsonProperty("n_provincename_eq")
    @JSONField(name = "n_provincename_eq")
    @ApiModelProperty("省份EQ")
	private String provinceNameEQ;
	public ExampleSearchContext setProvinceNameEQ(String provinceNameEQ) {
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
	public ExampleSearchContext setProvinceNameLIKE(String provinceNameLIKE) {
        this.provinceNameLIKE = provinceNameLIKE;
        if(!ObjectUtils.isEmpty(this.provinceNameLIKE)){
            this.getSearchCond().like("provincename", provinceNameLIKE);
        }
        return this;
    } 
    @JsonProperty("n_districtid_eq")
    @JSONField(name = "n_districtid_eq")
    @ApiModelProperty("区标识EQ")
	private String districtIdEQ;
	public ExampleSearchContext setDistrictIdEQ(String districtIdEQ) {
        this.districtIdEQ = districtIdEQ;
        if(!ObjectUtils.isEmpty(this.districtIdEQ)){
            this.getSearchCond().eq("districtid", districtIdEQ);
        }
        return this;
    } 
    @JsonProperty("n_districtname_eq")
    @JSONField(name = "n_districtname_eq")
    @ApiModelProperty("区/县EQ")
	private String districtNameEQ;
	public ExampleSearchContext setDistrictNameEQ(String districtNameEQ) {
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
	public ExampleSearchContext setDistrictNameLIKE(String districtNameLIKE) {
        this.districtNameLIKE = districtNameLIKE;
        if(!ObjectUtils.isEmpty(this.districtNameLIKE)){
            this.getSearchCond().like("districtname", districtNameLIKE);
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
                     wrapper.like("examplename", query)
            );
		}
	}
}