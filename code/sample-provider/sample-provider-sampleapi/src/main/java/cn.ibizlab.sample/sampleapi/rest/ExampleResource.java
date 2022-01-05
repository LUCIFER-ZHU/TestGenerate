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
import cn.ibizlab.sample.core.sample.domain.Example;
import cn.ibizlab.sample.core.sample.service.IExampleService;
import cn.ibizlab.sample.core.sample.filter.ExampleSearchContext;
import cn.ibizlab.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"示例" })
@RestController("sampleapi-example")
@RequestMapping("")
public class ExampleResource {

    @Autowired
    public IExampleService service;

    @Autowired
    @Lazy
    public ExampleMapping mapping;

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Example-Create-all')")
    @ApiOperation(value = "新建示例", tags = {"示例" },  notes = "新建示例")
	@RequestMapping(method = RequestMethod.POST, value = "/examples")
    public ResponseEntity<ExampleDTO> create(@Validated @RequestBody ExampleDTO dto) {
        Example domain = mapping.toDomain(dto);
		service.create(domain);
		return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Example-Create-all')")
    @ApiOperation(value = "批量新建示例", tags = {"示例" },  notes = "批量新建示例")
	@RequestMapping(method = RequestMethod.POST, value = "/examples/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<ExampleDTO> dtos) {
        service.createBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Example-Get-all')")
    @ApiOperation(value = "获取示例", tags = {"示例" },  notes = "获取示例")
	@RequestMapping(method = RequestMethod.GET, value = "/examples/{id}")
    public ResponseEntity<ExampleDTO> get(@PathVariable("id") String id) {
        Example domain = service.get(id);
        ExampleDTO dto = mapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Example-Remove-all')")
    @ApiOperation(value = "删除示例", tags = {"示例" },  notes = "删除示例")
	@RequestMapping(method = RequestMethod.DELETE, value = "/examples/{id}")
    public ResponseEntity<Boolean> remove(@PathVariable("id") String id) {
         return ResponseEntity.status(HttpStatus.OK).body(service.remove(id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Example-Remove-all')")
    @ApiOperation(value = "批量删除示例", tags = {"示例" },  notes = "批量删除示例")
	@RequestMapping(method = RequestMethod.DELETE, value = "/examples/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<String> ids) {
        service.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @VersionCheck(entity = "example" , versionfield = "updateDate")    
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Example-Update-all')")
    @ApiOperation(value = "更新示例", tags = {"示例" },  notes = "更新示例")
	@RequestMapping(method = RequestMethod.PUT, value = "/examples/{id}")
    public ResponseEntity<ExampleDTO> update(@PathVariable("id") String id, @RequestBody ExampleDTO dto) {
		Example domain  = mapping.toDomain(dto);
        domain.setExampleId(id);
		service.update(domain);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Example-Update-all')")
    @ApiOperation(value = "批量更新示例", tags = {"示例" },  notes = "批量更新示例")
	@RequestMapping(method = RequestMethod.PUT, value = "/examples/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<ExampleDTO> dtos) {
        service.updateBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "检查示例", tags = {"示例" },  notes = "检查示例")
	@RequestMapping(method = RequestMethod.POST, value = "/examples/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody ExampleDTO dto) {
        return  ResponseEntity.status(HttpStatus.OK).body(service.checkKey(mapping.toDomain(dto)));
    }

    @ApiOperation(value = "获取示例草稿", tags = {"示例" },  notes = "获取示例草稿")
	@RequestMapping(method = RequestMethod.GET, value = "/examples/getdraft")
    public ResponseEntity<ExampleDTO> getDraft(ExampleDTO dto) {
        Example domain = mapping.toDomain(dto);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(service.getDraft(domain)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Example-Save-all')")
    @ApiOperation(value = "保存示例", tags = {"示例" },  notes = "保存示例")
	@RequestMapping(method = RequestMethod.POST, value = "/examples/save")
    public ResponseEntity<ExampleDTO> save(@RequestBody ExampleDTO dto) {
        Example domain = mapping.toDomain(dto);
        service.save(domain);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Example-Save-all')")
    @ApiOperation(value = "批量保存示例", tags = {"示例" },  notes = "批量保存示例")
	@RequestMapping(method = RequestMethod.POST, value = "/examples/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<ExampleDTO> dtos) {
        service.saveBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

        
    @ApiOperation(value = "获取DEFAULT", tags = {"示例" } ,notes = "获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/examples/fetchdefault")
    public ResponseEntity<List<ExampleDTO>> fetchDefault(ExampleSearchContext context) {
        Page<Example> domains = service.searchDefault(context) ;
        List<ExampleDTO> list = mapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}
	

	@ApiOperation(value = "查询DEFAULT", tags = {"示例" } ,notes = "查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/examples/searchdefault")
    public ResponseEntity<Page<ExampleDTO>> searchDefault(@RequestBody ExampleSearchContext context) {
        Page<Example> domains = service.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(mapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}   
        
    @ApiOperation(value = "获取Empty", tags = {"示例" } ,notes = "获取Empty")
    @RequestMapping(method= RequestMethod.GET , value="/examples/fetchempty")
    public ResponseEntity<List<ExampleDTO>> fetchEmpty(ExampleSearchContext context) {
        Page<Example> domains = service.searchEmpty(context) ;
        List<ExampleDTO> list = mapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}
	

	@ApiOperation(value = "查询Empty", tags = {"示例" } ,notes = "查询Empty")
    @RequestMapping(method= RequestMethod.POST , value="/examples/searchempty")
    public ResponseEntity<Page<ExampleDTO>> searchEmpty(@RequestBody ExampleSearchContext context) {
        Page<Example> domains = service.searchEmpty(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(mapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}   
	



}
