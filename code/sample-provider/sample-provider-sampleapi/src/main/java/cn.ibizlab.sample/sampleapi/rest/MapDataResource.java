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
    public IMapDataService service;

    @Autowired
    @Lazy
    public MapDataMapping mapping;

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-MapData-Create-all')")
    @ApiOperation(value = "新建地图示例数据", tags = {"地图示例数据" },  notes = "新建地图示例数据")
	@RequestMapping(method = RequestMethod.POST, value = "/mapdatas")
    public ResponseEntity<MapDataDTO> create(@Validated @RequestBody MapDataDTO dto) {
        MapData domain = mapping.toDomain(dto);
		service.create(domain);
		return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-MapData-Create-all')")
    @ApiOperation(value = "批量新建地图示例数据", tags = {"地图示例数据" },  notes = "批量新建地图示例数据")
	@RequestMapping(method = RequestMethod.POST, value = "/mapdatas/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<MapDataDTO> dtos) {
        service.createBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-MapData-Get-all')")
    @ApiOperation(value = "获取地图示例数据", tags = {"地图示例数据" },  notes = "获取地图示例数据")
	@RequestMapping(method = RequestMethod.GET, value = "/mapdatas/{id}")
    public ResponseEntity<MapDataDTO> get(@PathVariable("id") String id) {
        MapData domain = service.get(id);
        MapDataDTO dto = mapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-MapData-Remove-all')")
    @ApiOperation(value = "删除地图示例数据", tags = {"地图示例数据" },  notes = "删除地图示例数据")
	@RequestMapping(method = RequestMethod.DELETE, value = "/mapdatas/{id}")
    public ResponseEntity<Boolean> remove(@PathVariable("id") String id) {
         return ResponseEntity.status(HttpStatus.OK).body(service.remove(id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-MapData-Remove-all')")
    @ApiOperation(value = "批量删除地图示例数据", tags = {"地图示例数据" },  notes = "批量删除地图示例数据")
	@RequestMapping(method = RequestMethod.DELETE, value = "/mapdatas/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<String> ids) {
        service.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @VersionCheck(entity = "mapdata" , versionfield = "updateDate")    
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-MapData-Update-all')")
    @ApiOperation(value = "更新地图示例数据", tags = {"地图示例数据" },  notes = "更新地图示例数据")
	@RequestMapping(method = RequestMethod.PUT, value = "/mapdatas/{id}")
    public ResponseEntity<MapDataDTO> update(@PathVariable("id") String id, @RequestBody MapDataDTO dto) {
		MapData domain  = mapping.toDomain(dto);
        domain.setMapDataId(id);
		service.update(domain);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-MapData-Update-all')")
    @ApiOperation(value = "批量更新地图示例数据", tags = {"地图示例数据" },  notes = "批量更新地图示例数据")
	@RequestMapping(method = RequestMethod.PUT, value = "/mapdatas/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<MapDataDTO> dtos) {
        service.updateBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @ApiOperation(value = "检查地图示例数据", tags = {"地图示例数据" },  notes = "检查地图示例数据")
	@RequestMapping(method = RequestMethod.POST, value = "/mapdatas/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody MapDataDTO dto) {
        return  ResponseEntity.status(HttpStatus.OK).body(service.checkKey(mapping.toDomain(dto)));
    }

    @ApiOperation(value = "获取地图示例数据草稿", tags = {"地图示例数据" },  notes = "获取地图示例数据草稿")
	@RequestMapping(method = RequestMethod.GET, value = "/mapdatas/getdraft")
    public ResponseEntity<MapDataDTO> getDraft(MapDataDTO dto) {
        MapData domain = mapping.toDomain(dto);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(service.getDraft(domain)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-MapData-Save-all')")
    @ApiOperation(value = "保存地图示例数据", tags = {"地图示例数据" },  notes = "保存地图示例数据")
	@RequestMapping(method = RequestMethod.POST, value = "/mapdatas/save")
    public ResponseEntity<MapDataDTO> save(@RequestBody MapDataDTO dto) {
        MapData domain = mapping.toDomain(dto);
        service.save(domain);
        return ResponseEntity.status(HttpStatus.OK).body(mapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','sample-MapData-Save-all')")
    @ApiOperation(value = "批量保存地图示例数据", tags = {"地图示例数据" },  notes = "批量保存地图示例数据")
	@RequestMapping(method = RequestMethod.POST, value = "/mapdatas/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<MapDataDTO> dtos) {
        service.saveBatch(mapping.toDomain(dtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

        
    @ApiOperation(value = "获取DEFAULT", tags = {"地图示例数据" } ,notes = "获取DEFAULT")
    @RequestMapping(method= RequestMethod.GET , value="/mapdatas/fetchdefault")
    public ResponseEntity<List<MapDataDTO>> fetchDefault(MapDataSearchContext context) {
        Page<MapData> domains = service.searchDefault(context) ;
        List<MapDataDTO> list = mapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}
	

	@ApiOperation(value = "查询DEFAULT", tags = {"地图示例数据" } ,notes = "查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/mapdatas/searchdefault")
    public ResponseEntity<Page<MapDataDTO>> searchDefault(@RequestBody MapDataSearchContext context) {
        Page<MapData> domains = service.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(mapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}   
	



}
