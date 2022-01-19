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
import doc.core.sample.domain.PersonData;
import doc.core.sample.service.IPersonDataService;
import doc.core.sample.filter.PersonDataSearchContext;
import cn.ibizlab.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"人员数据" })
@RestController("sampleapi-persondata")
@RequestMapping("")
public class PersonDataResource {

    @Autowired
    public IPersonDataService personDataService;

    @Autowired
    @Lazy
    public PersonDataDTOMapping personDataDtoMapping;

    @Autowired
    @Lazy
    public PersonDataSimpleDTOMapping personDataSimpleDtoMapping;


    @ApiOperation(value = "人员数据", tags = {"人员数据" },  notes = "人员数据")
    @RequestMapping(method = RequestMethod.POST, value = "/peopledata")
    public ResponseEntity create(@Validated @RequestBody PersonDataDTO personDataDto) {
        PersonData personData = personDataDtoMapping.toDomain(personDataDto);
        personDataService.create(personData);
        return ResponseEntity.status(HttpStatus.OK).body(personDataDtoMapping.toDto(personData));
    }

    @ApiOperation(value = "人员数据", tags = {"人员数据" },  notes = "人员数据")
    @RequestMapping(method = RequestMethod.GET, value = "/peopledata/{personDataId}")
    public ResponseEntity getByPersonDataId(@PathVariable("personDataId") String personDataId) {
        PersonData personData = personDataService.get(personDataId);
        return ResponseEntity.status(HttpStatus.OK).body(personDataDtoMapping.toDto(personData));
    }

    @ApiOperation(value = "人员数据", tags = {"人员数据" },  notes = "人员数据")
    @RequestMapping(method = RequestMethod.DELETE, value = "/peopledata/{personDataId}")
    public ResponseEntity removeByPersonDataId(@PathVariable("personDataId") String personDataId) {
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "人员数据", tags = {"人员数据" },  notes = "人员数据")
    @RequestMapping(method = RequestMethod.PUT, value = "/peopledata/{personDataId}")
    public ResponseEntity updateByPersonDataId(@PathVariable("personDataId") String personDataId, @Validated @RequestBody PersonDataDTO personDataDto) {
        PersonData personData = personDataDtoMapping.toDomain(personDataDto);
        personData.setPersonDataId(personDataId);
        personDataService.update(personData);
        return ResponseEntity.status(HttpStatus.OK).body(personDataDtoMapping.toDto(personData));
    }

    @ApiOperation(value = "人员数据", tags = {"人员数据" },  notes = "人员数据")
    @RequestMapping(method = RequestMethod.POST, value = "/peopledata/checkkey")
    public ResponseEntity checkKey(@Validated @RequestBody PersonDataDTO personDataDto) {
        PersonData personData = personDataDtoMapping.toDomain(personDataDto);
        personDataService.checkKey(personData);
        return ResponseEntity.status(HttpStatus.OK).body(0);
    }

    @ApiOperation(value = "人员数据", tags = {"人员数据" },  notes = "人员数据")
    @RequestMapping(method = RequestMethod.GET, value = "/peopledata/getdraft")
    public ResponseEntity getDraft(@Validated @RequestBody PersonDataDTO personDataDto) {
        PersonData personData = personDataDtoMapping.toDomain(personDataDto);
        personDataService.getDraft(personData);
        return ResponseEntity.status(HttpStatus.OK).body(personDataDtoMapping.toDto(personData));
    }

