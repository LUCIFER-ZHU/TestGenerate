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
import doc.core.sample.domain.City;
import doc.core.sample.service.ICityService;
import doc.core.sample.filter.CitySearchContext;
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
    @RequestMapping(method = RequestMethod.POST, value = "/provinces/{provinceId}/cities")
    public ResponseEntity createByProvinceId(@PathVariable("provinceId") String provinceId, @Validated @RequestBody CityDTO cityDto) {
        City city = cityDtoMapping.toDomain(cityDto);
        city.setProvinceId(provinceId);
        cityService.create(city);
        return ResponseEntity.status(HttpStatus.OK).body(cityDtoMapping.toDto(city));
    }

    @ApiOperation(value = "市", tags = {"市" },  notes = "市")
    @RequestMapping(method = RequestMethod.GET, value = "/provinces/{provinceId}/cities/{cityId}")
    public ResponseEntity getByProvinceIdAndCityId(@PathVariable("provinceId") String provinceId, @PathVariable("cityId") String cityId) {
        City city = cityService.get(cityId);
        return ResponseEntity.status(HttpStatus.OK).body(cityDtoMapping.toDto(city));
    }

    @ApiOperation(value = "市", tags = {"市" },  notes = "市")
    @RequestMapping(method = RequestMethod.DELETE, value = "/provinces/{provinceId}/cities/{cityId}")
    public ResponseEntity removeByProvinceIdAndCityId(@PathVariable("provinceId") String provinceId, @PathVariable("cityId") String cityId) {
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "市", tags = {"市" },  notes = "市")
    @RequestMapping(method = RequestMethod.PUT, value = "/provinces/{provinceId}/cities/{cityId}")
    public ResponseEntity updateByProvinceIdAndCityId(@PathVariable("provinceId") String provinceId, @PathVariable("cityId") String cityId, @Validated @RequestBody CityDTO cityDto) {
        City city = cityDtoMapping.toDomain(cityDto);
        city.setCityId(cityId);
        cityService.update(city);
        return ResponseEntity.status(HttpStatus.OK).body(cityDtoMapping.toDto(city));
    }

    @ApiOperation(value = "市", tags = {"市" },  notes = "市")
    @RequestMapping(method = RequestMethod.POST, value = "/provinces/{provinceId}/cities/checkkey")
    public ResponseEntity checkKeyByProvinceId(@PathVariable("provinceId") String provinceId, @Validated @RequestBody CityDTO cityDto) {
        City city = cityDtoMapping.toDomain(cityDto);
        city.setProvinceId(provinceId);
        cityService.checkKey(city);
        return ResponseEntity.status(HttpStatus.OK).body(0);
    }

    @ApiOperation(value = "市", tags = {"市" },  notes = "市")
    @RequestMapping(method = RequestMethod.GET, value = "/provinces/{provinceId}/cities/getdraft")
    public ResponseEntity getDraftByProvinceId(@PathVariable("provinceId") String provinceId, @Validated @RequestBody CityDTO cityDto) {
        City city = cityDtoMapping.toDomain(cityDto);
        city.setProvinceId(provinceId);
        cityService.getDraft(city);
        return ResponseEntity.status(HttpStatus.OK).body(cityDtoMapping.toDto(city));
    }

    @ApiOperation(value = "市", tags = {"市" },  notes = "市")
    @RequestMapping(method = RequestMethod.POST, value = "/provinces/{provinceId}/cities/{cityId}/save")
    public ResponseEntity saveByProvinceIdAndCityId(@PathVariable("provinceId") String provinceId, @PathVariable("cityId") String cityId, @Validated @RequestBody CityDTO cityDto) {
        City city = cityDtoMapping.toDomain(cityDto);
        city.setCityId(cityId);
        cityService.save(city);
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "市", tags = {"市" },  notes = "市")
    @RequestMapping(method = RequestMethod.POST, value = "/provinces/{provinceId}/cities/fetchdefault")
    public ResponseEntity fetchDefaultByProvinceId(@PathVariable("provinceId") String provinceId, @Validated @RequestBody CitySearchContext citySearchContext) {
        citySearchContext.setProvinceIdEQ(provinceId);
        Page<City> domains = cityService.searchDefault(citySearchContext) ;
            List<CityDTO> list = cityDtoMapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(citySearchContext.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(citySearchContext.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "市", tags = {"市" },  notes = "市")
    @RequestMapping(method = RequestMethod.POST, value = "/provinces/{provinceId}/cities/select")
    public ResponseEntity selectByProvinceId(@PathVariable("provinceId") String provinceId) {
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }


}
