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
import cn.ibizlab.sample.core.sample.domain.Product;
import cn.ibizlab.sample.core.sample.service.IProductService;
import cn.ibizlab.sample.core.sample.filter.ProductSearchContext;
import cn.ibizlab.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"产品" })
@RestController("sampleapi-product")
@RequestMapping("")
public class ProductResource {

    @Autowired
    public IProductService service;

    @Autowired
    @Lazy
    public ProductMapping mapping;

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Product-Create-all')")
    @ApiOperation(value = "新建产品", tags = {"产品" },  notes = "新建产品")
	@RequestMapping(method = RequestMethod.POST, value = "/products")
    public ResponseEntity<ProductDTO> create(@Validated @RequestBody ProductDTO dto) {
        Product domain = mapping.toDomain(dto);
		service.create(domain);
		return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Product-Create-all')")
    @ApiOperation(value = "批量新建产品", tags = {"产品" },  notes = "批量新建产品")
	@RequestMapping(method = RequestMethod.POST, value = "/products/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<ProductDTO> dtos) {
        service.createBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Product-Get-all')")
    @ApiOperation(value = "获取产品", tags = {"产品" },  notes = "获取产品")
	@RequestMapping(method = RequestMethod.GET, value = "/products/{id}")
    public ResponseEntity<ProductDTO> get(@PathVariable("id") String id) {
        Product domain = service.get(id);
        ProductDTO dto = mapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Product-Remove-all')")
    @ApiOperation(value = "删除产品", tags = {"产品" },  notes = "删除产品")
	@RequestMapping(method = RequestMethod.DELETE, value = "/products/{id}")
    public ResponseEntity<Boolean> remove(@PathVariable("id") String id) {
         return ResponseEntity.status(HttpStatus.OK).body(service.remove(id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Product-Remove-all')")
    @ApiOperation(value = "批量删除产品", tags = {"产品" },  notes = "批量删除产品")
	@RequestMapping(method = RequestMethod.DELETE, value = "/products/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<String> ids) {
        service.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @VersionCheck(entity = "product" , versionfield = "updateDate")    
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Product-Update-all')")
    @ApiOperation(value = "更新产品", tags = {"产品" },  notes = "更新产品")
	@RequestMapping(method = RequestMethod.PUT, value = "/products/{id}")
    public ResponseEntity<ProductDTO> update(@PathVariable("id") String id, @RequestBody ProductDTO dto) {
		Product domain  = mapping.toDomain(dto);
        domain.setProductId(id);
		service.update(domain);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Product-Update-all')")
    @ApiOperation(value = "批量更新产品", tags = {"产品" },  notes = "批量更新产品")
	@RequestMapping(method = RequestMethod.PUT, value = "/products/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<ProductDTO> dtos) {
        service.updateBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "检查产品", tags = {"产品" },  notes = "检查产品")
	@RequestMapping(method = RequestMethod.POST, value = "/products/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody ProductDTO dto) {
        return  ResponseEntity.status(HttpStatus.OK).body(service.checkKey(mapping.toDomain(dto)));
    }

    @ApiOperation(value = "获取产品草稿", tags = {"产品" },  notes = "获取产品草稿")
	@RequestMapping(method = RequestMethod.GET, value = "/products/getdraft")
    public ResponseEntity<ProductDTO> getDraft(ProductDTO dto) {
        Product domain = mapping.toDomain(dto);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(service.getDraft(domain)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Product-Save-all')")
    @ApiOperation(value = "保存产品", tags = {"产品" },  notes = "保存产品")
	@RequestMapping(method = RequestMethod.POST, value = "/products/save")
    public ResponseEntity<ProductDTO> save(@RequestBody ProductDTO dto) {
        Product domain = mapping.toDomain(dto);
        service.save(domain);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Product-Save-all')")
    @ApiOperation(value = "批量保存产品", tags = {"产品" },  notes = "批量保存产品")
	@RequestMapping(method = RequestMethod.POST, value = "/products/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<ProductDTO> dtos) {
        service.saveBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

        
    @ApiOperation(value = "获取ByCategory", tags = {"产品" } ,notes = "获取ByCategory")
    @RequestMapping(method= RequestMethod.GET , value="/products/fetchbycategory")
    public ResponseEntity<List<ProductDTO>> fetchByCategory(ProductSearchContext context) {
        Page<Product> domains = service.searchByCategory(context) ;
        List<ProductDTO> list = mapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}
	

	@ApiOperation(value = "查询ByCategory", tags = {"产品" } ,notes = "查询ByCategory")
    @RequestMapping(method= RequestMethod.POST , value="/products/searchbycategory")
    public ResponseEntity<Page<ProductDTO>> searchByCategory(@RequestBody ProductSearchContext context) {
        Page<Product> domains = service.searchByCategory(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(mapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}   
        
    @ApiOperation(value = "获取DEFAULT", tags = {"产品" } ,notes = "获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/products/fetchdefault")
    public ResponseEntity<List<ProductDTO>> fetchDefault(ProductSearchContext context) {
        Page<Product> domains = service.searchDefault(context) ;
        List<ProductDTO> list = mapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}
	

	@ApiOperation(value = "查询DEFAULT", tags = {"产品" } ,notes = "查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/products/searchdefault")
    public ResponseEntity<Page<ProductDTO>> searchDefault(@RequestBody ProductSearchContext context) {
        Page<Product> domains = service.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(mapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}   
	



}
