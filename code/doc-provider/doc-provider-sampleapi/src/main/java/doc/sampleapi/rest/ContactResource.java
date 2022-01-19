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
import doc.core.sample.domain.Contact;
import doc.core.sample.service.IContactService;
import doc.core.sample.filter.ContactSearchContext;
import cn.ibizlab.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"联系人" })
@RestController("sampleapi-contact")
@RequestMapping("")
public class ContactResource {

    @Autowired
    public IContactService contactService;

    @Autowired
    @Lazy
    public ContactDTOMapping contactDtoMapping;

    @Autowired
    @Lazy
    public ContactSimpleDTOMapping contactSimpleDtoMapping;


    @ApiOperation(value = "联系人", tags = {"联系人" },  notes = "联系人")
    @RequestMapping(method = RequestMethod.POST, value = "/contacts")
    public ResponseEntity create(@Validated @RequestBody ContactDTO contactDto) {
        Contact contact = contactDtoMapping.toDomain(contactDto);
        contactService.create(contact);
        return ResponseEntity.status(HttpStatus.OK).body(contactDtoMapping.toDto(contact));
    }

    @ApiOperation(value = "联系人", tags = {"联系人" },  notes = "联系人")
    @RequestMapping(method = RequestMethod.GET, value = "/contacts/{contactId}")
    public ResponseEntity getByContactId(@PathVariable("contactId") String contactId) {
        Contact contact = contactService.get(contactId);
        return ResponseEntity.status(HttpStatus.OK).body(contactDtoMapping.toDto(contact));
    }

    @ApiOperation(value = "联系人", tags = {"联系人" },  notes = "联系人")
    @RequestMapping(method = RequestMethod.DELETE, value = "/contacts/{contactId}")
    public ResponseEntity removeByContactId(@PathVariable("contactId") String contactId) {
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "联系人", tags = {"联系人" },  notes = "联系人")
    @RequestMapping(method = RequestMethod.PUT, value = "/contacts/{contactId}")
    public ResponseEntity updateByContactId(@PathVariable("contactId") String contactId, @Validated @RequestBody ContactDTO contactDto) {
        Contact contact = contactDtoMapping.toDomain(contactDto);
        contact.setContactId(contactId);
        contactService.update(contact);
        return ResponseEntity.status(HttpStatus.OK).body(contactDtoMapping.toDto(contact));
    }

    @ApiOperation(value = "联系人", tags = {"联系人" },  notes = "联系人")
    @RequestMapping(method = RequestMethod.POST, value = "/contacts/checkkey")
    public ResponseEntity checkKey(@Validated @RequestBody ContactDTO contactDto) {
        Contact contact = contactDtoMapping.toDomain(contactDto);
        contactService.checkKey(contact);
        return ResponseEntity.status(HttpStatus.OK).body(0);
    }

    @ApiOperation(value = "联系人", tags = {"联系人" },  notes = "联系人")
    @RequestMapping(method = RequestMethod.GET, value = "/contacts/getdraft")
    public ResponseEntity getDraft(@Validated @RequestBody ContactDTO contactDto) {
        Contact contact = contactDtoMapping.toDomain(contactDto);
        contactService.getDraft(contact);
        return ResponseEntity.status(HttpStatus.OK).body(contactDtoMapping.toDto(contact));
    }

