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
import doc.core.sample.domain.Order;
import doc.core.sample.service.IOrderService;
import doc.core.sample.filter.OrderSearchContext;
import cn.ibizlab.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"订单" })
@RestController("sampleapi-order")
@RequestMapping("")
public class OrderResource {

    @Autowired
    public IOrderService orderService;

    @Autowired
    @Lazy
    public OrderDTOMapping orderDtoMapping;

    @Autowired
    @Lazy
    public OrderSimpleDTOMapping orderSimpleDtoMapping;


    @ApiOperation(value = "订单", tags = {"订单" },  notes = "订单")
    @RequestMapping(method = RequestMethod.POST, value = "/orders")
    public ResponseEntity create(@Validated @RequestBody OrderDTO orderDto) {
        Order order = orderDtoMapping.toDomain(orderDto);
        orderService.create(order);
        return ResponseEntity.status(HttpStatus.OK).body(orderDtoMapping.toDto(order));
    }

    @ApiOperation(value = "订单", tags = {"订单" },  notes = "订单")
    @RequestMapping(method = RequestMethod.GET, value = "/orders/{orderId}")
    public ResponseEntity getByOrderId(@PathVariable("orderId") String orderId) {
        Order order = orderService.get(orderId);
        return ResponseEntity.status(HttpStatus.OK).body(orderDtoMapping.toDto(order));
    }

    @ApiOperation(value = "订单", tags = {"订单" },  notes = "订单")
    @RequestMapping(method = RequestMethod.DELETE, value = "/orders/{orderId}")
    public ResponseEntity removeByOrderId(@PathVariable("orderId") String orderId) {
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "订单", tags = {"订单" },  notes = "订单")
    @RequestMapping(method = RequestMethod.PUT, value = "/orders/{orderId}")
    public ResponseEntity updateByOrderId(@PathVariable("orderId") String orderId, @Validated @RequestBody OrderDTO orderDto) {
        Order order = orderDtoMapping.toDomain(orderDto);
        order.setOrderId(orderId);
        orderService.update(order);
        return ResponseEntity.status(HttpStatus.OK).body(orderDtoMapping.toDto(order));
    }

    @ApiOperation(value = "订单", tags = {"订单" },  notes = "订单")
    @RequestMapping(method = RequestMethod.POST, value = "/orders/checkkey")
    public ResponseEntity checkKey(@Validated @RequestBody OrderDTO orderDto) {
        Order order = orderDtoMapping.toDomain(orderDto);
        orderService.checkKey(order);
        return ResponseEntity.status(HttpStatus.OK).body(0);
    }

    @ApiOperation(value = "订单", tags = {"订单" },  notes = "订单")
    @RequestMapping(method = RequestMethod.GET, value = "/orders/getdraft")
    public ResponseEntity getDraft(@Validated @RequestBody OrderDTO orderDto) {
        Order order = orderDtoMapping.toDomain(orderDto);
        orderService.getDraft(order);
        return ResponseEntity.status(HttpStatus.OK).body(orderDtoMapping.toDto(order));
    }

