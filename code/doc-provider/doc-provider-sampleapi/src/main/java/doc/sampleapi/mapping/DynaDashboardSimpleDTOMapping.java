package doc.sampleapi.mapping;

import org.mapstruct.*;
import doc.core.sample.domain.DynaDashboard;
import doc.sampleapi.dto.DynaDashboardSimpleDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "SampleApiDynaDashboardSimpleDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface DynaDashboardSimpleDTOMapping extends MappingBase<DynaDashboardSimpleDTO, DynaDashboard> {


}
