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
import doc.core.sample.domain.Activity;
import doc.core.sample.service.IActivityService;
import doc.core.sample.filter.ActivitySearchContext;
import cn.ibizlab.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"活动" })
@RestController("sampleapi-activity")
@RequestMapping("")
public class ActivityResource {

    @Autowired
    public IActivityService activityService;

    @Autowired
    @Lazy
    public ActivityDTOMapping activityDtoMapping;

    @Autowired
    @Lazy
    public ActivitySimpleDTOMapping activitySimpleDtoMapping;


    @ApiOperation(value = "活动", tags = {"活动" },  notes = "活动")
    @RequestMapping(method = RequestMethod.POST, value = "/activities")
    public ResponseEntity create(@Validated @RequestBody ActivityDTO activityDto) {
        Activity activity = activityDtoMapping.toDomain(activityDto);
        activityService.create(activity);
        return ResponseEntity.status(HttpStatus.OK).body(activityDtoMapping.toDto(activity));
    }

    @ApiOperation(value = "活动", tags = {"活动" },  notes = "活动")
    @RequestMapping(method = RequestMethod.GET, value = "/activities/{activityId}")
    public ResponseEntity getByActivityId(@PathVariable("activityId") String activityId) {
        Activity activity = activityService.get(activityId);
        return ResponseEntity.status(HttpStatus.OK).body(activityDtoMapping.toDto(activity));
    }

    @ApiOperation(value = "活动", tags = {"活动" },  notes = "活动")
    @RequestMapping(method = RequestMethod.DELETE, value = "/activities/{activityId}")
    public ResponseEntity removeByActivityId(@PathVariable("activityId") String activityId) {
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "活动", tags = {"活动" },  notes = "活动")
    @RequestMapping(method = RequestMethod.PUT, value = "/activities/{activityId}")
    public ResponseEntity updateByActivityId(@PathVariable("activityId") String activityId, @Validated @RequestBody ActivityDTO activityDto) {
        Activity activity = activityDtoMapping.toDomain(activityDto);
        activity.setActivityId(activityId);
        activityService.update(activity);
        return ResponseEntity.status(HttpStatus.OK).body(activityDtoMapping.toDto(activity));
    }

    @ApiOperation(value = "活动", tags = {"活动" },  notes = "活动")
    @RequestMapping(method = RequestMethod.POST, value = "/activities/checkkey")
    public ResponseEntity checkKey(@Validated @RequestBody ActivityDTO activityDto) {
        Activity activity = activityDtoMapping.toDomain(activityDto);
        activityService.checkKey(activity);
        return ResponseEntity.status(HttpStatus.OK).body(0);
    }

    @ApiOperation(value = "活动", tags = {"活动" },  notes = "活动")
    @RequestMapping(method = RequestMethod.GET, value = "/activities/getdraft")
    public ResponseEntity getDraft(@Validated @RequestBody ActivityDTO activityDto) {
        Activity activity = activityDtoMapping.toDomain(activityDto);
        activityService.getDraft(activity);
        return ResponseEntity.status(HttpStatus.OK).body(activityDtoMapping.toDto(activity));
    }

