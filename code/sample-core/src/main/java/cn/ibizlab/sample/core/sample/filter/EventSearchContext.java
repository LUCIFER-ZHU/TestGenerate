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
import cn.ibizlab.sample.core.sample.domain.Event;
/**
 * 关系型数据实体[Event] 查询条件对象
 */
@Slf4j
@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
@ApiModel("事件")
public class EventSearchContext extends QueryWrapperContext<Event> {

    @JsonProperty("n_eventname_like")
    @JSONField(name = "n_eventname_like")
    @ApiModelProperty("事件名称LIKE")
	private String eventNameLIKE;
	public EventSearchContext setEventNameLIKE(String eventNameLIKE) {
        this.eventNameLIKE = eventNameLIKE;
        if(!ObjectUtils.isEmpty(this.eventNameLIKE)){
            this.getSearchCond().like("eventname", eventNameLIKE);
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
                     wrapper.like("eventname", query)
            );
		}
	}
}