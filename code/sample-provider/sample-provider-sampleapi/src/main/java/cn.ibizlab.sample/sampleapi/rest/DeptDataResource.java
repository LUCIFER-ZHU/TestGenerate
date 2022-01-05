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
import cn.ibizlab.sample.core.sample.domain.DeptData;
import cn.ibizlab.sample.core.sample.service.IDeptDataService;
import cn.ibizlab.sample.core.sample.filter.DeptDataSearchContext;
import cn.ibizlab.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"部门数据" })
@RestController("sampleapi-deptdata")
@RequestMapping("")
public class DeptDataResource {

    @Autowired
    public IDeptDataService service;

    @Autowired
    @Lazy
    public DeptDataMapping mapping;

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-DeptData-Create-all')")
    @ApiOperation(value = "新建部门数据", tags = {"部门数据" },  notes = "新建部门数据")
	@RequestMapping(method = RequestMethod.POST, value = "/deptdatas")
    public ResponseEntity<DeptDataDTO> create(@Validated @RequestBody DeptDataDTO dto) {
        DeptData domain = mapping.toDomain(dto);
		service.create(domain);
		return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-DeptData-Create-all')")
    @ApiOperation(value = "批量新建部门数据", tags = {"部门数据" },  notes = "批量新建部门数据")
	@RequestMapping(method = RequestMethod.POST, value = "/deptdatas/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<DeptDataDTO> dtos) {
        service.createBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-DeptData-Get-all')")
    @ApiOperation(value = "获取部门数据", tags = {"部门数据" },  notes = "获取部门数据")
	@RequestMapping(method = RequestMethod.GET, value = "/deptdatas/{id}")
    public ResponseEntity<DeptDataDTO> get(@PathVariable("id") String id) {
        DeptData domain = service.get(id);
        DeptDataDTO dto = mapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-DeptData-Remove-all')")
    @ApiOperation(value = "删除部门数据", tags = {"部门数据" },  notes = "删除部门数据")
	@RequestMapping(method = RequestMethod.DELETE, value = "/deptdatas/{id}")
    public ResponseEntity<Boolean> remove(@PathVariable("id") String id) {
         return ResponseEntity.status(HttpStatus.OK).body(service.remove(id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-DeptData-Remove-all')")
    @ApiOperation(value = "批量删除部门数据", tags = {"部门数据" },  notes = "批量删除部门数据")
	@RequestMapping(method = RequestMethod.DELETE, value = "/deptdatas/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<String> ids) {
        service.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @VersionCheck(entity = "deptdata" , versionfield = "updateDate")    
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-DeptData-Update-all')")
    @ApiOperation(value = "更新部门数据", tags = {"部门数据" },  notes = "更新部门数据")
	@RequestMapping(method = RequestMethod.PUT, value = "/deptdatas/{id}")
    public ResponseEntity<DeptDataDTO> update(@PathVariable("id") String id, @RequestBody DeptDataDTO dto) {
		DeptData domain  = mapping.toDomain(dto);
        domain.setDeptDataId(id);
		service.update(domain);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-DeptData-Update-all')")
    @ApiOperation(value = "批量更新部门数据", tags = {"部门数据" },  notes = "批量更新部门数据")
	@RequestMapping(method = RequestMethod.PUT, value = "/deptdatas/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<DeptDataDTO> dtos) {
        service.updateBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "检查部门数据", tags = {"部门数据" },  notes = "检查部门数据")
	@RequestMapping(method = RequestMethod.POST, value = "/deptdatas/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody DeptDataDTO dto) {
        return  ResponseEntity.status(HttpStatus.OK).body(service.checkKey(mapping.toDomain(dto)));
    }

    @ApiOperation(value = "获取部门数据草稿", tags = {"部门数据" },  notes = "获取部门数据草稿")
	@RequestMapping(method = RequestMethod.GET, value = "/deptdatas/getdraft")
    public ResponseEntity<DeptDataDTO> getDraft(DeptDataDTO dto) {
        DeptData domain = mapping.toDomain(dto);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(service.getDraft(domain)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-DeptData-Save-all')")
    @ApiOperation(value = "保存部门数据", tags = {"部门数据" },  notes = "保存部门数据")
	@RequestMapping(method = RequestMethod.POST, value = "/deptdatas/save")
    public ResponseEntity<DeptDataDTO> save(@RequestBody DeptDataDTO dto) {
        DeptData domain = mapping.toDomain(dto);
        service.save(domain);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-DeptData-Save-all')")
    @ApiOperation(value = "批量保存部门数据", tags = {"部门数据" },  notes = "批量保存部门数据")
	@RequestMapping(method = RequestMethod.POST, value = "/deptdatas/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<DeptDataDTO> dtos) {
        service.saveBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

        
    @ApiOperation(value = "获取DEFAULT", tags = {"部门数据" } ,notes = "获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/deptdatas/fetchdefault")
    public ResponseEntity<List<DeptDataDTO>> fetchDefault(DeptDataSearchContext context) {
        Page<DeptData> domains = service.searchDefault(context) ;
        List<DeptDataDTO> list = mapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}
	

	@ApiOperation(value = "查询DEFAULT", tags = {"部门数据" } ,notes = "查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/deptdatas/searchdefault")
    public ResponseEntity<Page<DeptDataDTO>> searchDefault(@RequestBody DeptDataSearchContext context) {
        Page<DeptData> domains = service.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(mapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}   
	



}
