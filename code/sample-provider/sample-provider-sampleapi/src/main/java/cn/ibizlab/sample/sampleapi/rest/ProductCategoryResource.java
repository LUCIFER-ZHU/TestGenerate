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
    public IProductCategoryService productCategoryService;

    @Autowired
    @Lazy
    public ProductCategoryDTOMapping productCategoryDtoMapping;

    @Autowired
    @Lazy
    public ProductCategorySimpleDTOMapping productCategorySimpleDtoMapping;


    @ApiOperation(value = "产品类别", tags = {"产品类别" },  notes = "产品类别")
    @RequestMapping(method = RequestMethod.POST, value = "/productcategories")
    public ResponseEntity create() {
    }

    @ApiOperation(value = "产品类别", tags = {"产品类别" },  notes = "产品类别")
    @RequestMapping(method = RequestMethod.GET, value = "/productcategories/{productCategoryId}")
    public ResponseEntity get(@PathVariable("productCategoryId") String productCategoryId) {
    }

    @ApiOperation(value = "产品类别", tags = {"产品类别" },  notes = "产品类别")
    @RequestMapping(method = RequestMethod.DELETE, value = "/productcategories/{productCategoryId}")
    public ResponseEntity remove(@PathVariable("productCategoryId") String productCategoryId) {
    }

    @ApiOperation(value = "产品类别", tags = {"产品类别" },  notes = "产品类别")
    @RequestMapping(method = RequestMethod.PUT, value = "/productcategories/{productCategoryId}")
    public ResponseEntity update(@PathVariable("productCategoryId") String productCategoryId) {
    }

    @ApiOperation(value = "产品类别", tags = {"产品类别" },  notes = "产品类别")
    @RequestMapping(method = RequestMethod.POST, value = "/productcategories/checkkey")
    public ResponseEntity checkKey() {
    }

    @ApiOperation(value = "产品类别", tags = {"产品类别" },  notes = "产品类别")
    @RequestMapping(method = RequestMethod.GET, value = "/productcategories/getdraft")
    public ResponseEntity getDraft() {
    }

    @ApiOperation(value = "产品类别", tags = {"产品类别" },  notes = "产品类别")
    @RequestMapping(method = RequestMethod.POST, value = "/productcategories/{productCategoryId}/save")
    public ResponseEntity save(@PathVariable("productCategoryId") String productCategoryId) {
    }

    @ApiOperation(value = "产品类别", tags = {"产品类别" },  notes = "产品类别")
    @RequestMapping(method = RequestMethod.POST, value = "/productcategories/fetchdefault")
    public ResponseEntity fetchDefault() {
        Page<ProductCategory> domains = productCategoryService.searchDefault() ;
            List<> list = Mapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "产品类别", tags = {"产品类别" },  notes = "产品类别")
    @RequestMapping(method = RequestMethod.POST, value = "/productcategories/select")
    public ResponseEntity select() {
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }


}