    @ApiOperation(value = "人员数据", tags = {"人员数据" },  notes = "人员数据")
    @RequestMapping(method = RequestMethod.POST, value = "/peopledata/{personDataId}/save")
    public ResponseEntity saveByPersonDataId(@PathVariable("personDataId") String personDataId, @Validated @RequestBody PersonDataDTO personDataDto) {
        PersonData personData = personDataDtoMapping.toDomain(personDataDto);
        personData.setPersonDataId(personDataId);
        personDataService.save(personData);
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "人员数据", tags = {"人员数据" },  notes = "人员数据")
    @RequestMapping(method = RequestMethod.POST, value = "/peopledata/fetchdefault")
    public ResponseEntity fetchDefault(@Validated @RequestBody PersonDataSearchContext personDataSearchContext) {
        Page<PersonData> domains = personDataService.searchDefault(personDataSearchContext) ;
            List<PersonDataDTO> list = personDataDtoMapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(personDataSearchContext.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(personDataSearchContext.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "人员数据", tags = {"人员数据" },  notes = "人员数据")
    @RequestMapping(method = RequestMethod.POST, value = "/peopledata/select")
    public ResponseEntity select() {
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }

    @ApiOperation(value = "人员数据", tags = {"人员数据" },  notes = "人员数据")
    @RequestMapping(method = RequestMethod.POST, value = "/orgdatas/{orgDataId}/peopledata")
    public ResponseEntity createByOrgDataId(@PathVariable("orgDataId") String orgDataId, @Validated @RequestBody PersonDataDTO personDataDto) {
        PersonData personData = personDataDtoMapping.toDomain(personDataDto);
        personData.setOrgDataId(orgDataId);
        personDataService.create(personData);
        return ResponseEntity.status(HttpStatus.OK).body(personDataDtoMapping.toDto(personData));
    }

    @ApiOperation(value = "人员数据", tags = {"人员数据" },  notes = "人员数据")
    @RequestMapping(method = RequestMethod.GET, value = "/orgdatas/{orgDataId}/peopledata/{personDataId}")
    public ResponseEntity getByOrgDataIdAndPersonDataId(@PathVariable("orgDataId") String orgDataId, @PathVariable("personDataId") String personDataId) {
        PersonData personData = personDataService.get(personDataId);
        return ResponseEntity.status(HttpStatus.OK).body(personDataDtoMapping.toDto(personData));
    }

    @ApiOperation(value = "人员数据", tags = {"人员数据" },  notes = "人员数据")
    @RequestMapping(method = RequestMethod.DELETE, value = "/orgdatas/{orgDataId}/peopledata/{personDataId}")
    public ResponseEntity removeByOrgDataIdAndPersonDataId(@PathVariable("orgDataId") String orgDataId, @PathVariable("personDataId") String personDataId) {
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "人员数据", tags = {"人员数据" },  notes = "人员数据")
    @RequestMapping(method = RequestMethod.PUT, value = "/orgdatas/{orgDataId}/peopledata/{personDataId}")
    public ResponseEntity updateByOrgDataIdAndPersonDataId(@PathVariable("orgDataId") String orgDataId, @PathVariable("personDataId") String personDataId, @Validated @RequestBody PersonDataDTO personDataDto) {
        PersonData personData = personDataDtoMapping.toDomain(personDataDto);
        personData.setPersonDataId(personDataId);
        personDataService.update(personData);
        return ResponseEntity.status(HttpStatus.OK).body(personDataDtoMapping.toDto(personData));
    }

    @ApiOperation(value = "人员数据", tags = {"人员数据" },  notes = "人员数据")
    @RequestMapping(method = RequestMethod.POST, value = "/orgdatas/{orgDataId}/peopledata/checkkey")
    public ResponseEntity checkKeyByOrgDataId(@PathVariable("orgDataId") String orgDataId, @Validated @RequestBody PersonDataDTO personDataDto) {
        PersonData personData = personDataDtoMapping.toDomain(personDataDto);
        personData.setOrgDataId(orgDataId);
        personDataService.checkKey(personData);
        return ResponseEntity.status(HttpStatus.OK).body(0);
    }

    @ApiOperation(value = "人员数据", tags = {"人员数据" },  notes = "人员数据")
    @RequestMapping(method = RequestMethod.GET, value = "/orgdatas/{orgDataId}/peopledata/getdraft")
    public ResponseEntity getDraftByOrgDataId(@PathVariable("orgDataId") String orgDataId, @Validated @RequestBody PersonDataDTO personDataDto) {
        PersonData personData = personDataDtoMapping.toDomain(personDataDto);
        personData.setOrgDataId(orgDataId);
        personDataService.getDraft(personData);
        return ResponseEntity.status(HttpStatus.OK).body(personDataDtoMapping.toDto(personData));
    }

    @ApiOperation(value = "人员数据", tags = {"人员数据" },  notes = "人员数据")
    @RequestMapping(method = RequestMethod.POST, value = "/orgdatas/{orgDataId}/peopledata/{personDataId}/save")
    public ResponseEntity saveByOrgDataIdAndPersonDataId(@PathVariable("orgDataId") String orgDataId, @PathVariable("personDataId") String personDataId, @Validated @RequestBody PersonDataDTO personDataDto) {
        PersonData personData = personDataDtoMapping.toDomain(personDataDto);
        personData.setPersonDataId(personDataId);
        personDataService.save(personData);
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "人员数据", tags = {"人员数据" },  notes = "人员数据")
    @RequestMapping(method = RequestMethod.POST, value = "/orgdatas/{orgDataId}/peopledata/fetchdefault")
    public ResponseEntity fetchDefaultByOrgDataId(@PathVariable("orgDataId") String orgDataId, @Validated @RequestBody PersonDataSearchContext personDataSearchContext) {
        personDataSearchContext.setOrgDataIdEQ(orgDataId);
        Page<PersonData> domains = personDataService.searchDefault(personDataSearchContext) ;
            List<PersonDataDTO> list = personDataDtoMapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(personDataSearchContext.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(personDataSearchContext.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "人员数据", tags = {"人员数据" },  notes = "人员数据")
    @RequestMapping(method = RequestMethod.POST, value = "/orgdatas/{orgDataId}/peopledata/select")
    public ResponseEntity selectByOrgDataId(@PathVariable("orgDataId") String orgDataId) {
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }

    @ApiOperation(value = "人员数据", tags = {"人员数据" },  notes = "人员数据")
    @RequestMapping(method = RequestMethod.POST, value = "/orgdatas/{porgdataid}/orgdatas/{orgDataId}/peopledata")
    public ResponseEntity createByPorgdataidAndOrgDataId(@PathVariable("porgdataid") String porgdataid, @PathVariable("orgDataId") String orgDataId, @Validated @RequestBody PersonDataDTO personDataDto) {
        PersonData personData = personDataDtoMapping.toDomain(personDataDto);
        personData.setOrgDataId(orgDataId);
        personDataService.create(personData);
        return ResponseEntity.status(HttpStatus.OK).body(personDataDtoMapping.toDto(personData));
    }

    @ApiOperation(value = "人员数据", tags = {"人员数据" },  notes = "人员数据")
    @RequestMapping(method = RequestMethod.GET, value = "/orgdatas/{porgdataid}/orgdatas/{orgDataId}/peopledata/{personDataId}")
    public ResponseEntity getByPorgdataidAndOrgDataIdAndPersonDataId(@PathVariable("porgdataid") String porgdataid, @PathVariable("orgDataId") String orgDataId, @PathVariable("personDataId") String personDataId) {
        PersonData personData = personDataService.get(personDataId);
        return ResponseEntity.status(HttpStatus.OK).body(personDataDtoMapping.toDto(personData));
    }

    @ApiOperation(value = "人员数据", tags = {"人员数据" },  notes = "人员数据")
    @RequestMapping(method = RequestMethod.DELETE, value = "/orgdatas/{porgdataid}/orgdatas/{orgDataId}/peopledata/{personDataId}")
    public ResponseEntity removeByPorgdataidAndOrgDataIdAndPersonDataId(@PathVariable("porgdataid") String porgdataid, @PathVariable("orgDataId") String orgDataId, @PathVariable("personDataId") String personDataId) {
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "人员数据", tags = {"人员数据" },  notes = "人员数据")
    @RequestMapping(method = RequestMethod.PUT, value = "/orgdatas/{porgdataid}/orgdatas/{orgDataId}/peopledata/{personDataId}")
    public ResponseEntity updateByPorgdataidAndOrgDataIdAndPersonDataId(@PathVariable("porgdataid") String porgdataid, @PathVariable("orgDataId") String orgDataId, @PathVariable("personDataId") String personDataId, @Validated @RequestBody PersonDataDTO personDataDto) {
        PersonData personData = personDataDtoMapping.toDomain(personDataDto);
        personData.setPersonDataId(personDataId);
        personDataService.update(personData);
        return ResponseEntity.status(HttpStatus.OK).body(personDataDtoMapping.toDto(personData));
    }

    @ApiOperation(value = "人员数据", tags = {"人员数据" },  notes = "人员数据")
    @RequestMapping(method = RequestMethod.POST, value = "/orgdatas/{porgdataid}/orgdatas/{orgDataId}/peopledata/checkkey")
    public ResponseEntity checkKeyByPorgdataidAndOrgDataId(@PathVariable("porgdataid") String porgdataid, @PathVariable("orgDataId") String orgDataId, @Validated @RequestBody PersonDataDTO personDataDto) {
        PersonData personData = personDataDtoMapping.toDomain(personDataDto);
        personData.setOrgDataId(orgDataId);
        personDataService.checkKey(personData);
        return ResponseEntity.status(HttpStatus.OK).body(0);
    }

    @ApiOperation(value = "人员数据", tags = {"人员数据" },  notes = "人员数据")
    @RequestMapping(method = RequestMethod.GET, value = "/orgdatas/{porgdataid}/orgdatas/{orgDataId}/peopledata/getdraft")
    public ResponseEntity getDraftByPorgdataidAndOrgDataId(@PathVariable("porgdataid") String porgdataid, @PathVariable("orgDataId") String orgDataId, @Validated @RequestBody PersonDataDTO personDataDto) {
        PersonData personData = personDataDtoMapping.toDomain(personDataDto);
        personData.setOrgDataId(orgDataId);
        personDataService.getDraft(personData);
        return ResponseEntity.status(HttpStatus.OK).body(personDataDtoMapping.toDto(personData));
    }

    @ApiOperation(value = "人员数据", tags = {"人员数据" },  notes = "人员数据")
    @RequestMapping(method = RequestMethod.POST, value = "/orgdatas/{porgdataid}/orgdatas/{orgDataId}/peopledata/{personDataId}/save")
    public ResponseEntity saveByPorgdataidAndOrgDataIdAndPersonDataId(@PathVariable("porgdataid") String porgdataid, @PathVariable("orgDataId") String orgDataId, @PathVariable("personDataId") String personDataId, @Validated @RequestBody PersonDataDTO personDataDto) {
        PersonData personData = personDataDtoMapping.toDomain(personDataDto);
        personData.setPersonDataId(personDataId);
        personDataService.save(personData);
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "人员数据", tags = {"人员数据" },  notes = "人员数据")
    @RequestMapping(method = RequestMethod.POST, value = "/orgdatas/{porgdataid}/orgdatas/{orgDataId}/peopledata/fetchdefault")
    public ResponseEntity fetchDefaultByPorgdataidAndOrgDataId(@PathVariable("porgdataid") String porgdataid, @PathVariable("orgDataId") String orgDataId, @Validated @RequestBody PersonDataSearchContext personDataSearchContext) {
        personDataSearchContext.setOrgDataIdEQ(orgDataId);
        Page<PersonData> domains = personDataService.searchDefault(personDataSearchContext) ;
            List<PersonDataDTO> list = personDataDtoMapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(personDataSearchContext.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(personDataSearchContext.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "人员数据", tags = {"人员数据" },  notes = "人员数据")
    @RequestMapping(method = RequestMethod.POST, value = "/orgdatas/{porgdataid}/orgdatas/{orgDataId}/peopledata/select")
    public ResponseEntity selectByPorgdataidAndOrgDataId(@PathVariable("porgdataid") String porgdataid, @PathVariable("orgDataId") String orgDataId) {
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }


}
