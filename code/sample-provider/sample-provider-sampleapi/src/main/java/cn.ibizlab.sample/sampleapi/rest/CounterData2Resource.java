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
import cn.ibizlab.sample.core.sample.domain.CounterData2;
import cn.ibizlab.sample.core.sample.service.ICounterData2Service;
import cn.ibizlab.sample.core.sample.filter.CounterData2SearchContext;
import cn.ibizlab.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"计数器数据2" })
@RestController("sampleapi-counterdata2")
@RequestMapping("")
public class CounterData2Resource {

    @Autowired
    public ICounterData2Service service;

    @Autowired
    @Lazy
    public CounterData2Mapping mapping;

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-CounterData2-Create-all')")
    @ApiOperation(value = "新建计数器数据2", tags = {"计数器数据2" },  notes = "新建计数器数据2")
	@RequestMapping(method = RequestMethod.POST, value = "/counterdata2s")
    public ResponseEntity<CounterData2DTO> create(@Validated @RequestBody CounterData2DTO dto) {
        CounterData2 domain = mapping.toDomain(dto);
		service.create(domain);
		return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-CounterData2-Create-all')")
    @ApiOperation(value = "批量新建计数器数据2", tags = {"计数器数据2" },  notes = "批量新建计数器数据2")
	@RequestMapping(method = RequestMethod.POST, value = "/counterdata2s/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<CounterData2DTO> dtos) {
        service.createBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-CounterData2-Get-all')")
    @ApiOperation(value = "获取计数器数据2", tags = {"计数器数据2" },  notes = "获取计数器数据2")
	@RequestMapping(method = RequestMethod.GET, value = "/counterdata2s/{id}")
    public ResponseEntity<CounterData2DTO> get(@PathVariable("id") String id) {
        CounterData2 domain = service.get(id);
        CounterData2DTO dto = mapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-CounterData2-Remove-all')")
    @ApiOperation(value = "删除计数器数据2", tags = {"计数器数据2" },  notes = "删除计数器数据2")
	@RequestMapping(method = RequestMethod.DELETE, value = "/counterdata2s/{id}")
    public ResponseEntity<Boolean> remove(@PathVariable("id") String id) {
         return ResponseEntity.status(HttpStatus.OK).body(service.remove(id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-CounterData2-Remove-all')")
    @ApiOperation(value = "批量删除计数器数据2", tags = {"计数器数据2" },  notes = "批量删除计数器数据2")
	@RequestMapping(method = RequestMethod.DELETE, value = "/counterdata2s/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<String> ids) {
        service.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @VersionCheck(entity = "counterdata2" , versionfield = "updateDate")    
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-CounterData2-Update-all')")
    @ApiOperation(value = "更新计数器数据2", tags = {"计数器数据2" },  notes = "更新计数器数据2")
	@RequestMapping(method = RequestMethod.PUT, value = "/counterdata2s/{id}")
    public ResponseEntity<CounterData2DTO> update(@PathVariable("id") String id, @RequestBody CounterData2DTO dto) {
		CounterData2 domain  = mapping.toDomain(dto);
        domain.setCounterData2Id(id);
		service.update(domain);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-CounterData2-Update-all')")
    @ApiOperation(value = "批量更新计数器数据2", tags = {"计数器数据2" },  notes = "批量更新计数器数据2")
	@RequestMapping(method = RequestMethod.PUT, value = "/counterdata2s/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<CounterData2DTO> dtos) {
        service.updateBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "检查计数器数据2", tags = {"计数器数据2" },  notes = "检查计数器数据2")
	@RequestMapping(method = RequestMethod.POST, value = "/counterdata2s/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody CounterData2DTO dto) {
        return  ResponseEntity.status(HttpStatus.OK).body(service.checkKey(mapping.toDomain(dto)));
    }

    @ApiOperation(value = "获取计数器数据2草稿", tags = {"计数器数据2" },  notes = "获取计数器数据2草稿")
	@RequestMapping(method = RequestMethod.GET, value = "/counterdata2s/getdraft")
    public ResponseEntity<CounterData2DTO> getDraft(CounterData2DTO dto) {
        CounterData2 domain = mapping.toDomain(dto);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(service.getDraft(domain)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-CounterData2-Save-all')")
    @ApiOperation(value = "保存计数器数据2", tags = {"计数器数据2" },  notes = "保存计数器数据2")
	@RequestMapping(method = RequestMethod.POST, value = "/counterdata2s/save")
    public ResponseEntity<CounterData2DTO> save(@RequestBody CounterData2DTO dto) {
        CounterData2 domain = mapping.toDomain(dto);
        service.save(domain);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-CounterData2-Save-all')")
    @ApiOperation(value = "批量保存计数器数据2", tags = {"计数器数据2" },  notes = "批量保存计数器数据2")
	@RequestMapping(method = RequestMethod.POST, value = "/counterdata2s/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<CounterData2DTO> dtos) {
        service.saveBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

        
    @ApiOperation(value = "获取DEFAULT", tags = {"计数器数据2" } ,notes = "获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/counterdata2s/fetchdefault")
    public ResponseEntity<List<CounterData2DTO>> fetchDefault(CounterData2SearchContext context) {
        Page<CounterData2> domains = service.searchDefault(context) ;
        List<CounterData2DTO> list = mapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}
	

	@ApiOperation(value = "查询DEFAULT", tags = {"计数器数据2" } ,notes = "查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/counterdata2s/searchdefault")
    public ResponseEntity<Page<CounterData2DTO>> searchDefault(@RequestBody CounterData2SearchContext context) {
        Page<CounterData2> domains = service.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(mapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}   
	



}
