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
import doc.core.sample.domain.Product;
import doc.core.sample.service.IProductService;
import doc.core.sample.filter.ProductSearchContext;
import cn.ibizlab.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"产品" })
@RestController("sampleapi-product")
@RequestMapping("")
public class ProductResource {

    @Autowired
    public IProductService productService;

    @Autowired
    @Lazy
    public ProductDTOMapping productDtoMapping;

    @Autowired
    @Lazy
    public ProductSimpleDTOMapping productSimpleDtoMapping;


    @ApiOperation(value = "产品", tags = {"产品" },  notes = "产品")
    @RequestMapping(method = RequestMethod.POST, value = "/products")
    public ResponseEntity create(@Validated @RequestBody ProductDTO productDto) {
        Product product = productDtoMapping.toDomain(productDto);
        productService.create(product);
        return ResponseEntity.status(HttpStatus.OK).body(productDtoMapping.toDto(product));
    }

    @ApiOperation(value = "产品", tags = {"产品" },  notes = "产品")
    @RequestMapping(method = RequestMethod.GET, value = "/products/{productId}")
    public ResponseEntity getByProductId(@PathVariable("productId") String productId) {
        Product product = productService.get(productId);
        return ResponseEntity.status(HttpStatus.OK).body(productDtoMapping.toDto(product));
    }

    @ApiOperation(value = "产品", tags = {"产品" },  notes = "产品")
    @RequestMapping(method = RequestMethod.DELETE, value = "/products/{productId}")
    public ResponseEntity removeByProductId(@PathVariable("productId") String productId) {
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "产品", tags = {"产品" },  notes = "产品")
    @RequestMapping(method = RequestMethod.PUT, value = "/products/{productId}")
    public ResponseEntity updateByProductId(@PathVariable("productId") String productId, @Validated @RequestBody ProductDTO productDto) {
        Product product = productDtoMapping.toDomain(productDto);
        product.setProductId(productId);
        productService.update(product);
        return ResponseEntity.status(HttpStatus.OK).body(productDtoMapping.toDto(product));
    }

    @ApiOperation(value = "产品", tags = {"产品" },  notes = "产品")
    @RequestMapping(method = RequestMethod.POST, value = "/products/checkkey")
    public ResponseEntity checkKey(@Validated @RequestBody ProductDTO productDto) {
        Product product = productDtoMapping.toDomain(productDto);
        productService.checkKey(product);
        return ResponseEntity.status(HttpStatus.OK).body(0);
    }

    @ApiOperation(value = "产品", tags = {"产品" },  notes = "产品")
    @RequestMapping(method = RequestMethod.GET, value = "/products/getdraft")
    public ResponseEntity getDraft(@Validated @RequestBody ProductDTO productDto) {
        Product product = productDtoMapping.toDomain(productDto);
        productService.getDraft(product);
        return ResponseEntity.status(HttpStatus.OK).body(productDtoMapping.toDto(product));
    }

    @ApiOperation(value = "产品", tags = {"产品" },  notes = "产品")
    @RequestMapping(method = RequestMethod.POST, value = "/products/{productId}/save")
    public ResponseEntity saveByProductId(@PathVariable("productId") String productId, @Validated @RequestBody ProductDTO productDto) {
        Product product = productDtoMapping.toDomain(productDto);
        product.setProductId(productId);
        productService.save(product);
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "产品", tags = {"产品" },  notes = "产品")
    @RequestMapping(method = RequestMethod.POST, value = "/products/fetchbycategory")
    public ResponseEntity fetchByCategory(@Validated @RequestBody ProductSearchContext productSearchContext) {
        Page<Product> domains = productService.searchByCategory(productSearchContext) ;
            List<ProductDTO> list = productDtoMapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(productSearchContext.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(productSearchContext.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "产品", tags = {"产品" },  notes = "产品")
    @RequestMapping(method = RequestMethod.POST, value = "/products/fetchdefault")
    public ResponseEntity fetchDefault(@Validated @RequestBody ProductSearchContext productSearchContext) {
        Page<Product> domains = productService.searchDefault(productSearchContext) ;
            List<ProductDTO> list = productDtoMapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(productSearchContext.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(productSearchContext.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "产品", tags = {"产品" },  notes = "产品")
    @RequestMapping(method = RequestMethod.POST, value = "/products/select")
    public ResponseEntity select() {
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }


}
