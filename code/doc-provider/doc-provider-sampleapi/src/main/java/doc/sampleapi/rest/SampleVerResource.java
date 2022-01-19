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
import doc.core.sample.domain.SampleVer;
import doc.core.sample.service.ISampleVerService;
import doc.core.sample.filter.SampleVerSearchContext;
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
    public ResponseEntity create(@Validated @RequestBody SampleVerDTO sampleVerDto) {
        SampleVer sampleVer = sampleVerDtoMapping.toDomain(sampleVerDto);
        sampleVerService.create(sampleVer);
        return ResponseEntity.status(HttpStatus.OK).body(sampleVerDtoMapping.toDto(sampleVer));
    }

    @ApiOperation(value = "示例版本", tags = {"示例版本" },  notes = "示例版本")
    @RequestMapping(method = RequestMethod.GET, value = "/samplevers/{sampleVerId}")
    public ResponseEntity getBySampleVerId(@PathVariable("sampleVerId") String sampleVerId) {
        SampleVer sampleVer = sampleVerService.get(sampleVerId);
        return ResponseEntity.status(HttpStatus.OK).body(sampleVerDtoMapping.toDto(sampleVer));
    }

    @ApiOperation(value = "示例版本", tags = {"示例版本" },  notes = "示例版本")
    @RequestMapping(method = RequestMethod.DELETE, value = "/samplevers/{sampleVerId}")
    public ResponseEntity removeBySampleVerId(@PathVariable("sampleVerId") String sampleVerId) {
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "示例版本", tags = {"示例版本" },  notes = "示例版本")
    @RequestMapping(method = RequestMethod.PUT, value = "/samplevers/{sampleVerId}")
    public ResponseEntity updateBySampleVerId(@PathVariable("sampleVerId") String sampleVerId, @Validated @RequestBody SampleVerDTO sampleVerDto) {
        SampleVer sampleVer = sampleVerDtoMapping.toDomain(sampleVerDto);
        sampleVer.setSampleVerId(sampleVerId);
        sampleVerService.update(sampleVer);
        return ResponseEntity.status(HttpStatus.OK).body(sampleVerDtoMapping.toDto(sampleVer));
    }

    @ApiOperation(value = "示例版本", tags = {"示例版本" },  notes = "示例版本")
    @RequestMapping(method = RequestMethod.POST, value = "/samplevers/checkkey")
    public ResponseEntity checkKey(@Validated @RequestBody SampleVerDTO sampleVerDto) {
        SampleVer sampleVer = sampleVerDtoMapping.toDomain(sampleVerDto);
        sampleVerService.checkKey(sampleVer);
        return ResponseEntity.status(HttpStatus.OK).body(0);
    }

    @ApiOperation(value = "示例版本", tags = {"示例版本" },  notes = "示例版本")
    @RequestMapping(method = RequestMethod.GET, value = "/samplevers/getdraft")
    public ResponseEntity getDraft(@Validated @RequestBody SampleVerDTO sampleVerDto) {
        SampleVer sampleVer = sampleVerDtoMapping.toDomain(sampleVerDto);
        sampleVerService.getDraft(sampleVer);
        return ResponseEntity.status(HttpStatus.OK).body(sampleVerDtoMapping.toDto(sampleVer));
    }

    @ApiOperation(value = "示例版本", tags = {"示例版本" },  notes = "示例版本")
    @RequestMapping(method = RequestMethod.POST, value = "/samplevers/{sampleVerId}/save")
    public ResponseEntity saveBySampleVerId(@PathVariable("sampleVerId") String sampleVerId, @Validated @RequestBody SampleVerDTO sampleVerDto) {
        SampleVer sampleVer = sampleVerDtoMapping.toDomain(sampleVerDto);
        sampleVer.setSampleVerId(sampleVerId);
        sampleVerService.save(sampleVer);
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "示例版本", tags = {"示例版本" },  notes = "示例版本")
    @RequestMapping(method = RequestMethod.POST, value = "/samplevers/fetchdefault")
    public ResponseEntity fetchDefault(@Validated @RequestBody SampleVerSearchContext sampleVerSearchContext) {
        Page<SampleVer> domains = sampleVerService.searchDefault(sampleVerSearchContext) ;
            List<SampleVerDTO> list = sampleVerDtoMapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(sampleVerSearchContext.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(sampleVerSearchContext.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "示例版本", tags = {"示例版本" },  notes = "示例版本")
    @RequestMapping(method = RequestMethod.POST, value = "/samplevers/fetchjavar7d")
    public ResponseEntity fetchJavar7D(@Validated @RequestBody SampleVerSearchContext sampleVerSearchContext) {
        Page<SampleVer> domains = sampleVerService.searchJavar7D(sampleVerSearchContext) ;
            List<SampleVerDTO> list = sampleVerDtoMapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(sampleVerSearchContext.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(sampleVerSearchContext.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "示例版本", tags = {"示例版本" },  notes = "示例版本")
    @RequestMapping(method = RequestMethod.POST, value = "/samplevers/fetchmobr7d")
    public ResponseEntity fetchMobr7D(@Validated @RequestBody SampleVerSearchContext sampleVerSearchContext) {
        Page<SampleVer> domains = sampleVerService.searchMobr7D(sampleVerSearchContext) ;
            List<SampleVerDTO> list = sampleVerDtoMapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(sampleVerSearchContext.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(sampleVerSearchContext.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "示例版本", tags = {"示例版本" },  notes = "示例版本")
    @RequestMapping(method = RequestMethod.POST, value = "/samplevers/fetchwebr7d")
    public ResponseEntity fetchWebr7D(@Validated @RequestBody SampleVerSearchContext sampleVerSearchContext) {
        Page<SampleVer> domains = sampleVerService.searchWebr7D(sampleVerSearchContext) ;
            List<SampleVerDTO> list = sampleVerDtoMapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(sampleVerSearchContext.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(sampleVerSearchContext.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "示例版本", tags = {"示例版本" },  notes = "示例版本")
    @RequestMapping(method = RequestMethod.POST, value = "/samplevers/select")
    public ResponseEntity select() {
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }


}
