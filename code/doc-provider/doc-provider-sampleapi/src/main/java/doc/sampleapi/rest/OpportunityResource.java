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
import doc.core.sample.domain.Opportunity;
import doc.core.sample.service.IOpportunityService;
import doc.core.sample.filter.OpportunitySearchContext;
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
    public ResponseEntity create(@Validated @RequestBody OpportunityDTO opportunityDto) {
        Opportunity opportunity = opportunityDtoMapping.toDomain(opportunityDto);
        opportunityService.create(opportunity);
        return ResponseEntity.status(HttpStatus.OK).body(opportunityDtoMapping.toDto(opportunity));
    }

    @ApiOperation(value = "商机", tags = {"商机" },  notes = "商机")
    @RequestMapping(method = RequestMethod.GET, value = "/opportunities/{opportunityId}")
    public ResponseEntity getByOpportunityId(@PathVariable("opportunityId") String opportunityId) {
        Opportunity opportunity = opportunityService.get(opportunityId);
        return ResponseEntity.status(HttpStatus.OK).body(opportunityDtoMapping.toDto(opportunity));
    }

    @ApiOperation(value = "商机", tags = {"商机" },  notes = "商机")
    @RequestMapping(method = RequestMethod.DELETE, value = "/opportunities/{opportunityId}")
    public ResponseEntity removeByOpportunityId(@PathVariable("opportunityId") String opportunityId) {
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "商机", tags = {"商机" },  notes = "商机")
    @RequestMapping(method = RequestMethod.PUT, value = "/opportunities/{opportunityId}")
    public ResponseEntity updateByOpportunityId(@PathVariable("opportunityId") String opportunityId, @Validated @RequestBody OpportunityDTO opportunityDto) {
        Opportunity opportunity = opportunityDtoMapping.toDomain(opportunityDto);
        opportunity.setOpportunityId(opportunityId);
        opportunityService.update(opportunity);
        return ResponseEntity.status(HttpStatus.OK).body(opportunityDtoMapping.toDto(opportunity));
    }

    @ApiOperation(value = "商机", tags = {"商机" },  notes = "商机")
    @RequestMapping(method = RequestMethod.POST, value = "/opportunities/checkkey")
    public ResponseEntity checkKey(@Validated @RequestBody OpportunityDTO opportunityDto) {
        Opportunity opportunity = opportunityDtoMapping.toDomain(opportunityDto);
        opportunityService.checkKey(opportunity);
        return ResponseEntity.status(HttpStatus.OK).body(0);
    }

    @ApiOperation(value = "商机", tags = {"商机" },  notes = "商机")
    @RequestMapping(method = RequestMethod.GET, value = "/opportunities/getdraft")
    public ResponseEntity getDraft(@Validated @RequestBody OpportunityDTO opportunityDto) {
        Opportunity opportunity = opportunityDtoMapping.toDomain(opportunityDto);
        opportunityService.getDraft(opportunity);
        return ResponseEntity.status(HttpStatus.OK).body(opportunityDtoMapping.toDto(opportunity));
    }

    @ApiOperation(value = "商机", tags = {"商机" },  notes = "商机")
    @RequestMapping(method = RequestMethod.POST, value = "/opportunities/{opportunityId}/save")
    public ResponseEntity saveByOpportunityId(@PathVariable("opportunityId") String opportunityId, @Validated @RequestBody OpportunityDTO opportunityDto) {
        Opportunity opportunity = opportunityDtoMapping.toDomain(opportunityDto);
        opportunity.setOpportunityId(opportunityId);
        opportunityService.save(opportunity);
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "商机", tags = {"商机" },  notes = "商机")
    @RequestMapping(method = RequestMethod.POST, value = "/opportunities/fetchdefault")
    public ResponseEntity fetchDefault(@Validated @RequestBody OpportunitySearchContext opportunitySearchContext) {
        Page<Opportunity> domains = opportunityService.searchDefault(opportunitySearchContext) ;
            List<OpportunityDTO> list = opportunityDtoMapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(opportunitySearchContext.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(opportunitySearchContext.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "商机", tags = {"商机" },  notes = "商机")
    @RequestMapping(method = RequestMethod.POST, value = "/opportunities/select")
    public ResponseEntity select() {
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }

    @ApiOperation(value = "商机", tags = {"商机" },  notes = "商机")
    @RequestMapping(method = RequestMethod.POST, value = "/customers/{customerId}/opportunities")
    public ResponseEntity createByCustomerId(@PathVariable("customerId") String customerId, @Validated @RequestBody OpportunityDTO opportunityDto) {
        Opportunity opportunity = opportunityDtoMapping.toDomain(opportunityDto);
        opportunity.setCustomerId(customerId);
        opportunityService.create(opportunity);
        return ResponseEntity.status(HttpStatus.OK).body(opportunityDtoMapping.toDto(opportunity));
    }

    @ApiOperation(value = "商机", tags = {"商机" },  notes = "商机")
    @RequestMapping(method = RequestMethod.GET, value = "/customers/{customerId}/opportunities/{opportunityId}")
    public ResponseEntity getByCustomerIdAndOpportunityId(@PathVariable("customerId") String customerId, @PathVariable("opportunityId") String opportunityId) {
        Opportunity opportunity = opportunityService.get(opportunityId);
        return ResponseEntity.status(HttpStatus.OK).body(opportunityDtoMapping.toDto(opportunity));
    }

    @ApiOperation(value = "商机", tags = {"商机" },  notes = "商机")
    @RequestMapping(method = RequestMethod.DELETE, value = "/customers/{customerId}/opportunities/{opportunityId}")
    public ResponseEntity removeByCustomerIdAndOpportunityId(@PathVariable("customerId") String customerId, @PathVariable("opportunityId") String opportunityId) {
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "商机", tags = {"商机" },  notes = "商机")
    @RequestMapping(method = RequestMethod.PUT, value = "/customers/{customerId}/opportunities/{opportunityId}")
    public ResponseEntity updateByCustomerIdAndOpportunityId(@PathVariable("customerId") String customerId, @PathVariable("opportunityId") String opportunityId, @Validated @RequestBody OpportunityDTO opportunityDto) {
        Opportunity opportunity = opportunityDtoMapping.toDomain(opportunityDto);
        opportunity.setOpportunityId(opportunityId);
        opportunityService.update(opportunity);
        return ResponseEntity.status(HttpStatus.OK).body(opportunityDtoMapping.toDto(opportunity));
    }

    @ApiOperation(value = "商机", tags = {"商机" },  notes = "商机")
    @RequestMapping(method = RequestMethod.POST, value = "/customers/{customerId}/opportunities/checkkey")
    public ResponseEntity checkKeyByCustomerId(@PathVariable("customerId") String customerId, @Validated @RequestBody OpportunityDTO opportunityDto) {
        Opportunity opportunity = opportunityDtoMapping.toDomain(opportunityDto);
        opportunity.setCustomerId(customerId);
        opportunityService.checkKey(opportunity);
        return ResponseEntity.status(HttpStatus.OK).body(0);
    }

    @ApiOperation(value = "商机", tags = {"商机" },  notes = "商机")
    @RequestMapping(method = RequestMethod.GET, value = "/customers/{customerId}/opportunities/getdraft")
    public ResponseEntity getDraftByCustomerId(@PathVariable("customerId") String customerId, @Validated @RequestBody OpportunityDTO opportunityDto) {
        Opportunity opportunity = opportunityDtoMapping.toDomain(opportunityDto);
        opportunity.setCustomerId(customerId);
        opportunityService.getDraft(opportunity);
        return ResponseEntity.status(HttpStatus.OK).body(opportunityDtoMapping.toDto(opportunity));
    }

    @ApiOperation(value = "商机", tags = {"商机" },  notes = "商机")
    @RequestMapping(method = RequestMethod.POST, value = "/customers/{customerId}/opportunities/{opportunityId}/save")
    public ResponseEntity saveByCustomerIdAndOpportunityId(@PathVariable("customerId") String customerId, @PathVariable("opportunityId") String opportunityId, @Validated @RequestBody OpportunityDTO opportunityDto) {
        Opportunity opportunity = opportunityDtoMapping.toDomain(opportunityDto);
        opportunity.setOpportunityId(opportunityId);
        opportunityService.save(opportunity);
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "商机", tags = {"商机" },  notes = "商机")
    @RequestMapping(method = RequestMethod.POST, value = "/customers/{customerId}/opportunities/fetchdefault")
    public ResponseEntity fetchDefaultByCustomerId(@PathVariable("customerId") String customerId, @Validated @RequestBody OpportunitySearchContext opportunitySearchContext) {
        opportunitySearchContext.setCustomerIdEQ(customerId);
        Page<Opportunity> domains = opportunityService.searchDefault(opportunitySearchContext) ;
            List<OpportunityDTO> list = opportunityDtoMapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(opportunitySearchContext.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(opportunitySearchContext.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "商机", tags = {"商机" },  notes = "商机")
    @RequestMapping(method = RequestMethod.POST, value = "/customers/{customerId}/opportunities/select")
    public ResponseEntity selectByCustomerId(@PathVariable("customerId") String customerId) {
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }


}
