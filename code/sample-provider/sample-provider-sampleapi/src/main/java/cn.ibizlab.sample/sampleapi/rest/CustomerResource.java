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
    public ICustomerService service;

    @Autowired
    @Lazy
    public CustomerMapping mapping;

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Customer-Create-all')")
    @ApiOperation(value = "新建客户", tags = {"客户" },  notes = "新建客户")
	@RequestMapping(method = RequestMethod.POST, value = "/customers")
    public ResponseEntity<CustomerDTO> create(@Validated @RequestBody CustomerDTO dto) {
        Customer domain = mapping.toDomain(dto);
		service.create(domain);
		return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Customer-Create-all')")
    @ApiOperation(value = "批量新建客户", tags = {"客户" },  notes = "批量新建客户")
	@RequestMapping(method = RequestMethod.POST, value = "/customers/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<CustomerDTO> dtos) {
        service.createBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Customer-Get-all')")
    @ApiOperation(value = "获取客户", tags = {"客户" },  notes = "获取客户")
	@RequestMapping(method = RequestMethod.GET, value = "/customers/{id}")
    public ResponseEntity<CustomerDTO> get(@PathVariable("id") String id) {
        Customer domain = service.get(id);
        CustomerDTO dto = mapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Customer-Remove-all')")
    @ApiOperation(value = "删除客户", tags = {"客户" },  notes = "删除客户")
	@RequestMapping(method = RequestMethod.DELETE, value = "/customers/{id}")
    public ResponseEntity<Boolean> remove(@PathVariable("id") String id) {
         return ResponseEntity.status(HttpStatus.OK).body(service.remove(id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Customer-Remove-all')")
    @ApiOperation(value = "批量删除客户", tags = {"客户" },  notes = "批量删除客户")
	@RequestMapping(method = RequestMethod.DELETE, value = "/customers/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<String> ids) {
        service.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @VersionCheck(entity = "customer" , versionfield = "updateDate")    
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Customer-Update-all')")
    @ApiOperation(value = "更新客户", tags = {"客户" },  notes = "更新客户")
	@RequestMapping(method = RequestMethod.PUT, value = "/customers/{id}")
    public ResponseEntity<CustomerDTO> update(@PathVariable("id") String id, @RequestBody CustomerDTO dto) {
		Customer domain  = mapping.toDomain(dto);
        domain.setCustomerId(id);
		service.update(domain);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Customer-Update-all')")
    @ApiOperation(value = "批量更新客户", tags = {"客户" },  notes = "批量更新客户")
	@RequestMapping(method = RequestMethod.PUT, value = "/customers/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<CustomerDTO> dtos) {
        service.updateBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "检查客户", tags = {"客户" },  notes = "检查客户")
	@RequestMapping(method = RequestMethod.POST, value = "/customers/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody CustomerDTO dto) {
        return  ResponseEntity.status(HttpStatus.OK).body(service.checkKey(mapping.toDomain(dto)));
    }

    @ApiOperation(value = "获取客户草稿", tags = {"客户" },  notes = "获取客户草稿")
	@RequestMapping(method = RequestMethod.GET, value = "/customers/getdraft")
    public ResponseEntity<CustomerDTO> getDraft(CustomerDTO dto) {
        Customer domain = mapping.toDomain(dto);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(service.getDraft(domain)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Customer-Save-all')")
    @ApiOperation(value = "保存客户", tags = {"客户" },  notes = "保存客户")
	@RequestMapping(method = RequestMethod.POST, value = "/customers/save")
    public ResponseEntity<CustomerDTO> save(@RequestBody CustomerDTO dto) {
        Customer domain = mapping.toDomain(dto);
        service.save(domain);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Customer-Save-all')")
    @ApiOperation(value = "批量保存客户", tags = {"客户" },  notes = "批量保存客户")
	@RequestMapping(method = RequestMethod.POST, value = "/customers/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<CustomerDTO> dtos) {
        service.saveBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

        
    @ApiOperation(value = "获取DEFAULT", tags = {"客户" } ,notes = "获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/customers/fetchdefault")
    public ResponseEntity<List<CustomerDTO>> fetchDefault(CustomerSearchContext context) {
        Page<Customer> domains = service.searchDefault(context) ;
        List<CustomerDTO> list = mapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}
	

	@ApiOperation(value = "查询DEFAULT", tags = {"客户" } ,notes = "查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/customers/searchdefault")
    public ResponseEntity<Page<CustomerDTO>> searchDefault(@RequestBody CustomerSearchContext context) {
        Page<Customer> domains = service.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(mapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}   
	



}