    @ApiOperation(value = "联系人", tags = {"联系人" },  notes = "联系人")
    @RequestMapping(method = RequestMethod.POST, value = "/contacts/{contactId}/save")
    public ResponseEntity saveByContactId(@PathVariable("contactId") String contactId, @Validated @RequestBody ContactDTO contactDto) {
        Contact contact = contactDtoMapping.toDomain(contactDto);
        contact.setContactId(contactId);
        contactService.save(contact);
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "联系人", tags = {"联系人" },  notes = "联系人")
    @RequestMapping(method = RequestMethod.POST, value = "/contacts/fetchdefault")
    public ResponseEntity fetchDefault(@Validated @RequestBody ContactSearchContext contactSearchContext) {
        Page<Contact> domains = contactService.searchDefault(contactSearchContext) ;
            List<ContactDTO> list = contactDtoMapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(contactSearchContext.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(contactSearchContext.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "联系人", tags = {"联系人" },  notes = "联系人")
    @RequestMapping(method = RequestMethod.POST, value = "/contacts/select")
    public ResponseEntity select() {
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }

    @ApiOperation(value = "联系人", tags = {"联系人" },  notes = "联系人")
    @RequestMapping(method = RequestMethod.POST, value = "/customers/{customerId}/contacts")
    public ResponseEntity createByCustomerId(@PathVariable("customerId") String customerId, @Validated @RequestBody ContactDTO contactDto) {
        Contact contact = contactDtoMapping.toDomain(contactDto);
        contact.setCustomerId(customerId);
        contactService.create(contact);
        return ResponseEntity.status(HttpStatus.OK).body(contactDtoMapping.toDto(contact));
    }

    @ApiOperation(value = "联系人", tags = {"联系人" },  notes = "联系人")
    @RequestMapping(method = RequestMethod.GET, value = "/customers/{customerId}/contacts/{contactId}")
    public ResponseEntity getByCustomerIdAndContactId(@PathVariable("customerId") String customerId, @PathVariable("contactId") String contactId) {
        Contact contact = contactService.get(contactId);
        return ResponseEntity.status(HttpStatus.OK).body(contactDtoMapping.toDto(contact));
    }

    @ApiOperation(value = "联系人", tags = {"联系人" },  notes = "联系人")
    @RequestMapping(method = RequestMethod.DELETE, value = "/customers/{customerId}/contacts/{contactId}")
    public ResponseEntity removeByCustomerIdAndContactId(@PathVariable("customerId") String customerId, @PathVariable("contactId") String contactId) {
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "联系人", tags = {"联系人" },  notes = "联系人")
    @RequestMapping(method = RequestMethod.PUT, value = "/customers/{customerId}/contacts/{contactId}")
    public ResponseEntity updateByCustomerIdAndContactId(@PathVariable("customerId") String customerId, @PathVariable("contactId") String contactId, @Validated @RequestBody ContactDTO contactDto) {
        Contact contact = contactDtoMapping.toDomain(contactDto);
        contact.setContactId(contactId);
        contactService.update(contact);
        return ResponseEntity.status(HttpStatus.OK).body(contactDtoMapping.toDto(contact));
    }

    @ApiOperation(value = "联系人", tags = {"联系人" },  notes = "联系人")
    @RequestMapping(method = RequestMethod.POST, value = "/customers/{customerId}/contacts/checkkey")
    public ResponseEntity checkKeyByCustomerId(@PathVariable("customerId") String customerId, @Validated @RequestBody ContactDTO contactDto) {
        Contact contact = contactDtoMapping.toDomain(contactDto);
        contact.setCustomerId(customerId);
        contactService.checkKey(contact);
        return ResponseEntity.status(HttpStatus.OK).body(0);
    }

    @ApiOperation(value = "联系人", tags = {"联系人" },  notes = "联系人")
    @RequestMapping(method = RequestMethod.GET, value = "/customers/{customerId}/contacts/getdraft")
    public ResponseEntity getDraftByCustomerId(@PathVariable("customerId") String customerId, @Validated @RequestBody ContactDTO contactDto) {
        Contact contact = contactDtoMapping.toDomain(contactDto);
        contact.setCustomerId(customerId);
        contactService.getDraft(contact);
        return ResponseEntity.status(HttpStatus.OK).body(contactDtoMapping.toDto(contact));
    }

    @ApiOperation(value = "联系人", tags = {"联系人" },  notes = "联系人")
    @RequestMapping(method = RequestMethod.POST, value = "/customers/{customerId}/contacts/{contactId}/save")
    public ResponseEntity saveByCustomerIdAndContactId(@PathVariable("customerId") String customerId, @PathVariable("contactId") String contactId, @Validated @RequestBody ContactDTO contactDto) {
        Contact contact = contactDtoMapping.toDomain(contactDto);
        contact.setContactId(contactId);
        contactService.save(contact);
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "联系人", tags = {"联系人" },  notes = "联系人")
    @RequestMapping(method = RequestMethod.POST, value = "/customers/{customerId}/contacts/fetchdefault")
    public ResponseEntity fetchDefaultByCustomerId(@PathVariable("customerId") String customerId, @Validated @RequestBody ContactSearchContext contactSearchContext) {
        contactSearchContext.setCustomerIdEQ(customerId);
        Page<Contact> domains = contactService.searchDefault(contactSearchContext) ;
            List<ContactDTO> list = contactDtoMapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(contactSearchContext.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(contactSearchContext.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "联系人", tags = {"联系人" },  notes = "联系人")
    @RequestMapping(method = RequestMethod.POST, value = "/customers/{customerId}/contacts/select")
    public ResponseEntity selectByCustomerId(@PathVariable("customerId") String customerId) {
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }


}
