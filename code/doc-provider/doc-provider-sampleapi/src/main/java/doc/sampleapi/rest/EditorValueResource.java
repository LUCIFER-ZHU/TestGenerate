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
import doc.core.sample.domain.EditorValue;
import doc.core.sample.service.IEditorValueService;
import doc.core.sample.filter.EditorValueSearchContext;
import cn.ibizlab.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"编辑器值" })
@RestController("sampleapi-editorvalue")
@RequestMapping("")
public class EditorValueResource {

    @Autowired
    public IEditorValueService editorValueService;

    @Autowired
    @Lazy
    public EditorValueDTOMapping editorValueDtoMapping;

    @Autowired
    @Lazy
    public EditorValueSimpleDTOMapping editorValueSimpleDtoMapping;


    @ApiOperation(value = "编辑器值", tags = {"编辑器值" },  notes = "编辑器值")
    @RequestMapping(method = RequestMethod.POST, value = "/editorvalues")
    public ResponseEntity create(@Validated @RequestBody EditorValueDTO editorValueDto) {
        EditorValue editorValue = editorValueDtoMapping.toDomain(editorValueDto);
        editorValueService.create(editorValue);
        return ResponseEntity.status(HttpStatus.OK).body(editorValueDtoMapping.toDto(editorValue));
    }

    @ApiOperation(value = "编辑器值", tags = {"编辑器值" },  notes = "编辑器值")
    @RequestMapping(method = RequestMethod.GET, value = "/editorvalues/{editorValueId}")
    public ResponseEntity getByEditorValueId(@PathVariable("editorValueId") String editorValueId) {
        EditorValue editorValue = editorValueService.get(editorValueId);
        return ResponseEntity.status(HttpStatus.OK).body(editorValueDtoMapping.toDto(editorValue));
    }

    @ApiOperation(value = "编辑器值", tags = {"编辑器值" },  notes = "编辑器值")
    @RequestMapping(method = RequestMethod.DELETE, value = "/editorvalues/{editorValueId}")
    public ResponseEntity removeByEditorValueId(@PathVariable("editorValueId") String editorValueId) {
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "编辑器值", tags = {"编辑器值" },  notes = "编辑器值")
    @RequestMapping(method = RequestMethod.PUT, value = "/editorvalues/{editorValueId}")
    public ResponseEntity updateByEditorValueId(@PathVariable("editorValueId") String editorValueId, @Validated @RequestBody EditorValueDTO editorValueDto) {
        EditorValue editorValue = editorValueDtoMapping.toDomain(editorValueDto);
        editorValue.setEditorValueId(editorValueId);
        editorValueService.update(editorValue);
        return ResponseEntity.status(HttpStatus.OK).body(editorValueDtoMapping.toDto(editorValue));
    }

    @ApiOperation(value = "编辑器值", tags = {"编辑器值" },  notes = "编辑器值")
    @RequestMapping(method = RequestMethod.POST, value = "/editorvalues/checkkey")
    public ResponseEntity checkKey(@Validated @RequestBody EditorValueDTO editorValueDto) {
        EditorValue editorValue = editorValueDtoMapping.toDomain(editorValueDto);
        editorValueService.checkKey(editorValue);
        return ResponseEntity.status(HttpStatus.OK).body(0);
    }

    @ApiOperation(value = "编辑器值", tags = {"编辑器值" },  notes = "编辑器值")
    @RequestMapping(method = RequestMethod.GET, value = "/editorvalues/getdraft")
    public ResponseEntity getDraft(@Validated @RequestBody EditorValueDTO editorValueDto) {
        EditorValue editorValue = editorValueDtoMapping.toDomain(editorValueDto);
        editorValueService.getDraft(editorValue);
        return ResponseEntity.status(HttpStatus.OK).body(editorValueDtoMapping.toDto(editorValue));
    }

