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
import cn.ibizlab.sample.core.sample.domain.CounterData;
import cn.ibizlab.sample.core.sample.service.ICounterDataService;
import cn.ibizlab.sample.core.sample.filter.CounterDataSearchContext;
import cn.ibizlab.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"计数器数据" })
@RestController("sampleapi-counterdata")
@RequestMapping("")
public class CounterDataResource {

    @Autowired
    public ICounterDataService counterDataService;

    @Autowired
    @Lazy
    public CounterDataDTOMapping counterDataDtoMapping;

    @Autowired
    @Lazy
    public CounterDataSimpleDTOMapping counterDataSimpleDtoMapping;


    @ApiOperation(value = "计数器数据", tags = {"计数器数据" },  notes = "计数器数据")
    @RequestMapping(method = RequestMethod.POST, value = "/counterdatas")
    public ResponseEntity create() {
    }

    @ApiOperation(value = "计数器数据", tags = {"计数器数据" },  notes = "计数器数据")
    @RequestMapping(method = RequestMethod.GET, value = "/counterdatas/{counterDataId}")
    public ResponseEntity getByCounterDataId(@PathVariable("counterDataId") String counterDataId) {
    }

    @ApiOperation(value = "计数器数据", tags = {"计数器数据" },  notes = "计数器数据")
    @RequestMapping(method = RequestMethod.DELETE, value = "/counterdatas/{counterDataId}")
    public ResponseEntity removeByCounterDataId(@PathVariable("counterDataId") String counterDataId) {
    }

    @ApiOperation(value = "计数器数据", tags = {"计数器数据" },  notes = "计数器数据")
    @RequestMapping(method = RequestMethod.PUT, value = "/counterdatas/{counterDataId}")
    public ResponseEntity updateByCounterDataId(@PathVariable("counterDataId") String counterDataId) {
    }

    @ApiOperation(value = "计数器数据", tags = {"计数器数据" },  notes = "计数器数据")
    @RequestMapping(method = RequestMethod.POST, value = "/counterdatas/checkkey")
    public ResponseEntity checkKey() {
    }

    @ApiOperation(value = "计数器数据", tags = {"计数器数据" },  notes = "计数器数据")
    @RequestMapping(method = RequestMethod.GET, value = "/counterdatas/getdraft")
    public ResponseEntity getDraft() {
    }

    @ApiOperation(value = "计数器数据", tags = {"计数器数据" },  notes = "计数器数据")
    @RequestMapping(method = RequestMethod.POST, value = "/counterdatas/{counterDataId}/save")
    public ResponseEntity saveByCounterDataId(@PathVariable("counterDataId") String counterDataId) {
    }

    @ApiOperation(value = "计数器数据", tags = {"计数器数据" },  notes = "计数器数据")
    @RequestMapping(method = RequestMethod.POST, value = "/counterdatas/fetchdefault")
    public ResponseEntity fetchDefault() {
        Page<CounterData> domains = counterDataService.searchDefault() ;
            List<> list = Mapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "计数器数据", tags = {"计数器数据" },  notes = "计数器数据")
    @RequestMapping(method = RequestMethod.POST, value = "/counterdatas/select")
    public ResponseEntity select() {
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }


}
