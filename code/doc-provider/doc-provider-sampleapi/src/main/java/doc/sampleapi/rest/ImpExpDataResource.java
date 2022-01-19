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
import doc.core.sample.domain.ImpExpData;
import doc.core.sample.service.IImpExpDataService;
import doc.core.sample.filter.ImpExpDataSearchContext;
import cn.ibizlab.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"导入导出数据" })
@RestController("sampleapi-impexpdata")
@RequestMapping("")
public class ImpExpDataResource {

    @Autowired
    public IImpExpDataService impExpDataService;

    @Autowired
    @Lazy
    public ImpExpDataDTOMapping impExpDataDtoMapping;

    @Autowired
    @Lazy
    public ImpExpDataSimpleDTOMapping impExpDataSimpleDtoMapping;


    @ApiOperation(value = "导入导出数据", tags = {"导入导出数据" },  notes = "导入导出数据")
    @RequestMapping(method = RequestMethod.POST, value = "/impexpdatas")
    public ResponseEntity create(@Validated @RequestBody ImpExpDataDTO impExpDataDto) {
        ImpExpData impExpData = impExpDataDtoMapping.toDomain(impExpDataDto);
        impExpDataService.create(impExpData);
        return ResponseEntity.status(HttpStatus.OK).body(impExpDataDtoMapping.toDto(impExpData));
    }

    @ApiOperation(value = "导入导出数据", tags = {"导入导出数据" },  notes = "导入导出数据")
    @RequestMapping(method = RequestMethod.GET, value = "/impexpdatas/{impExpDataId}")
    public ResponseEntity getByImpExpDataId(@PathVariable("impExpDataId") String impExpDataId) {
        ImpExpData impExpData = impExpDataService.get(impExpDataId);
        return ResponseEntity.status(HttpStatus.OK).body(impExpDataDtoMapping.toDto(impExpData));
    }

    @ApiOperation(value = "导入导出数据", tags = {"导入导出数据" },  notes = "导入导出数据")
    @RequestMapping(method = RequestMethod.DELETE, value = "/impexpdatas/{impExpDataId}")
    public ResponseEntity removeByImpExpDataId(@PathVariable("impExpDataId") String impExpDataId) {
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "导入导出数据", tags = {"导入导出数据" },  notes = "导入导出数据")
    @RequestMapping(method = RequestMethod.PUT, value = "/impexpdatas/{impExpDataId}")
    public ResponseEntity updateByImpExpDataId(@PathVariable("impExpDataId") String impExpDataId, @Validated @RequestBody ImpExpDataDTO impExpDataDto) {
        ImpExpData impExpData = impExpDataDtoMapping.toDomain(impExpDataDto);
        impExpData.setImpExpDataId(impExpDataId);
        impExpDataService.update(impExpData);
        return ResponseEntity.status(HttpStatus.OK).body(impExpDataDtoMapping.toDto(impExpData));
    }

    @ApiOperation(value = "导入导出数据", tags = {"导入导出数据" },  notes = "导入导出数据")
    @RequestMapping(method = RequestMethod.POST, value = "/impexpdatas/checkkey")
    public ResponseEntity checkKey(@Validated @RequestBody ImpExpDataDTO impExpDataDto) {
        ImpExpData impExpData = impExpDataDtoMapping.toDomain(impExpDataDto);
        impExpDataService.checkKey(impExpData);
        return ResponseEntity.status(HttpStatus.OK).body(0);
    }

    @ApiOperation(value = "导入导出数据", tags = {"导入导出数据" },  notes = "导入导出数据")
    @RequestMapping(method = RequestMethod.GET, value = "/impexpdatas/getdraft")
    public ResponseEntity getDraft(@Validated @RequestBody ImpExpDataDTO impExpDataDto) {
        ImpExpData impExpData = impExpDataDtoMapping.toDomain(impExpDataDto);
        impExpDataService.getDraft(impExpData);
        return ResponseEntity.status(HttpStatus.OK).body(impExpDataDtoMapping.toDto(impExpData));
    }

