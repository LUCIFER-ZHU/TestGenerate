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
import cn.ibizlab.sample.core.sample.domain.ImpExpData;
import cn.ibizlab.sample.core.sample.service.IImpExpDataService;
import cn.ibizlab.sample.core.sample.filter.ImpExpDataSearchContext;
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
    public ResponseEntity create() {
    }

    @ApiOperation(value = "导入导出数据", tags = {"导入导出数据" },  notes = "导入导出数据")
    @RequestMapping(method = RequestMethod.GET, value = "/impexpdatas/{impExpDataId}")
    public ResponseEntity getByImpExpDataId(@PathVariable("impExpDataId") String impExpDataId) {
    }

    @ApiOperation(value = "导入导出数据", tags = {"导入导出数据" },  notes = "导入导出数据")
    @RequestMapping(method = RequestMethod.DELETE, value = "/impexpdatas/{impExpDataId}")
    public ResponseEntity removeByImpExpDataId(@PathVariable("impExpDataId") String impExpDataId) {
    }

    @ApiOperation(value = "导入导出数据", tags = {"导入导出数据" },  notes = "导入导出数据")
    @RequestMapping(method = RequestMethod.PUT, value = "/impexpdatas/{impExpDataId}")
    public ResponseEntity updateByImpExpDataId(@PathVariable("impExpDataId") String impExpDataId) {
    }

    @ApiOperation(value = "导入导出数据", tags = {"导入导出数据" },  notes = "导入导出数据")
    @RequestMapping(method = RequestMethod.POST, value = "/impexpdatas/checkkey")
    public ResponseEntity checkKey() {
    }

    @ApiOperation(value = "导入导出数据", tags = {"导入导出数据" },  notes = "导入导出数据")
    @RequestMapping(method = RequestMethod.GET, value = "/impexpdatas/getdraft")
    public ResponseEntity getDraft() {
    }

    @ApiOperation(value = "导入导出数据", tags = {"导入导出数据" },  notes = "导入导出数据")
    @RequestMapping(method = RequestMethod.POST, value = "/impexpdatas/{impExpDataId}/save")
    public ResponseEntity saveByImpExpDataId(@PathVariable("impExpDataId") String impExpDataId) {
    }

    @ApiOperation(value = "导入导出数据", tags = {"导入导出数据" },  notes = "导入导出数据")
    @RequestMapping(method = RequestMethod.POST, value = "/impexpdatas/fetchdefault")
    public ResponseEntity fetchDefault() {
        Page<ImpExpData> domains = impExpDataService.searchDefault() ;
            List<> list = Mapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "导入导出数据", tags = {"导入导出数据" },  notes = "导入导出数据")
    @RequestMapping(method = RequestMethod.POST, value = "/impexpdatas/select")
    public ResponseEntity select() {
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }


}