    @ApiOperation(value = "编辑器值", tags = {"编辑器值" },  notes = "编辑器值")
    @RequestMapping(method = RequestMethod.POST, value = "/editorvalues/{editorValueId}/save")
    public ResponseEntity saveByEditorValueId(@PathVariable("editorValueId") String editorValueId, @Validated @RequestBody EditorValueDTO editorValueDto) {
        EditorValue editorValue = editorValueDtoMapping.toDomain(editorValueDto);
        editorValue.setEditorValueId(editorValueId);
        editorValueService.save(editorValue);
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "编辑器值", tags = {"编辑器值" },  notes = "编辑器值")
    @RequestMapping(method = RequestMethod.POST, value = "/editorvalues/fetchdefault")
    public ResponseEntity fetchDefault(@Validated @RequestBody EditorValueSearchContext editorValueSearchContext) {
        Page<EditorValue> domains = editorValueService.searchDefault(editorValueSearchContext) ;
            List<EditorValueDTO> list = editorValueDtoMapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(editorValueSearchContext.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(editorValueSearchContext.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "编辑器值", tags = {"编辑器值" },  notes = "编辑器值")
    @RequestMapping(method = RequestMethod.POST, value = "/editorvalues/select")
    public ResponseEntity select() {
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }

    @ApiOperation(value = "编辑器值", tags = {"编辑器值" },  notes = "编辑器值")
    @RequestMapping(method = RequestMethod.POST, value = "/customers/{customerId}/editorvalues")
    public ResponseEntity createByCustomerId(@PathVariable("customerId") String customerId, @Validated @RequestBody EditorValueDTO editorValueDto) {
        EditorValue editorValue = editorValueDtoMapping.toDomain(editorValueDto);
        editorValue.setCustomerId(customerId);
        editorValueService.create(editorValue);
        return ResponseEntity.status(HttpStatus.OK).body(editorValueDtoMapping.toDto(editorValue));
    }

    @ApiOperation(value = "编辑器值", tags = {"编辑器值" },  notes = "编辑器值")
    @RequestMapping(method = RequestMethod.GET, value = "/customers/{customerId}/editorvalues/{editorValueId}")
    public ResponseEntity getByCustomerIdAndEditorValueId(@PathVariable("customerId") String customerId, @PathVariable("editorValueId") String editorValueId) {
        EditorValue editorValue = editorValueService.get(editorValueId);
        return ResponseEntity.status(HttpStatus.OK).body(editorValueDtoMapping.toDto(editorValue));
    }

    @ApiOperation(value = "编辑器值", tags = {"编辑器值" },  notes = "编辑器值")
    @RequestMapping(method = RequestMethod.DELETE, value = "/customers/{customerId}/editorvalues/{editorValueId}")
    public ResponseEntity removeByCustomerIdAndEditorValueId(@PathVariable("customerId") String customerId, @PathVariable("editorValueId") String editorValueId) {
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "编辑器值", tags = {"编辑器值" },  notes = "编辑器值")
    @RequestMapping(method = RequestMethod.PUT, value = "/customers/{customerId}/editorvalues/{editorValueId}")
    public ResponseEntity updateByCustomerIdAndEditorValueId(@PathVariable("customerId") String customerId, @PathVariable("editorValueId") String editorValueId, @Validated @RequestBody EditorValueDTO editorValueDto) {
        EditorValue editorValue = editorValueDtoMapping.toDomain(editorValueDto);
        editorValue.setEditorValueId(editorValueId);
        editorValueService.update(editorValue);
        return ResponseEntity.status(HttpStatus.OK).body(editorValueDtoMapping.toDto(editorValue));
    }

    @ApiOperation(value = "编辑器值", tags = {"编辑器值" },  notes = "编辑器值")
    @RequestMapping(method = RequestMethod.POST, value = "/customers/{customerId}/editorvalues/checkkey")
    public ResponseEntity checkKeyByCustomerId(@PathVariable("customerId") String customerId, @Validated @RequestBody EditorValueDTO editorValueDto) {
        EditorValue editorValue = editorValueDtoMapping.toDomain(editorValueDto);
        editorValue.setCustomerId(customerId);
        editorValueService.checkKey(editorValue);
        return ResponseEntity.status(HttpStatus.OK).body(0);
    }

    @ApiOperation(value = "编辑器值", tags = {"编辑器值" },  notes = "编辑器值")
    @RequestMapping(method = RequestMethod.GET, value = "/customers/{customerId}/editorvalues/getdraft")
    public ResponseEntity getDraftByCustomerId(@PathVariable("customerId") String customerId, @Validated @RequestBody EditorValueDTO editorValueDto) {
        EditorValue editorValue = editorValueDtoMapping.toDomain(editorValueDto);
        editorValue.setCustomerId(customerId);
        editorValueService.getDraft(editorValue);
        return ResponseEntity.status(HttpStatus.OK).body(editorValueDtoMapping.toDto(editorValue));
    }

    @ApiOperation(value = "编辑器值", tags = {"编辑器值" },  notes = "编辑器值")
    @RequestMapping(method = RequestMethod.POST, value = "/customers/{customerId}/editorvalues/{editorValueId}/save")
    public ResponseEntity saveByCustomerIdAndEditorValueId(@PathVariable("customerId") String customerId, @PathVariable("editorValueId") String editorValueId, @Validated @RequestBody EditorValueDTO editorValueDto) {
        EditorValue editorValue = editorValueDtoMapping.toDomain(editorValueDto);
        editorValue.setEditorValueId(editorValueId);
        editorValueService.save(editorValue);
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "编辑器值", tags = {"编辑器值" },  notes = "编辑器值")
    @RequestMapping(method = RequestMethod.POST, value = "/customers/{customerId}/editorvalues/fetchdefault")
    public ResponseEntity fetchDefaultByCustomerId(@PathVariable("customerId") String customerId, @Validated @RequestBody EditorValueSearchContext editorValueSearchContext) {
        editorValueSearchContext.setCustomerIdEQ(customerId);
        Page<EditorValue> domains = editorValueService.searchDefault(editorValueSearchContext) ;
            List<EditorValueDTO> list = editorValueDtoMapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(editorValueSearchContext.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(editorValueSearchContext.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "编辑器值", tags = {"编辑器值" },  notes = "编辑器值")
    @RequestMapping(method = RequestMethod.POST, value = "/customers/{customerId}/editorvalues/select")
    public ResponseEntity selectByCustomerId(@PathVariable("customerId") String customerId) {
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }


}
