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
import cn.ibizlab.sample.core.sample.domain.Province;
import cn.ibizlab.sample.core.sample.service.IProvinceService;
import cn.ibizlab.sample.core.sample.filter.ProvinceSearchContext;
import cn.ibizlab.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"省份" })
@RestController("sampleapi-province")
@RequestMapping("")
public class ProvinceResource {

    @Autowired
    public IProvinceService provinceService;

    @Autowired
    @Lazy
    public ProvinceDTOMapping provinceDtoMapping;

    @Autowired
    @Lazy
    public ProvinceSimpleDTOMapping provinceSimpleDtoMapping;


    @ApiOperation(value = "省份", tags = {"省份" },  notes = "省份")
    @RequestMapping(method = RequestMethod.POST, value = "/provinces")
    public ResponseEntity create() {
    }

    @ApiOperation(value = "省份", tags = {"省份" },  notes = "省份")
    @RequestMapping(method = RequestMethod.GET, value = "/provinces/{provinceId}")
    public ResponseEntity getByProvinceId(@PathVariable("provinceId") String provinceId) {
    }

    @ApiOperation(value = "省份", tags = {"省份" },  notes = "省份")
    @RequestMapping(method = RequestMethod.DELETE, value = "/provinces/{provinceId}")
    public ResponseEntity removeByProvinceId(@PathVariable("provinceId") String provinceId) {
    }

    @ApiOperation(value = "省份", tags = {"省份" },  notes = "省份")
    @RequestMapping(method = RequestMethod.PUT, value = "/provinces/{provinceId}")
    public ResponseEntity updateByProvinceId(@PathVariable("provinceId") String provinceId) {
    }

    @ApiOperation(value = "省份", tags = {"省份" },  notes = "省份")
    @RequestMapping(method = RequestMethod.POST, value = "/provinces/checkkey")
    public ResponseEntity checkKey() {
    }

    @ApiOperation(value = "省份", tags = {"省份" },  notes = "省份")
    @RequestMapping(method = RequestMethod.GET, value = "/provinces/getdraft")
    public ResponseEntity getDraft() {
    }

    @ApiOperation(value = "省份", tags = {"省份" },  notes = "省份")
    @RequestMapping(method = RequestMethod.POST, value = "/provinces/{provinceId}/save")
    public ResponseEntity saveByProvinceId(@PathVariable("provinceId") String provinceId) {
    }

    @ApiOperation(value = "省份", tags = {"省份" },  notes = "省份")
    @RequestMapping(method = RequestMethod.POST, value = "/provinces/fetchconditions")
    public ResponseEntity fetchConditions() {
        Page<Province> domains = provinceService.searchConditions() ;
            List<> list = Mapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "省份", tags = {"省份" },  notes = "省份")
    @RequestMapping(method = RequestMethod.POST, value = "/provinces/fetchdefault")
    public ResponseEntity fetchDefault() {
        Page<Province> domains = provinceService.searchDefault() ;
            List<> list = Mapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "省份", tags = {"省份" },  notes = "省份")
    @RequestMapping(method = RequestMethod.POST, value = "/provinces/select")
    public ResponseEntity select() {
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }


}
