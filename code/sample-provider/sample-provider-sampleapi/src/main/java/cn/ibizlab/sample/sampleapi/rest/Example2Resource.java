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
import cn.ibizlab.sample.core.sample.domain.Example2;
import cn.ibizlab.sample.core.sample.service.IExample2Service;
import cn.ibizlab.sample.core.sample.filter.Example2SearchContext;
import cn.ibizlab.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"示例明细" })
@RestController("sampleapi-example2")
@RequestMapping("")
public class Example2Resource {

    @Autowired
    public IExample2Service example2Service;

    @Autowired
    @Lazy
    public Example2DTOMapping example2DtoMapping;

    @Autowired
    @Lazy
    public Example2SimpleDTOMapping example2SimpleDtoMapping;


    @ApiOperation(value = "示例明细", tags = {"示例明细" },  notes = "示例明细")
    @RequestMapping(method = RequestMethod.POST, value = "/example2s")
    public ResponseEntity create() {
    }

    @ApiOperation(value = "示例明细", tags = {"示例明细" },  notes = "示例明细")
    @RequestMapping(method = RequestMethod.GET, value = "/example2s/{example2Id}")
    public ResponseEntity getByExample2Id(@PathVariable("example2Id") String example2Id) {
    }

    @ApiOperation(value = "示例明细", tags = {"示例明细" },  notes = "示例明细")
    @RequestMapping(method = RequestMethod.DELETE, value = "/example2s/{example2Id}")
    public ResponseEntity removeByExample2Id(@PathVariable("example2Id") String example2Id) {
    }

    @ApiOperation(value = "示例明细", tags = {"示例明细" },  notes = "示例明细")
    @RequestMapping(method = RequestMethod.PUT, value = "/example2s/{example2Id}")
    public ResponseEntity updateByExample2Id(@PathVariable("example2Id") String example2Id) {
    }

    @ApiOperation(value = "示例明细", tags = {"示例明细" },  notes = "示例明细")
    @RequestMapping(method = RequestMethod.POST, value = "/example2s/checkkey")
    public ResponseEntity checkKey() {
    }

    @ApiOperation(value = "示例明细", tags = {"示例明细" },  notes = "示例明细")
    @RequestMapping(method = RequestMethod.GET, value = "/example2s/getdraft")
    public ResponseEntity getDraft() {
    }

    @ApiOperation(value = "示例明细", tags = {"示例明细" },  notes = "示例明细")
    @RequestMapping(method = RequestMethod.POST, value = "/example2s/{example2Id}/save")
    public ResponseEntity saveByExample2Id(@PathVariable("example2Id") String example2Id) {
    }

    @ApiOperation(value = "示例明细", tags = {"示例明细" },  notes = "示例明细")
    @RequestMapping(method = RequestMethod.POST, value = "/example2s/fetchdefault")
    public ResponseEntity fetchDefault() {
        Page<Example2> domains = example2Service.searchDefault() ;
            List<> list = Mapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "示例明细", tags = {"示例明细" },  notes = "示例明细")
    @RequestMapping(method = RequestMethod.POST, value = "/example2s/select")
    public ResponseEntity select() {
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }


}
