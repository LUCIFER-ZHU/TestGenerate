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
    public IEventService eventService;

    @Autowired
    @Lazy
    public EventDTOMapping eventDtoMapping;

    @Autowired
    @Lazy
    public EventSimpleDTOMapping eventSimpleDtoMapping;


    @ApiOperation(value = "事件", tags = {"事件" },  notes = "事件")
    @RequestMapping(method = RequestMethod.POST, value = "/events")
    public ResponseEntity create() {
    }

    @ApiOperation(value = "事件", tags = {"事件" },  notes = "事件")
    @RequestMapping(method = RequestMethod.GET, value = "/events/{eventId}")
    public ResponseEntity get(@PathVariable("eventId") String eventId) {
    }

    @ApiOperation(value = "事件", tags = {"事件" },  notes = "事件")
    @RequestMapping(method = RequestMethod.DELETE, value = "/events/{eventId}")
    public ResponseEntity remove(@PathVariable("eventId") String eventId) {
    }

    @ApiOperation(value = "事件", tags = {"事件" },  notes = "事件")
    @RequestMapping(method = RequestMethod.PUT, value = "/events/{eventId}")
    public ResponseEntity update(@PathVariable("eventId") String eventId) {
    }

    @ApiOperation(value = "事件", tags = {"事件" },  notes = "事件")
    @RequestMapping(method = RequestMethod.POST, value = "/events/checkkey")
    public ResponseEntity checkKey() {
    }

    @ApiOperation(value = "事件", tags = {"事件" },  notes = "事件")
    @RequestMapping(method = RequestMethod.GET, value = "/events/getdraft")
    public ResponseEntity getDraft() {
    }

    @ApiOperation(value = "事件", tags = {"事件" },  notes = "事件")
    @RequestMapping(method = RequestMethod.POST, value = "/events/{eventId}/save")
    public ResponseEntity save(@PathVariable("eventId") String eventId) {
    }

    @ApiOperation(value = "事件", tags = {"事件" },  notes = "事件")
    @RequestMapping(method = RequestMethod.POST, value = "/events/fetchdefault")
    public ResponseEntity fetchDefault() {
        Page<Event> domains = eventService.searchDefault() ;
            List<> list = Mapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "事件", tags = {"事件" },  notes = "事件")
    @RequestMapping(method = RequestMethod.POST, value = "/events/select")
    public ResponseEntity select() {
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }


}