    @ApiOperation(value = "订单", tags = {"订单" },  notes = "订单")
    @RequestMapping(method = RequestMethod.POST, value = "/orders/fetchdefault")
    public ResponseEntity fetchDefault(@Validated @RequestBody OrderSearchContext orderSearchContext) {
        Page<Order> domains = orderService.searchDefault(orderSearchContext) ;
            List<OrderDTO> list = orderDtoMapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(orderSearchContext.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(orderSearchContext.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "订单", tags = {"订单" },  notes = "订单")
    @RequestMapping(method = RequestMethod.POST, value = "/orders/fetchgroup")
    public ResponseEntity fetchGroup(@Validated @RequestBody OrderSearchContext orderSearchContext) {
        Page<Order> domains = orderService.searchGroup(orderSearchContext) ;
            List<OrderDTO> list = orderDtoMapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(orderSearchContext.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(orderSearchContext.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "订单", tags = {"订单" },  notes = "订单")
    @RequestMapping(method = RequestMethod.POST, value = "/orders/fetchpaying")
    public ResponseEntity fetchPaying(@Validated @RequestBody OrderSearchContext orderSearchContext) {
        Page<Order> domains = orderService.searchPaying(orderSearchContext) ;
            List<OrderDTO> list = orderDtoMapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(orderSearchContext.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(orderSearchContext.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "订单", tags = {"订单" },  notes = "订单")
    @RequestMapping(method = RequestMethod.POST, value = "/orders/fetchprocessing")
    public ResponseEntity fetchProcessing(@Validated @RequestBody OrderSearchContext orderSearchContext) {
        Page<Order> domains = orderService.searchProcessing(orderSearchContext) ;
            List<OrderDTO> list = orderDtoMapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(orderSearchContext.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(orderSearchContext.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "订单", tags = {"订单" },  notes = "订单")
    @RequestMapping(method = RequestMethod.POST, value = "/orders/select")
    public ResponseEntity select() {
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }

    @ApiOperation(value = "订单", tags = {"订单" },  notes = "订单")
    @RequestMapping(method = RequestMethod.POST, value = "/customers/{customerId}/orders")
    public ResponseEntity createByCustomerId(@PathVariable("customerId") String customerId, @Validated @RequestBody OrderDTO orderDto) {
        Order order = orderDtoMapping.toDomain(orderDto);
        order.setCustomerId(customerId);
        orderService.create(order);
        return ResponseEntity.status(HttpStatus.OK).body(orderDtoMapping.toDto(order));
    }

    @ApiOperation(value = "订单", tags = {"订单" },  notes = "订单")
    @RequestMapping(method = RequestMethod.GET, value = "/customers/{customerId}/orders/{orderId}")
    public ResponseEntity getByCustomerIdAndOrderId(@PathVariable("customerId") String customerId, @PathVariable("orderId") String orderId) {
        Order order = orderService.get(orderId);
        return ResponseEntity.status(HttpStatus.OK).body(orderDtoMapping.toDto(order));
    }

    @ApiOperation(value = "订单", tags = {"订单" },  notes = "订单")
    @RequestMapping(method = RequestMethod.DELETE, value = "/customers/{customerId}/orders/{orderId}")
    public ResponseEntity removeByCustomerIdAndOrderId(@PathVariable("customerId") String customerId, @PathVariable("orderId") String orderId) {
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "订单", tags = {"订单" },  notes = "订单")
    @RequestMapping(method = RequestMethod.PUT, value = "/customers/{customerId}/orders/{orderId}")
    public ResponseEntity updateByCustomerIdAndOrderId(@PathVariable("customerId") String customerId, @PathVariable("orderId") String orderId, @Validated @RequestBody OrderDTO orderDto) {
        Order order = orderDtoMapping.toDomain(orderDto);
        order.setOrderId(orderId);
        orderService.update(order);
        return ResponseEntity.status(HttpStatus.OK).body(orderDtoMapping.toDto(order));
    }

    @ApiOperation(value = "订单", tags = {"订单" },  notes = "订单")
    @RequestMapping(method = RequestMethod.POST, value = "/customers/{customerId}/orders/checkkey")
    public ResponseEntity checkKeyByCustomerId(@PathVariable("customerId") String customerId, @Validated @RequestBody OrderDTO orderDto) {
        Order order = orderDtoMapping.toDomain(orderDto);
        order.setCustomerId(customerId);
        orderService.checkKey(order);
        return ResponseEntity.status(HttpStatus.OK).body(0);
    }

    @ApiOperation(value = "订单", tags = {"订单" },  notes = "订单")
    @RequestMapping(method = RequestMethod.GET, value = "/customers/{customerId}/orders/getdraft")
    public ResponseEntity getDraftByCustomerId(@PathVariable("customerId") String customerId, @Validated @RequestBody OrderDTO orderDto) {
        Order order = orderDtoMapping.toDomain(orderDto);
        order.setCustomerId(customerId);
        orderService.getDraft(order);
        return ResponseEntity.status(HttpStatus.OK).body(orderDtoMapping.toDto(order));
    }

    @ApiOperation(value = "订单", tags = {"订单" },  notes = "订单")
    @RequestMapping(method = RequestMethod.POST, value = "/customers/{customerId}/orders/fetchdefault")
    public ResponseEntity fetchDefaultByCustomerId(@PathVariable("customerId") String customerId, @Validated @RequestBody OrderSearchContext orderSearchContext) {
        orderSearchContext.setCustomerIdEQ(customerId);
        Page<Order> domains = orderService.searchDefault(orderSearchContext) ;
            List<OrderDTO> list = orderDtoMapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(orderSearchContext.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(orderSearchContext.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "订单", tags = {"订单" },  notes = "订单")
    @RequestMapping(method = RequestMethod.POST, value = "/customers/{customerId}/orders/fetchgroup")
    public ResponseEntity fetchGroupByCustomerId(@PathVariable("customerId") String customerId, @Validated @RequestBody OrderSearchContext orderSearchContext) {
        orderSearchContext.setCustomerIdEQ(customerId);
        Page<Order> domains = orderService.searchGroup(orderSearchContext) ;
            List<OrderDTO> list = orderDtoMapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(orderSearchContext.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(orderSearchContext.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "订单", tags = {"订单" },  notes = "订单")
    @RequestMapping(method = RequestMethod.POST, value = "/customers/{customerId}/orders/fetchpaying")
    public ResponseEntity fetchPayingByCustomerId(@PathVariable("customerId") String customerId, @Validated @RequestBody OrderSearchContext orderSearchContext) {
        orderSearchContext.setCustomerIdEQ(customerId);
        Page<Order> domains = orderService.searchPaying(orderSearchContext) ;
            List<OrderDTO> list = orderDtoMapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(orderSearchContext.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(orderSearchContext.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "订单", tags = {"订单" },  notes = "订单")
    @RequestMapping(method = RequestMethod.POST, value = "/customers/{customerId}/orders/fetchprocessing")
    public ResponseEntity fetchProcessingByCustomerId(@PathVariable("customerId") String customerId, @Validated @RequestBody OrderSearchContext orderSearchContext) {
        orderSearchContext.setCustomerIdEQ(customerId);
        Page<Order> domains = orderService.searchProcessing(orderSearchContext) ;
            List<OrderDTO> list = orderDtoMapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(orderSearchContext.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(orderSearchContext.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "订单", tags = {"订单" },  notes = "订单")
    @RequestMapping(method = RequestMethod.POST, value = "/customers/{customerId}/orders/select")
    public ResponseEntity selectByCustomerId(@PathVariable("customerId") String customerId) {
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }


}
