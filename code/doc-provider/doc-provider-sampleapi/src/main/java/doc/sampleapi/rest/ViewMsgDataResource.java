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
import doc.core.sample.domain.ViewMsgData;
import doc.core.sample.service.IViewMsgDataService;
import doc.core.sample.filter.ViewMsgDataSearchContext;
import cn.ibizlab.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"视图消息数据" })
@RestController("sampleapi-viewmsgdata")
@RequestMapping("")
public class ViewMsgDataResource {

    @Autowired
    public IViewMsgDataService viewMsgDataService;

    @Autowired
    @Lazy
    public ViewMsgDataDTOMapping viewMsgDataDtoMapping;

    @Autowired
    @Lazy
    public ViewMsgDataSimpleDTOMapping viewMsgDataSimpleDtoMapping;


    @ApiOperation(value = "视图消息数据", tags = {"视图消息数据" },  notes = "视图消息数据")
    @RequestMapping(method = RequestMethod.POST, value = "/viewmsgdatas")
    public ResponseEntity create(@Validated @RequestBody ViewMsgDataDTO viewMsgDataDto) {
        ViewMsgData viewMsgData = viewMsgDataDtoMapping.toDomain(viewMsgDataDto);
        viewMsgDataService.create(viewMsgData);
        return ResponseEntity.status(HttpStatus.OK).body(viewMsgDataDtoMapping.toDto(viewMsgData));
    }

    @ApiOperation(value = "视图消息数据", tags = {"视图消息数据" },  notes = "视图消息数据")
    @RequestMapping(method = RequestMethod.GET, value = "/viewmsgdatas/{viewMsgDataId}")
    public ResponseEntity getByViewMsgDataId(@PathVariable("viewMsgDataId") String viewMsgDataId) {
        ViewMsgData viewMsgData = viewMsgDataService.get(viewMsgDataId);
        return ResponseEntity.status(HttpStatus.OK).body(viewMsgDataDtoMapping.toDto(viewMsgData));
    }

    @ApiOperation(value = "视图消息数据", tags = {"视图消息数据" },  notes = "视图消息数据")
    @RequestMapping(method = RequestMethod.DELETE, value = "/viewmsgdatas/{viewMsgDataId}")
    public ResponseEntity removeByViewMsgDataId(@PathVariable("viewMsgDataId") String viewMsgDataId) {
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "视图消息数据", tags = {"视图消息数据" },  notes = "视图消息数据")
    @RequestMapping(method = RequestMethod.PUT, value = "/viewmsgdatas/{viewMsgDataId}")
    public ResponseEntity updateByViewMsgDataId(@PathVariable("viewMsgDataId") String viewMsgDataId, @Validated @RequestBody ViewMsgDataDTO viewMsgDataDto) {
        ViewMsgData viewMsgData = viewMsgDataDtoMapping.toDomain(viewMsgDataDto);
        viewMsgData.setViewMsgDataId(viewMsgDataId);
        viewMsgDataService.update(viewMsgData);
        return ResponseEntity.status(HttpStatus.OK).body(viewMsgDataDtoMapping.toDto(viewMsgData));
    }

    @ApiOperation(value = "视图消息数据", tags = {"视图消息数据" },  notes = "视图消息数据")
    @RequestMapping(method = RequestMethod.POST, value = "/viewmsgdatas/checkkey")
    public ResponseEntity checkKey(@Validated @RequestBody ViewMsgDataDTO viewMsgDataDto) {
        ViewMsgData viewMsgData = viewMsgDataDtoMapping.toDomain(viewMsgDataDto);
        viewMsgDataService.checkKey(viewMsgData);
        return ResponseEntity.status(HttpStatus.OK).body(0);
    }

    @ApiOperation(value = "视图消息数据", tags = {"视图消息数据" },  notes = "视图消息数据")
    @RequestMapping(method = RequestMethod.GET, value = "/viewmsgdatas/getdraft")
    public ResponseEntity getDraft(@Validated @RequestBody ViewMsgDataDTO viewMsgDataDto) {
        ViewMsgData viewMsgData = viewMsgDataDtoMapping.toDomain(viewMsgDataDto);
        viewMsgDataService.getDraft(viewMsgData);
        return ResponseEntity.status(HttpStatus.OK).body(viewMsgDataDtoMapping.toDto(viewMsgData));
    }

    @ApiOperation(value = "视图消息数据", tags = {"视图消息数据" },  notes = "视图消息数据")
    @RequestMapping(method = RequestMethod.POST, value = "/viewmsgdatas/{viewMsgDataId}/save")
    public ResponseEntity saveByViewMsgDataId(@PathVariable("viewMsgDataId") String viewMsgDataId, @Validated @RequestBody ViewMsgDataDTO viewMsgDataDto) {
        ViewMsgData viewMsgData = viewMsgDataDtoMapping.toDomain(viewMsgDataDto);
        viewMsgData.setViewMsgDataId(viewMsgDataId);
        viewMsgDataService.save(viewMsgData);
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "视图消息数据", tags = {"视图消息数据" },  notes = "视图消息数据")
    @RequestMapping(method = RequestMethod.POST, value = "/viewmsgdatas/fetchdefault")
    public ResponseEntity fetchDefault(@Validated @RequestBody ViewMsgDataSearchContext viewMsgDataSearchContext) {
        Page<ViewMsgData> domains = viewMsgDataService.searchDefault(viewMsgDataSearchContext) ;
            List<ViewMsgDataDTO> list = viewMsgDataDtoMapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(viewMsgDataSearchContext.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(viewMsgDataSearchContext.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "视图消息数据", tags = {"视图消息数据" },  notes = "视图消息数据")
    @RequestMapping(method = RequestMethod.POST, value = "/viewmsgdatas/select")
    public ResponseEntity select() {
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }


}
