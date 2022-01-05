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
import cn.ibizlab.sample.core.sample.domain.District;
import cn.ibizlab.sample.core.sample.service.IDistrictService;
import cn.ibizlab.sample.core.sample.filter.DistrictSearchContext;
import cn.ibizlab.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"区" })
@RestController("sampleapi-district")
@RequestMapping("")
public class DistrictResource {

    @Autowired
    public IDistrictService service;

    @Autowired
    @Lazy
    public DistrictMapping mapping;

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-District-Create-all')")
    @ApiOperation(value = "新建区", tags = {"区" },  notes = "新建区")
	@RequestMapping(method = RequestMethod.POST, value = "/districts")
    public ResponseEntity<DistrictDTO> create(@Validated @RequestBody DistrictDTO dto) {
        District domain = mapping.toDomain(dto);
		service.create(domain);
		return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-District-Create-all')")
    @ApiOperation(value = "批量新建区", tags = {"区" },  notes = "批量新建区")
	@RequestMapping(method = RequestMethod.POST, value = "/districts/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<DistrictDTO> dtos) {
        service.createBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-District-Get-all')")
    @ApiOperation(value = "获取区", tags = {"区" },  notes = "获取区")
	@RequestMapping(method = RequestMethod.GET, value = "/districts/{id}")
    public ResponseEntity<DistrictDTO> get(@PathVariable("id") String id) {
        District domain = service.get(id);
        DistrictDTO dto = mapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-District-Remove-all')")
    @ApiOperation(value = "删除区", tags = {"区" },  notes = "删除区")
	@RequestMapping(method = RequestMethod.DELETE, value = "/districts/{id}")
    public ResponseEntity<Boolean> remove(@PathVariable("id") String id) {
         return ResponseEntity.status(HttpStatus.OK).body(service.remove(id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-District-Remove-all')")
    @ApiOperation(value = "批量删除区", tags = {"区" },  notes = "批量删除区")
	@RequestMapping(method = RequestMethod.DELETE, value = "/districts/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<String> ids) {
        service.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @VersionCheck(entity = "district" , versionfield = "updateDate")    
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-District-Update-all')")
    @ApiOperation(value = "更新区", tags = {"区" },  notes = "更新区")
	@RequestMapping(method = RequestMethod.PUT, value = "/districts/{id}")
    public ResponseEntity<DistrictDTO> update(@PathVariable("id") String id, @RequestBody DistrictDTO dto) {
		District domain  = mapping.toDomain(dto);
        domain.setDistrictId(id);
		service.update(domain);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-District-Update-all')")
    @ApiOperation(value = "批量更新区", tags = {"区" },  notes = "批量更新区")
	@RequestMapping(method = RequestMethod.PUT, value = "/districts/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<DistrictDTO> dtos) {
        service.updateBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "检查区", tags = {"区" },  notes = "检查区")
	@RequestMapping(method = RequestMethod.POST, value = "/districts/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody DistrictDTO dto) {
        return  ResponseEntity.status(HttpStatus.OK).body(service.checkKey(mapping.toDomain(dto)));
    }

    @ApiOperation(value = "获取区草稿", tags = {"区" },  notes = "获取区草稿")
	@RequestMapping(method = RequestMethod.GET, value = "/districts/getdraft")
    public ResponseEntity<DistrictDTO> getDraft(DistrictDTO dto) {
        District domain = mapping.toDomain(dto);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(service.getDraft(domain)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-District-Save-all')")
    @ApiOperation(value = "保存区", tags = {"区" },  notes = "保存区")
	@RequestMapping(method = RequestMethod.POST, value = "/districts/save")
    public ResponseEntity<DistrictDTO> save(@RequestBody DistrictDTO dto) {
        District domain = mapping.toDomain(dto);
        service.save(domain);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-District-Save-all')")
    @ApiOperation(value = "批量保存区", tags = {"区" },  notes = "批量保存区")
	@RequestMapping(method = RequestMethod.POST, value = "/districts/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<DistrictDTO> dtos) {
        service.saveBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

        
    @ApiOperation(value = "获取DEFAULT", tags = {"区" } ,notes = "获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/districts/fetchdefault")
    public ResponseEntity<List<DistrictDTO>> fetchDefault(DistrictSearchContext context) {
        Page<District> domains = service.searchDefault(context) ;
        List<DistrictDTO> list = mapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}
	

	@ApiOperation(value = "查询DEFAULT", tags = {"区" } ,notes = "查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/districts/searchdefault")
    public ResponseEntity<Page<DistrictDTO>> searchDefault(@RequestBody DistrictSearchContext context) {
        Page<District> domains = service.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(mapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}   
	



}
