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
import cn.ibizlab.sample.core.sample.domain.LeaveApplication;
import cn.ibizlab.sample.core.sample.service.ILeaveApplicationService;
import cn.ibizlab.sample.core.sample.filter.LeaveApplicationSearchContext;
import cn.ibizlab.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"请假申请" })
@RestController("sampleapi-leaveapplication")
@RequestMapping("")
public class LeaveApplicationResource {

    @Autowired
    public ILeaveApplicationService service;

    @Autowired
    @Lazy
    public LeaveApplicationMapping mapping;

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-LeaveApplication-Create-all')")
    @ApiOperation(value = "新建请假申请", tags = {"请假申请" },  notes = "新建请假申请")
	@RequestMapping(method = RequestMethod.POST, value = "/leaveapplications")
    public ResponseEntity<LeaveApplicationDTO> create(@Validated @RequestBody LeaveApplicationDTO dto) {
        LeaveApplication domain = mapping.toDomain(dto);
		service.create(domain);
		return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-LeaveApplication-Create-all')")
    @ApiOperation(value = "批量新建请假申请", tags = {"请假申请" },  notes = "批量新建请假申请")
	@RequestMapping(method = RequestMethod.POST, value = "/leaveapplications/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<LeaveApplicationDTO> dtos) {
        service.createBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-LeaveApplication-Get-all')")
    @ApiOperation(value = "获取请假申请", tags = {"请假申请" },  notes = "获取请假申请")
	@RequestMapping(method = RequestMethod.GET, value = "/leaveapplications/{id}")
    public ResponseEntity<LeaveApplicationDTO> get(@PathVariable("id") String id) {
        LeaveApplication domain = service.get(id);
        LeaveApplicationDTO dto = mapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-LeaveApplication-Remove-all')")
    @ApiOperation(value = "删除请假申请", tags = {"请假申请" },  notes = "删除请假申请")
	@RequestMapping(method = RequestMethod.DELETE, value = "/leaveapplications/{id}")
    public ResponseEntity<Boolean> remove(@PathVariable("id") String id) {
         return ResponseEntity.status(HttpStatus.OK).body(service.remove(id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-LeaveApplication-Remove-all')")
    @ApiOperation(value = "批量删除请假申请", tags = {"请假申请" },  notes = "批量删除请假申请")
	@RequestMapping(method = RequestMethod.DELETE, value = "/leaveapplications/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<String> ids) {
        service.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @VersionCheck(entity = "leaveapplication" , versionfield = "updateDate")    
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-LeaveApplication-Update-all')")
    @ApiOperation(value = "更新请假申请", tags = {"请假申请" },  notes = "更新请假申请")
	@RequestMapping(method = RequestMethod.PUT, value = "/leaveapplications/{id}")
    public ResponseEntity<LeaveApplicationDTO> update(@PathVariable("id") String id, @RequestBody LeaveApplicationDTO dto) {
		LeaveApplication domain  = mapping.toDomain(dto);
        domain.setLeaveApplicationId(id);
		service.update(domain);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-LeaveApplication-Update-all')")
    @ApiOperation(value = "批量更新请假申请", tags = {"请假申请" },  notes = "批量更新请假申请")
	@RequestMapping(method = RequestMethod.PUT, value = "/leaveapplications/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<LeaveApplicationDTO> dtos) {
        service.updateBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "检查请假申请", tags = {"请假申请" },  notes = "检查请假申请")
	@RequestMapping(method = RequestMethod.POST, value = "/leaveapplications/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody LeaveApplicationDTO dto) {
        return  ResponseEntity.status(HttpStatus.OK).body(service.checkKey(mapping.toDomain(dto)));
    }

    @ApiOperation(value = "获取请假申请草稿", tags = {"请假申请" },  notes = "获取请假申请草稿")
	@RequestMapping(method = RequestMethod.GET, value = "/leaveapplications/getdraft")
    public ResponseEntity<LeaveApplicationDTO> getDraft(LeaveApplicationDTO dto) {
        LeaveApplication domain = mapping.toDomain(dto);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(service.getDraft(domain)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-LeaveApplication-Save-all')")
    @ApiOperation(value = "保存请假申请", tags = {"请假申请" },  notes = "保存请假申请")
	@RequestMapping(method = RequestMethod.POST, value = "/leaveapplications/save")
    public ResponseEntity<LeaveApplicationDTO> save(@RequestBody LeaveApplicationDTO dto) {
        LeaveApplication domain = mapping.toDomain(dto);
        service.save(domain);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-LeaveApplication-Save-all')")
    @ApiOperation(value = "批量保存请假申请", tags = {"请假申请" },  notes = "批量保存请假申请")
	@RequestMapping(method = RequestMethod.POST, value = "/leaveapplications/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<LeaveApplicationDTO> dtos) {
        service.saveBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

        
    @ApiOperation(value = "获取DEFAULT", tags = {"请假申请" } ,notes = "获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/leaveapplications/fetchdefault")
    public ResponseEntity<List<LeaveApplicationDTO>> fetchDefault(LeaveApplicationSearchContext context) {
        Page<LeaveApplication> domains = service.searchDefault(context) ;
        List<LeaveApplicationDTO> list = mapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}
	

	@ApiOperation(value = "查询DEFAULT", tags = {"请假申请" } ,notes = "查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/leaveapplications/searchdefault")
    public ResponseEntity<Page<LeaveApplicationDTO>> searchDefault(@RequestBody LeaveApplicationSearchContext context) {
        Page<LeaveApplication> domains = service.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(mapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}   
	



}
