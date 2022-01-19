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
import doc.core.sample.domain.District;
import doc.core.sample.service.IDistrictService;
import doc.core.sample.filter.DistrictSearchContext;
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
    @RequestMapping(method = RequestMethod.POST, value = "/provinces/{provinceId}/cities/{cityId}/districts")
    public ResponseEntity createByProvinceIdAndCityId(@PathVariable("provinceId") String provinceId, @PathVariable("cityId") String cityId, @Validated @RequestBody DistrictDTO districtDto) {
        District district = districtDtoMapping.toDomain(districtDto);
        district.setCityId(cityId);
        districtService.create(district);
        return ResponseEntity.status(HttpStatus.OK).body(districtDtoMapping.toDto(district));
    }

    @ApiOperation(value = "区", tags = {"区" },  notes = "区")
    @RequestMapping(method = RequestMethod.GET, value = "/provinces/{provinceId}/cities/{cityId}/districts/{districtId}")
    public ResponseEntity getByProvinceIdAndCityIdAndDistrictId(@PathVariable("provinceId") String provinceId, @PathVariable("cityId") String cityId, @PathVariable("districtId") String districtId) {
        District district = districtService.get(districtId);
        return ResponseEntity.status(HttpStatus.OK).body(districtDtoMapping.toDto(district));
    }

    @ApiOperation(value = "区", tags = {"区" },  notes = "区")
    @RequestMapping(method = RequestMethod.DELETE, value = "/provinces/{provinceId}/cities/{cityId}/districts/{districtId}")
    public ResponseEntity removeByProvinceIdAndCityIdAndDistrictId(@PathVariable("provinceId") String provinceId, @PathVariable("cityId") String cityId, @PathVariable("districtId") String districtId) {
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "区", tags = {"区" },  notes = "区")
    @RequestMapping(method = RequestMethod.PUT, value = "/provinces/{provinceId}/cities/{cityId}/districts/{districtId}")
    public ResponseEntity updateByProvinceIdAndCityIdAndDistrictId(@PathVariable("provinceId") String provinceId, @PathVariable("cityId") String cityId, @PathVariable("districtId") String districtId, @Validated @RequestBody DistrictDTO districtDto) {
        District district = districtDtoMapping.toDomain(districtDto);
        district.setDistrictId(districtId);
        districtService.update(district);
        return ResponseEntity.status(HttpStatus.OK).body(districtDtoMapping.toDto(district));
    }

    @ApiOperation(value = "区", tags = {"区" },  notes = "区")
    @RequestMapping(method = RequestMethod.POST, value = "/provinces/{provinceId}/cities/{cityId}/districts/checkkey")
    public ResponseEntity checkKeyByProvinceIdAndCityId(@PathVariable("provinceId") String provinceId, @PathVariable("cityId") String cityId, @Validated @RequestBody DistrictDTO districtDto) {
        District district = districtDtoMapping.toDomain(districtDto);
        district.setCityId(cityId);
        districtService.checkKey(district);
        return ResponseEntity.status(HttpStatus.OK).body(0);
    }

    @ApiOperation(value = "区", tags = {"区" },  notes = "区")
    @RequestMapping(method = RequestMethod.GET, value = "/provinces/{provinceId}/cities/{cityId}/districts/getdraft")
    public ResponseEntity getDraftByProvinceIdAndCityId(@PathVariable("provinceId") String provinceId, @PathVariable("cityId") String cityId, @Validated @RequestBody DistrictDTO districtDto) {
        District district = districtDtoMapping.toDomain(districtDto);
        district.setCityId(cityId);
        districtService.getDraft(district);
        return ResponseEntity.status(HttpStatus.OK).body(districtDtoMapping.toDto(district));
    }

    @ApiOperation(value = "区", tags = {"区" },  notes = "区")
    @RequestMapping(method = RequestMethod.POST, value = "/provinces/{provinceId}/cities/{cityId}/districts/{districtId}/save")
    public ResponseEntity saveByProvinceIdAndCityIdAndDistrictId(@PathVariable("provinceId") String provinceId, @PathVariable("cityId") String cityId, @PathVariable("districtId") String districtId, @Validated @RequestBody DistrictDTO districtDto) {
        District district = districtDtoMapping.toDomain(districtDto);
        district.setDistrictId(districtId);
        districtService.save(district);
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "区", tags = {"区" },  notes = "区")
    @RequestMapping(method = RequestMethod.POST, value = "/provinces/{provinceId}/cities/{cityId}/districts/fetchdefault")
    public ResponseEntity fetchDefaultByProvinceIdAndCityId(@PathVariable("provinceId") String provinceId, @PathVariable("cityId") String cityId, @Validated @RequestBody DistrictSearchContext districtSearchContext) {
        districtSearchContext.setCityIdEQ(cityId);
        Page<District> domains = districtService.searchDefault(districtSearchContext) ;
            List<DistrictDTO> list = districtDtoMapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(districtSearchContext.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(districtSearchContext.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "区", tags = {"区" },  notes = "区")
    @RequestMapping(method = RequestMethod.POST, value = "/provinces/{provinceId}/cities/{cityId}/districts/select")
    public ResponseEntity selectByProvinceIdAndCityId(@PathVariable("provinceId") String provinceId, @PathVariable("cityId") String cityId) {
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }


}
