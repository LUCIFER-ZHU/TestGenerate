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
import cn.ibizlab.sample.core.sample.domain.PersonData;
import cn.ibizlab.sample.core.sample.service.IPersonDataService;
import cn.ibizlab.sample.core.sample.filter.PersonDataSearchContext;
import cn.ibizlab.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"人员数据" })
@RestController("sampleapi-persondata")
@RequestMapping("")
public class PersonDataResource {

    @Autowired
    public IPersonDataService service;

    @Autowired
    @Lazy
    public PersonDataMapping mapping;

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-PersonData-Create-all')")
    @ApiOperation(value = "新建人员数据", tags = {"人员数据" },  notes = "新建人员数据")
	@RequestMapping(method = RequestMethod.POST, value = "/peopledata")
    public ResponseEntity<PersonDataDTO> create(@Validated @RequestBody PersonDataDTO dto) {
        PersonData domain = mapping.toDomain(dto);
		service.create(domain);
		return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-PersonData-Create-all')")
    @ApiOperation(value = "批量新建人员数据", tags = {"人员数据" },  notes = "批量新建人员数据")
	@RequestMapping(method = RequestMethod.POST, value = "/peopledata/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<PersonDataDTO> dtos) {
        service.createBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-PersonData-Get-all')")
    @ApiOperation(value = "获取人员数据", tags = {"人员数据" },  notes = "获取人员数据")
	@RequestMapping(method = RequestMethod.GET, value = "/peopledata/{id}")
    public ResponseEntity<PersonDataDTO> get(@PathVariable("id") String id) {
        PersonData domain = service.get(id);
        PersonDataDTO dto = mapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-PersonData-Remove-all')")
    @ApiOperation(value = "删除人员数据", tags = {"人员数据" },  notes = "删除人员数据")
	@RequestMapping(method = RequestMethod.DELETE, value = "/peopledata/{id}")
    public ResponseEntity<Boolean> remove(@PathVariable("id") String id) {
         return ResponseEntity.status(HttpStatus.OK).body(service.remove(id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-PersonData-Remove-all')")
    @ApiOperation(value = "批量删除人员数据", tags = {"人员数据" },  notes = "批量删除人员数据")
	@RequestMapping(method = RequestMethod.DELETE, value = "/peopledata/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<String> ids) {
        service.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @VersionCheck(entity = "persondata" , versionfield = "updateDate")    
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-PersonData-Update-all')")
    @ApiOperation(value = "更新人员数据", tags = {"人员数据" },  notes = "更新人员数据")
	@RequestMapping(method = RequestMethod.PUT, value = "/peopledata/{id}")
    public ResponseEntity<PersonDataDTO> update(@PathVariable("id") String id, @RequestBody PersonDataDTO dto) {
		PersonData domain  = mapping.toDomain(dto);
        domain.setPersonDataId(id);
		service.update(domain);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-PersonData-Update-all')")
    @ApiOperation(value = "批量更新人员数据", tags = {"人员数据" },  notes = "批量更新人员数据")
	@RequestMapping(method = RequestMethod.PUT, value = "/peopledata/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<PersonDataDTO> dtos) {
        service.updateBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "检查人员数据", tags = {"人员数据" },  notes = "检查人员数据")
	@RequestMapping(method = RequestMethod.POST, value = "/peopledata/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody PersonDataDTO dto) {
        return  ResponseEntity.status(HttpStatus.OK).body(service.checkKey(mapping.toDomain(dto)));
    }

    @ApiOperation(value = "获取人员数据草稿", tags = {"人员数据" },  notes = "获取人员数据草稿")
	@RequestMapping(method = RequestMethod.GET, value = "/peopledata/getdraft")
    public ResponseEntity<PersonDataDTO> getDraft(PersonDataDTO dto) {
        PersonData domain = mapping.toDomain(dto);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(service.getDraft(domain)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-PersonData-Save-all')")
    @ApiOperation(value = "保存人员数据", tags = {"人员数据" },  notes = "保存人员数据")
	@RequestMapping(method = RequestMethod.POST, value = "/peopledata/save")
    public ResponseEntity<PersonDataDTO> save(@RequestBody PersonDataDTO dto) {
        PersonData domain = mapping.toDomain(dto);
        service.save(domain);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-PersonData-Save-all')")
    @ApiOperation(value = "批量保存人员数据", tags = {"人员数据" },  notes = "批量保存人员数据")
	@RequestMapping(method = RequestMethod.POST, value = "/peopledata/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<PersonDataDTO> dtos) {
        service.saveBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

        
    @ApiOperation(value = "获取DEFAULT", tags = {"人员数据" } ,notes = "获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/peopledata/fetchdefault")
    public ResponseEntity<List<PersonDataDTO>> fetchDefault(PersonDataSearchContext context) {
        Page<PersonData> domains = service.searchDefault(context) ;
        List<PersonDataDTO> list = mapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}
	

	@ApiOperation(value = "查询DEFAULT", tags = {"人员数据" } ,notes = "查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/peopledata/searchdefault")
    public ResponseEntity<Page<PersonDataDTO>> searchDefault(@RequestBody PersonDataSearchContext context) {
        Page<PersonData> domains = service.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(mapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}   
	



}
