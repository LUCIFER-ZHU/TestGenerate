package ibizsample.core.sample.filter;

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
import ibizsample.core.sample.domain.ChartData;
/**
 * 关系型数据实体[ChartData] 查询条件对象
 */
@Slf4j
@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
@ApiModel("图表")
public class ChartDataSearchContext extends QueryWrapperContext<ChartData> {

    @JsonProperty("n_chartdataid_eq")
    @JSONField(name = "n_chartdataid_eq")
    @ApiModelProperty("图表标识EQ")
	private String chartDataIdEQ;
	public ChartDataSearchContext setChartDataIdEQ(String chartDataIdEQ) {
        this.chartDataIdEQ = chartDataIdEQ;
        if(!ObjectUtils.isEmpty(this.chartDataIdEQ)){
            this.getSearchCond().eq("chartdataid", chartDataIdEQ);
        }
        return this;
    } 
    @JsonProperty("n_chartdataname_like")
    @JSONField(name = "n_chartdataname_like")
    @ApiModelProperty("图表名称LIKE")
	private String chartDataNameLIKE;
	public ChartDataSearchContext setChartDataNameLIKE(String chartDataNameLIKE) {
        this.chartDataNameLIKE = chartDataNameLIKE;
        if(!ObjectUtils.isEmpty(this.chartDataNameLIKE)){
            this.getSearchCond().like("chartdataname", chartDataNameLIKE);
        }
        return this;
    } 
    @JsonProperty("n_datatype_eq")
    @JSONField(name = "n_datatype_eq")
    @ApiModelProperty("数据分类EQ")
	private String dataTypeEQ;
	public ChartDataSearchContext setDataTypeEQ(String dataTypeEQ) {
        this.dataTypeEQ = dataTypeEQ;
        if(!ObjectUtils.isEmpty(this.dataTypeEQ)){
            this.getSearchCond().eq("datatype", dataTypeEQ);
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
                     wrapper.like("chartdataname", query)
            );
		}
	}
}