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
import cn.ibizlab.sample.core.sample.domain.LogicValidData2;
import cn.ibizlab.sample.core.sample.service.ILogicValidData2Service;
import cn.ibizlab.sample.core.sample.filter.LogicValidData2SearchContext;
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
    public ResponseEntity create() {
    }

    @ApiOperation(value = "示例数据（启用逻辑删除）（主键数值）", tags = {"示例数据（启用逻辑删除）（主键数值）" },  notes = "示例数据（启用逻辑删除）（主键数值）")
    @RequestMapping(method = RequestMethod.GET, value = "/logicvaliddata2s/{logicValidData2Id}")
    public ResponseEntity get(@PathVariable("logicValidData2Id") Long logicValidData2Id) {
    }

    @ApiOperation(value = "示例数据（启用逻辑删除）（主键数值）", tags = {"示例数据（启用逻辑删除）（主键数值）" },  notes = "示例数据（启用逻辑删除）（主键数值）")
    @RequestMapping(method = RequestMethod.DELETE, value = "/logicvaliddata2s/{logicValidData2Id}")
    public ResponseEntity remove(@PathVariable("logicValidData2Id") Long logicValidData2Id) {
    }

    @ApiOperation(value = "示例数据（启用逻辑删除）（主键数值）", tags = {"示例数据（启用逻辑删除）（主键数值）" },  notes = "示例数据（启用逻辑删除）（主键数值）")
    @RequestMapping(method = RequestMethod.PUT, value = "/logicvaliddata2s/{logicValidData2Id}")
    public ResponseEntity update(@PathVariable("logicValidData2Id") Long logicValidData2Id) {
    }

    @ApiOperation(value = "示例数据（启用逻辑删除）（主键数值）", tags = {"示例数据（启用逻辑删除）（主键数值）" },  notes = "示例数据（启用逻辑删除）（主键数值）")
    @RequestMapping(method = RequestMethod.POST, value = "/logicvaliddata2s/checkkey")
    public ResponseEntity checkKey() {
    }

    @ApiOperation(value = "示例数据（启用逻辑删除）（主键数值）", tags = {"示例数据（启用逻辑删除）（主键数值）" },  notes = "示例数据（启用逻辑删除）（主键数值）")
    @RequestMapping(method = RequestMethod.GET, value = "/logicvaliddata2s/getdraft")
    public ResponseEntity getDraft() {
    }

    @ApiOperation(value = "示例数据（启用逻辑删除）（主键数值）", tags = {"示例数据（启用逻辑删除）（主键数值）" },  notes = "示例数据（启用逻辑删除）（主键数值）")
    @RequestMapping(method = RequestMethod.POST, value = "/logicvaliddata2s/{logicValidData2Id}/save")
    public ResponseEntity save(@PathVariable("logicValidData2Id") Long logicValidData2Id) {
    }

    @ApiOperation(value = "示例数据（启用逻辑删除）（主键数值）", tags = {"示例数据（启用逻辑删除）（主键数值）" },  notes = "示例数据（启用逻辑删除）（主键数值）")
    @RequestMapping(method = RequestMethod.POST, value = "/logicvaliddata2s/fetchdefault")
    public ResponseEntity fetchDefault() {
        Page<LogicValidData2> domains = logicValidData2Service.searchDefault() ;
            List<> list = Mapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "示例数据（启用逻辑删除）（主键数值）", tags = {"示例数据（启用逻辑删除）（主键数值）" },  notes = "示例数据（启用逻辑删除）（主键数值）")
    @RequestMapping(method = RequestMethod.POST, value = "/logicvaliddata2s/select")
    public ResponseEntity select() {
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }


}
