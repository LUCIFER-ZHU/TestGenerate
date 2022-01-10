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
    public IActivityService activityService;

    @Autowired
    @Lazy
    public ActivityDTOMapping activityDtoMapping;

    @Autowired
    @Lazy
    public ActivitySimpleDTOMapping activitySimpleDtoMapping;


    @ApiOperation(value = "活动", tags = {"活动" },  notes = "活动")
    @RequestMapping(method = RequestMethod.POST, value = "/activities")
    public ResponseEntity create() {
    }

    @ApiOperation(value = "活动", tags = {"活动" },  notes = "活动")
    @RequestMapping(method = RequestMethod.GET, value = "/activities/{activityId}")
    public ResponseEntity get(@PathVariable("activityId") String activityId) {
    }

    @ApiOperation(value = "活动", tags = {"活动" },  notes = "活动")
    @RequestMapping(method = RequestMethod.DELETE, value = "/activities/{activityId}")
    public ResponseEntity remove(@PathVariable("activityId") String activityId) {
    }

    @ApiOperation(value = "活动", tags = {"活动" },  notes = "活动")
    @RequestMapping(method = RequestMethod.PUT, value = "/activities/{activityId}")
    public ResponseEntity update(@PathVariable("activityId") String activityId) {
    }

    @ApiOperation(value = "活动", tags = {"活动" },  notes = "活动")
    @RequestMapping(method = RequestMethod.POST, value = "/activities/checkkey")
    public ResponseEntity checkKey() {
    }

    @ApiOperation(value = "活动", tags = {"活动" },  notes = "活动")
    @RequestMapping(method = RequestMethod.GET, value = "/activities/getdraft")
    public ResponseEntity getDraft() {
    }

    @ApiOperation(value = "活动", tags = {"活动" },  notes = "活动")
    @RequestMapping(method = RequestMethod.POST, value = "/activities/{activityId}/save")
    public ResponseEntity save(@PathVariable("activityId") String activityId) {
    }

    @ApiOperation(value = "活动", tags = {"活动" },  notes = "活动")
    @RequestMapping(method = RequestMethod.POST, value = "/activities/fetchdefault")
    public ResponseEntity fetchDefault() {
        Page<Activity> domains = activityService.searchDefault() ;
            List<> list = Mapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "活动", tags = {"活动" },  notes = "活动")
    @RequestMapping(method = RequestMethod.POST, value = "/activities/fetchemail")
    public ResponseEntity fetchEmail() {
        Page<Activity> domains = activityService.searchEmail() ;
            List<> list = Mapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "活动", tags = {"活动" },  notes = "活动")
    @RequestMapping(method = RequestMethod.POST, value = "/activities/fetchmeeting")
    public ResponseEntity fetchMeeting() {
        Page<Activity> domains = activityService.searchMeeting() ;
            List<> list = Mapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "活动", tags = {"活动" },  notes = "活动")
    @RequestMapping(method = RequestMethod.POST, value = "/activities/fetchother")
    public ResponseEntity fetchOther() {
        Page<Activity> domains = activityService.searchOther() ;
            List<> list = Mapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "活动", tags = {"活动" },  notes = "活动")
    @RequestMapping(method = RequestMethod.POST, value = "/activities/fetchphone")
    public ResponseEntity fetchPhone() {
        Page<Activity> domains = activityService.searchPhone() ;
            List<> list = Mapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "活动", tags = {"活动" },  notes = "活动")
    @RequestMapping(method = RequestMethod.POST, value = "/activities/select")
    public ResponseEntity select() {
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }


}
