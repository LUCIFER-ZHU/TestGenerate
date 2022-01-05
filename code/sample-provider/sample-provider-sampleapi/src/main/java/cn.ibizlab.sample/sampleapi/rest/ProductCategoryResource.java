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
import cn.ibizlab.sample.core.sample.domain.ProductCategory;
import cn.ibizlab.sample.core.sample.service.IProductCategoryService;
import cn.ibizlab.sample.core.sample.filter.ProductCategorySearchContext;
import cn.ibizlab.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"产品类别" })
@RestController("sampleapi-productcategory")
@RequestMapping("")
public class ProductCategoryResource {

    @Autowired
    public IProductCategoryService service;

    @Autowired
    @Lazy
    public ProductCategoryMapping mapping;

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-ProductCategory-Create-all')")
    @ApiOperation(value = "新建产品类别", tags = {"产品类别" },  notes = "新建产品类别")
	@RequestMapping(method = RequestMethod.POST, value = "/productcategories")
    public ResponseEntity<ProductCategoryDTO> create(@Validated @RequestBody ProductCategoryDTO dto) {
        ProductCategory domain = mapping.toDomain(dto);
		service.create(domain);
		return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-ProductCategory-Create-all')")
    @ApiOperation(value = "批量新建产品类别", tags = {"产品类别" },  notes = "批量新建产品类别")
	@RequestMapping(method = RequestMethod.POST, value = "/productcategories/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<ProductCategoryDTO> dtos) {
        service.createBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-ProductCategory-Get-all')")
    @ApiOperation(value = "获取产品类别", tags = {"产品类别" },  notes = "获取产品类别")
	@RequestMapping(method = RequestMethod.GET, value = "/productcategories/{id}")
    public ResponseEntity<ProductCategoryDTO> get(@PathVariable("id") String id) {
        ProductCategory domain = service.get(id);
        ProductCategoryDTO dto = mapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-ProductCategory-Remove-all')")
    @ApiOperation(value = "删除产品类别", tags = {"产品类别" },  notes = "删除产品类别")
	@RequestMapping(method = RequestMethod.DELETE, value = "/productcategories/{id}")
    public ResponseEntity<Boolean> remove(@PathVariable("id") String id) {
         return ResponseEntity.status(HttpStatus.OK).body(service.remove(id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-ProductCategory-Remove-all')")
    @ApiOperation(value = "批量删除产品类别", tags = {"产品类别" },  notes = "批量删除产品类别")
	@RequestMapping(method = RequestMethod.DELETE, value = "/productcategories/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<String> ids) {
        service.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @VersionCheck(entity = "productcategory" , versionfield = "updateDate")    
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-ProductCategory-Update-all')")
    @ApiOperation(value = "更新产品类别", tags = {"产品类别" },  notes = "更新产品类别")
	@RequestMapping(method = RequestMethod.PUT, value = "/productcategories/{id}")
    public ResponseEntity<ProductCategoryDTO> update(@PathVariable("id") String id, @RequestBody ProductCategoryDTO dto) {
		ProductCategory domain  = mapping.toDomain(dto);
        domain.setProductCategoryId(id);
		service.update(domain);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-ProductCategory-Update-all')")
    @ApiOperation(value = "批量更新产品类别", tags = {"产品类别" },  notes = "批量更新产品类别")
	@RequestMapping(method = RequestMethod.PUT, value = "/productcategories/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<ProductCategoryDTO> dtos) {
        service.updateBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "检查产品类别", tags = {"产品类别" },  notes = "检查产品类别")
	@RequestMapping(method = RequestMethod.POST, value = "/productcategories/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody ProductCategoryDTO dto) {
        return  ResponseEntity.status(HttpStatus.OK).body(service.checkKey(mapping.toDomain(dto)));
    }

    @ApiOperation(value = "获取产品类别草稿", tags = {"产品类别" },  notes = "获取产品类别草稿")
	@RequestMapping(method = RequestMethod.GET, value = "/productcategories/getdraft")
    public ResponseEntity<ProductCategoryDTO> getDraft(ProductCategoryDTO dto) {
        ProductCategory domain = mapping.toDomain(dto);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(service.getDraft(domain)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-ProductCategory-Save-all')")
    @ApiOperation(value = "保存产品类别", tags = {"产品类别" },  notes = "保存产品类别")
	@RequestMapping(method = RequestMethod.POST, value = "/productcategories/save")
    public ResponseEntity<ProductCategoryDTO> save(@RequestBody ProductCategoryDTO dto) {
        ProductCategory domain = mapping.toDomain(dto);
        service.save(domain);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-ProductCategory-Save-all')")
    @ApiOperation(value = "批量保存产品类别", tags = {"产品类别" },  notes = "批量保存产品类别")
	@RequestMapping(method = RequestMethod.POST, value = "/productcategories/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<ProductCategoryDTO> dtos) {
        service.saveBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

        
    @ApiOperation(value = "获取DEFAULT", tags = {"产品类别" } ,notes = "获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/productcategories/fetchdefault")
    public ResponseEntity<List<ProductCategoryDTO>> fetchDefault(ProductCategorySearchContext context) {
        Page<ProductCategory> domains = service.searchDefault(context) ;
        List<ProductCategoryDTO> list = mapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}
	

	@ApiOperation(value = "查询DEFAULT", tags = {"产品类别" } ,notes = "查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/productcategories/searchdefault")
    public ResponseEntity<Page<ProductCategoryDTO>> searchDefault(@RequestBody ProductCategorySearchContext context) {
        Page<ProductCategory> domains = service.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(mapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}   
	



}
