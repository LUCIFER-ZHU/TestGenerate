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
import cn.ibizlab.sample.core.sample.domain.MapData;
import cn.ibizlab.sample.core.sample.service.IMapDataService;
import cn.ibizlab.sample.core.sample.filter.MapDataSearchContext;
import cn.ibizlab.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"地图示例数据" })
@RestController("sampleapi-mapdata")
@RequestMapping("")
public class MapDataResource {

    @Autowired
    public IMapDataService mapDataService;

    @Autowired
    @Lazy
    public MapDataDTOMapping mapDataDtoMapping;

    @Autowired
    @Lazy
    public MapDataSimpleDTOMapping mapDataSimpleDtoMapping;


    @ApiOperation(value = "地图示例数据", tags = {"地图示例数据" },  notes = "地图示例数据")
    @RequestMapping(method = RequestMethod.POST, value = "/mapdatas")
    public ResponseEntity create() {
    }

    @ApiOperation(value = "地图示例数据", tags = {"地图示例数据" },  notes = "地图示例数据")
    @RequestMapping(method = RequestMethod.GET, value = "/mapdatas/{mapDataId}")
    public ResponseEntity get(@PathVariable("mapDataId") String mapDataId) {
    }

    @ApiOperation(value = "地图示例数据", tags = {"地图示例数据" },  notes = "地图示例数据")
    @RequestMapping(method = RequestMethod.DELETE, value = "/mapdatas/{mapDataId}")
    public ResponseEntity remove(@PathVariable("mapDataId") String mapDataId) {
    }

    @ApiOperation(value = "地图示例数据", tags = {"地图示例数据" },  notes = "地图示例数据")
    @RequestMapping(method = RequestMethod.PUT, value = "/mapdatas/{mapDataId}")
    public ResponseEntity update(@PathVariable("mapDataId") String mapDataId) {
    }

    @ApiOperation(value = "地图示例数据", tags = {"地图示例数据" },  notes = "地图示例数据")
    @RequestMapping(method = RequestMethod.POST, value = "/mapdatas/checkkey")
    public ResponseEntity checkKey() {
    }

    @ApiOperation(value = "地图示例数据", tags = {"地图示例数据" },  notes = "地图示例数据")
    @RequestMapping(method = RequestMethod.GET, value = "/mapdatas/getdraft")
    public ResponseEntity getDraft() {
    }

    @ApiOperation(value = "地图示例数据", tags = {"地图示例数据" },  notes = "地图示例数据")
    @RequestMapping(method = RequestMethod.POST, value = "/mapdatas/{mapDataId}/save")
    public ResponseEntity save(@PathVariable("mapDataId") String mapDataId) {
    }

    @ApiOperation(value = "地图示例数据", tags = {"地图示例数据" },  notes = "地图示例数据")
    @RequestMapping(method = RequestMethod.POST, value = "/mapdatas/fetchdefault")
    public ResponseEntity fetchDefault() {
        Page<MapData> domains = mapDataService.searchDefault() ;
            List<> list = Mapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "地图示例数据", tags = {"地图示例数据" },  notes = "地图示例数据")
    @RequestMapping(method = RequestMethod.POST, value = "/mapdatas/select")
    public ResponseEntity select() {
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }


}
