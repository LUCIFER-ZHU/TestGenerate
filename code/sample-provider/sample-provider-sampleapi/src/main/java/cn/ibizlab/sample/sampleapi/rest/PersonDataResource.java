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
import cn.ibizlab.sample.core.sample.domain.PersonData;
import cn.ibizlab.sample.core.sample.service.IPersonDataService;
import cn.ibizlab.sample.core.sample.filter.PersonDataSearchContext;
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
    public ResponseEntity create() {
    }

    @ApiOperation(value = "人员数据", tags = {"人员数据" },  notes = "人员数据")
    @RequestMapping(method = RequestMethod.GET, value = "/peopledata/{personDataId}")
    public ResponseEntity getByPersonDataId(@PathVariable("personDataId") String personDataId) {
    }

    @ApiOperation(value = "人员数据", tags = {"人员数据" },  notes = "人员数据")
    @RequestMapping(method = RequestMethod.DELETE, value = "/peopledata/{personDataId}")
    public ResponseEntity removeByPersonDataId(@PathVariable("personDataId") String personDataId) {
    }

    @ApiOperation(value = "人员数据", tags = {"人员数据" },  notes = "人员数据")
    @RequestMapping(method = RequestMethod.PUT, value = "/peopledata/{personDataId}")
    public ResponseEntity updateByPersonDataId(@PathVariable("personDataId") String personDataId) {
    }

    @ApiOperation(value = "人员数据", tags = {"人员数据" },  notes = "人员数据")
    @RequestMapping(method = RequestMethod.POST, value = "/peopledata/checkkey")
    public ResponseEntity checkKey() {
    }

    @ApiOperation(value = "人员数据", tags = {"人员数据" },  notes = "人员数据")
    @RequestMapping(method = RequestMethod.GET, value = "/peopledata/getdraft")
    public ResponseEntity getDraft() {
    }

    @ApiOperation(value = "人员数据", tags = {"人员数据" },  notes = "人员数据")
    @RequestMapping(method = RequestMethod.POST, value = "/peopledata/{personDataId}/save")
    public ResponseEntity saveByPersonDataId(@PathVariable("personDataId") String personDataId) {
    }

    @ApiOperation(value = "人员数据", tags = {"人员数据" },  notes = "人员数据")
    @RequestMapping(method = RequestMethod.POST, value = "/peopledata/fetchdefault")
    public ResponseEntity fetchDefault() {
        Page<PersonData> domains = personDataService.searchDefault() ;
            List<> list = Mapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "人员数据", tags = {"人员数据" },  notes = "人员数据")
    @RequestMapping(method = RequestMethod.POST, value = "/peopledata/select")
    public ResponseEntity select() {
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }


}
