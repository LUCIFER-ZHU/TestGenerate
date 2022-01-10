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
import cn.ibizlab.sample.core.sample.domain.CounterData2;
import cn.ibizlab.sample.core.sample.service.ICounterData2Service;
import cn.ibizlab.sample.core.sample.filter.CounterData2SearchContext;
import cn.ibizlab.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"计数器数据2" })
@RestController("sampleapi-counterdata2")
@RequestMapping("")
public class CounterData2Resource {

    @Autowired
    public ICounterData2Service counterData2Service;

    @Autowired
    @Lazy
    public CounterData2DTOMapping counterData2DtoMapping;

    @Autowired
    @Lazy
    public CounterData2SimpleDTOMapping counterData2SimpleDtoMapping;


    @ApiOperation(value = "计数器数据2", tags = {"计数器数据2" },  notes = "计数器数据2")
    @RequestMapping(method = RequestMethod.POST, value = "/counterdata2s")
    public ResponseEntity create() {
    }

    @ApiOperation(value = "计数器数据2", tags = {"计数器数据2" },  notes = "计数器数据2")
    @RequestMapping(method = RequestMethod.GET, value = "/counterdata2s/{counterData2Id}")
    public ResponseEntity get(@PathVariable("counterData2Id") String counterData2Id) {
    }

    @ApiOperation(value = "计数器数据2", tags = {"计数器数据2" },  notes = "计数器数据2")
    @RequestMapping(method = RequestMethod.DELETE, value = "/counterdata2s/{counterData2Id}")
    public ResponseEntity remove(@PathVariable("counterData2Id") String counterData2Id) {
    }

    @ApiOperation(value = "计数器数据2", tags = {"计数器数据2" },  notes = "计数器数据2")
    @RequestMapping(method = RequestMethod.PUT, value = "/counterdata2s/{counterData2Id}")
    public ResponseEntity update(@PathVariable("counterData2Id") String counterData2Id) {
    }

    @ApiOperation(value = "计数器数据2", tags = {"计数器数据2" },  notes = "计数器数据2")
    @RequestMapping(method = RequestMethod.POST, value = "/counterdata2s/checkkey")
    public ResponseEntity checkKey() {
    }

    @ApiOperation(value = "计数器数据2", tags = {"计数器数据2" },  notes = "计数器数据2")
    @RequestMapping(method = RequestMethod.GET, value = "/counterdata2s/getdraft")
    public ResponseEntity getDraft() {
    }

    @ApiOperation(value = "计数器数据2", tags = {"计数器数据2" },  notes = "计数器数据2")
    @RequestMapping(method = RequestMethod.POST, value = "/counterdata2s/{counterData2Id}/save")
    public ResponseEntity save(@PathVariable("counterData2Id") String counterData2Id) {
    }

    @ApiOperation(value = "计数器数据2", tags = {"计数器数据2" },  notes = "计数器数据2")
    @RequestMapping(method = RequestMethod.POST, value = "/counterdata2s/fetchdefault")
    public ResponseEntity fetchDefault() {
        Page<CounterData2> domains = counterData2Service.searchDefault() ;
            List<> list = Mapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "计数器数据2", tags = {"计数器数据2" },  notes = "计数器数据2")
    @RequestMapping(method = RequestMethod.POST, value = "/counterdata2s/select")
    public ResponseEntity select() {
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }


}
