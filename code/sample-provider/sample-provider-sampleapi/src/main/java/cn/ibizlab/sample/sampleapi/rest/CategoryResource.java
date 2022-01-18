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
    public ICategoryService categoryService;

    @Autowired
    @Lazy
    public CategoryDTOMapping categoryDtoMapping;

    @Autowired
    @Lazy
    public CategorySimpleDTOMapping categorySimpleDtoMapping;


    @ApiOperation(value = "类别", tags = {"类别" },  notes = "类别")
    @RequestMapping(method = RequestMethod.POST, value = "/categories")
    public ResponseEntity create() {
    }

    @ApiOperation(value = "类别", tags = {"类别" },  notes = "类别")
    @RequestMapping(method = RequestMethod.GET, value = "/categories/{categoryId}")
    public ResponseEntity getByCategoryId(@PathVariable("categoryId") String categoryId) {
    }

    @ApiOperation(value = "类别", tags = {"类别" },  notes = "类别")
    @RequestMapping(method = RequestMethod.DELETE, value = "/categories/{categoryId}")
    public ResponseEntity removeByCategoryId(@PathVariable("categoryId") String categoryId) {
    }

    @ApiOperation(value = "类别", tags = {"类别" },  notes = "类别")
    @RequestMapping(method = RequestMethod.PUT, value = "/categories/{categoryId}")
    public ResponseEntity updateByCategoryId(@PathVariable("categoryId") String categoryId) {
    }

    @ApiOperation(value = "类别", tags = {"类别" },  notes = "类别")
    @RequestMapping(method = RequestMethod.POST, value = "/categories/checkkey")
    public ResponseEntity checkKey() {
    }

    @ApiOperation(value = "类别", tags = {"类别" },  notes = "类别")
    @RequestMapping(method = RequestMethod.GET, value = "/categories/getdraft")
    public ResponseEntity getDraft() {
    }

    @ApiOperation(value = "类别", tags = {"类别" },  notes = "类别")
    @RequestMapping(method = RequestMethod.POST, value = "/categories/{categoryId}/save")
    public ResponseEntity saveByCategoryId(@PathVariable("categoryId") String categoryId) {
    }

    @ApiOperation(value = "类别", tags = {"类别" },  notes = "类别")
    @RequestMapping(method = RequestMethod.POST, value = "/categories/fetchdefault")
    public ResponseEntity fetchDefault() {
        Page<Category> domains = categoryService.searchDefault() ;
            List<> list = Mapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "类别", tags = {"类别" },  notes = "类别")
    @RequestMapping(method = RequestMethod.POST, value = "/categories/fetchroot")
    public ResponseEntity fetchRoot() {
        Page<Category> domains = categoryService.searchRoot() ;
            List<> list = Mapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "类别", tags = {"类别" },  notes = "类别")
    @RequestMapping(method = RequestMethod.POST, value = "/categories/select")
    public ResponseEntity select() {
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }


}
