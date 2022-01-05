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
import cn.ibizlab.sample.core.sample.domain.City;
import cn.ibizlab.sample.core.sample.service.ICityService;
import cn.ibizlab.sample.core.sample.filter.CitySearchContext;
import cn.ibizlab.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"市" })
@RestController("sampleapi-city")
@RequestMapping("")
public class CityResource {

    @Autowired
    public ICityService service;

    @Autowired
    @Lazy
    public CityMapping mapping;

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-City-Create-all')")
    @ApiOperation(value = "新建市", tags = {"市" },  notes = "新建市")
	@RequestMapping(method = RequestMethod.POST, value = "/cities")
    public ResponseEntity<CityDTO> create(@Validated @RequestBody CityDTO dto) {
        City domain = mapping.toDomain(dto);
		service.create(domain);
		return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-City-Create-all')")
    @ApiOperation(value = "批量新建市", tags = {"市" },  notes = "批量新建市")
	@RequestMapping(method = RequestMethod.POST, value = "/cities/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<CityDTO> dtos) {
        service.createBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-City-Get-all')")
    @ApiOperation(value = "获取市", tags = {"市" },  notes = "获取市")
	@RequestMapping(method = RequestMethod.GET, value = "/cities/{id}")
    public ResponseEntity<CityDTO> get(@PathVariable("id") String id) {
        City domain = service.get(id);
        CityDTO dto = mapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-City-Remove-all')")
    @ApiOperation(value = "删除市", tags = {"市" },  notes = "删除市")
	@RequestMapping(method = RequestMethod.DELETE, value = "/cities/{id}")
    public ResponseEntity<Boolean> remove(@PathVariable("id") String id) {
         return ResponseEntity.status(HttpStatus.OK).body(service.remove(id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-City-Remove-all')")
    @ApiOperation(value = "批量删除市", tags = {"市" },  notes = "批量删除市")
	@RequestMapping(method = RequestMethod.DELETE, value = "/cities/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<String> ids) {
        service.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @VersionCheck(entity = "city" , versionfield = "updateDate")    
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-City-Update-all')")
    @ApiOperation(value = "更新市", tags = {"市" },  notes = "更新市")
	@RequestMapping(method = RequestMethod.PUT, value = "/cities/{id}")
    public ResponseEntity<CityDTO> update(@PathVariable("id") String id, @RequestBody CityDTO dto) {
		City domain  = mapping.toDomain(dto);
        domain.setCityId(id);
		service.update(domain);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-City-Update-all')")
    @ApiOperation(value = "批量更新市", tags = {"市" },  notes = "批量更新市")
	@RequestMapping(method = RequestMethod.PUT, value = "/cities/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<CityDTO> dtos) {
        service.updateBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "检查市", tags = {"市" },  notes = "检查市")
	@RequestMapping(method = RequestMethod.POST, value = "/cities/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody CityDTO dto) {
        return  ResponseEntity.status(HttpStatus.OK).body(service.checkKey(mapping.toDomain(dto)));
    }

    @ApiOperation(value = "获取市草稿", tags = {"市" },  notes = "获取市草稿")
	@RequestMapping(method = RequestMethod.GET, value = "/cities/getdraft")
    public ResponseEntity<CityDTO> getDraft(CityDTO dto) {
        City domain = mapping.toDomain(dto);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(service.getDraft(domain)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-City-Save-all')")
    @ApiOperation(value = "保存市", tags = {"市" },  notes = "保存市")
	@RequestMapping(method = RequestMethod.POST, value = "/cities/save")
    public ResponseEntity<CityDTO> save(@RequestBody CityDTO dto) {
        City domain = mapping.toDomain(dto);
        service.save(domain);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-City-Save-all')")
    @ApiOperation(value = "批量保存市", tags = {"市" },  notes = "批量保存市")
	@RequestMapping(method = RequestMethod.POST, value = "/cities/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<CityDTO> dtos) {
        service.saveBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

        
    @ApiOperation(value = "获取DEFAULT", tags = {"市" } ,notes = "获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/cities/fetchdefault")
    public ResponseEntity<List<CityDTO>> fetchDefault(CitySearchContext context) {
        Page<City> domains = service.searchDefault(context) ;
        List<CityDTO> list = mapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}
	

	@ApiOperation(value = "查询DEFAULT", tags = {"市" } ,notes = "查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/cities/searchdefault")
    public ResponseEntity<Page<CityDTO>> searchDefault(@RequestBody CitySearchContext context) {
        Page<City> domains = service.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(mapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}   
	



}
