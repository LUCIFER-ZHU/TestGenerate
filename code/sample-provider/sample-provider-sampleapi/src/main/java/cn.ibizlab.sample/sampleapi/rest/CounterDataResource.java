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
import cn.ibizlab.sample.core.sample.domain.CounterData;
import cn.ibizlab.sample.core.sample.service.ICounterDataService;
import cn.ibizlab.sample.core.sample.filter.CounterDataSearchContext;
import cn.ibizlab.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"计数器数据" })
@RestController("sampleapi-counterdata")
@RequestMapping("")
public class CounterDataResource {

    @Autowired
    public ICounterDataService service;

    @Autowired
    @Lazy
    public CounterDataMapping mapping;

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-CounterData-Create-all')")
    @ApiOperation(value = "新建计数器数据", tags = {"计数器数据" },  notes = "新建计数器数据")
	@RequestMapping(method = RequestMethod.POST, value = "/counterdatas")
    public ResponseEntity<CounterDataDTO> create(@Validated @RequestBody CounterDataDTO dto) {
        CounterData domain = mapping.toDomain(dto);
		service.create(domain);
		return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-CounterData-Create-all')")
    @ApiOperation(value = "批量新建计数器数据", tags = {"计数器数据" },  notes = "批量新建计数器数据")
	@RequestMapping(method = RequestMethod.POST, value = "/counterdatas/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<CounterDataDTO> dtos) {
        service.createBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-CounterData-Get-all')")
    @ApiOperation(value = "获取计数器数据", tags = {"计数器数据" },  notes = "获取计数器数据")
	@RequestMapping(method = RequestMethod.GET, value = "/counterdatas/{id}")
    public ResponseEntity<CounterDataDTO> get(@PathVariable("id") String id) {
        CounterData domain = service.get(id);
        CounterDataDTO dto = mapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-CounterData-Remove-all')")
    @ApiOperation(value = "删除计数器数据", tags = {"计数器数据" },  notes = "删除计数器数据")
	@RequestMapping(method = RequestMethod.DELETE, value = "/counterdatas/{id}")
    public ResponseEntity<Boolean> remove(@PathVariable("id") String id) {
         return ResponseEntity.status(HttpStatus.OK).body(service.remove(id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-CounterData-Remove-all')")
    @ApiOperation(value = "批量删除计数器数据", tags = {"计数器数据" },  notes = "批量删除计数器数据")
	@RequestMapping(method = RequestMethod.DELETE, value = "/counterdatas/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<String> ids) {
        service.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @VersionCheck(entity = "counterdata" , versionfield = "updateDate")    
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-CounterData-Update-all')")
    @ApiOperation(value = "更新计数器数据", tags = {"计数器数据" },  notes = "更新计数器数据")
	@RequestMapping(method = RequestMethod.PUT, value = "/counterdatas/{id}")
    public ResponseEntity<CounterDataDTO> update(@PathVariable("id") String id, @RequestBody CounterDataDTO dto) {
		CounterData domain  = mapping.toDomain(dto);
        domain.setCounterDataId(id);
		service.update(domain);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-CounterData-Update-all')")
    @ApiOperation(value = "批量更新计数器数据", tags = {"计数器数据" },  notes = "批量更新计数器数据")
	@RequestMapping(method = RequestMethod.PUT, value = "/counterdatas/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<CounterDataDTO> dtos) {
        service.updateBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "检查计数器数据", tags = {"计数器数据" },  notes = "检查计数器数据")
	@RequestMapping(method = RequestMethod.POST, value = "/counterdatas/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody CounterDataDTO dto) {
        return  ResponseEntity.status(HttpStatus.OK).body(service.checkKey(mapping.toDomain(dto)));
    }

    @ApiOperation(value = "获取计数器数据草稿", tags = {"计数器数据" },  notes = "获取计数器数据草稿")
	@RequestMapping(method = RequestMethod.GET, value = "/counterdatas/getdraft")
    public ResponseEntity<CounterDataDTO> getDraft(CounterDataDTO dto) {
        CounterData domain = mapping.toDomain(dto);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(service.getDraft(domain)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-CounterData-Save-all')")
    @ApiOperation(value = "保存计数器数据", tags = {"计数器数据" },  notes = "保存计数器数据")
	@RequestMapping(method = RequestMethod.POST, value = "/counterdatas/save")
    public ResponseEntity<CounterDataDTO> save(@RequestBody CounterDataDTO dto) {
        CounterData domain = mapping.toDomain(dto);
        service.save(domain);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-CounterData-Save-all')")
    @ApiOperation(value = "批量保存计数器数据", tags = {"计数器数据" },  notes = "批量保存计数器数据")
	@RequestMapping(method = RequestMethod.POST, value = "/counterdatas/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<CounterDataDTO> dtos) {
        service.saveBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

        
    @ApiOperation(value = "获取DEFAULT", tags = {"计数器数据" } ,notes = "获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/counterdatas/fetchdefault")
    public ResponseEntity<List<CounterDataDTO>> fetchDefault(CounterDataSearchContext context) {
        Page<CounterData> domains = service.searchDefault(context) ;
        List<CounterDataDTO> list = mapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}
	

	@ApiOperation(value = "查询DEFAULT", tags = {"计数器数据" } ,notes = "查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/counterdatas/searchdefault")
    public ResponseEntity<Page<CounterDataDTO>> searchDefault(@RequestBody CounterDataSearchContext context) {
        Page<CounterData> domains = service.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(mapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}   
	



}
