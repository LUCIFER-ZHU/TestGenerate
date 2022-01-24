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
import doc.core.sample.domain.SampleVer;
/**
 * 关系型数据实体[SampleVer] 查询条件对象
 */
@Slf4j
@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
@ApiModel("示例版本")
public class SampleVerSearchContext extends QueryWrapperContext<SampleVer> {

    @JsonProperty("n_samplevername_like")
    @JSONField(name = "n_samplevername_like")
    @ApiModelProperty("标题LIKE")
	private String sampleVerNameLIKE;
	public SampleVerSearchContext setSampleVerNameLIKE(String sampleVerNameLIKE) {
        this.sampleVerNameLIKE = sampleVerNameLIKE;
        if(!ObjectUtils.isEmpty(this.sampleVerNameLIKE)){
            this.getSearchCond().like("samplevername", sampleVerNameLIKE);
        }
        return this;
    }
                    
    @JsonProperty("n_sampleverid_eq")
    @JSONField(name = "n_sampleverid_eq")
    @ApiModelProperty("示例版本标识EQ")
	private String sampleVerIdEQ;
	public SampleVerSearchContext setSampleVerIdEQ(String sampleVerIdEQ) {
        this.sampleVerIdEQ = sampleVerIdEQ;
        if(!ObjectUtils.isEmpty(this.sampleVerIdEQ)){
            this.getSearchCond().eq("sampleverid", sampleVerIdEQ);
        }
        return this;
    }
                    
    @JsonProperty("n_type_eq")
    @JSONField(name = "n_type_eq")
    @ApiModelProperty("分类EQ")
	private String typeEQ;
	public SampleVerSearchContext setTypeEQ(String typeEQ) {
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
                     wrapper.like("samplevername", query)
            );
		}
	}
}