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
    public ISampleVerService service;

    @Autowired
    @Lazy
    public SampleVerMapping mapping;

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-SampleVer-Create-all')")
    @ApiOperation(value = "新建示例版本", tags = {"示例版本" },  notes = "新建示例版本")
	@RequestMapping(method = RequestMethod.POST, value = "/samplevers")
    public ResponseEntity<SampleVerDTO> create(@Validated @RequestBody SampleVerDTO dto) {
        SampleVer domain = mapping.toDomain(dto);
		service.create(domain);
		return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-SampleVer-Create-all')")
    @ApiOperation(value = "批量新建示例版本", tags = {"示例版本" },  notes = "批量新建示例版本")
	@RequestMapping(method = RequestMethod.POST, value = "/samplevers/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<SampleVerDTO> dtos) {
        service.createBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-SampleVer-Get-all')")
    @ApiOperation(value = "获取示例版本", tags = {"示例版本" },  notes = "获取示例版本")
	@RequestMapping(method = RequestMethod.GET, value = "/samplevers/{id}")
    public ResponseEntity<SampleVerDTO> get(@PathVariable("id") String id) {
        SampleVer domain = service.get(id);
        SampleVerDTO dto = mapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-SampleVer-Remove-all')")
    @ApiOperation(value = "删除示例版本", tags = {"示例版本" },  notes = "删除示例版本")
	@RequestMapping(method = RequestMethod.DELETE, value = "/samplevers/{id}")
    public ResponseEntity<Boolean> remove(@PathVariable("id") String id) {
         return ResponseEntity.status(HttpStatus.OK).body(service.remove(id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-SampleVer-Remove-all')")
    @ApiOperation(value = "批量删除示例版本", tags = {"示例版本" },  notes = "批量删除示例版本")
	@RequestMapping(method = RequestMethod.DELETE, value = "/samplevers/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<String> ids) {
        service.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @VersionCheck(entity = "samplever" , versionfield = "updateDate")    
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-SampleVer-Update-all')")
    @ApiOperation(value = "更新示例版本", tags = {"示例版本" },  notes = "更新示例版本")
	@RequestMapping(method = RequestMethod.PUT, value = "/samplevers/{id}")
    public ResponseEntity<SampleVerDTO> update(@PathVariable("id") String id, @RequestBody SampleVerDTO dto) {
		SampleVer domain  = mapping.toDomain(dto);
        domain.setSampleVerId(id);
		service.update(domain);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-SampleVer-Update-all')")
    @ApiOperation(value = "批量更新示例版本", tags = {"示例版本" },  notes = "批量更新示例版本")
	@RequestMapping(method = RequestMethod.PUT, value = "/samplevers/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<SampleVerDTO> dtos) {
        service.updateBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "检查示例版本", tags = {"示例版本" },  notes = "检查示例版本")
	@RequestMapping(method = RequestMethod.POST, value = "/samplevers/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody SampleVerDTO dto) {
        return  ResponseEntity.status(HttpStatus.OK).body(service.checkKey(mapping.toDomain(dto)));
    }

    @ApiOperation(value = "获取示例版本草稿", tags = {"示例版本" },  notes = "获取示例版本草稿")
	@RequestMapping(method = RequestMethod.GET, value = "/samplevers/getdraft")
    public ResponseEntity<SampleVerDTO> getDraft(SampleVerDTO dto) {
        SampleVer domain = mapping.toDomain(dto);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(service.getDraft(domain)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-SampleVer-Save-all')")
    @ApiOperation(value = "保存示例版本", tags = {"示例版本" },  notes = "保存示例版本")
	@RequestMapping(method = RequestMethod.POST, value = "/samplevers/save")
    public ResponseEntity<SampleVerDTO> save(@RequestBody SampleVerDTO dto) {
        SampleVer domain = mapping.toDomain(dto);
        service.save(domain);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-SampleVer-Save-all')")
    @ApiOperation(value = "批量保存示例版本", tags = {"示例版本" },  notes = "批量保存示例版本")
	@RequestMapping(method = RequestMethod.POST, value = "/samplevers/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<SampleVerDTO> dtos) {
        service.saveBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

        
    @ApiOperation(value = "获取DEFAULT", tags = {"示例版本" } ,notes = "获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/samplevers/fetchdefault")
    public ResponseEntity<List<SampleVerDTO>> fetchDefault(SampleVerSearchContext context) {
        Page<SampleVer> domains = service.searchDefault(context) ;
        List<SampleVerDTO> list = mapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}
	

	@ApiOperation(value = "查询DEFAULT", tags = {"示例版本" } ,notes = "查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/samplevers/searchdefault")
    public ResponseEntity<Page<SampleVerDTO>> searchDefault(@RequestBody SampleVerSearchContext context) {
        Page<SampleVer> domains = service.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(mapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}   
        
    @ApiOperation(value = "获取JAVAR7D", tags = {"示例版本" } ,notes = "获取JAVAR7D")
    @RequestMapping(method= RequestMethod.GET , value="/samplevers/fetchjavar7d")
    public ResponseEntity<List<SampleVerDTO>> fetchJAVAR7D(SampleVerSearchContext context) {
        Page<SampleVer> domains = service.searchJAVAR7D(context) ;
        List<SampleVerDTO> list = mapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}
	

	@ApiOperation(value = "查询JAVAR7D", tags = {"示例版本" } ,notes = "查询JAVAR7D")
    @RequestMapping(method= RequestMethod.POST , value="/samplevers/searchjavar7d")
    public ResponseEntity<Page<SampleVerDTO>> searchJAVAR7D(@RequestBody SampleVerSearchContext context) {
        Page<SampleVer> domains = service.searchJAVAR7D(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(mapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}   
        
    @ApiOperation(value = "获取MOBR7D", tags = {"示例版本" } ,notes = "获取MOBR7D")
    @RequestMapping(method= RequestMethod.GET , value="/samplevers/fetchmobr7d")
    public ResponseEntity<List<SampleVerDTO>> fetchMOBR7D(SampleVerSearchContext context) {
        Page<SampleVer> domains = service.searchMOBR7D(context) ;
        List<SampleVerDTO> list = mapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}
	

	@ApiOperation(value = "查询MOBR7D", tags = {"示例版本" } ,notes = "查询MOBR7D")
    @RequestMapping(method= RequestMethod.POST , value="/samplevers/searchmobr7d")
    public ResponseEntity<Page<SampleVerDTO>> searchMOBR7D(@RequestBody SampleVerSearchContext context) {
        Page<SampleVer> domains = service.searchMOBR7D(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(mapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}   
        
    @ApiOperation(value = "获取WEBR7D", tags = {"示例版本" } ,notes = "获取WEBR7D")
    @RequestMapping(method= RequestMethod.GET , value="/samplevers/fetchwebr7d")
    public ResponseEntity<List<SampleVerDTO>> fetchWEBR7D(SampleVerSearchContext context) {
        Page<SampleVer> domains = service.searchWEBR7D(context) ;
        List<SampleVerDTO> list = mapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}
	

	@ApiOperation(value = "查询WEBR7D", tags = {"示例版本" } ,notes = "查询WEBR7D")
    @RequestMapping(method= RequestMethod.POST , value="/samplevers/searchwebr7d")
    public ResponseEntity<Page<SampleVerDTO>> searchWEBR7D(@RequestBody SampleVerSearchContext context) {
        Page<SampleVer> domains = service.searchWEBR7D(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(mapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}   
	



}
