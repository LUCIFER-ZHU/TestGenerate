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
import doc.core.sample.domain.OrgData;
import doc.core.sample.service.IOrgDataService;
import doc.core.sample.filter.OrgDataSearchContext;
import cn.ibizlab.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"组织数据" })
@RestController("sampleapi-orgdata")
@RequestMapping("")
public class OrgDataResource {

    @Autowired
    public IOrgDataService orgDataService;

    @Autowired
    @Lazy
    public OrgDataDTOMapping orgDataDtoMapping;

    @Autowired
    @Lazy
    public OrgDataSimpleDTOMapping orgDataSimpleDtoMapping;


    @ApiOperation(value = "组织数据", tags = {"组织数据" },  notes = "组织数据")
    @RequestMapping(method = RequestMethod.POST, value = "/orgdatas")
    public ResponseEntity create(@Validated @RequestBody OrgDataDTO orgDataDto) {
        OrgData orgData = orgDataDtoMapping.toDomain(orgDataDto);
        orgDataService.create(orgData);
        return ResponseEntity.status(HttpStatus.OK).body(orgDataDtoMapping.toDto(orgData));
    }

    @ApiOperation(value = "组织数据", tags = {"组织数据" },  notes = "组织数据")
    @RequestMapping(method = RequestMethod.GET, value = "/orgdatas/{orgDataId}")
    public ResponseEntity getByOrgDataId(@PathVariable("orgDataId") String orgDataId) {
        OrgData orgData = orgDataService.get(orgDataId);
        return ResponseEntity.status(HttpStatus.OK).body(orgDataDtoMapping.toDto(orgData));
    }

    @ApiOperation(value = "组织数据", tags = {"组织数据" },  notes = "组织数据")
    @RequestMapping(method = RequestMethod.DELETE, value = "/orgdatas/{orgDataId}")
    public ResponseEntity removeByOrgDataId(@PathVariable("orgDataId") String orgDataId) {
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "组织数据", tags = {"组织数据" },  notes = "组织数据")
    @RequestMapping(method = RequestMethod.PUT, value = "/orgdatas/{orgDataId}")
    public ResponseEntity updateByOrgDataId(@PathVariable("orgDataId") String orgDataId, @Validated @RequestBody OrgDataDTO orgDataDto) {
        OrgData orgData = orgDataDtoMapping.toDomain(orgDataDto);
        orgData.setOrgDataId(orgDataId);
        orgDataService.update(orgData);
        return ResponseEntity.status(HttpStatus.OK).body(orgDataDtoMapping.toDto(orgData));
    }

    @ApiOperation(value = "组织数据", tags = {"组织数据" },  notes = "组织数据")
    @RequestMapping(method = RequestMethod.POST, value = "/orgdatas/checkkey")
    public ResponseEntity checkKey(@Validated @RequestBody OrgDataDTO orgDataDto) {
        OrgData orgData = orgDataDtoMapping.toDomain(orgDataDto);
        orgDataService.checkKey(orgData);
        return ResponseEntity.status(HttpStatus.OK).body(0);
    }

    @ApiOperation(value = "组织数据", tags = {"组织数据" },  notes = "组织数据")
    @RequestMapping(method = RequestMethod.GET, value = "/orgdatas/getdraft")
    public ResponseEntity getDraft(@Validated @RequestBody OrgDataDTO orgDataDto) {
        OrgData orgData = orgDataDtoMapping.toDomain(orgDataDto);
        orgDataService.getDraft(orgData);
        return ResponseEntity.status(HttpStatus.OK).body(orgDataDtoMapping.toDto(orgData));
    }

