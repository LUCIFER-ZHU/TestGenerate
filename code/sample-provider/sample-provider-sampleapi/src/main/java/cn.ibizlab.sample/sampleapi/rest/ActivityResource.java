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
import cn.ibizlab.sample.core.sample.domain.Activity;
import cn.ibizlab.sample.core.sample.service.IActivityService;
import cn.ibizlab.sample.core.sample.filter.ActivitySearchContext;
import cn.ibizlab.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"活动" })
@RestController("sampleapi-activity")
@RequestMapping("")
public class ActivityResource {

    @Autowired
    public IActivityService service;

    @Autowired
    @Lazy
    public ActivityMapping mapping;

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Activity-Create-all')")
    @ApiOperation(value = "新建活动", tags = {"活动" },  notes = "新建活动")
	@RequestMapping(method = RequestMethod.POST, value = "/activities")
    public ResponseEntity<ActivityDTO> create(@Validated @RequestBody ActivityDTO dto) {
        Activity domain = mapping.toDomain(dto);
		service.create(domain);
		return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Activity-Create-all')")
    @ApiOperation(value = "批量新建活动", tags = {"活动" },  notes = "批量新建活动")
	@RequestMapping(method = RequestMethod.POST, value = "/activities/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<ActivityDTO> dtos) {
        service.createBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Activity-Get-all')")
    @ApiOperation(value = "获取活动", tags = {"活动" },  notes = "获取活动")
	@RequestMapping(method = RequestMethod.GET, value = "/activities/{id}")
    public ResponseEntity<ActivityDTO> get(@PathVariable("id") String id) {
        Activity domain = service.get(id);
        ActivityDTO dto = mapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Activity-Remove-all')")
    @ApiOperation(value = "删除活动", tags = {"活动" },  notes = "删除活动")
	@RequestMapping(method = RequestMethod.DELETE, value = "/activities/{id}")
    public ResponseEntity<Boolean> remove(@PathVariable("id") String id) {
         return ResponseEntity.status(HttpStatus.OK).body(service.remove(id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Activity-Remove-all')")
    @ApiOperation(value = "批量删除活动", tags = {"活动" },  notes = "批量删除活动")
	@RequestMapping(method = RequestMethod.DELETE, value = "/activities/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<String> ids) {
        service.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @VersionCheck(entity = "activity" , versionfield = "updateDate")    
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Activity-Update-all')")
    @ApiOperation(value = "更新活动", tags = {"活动" },  notes = "更新活动")
	@RequestMapping(method = RequestMethod.PUT, value = "/activities/{id}")
    public ResponseEntity<ActivityDTO> update(@PathVariable("id") String id, @RequestBody ActivityDTO dto) {
		Activity domain  = mapping.toDomain(dto);
        domain.setActivityId(id);
		service.update(domain);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Activity-Update-all')")
    @ApiOperation(value = "批量更新活动", tags = {"活动" },  notes = "批量更新活动")
	@RequestMapping(method = RequestMethod.PUT, value = "/activities/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<ActivityDTO> dtos) {
        service.updateBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "检查活动", tags = {"活动" },  notes = "检查活动")
	@RequestMapping(method = RequestMethod.POST, value = "/activities/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody ActivityDTO dto) {
        return  ResponseEntity.status(HttpStatus.OK).body(service.checkKey(mapping.toDomain(dto)));
    }

    @ApiOperation(value = "获取活动草稿", tags = {"活动" },  notes = "获取活动草稿")
	@RequestMapping(method = RequestMethod.GET, value = "/activities/getdraft")
    public ResponseEntity<ActivityDTO> getDraft(ActivityDTO dto) {
        Activity domain = mapping.toDomain(dto);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(service.getDraft(domain)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Activity-Save-all')")
    @ApiOperation(value = "保存活动", tags = {"活动" },  notes = "保存活动")
	@RequestMapping(method = RequestMethod.POST, value = "/activities/save")
    public ResponseEntity<ActivityDTO> save(@RequestBody ActivityDTO dto) {
        Activity domain = mapping.toDomain(dto);
        service.save(domain);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Activity-Save-all')")
    @ApiOperation(value = "批量保存活动", tags = {"活动" },  notes = "批量保存活动")
	@RequestMapping(method = RequestMethod.POST, value = "/activities/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<ActivityDTO> dtos) {
        service.saveBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

        
    @ApiOperation(value = "获取DEFAULT", tags = {"活动" } ,notes = "获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/activities/fetchdefault")
    public ResponseEntity<List<ActivityDTO>> fetchDefault(ActivitySearchContext context) {
        Page<Activity> domains = service.searchDefault(context) ;
        List<ActivityDTO> list = mapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}
	

	@ApiOperation(value = "查询DEFAULT", tags = {"活动" } ,notes = "查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/activities/searchdefault")
    public ResponseEntity<Page<ActivityDTO>> searchDefault(@RequestBody ActivitySearchContext context) {
        Page<Activity> domains = service.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(mapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}   
        
    @ApiOperation(value = "获取Email", tags = {"活动" } ,notes = "获取Email")
    @RequestMapping(method= RequestMethod.GET , value="/activities/fetchemail")
    public ResponseEntity<List<ActivityDTO>> fetchEmail(ActivitySearchContext context) {
        Page<Activity> domains = service.searchEmail(context) ;
        List<ActivityDTO> list = mapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}
	

	@ApiOperation(value = "查询Email", tags = {"活动" } ,notes = "查询Email")
    @RequestMapping(method= RequestMethod.POST , value="/activities/searchemail")
    public ResponseEntity<Page<ActivityDTO>> searchEmail(@RequestBody ActivitySearchContext context) {
        Page<Activity> domains = service.searchEmail(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(mapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}   
        
    @ApiOperation(value = "获取Meeting", tags = {"活动" } ,notes = "获取Meeting")
    @RequestMapping(method= RequestMethod.GET , value="/activities/fetchmeeting")
    public ResponseEntity<List<ActivityDTO>> fetchMeeting(ActivitySearchContext context) {
        Page<Activity> domains = service.searchMeeting(context) ;
        List<ActivityDTO> list = mapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}
	

	@ApiOperation(value = "查询Meeting", tags = {"活动" } ,notes = "查询Meeting")
    @RequestMapping(method= RequestMethod.POST , value="/activities/searchmeeting")
    public ResponseEntity<Page<ActivityDTO>> searchMeeting(@RequestBody ActivitySearchContext context) {
        Page<Activity> domains = service.searchMeeting(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(mapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}   
        
    @ApiOperation(value = "获取Other", tags = {"活动" } ,notes = "获取Other")
    @RequestMapping(method= RequestMethod.GET , value="/activities/fetchother")
    public ResponseEntity<List<ActivityDTO>> fetchOther(ActivitySearchContext context) {
        Page<Activity> domains = service.searchOther(context) ;
        List<ActivityDTO> list = mapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}
	

	@ApiOperation(value = "查询Other", tags = {"活动" } ,notes = "查询Other")
    @RequestMapping(method= RequestMethod.POST , value="/activities/searchother")
    public ResponseEntity<Page<ActivityDTO>> searchOther(@RequestBody ActivitySearchContext context) {
        Page<Activity> domains = service.searchOther(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(mapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}   
        
    @ApiOperation(value = "获取Phone", tags = {"活动" } ,notes = "获取Phone")
    @RequestMapping(method= RequestMethod.GET , value="/activities/fetchphone")
    public ResponseEntity<List<ActivityDTO>> fetchPhone(ActivitySearchContext context) {
        Page<Activity> domains = service.searchPhone(context) ;
        List<ActivityDTO> list = mapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}
	

	@ApiOperation(value = "查询Phone", tags = {"活动" } ,notes = "查询Phone")
    @RequestMapping(method= RequestMethod.POST , value="/activities/searchphone")
    public ResponseEntity<Page<ActivityDTO>> searchPhone(@RequestBody ActivitySearchContext context) {
        Page<Activity> domains = service.searchPhone(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(mapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}   
	



}
