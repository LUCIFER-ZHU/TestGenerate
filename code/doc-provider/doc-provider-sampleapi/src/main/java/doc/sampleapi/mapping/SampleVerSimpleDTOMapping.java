package doc.sampleapi.mapping;

import org.mapstruct.*;
import doc.core.sample.domain.SampleVer;
import doc.sampleapi.dto.SampleVerSimpleDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "SampleApiSampleVerSimpleDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface SampleVerSimpleDTOMapping extends MappingBase<SampleVerSimpleDTO, SampleVer> {


}
