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
    public IOrderService orderService;

    @Autowired
    @Lazy
    public OrderDTOMapping orderDtoMapping;

    @Autowired
    @Lazy
    public OrderSimpleDTOMapping orderSimpleDtoMapping;


    @ApiOperation(value = "订单", tags = {"订单" },  notes = "订单")
    @RequestMapping(method = RequestMethod.POST, value = "/orders")
    public ResponseEntity create() {
    }

    @ApiOperation(value = "订单", tags = {"订单" },  notes = "订单")
    @RequestMapping(method = RequestMethod.GET, value = "/orders/{orderId}")
    public ResponseEntity get(@PathVariable("orderId") String orderId) {
    }

    @ApiOperation(value = "订单", tags = {"订单" },  notes = "订单")
    @RequestMapping(method = RequestMethod.DELETE, value = "/orders/{orderId}")
    public ResponseEntity remove(@PathVariable("orderId") String orderId) {
    }

    @ApiOperation(value = "订单", tags = {"订单" },  notes = "订单")
    @RequestMapping(method = RequestMethod.PUT, value = "/orders/{orderId}")
    public ResponseEntity update(@PathVariable("orderId") String orderId) {
    }

    @ApiOperation(value = "订单", tags = {"订单" },  notes = "订单")
    @RequestMapping(method = RequestMethod.POST, value = "/orders/checkkey")
    public ResponseEntity checkKey() {
    }

    @ApiOperation(value = "订单", tags = {"订单" },  notes = "订单")
    @RequestMapping(method = RequestMethod.GET, value = "/orders/getdraft")
    public ResponseEntity getDraft() {
    }

    @ApiOperation(value = "订单", tags = {"订单" },  notes = "订单")
    @RequestMapping(method = RequestMethod.POST, value = "/orders/fetchdefault")
    public ResponseEntity fetchDefault() {
        Page<Order> domains = orderService.searchDefault() ;
            List<> list = Mapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "订单", tags = {"订单" },  notes = "订单")
    @RequestMapping(method = RequestMethod.POST, value = "/orders/fetchgroup")
    public ResponseEntity fetchGroup() {
        Page<Order> domains = orderService.searchGroup() ;
            List<> list = Mapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "订单", tags = {"订单" },  notes = "订单")
    @RequestMapping(method = RequestMethod.POST, value = "/orders/fetchpaying")
    public ResponseEntity fetchPaying() {
        Page<Order> domains = orderService.searchPaying() ;
            List<> list = Mapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "订单", tags = {"订单" },  notes = "订单")
    @RequestMapping(method = RequestMethod.POST, value = "/orders/fetchprocessing")
    public ResponseEntity fetchProcessing() {
        Page<Order> domains = orderService.searchProcessing() ;
            List<> list = Mapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "订单", tags = {"订单" },  notes = "订单")
    @RequestMapping(method = RequestMethod.POST, value = "/orders/select")
    public ResponseEntity select() {
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }


}
