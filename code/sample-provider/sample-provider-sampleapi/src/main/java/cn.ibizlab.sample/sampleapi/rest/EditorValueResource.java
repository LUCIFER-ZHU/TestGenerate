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
import cn.ibizlab.sample.core.sample.domain.EditorValue;
import cn.ibizlab.sample.core.sample.service.IEditorValueService;
import cn.ibizlab.sample.core.sample.filter.EditorValueSearchContext;
import cn.ibizlab.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"编辑器值" })
@RestController("sampleapi-editorvalue")
@RequestMapping("")
public class EditorValueResource {

    @Autowired
    public IEditorValueService service;

    @Autowired
    @Lazy
    public EditorValueMapping mapping;

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-EditorValue-Create-all')")
    @ApiOperation(value = "新建编辑器值", tags = {"编辑器值" },  notes = "新建编辑器值")
	@RequestMapping(method = RequestMethod.POST, value = "/editorvalues")
    public ResponseEntity<EditorValueDTO> create(@Validated @RequestBody EditorValueDTO dto) {
        EditorValue domain = mapping.toDomain(dto);
		service.create(domain);
		return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-EditorValue-Create-all')")
    @ApiOperation(value = "批量新建编辑器值", tags = {"编辑器值" },  notes = "批量新建编辑器值")
	@RequestMapping(method = RequestMethod.POST, value = "/editorvalues/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<EditorValueDTO> dtos) {
        service.createBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-EditorValue-Get-all')")
    @ApiOperation(value = "获取编辑器值", tags = {"编辑器值" },  notes = "获取编辑器值")
	@RequestMapping(method = RequestMethod.GET, value = "/editorvalues/{id}")
    public ResponseEntity<EditorValueDTO> get(@PathVariable("id") String id) {
        EditorValue domain = service.get(id);
        EditorValueDTO dto = mapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-EditorValue-Remove-all')")
    @ApiOperation(value = "删除编辑器值", tags = {"编辑器值" },  notes = "删除编辑器值")
	@RequestMapping(method = RequestMethod.DELETE, value = "/editorvalues/{id}")
    public ResponseEntity<Boolean> remove(@PathVariable("id") String id) {
         return ResponseEntity.status(HttpStatus.OK).body(service.remove(id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-EditorValue-Remove-all')")
    @ApiOperation(value = "批量删除编辑器值", tags = {"编辑器值" },  notes = "批量删除编辑器值")
	@RequestMapping(method = RequestMethod.DELETE, value = "/editorvalues/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<String> ids) {
        service.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @VersionCheck(entity = "editorvalue" , versionfield = "updateDate")    
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-EditorValue-Update-all')")
    @ApiOperation(value = "更新编辑器值", tags = {"编辑器值" },  notes = "更新编辑器值")
	@RequestMapping(method = RequestMethod.PUT, value = "/editorvalues/{id}")
    public ResponseEntity<EditorValueDTO> update(@PathVariable("id") String id, @RequestBody EditorValueDTO dto) {
		EditorValue domain  = mapping.toDomain(dto);
        domain.setEditorValueId(id);
		service.update(domain);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-EditorValue-Update-all')")
    @ApiOperation(value = "批量更新编辑器值", tags = {"编辑器值" },  notes = "批量更新编辑器值")
	@RequestMapping(method = RequestMethod.PUT, value = "/editorvalues/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<EditorValueDTO> dtos) {
        service.updateBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "检查编辑器值", tags = {"编辑器值" },  notes = "检查编辑器值")
	@RequestMapping(method = RequestMethod.POST, value = "/editorvalues/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody EditorValueDTO dto) {
        return  ResponseEntity.status(HttpStatus.OK).body(service.checkKey(mapping.toDomain(dto)));
    }

    @ApiOperation(value = "获取编辑器值草稿", tags = {"编辑器值" },  notes = "获取编辑器值草稿")
	@RequestMapping(method = RequestMethod.GET, value = "/editorvalues/getdraft")
    public ResponseEntity<EditorValueDTO> getDraft(EditorValueDTO dto) {
        EditorValue domain = mapping.toDomain(dto);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(service.getDraft(domain)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-EditorValue-Save-all')")
    @ApiOperation(value = "保存编辑器值", tags = {"编辑器值" },  notes = "保存编辑器值")
	@RequestMapping(method = RequestMethod.POST, value = "/editorvalues/save")
    public ResponseEntity<EditorValueDTO> save(@RequestBody EditorValueDTO dto) {
        EditorValue domain = mapping.toDomain(dto);
        service.save(domain);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-EditorValue-Save-all')")
    @ApiOperation(value = "批量保存编辑器值", tags = {"编辑器值" },  notes = "批量保存编辑器值")
	@RequestMapping(method = RequestMethod.POST, value = "/editorvalues/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<EditorValueDTO> dtos) {
        service.saveBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

        
    @ApiOperation(value = "获取DEFAULT", tags = {"编辑器值" } ,notes = "获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/editorvalues/fetchdefault")
    public ResponseEntity<List<EditorValueDTO>> fetchDefault(EditorValueSearchContext context) {
        Page<EditorValue> domains = service.searchDefault(context) ;
        List<EditorValueDTO> list = mapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}
	

	@ApiOperation(value = "查询DEFAULT", tags = {"编辑器值" } ,notes = "查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/editorvalues/searchdefault")
    public ResponseEntity<Page<EditorValueDTO>> searchDefault(@RequestBody EditorValueSearchContext context) {
        Page<EditorValue> domains = service.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(mapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}   
	



}