    @ApiOperation(value = "导入导出数据", tags = {"导入导出数据" },  notes = "导入导出数据")
    @RequestMapping(method = RequestMethod.POST, value = "/impexpdatas/{impExpDataId}/save")
    public ResponseEntity saveByImpExpDataId(@PathVariable("impExpDataId") String impExpDataId, @Validated @RequestBody ImpExpDataDTO impExpDataDto) {
        ImpExpData impExpData = impExpDataDtoMapping.toDomain(impExpDataDto);
        impExpData.setImpExpDataId(impExpDataId);
        impExpDataService.save(impExpData);
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "导入导出数据", tags = {"导入导出数据" },  notes = "导入导出数据")
    @RequestMapping(method = RequestMethod.POST, value = "/impexpdatas/fetchdefault")
    public ResponseEntity fetchDefault(@Validated @RequestBody ImpExpDataSearchContext impExpDataSearchContext) {
        Page<ImpExpData> domains = impExpDataService.searchDefault(impExpDataSearchContext) ;
            List<ImpExpDataDTO> list = impExpDataDtoMapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(impExpDataSearchContext.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(impExpDataSearchContext.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "导入导出数据", tags = {"导入导出数据" },  notes = "导入导出数据")
    @RequestMapping(method = RequestMethod.POST, value = "/impexpdatas/select")
    public ResponseEntity select() {
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }

    @ApiOperation(value = "导入导出数据", tags = {"导入导出数据" },  notes = "导入导出数据")
    @RequestMapping(method = RequestMethod.POST, value = "/customers/{customerId}/impexpdatas")
    public ResponseEntity createByCustomerId(@PathVariable("customerId") String customerId, @Validated @RequestBody ImpExpDataDTO impExpDataDto) {
        ImpExpData impExpData = impExpDataDtoMapping.toDomain(impExpDataDto);
        impExpData.setCustomerId(customerId);
        impExpDataService.create(impExpData);
        return ResponseEntity.status(HttpStatus.OK).body(impExpDataDtoMapping.toDto(impExpData));
    }

    @ApiOperation(value = "导入导出数据", tags = {"导入导出数据" },  notes = "导入导出数据")
    @RequestMapping(method = RequestMethod.GET, value = "/customers/{customerId}/impexpdatas/{impExpDataId}")
    public ResponseEntity getByCustomerIdAndImpExpDataId(@PathVariable("customerId") String customerId, @PathVariable("impExpDataId") String impExpDataId) {
        ImpExpData impExpData = impExpDataService.get(impExpDataId);
        return ResponseEntity.status(HttpStatus.OK).body(impExpDataDtoMapping.toDto(impExpData));
    }

    @ApiOperation(value = "导入导出数据", tags = {"导入导出数据" },  notes = "导入导出数据")
    @RequestMapping(method = RequestMethod.DELETE, value = "/customers/{customerId}/impexpdatas/{impExpDataId}")
    public ResponseEntity removeByCustomerIdAndImpExpDataId(@PathVariable("customerId") String customerId, @PathVariable("impExpDataId") String impExpDataId) {
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "导入导出数据", tags = {"导入导出数据" },  notes = "导入导出数据")
    @RequestMapping(method = RequestMethod.PUT, value = "/customers/{customerId}/impexpdatas/{impExpDataId}")
    public ResponseEntity updateByCustomerIdAndImpExpDataId(@PathVariable("customerId") String customerId, @PathVariable("impExpDataId") String impExpDataId, @Validated @RequestBody ImpExpDataDTO impExpDataDto) {
        ImpExpData impExpData = impExpDataDtoMapping.toDomain(impExpDataDto);
        impExpData.setImpExpDataId(impExpDataId);
        impExpDataService.update(impExpData);
        return ResponseEntity.status(HttpStatus.OK).body(impExpDataDtoMapping.toDto(impExpData));
    }

    @ApiOperation(value = "导入导出数据", tags = {"导入导出数据" },  notes = "导入导出数据")
    @RequestMapping(method = RequestMethod.POST, value = "/customers/{customerId}/impexpdatas/checkkey")
    public ResponseEntity checkKeyByCustomerId(@PathVariable("customerId") String customerId, @Validated @RequestBody ImpExpDataDTO impExpDataDto) {
        ImpExpData impExpData = impExpDataDtoMapping.toDomain(impExpDataDto);
        impExpData.setCustomerId(customerId);
        impExpDataService.checkKey(impExpData);
        return ResponseEntity.status(HttpStatus.OK).body(0);
    }

    @ApiOperation(value = "导入导出数据", tags = {"导入导出数据" },  notes = "导入导出数据")
    @RequestMapping(method = RequestMethod.GET, value = "/customers/{customerId}/impexpdatas/getdraft")
    public ResponseEntity getDraftByCustomerId(@PathVariable("customerId") String customerId, @Validated @RequestBody ImpExpDataDTO impExpDataDto) {
        ImpExpData impExpData = impExpDataDtoMapping.toDomain(impExpDataDto);
        impExpData.setCustomerId(customerId);
        impExpDataService.getDraft(impExpData);
        return ResponseEntity.status(HttpStatus.OK).body(impExpDataDtoMapping.toDto(impExpData));
    }

    @ApiOperation(value = "导入导出数据", tags = {"导入导出数据" },  notes = "导入导出数据")
    @RequestMapping(method = RequestMethod.POST, value = "/customers/{customerId}/impexpdatas/{impExpDataId}/save")
    public ResponseEntity saveByCustomerIdAndImpExpDataId(@PathVariable("customerId") String customerId, @PathVariable("impExpDataId") String impExpDataId, @Validated @RequestBody ImpExpDataDTO impExpDataDto) {
        ImpExpData impExpData = impExpDataDtoMapping.toDomain(impExpDataDto);
        impExpData.setImpExpDataId(impExpDataId);
        impExpDataService.save(impExpData);
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "导入导出数据", tags = {"导入导出数据" },  notes = "导入导出数据")
    @RequestMapping(method = RequestMethod.POST, value = "/customers/{customerId}/impexpdatas/fetchdefault")
    public ResponseEntity fetchDefaultByCustomerId(@PathVariable("customerId") String customerId, @Validated @RequestBody ImpExpDataSearchContext impExpDataSearchContext) {
        impExpDataSearchContext.setCustomerIdEQ(customerId);
        Page<ImpExpData> domains = impExpDataService.searchDefault(impExpDataSearchContext) ;
            List<ImpExpDataDTO> list = impExpDataDtoMapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(impExpDataSearchContext.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(impExpDataSearchContext.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "导入导出数据", tags = {"导入导出数据" },  notes = "导入导出数据")
    @RequestMapping(method = RequestMethod.POST, value = "/customers/{customerId}/impexpdatas/select")
    public ResponseEntity selectByCustomerId(@PathVariable("customerId") String customerId) {
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }


}
