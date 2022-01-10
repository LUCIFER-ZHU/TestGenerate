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
import cn.ibizlab.sample.core.sample.domain.Opportunity;
import cn.ibizlab.sample.core.sample.service.IOpportunityService;
import cn.ibizlab.sample.core.sample.filter.OpportunitySearchContext;
import cn.ibizlab.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"商机" })
@RestController("sampleapi-opportunity")
@RequestMapping("")
public class OpportunityResource {

    @Autowired
    public IOpportunityService opportunityService;

    @Autowired
    @Lazy
    public OpportunityDTOMapping opportunityDtoMapping;

    @Autowired
    @Lazy
    public OpportunitySimpleDTOMapping opportunitySimpleDtoMapping;


    @ApiOperation(value = "商机", tags = {"商机" },  notes = "商机")
    @RequestMapping(method = RequestMethod.POST, value = "/opportunities")
    public ResponseEntity create() {
    }

    @ApiOperation(value = "商机", tags = {"商机" },  notes = "商机")
    @RequestMapping(method = RequestMethod.GET, value = "/opportunities/{opportunityId}")
    public ResponseEntity get(@PathVariable("opportunityId") String opportunityId) {
    }

    @ApiOperation(value = "商机", tags = {"商机" },  notes = "商机")
    @RequestMapping(method = RequestMethod.DELETE, value = "/opportunities/{opportunityId}")
    public ResponseEntity remove(@PathVariable("opportunityId") String opportunityId) {
    }

    @ApiOperation(value = "商机", tags = {"商机" },  notes = "商机")
    @RequestMapping(method = RequestMethod.PUT, value = "/opportunities/{opportunityId}")
    public ResponseEntity update(@PathVariable("opportunityId") String opportunityId) {
    }

    @ApiOperation(value = "商机", tags = {"商机" },  notes = "商机")
    @RequestMapping(method = RequestMethod.POST, value = "/opportunities/checkkey")
    public ResponseEntity checkKey() {
    }

    @ApiOperation(value = "商机", tags = {"商机" },  notes = "商机")
    @RequestMapping(method = RequestMethod.GET, value = "/opportunities/getdraft")
    public ResponseEntity getDraft() {
    }

    @ApiOperation(value = "商机", tags = {"商机" },  notes = "商机")
    @RequestMapping(method = RequestMethod.POST, value = "/opportunities/{opportunityId}/save")
    public ResponseEntity save(@PathVariable("opportunityId") String opportunityId) {
    }

    @ApiOperation(value = "商机", tags = {"商机" },  notes = "商机")
    @RequestMapping(method = RequestMethod.POST, value = "/opportunities/fetchdefault")
    public ResponseEntity fetchDefault() {
        Page<Opportunity> domains = opportunityService.searchDefault() ;
            List<> list = Mapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "商机", tags = {"商机" },  notes = "商机")
    @RequestMapping(method = RequestMethod.POST, value = "/opportunities/select")
    public ResponseEntity select() {
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }


}
