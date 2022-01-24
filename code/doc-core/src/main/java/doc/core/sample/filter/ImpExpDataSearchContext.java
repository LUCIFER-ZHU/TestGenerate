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
import doc.core.sample.domain.ImpExpData;
/**
 * 关系型数据实体[ImpExpData] 查询条件对象
 */
@Slf4j
@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
@ApiModel("导入导出数据")
public class ImpExpDataSearchContext extends QueryWrapperContext<ImpExpData> {

    @JsonProperty("n_impexpdataid_eq")
    @JSONField(name = "n_impexpdataid_eq")
    @ApiModelProperty("导入导出数据标识EQ")
	private String impExpDataIdEQ;
	public ImpExpDataSearchContext setImpExpDataIdEQ(String impExpDataIdEQ) {
        this.impExpDataIdEQ = impExpDataIdEQ;
        if(!ObjectUtils.isEmpty(this.impExpDataIdEQ)){
            this.getSearchCond().eq("impexpdataid", impExpDataIdEQ);
        }
        return this;
    }
                    
    @JsonProperty("n_impexpdataname_like")
    @JSONField(name = "n_impexpdataname_like")
    @ApiModelProperty("导入导出数据名称LIKE")
	private String impExpDataNameLIKE;
	public ImpExpDataSearchContext setImpExpDataNameLIKE(String impExpDataNameLIKE) {
        this.impExpDataNameLIKE = impExpDataNameLIKE;
        if(!ObjectUtils.isEmpty(this.impExpDataNameLIKE)){
            this.getSearchCond().like("impexpdataname", impExpDataNameLIKE);
        }
        return this;
    }
                    
    @JsonProperty("n_codelistfield_eq")
    @JSONField(name = "n_codelistfield_eq")
    @ApiModelProperty("代码表属性EQ")
	private String codelistfieldEQ;
	public ImpExpDataSearchContext setCodelistfieldEQ(String codelistfieldEQ) {
        this.codelistfieldEQ = codelistfieldEQ;
        if(!ObjectUtils.isEmpty(this.codelistfieldEQ)){
            this.getSearchCond().eq("codelistfield", codelistfieldEQ);
        }
        return this;
    }
                    
    @JsonProperty("n_customerid_eq")
    @JSONField(name = "n_customerid_eq")
    @ApiModelProperty("客户标识EQ")
	private String customerIdEQ;
	public ImpExpDataSearchContext setCustomerIdEQ(String customerIdEQ) {
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
	public ImpExpDataSearchContext setCustomerNameEQ(String customerNameEQ) {
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
	public ImpExpDataSearchContext setCustomerNameLIKE(String customerNameLIKE) {
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
                     wrapper.like("impexpdataname", query)
            );
		}
	}
}