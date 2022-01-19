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
import doc.core.sample.domain.ChartData;
import doc.core.sample.service.IChartDataService;
import doc.core.sample.filter.ChartDataSearchContext;
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
    public ResponseEntity create(@Validated @RequestBody ChartDataDTO chartDataDto) {
        ChartData chartData = chartDataDtoMapping.toDomain(chartDataDto);
        chartDataService.create(chartData);
        return ResponseEntity.status(HttpStatus.OK).body(chartDataDtoMapping.toDto(chartData));
    }

    @ApiOperation(value = "图表", tags = {"图表" },  notes = "图表")
    @RequestMapping(method = RequestMethod.GET, value = "/chartdatas/{chartDataId}")
    public ResponseEntity getByChartDataId(@PathVariable("chartDataId") String chartDataId) {
        ChartData chartData = chartDataService.get(chartDataId);
        return ResponseEntity.status(HttpStatus.OK).body(chartDataDtoMapping.toDto(chartData));
    }

    @ApiOperation(value = "图表", tags = {"图表" },  notes = "图表")
    @RequestMapping(method = RequestMethod.DELETE, value = "/chartdatas/{chartDataId}")
    public ResponseEntity removeByChartDataId(@PathVariable("chartDataId") String chartDataId) {
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "图表", tags = {"图表" },  notes = "图表")
    @RequestMapping(method = RequestMethod.PUT, value = "/chartdatas/{chartDataId}")
    public ResponseEntity updateByChartDataId(@PathVariable("chartDataId") String chartDataId, @Validated @RequestBody ChartDataDTO chartDataDto) {
        ChartData chartData = chartDataDtoMapping.toDomain(chartDataDto);
        chartData.setChartDataId(chartDataId);
        chartDataService.update(chartData);
        return ResponseEntity.status(HttpStatus.OK).body(chartDataDtoMapping.toDto(chartData));
    }

    @ApiOperation(value = "图表", tags = {"图表" },  notes = "图表")
    @RequestMapping(method = RequestMethod.POST, value = "/chartdatas/checkkey")
    public ResponseEntity checkKey(@Validated @RequestBody ChartDataDTO chartDataDto) {
        ChartData chartData = chartDataDtoMapping.toDomain(chartDataDto);
        chartDataService.checkKey(chartData);
        return ResponseEntity.status(HttpStatus.OK).body(0);
    }

    @ApiOperation(value = "图表", tags = {"图表" },  notes = "图表")
    @RequestMapping(method = RequestMethod.GET, value = "/chartdatas/getdraft")
    public ResponseEntity getDraft(@Validated @RequestBody ChartDataDTO chartDataDto) {
        ChartData chartData = chartDataDtoMapping.toDomain(chartDataDto);
        chartDataService.getDraft(chartData);
        return ResponseEntity.status(HttpStatus.OK).body(chartDataDtoMapping.toDto(chartData));
    }

    @ApiOperation(value = "图表", tags = {"图表" },  notes = "图表")
    @RequestMapping(method = RequestMethod.GET, value = "/chartdatas/{chartDataId}/getrandom")
    public ResponseEntity getRandomByChartDataId(@PathVariable("chartDataId") String chartDataId) {
        ChartData chartData = chartDataService.getRandom(chartDataId);
        return ResponseEntity.status(HttpStatus.OK).body(chartDataDtoMapping.toDto(chartData));
    }

    @ApiOperation(value = "图表", tags = {"图表" },  notes = "图表")
    @RequestMapping(method = RequestMethod.POST, value = "/chartdatas/{chartDataId}/htxwtest")
    public ResponseEntity htxWtestByChartDataId(@PathVariable("chartDataId") String chartDataId, @Validated @RequestBody ChartDataDTO chartDataDto) {
        ChartData chartData = chartDataDtoMapping.toDomain(chartDataDto);
        chartData.setChartDataId(chartDataId);
        chartDataService.htxWtest(chartData);
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "图表", tags = {"图表" },  notes = "图表")
    @RequestMapping(method = RequestMethod.POST, value = "/chartdatas/{chartDataId}/save")
    public ResponseEntity saveByChartDataId(@PathVariable("chartDataId") String chartDataId, @Validated @RequestBody ChartDataDTO chartDataDto) {
        ChartData chartData = chartDataDtoMapping.toDomain(chartDataDto);
        chartData.setChartDataId(chartDataId);
        chartDataService.save(chartData);
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "图表", tags = {"图表" },  notes = "图表")
    @RequestMapping(method = RequestMethod.POST, value = "/chartdatas/{chartDataId}/testbackendaction")
    public ResponseEntity testBackEndActionByChartDataId(@PathVariable("chartDataId") String chartDataId, @Validated @RequestBody ChartDataDTO chartDataDto) {
        ChartData chartData = chartDataDtoMapping.toDomain(chartDataDto);
        chartData.setChartDataId(chartDataId);
        chartDataService.testBackEndAction(chartData);
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "图表", tags = {"图表" },  notes = "图表")
    @RequestMapping(method = RequestMethod.POST, value = "/chartdatas/fetchdefault")
    public ResponseEntity fetchDefault(@Validated @RequestBody ChartDataSearchContext chartDataSearchContext) {
        Page<ChartData> domains = chartDataService.searchDefault(chartDataSearchContext) ;
            List<ChartDataDTO> list = chartDataDtoMapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(chartDataSearchContext.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(chartDataSearchContext.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "图表", tags = {"图表" },  notes = "图表")
    @RequestMapping(method = RequestMethod.POST, value = "/chartdatas/select")
    public ResponseEntity select() {
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }


}
