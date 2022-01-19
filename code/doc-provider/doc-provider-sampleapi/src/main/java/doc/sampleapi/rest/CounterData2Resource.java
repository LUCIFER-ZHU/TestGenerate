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
import doc.core.sample.domain.CounterData2;
import doc.core.sample.service.ICounterData2Service;
import doc.core.sample.filter.CounterData2SearchContext;
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
    public ResponseEntity create(@Validated @RequestBody CounterData2DTO counterData2Dto) {
        CounterData2 counterData2 = counterData2DtoMapping.toDomain(counterData2Dto);
        counterData2Service.create(counterData2);
        return ResponseEntity.status(HttpStatus.OK).body(counterData2DtoMapping.toDto(counterData2));
    }

    @ApiOperation(value = "计数器数据2", tags = {"计数器数据2" },  notes = "计数器数据2")
    @RequestMapping(method = RequestMethod.GET, value = "/counterdata2s/{counterData2Id}")
    public ResponseEntity getByCounterData2Id(@PathVariable("counterData2Id") String counterData2Id) {
        CounterData2 counterData2 = counterData2Service.get(counterData2Id);
        return ResponseEntity.status(HttpStatus.OK).body(counterData2DtoMapping.toDto(counterData2));
    }

    @ApiOperation(value = "计数器数据2", tags = {"计数器数据2" },  notes = "计数器数据2")
    @RequestMapping(method = RequestMethod.DELETE, value = "/counterdata2s/{counterData2Id}")
    public ResponseEntity removeByCounterData2Id(@PathVariable("counterData2Id") String counterData2Id) {
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "计数器数据2", tags = {"计数器数据2" },  notes = "计数器数据2")
    @RequestMapping(method = RequestMethod.PUT, value = "/counterdata2s/{counterData2Id}")
    public ResponseEntity updateByCounterData2Id(@PathVariable("counterData2Id") String counterData2Id, @Validated @RequestBody CounterData2DTO counterData2Dto) {
        CounterData2 counterData2 = counterData2DtoMapping.toDomain(counterData2Dto);
        counterData2.setCounterData2Id(counterData2Id);
        counterData2Service.update(counterData2);
        return ResponseEntity.status(HttpStatus.OK).body(counterData2DtoMapping.toDto(counterData2));
    }

    @ApiOperation(value = "计数器数据2", tags = {"计数器数据2" },  notes = "计数器数据2")
    @RequestMapping(method = RequestMethod.POST, value = "/counterdata2s/checkkey")
    public ResponseEntity checkKey(@Validated @RequestBody CounterData2DTO counterData2Dto) {
        CounterData2 counterData2 = counterData2DtoMapping.toDomain(counterData2Dto);
        counterData2Service.checkKey(counterData2);
        return ResponseEntity.status(HttpStatus.OK).body(0);
    }

    @ApiOperation(value = "计数器数据2", tags = {"计数器数据2" },  notes = "计数器数据2")
    @RequestMapping(method = RequestMethod.GET, value = "/counterdata2s/getdraft")
    public ResponseEntity getDraft(@Validated @RequestBody CounterData2DTO counterData2Dto) {
        CounterData2 counterData2 = counterData2DtoMapping.toDomain(counterData2Dto);
        counterData2Service.getDraft(counterData2);
        return ResponseEntity.status(HttpStatus.OK).body(counterData2DtoMapping.toDto(counterData2));
    }

    @ApiOperation(value = "计数器数据2", tags = {"计数器数据2" },  notes = "计数器数据2")
    @RequestMapping(method = RequestMethod.POST, value = "/counterdata2s/{counterData2Id}/save")
    public ResponseEntity saveByCounterData2Id(@PathVariable("counterData2Id") String counterData2Id, @Validated @RequestBody CounterData2DTO counterData2Dto) {
        CounterData2 counterData2 = counterData2DtoMapping.toDomain(counterData2Dto);
        counterData2.setCounterData2Id(counterData2Id);
        counterData2Service.save(counterData2);
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "计数器数据2", tags = {"计数器数据2" },  notes = "计数器数据2")
    @RequestMapping(method = RequestMethod.POST, value = "/counterdata2s/fetchdefault")
    public ResponseEntity fetchDefault(@Validated @RequestBody CounterData2SearchContext counterData2SearchContext) {
        Page<CounterData2> domains = counterData2Service.searchDefault(counterData2SearchContext) ;
            List<CounterData2DTO> list = counterData2DtoMapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(counterData2SearchContext.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(counterData2SearchContext.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "计数器数据2", tags = {"计数器数据2" },  notes = "计数器数据2")
    @RequestMapping(method = RequestMethod.POST, value = "/counterdata2s/select")
    public ResponseEntity select() {
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }


}
