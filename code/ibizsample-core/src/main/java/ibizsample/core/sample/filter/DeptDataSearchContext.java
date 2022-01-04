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
import ibizsample.core.sample.domain.DeptData;
/**
 * 关系型数据实体[DeptData] 查询条件对象
 */
@Slf4j
@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
@ApiModel("部门数据")
public class DeptDataSearchContext extends QueryWrapperContext<DeptData> {

    @JsonProperty("n_deptdataid_eq")
    @JSONField(name = "n_deptdataid_eq")
    @ApiModelProperty("部门数据标识EQ")
	private String deptDataIdEQ;
	public DeptDataSearchContext setDeptDataIdEQ(String deptDataIdEQ) {
        this.deptDataIdEQ = deptDataIdEQ;
        if(!ObjectUtils.isEmpty(this.deptDataIdEQ)){
            this.getSearchCond().eq("deptdataid", deptDataIdEQ);
        }
        return this;
    } 
    @JsonProperty("n_deptdataname_like")
    @JSONField(name = "n_deptdataname_like")
    @ApiModelProperty("部门名称LIKE")
	private String deptDataNameLIKE;
	public DeptDataSearchContext setDeptDataNameLIKE(String deptDataNameLIKE) {
        this.deptDataNameLIKE = deptDataNameLIKE;
        if(!ObjectUtils.isEmpty(this.deptDataNameLIKE)){
            this.getSearchCond().like("deptdataname", deptDataNameLIKE);
        }
        return this;
    } 
    @JsonProperty("n_orgdataid_eq")
    @JSONField(name = "n_orgdataid_eq")
    @ApiModelProperty("组织数据标识EQ")
	private String orgDataIdEQ;
	public DeptDataSearchContext setOrgDataIdEQ(String orgDataIdEQ) {
        this.orgDataIdEQ = orgDataIdEQ;
        if(!ObjectUtils.isEmpty(this.orgDataIdEQ)){
            this.getSearchCond().eq("orgdataid", orgDataIdEQ);
        }
        return this;
    } 
    @JsonProperty("n_orgdataname_eq")
    @JSONField(name = "n_orgdataname_eq")
    @ApiModelProperty("组织名称EQ")
	private String orgDataNameEQ;
	public DeptDataSearchContext setOrgDataNameEQ(String orgDataNameEQ) {
        this.orgDataNameEQ = orgDataNameEQ;
        if(!ObjectUtils.isEmpty(this.orgDataNameEQ)){
            this.getSearchCond().eq("orgdataname", orgDataNameEQ);
        }
        return this;
    } 
    @JsonProperty("n_orgdataname_like")
    @JSONField(name = "n_orgdataname_like")
    @ApiModelProperty("组织名称LIKE")
	private String orgDataNameLIKE;
	public DeptDataSearchContext setOrgDataNameLIKE(String orgDataNameLIKE) {
        this.orgDataNameLIKE = orgDataNameLIKE;
        if(!ObjectUtils.isEmpty(this.orgDataNameLIKE)){
            this.getSearchCond().like("orgdataname", orgDataNameLIKE);
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
                     wrapper.like("deptdataname", query)
            );
		}
	}
}