    @ApiOperation(value = "组织数据", tags = {"组织数据" },  notes = "组织数据")
    @RequestMapping(method = RequestMethod.POST, value = "/orgdatas/{orgDataId}/save")
    public ResponseEntity saveByOrgDataId(@PathVariable("orgDataId") String orgDataId, @Validated @RequestBody OrgDataDTO orgDataDto) {
        OrgData orgData = orgDataDtoMapping.toDomain(orgDataDto);
        orgData.setOrgDataId(orgDataId);
        orgDataService.save(orgData);
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "组织数据", tags = {"组织数据" },  notes = "组织数据")
    @RequestMapping(method = RequestMethod.POST, value = "/orgdatas/fetchdefault")
    public ResponseEntity fetchDefault(@Validated @RequestBody OrgDataSearchContext orgDataSearchContext) {
        Page<OrgData> domains = orgDataService.searchDefault(orgDataSearchContext) ;
            List<OrgDataDTO> list = orgDataDtoMapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(orgDataSearchContext.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(orgDataSearchContext.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "组织数据", tags = {"组织数据" },  notes = "组织数据")
    @RequestMapping(method = RequestMethod.POST, value = "/orgdatas/fetchporgdata")
    public ResponseEntity fetchPorgdata(@Validated @RequestBody OrgDataSearchContext orgDataSearchContext) {
        Page<OrgData> domains = orgDataService.searchPorgdata(orgDataSearchContext) ;
            List<OrgDataDTO> list = orgDataDtoMapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(orgDataSearchContext.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(orgDataSearchContext.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "组织数据", tags = {"组织数据" },  notes = "组织数据")
    @RequestMapping(method = RequestMethod.POST, value = "/orgdatas/select")
    public ResponseEntity select() {
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }

    @ApiOperation(value = "组织数据", tags = {"组织数据" },  notes = "组织数据")
    @RequestMapping(method = RequestMethod.POST, value = "/orgdatas/{porgdataid}/orgdatas")
    public ResponseEntity createByPorgdataid(@PathVariable("porgdataid") String porgdataid, @Validated @RequestBody OrgDataDTO orgDataDto) {
        OrgData orgData = orgDataDtoMapping.toDomain(orgDataDto);
        orgData.setPorgdataid(porgdataid);
        orgDataService.create(orgData);
        return ResponseEntity.status(HttpStatus.OK).body(orgDataDtoMapping.toDto(orgData));
    }

    @ApiOperation(value = "组织数据", tags = {"组织数据" },  notes = "组织数据")
    @RequestMapping(method = RequestMethod.GET, value = "/orgdatas/{porgdataid}/orgdatas/{orgDataId}")
    public ResponseEntity getByPorgdataidAndOrgDataId(@PathVariable("porgdataid") String porgdataid, @PathVariable("orgDataId") String orgDataId) {
        OrgData orgData = orgDataService.get(orgDataId);
        return ResponseEntity.status(HttpStatus.OK).body(orgDataDtoMapping.toDto(orgData));
    }

    @ApiOperation(value = "组织数据", tags = {"组织数据" },  notes = "组织数据")
    @RequestMapping(method = RequestMethod.DELETE, value = "/orgdatas/{porgdataid}/orgdatas/{orgDataId}")
    public ResponseEntity removeByPorgdataidAndOrgDataId(@PathVariable("porgdataid") String porgdataid, @PathVariable("orgDataId") String orgDataId) {
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "组织数据", tags = {"组织数据" },  notes = "组织数据")
    @RequestMapping(method = RequestMethod.PUT, value = "/orgdatas/{porgdataid}/orgdatas/{orgDataId}")
    public ResponseEntity updateByPorgdataidAndOrgDataId(@PathVariable("porgdataid") String porgdataid, @PathVariable("orgDataId") String orgDataId, @Validated @RequestBody OrgDataDTO orgDataDto) {
        OrgData orgData = orgDataDtoMapping.toDomain(orgDataDto);
        orgData.setOrgDataId(orgDataId);
        orgDataService.update(orgData);
        return ResponseEntity.status(HttpStatus.OK).body(orgDataDtoMapping.toDto(orgData));
    }

    @ApiOperation(value = "组织数据", tags = {"组织数据" },  notes = "组织数据")
    @RequestMapping(method = RequestMethod.POST, value = "/orgdatas/{porgdataid}/orgdatas/checkkey")
    public ResponseEntity checkKeyByPorgdataid(@PathVariable("porgdataid") String porgdataid, @Validated @RequestBody OrgDataDTO orgDataDto) {
        OrgData orgData = orgDataDtoMapping.toDomain(orgDataDto);
        orgData.setPorgdataid(porgdataid);
        orgDataService.checkKey(orgData);
        return ResponseEntity.status(HttpStatus.OK).body(0);
    }

    @ApiOperation(value = "组织数据", tags = {"组织数据" },  notes = "组织数据")
    @RequestMapping(method = RequestMethod.GET, value = "/orgdatas/{porgdataid}/orgdatas/getdraft")
    public ResponseEntity getDraftByPorgdataid(@PathVariable("porgdataid") String porgdataid, @Validated @RequestBody OrgDataDTO orgDataDto) {
        OrgData orgData = orgDataDtoMapping.toDomain(orgDataDto);
        orgData.setPorgdataid(porgdataid);
        orgDataService.getDraft(orgData);
        return ResponseEntity.status(HttpStatus.OK).body(orgDataDtoMapping.toDto(orgData));
    }

    @ApiOperation(value = "组织数据", tags = {"组织数据" },  notes = "组织数据")
    @RequestMapping(method = RequestMethod.POST, value = "/orgdatas/{porgdataid}/orgdatas/{orgDataId}/save")
    public ResponseEntity saveByPorgdataidAndOrgDataId(@PathVariable("porgdataid") String porgdataid, @PathVariable("orgDataId") String orgDataId, @Validated @RequestBody OrgDataDTO orgDataDto) {
        OrgData orgData = orgDataDtoMapping.toDomain(orgDataDto);
        orgData.setOrgDataId(orgDataId);
        orgDataService.save(orgData);
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "组织数据", tags = {"组织数据" },  notes = "组织数据")
    @RequestMapping(method = RequestMethod.POST, value = "/orgdatas/{porgdataid}/orgdatas/fetchdefault")
    public ResponseEntity fetchDefaultByPorgdataid(@PathVariable("porgdataid") String porgdataid, @Validated @RequestBody OrgDataSearchContext orgDataSearchContext) {
        orgDataSearchContext.setPorgdataidEQ(porgdataid);
        Page<OrgData> domains = orgDataService.searchDefault(orgDataSearchContext) ;
            List<OrgDataDTO> list = orgDataDtoMapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(orgDataSearchContext.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(orgDataSearchContext.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "组织数据", tags = {"组织数据" },  notes = "组织数据")
    @RequestMapping(method = RequestMethod.POST, value = "/orgdatas/{porgdataid}/orgdatas/fetchporgdata")
    public ResponseEntity fetchPorgdataByPorgdataid(@PathVariable("porgdataid") String porgdataid, @Validated @RequestBody OrgDataSearchContext orgDataSearchContext) {
        orgDataSearchContext.setPorgdataidEQ(porgdataid);
        Page<OrgData> domains = orgDataService.searchPorgdata(orgDataSearchContext) ;
            List<OrgDataDTO> list = orgDataDtoMapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(orgDataSearchContext.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(orgDataSearchContext.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "组织数据", tags = {"组织数据" },  notes = "组织数据")
    @RequestMapping(method = RequestMethod.POST, value = "/orgdatas/{porgdataid}/orgdatas/select")
    public ResponseEntity selectByPorgdataid(@PathVariable("porgdataid") String porgdataid) {
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }


}
