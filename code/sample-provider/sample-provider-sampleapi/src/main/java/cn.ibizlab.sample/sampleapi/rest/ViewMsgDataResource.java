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
import cn.ibizlab.sample.core.sample.domain.ViewMsgData;
import cn.ibizlab.sample.core.sample.service.IViewMsgDataService;
import cn.ibizlab.sample.core.sample.filter.ViewMsgDataSearchContext;
import cn.ibizlab.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"视图消息数据" })
@RestController("sampleapi-viewmsgdata")
@RequestMapping("")
public class ViewMsgDataResource {

    @Autowired
    public IViewMsgDataService service;

    @Autowired
    @Lazy
    public ViewMsgDataMapping mapping;

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-ViewMsgData-Create-all')")
    @ApiOperation(value = "新建视图消息数据", tags = {"视图消息数据" },  notes = "新建视图消息数据")
	@RequestMapping(method = RequestMethod.POST, value = "/viewmsgdatas")
    public ResponseEntity<ViewMsgDataDTO> create(@Validated @RequestBody ViewMsgDataDTO dto) {
        ViewMsgData domain = mapping.toDomain(dto);
		service.create(domain);
		return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-ViewMsgData-Create-all')")
    @ApiOperation(value = "批量新建视图消息数据", tags = {"视图消息数据" },  notes = "批量新建视图消息数据")
	@RequestMapping(method = RequestMethod.POST, value = "/viewmsgdatas/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<ViewMsgDataDTO> dtos) {
        service.createBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-ViewMsgData-Get-all')")
    @ApiOperation(value = "获取视图消息数据", tags = {"视图消息数据" },  notes = "获取视图消息数据")
	@RequestMapping(method = RequestMethod.GET, value = "/viewmsgdatas/{id}")
    public ResponseEntity<ViewMsgDataDTO> get(@PathVariable("id") String id) {
        ViewMsgData domain = service.get(id);
        ViewMsgDataDTO dto = mapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-ViewMsgData-Remove-all')")
    @ApiOperation(value = "删除视图消息数据", tags = {"视图消息数据" },  notes = "删除视图消息数据")
	@RequestMapping(method = RequestMethod.DELETE, value = "/viewmsgdatas/{id}")
    public ResponseEntity<Boolean> remove(@PathVariable("id") String id) {
         return ResponseEntity.status(HttpStatus.OK).body(service.remove(id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-ViewMsgData-Remove-all')")
    @ApiOperation(value = "批量删除视图消息数据", tags = {"视图消息数据" },  notes = "批量删除视图消息数据")
	@RequestMapping(method = RequestMethod.DELETE, value = "/viewmsgdatas/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<String> ids) {
        service.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @VersionCheck(entity = "viewmsgdata" , versionfield = "updateDate")    
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-ViewMsgData-Update-all')")
    @ApiOperation(value = "更新视图消息数据", tags = {"视图消息数据" },  notes = "更新视图消息数据")
	@RequestMapping(method = RequestMethod.PUT, value = "/viewmsgdatas/{id}")
    public ResponseEntity<ViewMsgDataDTO> update(@PathVariable("id") String id, @RequestBody ViewMsgDataDTO dto) {
		ViewMsgData domain  = mapping.toDomain(dto);
        domain.setViewMsgDataId(id);
		service.update(domain);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-ViewMsgData-Update-all')")
    @ApiOperation(value = "批量更新视图消息数据", tags = {"视图消息数据" },  notes = "批量更新视图消息数据")
	@RequestMapping(method = RequestMethod.PUT, value = "/viewmsgdatas/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<ViewMsgDataDTO> dtos) {
        service.updateBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "检查视图消息数据", tags = {"视图消息数据" },  notes = "检查视图消息数据")
	@RequestMapping(method = RequestMethod.POST, value = "/viewmsgdatas/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody ViewMsgDataDTO dto) {
        return  ResponseEntity.status(HttpStatus.OK).body(service.checkKey(mapping.toDomain(dto)));
    }

    @ApiOperation(value = "获取视图消息数据草稿", tags = {"视图消息数据" },  notes = "获取视图消息数据草稿")
	@RequestMapping(method = RequestMethod.GET, value = "/viewmsgdatas/getdraft")
    public ResponseEntity<ViewMsgDataDTO> getDraft(ViewMsgDataDTO dto) {
        ViewMsgData domain = mapping.toDomain(dto);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(service.getDraft(domain)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-ViewMsgData-Save-all')")
    @ApiOperation(value = "保存视图消息数据", tags = {"视图消息数据" },  notes = "保存视图消息数据")
	@RequestMapping(method = RequestMethod.POST, value = "/viewmsgdatas/save")
    public ResponseEntity<ViewMsgDataDTO> save(@RequestBody ViewMsgDataDTO dto) {
        ViewMsgData domain = mapping.toDomain(dto);
        service.save(domain);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-ViewMsgData-Save-all')")
    @ApiOperation(value = "批量保存视图消息数据", tags = {"视图消息数据" },  notes = "批量保存视图消息数据")
	@RequestMapping(method = RequestMethod.POST, value = "/viewmsgdatas/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<ViewMsgDataDTO> dtos) {
        service.saveBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

        
    @ApiOperation(value = "获取DEFAULT", tags = {"视图消息数据" } ,notes = "获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/viewmsgdatas/fetchdefault")
    public ResponseEntity<List<ViewMsgDataDTO>> fetchDefault(ViewMsgDataSearchContext context) {
        Page<ViewMsgData> domains = service.searchDefault(context) ;
        List<ViewMsgDataDTO> list = mapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}
	

	@ApiOperation(value = "查询DEFAULT", tags = {"视图消息数据" } ,notes = "查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/viewmsgdatas/searchdefault")
    public ResponseEntity<Page<ViewMsgDataDTO>> searchDefault(@RequestBody ViewMsgDataSearchContext context) {
        Page<ViewMsgData> domains = service.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(mapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}   
	



}
