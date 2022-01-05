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
import cn.ibizlab.sample.core.sample.domain.CalendarData;
import cn.ibizlab.sample.core.sample.service.ICalendarDataService;
import cn.ibizlab.sample.core.sample.filter.CalendarDataSearchContext;
import cn.ibizlab.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"日历示例数据" })
@RestController("sampleapi-calendardata")
@RequestMapping("")
public class CalendarDataResource {

    @Autowired
    public ICalendarDataService service;

    @Autowired
    @Lazy
    public CalendarDataMapping mapping;

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-CalendarData-Create-all')")
    @ApiOperation(value = "新建日历示例数据", tags = {"日历示例数据" },  notes = "新建日历示例数据")
	@RequestMapping(method = RequestMethod.POST, value = "/calendardatas")
    public ResponseEntity<CalendarDataDTO> create(@Validated @RequestBody CalendarDataDTO dto) {
        CalendarData domain = mapping.toDomain(dto);
		service.create(domain);
		return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-CalendarData-Create-all')")
    @ApiOperation(value = "批量新建日历示例数据", tags = {"日历示例数据" },  notes = "批量新建日历示例数据")
	@RequestMapping(method = RequestMethod.POST, value = "/calendardatas/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<CalendarDataDTO> dtos) {
        service.createBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-CalendarData-Get-all')")
    @ApiOperation(value = "获取日历示例数据", tags = {"日历示例数据" },  notes = "获取日历示例数据")
	@RequestMapping(method = RequestMethod.GET, value = "/calendardatas/{id}")
    public ResponseEntity<CalendarDataDTO> get(@PathVariable("id") String id) {
        CalendarData domain = service.get(id);
        CalendarDataDTO dto = mapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-CalendarData-Remove-all')")
    @ApiOperation(value = "删除日历示例数据", tags = {"日历示例数据" },  notes = "删除日历示例数据")
	@RequestMapping(method = RequestMethod.DELETE, value = "/calendardatas/{id}")
    public ResponseEntity<Boolean> remove(@PathVariable("id") String id) {
         return ResponseEntity.status(HttpStatus.OK).body(service.remove(id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-CalendarData-Remove-all')")
    @ApiOperation(value = "批量删除日历示例数据", tags = {"日历示例数据" },  notes = "批量删除日历示例数据")
	@RequestMapping(method = RequestMethod.DELETE, value = "/calendardatas/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<String> ids) {
        service.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @VersionCheck(entity = "calendardata" , versionfield = "updateDate")    
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-CalendarData-Update-all')")
    @ApiOperation(value = "更新日历示例数据", tags = {"日历示例数据" },  notes = "更新日历示例数据")
	@RequestMapping(method = RequestMethod.PUT, value = "/calendardatas/{id}")
    public ResponseEntity<CalendarDataDTO> update(@PathVariable("id") String id, @RequestBody CalendarDataDTO dto) {
		CalendarData domain  = mapping.toDomain(dto);
        domain.setCalendarDataId(id);
		service.update(domain);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-CalendarData-Update-all')")
    @ApiOperation(value = "批量更新日历示例数据", tags = {"日历示例数据" },  notes = "批量更新日历示例数据")
	@RequestMapping(method = RequestMethod.PUT, value = "/calendardatas/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<CalendarDataDTO> dtos) {
        service.updateBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "检查日历示例数据", tags = {"日历示例数据" },  notes = "检查日历示例数据")
	@RequestMapping(method = RequestMethod.POST, value = "/calendardatas/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody CalendarDataDTO dto) {
        return  ResponseEntity.status(HttpStatus.OK).body(service.checkKey(mapping.toDomain(dto)));
    }

    @ApiOperation(value = "获取日历示例数据草稿", tags = {"日历示例数据" },  notes = "获取日历示例数据草稿")
	@RequestMapping(method = RequestMethod.GET, value = "/calendardatas/getdraft")
    public ResponseEntity<CalendarDataDTO> getDraft(CalendarDataDTO dto) {
        CalendarData domain = mapping.toDomain(dto);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(service.getDraft(domain)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-CalendarData-Save-all')")
    @ApiOperation(value = "保存日历示例数据", tags = {"日历示例数据" },  notes = "保存日历示例数据")
	@RequestMapping(method = RequestMethod.POST, value = "/calendardatas/save")
    public ResponseEntity<CalendarDataDTO> save(@RequestBody CalendarDataDTO dto) {
        CalendarData domain = mapping.toDomain(dto);
        service.save(domain);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-CalendarData-Save-all')")
    @ApiOperation(value = "批量保存日历示例数据", tags = {"日历示例数据" },  notes = "批量保存日历示例数据")
	@RequestMapping(method = RequestMethod.POST, value = "/calendardatas/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<CalendarDataDTO> dtos) {
        service.saveBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

        
    @ApiOperation(value = "获取DEFAULT", tags = {"日历示例数据" } ,notes = "获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/calendardatas/fetchdefault")
    public ResponseEntity<List<CalendarDataDTO>> fetchDefault(CalendarDataSearchContext context) {
        Page<CalendarData> domains = service.searchDefault(context) ;
        List<CalendarDataDTO> list = mapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}
	

	@ApiOperation(value = "查询DEFAULT", tags = {"日历示例数据" } ,notes = "查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/calendardatas/searchdefault")
    public ResponseEntity<Page<CalendarDataDTO>> searchDefault(@RequestBody CalendarDataSearchContext context) {
        Page<CalendarData> domains = service.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(mapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}   
	



}
