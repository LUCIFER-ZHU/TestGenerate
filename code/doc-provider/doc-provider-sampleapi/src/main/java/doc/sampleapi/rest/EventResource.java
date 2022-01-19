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
import doc.core.sample.domain.Event;
import doc.core.sample.service.IEventService;
import doc.core.sample.filter.EventSearchContext;
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
    public ResponseEntity create(@Validated @RequestBody EventDTO eventDto) {
        Event event = eventDtoMapping.toDomain(eventDto);
        eventService.create(event);
        return ResponseEntity.status(HttpStatus.OK).body(eventDtoMapping.toDto(event));
    }

    @ApiOperation(value = "事件", tags = {"事件" },  notes = "事件")
    @RequestMapping(method = RequestMethod.GET, value = "/events/{eventId}")
    public ResponseEntity getByEventId(@PathVariable("eventId") String eventId) {
        Event event = eventService.get(eventId);
        return ResponseEntity.status(HttpStatus.OK).body(eventDtoMapping.toDto(event));
    }

    @ApiOperation(value = "事件", tags = {"事件" },  notes = "事件")
    @RequestMapping(method = RequestMethod.DELETE, value = "/events/{eventId}")
    public ResponseEntity removeByEventId(@PathVariable("eventId") String eventId) {
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "事件", tags = {"事件" },  notes = "事件")
    @RequestMapping(method = RequestMethod.PUT, value = "/events/{eventId}")
    public ResponseEntity updateByEventId(@PathVariable("eventId") String eventId, @Validated @RequestBody EventDTO eventDto) {
        Event event = eventDtoMapping.toDomain(eventDto);
        event.setEventId(eventId);
        eventService.update(event);
        return ResponseEntity.status(HttpStatus.OK).body(eventDtoMapping.toDto(event));
    }

    @ApiOperation(value = "事件", tags = {"事件" },  notes = "事件")
    @RequestMapping(method = RequestMethod.POST, value = "/events/checkkey")
    public ResponseEntity checkKey(@Validated @RequestBody EventDTO eventDto) {
        Event event = eventDtoMapping.toDomain(eventDto);
        eventService.checkKey(event);
        return ResponseEntity.status(HttpStatus.OK).body(0);
    }

    @ApiOperation(value = "事件", tags = {"事件" },  notes = "事件")
    @RequestMapping(method = RequestMethod.GET, value = "/events/getdraft")
    public ResponseEntity getDraft(@Validated @RequestBody EventDTO eventDto) {
        Event event = eventDtoMapping.toDomain(eventDto);
        eventService.getDraft(event);
        return ResponseEntity.status(HttpStatus.OK).body(eventDtoMapping.toDto(event));
    }

    @ApiOperation(value = "事件", tags = {"事件" },  notes = "事件")
    @RequestMapping(method = RequestMethod.POST, value = "/events/{eventId}/save")
    public ResponseEntity saveByEventId(@PathVariable("eventId") String eventId, @Validated @RequestBody EventDTO eventDto) {
        Event event = eventDtoMapping.toDomain(eventDto);
        event.setEventId(eventId);
        eventService.save(event);
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "事件", tags = {"事件" },  notes = "事件")
    @RequestMapping(method = RequestMethod.POST, value = "/events/fetchdefault")
    public ResponseEntity fetchDefault(@Validated @RequestBody EventSearchContext eventSearchContext) {
        Page<Event> domains = eventService.searchDefault(eventSearchContext) ;
            List<EventDTO> list = eventDtoMapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(eventSearchContext.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(eventSearchContext.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "事件", tags = {"事件" },  notes = "事件")
    @RequestMapping(method = RequestMethod.POST, value = "/events/select")
    public ResponseEntity select() {
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }


}
