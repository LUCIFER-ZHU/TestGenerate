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
import cn.ibizlab.sample.core.sample.domain.KanbanData;
/**
 * 关系型数据实体[KanbanData] 查询条件对象
 */
@Slf4j
@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
@ApiModel("看板数据")
public class KanbanDataSearchContext extends QueryWrapperContext<KanbanData> {

    @JsonProperty("n_kanbandataname_like")
    @JSONField(name = "n_kanbandataname_like")
    @ApiModelProperty("任务名称LIKE")
	private String kanbanDataNameLIKE;
	public KanbanDataSearchContext setKanbanDataNameLIKE(String kanbanDataNameLIKE) {
        this.kanbanDataNameLIKE = kanbanDataNameLIKE;
        if(!ObjectUtils.isEmpty(this.kanbanDataNameLIKE)){
            this.getSearchCond().like("kanbandataname", kanbanDataNameLIKE);
        }
        return this;
    } 
    @JsonProperty("n_taskstatus_eq")
    @JSONField(name = "n_taskstatus_eq")
    @ApiModelProperty("任务状态EQ")
	private String taskstatusEQ;
	public KanbanDataSearchContext setTaskstatusEQ(String taskstatusEQ) {
        this.taskstatusEQ = taskstatusEQ;
        if(!ObjectUtils.isEmpty(this.taskstatusEQ)){
            this.getSearchCond().eq("taskstatus", taskstatusEQ);
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
                     wrapper.like("kanbandataname", query)
            );
		}
	}
}