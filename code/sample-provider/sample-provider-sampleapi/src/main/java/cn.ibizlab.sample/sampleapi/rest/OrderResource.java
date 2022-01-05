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
import cn.ibizlab.sample.core.sample.domain.Order;
import cn.ibizlab.sample.core.sample.service.IOrderService;
import cn.ibizlab.sample.core.sample.filter.OrderSearchContext;
import cn.ibizlab.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"订单" })
@RestController("sampleapi-order")
@RequestMapping("")
public class OrderResource {

    @Autowired
    public IOrderService service;

    @Autowired
    @Lazy
    public OrderMapping mapping;

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Order-Create-all')")
    @ApiOperation(value = "新建订单", tags = {"订单" },  notes = "新建订单")
	@RequestMapping(method = RequestMethod.POST, value = "/orders")
    public ResponseEntity<OrderDTO> create(@Validated @RequestBody OrderDTO dto) {
        Order domain = mapping.toDomain(dto);
		service.create(domain);
		return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Order-Create-all')")
    @ApiOperation(value = "批量新建订单", tags = {"订单" },  notes = "批量新建订单")
	@RequestMapping(method = RequestMethod.POST, value = "/orders/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<OrderDTO> dtos) {
        service.createBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Order-Get-all')")
    @ApiOperation(value = "获取订单", tags = {"订单" },  notes = "获取订单")
	@RequestMapping(method = RequestMethod.GET, value = "/orders/{id}")
    public ResponseEntity<OrderDTO> get(@PathVariable("id") String id) {
        Order domain = service.get(id);
        OrderDTO dto = mapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Order-Remove-all')")
    @ApiOperation(value = "删除订单", tags = {"订单" },  notes = "删除订单")
	@RequestMapping(method = RequestMethod.DELETE, value = "/orders/{id}")
    public ResponseEntity<Boolean> remove(@PathVariable("id") String id) {
         return ResponseEntity.status(HttpStatus.OK).body(service.remove(id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Order-Remove-all')")
    @ApiOperation(value = "批量删除订单", tags = {"订单" },  notes = "批量删除订单")
	@RequestMapping(method = RequestMethod.DELETE, value = "/orders/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<String> ids) {
        service.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @VersionCheck(entity = "order" , versionfield = "updateDate")    
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Order-Update-all')")
    @ApiOperation(value = "更新订单", tags = {"订单" },  notes = "更新订单")
	@RequestMapping(method = RequestMethod.PUT, value = "/orders/{id}")
    public ResponseEntity<OrderDTO> update(@PathVariable("id") String id, @RequestBody OrderDTO dto) {
		Order domain  = mapping.toDomain(dto);
        domain.setOrderId(id);
		service.update(domain);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Order-Update-all')")
    @ApiOperation(value = "批量更新订单", tags = {"订单" },  notes = "批量更新订单")
	@RequestMapping(method = RequestMethod.PUT, value = "/orders/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<OrderDTO> dtos) {
        service.updateBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "检查订单", tags = {"订单" },  notes = "检查订单")
	@RequestMapping(method = RequestMethod.POST, value = "/orders/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody OrderDTO dto) {
        return  ResponseEntity.status(HttpStatus.OK).body(service.checkKey(mapping.toDomain(dto)));
    }

    @ApiOperation(value = "获取订单草稿", tags = {"订单" },  notes = "获取订单草稿")
	@RequestMapping(method = RequestMethod.GET, value = "/orders/getdraft")
    public ResponseEntity<OrderDTO> getDraft(OrderDTO dto) {
        Order domain = mapping.toDomain(dto);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(service.getDraft(domain)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Order-Save-all')")
    @ApiOperation(value = "保存订单", tags = {"订单" },  notes = "保存订单")
	@RequestMapping(method = RequestMethod.POST, value = "/orders/save")
    public ResponseEntity<OrderDTO> save(@RequestBody OrderDTO dto) {
        Order domain = mapping.toDomain(dto);
        service.save(domain);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Order-Save-all')")
    @ApiOperation(value = "批量保存订单", tags = {"订单" },  notes = "批量保存订单")
	@RequestMapping(method = RequestMethod.POST, value = "/orders/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<OrderDTO> dtos) {
        service.saveBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

        
    @ApiOperation(value = "获取DEFAULT", tags = {"订单" } ,notes = "获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/orders/fetchdefault")
    public ResponseEntity<List<OrderDTO>> fetchDefault(OrderSearchContext context) {
        Page<Order> domains = service.searchDefault(context) ;
        List<OrderDTO> list = mapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}
	

	@ApiOperation(value = "查询DEFAULT", tags = {"订单" } ,notes = "查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/orders/searchdefault")
    public ResponseEntity<Page<OrderDTO>> searchDefault(@RequestBody OrderSearchContext context) {
        Page<Order> domains = service.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(mapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}   
        
    @ApiOperation(value = "获取Group", tags = {"订单" } ,notes = "获取Group")
    @RequestMapping(method= RequestMethod.GET , value="/orders/fetchgroup")
    public ResponseEntity<List<OrderDTO>> fetchGroup(OrderSearchContext context) {
        Page<Order> domains = service.searchGroup(context) ;
        List<OrderDTO> list = mapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}
	

	@ApiOperation(value = "查询Group", tags = {"订单" } ,notes = "查询Group")
    @RequestMapping(method= RequestMethod.POST , value="/orders/searchgroup")
    public ResponseEntity<Page<OrderDTO>> searchGroup(@RequestBody OrderSearchContext context) {
        Page<Order> domains = service.searchGroup(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(mapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}   
        
    @ApiOperation(value = "获取Paying", tags = {"订单" } ,notes = "获取Paying")
    @RequestMapping(method= RequestMethod.GET , value="/orders/fetchpaying")
    public ResponseEntity<List<OrderDTO>> fetchPaying(OrderSearchContext context) {
        Page<Order> domains = service.searchPaying(context) ;
        List<OrderDTO> list = mapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}
	

	@ApiOperation(value = "查询Paying", tags = {"订单" } ,notes = "查询Paying")
    @RequestMapping(method= RequestMethod.POST , value="/orders/searchpaying")
    public ResponseEntity<Page<OrderDTO>> searchPaying(@RequestBody OrderSearchContext context) {
        Page<Order> domains = service.searchPaying(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(mapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}   
        
    @ApiOperation(value = "获取Processing", tags = {"订单" } ,notes = "获取Processing")
    @RequestMapping(method= RequestMethod.GET , value="/orders/fetchprocessing")
    public ResponseEntity<List<OrderDTO>> fetchProcessing(OrderSearchContext context) {
        Page<Order> domains = service.searchProcessing(context) ;
        List<OrderDTO> list = mapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}
	

	@ApiOperation(value = "查询Processing", tags = {"订单" } ,notes = "查询Processing")
    @RequestMapping(method= RequestMethod.POST , value="/orders/searchprocessing")
    public ResponseEntity<Page<OrderDTO>> searchProcessing(@RequestBody OrderSearchContext context) {
        Page<Order> domains = service.searchProcessing(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(mapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}   
	



}
