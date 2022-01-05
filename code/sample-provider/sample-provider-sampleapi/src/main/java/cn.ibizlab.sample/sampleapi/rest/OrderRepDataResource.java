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
    public IOrderRepDataService service;

    @Autowired
    @Lazy
    public OrderRepDataMapping mapping;

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-OrderRepData-Create-all')")
    @ApiOperation(value = "新建订单报表数据", tags = {"订单报表数据" },  notes = "新建订单报表数据")
	@RequestMapping(method = RequestMethod.POST, value = "/orderrepdatas")
    public ResponseEntity<OrderRepDataDTO> create(@Validated @RequestBody OrderRepDataDTO dto) {
        OrderRepData domain = mapping.toDomain(dto);
		service.create(domain);
		return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-OrderRepData-Create-all')")
    @ApiOperation(value = "批量新建订单报表数据", tags = {"订单报表数据" },  notes = "批量新建订单报表数据")
	@RequestMapping(method = RequestMethod.POST, value = "/orderrepdatas/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<OrderRepDataDTO> dtos) {
        service.createBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-OrderRepData-Get-all')")
    @ApiOperation(value = "获取订单报表数据", tags = {"订单报表数据" },  notes = "获取订单报表数据")
	@RequestMapping(method = RequestMethod.GET, value = "/orderrepdatas/{id}")
    public ResponseEntity<OrderRepDataDTO> get(@PathVariable("id") String id) {
        OrderRepData domain = service.get(id);
        OrderRepDataDTO dto = mapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-OrderRepData-Remove-all')")
    @ApiOperation(value = "删除订单报表数据", tags = {"订单报表数据" },  notes = "删除订单报表数据")
	@RequestMapping(method = RequestMethod.DELETE, value = "/orderrepdatas/{id}")
    public ResponseEntity<Boolean> remove(@PathVariable("id") String id) {
         return ResponseEntity.status(HttpStatus.OK).body(service.remove(id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-OrderRepData-Remove-all')")
    @ApiOperation(value = "批量删除订单报表数据", tags = {"订单报表数据" },  notes = "批量删除订单报表数据")
	@RequestMapping(method = RequestMethod.DELETE, value = "/orderrepdatas/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<String> ids) {
        service.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @VersionCheck(entity = "orderrepdata" , versionfield = "updateDate")    
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-OrderRepData-Update-all')")
    @ApiOperation(value = "更新订单报表数据", tags = {"订单报表数据" },  notes = "更新订单报表数据")
	@RequestMapping(method = RequestMethod.PUT, value = "/orderrepdatas/{id}")
    public ResponseEntity<OrderRepDataDTO> update(@PathVariable("id") String id, @RequestBody OrderRepDataDTO dto) {
		OrderRepData domain  = mapping.toDomain(dto);
        domain.setOrderRepDataId(id);
		service.update(domain);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-OrderRepData-Update-all')")
    @ApiOperation(value = "批量更新订单报表数据", tags = {"订单报表数据" },  notes = "批量更新订单报表数据")
	@RequestMapping(method = RequestMethod.PUT, value = "/orderrepdatas/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<OrderRepDataDTO> dtos) {
        service.updateBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "检查订单报表数据", tags = {"订单报表数据" },  notes = "检查订单报表数据")
	@RequestMapping(method = RequestMethod.POST, value = "/orderrepdatas/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody OrderRepDataDTO dto) {
        return  ResponseEntity.status(HttpStatus.OK).body(service.checkKey(mapping.toDomain(dto)));
    }

    @ApiOperation(value = "获取订单报表数据草稿", tags = {"订单报表数据" },  notes = "获取订单报表数据草稿")
	@RequestMapping(method = RequestMethod.GET, value = "/orderrepdatas/getdraft")
    public ResponseEntity<OrderRepDataDTO> getDraft(OrderRepDataDTO dto) {
        OrderRepData domain = mapping.toDomain(dto);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(service.getDraft(domain)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-OrderRepData-Save-all')")
    @ApiOperation(value = "保存订单报表数据", tags = {"订单报表数据" },  notes = "保存订单报表数据")
	@RequestMapping(method = RequestMethod.POST, value = "/orderrepdatas/save")
    public ResponseEntity<OrderRepDataDTO> save(@RequestBody OrderRepDataDTO dto) {
        OrderRepData domain = mapping.toDomain(dto);
        service.save(domain);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-OrderRepData-Save-all')")
    @ApiOperation(value = "批量保存订单报表数据", tags = {"订单报表数据" },  notes = "批量保存订单报表数据")
	@RequestMapping(method = RequestMethod.POST, value = "/orderrepdatas/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<OrderRepDataDTO> dtos) {
        service.saveBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

        
    @ApiOperation(value = "获取DEFAULT", tags = {"订单报表数据" } ,notes = "获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/orderrepdatas/fetchdefault")
    public ResponseEntity<List<OrderRepDataDTO>> fetchDefault(OrderRepDataSearchContext context) {
        Page<OrderRepData> domains = service.searchDefault(context) ;
        List<OrderRepDataDTO> list = mapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}
	

	@ApiOperation(value = "查询DEFAULT", tags = {"订单报表数据" } ,notes = "查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/orderrepdatas/searchdefault")
    public ResponseEntity<Page<OrderRepDataDTO>> searchDefault(@RequestBody OrderRepDataSearchContext context) {
        Page<OrderRepData> domains = service.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(mapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}   
        
    @ApiOperation(value = "获取Group", tags = {"订单报表数据" } ,notes = "获取Group")
    @RequestMapping(method= RequestMethod.GET , value="/orderrepdatas/fetchgroup")
    public ResponseEntity<List<Map>> fetchGroup(OrderRepDataSearchContext context) {
        Page<Map> page = service.searchGroup(context) ;
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(page.getTotalElements()))
                .body(page.getContent());
	}
	

	@ApiOperation(value = "查询Group", tags = {"订单报表数据" } ,notes = "查询Group")
    @RequestMapping(method= RequestMethod.POST , value="/orderrepdatas/searchgroup")
	public ResponseEntity<Page<Map>> searchGroup(@RequestBody OrderRepDataSearchContext context) {
        Page<Map> page = service.searchGroup(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(page.getContent(), context.getPageable(), page.getTotalElements()));
	}    
	



}
