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
import cn.ibizlab.sample.core.sample.domain.LogicValidData2;
import cn.ibizlab.sample.core.sample.service.ILogicValidData2Service;
import cn.ibizlab.sample.core.sample.filter.LogicValidData2SearchContext;
import cn.ibizlab.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"示例数据（启用逻辑删除）（主键数值）" })
@RestController("sampleapi-logicvaliddata2")
@RequestMapping("")
public class LogicValidData2Resource {

    @Autowired
    public ILogicValidData2Service service;

    @Autowired
    @Lazy
    public LogicValidData2Mapping mapping;

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-LogicValidData2-Create-all')")
    @ApiOperation(value = "新建示例数据（启用逻辑删除）（主键数值）", tags = {"示例数据（启用逻辑删除）（主键数值）" },  notes = "新建示例数据（启用逻辑删除）（主键数值）")
	@RequestMapping(method = RequestMethod.POST, value = "/logicvaliddata2s")
    public ResponseEntity<LogicValidData2DTO> create(@Validated @RequestBody LogicValidData2DTO dto) {
        LogicValidData2 domain = mapping.toDomain(dto);
		service.create(domain);
		return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-LogicValidData2-Create-all')")
    @ApiOperation(value = "批量新建示例数据（启用逻辑删除）（主键数值）", tags = {"示例数据（启用逻辑删除）（主键数值）" },  notes = "批量新建示例数据（启用逻辑删除）（主键数值）")
	@RequestMapping(method = RequestMethod.POST, value = "/logicvaliddata2s/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<LogicValidData2DTO> dtos) {
        service.createBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-LogicValidData2-Get-all')")
    @ApiOperation(value = "获取示例数据（启用逻辑删除）（主键数值）", tags = {"示例数据（启用逻辑删除）（主键数值）" },  notes = "获取示例数据（启用逻辑删除）（主键数值）")
	@RequestMapping(method = RequestMethod.GET, value = "/logicvaliddata2s/{id}")
    public ResponseEntity<LogicValidData2DTO> get(@PathVariable("id") Long id) {
        LogicValidData2 domain = service.get(id);
        LogicValidData2DTO dto = mapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-LogicValidData2-Remove-all')")
    @ApiOperation(value = "删除示例数据（启用逻辑删除）（主键数值）", tags = {"示例数据（启用逻辑删除）（主键数值）" },  notes = "删除示例数据（启用逻辑删除）（主键数值）")
	@RequestMapping(method = RequestMethod.DELETE, value = "/logicvaliddata2s/{id}")
    public ResponseEntity<Boolean> remove(@PathVariable("id") Long id) {
         return ResponseEntity.status(HttpStatus.OK).body(service.remove(id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-LogicValidData2-Remove-all')")
    @ApiOperation(value = "批量删除示例数据（启用逻辑删除）（主键数值）", tags = {"示例数据（启用逻辑删除）（主键数值）" },  notes = "批量删除示例数据（启用逻辑删除）（主键数值）")
	@RequestMapping(method = RequestMethod.DELETE, value = "/logicvaliddata2s/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<Long> ids) {
        service.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @VersionCheck(entity = "logicvaliddata2" , versionfield = "updateDate")    
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-LogicValidData2-Update-all')")
    @ApiOperation(value = "更新示例数据（启用逻辑删除）（主键数值）", tags = {"示例数据（启用逻辑删除）（主键数值）" },  notes = "更新示例数据（启用逻辑删除）（主键数值）")
	@RequestMapping(method = RequestMethod.PUT, value = "/logicvaliddata2s/{id}")
    public ResponseEntity<LogicValidData2DTO> update(@PathVariable("id") Long id, @RequestBody LogicValidData2DTO dto) {
		LogicValidData2 domain  = mapping.toDomain(dto);
        domain.setLogicValidData2Id(id);
		service.update(domain);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-LogicValidData2-Update-all')")
    @ApiOperation(value = "批量更新示例数据（启用逻辑删除）（主键数值）", tags = {"示例数据（启用逻辑删除）（主键数值）" },  notes = "批量更新示例数据（启用逻辑删除）（主键数值）")
	@RequestMapping(method = RequestMethod.PUT, value = "/logicvaliddata2s/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<LogicValidData2DTO> dtos) {
        service.updateBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "检查示例数据（启用逻辑删除）（主键数值）", tags = {"示例数据（启用逻辑删除）（主键数值）" },  notes = "检查示例数据（启用逻辑删除）（主键数值）")
	@RequestMapping(method = RequestMethod.POST, value = "/logicvaliddata2s/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody LogicValidData2DTO dto) {
        return  ResponseEntity.status(HttpStatus.OK).body(service.checkKey(mapping.toDomain(dto)));
    }

    @ApiOperation(value = "获取示例数据（启用逻辑删除）（主键数值）草稿", tags = {"示例数据（启用逻辑删除）（主键数值）" },  notes = "获取示例数据（启用逻辑删除）（主键数值）草稿")
	@RequestMapping(method = RequestMethod.GET, value = "/logicvaliddata2s/getdraft")
    public ResponseEntity<LogicValidData2DTO> getDraft(LogicValidData2DTO dto) {
        LogicValidData2 domain = mapping.toDomain(dto);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(service.getDraft(domain)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-LogicValidData2-Save-all')")
    @ApiOperation(value = "保存示例数据（启用逻辑删除）（主键数值）", tags = {"示例数据（启用逻辑删除）（主键数值）" },  notes = "保存示例数据（启用逻辑删除）（主键数值）")
	@RequestMapping(method = RequestMethod.POST, value = "/logicvaliddata2s/save")
    public ResponseEntity<LogicValidData2DTO> save(@RequestBody LogicValidData2DTO dto) {
        LogicValidData2 domain = mapping.toDomain(dto);
        service.save(domain);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-LogicValidData2-Save-all')")
    @ApiOperation(value = "批量保存示例数据（启用逻辑删除）（主键数值）", tags = {"示例数据（启用逻辑删除）（主键数值）" },  notes = "批量保存示例数据（启用逻辑删除）（主键数值）")
	@RequestMapping(method = RequestMethod.POST, value = "/logicvaliddata2s/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<LogicValidData2DTO> dtos) {
        service.saveBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

        
    @ApiOperation(value = "获取DEFAULT", tags = {"示例数据（启用逻辑删除）（主键数值）" } ,notes = "获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/logicvaliddata2s/fetchdefault")
    public ResponseEntity<List<LogicValidData2DTO>> fetchDefault(LogicValidData2SearchContext context) {
        Page<LogicValidData2> domains = service.searchDefault(context) ;
        List<LogicValidData2DTO> list = mapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}
	

	@ApiOperation(value = "查询DEFAULT", tags = {"示例数据（启用逻辑删除）（主键数值）" } ,notes = "查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/logicvaliddata2s/searchdefault")
    public ResponseEntity<Page<LogicValidData2DTO>> searchDefault(@RequestBody LogicValidData2SearchContext context) {
        Page<LogicValidData2> domains = service.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(mapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}   
	



}
