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
import doc.core.sample.domain.Province;
/**
 * 关系型数据实体[Province] 查询条件对象
 */
@Slf4j
@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
@ApiModel("省份")
public class ProvinceSearchContext extends QueryWrapperContext<Province> {

    @JsonProperty("n_provincename_like")
    @JSONField(name = "n_provincename_like")
    @ApiModelProperty("省份名称LIKE")
	private String provinceNameLIKE;
	public ProvinceSearchContext setProvinceNameLIKE(String provinceNameLIKE) {
        this.provinceNameLIKE = provinceNameLIKE;
        if(!ObjectUtils.isEmpty(this.provinceNameLIKE)){
            this.getSearchCond().like("provincename", provinceNameLIKE);
        }
        return this;
    } 
    @JsonProperty("n_provinceid_eq")
    @JSONField(name = "n_provinceid_eq")
    @ApiModelProperty("省份标识EQ")
	private String provinceIdEQ;
	public ProvinceSearchContext setProvinceIdEQ(String provinceIdEQ) {
        this.provinceIdEQ = provinceIdEQ;
        if(!ObjectUtils.isEmpty(this.provinceIdEQ)){
            this.getSearchCond().eq("provinceid", provinceIdEQ);
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
                     wrapper.like("provincename", query)
            );
		}
	}
}