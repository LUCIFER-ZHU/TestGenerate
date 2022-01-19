package doc.sampleapi.mapping;

import org.mapstruct.*;
import doc.core.sample.domain.SampleVer;
import doc.sampleapi.dto.SampleVerDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "SampleApiSampleVerDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface SampleVerDTOMapping extends MappingBase<SampleVerDTO, SampleVer> {


}
