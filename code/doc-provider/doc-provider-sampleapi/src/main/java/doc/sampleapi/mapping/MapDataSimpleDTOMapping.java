package doc.sampleapi.mapping;

import org.mapstruct.*;
import doc.core.sample.domain.MapData;
import doc.sampleapi.dto.MapDataSimpleDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "SampleApiMapDataSimpleDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface MapDataSimpleDTOMapping extends MappingBase<MapDataSimpleDTO, MapData> {


}
