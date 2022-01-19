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
import doc.core.sample.domain.Example2;
import doc.core.sample.service.IExample2Service;
import doc.core.sample.filter.Example2SearchContext;
import cn.ibizlab.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"示例明细" })
@RestController("sampleapi-example2")
@RequestMapping("")
public class Example2Resource {

    @Autowired
    public IExample2Service example2Service;

    @Autowired
    @Lazy
    public Example2DTOMapping example2DtoMapping;

    @Autowired
    @Lazy
    public Example2SimpleDTOMapping example2SimpleDtoMapping;


    @ApiOperation(value = "示例明细", tags = {"示例明细" },  notes = "示例明细")
    @RequestMapping(method = RequestMethod.POST, value = "/example2s")
    public ResponseEntity create(@Validated @RequestBody Example2DTO example2Dto) {
        Example2 example2 = example2DtoMapping.toDomain(example2Dto);
        example2Service.create(example2);
        return ResponseEntity.status(HttpStatus.OK).body(example2DtoMapping.toDto(example2));
    }

    @ApiOperation(value = "示例明细", tags = {"示例明细" },  notes = "示例明细")
    @RequestMapping(method = RequestMethod.GET, value = "/example2s/{example2Id}")
    public ResponseEntity getByExample2Id(@PathVariable("example2Id") String example2Id) {
        Example2 example2 = example2Service.get(example2Id);
        return ResponseEntity.status(HttpStatus.OK).body(example2DtoMapping.toDto(example2));
    }

    @ApiOperation(value = "示例明细", tags = {"示例明细" },  notes = "示例明细")
    @RequestMapping(method = RequestMethod.DELETE, value = "/example2s/{example2Id}")
    public ResponseEntity removeByExample2Id(@PathVariable("example2Id") String example2Id) {
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "示例明细", tags = {"示例明细" },  notes = "示例明细")
    @RequestMapping(method = RequestMethod.PUT, value = "/example2s/{example2Id}")
    public ResponseEntity updateByExample2Id(@PathVariable("example2Id") String example2Id, @Validated @RequestBody Example2DTO example2Dto) {
        Example2 example2 = example2DtoMapping.toDomain(example2Dto);
        example2.setExample2Id(example2Id);
        example2Service.update(example2);
        return ResponseEntity.status(HttpStatus.OK).body(example2DtoMapping.toDto(example2));
    }

    @ApiOperation(value = "示例明细", tags = {"示例明细" },  notes = "示例明细")
    @RequestMapping(method = RequestMethod.POST, value = "/example2s/checkkey")
    public ResponseEntity checkKey(@Validated @RequestBody Example2DTO example2Dto) {
        Example2 example2 = example2DtoMapping.toDomain(example2Dto);
        example2Service.checkKey(example2);
        return ResponseEntity.status(HttpStatus.OK).body(0);
    }

    @ApiOperation(value = "示例明细", tags = {"示例明细" },  notes = "示例明细")
    @RequestMapping(method = RequestMethod.GET, value = "/example2s/getdraft")
    public ResponseEntity getDraft(@Validated @RequestBody Example2DTO example2Dto) {
        Example2 example2 = example2DtoMapping.toDomain(example2Dto);
        example2Service.getDraft(example2);
        return ResponseEntity.status(HttpStatus.OK).body(example2DtoMapping.toDto(example2));
    }

