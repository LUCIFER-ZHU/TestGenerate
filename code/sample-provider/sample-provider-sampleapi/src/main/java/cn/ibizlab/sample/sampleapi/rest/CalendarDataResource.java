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
    public ICalendarDataService calendarDataService;

    @Autowired
    @Lazy
    public CalendarDataDTOMapping calendarDataDtoMapping;

    @Autowired
    @Lazy
    public CalendarDataSimpleDTOMapping calendarDataSimpleDtoMapping;


    @ApiOperation(value = "日历示例数据", tags = {"日历示例数据" },  notes = "日历示例数据")
    @RequestMapping(method = RequestMethod.POST, value = "/calendardatas")
    public ResponseEntity create() {
    }

    @ApiOperation(value = "日历示例数据", tags = {"日历示例数据" },  notes = "日历示例数据")
    @RequestMapping(method = RequestMethod.GET, value = "/calendardatas/{calendarDataId}")
    public ResponseEntity get(@PathVariable("calendarDataId") String calendarDataId) {
    }

    @ApiOperation(value = "日历示例数据", tags = {"日历示例数据" },  notes = "日历示例数据")
    @RequestMapping(method = RequestMethod.DELETE, value = "/calendardatas/{calendarDataId}")
    public ResponseEntity remove(@PathVariable("calendarDataId") String calendarDataId) {
    }

    @ApiOperation(value = "日历示例数据", tags = {"日历示例数据" },  notes = "日历示例数据")
    @RequestMapping(method = RequestMethod.PUT, value = "/calendardatas/{calendarDataId}")
    public ResponseEntity update(@PathVariable("calendarDataId") String calendarDataId) {
    }

    @ApiOperation(value = "日历示例数据", tags = {"日历示例数据" },  notes = "日历示例数据")
    @RequestMapping(method = RequestMethod.POST, value = "/calendardatas/checkkey")
    public ResponseEntity checkKey() {
    }

    @ApiOperation(value = "日历示例数据", tags = {"日历示例数据" },  notes = "日历示例数据")
    @RequestMapping(method = RequestMethod.GET, value = "/calendardatas/getdraft")
    public ResponseEntity getDraft() {
    }

    @ApiOperation(value = "日历示例数据", tags = {"日历示例数据" },  notes = "日历示例数据")
    @RequestMapping(method = RequestMethod.POST, value = "/calendardatas/{calendarDataId}/save")
    public ResponseEntity save(@PathVariable("calendarDataId") String calendarDataId) {
    }

    @ApiOperation(value = "日历示例数据", tags = {"日历示例数据" },  notes = "日历示例数据")
    @RequestMapping(method = RequestMethod.POST, value = "/calendardatas/fetchdefault")
    public ResponseEntity fetchDefault() {
        Page<CalendarData> domains = calendarDataService.searchDefault() ;
            List<> list = Mapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "日历示例数据", tags = {"日历示例数据" },  notes = "日历示例数据")
    @RequestMapping(method = RequestMethod.POST, value = "/calendardatas/select")
    public ResponseEntity select() {
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }


}
