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
import cn.ibizlab.sample.core.sample.domain.LogicValidData;
import cn.ibizlab.sample.core.sample.service.ILogicValidDataService;
import cn.ibizlab.sample.core.sample.filter.LogicValidDataSearchContext;
import cn.ibizlab.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"示例数据（启用逻辑删除）" })
@RestController("sampleapi-logicvaliddata")
@RequestMapping("")
public class LogicValidDataResource {

    @Autowired
    public ILogicValidDataService service;

    @Autowired
    @Lazy
    public LogicValidDataMapping mapping;

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-LogicValidData-Create-all')")
    @ApiOperation(value = "新建示例数据（启用逻辑删除）", tags = {"示例数据（启用逻辑删除）" },  notes = "新建示例数据（启用逻辑删除）")
	@RequestMapping(method = RequestMethod.POST, value = "/logicvaliddatas")
    public ResponseEntity<LogicValidDataDTO> create(@Validated @RequestBody LogicValidDataDTO dto) {
        LogicValidData domain = mapping.toDomain(dto);
		service.create(domain);
		return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-LogicValidData-Create-all')")
    @ApiOperation(value = "批量新建示例数据（启用逻辑删除）", tags = {"示例数据（启用逻辑删除）" },  notes = "批量新建示例数据（启用逻辑删除）")
	@RequestMapping(method = RequestMethod.POST, value = "/logicvaliddatas/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<LogicValidDataDTO> dtos) {
        service.createBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-LogicValidData-Get-all')")
    @ApiOperation(value = "获取示例数据（启用逻辑删除）", tags = {"示例数据（启用逻辑删除）" },  notes = "获取示例数据（启用逻辑删除）")
	@RequestMapping(method = RequestMethod.GET, value = "/logicvaliddatas/{id}")
    public ResponseEntity<LogicValidDataDTO> get(@PathVariable("id") String id) {
        LogicValidData domain = service.get(id);
        LogicValidDataDTO dto = mapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-LogicValidData-Remove-all')")
    @ApiOperation(value = "删除示例数据（启用逻辑删除）", tags = {"示例数据（启用逻辑删除）" },  notes = "删除示例数据（启用逻辑删除）")
	@RequestMapping(method = RequestMethod.DELETE, value = "/logicvaliddatas/{id}")
    public ResponseEntity<Boolean> remove(@PathVariable("id") String id) {
         return ResponseEntity.status(HttpStatus.OK).body(service.remove(id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-LogicValidData-Remove-all')")
    @ApiOperation(value = "批量删除示例数据（启用逻辑删除）", tags = {"示例数据（启用逻辑删除）" },  notes = "批量删除示例数据（启用逻辑删除）")
	@RequestMapping(method = RequestMethod.DELETE, value = "/logicvaliddatas/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<String> ids) {
        service.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @VersionCheck(entity = "logicvaliddata" , versionfield = "updateDate")    
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-LogicValidData-Update-all')")
    @ApiOperation(value = "更新示例数据（启用逻辑删除）", tags = {"示例数据（启用逻辑删除）" },  notes = "更新示例数据（启用逻辑删除）")
	@RequestMapping(method = RequestMethod.PUT, value = "/logicvaliddatas/{id}")
    public ResponseEntity<LogicValidDataDTO> update(@PathVariable("id") String id, @RequestBody LogicValidDataDTO dto) {
		LogicValidData domain  = mapping.toDomain(dto);
        domain.setLogicValidDataId(id);
		service.update(domain);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-LogicValidData-Update-all')")
    @ApiOperation(value = "批量更新示例数据（启用逻辑删除）", tags = {"示例数据（启用逻辑删除）" },  notes = "批量更新示例数据（启用逻辑删除）")
	@RequestMapping(method = RequestMethod.PUT, value = "/logicvaliddatas/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<LogicValidDataDTO> dtos) {
        service.updateBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "检查示例数据（启用逻辑删除）", tags = {"示例数据（启用逻辑删除）" },  notes = "检查示例数据（启用逻辑删除）")
	@RequestMapping(method = RequestMethod.POST, value = "/logicvaliddatas/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody LogicValidDataDTO dto) {
        return  ResponseEntity.status(HttpStatus.OK).body(service.checkKey(mapping.toDomain(dto)));
    }

    @ApiOperation(value = "获取示例数据（启用逻辑删除）草稿", tags = {"示例数据（启用逻辑删除）" },  notes = "获取示例数据（启用逻辑删除）草稿")
	@RequestMapping(method = RequestMethod.GET, value = "/logicvaliddatas/getdraft")
    public ResponseEntity<LogicValidDataDTO> getDraft(LogicValidDataDTO dto) {
        LogicValidData domain = mapping.toDomain(dto);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(service.getDraft(domain)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-LogicValidData-Save-all')")
    @ApiOperation(value = "保存示例数据（启用逻辑删除）", tags = {"示例数据（启用逻辑删除）" },  notes = "保存示例数据（启用逻辑删除）")
	@RequestMapping(method = RequestMethod.POST, value = "/logicvaliddatas/save")
    public ResponseEntity<LogicValidDataDTO> save(@RequestBody LogicValidDataDTO dto) {
        LogicValidData domain = mapping.toDomain(dto);
        service.save(domain);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-LogicValidData-Save-all')")
    @ApiOperation(value = "批量保存示例数据（启用逻辑删除）", tags = {"示例数据（启用逻辑删除）" },  notes = "批量保存示例数据（启用逻辑删除）")
	@RequestMapping(method = RequestMethod.POST, value = "/logicvaliddatas/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<LogicValidDataDTO> dtos) {
        service.saveBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

        
    @ApiOperation(value = "获取DEFAULT", tags = {"示例数据（启用逻辑删除）" } ,notes = "获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/logicvaliddatas/fetchdefault")
    public ResponseEntity<List<LogicValidDataDTO>> fetchDefault(LogicValidDataSearchContext context) {
        Page<LogicValidData> domains = service.searchDefault(context) ;
        List<LogicValidDataDTO> list = mapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}
	

	@ApiOperation(value = "查询DEFAULT", tags = {"示例数据（启用逻辑删除）" } ,notes = "查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/logicvaliddatas/searchdefault")
    public ResponseEntity<Page<LogicValidDataDTO>> searchDefault(@RequestBody LogicValidDataSearchContext context) {
        Page<LogicValidData> domains = service.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(mapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}   
	



}
