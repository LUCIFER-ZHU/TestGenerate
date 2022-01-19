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
import doc.core.sample.domain.OrderRepData;
import doc.core.sample.service.IOrderRepDataService;
import doc.core.sample.filter.OrderRepDataSearchContext;
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
    public ResponseEntity create(@Validated @RequestBody OrderRepDataDTO orderRepDataDto) {
        OrderRepData orderRepData = orderRepDataDtoMapping.toDomain(orderRepDataDto);
        orderRepDataService.create(orderRepData);
        return ResponseEntity.status(HttpStatus.OK).body(orderRepDataDtoMapping.toDto(orderRepData));
    }

    @ApiOperation(value = "订单报表数据", tags = {"订单报表数据" },  notes = "订单报表数据")
    @RequestMapping(method = RequestMethod.GET, value = "/orderrepdatas/{orderRepDataId}")
    public ResponseEntity getByOrderRepDataId(@PathVariable("orderRepDataId") String orderRepDataId) {
        OrderRepData orderRepData = orderRepDataService.get(orderRepDataId);
        return ResponseEntity.status(HttpStatus.OK).body(orderRepDataDtoMapping.toDto(orderRepData));
    }

    @ApiOperation(value = "订单报表数据", tags = {"订单报表数据" },  notes = "订单报表数据")
    @RequestMapping(method = RequestMethod.DELETE, value = "/orderrepdatas/{orderRepDataId}")
    public ResponseEntity removeByOrderRepDataId(@PathVariable("orderRepDataId") String orderRepDataId) {
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "订单报表数据", tags = {"订单报表数据" },  notes = "订单报表数据")
    @RequestMapping(method = RequestMethod.PUT, value = "/orderrepdatas/{orderRepDataId}")
    public ResponseEntity updateByOrderRepDataId(@PathVariable("orderRepDataId") String orderRepDataId, @Validated @RequestBody OrderRepDataDTO orderRepDataDto) {
        OrderRepData orderRepData = orderRepDataDtoMapping.toDomain(orderRepDataDto);
        orderRepData.setOrderRepDataId(orderRepDataId);
        orderRepDataService.update(orderRepData);
        return ResponseEntity.status(HttpStatus.OK).body(orderRepDataDtoMapping.toDto(orderRepData));
    }

    @ApiOperation(value = "订单报表数据", tags = {"订单报表数据" },  notes = "订单报表数据")
    @RequestMapping(method = RequestMethod.POST, value = "/orderrepdatas/checkkey")
    public ResponseEntity checkKey(@Validated @RequestBody OrderRepDataDTO orderRepDataDto) {
        OrderRepData orderRepData = orderRepDataDtoMapping.toDomain(orderRepDataDto);
        orderRepDataService.checkKey(orderRepData);
        return ResponseEntity.status(HttpStatus.OK).body(0);
    }

    @ApiOperation(value = "订单报表数据", tags = {"订单报表数据" },  notes = "订单报表数据")
    @RequestMapping(method = RequestMethod.GET, value = "/orderrepdatas/getdraft")
    public ResponseEntity getDraft(@Validated @RequestBody OrderRepDataDTO orderRepDataDto) {
        OrderRepData orderRepData = orderRepDataDtoMapping.toDomain(orderRepDataDto);
        orderRepDataService.getDraft(orderRepData);
        return ResponseEntity.status(HttpStatus.OK).body(orderRepDataDtoMapping.toDto(orderRepData));
    }

    @ApiOperation(value = "订单报表数据", tags = {"订单报表数据" },  notes = "订单报表数据")
    @RequestMapping(method = RequestMethod.POST, value = "/orderrepdatas/{orderRepDataId}/save")
    public ResponseEntity saveByOrderRepDataId(@PathVariable("orderRepDataId") String orderRepDataId, @Validated @RequestBody OrderRepDataDTO orderRepDataDto) {
        OrderRepData orderRepData = orderRepDataDtoMapping.toDomain(orderRepDataDto);
        orderRepData.setOrderRepDataId(orderRepDataId);
        orderRepDataService.save(orderRepData);
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "订单报表数据", tags = {"订单报表数据" },  notes = "订单报表数据")
    @RequestMapping(method = RequestMethod.POST, value = "/orderrepdatas/fetchdefault")
    public ResponseEntity fetchDefault(@Validated @RequestBody OrderRepDataSearchContext orderRepDataSearchContext) {
        Page<OrderRepData> domains = orderRepDataService.searchDefault(orderRepDataSearchContext) ;
            List<OrderRepDataDTO> list = orderRepDataDtoMapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(orderRepDataSearchContext.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(orderRepDataSearchContext.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "订单报表数据", tags = {"订单报表数据" },  notes = "订单报表数据")
    @RequestMapping(method = RequestMethod.POST, value = "/orderrepdatas/fetchgroup")
    public ResponseEntity fetchGroup(@Validated @RequestBody OrderRepDataSearchContext orderRepDataSearchContext) {
        Page<OrderRepData> domains = orderRepDataService.searchGroup(orderRepDataSearchContext) ;
            List<OrderRepDataDTO> list = orderRepDataDtoMapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(orderRepDataSearchContext.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(orderRepDataSearchContext.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "订单报表数据", tags = {"订单报表数据" },  notes = "订单报表数据")
    @RequestMapping(method = RequestMethod.POST, value = "/orderrepdatas/select")
    public ResponseEntity select() {
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }


}
