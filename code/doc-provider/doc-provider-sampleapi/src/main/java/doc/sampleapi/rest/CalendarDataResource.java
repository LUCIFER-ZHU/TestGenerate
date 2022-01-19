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
import doc.core.sample.domain.CalendarData;
import doc.core.sample.service.ICalendarDataService;
import doc.core.sample.filter.CalendarDataSearchContext;
import cn.ibizlab.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"日历示例数据" })
@RestController("sampleapi-calendardata")
@RequestMapping("")
public class CalendarDataResource {

    @Autowired
    public ICalendarDataService calendarDataService;

    @Autowired
    @Lazy
    public CalendarDataDTOMapping calendarDataDtoMapping;

    @Autowired
    @Lazy
    public CalendarDataSimpleDTOMapping calendarDataSimpleDtoMapping;


    @ApiOperation(value = "日历示例数据", tags = {"日历示例数据" },  notes = "日历示例数据")
    @RequestMapping(method = RequestMethod.POST, value = "/calendardatas")
    public ResponseEntity create(@Validated @RequestBody CalendarDataDTO calendarDataDto) {
        CalendarData calendarData = calendarDataDtoMapping.toDomain(calendarDataDto);
        calendarDataService.create(calendarData);
        return ResponseEntity.status(HttpStatus.OK).body(calendarDataDtoMapping.toDto(calendarData));
    }

    @ApiOperation(value = "日历示例数据", tags = {"日历示例数据" },  notes = "日历示例数据")
    @RequestMapping(method = RequestMethod.GET, value = "/calendardatas/{calendarDataId}")
    public ResponseEntity getByCalendarDataId(@PathVariable("calendarDataId") String calendarDataId) {
        CalendarData calendarData = calendarDataService.get(calendarDataId);
        return ResponseEntity.status(HttpStatus.OK).body(calendarDataDtoMapping.toDto(calendarData));
    }

    @ApiOperation(value = "日历示例数据", tags = {"日历示例数据" },  notes = "日历示例数据")
    @RequestMapping(method = RequestMethod.DELETE, value = "/calendardatas/{calendarDataId}")
    public ResponseEntity removeByCalendarDataId(@PathVariable("calendarDataId") String calendarDataId) {
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "日历示例数据", tags = {"日历示例数据" },  notes = "日历示例数据")
    @RequestMapping(method = RequestMethod.PUT, value = "/calendardatas/{calendarDataId}")
    public ResponseEntity updateByCalendarDataId(@PathVariable("calendarDataId") String calendarDataId, @Validated @RequestBody CalendarDataDTO calendarDataDto) {
        CalendarData calendarData = calendarDataDtoMapping.toDomain(calendarDataDto);
        calendarData.setCalendarDataId(calendarDataId);
        calendarDataService.update(calendarData);
        return ResponseEntity.status(HttpStatus.OK).body(calendarDataDtoMapping.toDto(calendarData));
    }

    @ApiOperation(value = "日历示例数据", tags = {"日历示例数据" },  notes = "日历示例数据")
    @RequestMapping(method = RequestMethod.POST, value = "/calendardatas/checkkey")
    public ResponseEntity checkKey(@Validated @RequestBody CalendarDataDTO calendarDataDto) {
        CalendarData calendarData = calendarDataDtoMapping.toDomain(calendarDataDto);
        calendarDataService.checkKey(calendarData);
        return ResponseEntity.status(HttpStatus.OK).body(0);
    }

    @ApiOperation(value = "日历示例数据", tags = {"日历示例数据" },  notes = "日历示例数据")
    @RequestMapping(method = RequestMethod.GET, value = "/calendardatas/getdraft")
    public ResponseEntity getDraft(@Validated @RequestBody CalendarDataDTO calendarDataDto) {
        CalendarData calendarData = calendarDataDtoMapping.toDomain(calendarDataDto);
        calendarDataService.getDraft(calendarData);
        return ResponseEntity.status(HttpStatus.OK).body(calendarDataDtoMapping.toDto(calendarData));
    }

    @ApiOperation(value = "日历示例数据", tags = {"日历示例数据" },  notes = "日历示例数据")
    @RequestMapping(method = RequestMethod.POST, value = "/calendardatas/{calendarDataId}/save")
    public ResponseEntity saveByCalendarDataId(@PathVariable("calendarDataId") String calendarDataId, @Validated @RequestBody CalendarDataDTO calendarDataDto) {
        CalendarData calendarData = calendarDataDtoMapping.toDomain(calendarDataDto);
        calendarData.setCalendarDataId(calendarDataId);
        calendarDataService.save(calendarData);
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "日历示例数据", tags = {"日历示例数据" },  notes = "日历示例数据")
    @RequestMapping(method = RequestMethod.POST, value = "/calendardatas/fetchdefault")
    public ResponseEntity fetchDefault(@Validated @RequestBody CalendarDataSearchContext calendarDataSearchContext) {
        Page<CalendarData> domains = calendarDataService.searchDefault(calendarDataSearchContext) ;
            List<CalendarDataDTO> list = calendarDataDtoMapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(calendarDataSearchContext.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(calendarDataSearchContext.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "日历示例数据", tags = {"日历示例数据" },  notes = "日历示例数据")
    @RequestMapping(method = RequestMethod.POST, value = "/calendardatas/select")
    public ResponseEntity select() {
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }


}
