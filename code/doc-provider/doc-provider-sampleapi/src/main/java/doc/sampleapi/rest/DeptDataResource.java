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
import doc.core.sample.domain.DeptData;
import doc.core.sample.service.IDeptDataService;
import doc.core.sample.filter.DeptDataSearchContext;
import cn.ibizlab.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"部门数据" })
@RestController("sampleapi-deptdata")
@RequestMapping("")
public class DeptDataResource {

    @Autowired
    public IDeptDataService deptDataService;

    @Autowired
    @Lazy
    public DeptDataDTOMapping deptDataDtoMapping;

    @Autowired
    @Lazy
    public DeptDataSimpleDTOMapping deptDataSimpleDtoMapping;


    @ApiOperation(value = "部门数据", tags = {"部门数据" },  notes = "部门数据")
    @RequestMapping(method = RequestMethod.POST, value = "/deptdatas")
    public ResponseEntity create(@Validated @RequestBody DeptDataDTO deptDataDto) {
        DeptData deptData = deptDataDtoMapping.toDomain(deptDataDto);
        deptDataService.create(deptData);
        return ResponseEntity.status(HttpStatus.OK).body(deptDataDtoMapping.toDto(deptData));
    }

    @ApiOperation(value = "部门数据", tags = {"部门数据" },  notes = "部门数据")
    @RequestMapping(method = RequestMethod.GET, value = "/deptdatas/{deptDataId}")
    public ResponseEntity getByDeptDataId(@PathVariable("deptDataId") String deptDataId) {
        DeptData deptData = deptDataService.get(deptDataId);
        return ResponseEntity.status(HttpStatus.OK).body(deptDataDtoMapping.toDto(deptData));
    }

    @ApiOperation(value = "部门数据", tags = {"部门数据" },  notes = "部门数据")
    @RequestMapping(method = RequestMethod.DELETE, value = "/deptdatas/{deptDataId}")
    public ResponseEntity removeByDeptDataId(@PathVariable("deptDataId") String deptDataId) {
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "部门数据", tags = {"部门数据" },  notes = "部门数据")
    @RequestMapping(method = RequestMethod.PUT, value = "/deptdatas/{deptDataId}")
    public ResponseEntity updateByDeptDataId(@PathVariable("deptDataId") String deptDataId, @Validated @RequestBody DeptDataDTO deptDataDto) {
        DeptData deptData = deptDataDtoMapping.toDomain(deptDataDto);
        deptData.setDeptDataId(deptDataId);
        deptDataService.update(deptData);
        return ResponseEntity.status(HttpStatus.OK).body(deptDataDtoMapping.toDto(deptData));
    }

    @ApiOperation(value = "部门数据", tags = {"部门数据" },  notes = "部门数据")
    @RequestMapping(method = RequestMethod.POST, value = "/deptdatas/checkkey")
    public ResponseEntity checkKey(@Validated @RequestBody DeptDataDTO deptDataDto) {
        DeptData deptData = deptDataDtoMapping.toDomain(deptDataDto);
        deptDataService.checkKey(deptData);
        return ResponseEntity.status(HttpStatus.OK).body(0);
    }

    @ApiOperation(value = "部门数据", tags = {"部门数据" },  notes = "部门数据")
    @RequestMapping(method = RequestMethod.GET, value = "/deptdatas/getdraft")
    public ResponseEntity getDraft(@Validated @RequestBody DeptDataDTO deptDataDto) {
        DeptData deptData = deptDataDtoMapping.toDomain(deptDataDto);
        deptDataService.getDraft(deptData);
        return ResponseEntity.status(HttpStatus.OK).body(deptDataDtoMapping.toDto(deptData));
    }

    @ApiOperation(value = "部门数据", tags = {"部门数据" },  notes = "部门数据")
    @RequestMapping(method = RequestMethod.POST, value = "/deptdatas/{deptDataId}/save")
    public ResponseEntity saveByDeptDataId(@PathVariable("deptDataId") String deptDataId, @Validated @RequestBody DeptDataDTO deptDataDto) {
        DeptData deptData = deptDataDtoMapping.toDomain(deptDataDto);
        deptData.setDeptDataId(deptDataId);
        deptDataService.save(deptData);
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "部门数据", tags = {"部门数据" },  notes = "部门数据")
    @RequestMapping(method = RequestMethod.POST, value = "/deptdatas/fetchdefault")
    public ResponseEntity fetchDefault(@Validated @RequestBody DeptDataSearchContext deptDataSearchContext) {
        Page<DeptData> domains = deptDataService.searchDefault(deptDataSearchContext) ;
            List<DeptDataDTO> list = deptDataDtoMapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(deptDataSearchContext.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(deptDataSearchContext.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "部门数据", tags = {"部门数据" },  notes = "部门数据")
    @RequestMapping(method = RequestMethod.POST, value = "/deptdatas/select")
    public ResponseEntity select() {
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }


}
