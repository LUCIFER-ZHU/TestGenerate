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
import cn.ibizlab.sample.core.sample.domain.Customer;
import cn.ibizlab.sample.core.sample.service.ICustomerService;
import cn.ibizlab.sample.core.sample.filter.CustomerSearchContext;
import cn.ibizlab.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"客户" })
@RestController("sampleapi-customer")
@RequestMapping("")
public class CustomerResource {

    @Autowired
    public ICustomerService customerService;

    @Autowired
    @Lazy
    public CustomerDTOMapping customerDtoMapping;

    @Autowired
    @Lazy
    public CustomerSimpleDTOMapping customerSimpleDtoMapping;


    @ApiOperation(value = "客户", tags = {"客户" },  notes = "客户")
    @RequestMapping(method = RequestMethod.POST, value = "/customers")
    public ResponseEntity create() {
    }

    @ApiOperation(value = "客户", tags = {"客户" },  notes = "客户")
    @RequestMapping(method = RequestMethod.GET, value = "/customers/{customerId}")
    public ResponseEntity get(@PathVariable("customerId") String customerId) {
    }

    @ApiOperation(value = "客户", tags = {"客户" },  notes = "客户")
    @RequestMapping(method = RequestMethod.DELETE, value = "/customers/{customerId}")
    public ResponseEntity remove(@PathVariable("customerId") String customerId) {
    }

    @ApiOperation(value = "客户", tags = {"客户" },  notes = "客户")
    @RequestMapping(method = RequestMethod.PUT, value = "/customers/{customerId}")
    public ResponseEntity update(@PathVariable("customerId") String customerId) {
    }

    @ApiOperation(value = "客户", tags = {"客户" },  notes = "客户")
    @RequestMapping(method = RequestMethod.POST, value = "/customers/checkkey")
    public ResponseEntity checkKey() {
    }

    @ApiOperation(value = "客户", tags = {"客户" },  notes = "客户")
    @RequestMapping(method = RequestMethod.GET, value = "/customers/getdraft")
    public ResponseEntity getDraft() {
    }

    @ApiOperation(value = "客户", tags = {"客户" },  notes = "客户")
    @RequestMapping(method = RequestMethod.POST, value = "/customers/{customerId}/save")
    public ResponseEntity save(@PathVariable("customerId") String customerId) {
    }

    @ApiOperation(value = "客户", tags = {"客户" },  notes = "客户")
    @RequestMapping(method = RequestMethod.POST, value = "/customers/fetchdefault")
    public ResponseEntity fetchDefault() {
        Page<Customer> domains = customerService.searchDefault() ;
            List<> list = Mapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "客户", tags = {"客户" },  notes = "客户")
    @RequestMapping(method = RequestMethod.POST, value = "/customers/select")
    public ResponseEntity select() {
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }


}
