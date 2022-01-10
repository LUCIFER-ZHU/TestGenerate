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
import cn.ibizlab.sample.core.sample.domain.SampleVer;
import cn.ibizlab.sample.core.sample.service.ISampleVerService;
import cn.ibizlab.sample.core.sample.filter.SampleVerSearchContext;
import cn.ibizlab.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"示例版本" })
@RestController("sampleapi-samplever")
@RequestMapping("")
public class SampleVerResource {

    @Autowired
    public ISampleVerService sampleVerService;

    @Autowired
    @Lazy
    public SampleVerDTOMapping sampleVerDtoMapping;

    @Autowired
    @Lazy
    public SampleVerSimpleDTOMapping sampleVerSimpleDtoMapping;


    @ApiOperation(value = "示例版本", tags = {"示例版本" },  notes = "示例版本")
    @RequestMapping(method = RequestMethod.POST, value = "/samplevers")
    public ResponseEntity create() {
    }

    @ApiOperation(value = "示例版本", tags = {"示例版本" },  notes = "示例版本")
    @RequestMapping(method = RequestMethod.GET, value = "/samplevers/{sampleVerId}")
    public ResponseEntity get(@PathVariable("sampleVerId") String sampleVerId) {
    }

    @ApiOperation(value = "示例版本", tags = {"示例版本" },  notes = "示例版本")
    @RequestMapping(method = RequestMethod.DELETE, value = "/samplevers/{sampleVerId}")
    public ResponseEntity remove(@PathVariable("sampleVerId") String sampleVerId) {
    }

    @ApiOperation(value = "示例版本", tags = {"示例版本" },  notes = "示例版本")
    @RequestMapping(method = RequestMethod.PUT, value = "/samplevers/{sampleVerId}")
    public ResponseEntity update(@PathVariable("sampleVerId") String sampleVerId) {
    }

    @ApiOperation(value = "示例版本", tags = {"示例版本" },  notes = "示例版本")
    @RequestMapping(method = RequestMethod.POST, value = "/samplevers/checkkey")
    public ResponseEntity checkKey() {
    }

    @ApiOperation(value = "示例版本", tags = {"示例版本" },  notes = "示例版本")
    @RequestMapping(method = RequestMethod.GET, value = "/samplevers/getdraft")
    public ResponseEntity getDraft() {
    }

    @ApiOperation(value = "示例版本", tags = {"示例版本" },  notes = "示例版本")
    @RequestMapping(method = RequestMethod.POST, value = "/samplevers/{sampleVerId}/save")
    public ResponseEntity save(@PathVariable("sampleVerId") String sampleVerId) {
    }

    @ApiOperation(value = "示例版本", tags = {"示例版本" },  notes = "示例版本")
    @RequestMapping(method = RequestMethod.POST, value = "/samplevers/fetchdefault")
    public ResponseEntity fetchDefault() {
        Page<SampleVer> domains = sampleVerService.searchDefault() ;
            List<> list = Mapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "示例版本", tags = {"示例版本" },  notes = "示例版本")
    @RequestMapping(method = RequestMethod.POST, value = "/samplevers/fetchjavar7d")
    public ResponseEntity fetchJavar7D() {
        Page<SampleVer> domains = sampleVerService.searchJAVAR7D() ;
            List<> list = Mapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "示例版本", tags = {"示例版本" },  notes = "示例版本")
    @RequestMapping(method = RequestMethod.POST, value = "/samplevers/fetchmobr7d")
    public ResponseEntity fetchMobr7D() {
        Page<SampleVer> domains = sampleVerService.searchMOBR7D() ;
            List<> list = Mapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "示例版本", tags = {"示例版本" },  notes = "示例版本")
    @RequestMapping(method = RequestMethod.POST, value = "/samplevers/fetchwebr7d")
    public ResponseEntity fetchWebr7D() {
        Page<SampleVer> domains = sampleVerService.searchWEBR7D() ;
            List<> list = Mapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "示例版本", tags = {"示例版本" },  notes = "示例版本")
    @RequestMapping(method = RequestMethod.POST, value = "/samplevers/select")
    public ResponseEntity select() {
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }


}
