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
import doc.core.sample.domain.MapData;
import doc.core.sample.service.IMapDataService;
import doc.core.sample.filter.MapDataSearchContext;
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
    public ResponseEntity create(@Validated @RequestBody MapDataDTO mapDataDto) {
        MapData mapData = mapDataDtoMapping.toDomain(mapDataDto);
        mapDataService.create(mapData);
        return ResponseEntity.status(HttpStatus.OK).body(mapDataDtoMapping.toDto(mapData));
    }

    @ApiOperation(value = "地图示例数据", tags = {"地图示例数据" },  notes = "地图示例数据")
    @RequestMapping(method = RequestMethod.GET, value = "/mapdatas/{mapDataId}")
    public ResponseEntity getByMapDataId(@PathVariable("mapDataId") String mapDataId) {
        MapData mapData = mapDataService.get(mapDataId);
        return ResponseEntity.status(HttpStatus.OK).body(mapDataDtoMapping.toDto(mapData));
    }

    @ApiOperation(value = "地图示例数据", tags = {"地图示例数据" },  notes = "地图示例数据")
    @RequestMapping(method = RequestMethod.DELETE, value = "/mapdatas/{mapDataId}")
    public ResponseEntity removeByMapDataId(@PathVariable("mapDataId") String mapDataId) {
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "地图示例数据", tags = {"地图示例数据" },  notes = "地图示例数据")
    @RequestMapping(method = RequestMethod.PUT, value = "/mapdatas/{mapDataId}")
    public ResponseEntity updateByMapDataId(@PathVariable("mapDataId") String mapDataId, @Validated @RequestBody MapDataDTO mapDataDto) {
        MapData mapData = mapDataDtoMapping.toDomain(mapDataDto);
        mapData.setMapDataId(mapDataId);
        mapDataService.update(mapData);
        return ResponseEntity.status(HttpStatus.OK).body(mapDataDtoMapping.toDto(mapData));
    }

    @ApiOperation(value = "地图示例数据", tags = {"地图示例数据" },  notes = "地图示例数据")
    @RequestMapping(method = RequestMethod.POST, value = "/mapdatas/checkkey")
    public ResponseEntity checkKey(@Validated @RequestBody MapDataDTO mapDataDto) {
        MapData mapData = mapDataDtoMapping.toDomain(mapDataDto);
        mapDataService.checkKey(mapData);
        return ResponseEntity.status(HttpStatus.OK).body(0);
    }

    @ApiOperation(value = "地图示例数据", tags = {"地图示例数据" },  notes = "地图示例数据")
    @RequestMapping(method = RequestMethod.GET, value = "/mapdatas/getdraft")
    public ResponseEntity getDraft(@Validated @RequestBody MapDataDTO mapDataDto) {
        MapData mapData = mapDataDtoMapping.toDomain(mapDataDto);
        mapDataService.getDraft(mapData);
        return ResponseEntity.status(HttpStatus.OK).body(mapDataDtoMapping.toDto(mapData));
    }

    @ApiOperation(value = "地图示例数据", tags = {"地图示例数据" },  notes = "地图示例数据")
    @RequestMapping(method = RequestMethod.POST, value = "/mapdatas/{mapDataId}/save")
    public ResponseEntity saveByMapDataId(@PathVariable("mapDataId") String mapDataId, @Validated @RequestBody MapDataDTO mapDataDto) {
        MapData mapData = mapDataDtoMapping.toDomain(mapDataDto);
        mapData.setMapDataId(mapDataId);
        mapDataService.save(mapData);
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "地图示例数据", tags = {"地图示例数据" },  notes = "地图示例数据")
    @RequestMapping(method = RequestMethod.POST, value = "/mapdatas/fetchdefault")
    public ResponseEntity fetchDefault(@Validated @RequestBody MapDataSearchContext mapDataSearchContext) {
        Page<MapData> domains = mapDataService.searchDefault(mapDataSearchContext) ;
            List<MapDataDTO> list = mapDataDtoMapping.toDto(domains.getContent());
            return ResponseEntity.status(HttpStatus.OK)
            .header("x-page", String.valueOf(mapDataSearchContext.getPageable().getPageNumber()))
            .header("x-per-page", String.valueOf(mapDataSearchContext.getPageable().getPageSize()))
            .header("x-total", String.valueOf(domains.getTotalElements()))
            .body(list);
    }

    @ApiOperation(value = "地图示例数据", tags = {"地图示例数据" },  notes = "地图示例数据")
    @RequestMapping(method = RequestMethod.POST, value = "/mapdatas/select")
    public ResponseEntity select() {
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }


}
