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
import cn.ibizlab.sample.core.sample.domain.KanbanData;
import cn.ibizlab.sample.core.sample.service.IKanbanDataService;
import cn.ibizlab.sample.core.sample.filter.KanbanDataSearchContext;
import cn.ibizlab.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"看板数据" })
@RestController("sampleapi-kanbandata")
@RequestMapping("")
public class KanbanDataResource {

    @Autowired
    public IKanbanDataService service;

    @Autowired
    @Lazy
    public KanbanDataMapping mapping;

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-KanbanData-Create-all')")
    @ApiOperation(value = "新建看板数据", tags = {"看板数据" },  notes = "新建看板数据")
	@RequestMapping(method = RequestMethod.POST, value = "/kanbandatas")
    public ResponseEntity<KanbanDataDTO> create(@Validated @RequestBody KanbanDataDTO dto) {
        KanbanData domain = mapping.toDomain(dto);
		service.create(domain);
		return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-KanbanData-Create-all')")
    @ApiOperation(value = "批量新建看板数据", tags = {"看板数据" },  notes = "批量新建看板数据")
	@RequestMapping(method = RequestMethod.POST, value = "/kanbandatas/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<KanbanDataDTO> dtos) {
        service.createBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-KanbanData-Get-all')")
    @ApiOperation(value = "获取看板数据", tags = {"看板数据" },  notes = "获取看板数据")
	@RequestMapping(method = RequestMethod.GET, value = "/kanbandatas/{id}")
    public ResponseEntity<KanbanDataDTO> get(@PathVariable("id") String id) {
        KanbanData domain = service.get(id);
        KanbanDataDTO dto = mapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-KanbanData-Remove-all')")
    @ApiOperation(value = "删除看板数据", tags = {"看板数据" },  notes = "删除看板数据")
	@RequestMapping(method = RequestMethod.DELETE, value = "/kanbandatas/{id}")
    public ResponseEntity<Boolean> remove(@PathVariable("id") String id) {
         return ResponseEntity.status(HttpStatus.OK).body(service.remove(id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-KanbanData-Remove-all')")
    @ApiOperation(value = "批量删除看板数据", tags = {"看板数据" },  notes = "批量删除看板数据")
	@RequestMapping(method = RequestMethod.DELETE, value = "/kanbandatas/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<String> ids) {
        service.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @VersionCheck(entity = "kanbandata" , versionfield = "updateDate")    
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-KanbanData-Update-all')")
    @ApiOperation(value = "更新看板数据", tags = {"看板数据" },  notes = "更新看板数据")
	@RequestMapping(method = RequestMethod.PUT, value = "/kanbandatas/{id}")
    public ResponseEntity<KanbanDataDTO> update(@PathVariable("id") String id, @RequestBody KanbanDataDTO dto) {
		KanbanData domain  = mapping.toDomain(dto);
        domain.setKanbanDataId(id);
		service.update(domain);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-KanbanData-Update-all')")
    @ApiOperation(value = "批量更新看板数据", tags = {"看板数据" },  notes = "批量更新看板数据")
	@RequestMapping(method = RequestMethod.PUT, value = "/kanbandatas/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<KanbanDataDTO> dtos) {
        service.updateBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "检查看板数据", tags = {"看板数据" },  notes = "检查看板数据")
	@RequestMapping(method = RequestMethod.POST, value = "/kanbandatas/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody KanbanDataDTO dto) {
        return  ResponseEntity.status(HttpStatus.OK).body(service.checkKey(mapping.toDomain(dto)));
    }

    @ApiOperation(value = "获取看板数据草稿", tags = {"看板数据" },  notes = "获取看板数据草稿")
	@RequestMapping(method = RequestMethod.GET, value = "/kanbandatas/getdraft")
    public ResponseEntity<KanbanDataDTO> getDraft(KanbanDataDTO dto) {
        KanbanData domain = mapping.toDomain(dto);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(service.getDraft(domain)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-KanbanData-Save-all')")
    @ApiOperation(value = "保存看板数据", tags = {"看板数据" },  notes = "保存看板数据")
	@RequestMapping(method = RequestMethod.POST, value = "/kanbandatas/save")
    public ResponseEntity<KanbanDataDTO> save(@RequestBody KanbanDataDTO dto) {
        KanbanData domain = mapping.toDomain(dto);
        service.save(domain);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-KanbanData-Save-all')")
    @ApiOperation(value = "批量保存看板数据", tags = {"看板数据" },  notes = "批量保存看板数据")
	@RequestMapping(method = RequestMethod.POST, value = "/kanbandatas/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<KanbanDataDTO> dtos) {
        service.saveBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

        
    @ApiOperation(value = "获取DEFAULT", tags = {"看板数据" } ,notes = "获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/kanbandatas/fetchdefault")
    public ResponseEntity<List<KanbanDataDTO>> fetchDefault(KanbanDataSearchContext context) {
        Page<KanbanData> domains = service.searchDefault(context) ;
        List<KanbanDataDTO> list = mapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}
	

	@ApiOperation(value = "查询DEFAULT", tags = {"看板数据" } ,notes = "查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/kanbandatas/searchdefault")
    public ResponseEntity<Page<KanbanDataDTO>> searchDefault(@RequestBody KanbanDataSearchContext context) {
        Page<KanbanData> domains = service.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(mapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}   
	



}
