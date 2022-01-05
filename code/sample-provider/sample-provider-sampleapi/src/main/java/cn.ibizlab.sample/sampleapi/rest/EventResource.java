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
import cn.ibizlab.sample.core.sample.domain.Event;
import cn.ibizlab.sample.core.sample.service.IEventService;
import cn.ibizlab.sample.core.sample.filter.EventSearchContext;
import cn.ibizlab.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"事件" })
@RestController("sampleapi-event")
@RequestMapping("")
public class EventResource {

    @Autowired
    public IEventService service;

    @Autowired
    @Lazy
    public EventMapping mapping;

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Event-Create-all')")
    @ApiOperation(value = "新建事件", tags = {"事件" },  notes = "新建事件")
	@RequestMapping(method = RequestMethod.POST, value = "/events")
    public ResponseEntity<EventDTO> create(@Validated @RequestBody EventDTO dto) {
        Event domain = mapping.toDomain(dto);
		service.create(domain);
		return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Event-Create-all')")
    @ApiOperation(value = "批量新建事件", tags = {"事件" },  notes = "批量新建事件")
	@RequestMapping(method = RequestMethod.POST, value = "/events/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<EventDTO> dtos) {
        service.createBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Event-Get-all')")
    @ApiOperation(value = "获取事件", tags = {"事件" },  notes = "获取事件")
	@RequestMapping(method = RequestMethod.GET, value = "/events/{id}")
    public ResponseEntity<EventDTO> get(@PathVariable("id") String id) {
        Event domain = service.get(id);
        EventDTO dto = mapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Event-Remove-all')")
    @ApiOperation(value = "删除事件", tags = {"事件" },  notes = "删除事件")
	@RequestMapping(method = RequestMethod.DELETE, value = "/events/{id}")
    public ResponseEntity<Boolean> remove(@PathVariable("id") String id) {
         return ResponseEntity.status(HttpStatus.OK).body(service.remove(id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Event-Remove-all')")
    @ApiOperation(value = "批量删除事件", tags = {"事件" },  notes = "批量删除事件")
	@RequestMapping(method = RequestMethod.DELETE, value = "/events/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<String> ids) {
        service.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @VersionCheck(entity = "event" , versionfield = "updateDate")    
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Event-Update-all')")
    @ApiOperation(value = "更新事件", tags = {"事件" },  notes = "更新事件")
	@RequestMapping(method = RequestMethod.PUT, value = "/events/{id}")
    public ResponseEntity<EventDTO> update(@PathVariable("id") String id, @RequestBody EventDTO dto) {
		Event domain  = mapping.toDomain(dto);
        domain.setEventId(id);
		service.update(domain);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Event-Update-all')")
    @ApiOperation(value = "批量更新事件", tags = {"事件" },  notes = "批量更新事件")
	@RequestMapping(method = RequestMethod.PUT, value = "/events/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<EventDTO> dtos) {
        service.updateBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "检查事件", tags = {"事件" },  notes = "检查事件")
	@RequestMapping(method = RequestMethod.POST, value = "/events/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody EventDTO dto) {
        return  ResponseEntity.status(HttpStatus.OK).body(service.checkKey(mapping.toDomain(dto)));
    }

    @ApiOperation(value = "获取事件草稿", tags = {"事件" },  notes = "获取事件草稿")
	@RequestMapping(method = RequestMethod.GET, value = "/events/getdraft")
    public ResponseEntity<EventDTO> getDraft(EventDTO dto) {
        Event domain = mapping.toDomain(dto);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(service.getDraft(domain)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Event-Save-all')")
    @ApiOperation(value = "保存事件", tags = {"事件" },  notes = "保存事件")
	@RequestMapping(method = RequestMethod.POST, value = "/events/save")
    public ResponseEntity<EventDTO> save(@RequestBody EventDTO dto) {
        Event domain = mapping.toDomain(dto);
        service.save(domain);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Event-Save-all')")
    @ApiOperation(value = "批量保存事件", tags = {"事件" },  notes = "批量保存事件")
	@RequestMapping(method = RequestMethod.POST, value = "/events/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<EventDTO> dtos) {
        service.saveBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

        
    @ApiOperation(value = "获取DEFAULT", tags = {"事件" } ,notes = "获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/events/fetchdefault")
    public ResponseEntity<List<EventDTO>> fetchDefault(EventSearchContext context) {
        Page<Event> domains = service.searchDefault(context) ;
        List<EventDTO> list = mapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}
	

	@ApiOperation(value = "查询DEFAULT", tags = {"事件" } ,notes = "查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/events/searchdefault")
    public ResponseEntity<Page<EventDTO>> searchDefault(@RequestBody EventSearchContext context) {
        Page<Event> domains = service.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(mapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}   
	



}
