package cn.ibizlab.sample.sampleapi.rest;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.math.BigInteger;
import java.util.HashMap;
import lombok.extern.slf4j.Slf4j;
import com.alibaba.fastjson.JSONObject;
import javax.servlet.ServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cglib.beans.BeanCopier;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.util.StringUtils;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.access.prepost.PostAuthorize;
import org.springframework.validation.annotation.Validated;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import cn.ibizlab.sample.sampleapi.dto.*;
import cn.ibizlab.sample.sampleapi.mapping.*;
import cn.ibizlab.sample.core.sample.domain.Opportunity;
import cn.ibizlab.sample.core.sample.service.IOpportunityService;
import cn.ibizlab.sample.core.sample.filter.OpportunitySearchContext;
import cn.ibizlab.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"商机" })
@RestController("sampleapi-opportunity")
@RequestMapping("")
public class OpportunityResource {

    @Autowired
    public IOpportunityService service;

    @Autowired
    @Lazy
    public OpportunityMapping mapping;

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Opportunity-Create-all')")
    @ApiOperation(value = "新建商机", tags = {"商机" },  notes = "新建商机")
	@RequestMapping(method = RequestMethod.POST, value = "/opportunities")
    public ResponseEntity<OpportunityDTO> create(@Validated @RequestBody OpportunityDTO dto) {
        Opportunity domain = mapping.toDomain(dto);
		service.create(domain);
		return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Opportunity-Create-all')")
    @ApiOperation(value = "批量新建商机", tags = {"商机" },  notes = "批量新建商机")
	@RequestMapping(method = RequestMethod.POST, value = "/opportunities/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<OpportunityDTO> dtos) {
        service.createBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Opportunity-Get-all')")
    @ApiOperation(value = "获取商机", tags = {"商机" },  notes = "获取商机")
	@RequestMapping(method = RequestMethod.GET, value = "/opportunities/{id}")
    public ResponseEntity<OpportunityDTO> get(@PathVariable("id") String id) {
        Opportunity domain = service.get(id);
        OpportunityDTO dto = mapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Opportunity-Remove-all')")
    @ApiOperation(value = "删除商机", tags = {"商机" },  notes = "删除商机")
	@RequestMapping(method = RequestMethod.DELETE, value = "/opportunities/{id}")
    public ResponseEntity<Boolean> remove(@PathVariable("id") String id) {
         return ResponseEntity.status(HttpStatus.OK).body(service.remove(id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Opportunity-Remove-all')")
    @ApiOperation(value = "批量删除商机", tags = {"商机" },  notes = "批量删除商机")
	@RequestMapping(method = RequestMethod.DELETE, value = "/opportunities/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<String> ids) {
        service.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @VersionCheck(entity = "opportunity" , versionfield = "updateDate")    
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Opportunity-Update-all')")
    @ApiOperation(value = "更新商机", tags = {"商机" },  notes = "更新商机")
	@RequestMapping(method = RequestMethod.PUT, value = "/opportunities/{id}")
    public ResponseEntity<OpportunityDTO> update(@PathVariable("id") String id, @RequestBody OpportunityDTO dto) {
		Opportunity domain  = mapping.toDomain(dto);
        domain.setOpportunityId(id);
		service.update(domain);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Opportunity-Update-all')")
    @ApiOperation(value = "批量更新商机", tags = {"商机" },  notes = "批量更新商机")
	@RequestMapping(method = RequestMethod.PUT, value = "/opportunities/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<OpportunityDTO> dtos) {
        service.updateBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "检查商机", tags = {"商机" },  notes = "检查商机")
	@RequestMapping(method = RequestMethod.POST, value = "/opportunities/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody OpportunityDTO dto) {
        return  ResponseEntity.status(HttpStatus.OK).body(service.checkKey(mapping.toDomain(dto)));
    }

    @ApiOperation(value = "获取商机草稿", tags = {"商机" },  notes = "获取商机草稿")
	@RequestMapping(method = RequestMethod.GET, value = "/opportunities/getdraft")
    public ResponseEntity<OpportunityDTO> getDraft(OpportunityDTO dto) {
        Opportunity domain = mapping.toDomain(dto);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(service.getDraft(domain)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Opportunity-Save-all')")
    @ApiOperation(value = "保存商机", tags = {"商机" },  notes = "保存商机")
	@RequestMapping(method = RequestMethod.POST, value = "/opportunities/save")
    public ResponseEntity<OpportunityDTO> save(@RequestBody OpportunityDTO dto) {
        Opportunity domain = mapping.toDomain(dto);
        service.save(domain);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Opportunity-Save-all')")
    @ApiOperation(value = "批量保存商机", tags = {"商机" },  notes = "批量保存商机")
	@RequestMapping(method = RequestMethod.POST, value = "/opportunities/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<OpportunityDTO> dtos) {
        service.saveBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

        
    @ApiOperation(value = "获取DEFAULT", tags = {"商机" } ,notes = "获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/opportunities/fetchdefault")
    public ResponseEntity<List<OpportunityDTO>> fetchDefault(OpportunitySearchContext context) {
        Page<Opportunity> domains = service.searchDefault(context) ;
        List<OpportunityDTO> list = mapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}
	

	@ApiOperation(value = "查询DEFAULT", tags = {"商机" } ,notes = "查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/opportunities/searchdefault")
    public ResponseEntity<Page<OpportunityDTO>> searchDefault(@RequestBody OpportunitySearchContext context) {
        Page<Opportunity> domains = service.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(mapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}   
	



}
