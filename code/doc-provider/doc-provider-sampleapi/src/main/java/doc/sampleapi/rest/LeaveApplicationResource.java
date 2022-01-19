package doc.sampleapi.rest;

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
import doc.sampleapi.dto.*;
import doc.sampleapi.mapping.*;
import doc.core.sample.domain.LeaveApplication;
import doc.core.sample.service.ILeaveApplicationService;
import doc.core.sample.filter.LeaveApplicationSearchContext;
import cn.ibizlab.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"请假申请" })
@RestController("sampleapi-leaveapplication")
@RequestMapping("")
public class LeaveApplicationResource {

    @Autowired
    public ILeaveApplicationService leaveApplicationService;

    @Autowired
    @Lazy
    public LeaveApplicationDTOMapping leaveApplicationDtoMapping;

    @Autowired
    @Lazy
    public LeaveApplicationSimpleDTOMapping leaveApplicationSimpleDtoMapping;


    @ApiOperation(value = "请假申请", tags = {"请假申请" },  notes = "请假申请")
    @RequestMapping(method = RequestMethod.POST, value = "/leaveapplications")
    public ResponseEntity create(@Validated @RequestBody LeaveApplicationDTO leaveApplicationDto) {
        LeaveApplication leaveApplication = leaveApplicationDtoMapping.toDomain(leaveApplicationDto);
        leaveApplicationService.create(leaveApplication);
        return ResponseEntity.status(HttpStatus.OK).body(leaveApplicationDtoMapping.toDto(leaveApplication));
    }

    @ApiOperation(value = "请假申请", tags = {"请假申请" },  notes = "请假申请")
    @RequestMapping(method = RequestMethod.GET, value = "/leaveapplications/{leaveApplicationId}")
    public ResponseEntity getByLeaveApplicationId(@PathVariable("leaveApplicationId") String leaveApplicationId) {
        LeaveApplication leaveApplication = leaveApplicationService.get(leaveApplicationId);
        return ResponseEntity.status(HttpStatus.OK).body(leaveApplicationDtoMapping.toDto(leaveApplication));
    }

    @ApiOperation(value = "请假申请", tags = {"请假申请" },  notes = "请假申请")
    @RequestMapping(method = RequestMethod.DELETE, value = "/leaveapplications/{leaveApplicationId}")
    public ResponseEntity removeByLeaveApplicationId(@PathVariable("leaveApplicationId") String leaveApplicationId) {
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "请假申请", tags = {"请假申请" },  notes = "请假申请")
    @RequestMapping(method = RequestMethod.PUT, value = "/leaveapplications/{leaveApplicationId}")
    public ResponseEntity updateByLeaveApplicationId(@PathVariable("leaveApplicationId") String leaveApplicationId, @Validated @RequestBody LeaveApplicationDTO leaveApplicationDto) {
        LeaveApplication leaveApplication = leaveApplicationDtoMapping.toDomain(leaveApplicationDto);
        leaveApplication.setLeaveApplicationId(leaveApplicationId);
        leaveApplicationService.update(leaveApplication);
        return ResponseEntity.status(HttpStatus.OK).body(leaveApplicationDtoMapping.toDto(leaveApplication));
    }

    @ApiOperation(value = "请假申请", tags = {"请假申请" },  notes = "请假申请")
    @RequestMapping(method = RequestMethod.POST, value = "/leaveapplications/{leaveApplicationId}/a")
    public ResponseEntity aByLeaveApplicationId(@PathVariable("leaveApplicationId") String leaveApplicationId, @Validated @RequestBody LeaveApplicationDTO leaveApplicationDto) {
        LeaveApplication leaveApplication = leaveApplicationDtoMapping.toDomain(leaveApplicationDto);
        leaveApplication.setLeaveApplicationId(leaveApplicationId);
        leaveApplicationService.a(leaveApplication);
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "请假申请", tags = {"请假申请" },  notes = "请假申请")
    @RequestMapping(method = RequestMethod.POST, value = "/leaveapplications/checkkey")
    public ResponseEntity checkKey(@Validated @RequestBody LeaveApplicationDTO leaveApplicationDto) {
        LeaveApplication leaveApplication = leaveApplicationDtoMapping.toDomain(leaveApplicationDto);
        leaveApplicationService.checkKey(leaveApplication);
        return ResponseEntity.status(HttpStatus.OK).body(0);
    }

    @ApiOperation(value = "请假申请", tags = {"请假申请" },  notes = "请假申请")
    @RequestMapping(method = RequestMethod.GET, value = "/leaveapplications/getdraft")
    public ResponseEntity getDraft(@Validated @RequestBody LeaveApplicationDTO leaveApplicationDto) {
        LeaveApplication leaveApplication = leaveApplicationDtoMapping.toDomain(leaveApplicationDto);
        leaveApplicationService.getDraft(leaveApplication);
        return ResponseEntity.status(HttpStatus.OK).body(leaveApplicationDtoMapping.toDto(leaveApplication));
    }

    @ApiOperation(value = "请假申请", tags = {"请假申请" },  notes = "请假申请")
    @RequestMapping(method = RequestMethod.POST, value = "/leaveapplications/{leaveApplicationId}/save")
    public ResponseEntity saveByLeaveApplicationId(@PathVariable("leaveApplicationId") String leaveApplicationId, @Validated @RequestBody LeaveApplicationDTO leaveApplicationDto) {
        LeaveApplication leaveApplication = leaveApplicationDtoMapping.toDomain(leaveApplicationDto);
        leaveApplication.setLeaveApplicationId(leaveApplicationId);
        leaveApplicationService.save(leaveApplication);
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "请假申请", tags = {"请假申请" },  notes = "请假申请")
    @RequestMapping(method = RequestMethod.POST, value = "/leaveapplications/fetchdefault")
    public ResponseEntity fetchDefault(@Validated @RequestBody LeaveApplicationSearchContext leaveApplicationSearchContext) {
        Page<LeaveApplication> domains = leaveApplicationService.searchDefault(leaveApplicationSearchContext) ;
            List<LeaveApplicationDTO> list = leaveApplicationDtoMapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(leaveApplicationSearchContext.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(leaveApplicationSearchContext.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "请假申请", tags = {"请假申请" },  notes = "请假申请")
    @RequestMapping(method = RequestMethod.POST, value = "/leaveapplications/select")
    public ResponseEntity select() {
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }


}
