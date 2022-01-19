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
import doc.core.sample.domain.LogicValidData;
import doc.core.sample.service.ILogicValidDataService;
import doc.core.sample.filter.LogicValidDataSearchContext;
import cn.ibizlab.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"示例数据（启用逻辑删除）" })
@RestController("sampleapi-logicvaliddata")
@RequestMapping("")
public class LogicValidDataResource {

    @Autowired
    public ILogicValidDataService logicValidDataService;

    @Autowired
    @Lazy
    public LogicValidDataDTOMapping logicValidDataDtoMapping;

    @Autowired
    @Lazy
    public LogicValidDataSimpleDTOMapping logicValidDataSimpleDtoMapping;


    @ApiOperation(value = "示例数据（启用逻辑删除）", tags = {"示例数据（启用逻辑删除）" },  notes = "示例数据（启用逻辑删除）")
    @RequestMapping(method = RequestMethod.POST, value = "/logicvaliddatas")
    public ResponseEntity create(@Validated @RequestBody LogicValidDataDTO logicValidDataDto) {
        LogicValidData logicValidData = logicValidDataDtoMapping.toDomain(logicValidDataDto);
        logicValidDataService.create(logicValidData);
        return ResponseEntity.status(HttpStatus.OK).body(logicValidDataDtoMapping.toDto(logicValidData));
    }

    @ApiOperation(value = "示例数据（启用逻辑删除）", tags = {"示例数据（启用逻辑删除）" },  notes = "示例数据（启用逻辑删除）")
    @RequestMapping(method = RequestMethod.GET, value = "/logicvaliddatas/{logicValidDataId}")
    public ResponseEntity getByLogicValidDataId(@PathVariable("logicValidDataId") String logicValidDataId) {
        LogicValidData logicValidData = logicValidDataService.get(logicValidDataId);
        return ResponseEntity.status(HttpStatus.OK).body(logicValidDataDtoMapping.toDto(logicValidData));
    }

    @ApiOperation(value = "示例数据（启用逻辑删除）", tags = {"示例数据（启用逻辑删除）" },  notes = "示例数据（启用逻辑删除）")
    @RequestMapping(method = RequestMethod.DELETE, value = "/logicvaliddatas/{logicValidDataId}")
    public ResponseEntity removeByLogicValidDataId(@PathVariable("logicValidDataId") String logicValidDataId) {
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "示例数据（启用逻辑删除）", tags = {"示例数据（启用逻辑删除）" },  notes = "示例数据（启用逻辑删除）")
    @RequestMapping(method = RequestMethod.PUT, value = "/logicvaliddatas/{logicValidDataId}")
    public ResponseEntity updateByLogicValidDataId(@PathVariable("logicValidDataId") String logicValidDataId, @Validated @RequestBody LogicValidDataDTO logicValidDataDto) {
        LogicValidData logicValidData = logicValidDataDtoMapping.toDomain(logicValidDataDto);
        logicValidData.setLogicValidDataId(logicValidDataId);
        logicValidDataService.update(logicValidData);
        return ResponseEntity.status(HttpStatus.OK).body(logicValidDataDtoMapping.toDto(logicValidData));
    }

    @ApiOperation(value = "示例数据（启用逻辑删除）", tags = {"示例数据（启用逻辑删除）" },  notes = "示例数据（启用逻辑删除）")
    @RequestMapping(method = RequestMethod.POST, value = "/logicvaliddatas/checkkey")
    public ResponseEntity checkKey(@Validated @RequestBody LogicValidDataDTO logicValidDataDto) {
        LogicValidData logicValidData = logicValidDataDtoMapping.toDomain(logicValidDataDto);
        logicValidDataService.checkKey(logicValidData);
        return ResponseEntity.status(HttpStatus.OK).body(0);
    }

    @ApiOperation(value = "示例数据（启用逻辑删除）", tags = {"示例数据（启用逻辑删除）" },  notes = "示例数据（启用逻辑删除）")
    @RequestMapping(method = RequestMethod.GET, value = "/logicvaliddatas/getdraft")
    public ResponseEntity getDraft(@Validated @RequestBody LogicValidDataDTO logicValidDataDto) {
        LogicValidData logicValidData = logicValidDataDtoMapping.toDomain(logicValidDataDto);
        logicValidDataService.getDraft(logicValidData);
        return ResponseEntity.status(HttpStatus.OK).body(logicValidDataDtoMapping.toDto(logicValidData));
    }

    @ApiOperation(value = "示例数据（启用逻辑删除）", tags = {"示例数据（启用逻辑删除）" },  notes = "示例数据（启用逻辑删除）")
    @RequestMapping(method = RequestMethod.POST, value = "/logicvaliddatas/{logicValidDataId}/save")
    public ResponseEntity saveByLogicValidDataId(@PathVariable("logicValidDataId") String logicValidDataId, @Validated @RequestBody LogicValidDataDTO logicValidDataDto) {
        LogicValidData logicValidData = logicValidDataDtoMapping.toDomain(logicValidDataDto);
        logicValidData.setLogicValidDataId(logicValidDataId);
        logicValidDataService.save(logicValidData);
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "示例数据（启用逻辑删除）", tags = {"示例数据（启用逻辑删除）" },  notes = "示例数据（启用逻辑删除）")
    @RequestMapping(method = RequestMethod.POST, value = "/logicvaliddatas/fetchdefault")
    public ResponseEntity fetchDefault(@Validated @RequestBody LogicValidDataSearchContext logicValidDataSearchContext) {
        Page<LogicValidData> domains = logicValidDataService.searchDefault(logicValidDataSearchContext) ;
            List<LogicValidDataDTO> list = logicValidDataDtoMapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(logicValidDataSearchContext.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(logicValidDataSearchContext.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "示例数据（启用逻辑删除）", tags = {"示例数据（启用逻辑删除）" },  notes = "示例数据（启用逻辑删除）")
    @RequestMapping(method = RequestMethod.POST, value = "/logicvaliddatas/select")
    public ResponseEntity select() {
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }


}
