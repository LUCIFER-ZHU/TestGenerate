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
import cn.ibizlab.sample.core.sample.domain.City;
import cn.ibizlab.sample.core.sample.service.ICityService;
import cn.ibizlab.sample.core.sample.filter.CitySearchContext;
import cn.ibizlab.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"市" })
@RestController("sampleapi-city")
@RequestMapping("")
public class CityResource {

    @Autowired
    public ICityService cityService;

    @Autowired
    @Lazy
    public CityDTOMapping cityDtoMapping;

    @Autowired
    @Lazy
    public CitySimpleDTOMapping citySimpleDtoMapping;


    @ApiOperation(value = "市", tags = {"市" },  notes = "市")
    @RequestMapping(method = RequestMethod.POST, value = "/cities")
    public ResponseEntity create() {
    }

    @ApiOperation(value = "市", tags = {"市" },  notes = "市")
    @RequestMapping(method = RequestMethod.GET, value = "/cities/{cityId}")
    public ResponseEntity get(@PathVariable("cityId") String cityId) {
    }

    @ApiOperation(value = "市", tags = {"市" },  notes = "市")
    @RequestMapping(method = RequestMethod.DELETE, value = "/cities/{cityId}")
    public ResponseEntity remove(@PathVariable("cityId") String cityId) {
    }

    @ApiOperation(value = "市", tags = {"市" },  notes = "市")
    @RequestMapping(method = RequestMethod.PUT, value = "/cities/{cityId}")
    public ResponseEntity update(@PathVariable("cityId") String cityId) {
    }

    @ApiOperation(value = "市", tags = {"市" },  notes = "市")
    @RequestMapping(method = RequestMethod.POST, value = "/cities/checkkey")
    public ResponseEntity checkKey() {
    }

    @ApiOperation(value = "市", tags = {"市" },  notes = "市")
    @RequestMapping(method = RequestMethod.GET, value = "/cities/getdraft")
    public ResponseEntity getDraft() {
    }

    @ApiOperation(value = "市", tags = {"市" },  notes = "市")
    @RequestMapping(method = RequestMethod.POST, value = "/cities/{cityId}/save")
    public ResponseEntity save(@PathVariable("cityId") String cityId) {
    }

    @ApiOperation(value = "市", tags = {"市" },  notes = "市")
    @RequestMapping(method = RequestMethod.POST, value = "/cities/fetchdefault")
    public ResponseEntity fetchDefault() {
        Page<City> domains = cityService.searchDefault() ;
            List<> list = Mapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "市", tags = {"市" },  notes = "市")
    @RequestMapping(method = RequestMethod.POST, value = "/cities/select")
    public ResponseEntity select() {
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }


}
