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
import cn.ibizlab.sample.core.sample.domain.EditorValue;
import cn.ibizlab.sample.core.sample.service.IEditorValueService;
import cn.ibizlab.sample.core.sample.filter.EditorValueSearchContext;
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
    public ResponseEntity create() {
    }

    @ApiOperation(value = "编辑器值", tags = {"编辑器值" },  notes = "编辑器值")
    @RequestMapping(method = RequestMethod.GET, value = "/editorvalues/{editorValueId}")
    public ResponseEntity getByEditorValueId(@PathVariable("editorValueId") String editorValueId) {
    }

    @ApiOperation(value = "编辑器值", tags = {"编辑器值" },  notes = "编辑器值")
    @RequestMapping(method = RequestMethod.DELETE, value = "/editorvalues/{editorValueId}")
    public ResponseEntity removeByEditorValueId(@PathVariable("editorValueId") String editorValueId) {
    }

    @ApiOperation(value = "编辑器值", tags = {"编辑器值" },  notes = "编辑器值")
    @RequestMapping(method = RequestMethod.PUT, value = "/editorvalues/{editorValueId}")
    public ResponseEntity updateByEditorValueId(@PathVariable("editorValueId") String editorValueId) {
    }

    @ApiOperation(value = "编辑器值", tags = {"编辑器值" },  notes = "编辑器值")
    @RequestMapping(method = RequestMethod.POST, value = "/editorvalues/checkkey")
    public ResponseEntity checkKey() {
    }

    @ApiOperation(value = "编辑器值", tags = {"编辑器值" },  notes = "编辑器值")
    @RequestMapping(method = RequestMethod.GET, value = "/editorvalues/getdraft")
    public ResponseEntity getDraft() {
    }

    @ApiOperation(value = "编辑器值", tags = {"编辑器值" },  notes = "编辑器值")
    @RequestMapping(method = RequestMethod.POST, value = "/editorvalues/{editorValueId}/save")
    public ResponseEntity saveByEditorValueId(@PathVariable("editorValueId") String editorValueId) {
    }

    @ApiOperation(value = "编辑器值", tags = {"编辑器值" },  notes = "编辑器值")
    @RequestMapping(method = RequestMethod.POST, value = "/editorvalues/fetchdefault")
    public ResponseEntity fetchDefault() {
        Page<EditorValue> domains = editorValueService.searchDefault() ;
            List<> list = Mapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "编辑器值", tags = {"编辑器值" },  notes = "编辑器值")
    @RequestMapping(method = RequestMethod.POST, value = "/editorvalues/select")
    public ResponseEntity select() {
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }


}
