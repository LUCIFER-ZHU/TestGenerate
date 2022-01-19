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
import doc.core.sample.domain.ProductCategory;
import doc.core.sample.service.IProductCategoryService;
import doc.core.sample.filter.ProductCategorySearchContext;
import cn.ibizlab.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"产品类别" })
@RestController("sampleapi-productcategory")
@RequestMapping("")
public class ProductCategoryResource {

    @Autowired
    public IProductCategoryService productCategoryService;

    @Autowired
    @Lazy
    public ProductCategoryDTOMapping productCategoryDtoMapping;

    @Autowired
    @Lazy
    public ProductCategorySimpleDTOMapping productCategorySimpleDtoMapping;


    @ApiOperation(value = "产品类别", tags = {"产品类别" },  notes = "产品类别")
    @RequestMapping(method = RequestMethod.POST, value = "/productcategories")
    public ResponseEntity create(@Validated @RequestBody List<ProductCategoryDTO> list) {
        productCategoryService.createBatch(productCategoryDtoMapping.toDomain(list));
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "产品类别", tags = {"产品类别" },  notes = "产品类别")
    @RequestMapping(method = RequestMethod.GET, value = "/productcategories/{productCategoryId}")
    public ResponseEntity getByProductCategoryId(@PathVariable("productCategoryId") String productCategoryId) {
        ProductCategory productCategory = productCategoryService.get(productCategoryId);
        return ResponseEntity.status(HttpStatus.OK).body(productCategoryDtoMapping.toDto(productCategory));
    }

    @ApiOperation(value = "产品类别", tags = {"产品类别" },  notes = "产品类别")
    @RequestMapping(method = RequestMethod.DELETE, value = "/productcategories/{productCategoryId}")
    public ResponseEntity removeByProductCategoryId(@PathVariable("productCategoryId") String productCategoryId) {
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "产品类别", tags = {"产品类别" },  notes = "产品类别")
    @RequestMapping(method = RequestMethod.PUT, value = "/productcategories/{productCategoryId}")
    public ResponseEntity updateByProductCategoryId(@PathVariable("productCategoryId") String productCategoryId, @Validated @RequestBody List<ProductCategoryDTO> list) {
        productCategoryService.updateBatch(productCategoryDtoMapping.toDomain(list));
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "产品类别", tags = {"产品类别" },  notes = "产品类别")
    @RequestMapping(method = RequestMethod.POST, value = "/productcategories/checkkey")
    public ResponseEntity checkKey(@Validated @RequestBody ProductCategoryDTO productCategoryDto) {
        ProductCategory productCategory = productCategoryDtoMapping.toDomain(productCategoryDto);
        productCategoryService.checkKey(productCategory);
        return ResponseEntity.status(HttpStatus.OK).body(0);
    }

    @ApiOperation(value = "产品类别", tags = {"产品类别" },  notes = "产品类别")
    @RequestMapping(method = RequestMethod.GET, value = "/productcategories/getdraft")
    public ResponseEntity getDraft(@Validated @RequestBody ProductCategoryDTO productCategoryDto) {
        ProductCategory productCategory = productCategoryDtoMapping.toDomain(productCategoryDto);
        productCategoryService.getDraft(productCategory);
        return ResponseEntity.status(HttpStatus.OK).body(productCategoryDtoMapping.toDto(productCategory));
    }

