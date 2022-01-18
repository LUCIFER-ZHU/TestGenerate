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
import cn.ibizlab.sample.core.sample.domain.OrgData;
import cn.ibizlab.sample.core.sample.service.IOrgDataService;
import cn.ibizlab.sample.core.sample.filter.OrgDataSearchContext;
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
    public ResponseEntity create() {
    }

    @ApiOperation(value = "组织数据", tags = {"组织数据" },  notes = "组织数据")
    @RequestMapping(method = RequestMethod.GET, value = "/orgdatas/{orgDataId}")
    public ResponseEntity getByOrgDataId(@PathVariable("orgDataId") String orgDataId) {
    }

    @ApiOperation(value = "组织数据", tags = {"组织数据" },  notes = "组织数据")
    @RequestMapping(method = RequestMethod.DELETE, value = "/orgdatas/{orgDataId}")
    public ResponseEntity removeByOrgDataId(@PathVariable("orgDataId") String orgDataId) {
    }

    @ApiOperation(value = "组织数据", tags = {"组织数据" },  notes = "组织数据")
    @RequestMapping(method = RequestMethod.PUT, value = "/orgdatas/{orgDataId}")
    public ResponseEntity updateByOrgDataId(@PathVariable("orgDataId") String orgDataId) {
    }

    @ApiOperation(value = "组织数据", tags = {"组织数据" },  notes = "组织数据")
    @RequestMapping(method = RequestMethod.POST, value = "/orgdatas/checkkey")
    public ResponseEntity checkKey() {
    }

    @ApiOperation(value = "组织数据", tags = {"组织数据" },  notes = "组织数据")
    @RequestMapping(method = RequestMethod.GET, value = "/orgdatas/getdraft")
    public ResponseEntity getDraft() {
    }

    @ApiOperation(value = "组织数据", tags = {"组织数据" },  notes = "组织数据")
    @RequestMapping(method = RequestMethod.POST, value = "/orgdatas/{orgDataId}/save")
    public ResponseEntity saveByOrgDataId(@PathVariable("orgDataId") String orgDataId) {
    }

    @ApiOperation(value = "组织数据", tags = {"组织数据" },  notes = "组织数据")
    @RequestMapping(method = RequestMethod.POST, value = "/orgdatas/fetchdefault")
    public ResponseEntity fetchDefault() {
        Page<OrgData> domains = orgDataService.searchDefault() ;
            List<> list = Mapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "组织数据", tags = {"组织数据" },  notes = "组织数据")
    @RequestMapping(method = RequestMethod.POST, value = "/orgdatas/fetchporgdata")
    public ResponseEntity fetchPorgdata() {
        Page<OrgData> domains = orgDataService.searchPorgdata() ;
            List<> list = Mapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "组织数据", tags = {"组织数据" },  notes = "组织数据")
    @RequestMapping(method = RequestMethod.POST, value = "/orgdatas/select")
    public ResponseEntity select() {
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }


}
