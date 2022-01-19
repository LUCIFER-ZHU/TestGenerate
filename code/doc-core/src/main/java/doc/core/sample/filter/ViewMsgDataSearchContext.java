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
import doc.core.sample.domain.ViewMsgData;
/**
 * 关系型数据实体[ViewMsgData] 查询条件对象
 */
@Slf4j
@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
@ApiModel("视图消息数据")
public class ViewMsgDataSearchContext extends QueryWrapperContext<ViewMsgData> {

    @JsonProperty("n_viewmsgdataid_eq")
    @JSONField(name = "n_viewmsgdataid_eq")
    @ApiModelProperty("视图消息数据标识EQ")
	private String viewMsgDataIdEQ;
	public ViewMsgDataSearchContext setViewMsgDataIdEQ(String viewMsgDataIdEQ) {
        this.viewMsgDataIdEQ = viewMsgDataIdEQ;
        if(!ObjectUtils.isEmpty(this.viewMsgDataIdEQ)){
            this.getSearchCond().eq("viewmsgdataid", viewMsgDataIdEQ);
        }
        return this;
    } 
    @JsonProperty("n_viewmsgdataname_like")
    @JSONField(name = "n_viewmsgdataname_like")
    @ApiModelProperty("视图消息标题LIKE")
	private String viewMsgDataNameLIKE;
	public ViewMsgDataSearchContext setViewMsgDataNameLIKE(String viewMsgDataNameLIKE) {
        this.viewMsgDataNameLIKE = viewMsgDataNameLIKE;
        if(!ObjectUtils.isEmpty(this.viewMsgDataNameLIKE)){
            this.getSearchCond().like("viewmsgdataname", viewMsgDataNameLIKE);
        }
        return this;
    } 
    @JsonProperty("n_type_eq")
    @JSONField(name = "n_type_eq")
    @ApiModelProperty("视图消息类型EQ")
	private String typeEQ;
	public ViewMsgDataSearchContext setTypeEQ(String typeEQ) {
        this.typeEQ = typeEQ;
        if(!ObjectUtils.isEmpty(this.typeEQ)){
            this.getSearchCond().eq("type", typeEQ);
        }
        return this;
    } 
    @JsonProperty("n_location_eq")
    @JSONField(name = "n_location_eq")
    @ApiModelProperty("视图消息位置EQ")
	private String locationEQ;
	public ViewMsgDataSearchContext setLocationEQ(String locationEQ) {
        this.locationEQ = locationEQ;
        if(!ObjectUtils.isEmpty(this.locationEQ)){
            this.getSearchCond().eq("location", locationEQ);
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
                     wrapper.like("viewmsgdataname", query)
            );
		}
	}
}