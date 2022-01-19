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
import doc.core.sample.domain.Example;
import doc.core.sample.service.IExampleService;
import doc.core.sample.filter.ExampleSearchContext;
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
    public ResponseEntity create(@Validated @RequestBody ExampleDTO exampleDto) {
        Example example = exampleDtoMapping.toDomain(exampleDto);
        exampleService.create(example);
        return ResponseEntity.status(HttpStatus.OK).body(exampleDtoMapping.toDto(example));
    }

    @ApiOperation(value = "示例", tags = {"示例" },  notes = "示例")
    @RequestMapping(method = RequestMethod.GET, value = "/examples/{exampleId}")
    public ResponseEntity getByExampleId(@PathVariable("exampleId") String exampleId) {
        Example example = exampleService.get(exampleId);
        return ResponseEntity.status(HttpStatus.OK).body(exampleDtoMapping.toDto(example));
    }

    @ApiOperation(value = "示例", tags = {"示例" },  notes = "示例")
    @RequestMapping(method = RequestMethod.DELETE, value = "/examples/{exampleId}")
    public ResponseEntity removeByExampleId(@PathVariable("exampleId") String exampleId) {
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "示例", tags = {"示例" },  notes = "示例")
    @RequestMapping(method = RequestMethod.PUT, value = "/examples/{exampleId}")
    public ResponseEntity updateByExampleId(@PathVariable("exampleId") String exampleId, @Validated @RequestBody ExampleDTO exampleDto) {
        Example example = exampleDtoMapping.toDomain(exampleDto);
        example.setExampleId(exampleId);
        exampleService.update(example);
        return ResponseEntity.status(HttpStatus.OK).body(exampleDtoMapping.toDto(example));
    }

    @ApiOperation(value = "示例", tags = {"示例" },  notes = "示例")
    @RequestMapping(method = RequestMethod.POST, value = "/examples/checkkey")
    public ResponseEntity checkKey(@Validated @RequestBody ExampleDTO exampleDto) {
        Example example = exampleDtoMapping.toDomain(exampleDto);
        exampleService.checkKey(example);
        return ResponseEntity.status(HttpStatus.OK).body(0);
    }

    @ApiOperation(value = "示例", tags = {"示例" },  notes = "示例")
    @RequestMapping(method = RequestMethod.GET, value = "/examples/getdraft")
    public ResponseEntity getDraft(@Validated @RequestBody ExampleDTO exampleDto) {
        Example example = exampleDtoMapping.toDomain(exampleDto);
        exampleService.getDraft(example);
        return ResponseEntity.status(HttpStatus.OK).body(exampleDtoMapping.toDto(example));
    }

    @ApiOperation(value = "示例", tags = {"示例" },  notes = "示例")
    @RequestMapping(method = RequestMethod.POST, value = "/examples/{exampleId}/save")
    public ResponseEntity saveByExampleId(@PathVariable("exampleId") String exampleId, @Validated @RequestBody ExampleDTO exampleDto) {
        Example example = exampleDtoMapping.toDomain(exampleDto);
        example.setExampleId(exampleId);
        exampleService.save(example);
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "示例", tags = {"示例" },  notes = "示例")
    @RequestMapping(method = RequestMethod.POST, value = "/examples/fetchdefault")
    public ResponseEntity fetchDefault(@Validated @RequestBody ExampleSearchContext exampleSearchContext) {
        Page<Example> domains = exampleService.searchDefault(exampleSearchContext) ;
            List<ExampleDTO> list = exampleDtoMapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(exampleSearchContext.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(exampleSearchContext.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "示例", tags = {"示例" },  notes = "示例")
    @RequestMapping(method = RequestMethod.POST, value = "/examples/fetchempty")
    public ResponseEntity fetchEmpty(@Validated @RequestBody ExampleSearchContext exampleSearchContext) {
        Page<Example> domains = exampleService.searchEmpty(exampleSearchContext) ;
            List<ExampleDTO> list = exampleDtoMapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(exampleSearchContext.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(exampleSearchContext.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "示例", tags = {"示例" },  notes = "示例")
    @RequestMapping(method = RequestMethod.POST, value = "/examples/select")
    public ResponseEntity select() {
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }


}
