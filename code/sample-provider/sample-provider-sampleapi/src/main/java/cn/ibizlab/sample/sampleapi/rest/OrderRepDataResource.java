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
import cn.ibizlab.sample.core.sample.domain.OrderRepData;
import cn.ibizlab.sample.core.sample.service.IOrderRepDataService;
import cn.ibizlab.sample.core.sample.filter.OrderRepDataSearchContext;
import cn.ibizlab.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"订单报表数据" })
@RestController("sampleapi-orderrepdata")
@RequestMapping("")
public class OrderRepDataResource {

    @Autowired
    public IOrderRepDataService orderRepDataService;

    @Autowired
    @Lazy
    public OrderRepDataDTOMapping orderRepDataDtoMapping;

    @Autowired
    @Lazy
    public OrderRepDataSimpleDTOMapping orderRepDataSimpleDtoMapping;


    @ApiOperation(value = "订单报表数据", tags = {"订单报表数据" },  notes = "订单报表数据")
    @RequestMapping(method = RequestMethod.POST, value = "/orderrepdatas")
    public ResponseEntity create() {
    }

    @ApiOperation(value = "订单报表数据", tags = {"订单报表数据" },  notes = "订单报表数据")
    @RequestMapping(method = RequestMethod.GET, value = "/orderrepdatas/{orderRepDataId}")
    public ResponseEntity get(@PathVariable("orderRepDataId") String orderRepDataId) {
    }

    @ApiOperation(value = "订单报表数据", tags = {"订单报表数据" },  notes = "订单报表数据")
    @RequestMapping(method = RequestMethod.DELETE, value = "/orderrepdatas/{orderRepDataId}")
    public ResponseEntity remove(@PathVariable("orderRepDataId") String orderRepDataId) {
    }

    @ApiOperation(value = "订单报表数据", tags = {"订单报表数据" },  notes = "订单报表数据")
    @RequestMapping(method = RequestMethod.PUT, value = "/orderrepdatas/{orderRepDataId}")
    public ResponseEntity update(@PathVariable("orderRepDataId") String orderRepDataId) {
    }

    @ApiOperation(value = "订单报表数据", tags = {"订单报表数据" },  notes = "订单报表数据")
    @RequestMapping(method = RequestMethod.POST, value = "/orderrepdatas/checkkey")
    public ResponseEntity checkKey() {
    }

    @ApiOperation(value = "订单报表数据", tags = {"订单报表数据" },  notes = "订单报表数据")
    @RequestMapping(method = RequestMethod.GET, value = "/orderrepdatas/getdraft")
    public ResponseEntity getDraft() {
    }

    @ApiOperation(value = "订单报表数据", tags = {"订单报表数据" },  notes = "订单报表数据")
    @RequestMapping(method = RequestMethod.POST, value = "/orderrepdatas/{orderRepDataId}/save")
    public ResponseEntity save(@PathVariable("orderRepDataId") String orderRepDataId) {
    }

    @ApiOperation(value = "订单报表数据", tags = {"订单报表数据" },  notes = "订单报表数据")
    @RequestMapping(method = RequestMethod.POST, value = "/orderrepdatas/fetchdefault")
    public ResponseEntity fetchDefault() {
        Page<OrderRepData> domains = orderRepDataService.searchDefault() ;
            List<> list = Mapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "订单报表数据", tags = {"订单报表数据" },  notes = "订单报表数据")
    @RequestMapping(method = RequestMethod.POST, value = "/orderrepdatas/fetchgroup")
    public ResponseEntity fetchGroup() {
        Page<OrderRepData> domains = orderRepDataService.searchGroup() ;
            List<> list = Mapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "订单报表数据", tags = {"订单报表数据" },  notes = "订单报表数据")
    @RequestMapping(method = RequestMethod.POST, value = "/orderrepdatas/select")
    public ResponseEntity select() {
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }


}
