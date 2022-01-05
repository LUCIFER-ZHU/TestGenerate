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
import cn.ibizlab.sample.core.sample.domain.Category;
import cn.ibizlab.sample.core.sample.service.ICategoryService;
import cn.ibizlab.sample.core.sample.filter.CategorySearchContext;
import cn.ibizlab.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"类别" })
@RestController("sampleapi-category")
@RequestMapping("")
public class CategoryResource {

    @Autowired
    public ICategoryService service;

    @Autowired
    @Lazy
    public CategoryMapping mapping;

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Category-Create-all')")
    @ApiOperation(value = "新建类别", tags = {"类别" },  notes = "新建类别")
	@RequestMapping(method = RequestMethod.POST, value = "/categories")
    public ResponseEntity<CategoryDTO> create(@Validated @RequestBody CategoryDTO dto) {
        Category domain = mapping.toDomain(dto);
		service.create(domain);
		return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Category-Create-all')")
    @ApiOperation(value = "批量新建类别", tags = {"类别" },  notes = "批量新建类别")
	@RequestMapping(method = RequestMethod.POST, value = "/categories/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<CategoryDTO> dtos) {
        service.createBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Category-Get-all')")
    @ApiOperation(value = "获取类别", tags = {"类别" },  notes = "获取类别")
	@RequestMapping(method = RequestMethod.GET, value = "/categories/{id}")
    public ResponseEntity<CategoryDTO> get(@PathVariable("id") String id) {
        Category domain = service.get(id);
        CategoryDTO dto = mapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Category-Remove-all')")
    @ApiOperation(value = "删除类别", tags = {"类别" },  notes = "删除类别")
	@RequestMapping(method = RequestMethod.DELETE, value = "/categories/{id}")
    public ResponseEntity<Boolean> remove(@PathVariable("id") String id) {
         return ResponseEntity.status(HttpStatus.OK).body(service.remove(id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Category-Remove-all')")
    @ApiOperation(value = "批量删除类别", tags = {"类别" },  notes = "批量删除类别")
	@RequestMapping(method = RequestMethod.DELETE, value = "/categories/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<String> ids) {
        service.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @VersionCheck(entity = "category" , versionfield = "updateDate")    
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Category-Update-all')")
    @ApiOperation(value = "更新类别", tags = {"类别" },  notes = "更新类别")
	@RequestMapping(method = RequestMethod.PUT, value = "/categories/{id}")
    public ResponseEntity<CategoryDTO> update(@PathVariable("id") String id, @RequestBody CategoryDTO dto) {
		Category domain  = mapping.toDomain(dto);
        domain.setCategoryId(id);
		service.update(domain);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Category-Update-all')")
    @ApiOperation(value = "批量更新类别", tags = {"类别" },  notes = "批量更新类别")
	@RequestMapping(method = RequestMethod.PUT, value = "/categories/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<CategoryDTO> dtos) {
        service.updateBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "检查类别", tags = {"类别" },  notes = "检查类别")
	@RequestMapping(method = RequestMethod.POST, value = "/categories/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody CategoryDTO dto) {
        return  ResponseEntity.status(HttpStatus.OK).body(service.checkKey(mapping.toDomain(dto)));
    }

    @ApiOperation(value = "获取类别草稿", tags = {"类别" },  notes = "获取类别草稿")
	@RequestMapping(method = RequestMethod.GET, value = "/categories/getdraft")
    public ResponseEntity<CategoryDTO> getDraft(CategoryDTO dto) {
        Category domain = mapping.toDomain(dto);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(service.getDraft(domain)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Category-Save-all')")
    @ApiOperation(value = "保存类别", tags = {"类别" },  notes = "保存类别")
	@RequestMapping(method = RequestMethod.POST, value = "/categories/save")
    public ResponseEntity<CategoryDTO> save(@RequestBody CategoryDTO dto) {
        Category domain = mapping.toDomain(dto);
        service.save(domain);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Category-Save-all')")
    @ApiOperation(value = "批量保存类别", tags = {"类别" },  notes = "批量保存类别")
	@RequestMapping(method = RequestMethod.POST, value = "/categories/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<CategoryDTO> dtos) {
        service.saveBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

        
    @ApiOperation(value = "获取DEFAULT", tags = {"类别" } ,notes = "获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/categories/fetchdefault")
    public ResponseEntity<List<CategoryDTO>> fetchDefault(CategorySearchContext context) {
        Page<Category> domains = service.searchDefault(context) ;
        List<CategoryDTO> list = mapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}
	

	@ApiOperation(value = "查询DEFAULT", tags = {"类别" } ,notes = "查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/categories/searchdefault")
    public ResponseEntity<Page<CategoryDTO>> searchDefault(@RequestBody CategorySearchContext context) {
        Page<Category> domains = service.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(mapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}   
        
    @ApiOperation(value = "获取Root", tags = {"类别" } ,notes = "获取Root")
    @RequestMapping(method= RequestMethod.GET , value="/categories/fetchroot")
    public ResponseEntity<List<CategoryDTO>> fetchRoot(CategorySearchContext context) {
        Page<Category> domains = service.searchRoot(context) ;
        List<CategoryDTO> list = mapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}
	

	@ApiOperation(value = "查询Root", tags = {"类别" } ,notes = "查询Root")
    @RequestMapping(method= RequestMethod.POST , value="/categories/searchroot")
    public ResponseEntity<Page<CategoryDTO>> searchRoot(@RequestBody CategorySearchContext context) {
        Page<Category> domains = service.searchRoot(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(mapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}   
	



}
