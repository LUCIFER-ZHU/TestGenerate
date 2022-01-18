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
import cn.ibizlab.sample.core.sample.domain.Example;
import cn.ibizlab.sample.core.sample.service.IExampleService;
import cn.ibizlab.sample.core.sample.filter.ExampleSearchContext;
import cn.ibizlab.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"示例" })
@RestController("sampleapi-example")
@RequestMapping("")
public class ExampleResource {

    @Autowired
    public IExampleService exampleService;

    @Autowired
    @Lazy
    public ExampleDTOMapping exampleDtoMapping;

    @Autowired
    @Lazy
    public ExampleSimpleDTOMapping exampleSimpleDtoMapping;


    @ApiOperation(value = "示例", tags = {"示例" },  notes = "示例")
    @RequestMapping(method = RequestMethod.POST, value = "/examples")
    public ResponseEntity create() {
    }

    @ApiOperation(value = "示例", tags = {"示例" },  notes = "示例")
    @RequestMapping(method = RequestMethod.GET, value = "/examples/{exampleId}")
    public ResponseEntity getByExampleId(@PathVariable("exampleId") String exampleId) {
    }

    @ApiOperation(value = "示例", tags = {"示例" },  notes = "示例")
    @RequestMapping(method = RequestMethod.DELETE, value = "/examples/{exampleId}")
    public ResponseEntity removeByExampleId(@PathVariable("exampleId") String exampleId) {
    }

    @ApiOperation(value = "示例", tags = {"示例" },  notes = "示例")
    @RequestMapping(method = RequestMethod.PUT, value = "/examples/{exampleId}")
    public ResponseEntity updateByExampleId(@PathVariable("exampleId") String exampleId) {
    }

    @ApiOperation(value = "示例", tags = {"示例" },  notes = "示例")
    @RequestMapping(method = RequestMethod.POST, value = "/examples/checkkey")
    public ResponseEntity checkKey() {
    }

    @ApiOperation(value = "示例", tags = {"示例" },  notes = "示例")
    @RequestMapping(method = RequestMethod.GET, value = "/examples/getdraft")
    public ResponseEntity getDraft() {
    }

    @ApiOperation(value = "示例", tags = {"示例" },  notes = "示例")
    @RequestMapping(method = RequestMethod.POST, value = "/examples/{exampleId}/save")
    public ResponseEntity saveByExampleId(@PathVariable("exampleId") String exampleId) {
    }

    @ApiOperation(value = "示例", tags = {"示例" },  notes = "示例")
    @RequestMapping(method = RequestMethod.POST, value = "/examples/fetchdefault")
    public ResponseEntity fetchDefault() {
        Page<Example> domains = exampleService.searchDefault() ;
            List<> list = Mapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "示例", tags = {"示例" },  notes = "示例")
    @RequestMapping(method = RequestMethod.POST, value = "/examples/fetchempty")
    public ResponseEntity fetchEmpty() {
        Page<Example> domains = exampleService.searchEmpty() ;
            List<> list = Mapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "示例", tags = {"示例" },  notes = "示例")
    @RequestMapping(method = RequestMethod.POST, value = "/examples/select")
    public ResponseEntity select() {
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }


}
