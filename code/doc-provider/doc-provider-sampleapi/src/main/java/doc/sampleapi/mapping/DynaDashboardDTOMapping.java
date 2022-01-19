package doc.sampleapi.mapping;

import org.mapstruct.*;
import doc.core.sample.domain.DynaDashboard;
import doc.sampleapi.dto.DynaDashboardDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "SampleApiDynaDashboardDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface DynaDashboardDTOMapping extends MappingBase<DynaDashboardDTO, DynaDashboard> {


}
