package doc.sampleapi.mapping;

import org.mapstruct.*;
import doc.core.sample.domain.MapData;
import doc.sampleapi.dto.MapDataDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "SampleApiMapDataDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface MapDataDTOMapping extends MappingBase<MapDataDTO, MapData> {


}
