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
    public IImpExpDataService service;

    @Autowired
    @Lazy
    public ImpExpDataMapping mapping;

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-ImpExpData-Create-all')")
    @ApiOperation(value = "新建导入导出数据", tags = {"导入导出数据" },  notes = "新建导入导出数据")
	@RequestMapping(method = RequestMethod.POST, value = "/impexpdatas")
    public ResponseEntity<ImpExpDataDTO> create(@Validated @RequestBody ImpExpDataDTO dto) {
        ImpExpData domain = mapping.toDomain(dto);
		service.create(domain);
		return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-ImpExpData-Create-all')")
    @ApiOperation(value = "批量新建导入导出数据", tags = {"导入导出数据" },  notes = "批量新建导入导出数据")
	@RequestMapping(method = RequestMethod.POST, value = "/impexpdatas/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<ImpExpDataDTO> dtos) {
        service.createBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-ImpExpData-Get-all')")
    @ApiOperation(value = "获取导入导出数据", tags = {"导入导出数据" },  notes = "获取导入导出数据")
	@RequestMapping(method = RequestMethod.GET, value = "/impexpdatas/{id}")
    public ResponseEntity<ImpExpDataDTO> get(@PathVariable("id") String id) {
        ImpExpData domain = service.get(id);
        ImpExpDataDTO dto = mapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-ImpExpData-Remove-all')")
    @ApiOperation(value = "删除导入导出数据", tags = {"导入导出数据" },  notes = "删除导入导出数据")
	@RequestMapping(method = RequestMethod.DELETE, value = "/impexpdatas/{id}")
    public ResponseEntity<Boolean> remove(@PathVariable("id") String id) {
         return ResponseEntity.status(HttpStatus.OK).body(service.remove(id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-ImpExpData-Remove-all')")
    @ApiOperation(value = "批量删除导入导出数据", tags = {"导入导出数据" },  notes = "批量删除导入导出数据")
	@RequestMapping(method = RequestMethod.DELETE, value = "/impexpdatas/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<String> ids) {
        service.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @VersionCheck(entity = "impexpdata" , versionfield = "updateDate")    
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-ImpExpData-Update-all')")
    @ApiOperation(value = "更新导入导出数据", tags = {"导入导出数据" },  notes = "更新导入导出数据")
	@RequestMapping(method = RequestMethod.PUT, value = "/impexpdatas/{id}")
    public ResponseEntity<ImpExpDataDTO> update(@PathVariable("id") String id, @RequestBody ImpExpDataDTO dto) {
		ImpExpData domain  = mapping.toDomain(dto);
        domain.setImpExpDataId(id);
		service.update(domain);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-ImpExpData-Update-all')")
    @ApiOperation(value = "批量更新导入导出数据", tags = {"导入导出数据" },  notes = "批量更新导入导出数据")
	@RequestMapping(method = RequestMethod.PUT, value = "/impexpdatas/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<ImpExpDataDTO> dtos) {
        service.updateBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "检查导入导出数据", tags = {"导入导出数据" },  notes = "检查导入导出数据")
	@RequestMapping(method = RequestMethod.POST, value = "/impexpdatas/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody ImpExpDataDTO dto) {
        return  ResponseEntity.status(HttpStatus.OK).body(service.checkKey(mapping.toDomain(dto)));
    }

    @ApiOperation(value = "获取导入导出数据草稿", tags = {"导入导出数据" },  notes = "获取导入导出数据草稿")
	@RequestMapping(method = RequestMethod.GET, value = "/impexpdatas/getdraft")
    public ResponseEntity<ImpExpDataDTO> getDraft(ImpExpDataDTO dto) {
        ImpExpData domain = mapping.toDomain(dto);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(service.getDraft(domain)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-ImpExpData-Save-all')")
    @ApiOperation(value = "保存导入导出数据", tags = {"导入导出数据" },  notes = "保存导入导出数据")
	@RequestMapping(method = RequestMethod.POST, value = "/impexpdatas/save")
    public ResponseEntity<ImpExpDataDTO> save(@RequestBody ImpExpDataDTO dto) {
        ImpExpData domain = mapping.toDomain(dto);
        service.save(domain);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-ImpExpData-Save-all')")
    @ApiOperation(value = "批量保存导入导出数据", tags = {"导入导出数据" },  notes = "批量保存导入导出数据")
	@RequestMapping(method = RequestMethod.POST, value = "/impexpdatas/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<ImpExpDataDTO> dtos) {
        service.saveBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

        
    @ApiOperation(value = "获取DEFAULT", tags = {"导入导出数据" } ,notes = "获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/impexpdatas/fetchdefault")
    public ResponseEntity<List<ImpExpDataDTO>> fetchDefault(ImpExpDataSearchContext context) {
        Page<ImpExpData> domains = service.searchDefault(context) ;
        List<ImpExpDataDTO> list = mapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}
	

	@ApiOperation(value = "查询DEFAULT", tags = {"导入导出数据" } ,notes = "查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/impexpdatas/searchdefault")
    public ResponseEntity<Page<ImpExpDataDTO>> searchDefault(@RequestBody ImpExpDataSearchContext context) {
        Page<ImpExpData> domains = service.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(mapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}   
	



}
