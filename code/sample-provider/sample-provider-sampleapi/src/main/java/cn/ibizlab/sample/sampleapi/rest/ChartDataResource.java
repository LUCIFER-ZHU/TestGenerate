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
import cn.ibizlab.sample.core.sample.domain.ChartData;
import cn.ibizlab.sample.core.sample.service.IChartDataService;
import cn.ibizlab.sample.core.sample.filter.ChartDataSearchContext;
import cn.ibizlab.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"图表" })
@RestController("sampleapi-chartdata")
@RequestMapping("")
public class ChartDataResource {

    @Autowired
    public IChartDataService chartDataService;

    @Autowired
    @Lazy
    public ChartDataDTOMapping chartDataDtoMapping;

    @Autowired
    @Lazy
    public ChartDataSimpleDTOMapping chartDataSimpleDtoMapping;


    @ApiOperation(value = "图表", tags = {"图表" },  notes = "图表")
    @RequestMapping(method = RequestMethod.POST, value = "/chartdatas")
    public ResponseEntity create() {
    }

    @ApiOperation(value = "图表", tags = {"图表" },  notes = "图表")
    @RequestMapping(method = RequestMethod.GET, value = "/chartdatas/{chartDataId}")
    public ResponseEntity get(@PathVariable("chartDataId") String chartDataId) {
    }

    @ApiOperation(value = "图表", tags = {"图表" },  notes = "图表")
    @RequestMapping(method = RequestMethod.DELETE, value = "/chartdatas/{chartDataId}")
    public ResponseEntity remove(@PathVariable("chartDataId") String chartDataId) {
    }

    @ApiOperation(value = "图表", tags = {"图表" },  notes = "图表")
    @RequestMapping(method = RequestMethod.PUT, value = "/chartdatas/{chartDataId}")
    public ResponseEntity update(@PathVariable("chartDataId") String chartDataId) {
    }

    @ApiOperation(value = "图表", tags = {"图表" },  notes = "图表")
    @RequestMapping(method = RequestMethod.POST, value = "/chartdatas/checkkey")
    public ResponseEntity checkKey() {
    }

    @ApiOperation(value = "图表", tags = {"图表" },  notes = "图表")
    @RequestMapping(method = RequestMethod.GET, value = "/chartdatas/getdraft")
    public ResponseEntity getDraft() {
    }

    @ApiOperation(value = "图表", tags = {"图表" },  notes = "图表")
    @RequestMapping(method = RequestMethod.GET, value = "/chartdatas/{chartDataId}/getrandom")
    public ResponseEntity getRandom(@PathVariable("chartDataId") String chartDataId) {
    }

    @ApiOperation(value = "图表", tags = {"图表" },  notes = "图表")
    @RequestMapping(method = RequestMethod.POST, value = "/chartdatas/{chartDataId}/save")
    public ResponseEntity save(@PathVariable("chartDataId") String chartDataId) {
    }

    @ApiOperation(value = "图表", tags = {"图表" },  notes = "图表")
    @RequestMapping(method = RequestMethod.POST, value = "/chartdatas/{chartDataId}/testbackendaction")
    public ResponseEntity testBackEndAction(@PathVariable("chartDataId") String chartDataId) {
    }

    @ApiOperation(value = "图表", tags = {"图表" },  notes = "图表")
    @RequestMapping(method = RequestMethod.POST, value = "/chartdatas/fetchdefault")
    public ResponseEntity fetchDefault() {
        Page<ChartData> domains = chartDataService.searchDefault() ;
            List<> list = Mapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "图表", tags = {"图表" },  notes = "图表")
    @RequestMapping(method = RequestMethod.POST, value = "/chartdatas/select")
    public ResponseEntity select() {
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }


}
