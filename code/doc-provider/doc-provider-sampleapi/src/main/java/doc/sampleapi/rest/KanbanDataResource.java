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
import doc.core.sample.domain.KanbanData;
import doc.core.sample.service.IKanbanDataService;
import doc.core.sample.filter.KanbanDataSearchContext;
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
    public ResponseEntity create(@Validated @RequestBody KanbanDataDTO kanbanDataDto) {
        KanbanData kanbanData = kanbanDataDtoMapping.toDomain(kanbanDataDto);
        kanbanDataService.create(kanbanData);
        return ResponseEntity.status(HttpStatus.OK).body(kanbanDataDtoMapping.toDto(kanbanData));
    }

    @ApiOperation(value = "看板数据", tags = {"看板数据" },  notes = "看板数据")
    @RequestMapping(method = RequestMethod.GET, value = "/kanbandatas/{kanbanDataId}")
    public ResponseEntity getByKanbanDataId(@PathVariable("kanbanDataId") String kanbanDataId) {
        KanbanData kanbanData = kanbanDataService.get(kanbanDataId);
        return ResponseEntity.status(HttpStatus.OK).body(kanbanDataDtoMapping.toDto(kanbanData));
    }

    @ApiOperation(value = "看板数据", tags = {"看板数据" },  notes = "看板数据")
    @RequestMapping(method = RequestMethod.DELETE, value = "/kanbandatas/{kanbanDataId}")
    public ResponseEntity removeByKanbanDataId(@PathVariable("kanbanDataId") String kanbanDataId) {
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "看板数据", tags = {"看板数据" },  notes = "看板数据")
    @RequestMapping(method = RequestMethod.PUT, value = "/kanbandatas/{kanbanDataId}")
    public ResponseEntity updateByKanbanDataId(@PathVariable("kanbanDataId") String kanbanDataId, @Validated @RequestBody KanbanDataDTO kanbanDataDto) {
        KanbanData kanbanData = kanbanDataDtoMapping.toDomain(kanbanDataDto);
        kanbanData.setKanbanDataId(kanbanDataId);
        kanbanDataService.update(kanbanData);
        return ResponseEntity.status(HttpStatus.OK).body(kanbanDataDtoMapping.toDto(kanbanData));
    }

    @ApiOperation(value = "看板数据", tags = {"看板数据" },  notes = "看板数据")
    @RequestMapping(method = RequestMethod.POST, value = "/kanbandatas/checkkey")
    public ResponseEntity checkKey(@Validated @RequestBody KanbanDataDTO kanbanDataDto) {
        KanbanData kanbanData = kanbanDataDtoMapping.toDomain(kanbanDataDto);
        kanbanDataService.checkKey(kanbanData);
        return ResponseEntity.status(HttpStatus.OK).body(0);
    }

    @ApiOperation(value = "看板数据", tags = {"看板数据" },  notes = "看板数据")
    @RequestMapping(method = RequestMethod.GET, value = "/kanbandatas/getdraft")
    public ResponseEntity getDraft(@Validated @RequestBody KanbanDataDTO kanbanDataDto) {
        KanbanData kanbanData = kanbanDataDtoMapping.toDomain(kanbanDataDto);
        kanbanDataService.getDraft(kanbanData);
        return ResponseEntity.status(HttpStatus.OK).body(kanbanDataDtoMapping.toDto(kanbanData));
    }

    @ApiOperation(value = "看板数据", tags = {"看板数据" },  notes = "看板数据")
    @RequestMapping(method = RequestMethod.POST, value = "/kanbandatas/{kanbanDataId}/save")
    public ResponseEntity saveByKanbanDataId(@PathVariable("kanbanDataId") String kanbanDataId, @Validated @RequestBody KanbanDataDTO kanbanDataDto) {
        KanbanData kanbanData = kanbanDataDtoMapping.toDomain(kanbanDataDto);
        kanbanData.setKanbanDataId(kanbanDataId);
        kanbanDataService.save(kanbanData);
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "看板数据", tags = {"看板数据" },  notes = "看板数据")
    @RequestMapping(method = RequestMethod.POST, value = "/kanbandatas/fetchdefault")
    public ResponseEntity fetchDefault(@Validated @RequestBody KanbanDataSearchContext kanbanDataSearchContext) {
        Page<KanbanData> domains = kanbanDataService.searchDefault(kanbanDataSearchContext) ;
            List<KanbanDataDTO> list = kanbanDataDtoMapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(kanbanDataSearchContext.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(kanbanDataSearchContext.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "看板数据", tags = {"看板数据" },  notes = "看板数据")
    @RequestMapping(method = RequestMethod.POST, value = "/kanbandatas/select")
    public ResponseEntity select() {
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }


}