    @ApiOperation(value = "产品类别", tags = {"产品类别" },  notes = "产品类别")
    @RequestMapping(method = RequestMethod.POST, value = "/productcategories/{productCategoryId}/save")
    public ResponseEntity saveByProductCategoryId(@PathVariable("productCategoryId") String productCategoryId, @Validated @RequestBody List<ProductCategoryDTO> list) {
        productCategoryService.saveBatch(productCategoryDtoMapping.toDomain(list));
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "产品类别", tags = {"产品类别" },  notes = "产品类别")
    @RequestMapping(method = RequestMethod.POST, value = "/productcategories/fetchdefault")
    public ResponseEntity fetchDefault(@Validated @RequestBody ProductCategorySearchContext productCategorySearchContext) {
        Page<ProductCategory> domains = productCategoryService.searchDefault(productCategorySearchContext) ;
            List<ProductCategoryDTO> list = productCategoryDtoMapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(productCategorySearchContext.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(productCategorySearchContext.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "产品类别", tags = {"产品类别" },  notes = "产品类别")
    @RequestMapping(method = RequestMethod.POST, value = "/productcategories/select")
    public ResponseEntity select() {
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }

    @ApiOperation(value = "产品类别", tags = {"产品类别" },  notes = "产品类别")
    @RequestMapping(method = RequestMethod.POST, value = "/products/{productId}/productcategories")
    public ResponseEntity createByProductId(@PathVariable("productId") String productId, @Validated @RequestBody List<ProductCategoryDTO> list) {
        productCategoryService.createBatch(productCategoryDtoMapping.toDomain(list));
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "产品类别", tags = {"产品类别" },  notes = "产品类别")
    @RequestMapping(method = RequestMethod.GET, value = "/products/{productId}/productcategories/{productCategoryId}")
    public ResponseEntity getByProductIdAndProductCategoryId(@PathVariable("productId") String productId, @PathVariable("productCategoryId") String productCategoryId) {
        ProductCategory productCategory = productCategoryService.get(productCategoryId);
        return ResponseEntity.status(HttpStatus.OK).body(productCategoryDtoMapping.toDto(productCategory));
    }

    @ApiOperation(value = "产品类别", tags = {"产品类别" },  notes = "产品类别")
    @RequestMapping(method = RequestMethod.DELETE, value = "/products/{productId}/productcategories/{productCategoryId}")
    public ResponseEntity removeByProductIdAndProductCategoryId(@PathVariable("productId") String productId, @PathVariable("productCategoryId") String productCategoryId) {
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "产品类别", tags = {"产品类别" },  notes = "产品类别")
    @RequestMapping(method = RequestMethod.PUT, value = "/products/{productId}/productcategories/{productCategoryId}")
    public ResponseEntity updateByProductIdAndProductCategoryId(@PathVariable("productId") String productId, @PathVariable("productCategoryId") String productCategoryId, @Validated @RequestBody List<ProductCategoryDTO> list) {
        productCategoryService.updateBatch(productCategoryDtoMapping.toDomain(list));
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "产品类别", tags = {"产品类别" },  notes = "产品类别")
    @RequestMapping(method = RequestMethod.POST, value = "/products/{productId}/productcategories/checkkey")
    public ResponseEntity checkKeyByProductId(@PathVariable("productId") String productId, @Validated @RequestBody ProductCategoryDTO productCategoryDto) {
        ProductCategory productCategory = productCategoryDtoMapping.toDomain(productCategoryDto);
        productCategory.setProductId(productId);
        productCategoryService.checkKey(productCategory);
        return ResponseEntity.status(HttpStatus.OK).body(0);
    }

    @ApiOperation(value = "产品类别", tags = {"产品类别" },  notes = "产品类别")
    @RequestMapping(method = RequestMethod.GET, value = "/products/{productId}/productcategories/getdraft")
    public ResponseEntity getDraftByProductId(@PathVariable("productId") String productId, @Validated @RequestBody ProductCategoryDTO productCategoryDto) {
        ProductCategory productCategory = productCategoryDtoMapping.toDomain(productCategoryDto);
        productCategory.setProductId(productId);
        productCategoryService.getDraft(productCategory);
        return ResponseEntity.status(HttpStatus.OK).body(productCategoryDtoMapping.toDto(productCategory));
    }

    @ApiOperation(value = "产品类别", tags = {"产品类别" },  notes = "产品类别")
    @RequestMapping(method = RequestMethod.POST, value = "/products/{productId}/productcategories/{productCategoryId}/save")
    public ResponseEntity saveByProductIdAndProductCategoryId(@PathVariable("productId") String productId, @PathVariable("productCategoryId") String productCategoryId, @Validated @RequestBody List<ProductCategoryDTO> list) {
        productCategoryService.saveBatch(productCategoryDtoMapping.toDomain(list));
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "产品类别", tags = {"产品类别" },  notes = "产品类别")
    @RequestMapping(method = RequestMethod.POST, value = "/products/{productId}/productcategories/fetchdefault")
    public ResponseEntity fetchDefaultByProductId(@PathVariable("productId") String productId, @Validated @RequestBody ProductCategorySearchContext productCategorySearchContext) {
        productCategorySearchContext.setProductIdEQ(productId);
        Page<ProductCategory> domains = productCategoryService.searchDefault(productCategorySearchContext) ;
            List<ProductCategoryDTO> list = productCategoryDtoMapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(productCategorySearchContext.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(productCategorySearchContext.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "产品类别", tags = {"产品类别" },  notes = "产品类别")
    @RequestMapping(method = RequestMethod.POST, value = "/products/{productId}/productcategories/select")
    public ResponseEntity selectByProductId(@PathVariable("productId") String productId) {
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }

    @ApiOperation(value = "产品类别", tags = {"产品类别" },  notes = "产品类别")
    @RequestMapping(method = RequestMethod.POST, value = "/categories/{categoryId}/productcategories")
    public ResponseEntity createByCategoryId(@PathVariable("categoryId") String categoryId, @Validated @RequestBody List<ProductCategoryDTO> list) {
        productCategoryService.createBatch(productCategoryDtoMapping.toDomain(list));
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "产品类别", tags = {"产品类别" },  notes = "产品类别")
    @RequestMapping(method = RequestMethod.GET, value = "/categories/{categoryId}/productcategories/{productCategoryId}")
    public ResponseEntity getByCategoryIdAndProductCategoryId(@PathVariable("categoryId") String categoryId, @PathVariable("productCategoryId") String productCategoryId) {
        ProductCategory productCategory = productCategoryService.get(productCategoryId);
        return ResponseEntity.status(HttpStatus.OK).body(productCategoryDtoMapping.toDto(productCategory));
    }

    @ApiOperation(value = "产品类别", tags = {"产品类别" },  notes = "产品类别")
    @RequestMapping(method = RequestMethod.DELETE, value = "/categories/{categoryId}/productcategories/{productCategoryId}")
    public ResponseEntity removeByCategoryIdAndProductCategoryId(@PathVariable("categoryId") String categoryId, @PathVariable("productCategoryId") String productCategoryId) {
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "产品类别", tags = {"产品类别" },  notes = "产品类别")
    @RequestMapping(method = RequestMethod.PUT, value = "/categories/{categoryId}/productcategories/{productCategoryId}")
    public ResponseEntity updateByCategoryIdAndProductCategoryId(@PathVariable("categoryId") String categoryId, @PathVariable("productCategoryId") String productCategoryId, @Validated @RequestBody List<ProductCategoryDTO> list) {
        productCategoryService.updateBatch(productCategoryDtoMapping.toDomain(list));
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "产品类别", tags = {"产品类别" },  notes = "产品类别")
    @RequestMapping(method = RequestMethod.POST, value = "/categories/{categoryId}/productcategories/checkkey")
    public ResponseEntity checkKeyByCategoryId(@PathVariable("categoryId") String categoryId, @Validated @RequestBody ProductCategoryDTO productCategoryDto) {
        ProductCategory productCategory = productCategoryDtoMapping.toDomain(productCategoryDto);
        productCategory.setCategoryId(categoryId);
        productCategoryService.checkKey(productCategory);
        return ResponseEntity.status(HttpStatus.OK).body(0);
    }

    @ApiOperation(value = "产品类别", tags = {"产品类别" },  notes = "产品类别")
    @RequestMapping(method = RequestMethod.GET, value = "/categories/{categoryId}/productcategories/getdraft")
    public ResponseEntity getDraftByCategoryId(@PathVariable("categoryId") String categoryId, @Validated @RequestBody ProductCategoryDTO productCategoryDto) {
        ProductCategory productCategory = productCategoryDtoMapping.toDomain(productCategoryDto);
        productCategory.setCategoryId(categoryId);
        productCategoryService.getDraft(productCategory);
        return ResponseEntity.status(HttpStatus.OK).body(productCategoryDtoMapping.toDto(productCategory));
    }

    @ApiOperation(value = "产品类别", tags = {"产品类别" },  notes = "产品类别")
    @RequestMapping(method = RequestMethod.POST, value = "/categories/{categoryId}/productcategories/{productCategoryId}/save")
    public ResponseEntity saveByCategoryIdAndProductCategoryId(@PathVariable("categoryId") String categoryId, @PathVariable("productCategoryId") String productCategoryId, @Validated @RequestBody List<ProductCategoryDTO> list) {
        productCategoryService.saveBatch(productCategoryDtoMapping.toDomain(list));
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "产品类别", tags = {"产品类别" },  notes = "产品类别")
    @RequestMapping(method = RequestMethod.POST, value = "/categories/{categoryId}/productcategories/fetchdefault")
    public ResponseEntity fetchDefaultByCategoryId(@PathVariable("categoryId") String categoryId, @Validated @RequestBody ProductCategorySearchContext productCategorySearchContext) {
        productCategorySearchContext.setCategoryIdEQ(categoryId);
        Page<ProductCategory> domains = productCategoryService.searchDefault(productCategorySearchContext) ;
            List<ProductCategoryDTO> list = productCategoryDtoMapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(productCategorySearchContext.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(productCategorySearchContext.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "产品类别", tags = {"产品类别" },  notes = "产品类别")
    @RequestMapping(method = RequestMethod.POST, value = "/categories/{categoryId}/productcategories/select")
    public ResponseEntity selectByCategoryId(@PathVariable("categoryId") String categoryId) {
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }


}
