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
import cn.ibizlab.sample.core.sample.domain.Contact;
import cn.ibizlab.sample.core.sample.service.IContactService;
import cn.ibizlab.sample.core.sample.filter.ContactSearchContext;
import cn.ibizlab.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"联系人" })
@RestController("sampleapi-contact")
@RequestMapping("")
public class ContactResource {

    @Autowired
    public IContactService service;

    @Autowired
    @Lazy
    public ContactMapping mapping;

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Contact-Create-all')")
    @ApiOperation(value = "新建联系人", tags = {"联系人" },  notes = "新建联系人")
	@RequestMapping(method = RequestMethod.POST, value = "/contacts")
    public ResponseEntity<ContactDTO> create(@Validated @RequestBody ContactDTO dto) {
        Contact domain = mapping.toDomain(dto);
		service.create(domain);
		return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Contact-Create-all')")
    @ApiOperation(value = "批量新建联系人", tags = {"联系人" },  notes = "批量新建联系人")
	@RequestMapping(method = RequestMethod.POST, value = "/contacts/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<ContactDTO> dtos) {
        service.createBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Contact-Get-all')")
    @ApiOperation(value = "获取联系人", tags = {"联系人" },  notes = "获取联系人")
	@RequestMapping(method = RequestMethod.GET, value = "/contacts/{id}")
    public ResponseEntity<ContactDTO> get(@PathVariable("id") String id) {
        Contact domain = service.get(id);
        ContactDTO dto = mapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Contact-Remove-all')")
    @ApiOperation(value = "删除联系人", tags = {"联系人" },  notes = "删除联系人")
	@RequestMapping(method = RequestMethod.DELETE, value = "/contacts/{id}")
    public ResponseEntity<Boolean> remove(@PathVariable("id") String id) {
         return ResponseEntity.status(HttpStatus.OK).body(service.remove(id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Contact-Remove-all')")
    @ApiOperation(value = "批量删除联系人", tags = {"联系人" },  notes = "批量删除联系人")
	@RequestMapping(method = RequestMethod.DELETE, value = "/contacts/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<String> ids) {
        service.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @VersionCheck(entity = "contact" , versionfield = "updateDate")    
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Contact-Update-all')")
    @ApiOperation(value = "更新联系人", tags = {"联系人" },  notes = "更新联系人")
	@RequestMapping(method = RequestMethod.PUT, value = "/contacts/{id}")
    public ResponseEntity<ContactDTO> update(@PathVariable("id") String id, @RequestBody ContactDTO dto) {
		Contact domain  = mapping.toDomain(dto);
        domain.setContactId(id);
		service.update(domain);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Contact-Update-all')")
    @ApiOperation(value = "批量更新联系人", tags = {"联系人" },  notes = "批量更新联系人")
	@RequestMapping(method = RequestMethod.PUT, value = "/contacts/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<ContactDTO> dtos) {
        service.updateBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "检查联系人", tags = {"联系人" },  notes = "检查联系人")
	@RequestMapping(method = RequestMethod.POST, value = "/contacts/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody ContactDTO dto) {
        return  ResponseEntity.status(HttpStatus.OK).body(service.checkKey(mapping.toDomain(dto)));
    }

    @ApiOperation(value = "获取联系人草稿", tags = {"联系人" },  notes = "获取联系人草稿")
	@RequestMapping(method = RequestMethod.GET, value = "/contacts/getdraft")
    public ResponseEntity<ContactDTO> getDraft(ContactDTO dto) {
        Contact domain = mapping.toDomain(dto);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(service.getDraft(domain)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Contact-Save-all')")
    @ApiOperation(value = "保存联系人", tags = {"联系人" },  notes = "保存联系人")
	@RequestMapping(method = RequestMethod.POST, value = "/contacts/save")
    public ResponseEntity<ContactDTO> save(@RequestBody ContactDTO dto) {
        Contact domain = mapping.toDomain(dto);
        service.save(domain);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-Contact-Save-all')")
    @ApiOperation(value = "批量保存联系人", tags = {"联系人" },  notes = "批量保存联系人")
	@RequestMapping(method = RequestMethod.POST, value = "/contacts/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<ContactDTO> dtos) {
        service.saveBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

        
    @ApiOperation(value = "获取DEFAULT", tags = {"联系人" } ,notes = "获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/contacts/fetchdefault")
    public ResponseEntity<List<ContactDTO>> fetchDefault(ContactSearchContext context) {
        Page<Contact> domains = service.searchDefault(context) ;
        List<ContactDTO> list = mapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}
	

	@ApiOperation(value = "查询DEFAULT", tags = {"联系人" } ,notes = "查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/contacts/searchdefault")
    public ResponseEntity<Page<ContactDTO>> searchDefault(@RequestBody ContactSearchContext context) {
        Page<Contact> domains = service.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(mapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}   
	



}
