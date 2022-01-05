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
import cn.ibizlab.sample.core.sample.domain.OrgData;
import cn.ibizlab.sample.core.sample.service.IOrgDataService;
import cn.ibizlab.sample.core.sample.filter.OrgDataSearchContext;
import cn.ibizlab.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"组织数据" })
@RestController("sampleapi-orgdata")
@RequestMapping("")
public class OrgDataResource {

    @Autowired
    public IOrgDataService service;

    @Autowired
    @Lazy
    public OrgDataMapping mapping;

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-OrgData-Create-all')")
    @ApiOperation(value = "新建组织数据", tags = {"组织数据" },  notes = "新建组织数据")
	@RequestMapping(method = RequestMethod.POST, value = "/orgdatas")
    public ResponseEntity<OrgDataDTO> create(@Validated @RequestBody OrgDataDTO dto) {
        OrgData domain = mapping.toDomain(dto);
		service.create(domain);
		return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-OrgData-Create-all')")
    @ApiOperation(value = "批量新建组织数据", tags = {"组织数据" },  notes = "批量新建组织数据")
	@RequestMapping(method = RequestMethod.POST, value = "/orgdatas/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<OrgDataDTO> dtos) {
        service.createBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-OrgData-Get-all')")
    @ApiOperation(value = "获取组织数据", tags = {"组织数据" },  notes = "获取组织数据")
	@RequestMapping(method = RequestMethod.GET, value = "/orgdatas/{id}")
    public ResponseEntity<OrgDataDTO> get(@PathVariable("id") String id) {
        OrgData domain = service.get(id);
        OrgDataDTO dto = mapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-OrgData-Remove-all')")
    @ApiOperation(value = "删除组织数据", tags = {"组织数据" },  notes = "删除组织数据")
	@RequestMapping(method = RequestMethod.DELETE, value = "/orgdatas/{id}")
    public ResponseEntity<Boolean> remove(@PathVariable("id") String id) {
         return ResponseEntity.status(HttpStatus.OK).body(service.remove(id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-OrgData-Remove-all')")
    @ApiOperation(value = "批量删除组织数据", tags = {"组织数据" },  notes = "批量删除组织数据")
	@RequestMapping(method = RequestMethod.DELETE, value = "/orgdatas/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<String> ids) {
        service.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @VersionCheck(entity = "orgdata" , versionfield = "updateDate")    
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-OrgData-Update-all')")
    @ApiOperation(value = "更新组织数据", tags = {"组织数据" },  notes = "更新组织数据")
	@RequestMapping(method = RequestMethod.PUT, value = "/orgdatas/{id}")
    public ResponseEntity<OrgDataDTO> update(@PathVariable("id") String id, @RequestBody OrgDataDTO dto) {
		OrgData domain  = mapping.toDomain(dto);
        domain.setOrgDataId(id);
		service.update(domain);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-OrgData-Update-all')")
    @ApiOperation(value = "批量更新组织数据", tags = {"组织数据" },  notes = "批量更新组织数据")
	@RequestMapping(method = RequestMethod.PUT, value = "/orgdatas/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<OrgDataDTO> dtos) {
        service.updateBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "检查组织数据", tags = {"组织数据" },  notes = "检查组织数据")
	@RequestMapping(method = RequestMethod.POST, value = "/orgdatas/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody OrgDataDTO dto) {
        return  ResponseEntity.status(HttpStatus.OK).body(service.checkKey(mapping.toDomain(dto)));
    }

    @ApiOperation(value = "获取组织数据草稿", tags = {"组织数据" },  notes = "获取组织数据草稿")
	@RequestMapping(method = RequestMethod.GET, value = "/orgdatas/getdraft")
    public ResponseEntity<OrgDataDTO> getDraft(OrgDataDTO dto) {
        OrgData domain = mapping.toDomain(dto);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(service.getDraft(domain)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-OrgData-Save-all')")
    @ApiOperation(value = "保存组织数据", tags = {"组织数据" },  notes = "保存组织数据")
	@RequestMapping(method = RequestMethod.POST, value = "/orgdatas/save")
    public ResponseEntity<OrgDataDTO> save(@RequestBody OrgDataDTO dto) {
        OrgData domain = mapping.toDomain(dto);
        service.save(domain);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-OrgData-Save-all')")
    @ApiOperation(value = "批量保存组织数据", tags = {"组织数据" },  notes = "批量保存组织数据")
	@RequestMapping(method = RequestMethod.POST, value = "/orgdatas/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<OrgDataDTO> dtos) {
        service.saveBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

        
    @ApiOperation(value = "获取DEFAULT", tags = {"组织数据" } ,notes = "获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/orgdatas/fetchdefault")
    public ResponseEntity<List<OrgDataDTO>> fetchDefault(OrgDataSearchContext context) {
        Page<OrgData> domains = service.searchDefault(context) ;
        List<OrgDataDTO> list = mapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}
	

	@ApiOperation(value = "查询DEFAULT", tags = {"组织数据" } ,notes = "查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/orgdatas/searchdefault")
    public ResponseEntity<Page<OrgDataDTO>> searchDefault(@RequestBody OrgDataSearchContext context) {
        Page<OrgData> domains = service.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(mapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}   
        
    @ApiOperation(value = "获取PORGDATA", tags = {"组织数据" } ,notes = "获取PORGDATA")
    @RequestMapping(method= RequestMethod.GET , value="/orgdatas/fetchporgdata")
    public ResponseEntity<List<OrgDataDTO>> fetchPORGDATA(OrgDataSearchContext context) {
        Page<OrgData> domains = service.searchPORGDATA(context) ;
        List<OrgDataDTO> list = mapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}
	

	@ApiOperation(value = "查询PORGDATA", tags = {"组织数据" } ,notes = "查询PORGDATA")
    @RequestMapping(method= RequestMethod.POST , value="/orgdatas/searchporgdata")
    public ResponseEntity<Page<OrgDataDTO>> searchPORGDATA(@RequestBody OrgDataSearchContext context) {
        Page<OrgData> domains = service.searchPORGDATA(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(mapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}   
	



}