    @ApiOperation(value = "示例明细", tags = {"示例明细" },  notes = "示例明细")
    @RequestMapping(method = RequestMethod.POST, value = "/example2s/{example2Id}/save")
    public ResponseEntity saveByExample2Id(@PathVariable("example2Id") String example2Id, @Validated @RequestBody Example2DTO example2Dto) {
        Example2 example2 = example2DtoMapping.toDomain(example2Dto);
        example2.setExample2Id(example2Id);
        example2Service.save(example2);
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "示例明细", tags = {"示例明细" },  notes = "示例明细")
    @RequestMapping(method = RequestMethod.POST, value = "/example2s/fetchdefault")
    public ResponseEntity fetchDefault(@Validated @RequestBody Example2SearchContext example2SearchContext) {
        Page<Example2> domains = example2Service.searchDefault(example2SearchContext) ;
            List<Example2DTO> list = example2DtoMapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(example2SearchContext.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(example2SearchContext.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "示例明细", tags = {"示例明细" },  notes = "示例明细")
    @RequestMapping(method = RequestMethod.POST, value = "/example2s/select")
    public ResponseEntity select() {
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }

    @ApiOperation(value = "示例明细", tags = {"示例明细" },  notes = "示例明细")
    @RequestMapping(method = RequestMethod.POST, value = "/examples/{exampleId}/example2s")
    public ResponseEntity createByExampleId(@PathVariable("exampleId") String exampleId, @Validated @RequestBody Example2DTO example2Dto) {
        Example2 example2 = example2DtoMapping.toDomain(example2Dto);
        example2.setExampleId(exampleId);
        example2Service.create(example2);
        return ResponseEntity.status(HttpStatus.OK).body(example2DtoMapping.toDto(example2));
    }

    @ApiOperation(value = "示例明细", tags = {"示例明细" },  notes = "示例明细")
    @RequestMapping(method = RequestMethod.GET, value = "/examples/{exampleId}/example2s/{example2Id}")
    public ResponseEntity getByExampleIdAndExample2Id(@PathVariable("exampleId") String exampleId, @PathVariable("example2Id") String example2Id) {
        Example2 example2 = example2Service.get(example2Id);
        return ResponseEntity.status(HttpStatus.OK).body(example2DtoMapping.toDto(example2));
    }

    @ApiOperation(value = "示例明细", tags = {"示例明细" },  notes = "示例明细")
    @RequestMapping(method = RequestMethod.DELETE, value = "/examples/{exampleId}/example2s/{example2Id}")
    public ResponseEntity removeByExampleIdAndExample2Id(@PathVariable("exampleId") String exampleId, @PathVariable("example2Id") String example2Id) {
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "示例明细", tags = {"示例明细" },  notes = "示例明细")
    @RequestMapping(method = RequestMethod.PUT, value = "/examples/{exampleId}/example2s/{example2Id}")
    public ResponseEntity updateByExampleIdAndExample2Id(@PathVariable("exampleId") String exampleId, @PathVariable("example2Id") String example2Id, @Validated @RequestBody Example2DTO example2Dto) {
        Example2 example2 = example2DtoMapping.toDomain(example2Dto);
        example2.setExample2Id(example2Id);
        example2Service.update(example2);
        return ResponseEntity.status(HttpStatus.OK).body(example2DtoMapping.toDto(example2));
    }

    @ApiOperation(value = "示例明细", tags = {"示例明细" },  notes = "示例明细")
    @RequestMapping(method = RequestMethod.POST, value = "/examples/{exampleId}/example2s/checkkey")
    public ResponseEntity checkKeyByExampleId(@PathVariable("exampleId") String exampleId, @Validated @RequestBody Example2DTO example2Dto) {
        Example2 example2 = example2DtoMapping.toDomain(example2Dto);
        example2.setExampleId(exampleId);
        example2Service.checkKey(example2);
        return ResponseEntity.status(HttpStatus.OK).body(0);
    }

    @ApiOperation(value = "示例明细", tags = {"示例明细" },  notes = "示例明细")
    @RequestMapping(method = RequestMethod.GET, value = "/examples/{exampleId}/example2s/getdraft")
    public ResponseEntity getDraftByExampleId(@PathVariable("exampleId") String exampleId, @Validated @RequestBody Example2DTO example2Dto) {
        Example2 example2 = example2DtoMapping.toDomain(example2Dto);
        example2.setExampleId(exampleId);
        example2Service.getDraft(example2);
        return ResponseEntity.status(HttpStatus.OK).body(example2DtoMapping.toDto(example2));
    }

    @ApiOperation(value = "示例明细", tags = {"示例明细" },  notes = "示例明细")
    @RequestMapping(method = RequestMethod.POST, value = "/examples/{exampleId}/example2s/{example2Id}/save")
    public ResponseEntity saveByExampleIdAndExample2Id(@PathVariable("exampleId") String exampleId, @PathVariable("example2Id") String example2Id, @Validated @RequestBody Example2DTO example2Dto) {
        Example2 example2 = example2DtoMapping.toDomain(example2Dto);
        example2.setExample2Id(example2Id);
        example2Service.save(example2);
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "示例明细", tags = {"示例明细" },  notes = "示例明细")
    @RequestMapping(method = RequestMethod.POST, value = "/examples/{exampleId}/example2s/fetchdefault")
    public ResponseEntity fetchDefaultByExampleId(@PathVariable("exampleId") String exampleId, @Validated @RequestBody Example2SearchContext example2SearchContext) {
        example2SearchContext.setExampleIdEQ(exampleId);
        Page<Example2> domains = example2Service.searchDefault(example2SearchContext) ;
            List<Example2DTO> list = example2DtoMapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(example2SearchContext.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(example2SearchContext.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "示例明细", tags = {"示例明细" },  notes = "示例明细")
    @RequestMapping(method = RequestMethod.POST, value = "/examples/{exampleId}/example2s/select")
    public ResponseEntity selectByExampleId(@PathVariable("exampleId") String exampleId) {
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }


}
