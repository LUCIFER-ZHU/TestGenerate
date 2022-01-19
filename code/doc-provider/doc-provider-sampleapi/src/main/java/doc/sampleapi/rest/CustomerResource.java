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
import doc.core.sample.domain.Customer;
import doc.core.sample.service.ICustomerService;
import doc.core.sample.filter.CustomerSearchContext;
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
    public ResponseEntity create(@Validated @RequestBody CustomerDTO customerDto) {
        Customer customer = customerDtoMapping.toDomain(customerDto);
        customerService.create(customer);
        return ResponseEntity.status(HttpStatus.OK).body(customerDtoMapping.toDto(customer));
    }

    @ApiOperation(value = "客户", tags = {"客户" },  notes = "客户")
    @RequestMapping(method = RequestMethod.GET, value = "/customers/{customerId}")
    public ResponseEntity getByCustomerId(@PathVariable("customerId") String customerId) {
        Customer customer = customerService.get(customerId);
        return ResponseEntity.status(HttpStatus.OK).body(customerDtoMapping.toDto(customer));
    }

    @ApiOperation(value = "客户", tags = {"客户" },  notes = "客户")
    @RequestMapping(method = RequestMethod.DELETE, value = "/customers/{customerId}")
    public ResponseEntity removeByCustomerId(@PathVariable("customerId") String customerId) {
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "客户", tags = {"客户" },  notes = "客户")
    @RequestMapping(method = RequestMethod.PUT, value = "/customers/{customerId}")
    public ResponseEntity updateByCustomerId(@PathVariable("customerId") String customerId, @Validated @RequestBody CustomerDTO customerDto) {
        Customer customer = customerDtoMapping.toDomain(customerDto);
        customer.setCustomerId(customerId);
        customerService.update(customer);
        return ResponseEntity.status(HttpStatus.OK).body(customerDtoMapping.toDto(customer));
    }

    @ApiOperation(value = "客户", tags = {"客户" },  notes = "客户")
    @RequestMapping(method = RequestMethod.POST, value = "/customers/checkkey")
    public ResponseEntity checkKey(@Validated @RequestBody CustomerDTO customerDto) {
        Customer customer = customerDtoMapping.toDomain(customerDto);
        customerService.checkKey(customer);
        return ResponseEntity.status(HttpStatus.OK).body(0);
    }

    @ApiOperation(value = "客户", tags = {"客户" },  notes = "客户")
    @RequestMapping(method = RequestMethod.GET, value = "/customers/getdraft")
    public ResponseEntity getDraft(@Validated @RequestBody CustomerDTO customerDto) {
        Customer customer = customerDtoMapping.toDomain(customerDto);
        customerService.getDraft(customer);
        return ResponseEntity.status(HttpStatus.OK).body(customerDtoMapping.toDto(customer));
    }

    @ApiOperation(value = "客户", tags = {"客户" },  notes = "客户")
    @RequestMapping(method = RequestMethod.POST, value = "/customers/{customerId}/save")
    public ResponseEntity saveByCustomerId(@PathVariable("customerId") String customerId, @Validated @RequestBody CustomerDTO customerDto) {
        Customer customer = customerDtoMapping.toDomain(customerDto);
        customer.setCustomerId(customerId);
        customerService.save(customer);
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "客户", tags = {"客户" },  notes = "客户")
    @RequestMapping(method = RequestMethod.POST, value = "/customers/fetchdefault")
    public ResponseEntity fetchDefault(@Validated @RequestBody CustomerSearchContext customerSearchContext) {
        Page<Customer> domains = customerService.searchDefault(customerSearchContext) ;
            List<CustomerDTO> list = customerDtoMapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(customerSearchContext.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(customerSearchContext.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "客户", tags = {"客户" },  notes = "客户")
    @RequestMapping(method = RequestMethod.POST, value = "/customers/select")
    public ResponseEntity select() {
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }


}