    @ApiOperation(value = "活动", tags = {"活动" },  notes = "活动")
    @RequestMapping(method = RequestMethod.POST, value = "/activities/{activityId}/save")
    public ResponseEntity saveByActivityId(@PathVariable("activityId") String activityId, @Validated @RequestBody ActivityDTO activityDto) {
        Activity activity = activityDtoMapping.toDomain(activityDto);
        activity.setActivityId(activityId);
        activityService.save(activity);
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "活动", tags = {"活动" },  notes = "活动")
    @RequestMapping(method = RequestMethod.POST, value = "/activities/fetchdefault")
    public ResponseEntity fetchDefault(@Validated @RequestBody ActivitySearchContext activitySearchContext) {
        Page<Activity> domains = activityService.searchDefault(activitySearchContext) ;
            List<ActivityDTO> list = activityDtoMapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(activitySearchContext.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(activitySearchContext.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "活动", tags = {"活动" },  notes = "活动")
    @RequestMapping(method = RequestMethod.POST, value = "/activities/fetchemail")
    public ResponseEntity fetchEmail(@Validated @RequestBody ActivitySearchContext activitySearchContext) {
        Page<Activity> domains = activityService.searchEmail(activitySearchContext) ;
            List<ActivityDTO> list = activityDtoMapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(activitySearchContext.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(activitySearchContext.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "活动", tags = {"活动" },  notes = "活动")
    @RequestMapping(method = RequestMethod.POST, value = "/activities/fetchmeeting")
    public ResponseEntity fetchMeeting(@Validated @RequestBody ActivitySearchContext activitySearchContext) {
        Page<Activity> domains = activityService.searchMeeting(activitySearchContext) ;
            List<ActivityDTO> list = activityDtoMapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(activitySearchContext.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(activitySearchContext.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "活动", tags = {"活动" },  notes = "活动")
    @RequestMapping(method = RequestMethod.POST, value = "/activities/fetchother")
    public ResponseEntity fetchOther(@Validated @RequestBody ActivitySearchContext activitySearchContext) {
        Page<Activity> domains = activityService.searchOther(activitySearchContext) ;
            List<ActivityDTO> list = activityDtoMapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(activitySearchContext.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(activitySearchContext.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "活动", tags = {"活动" },  notes = "活动")
    @RequestMapping(method = RequestMethod.POST, value = "/activities/fetchphone")
    public ResponseEntity fetchPhone(@Validated @RequestBody ActivitySearchContext activitySearchContext) {
        Page<Activity> domains = activityService.searchPhone(activitySearchContext) ;
            List<ActivityDTO> list = activityDtoMapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(activitySearchContext.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(activitySearchContext.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "活动", tags = {"活动" },  notes = "活动")
    @RequestMapping(method = RequestMethod.POST, value = "/activities/select")
    public ResponseEntity select() {
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }

    @ApiOperation(value = "活动", tags = {"活动" },  notes = "活动")
    @RequestMapping(method = RequestMethod.POST, value = "/customers/{customerId}/activities")
    public ResponseEntity createByCustomerId(@PathVariable("customerId") String customerId, @Validated @RequestBody ActivityDTO activityDto) {
        Activity activity = activityDtoMapping.toDomain(activityDto);
        activity.setCustomerId(customerId);
        activityService.create(activity);
        return ResponseEntity.status(HttpStatus.OK).body(activityDtoMapping.toDto(activity));
    }

    @ApiOperation(value = "活动", tags = {"活动" },  notes = "活动")
    @RequestMapping(method = RequestMethod.GET, value = "/customers/{customerId}/activities/{activityId}")
    public ResponseEntity getByCustomerIdAndActivityId(@PathVariable("customerId") String customerId, @PathVariable("activityId") String activityId) {
        Activity activity = activityService.get(activityId);
        return ResponseEntity.status(HttpStatus.OK).body(activityDtoMapping.toDto(activity));
    }

    @ApiOperation(value = "活动", tags = {"活动" },  notes = "活动")
    @RequestMapping(method = RequestMethod.DELETE, value = "/customers/{customerId}/activities/{activityId}")
    public ResponseEntity removeByCustomerIdAndActivityId(@PathVariable("customerId") String customerId, @PathVariable("activityId") String activityId) {
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "活动", tags = {"活动" },  notes = "活动")
    @RequestMapping(method = RequestMethod.PUT, value = "/customers/{customerId}/activities/{activityId}")
    public ResponseEntity updateByCustomerIdAndActivityId(@PathVariable("customerId") String customerId, @PathVariable("activityId") String activityId, @Validated @RequestBody ActivityDTO activityDto) {
        Activity activity = activityDtoMapping.toDomain(activityDto);
        activity.setActivityId(activityId);
        activityService.update(activity);
        return ResponseEntity.status(HttpStatus.OK).body(activityDtoMapping.toDto(activity));
    }

    @ApiOperation(value = "活动", tags = {"活动" },  notes = "活动")
    @RequestMapping(method = RequestMethod.POST, value = "/customers/{customerId}/activities/checkkey")
    public ResponseEntity checkKeyByCustomerId(@PathVariable("customerId") String customerId, @Validated @RequestBody ActivityDTO activityDto) {
        Activity activity = activityDtoMapping.toDomain(activityDto);
        activity.setCustomerId(customerId);
        activityService.checkKey(activity);
        return ResponseEntity.status(HttpStatus.OK).body(0);
    }

    @ApiOperation(value = "活动", tags = {"活动" },  notes = "活动")
    @RequestMapping(method = RequestMethod.GET, value = "/customers/{customerId}/activities/getdraft")
    public ResponseEntity getDraftByCustomerId(@PathVariable("customerId") String customerId, @Validated @RequestBody ActivityDTO activityDto) {
        Activity activity = activityDtoMapping.toDomain(activityDto);
        activity.setCustomerId(customerId);
        activityService.getDraft(activity);
        return ResponseEntity.status(HttpStatus.OK).body(activityDtoMapping.toDto(activity));
    }

    @ApiOperation(value = "活动", tags = {"活动" },  notes = "活动")
    @RequestMapping(method = RequestMethod.POST, value = "/customers/{customerId}/activities/{activityId}/save")
    public ResponseEntity saveByCustomerIdAndActivityId(@PathVariable("customerId") String customerId, @PathVariable("activityId") String activityId, @Validated @RequestBody ActivityDTO activityDto) {
        Activity activity = activityDtoMapping.toDomain(activityDto);
        activity.setActivityId(activityId);
        activityService.save(activity);
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "活动", tags = {"活动" },  notes = "活动")
    @RequestMapping(method = RequestMethod.POST, value = "/customers/{customerId}/activities/fetchdefault")
    public ResponseEntity fetchDefaultByCustomerId(@PathVariable("customerId") String customerId, @Validated @RequestBody ActivitySearchContext activitySearchContext) {
        activitySearchContext.setCustomerIdEQ(customerId);
        Page<Activity> domains = activityService.searchDefault(activitySearchContext) ;
            List<ActivityDTO> list = activityDtoMapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(activitySearchContext.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(activitySearchContext.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "活动", tags = {"活动" },  notes = "活动")
    @RequestMapping(method = RequestMethod.POST, value = "/customers/{customerId}/activities/fetchemail")
    public ResponseEntity fetchEmailByCustomerId(@PathVariable("customerId") String customerId, @Validated @RequestBody ActivitySearchContext activitySearchContext) {
        activitySearchContext.setCustomerIdEQ(customerId);
        Page<Activity> domains = activityService.searchEmail(activitySearchContext) ;
            List<ActivityDTO> list = activityDtoMapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(activitySearchContext.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(activitySearchContext.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "活动", tags = {"活动" },  notes = "活动")
    @RequestMapping(method = RequestMethod.POST, value = "/customers/{customerId}/activities/fetchmeeting")
    public ResponseEntity fetchMeetingByCustomerId(@PathVariable("customerId") String customerId, @Validated @RequestBody ActivitySearchContext activitySearchContext) {
        activitySearchContext.setCustomerIdEQ(customerId);
        Page<Activity> domains = activityService.searchMeeting(activitySearchContext) ;
            List<ActivityDTO> list = activityDtoMapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(activitySearchContext.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(activitySearchContext.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "活动", tags = {"活动" },  notes = "活动")
    @RequestMapping(method = RequestMethod.POST, value = "/customers/{customerId}/activities/fetchother")
    public ResponseEntity fetchOtherByCustomerId(@PathVariable("customerId") String customerId, @Validated @RequestBody ActivitySearchContext activitySearchContext) {
        activitySearchContext.setCustomerIdEQ(customerId);
        Page<Activity> domains = activityService.searchOther(activitySearchContext) ;
            List<ActivityDTO> list = activityDtoMapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(activitySearchContext.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(activitySearchContext.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "活动", tags = {"活动" },  notes = "活动")
    @RequestMapping(method = RequestMethod.POST, value = "/customers/{customerId}/activities/fetchphone")
    public ResponseEntity fetchPhoneByCustomerId(@PathVariable("customerId") String customerId, @Validated @RequestBody ActivitySearchContext activitySearchContext) {
        activitySearchContext.setCustomerIdEQ(customerId);
        Page<Activity> domains = activityService.searchPhone(activitySearchContext) ;
            List<ActivityDTO> list = activityDtoMapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(activitySearchContext.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(activitySearchContext.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "活动", tags = {"活动" },  notes = "活动")
    @RequestMapping(method = RequestMethod.POST, value = "/customers/{customerId}/activities/select")
    public ResponseEntity selectByCustomerId(@PathVariable("customerId") String customerId) {
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }


}
