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
    public IProductService productService;

    @Autowired
    @Lazy
    public ProductDTOMapping productDtoMapping;

    @Autowired
    @Lazy
    public ProductSimpleDTOMapping productSimpleDtoMapping;


    @ApiOperation(value = "产品", tags = {"产品" },  notes = "产品")
    @RequestMapping(method = RequestMethod.POST, value = "/products")
    public ResponseEntity create() {
    }

    @ApiOperation(value = "产品", tags = {"产品" },  notes = "产品")
    @RequestMapping(method = RequestMethod.GET, value = "/products/{productId}")
    public ResponseEntity get(@PathVariable("productId") String productId) {
    }

    @ApiOperation(value = "产品", tags = {"产品" },  notes = "产品")
    @RequestMapping(method = RequestMethod.DELETE, value = "/products/{productId}")
    public ResponseEntity remove(@PathVariable("productId") String productId) {
    }

    @ApiOperation(value = "产品", tags = {"产品" },  notes = "产品")
    @RequestMapping(method = RequestMethod.PUT, value = "/products/{productId}")
    public ResponseEntity update(@PathVariable("productId") String productId) {
    }

    @ApiOperation(value = "产品", tags = {"产品" },  notes = "产品")
    @RequestMapping(method = RequestMethod.POST, value = "/products/checkkey")
    public ResponseEntity checkKey() {
    }

    @ApiOperation(value = "产品", tags = {"产品" },  notes = "产品")
    @RequestMapping(method = RequestMethod.GET, value = "/products/getdraft")
    public ResponseEntity getDraft() {
    }

    @ApiOperation(value = "产品", tags = {"产品" },  notes = "产品")
    @RequestMapping(method = RequestMethod.POST, value = "/products/{productId}/save")
    public ResponseEntity save(@PathVariable("productId") String productId) {
    }

    @ApiOperation(value = "产品", tags = {"产品" },  notes = "产品")
    @RequestMapping(method = RequestMethod.POST, value = "/products/fetchbycategory")
    public ResponseEntity fetchByCategory() {
        Page<Product> domains = productService.searchByCategory() ;
            List<> list = Mapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "产品", tags = {"产品" },  notes = "产品")
    @RequestMapping(method = RequestMethod.POST, value = "/products/fetchdefault")
    public ResponseEntity fetchDefault() {
        Page<Product> domains = productService.searchDefault() ;
            List<> list = Mapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "产品", tags = {"产品" },  notes = "产品")
    @RequestMapping(method = RequestMethod.POST, value = "/products/select")
    public ResponseEntity select() {
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }


}
