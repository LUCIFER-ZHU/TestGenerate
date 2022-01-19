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
import doc.core.sample.domain.LogicValidData2;
import doc.core.sample.service.ILogicValidData2Service;
import doc.core.sample.filter.LogicValidData2SearchContext;
import cn.ibizlab.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"示例数据（启用逻辑删除）（主键数值）" })
@RestController("sampleapi-logicvaliddata2")
@RequestMapping("")
public class LogicValidData2Resource {

    @Autowired
    public ILogicValidData2Service logicValidData2Service;

    @Autowired
    @Lazy
    public LogicValidData2DTOMapping logicValidData2DtoMapping;

    @Autowired
    @Lazy
    public LogicValidData2SimpleDTOMapping logicValidData2SimpleDtoMapping;


    @ApiOperation(value = "示例数据（启用逻辑删除）（主键数值）", tags = {"示例数据（启用逻辑删除）（主键数值）" },  notes = "示例数据（启用逻辑删除）（主键数值）")
    @RequestMapping(method = RequestMethod.POST, value = "/logicvaliddata2s")
    public ResponseEntity create(@Validated @RequestBody LogicValidData2DTO logicValidData2Dto) {
        LogicValidData2 logicValidData2 = logicValidData2DtoMapping.toDomain(logicValidData2Dto);
        logicValidData2Service.create(logicValidData2);
        return ResponseEntity.status(HttpStatus.OK).body(logicValidData2DtoMapping.toDto(logicValidData2));
    }

    @ApiOperation(value = "示例数据（启用逻辑删除）（主键数值）", tags = {"示例数据（启用逻辑删除）（主键数值）" },  notes = "示例数据（启用逻辑删除）（主键数值）")
    @RequestMapping(method = RequestMethod.GET, value = "/logicvaliddata2s/{logicValidData2Id}")
    public ResponseEntity getByLogicValidData2Id(@PathVariable("logicValidData2Id") Long logicValidData2Id) {
        LogicValidData2 logicValidData2 = logicValidData2Service.get(logicValidData2Id);
        return ResponseEntity.status(HttpStatus.OK).body(logicValidData2DtoMapping.toDto(logicValidData2));
    }

    @ApiOperation(value = "示例数据（启用逻辑删除）（主键数值）", tags = {"示例数据（启用逻辑删除）（主键数值）" },  notes = "示例数据（启用逻辑删除）（主键数值）")
    @RequestMapping(method = RequestMethod.DELETE, value = "/logicvaliddata2s/{logicValidData2Id}")
    public ResponseEntity removeByLogicValidData2Id(@PathVariable("logicValidData2Id") Long logicValidData2Id) {
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "示例数据（启用逻辑删除）（主键数值）", tags = {"示例数据（启用逻辑删除）（主键数值）" },  notes = "示例数据（启用逻辑删除）（主键数值）")
    @RequestMapping(method = RequestMethod.PUT, value = "/logicvaliddata2s/{logicValidData2Id}")
    public ResponseEntity updateByLogicValidData2Id(@PathVariable("logicValidData2Id") Long logicValidData2Id, @Validated @RequestBody LogicValidData2DTO logicValidData2Dto) {
        LogicValidData2 logicValidData2 = logicValidData2DtoMapping.toDomain(logicValidData2Dto);
        logicValidData2.setLogicValidData2Id(logicValidData2Id);
        logicValidData2Service.update(logicValidData2);
        return ResponseEntity.status(HttpStatus.OK).body(logicValidData2DtoMapping.toDto(logicValidData2));
    }

    @ApiOperation(value = "示例数据（启用逻辑删除）（主键数值）", tags = {"示例数据（启用逻辑删除）（主键数值）" },  notes = "示例数据（启用逻辑删除）（主键数值）")
    @RequestMapping(method = RequestMethod.POST, value = "/logicvaliddata2s/checkkey")
    public ResponseEntity checkKey(@Validated @RequestBody LogicValidData2DTO logicValidData2Dto) {
        LogicValidData2 logicValidData2 = logicValidData2DtoMapping.toDomain(logicValidData2Dto);
        logicValidData2Service.checkKey(logicValidData2);
        return ResponseEntity.status(HttpStatus.OK).body(0);
    }

    @ApiOperation(value = "示例数据（启用逻辑删除）（主键数值）", tags = {"示例数据（启用逻辑删除）（主键数值）" },  notes = "示例数据（启用逻辑删除）（主键数值）")
    @RequestMapping(method = RequestMethod.GET, value = "/logicvaliddata2s/getdraft")
    public ResponseEntity getDraft(@Validated @RequestBody LogicValidData2DTO logicValidData2Dto) {
        LogicValidData2 logicValidData2 = logicValidData2DtoMapping.toDomain(logicValidData2Dto);
        logicValidData2Service.getDraft(logicValidData2);
        return ResponseEntity.status(HttpStatus.OK).body(logicValidData2DtoMapping.toDto(logicValidData2));
    }

    @ApiOperation(value = "示例数据（启用逻辑删除）（主键数值）", tags = {"示例数据（启用逻辑删除）（主键数值）" },  notes = "示例数据（启用逻辑删除）（主键数值）")
    @RequestMapping(method = RequestMethod.POST, value = "/logicvaliddata2s/{logicValidData2Id}/save")
    public ResponseEntity saveByLogicValidData2Id(@PathVariable("logicValidData2Id") Long logicValidData2Id, @Validated @RequestBody LogicValidData2DTO logicValidData2Dto) {
        LogicValidData2 logicValidData2 = logicValidData2DtoMapping.toDomain(logicValidData2Dto);
        logicValidData2.setLogicValidData2Id(logicValidData2Id);
        logicValidData2Service.save(logicValidData2);
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "示例数据（启用逻辑删除）（主键数值）", tags = {"示例数据（启用逻辑删除）（主键数值）" },  notes = "示例数据（启用逻辑删除）（主键数值）")
    @RequestMapping(method = RequestMethod.POST, value = "/logicvaliddata2s/fetchdefault")
    public ResponseEntity fetchDefault(@Validated @RequestBody LogicValidData2SearchContext logicValidData2SearchContext) {
        Page<LogicValidData2> domains = logicValidData2Service.searchDefault(logicValidData2SearchContext) ;
            List<LogicValidData2DTO> list = logicValidData2DtoMapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(logicValidData2SearchContext.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(logicValidData2SearchContext.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "示例数据（启用逻辑删除）（主键数值）", tags = {"示例数据（启用逻辑删除）（主键数值）" },  notes = "示例数据（启用逻辑删除）（主键数值）")
    @RequestMapping(method = RequestMethod.POST, value = "/logicvaliddata2s/select")
    public ResponseEntity select() {
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }


}
