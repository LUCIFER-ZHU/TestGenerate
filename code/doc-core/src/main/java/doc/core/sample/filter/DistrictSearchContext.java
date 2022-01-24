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
import doc.core.sample.domain.District;
/**
 * 关系型数据实体[District] 查询条件对象
 */
@Slf4j
@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
@ApiModel("区")
public class DistrictSearchContext extends QueryWrapperContext<District> {

    @JsonProperty("n_districtname_like")
    @JSONField(name = "n_districtname_like")
    @ApiModelProperty("区名称LIKE")
	private String districtNameLIKE;
	public DistrictSearchContext setDistrictNameLIKE(String districtNameLIKE) {
        this.districtNameLIKE = districtNameLIKE;
        if(!ObjectUtils.isEmpty(this.districtNameLIKE)){
            this.getSearchCond().like("districtname", districtNameLIKE);
        }
        return this;
    }
                    
    @JsonProperty("n_districtid_eq")
    @JSONField(name = "n_districtid_eq")
    @ApiModelProperty("区标识EQ")
	private String districtIdEQ;
	public DistrictSearchContext setDistrictIdEQ(String districtIdEQ) {
        this.districtIdEQ = districtIdEQ;
        if(!ObjectUtils.isEmpty(this.districtIdEQ)){
            this.getSearchCond().eq("districtid", districtIdEQ);
        }
        return this;
    }
                    
    @JsonProperty("n_cityid_eq")
    @JSONField(name = "n_cityid_eq")
    @ApiModelProperty("市标识EQ")
	private String cityIdEQ;
	public DistrictSearchContext setCityIdEQ(String cityIdEQ) {
        this.cityIdEQ = cityIdEQ;
        if(!ObjectUtils.isEmpty(this.cityIdEQ)){
            this.getSearchCond().eq("cityid", cityIdEQ);
        }
        return this;
    }
                    
    @JsonProperty("n_cityname_eq")
    @JSONField(name = "n_cityname_eq")
    @ApiModelProperty("市名称EQ")
	private String cityNameEQ;
	public DistrictSearchContext setCityNameEQ(String cityNameEQ) {
        this.cityNameEQ = cityNameEQ;
        if(!ObjectUtils.isEmpty(this.cityNameEQ)){
            this.getSearchCond().eq("cityname", cityNameEQ);
        }
        return this;
    }
                    
    @JsonProperty("n_cityname_like")
    @JSONField(name = "n_cityname_like")
    @ApiModelProperty("市名称LIKE")
	private String cityNameLIKE;
	public DistrictSearchContext setCityNameLIKE(String cityNameLIKE) {
        this.cityNameLIKE = cityNameLIKE;
        if(!ObjectUtils.isEmpty(this.cityNameLIKE)){
            this.getSearchCond().like("cityname", cityNameLIKE);
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
                     wrapper.like("districtname", query)
            );
		}
	}
}