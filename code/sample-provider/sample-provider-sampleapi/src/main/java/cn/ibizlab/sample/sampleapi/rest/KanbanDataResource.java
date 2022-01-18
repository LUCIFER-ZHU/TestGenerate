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
import cn.ibizlab.sample.core.sample.domain.KanbanData;
import cn.ibizlab.sample.core.sample.service.IKanbanDataService;
import cn.ibizlab.sample.core.sample.filter.KanbanDataSearchContext;
import cn.ibizlab.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"看板数据" })
@RestController("sampleapi-kanbandata")
@RequestMapping("")
public class KanbanDataResource {

    @Autowired
    public IKanbanDataService kanbanDataService;

    @Autowired
    @Lazy
    public KanbanDataDTOMapping kanbanDataDtoMapping;

    @Autowired
    @Lazy
    public KanbanDataSimpleDTOMapping kanbanDataSimpleDtoMapping;


    @ApiOperation(value = "看板数据", tags = {"看板数据" },  notes = "看板数据")
    @RequestMapping(method = RequestMethod.POST, value = "/kanbandatas")
    public ResponseEntity create() {
    }

    @ApiOperation(value = "看板数据", tags = {"看板数据" },  notes = "看板数据")
    @RequestMapping(method = RequestMethod.GET, value = "/kanbandatas/{kanbanDataId}")
    public ResponseEntity getByKanbanDataId(@PathVariable("kanbanDataId") String kanbanDataId) {
    }

    @ApiOperation(value = "看板数据", tags = {"看板数据" },  notes = "看板数据")
    @RequestMapping(method = RequestMethod.DELETE, value = "/kanbandatas/{kanbanDataId}")
    public ResponseEntity removeByKanbanDataId(@PathVariable("kanbanDataId") String kanbanDataId) {
    }

    @ApiOperation(value = "看板数据", tags = {"看板数据" },  notes = "看板数据")
    @RequestMapping(method = RequestMethod.PUT, value = "/kanbandatas/{kanbanDataId}")
    public ResponseEntity updateByKanbanDataId(@PathVariable("kanbanDataId") String kanbanDataId) {
    }

    @ApiOperation(value = "看板数据", tags = {"看板数据" },  notes = "看板数据")
    @RequestMapping(method = RequestMethod.POST, value = "/kanbandatas/checkkey")
    public ResponseEntity checkKey() {
    }

    @ApiOperation(value = "看板数据", tags = {"看板数据" },  notes = "看板数据")
    @RequestMapping(method = RequestMethod.GET, value = "/kanbandatas/getdraft")
    public ResponseEntity getDraft() {
    }

    @ApiOperation(value = "看板数据", tags = {"看板数据" },  notes = "看板数据")
    @RequestMapping(method = RequestMethod.POST, value = "/kanbandatas/{kanbanDataId}/save")
    public ResponseEntity saveByKanbanDataId(@PathVariable("kanbanDataId") String kanbanDataId) {
    }

    @ApiOperation(value = "看板数据", tags = {"看板数据" },  notes = "看板数据")
    @RequestMapping(method = RequestMethod.POST, value = "/kanbandatas/fetchdefault")
    public ResponseEntity fetchDefault() {
        Page<KanbanData> domains = kanbanDataService.searchDefault() ;
            List<> list = Mapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "看板数据", tags = {"看板数据" },  notes = "看板数据")
    @RequestMapping(method = RequestMethod.POST, value = "/kanbandatas/select")
    public ResponseEntity select() {
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }


}
