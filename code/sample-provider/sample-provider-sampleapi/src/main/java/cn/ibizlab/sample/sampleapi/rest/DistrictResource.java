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
import cn.ibizlab.sample.core.sample.domain.District;
import cn.ibizlab.sample.core.sample.service.IDistrictService;
import cn.ibizlab.sample.core.sample.filter.DistrictSearchContext;
import cn.ibizlab.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"区" })
@RestController("sampleapi-district")
@RequestMapping("")
public class DistrictResource {

    @Autowired
    public IDistrictService districtService;

    @Autowired
    @Lazy
    public DistrictDTOMapping districtDtoMapping;

    @Autowired
    @Lazy
    public DistrictSimpleDTOMapping districtSimpleDtoMapping;


    @ApiOperation(value = "区", tags = {"区" },  notes = "区")
    @RequestMapping(method = RequestMethod.POST, value = "/districts")
    public ResponseEntity create() {
    }

    @ApiOperation(value = "区", tags = {"区" },  notes = "区")
    @RequestMapping(method = RequestMethod.GET, value = "/districts/{districtId}")
    public ResponseEntity getByDistrictId(@PathVariable("districtId") String districtId) {
    }

    @ApiOperation(value = "区", tags = {"区" },  notes = "区")
    @RequestMapping(method = RequestMethod.DELETE, value = "/districts/{districtId}")
    public ResponseEntity removeByDistrictId(@PathVariable("districtId") String districtId) {
    }

    @ApiOperation(value = "区", tags = {"区" },  notes = "区")
    @RequestMapping(method = RequestMethod.PUT, value = "/districts/{districtId}")
    public ResponseEntity updateByDistrictId(@PathVariable("districtId") String districtId) {
    }

    @ApiOperation(value = "区", tags = {"区" },  notes = "区")
    @RequestMapping(method = RequestMethod.POST, value = "/districts/checkkey")
    public ResponseEntity checkKey() {
    }

    @ApiOperation(value = "区", tags = {"区" },  notes = "区")
    @RequestMapping(method = RequestMethod.GET, value = "/districts/getdraft")
    public ResponseEntity getDraft() {
    }

    @ApiOperation(value = "区", tags = {"区" },  notes = "区")
    @RequestMapping(method = RequestMethod.POST, value = "/districts/{districtId}/save")
    public ResponseEntity saveByDistrictId(@PathVariable("districtId") String districtId) {
    }

    @ApiOperation(value = "区", tags = {"区" },  notes = "区")
    @RequestMapping(method = RequestMethod.POST, value = "/districts/fetchdefault")
    public ResponseEntity fetchDefault() {
        Page<District> domains = districtService.searchDefault() ;
            List<> list = Mapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "区", tags = {"区" },  notes = "区")
    @RequestMapping(method = RequestMethod.POST, value = "/districts/select")
    public ResponseEntity select() {
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }


}
