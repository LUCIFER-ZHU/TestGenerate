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
import doc.core.sample.domain.CalendarData;
/**
 * 关系型数据实体[CalendarData] 查询条件对象
 */
@Slf4j
@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
@ApiModel("日历示例数据")
public class CalendarDataSearchContext extends QueryWrapperContext<CalendarData> {

    @JsonProperty("n_calendardataid_eq")
    @JSONField(name = "n_calendardataid_eq")
    @ApiModelProperty("日历示例数据标识EQ")
	private String calendarDataIdEQ;
	public CalendarDataSearchContext setCalendarDataIdEQ(String calendarDataIdEQ) {
        this.calendarDataIdEQ = calendarDataIdEQ;
        if(!ObjectUtils.isEmpty(this.calendarDataIdEQ)){
            this.getSearchCond().eq("calendardataid", calendarDataIdEQ);
        }
        return this;
    } 
    @JsonProperty("n_calendardataname_like")
    @JSONField(name = "n_calendardataname_like")
    @ApiModelProperty("事项LIKE")
	private String calendarDataNameLIKE;
	public CalendarDataSearchContext setCalendarDataNameLIKE(String calendarDataNameLIKE) {
        this.calendarDataNameLIKE = calendarDataNameLIKE;
        if(!ObjectUtils.isEmpty(this.calendarDataNameLIKE)){
            this.getSearchCond().like("calendardataname", calendarDataNameLIKE);
        }
        return this;
    } 
    @JsonProperty("n_type_eq")
    @JSONField(name = "n_type_eq")
    @ApiModelProperty("类型EQ")
	private String typeEQ;
	public CalendarDataSearchContext setTypeEQ(String typeEQ) {
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
                     wrapper.like("calendardataname", query)
            );
		}
	}
}