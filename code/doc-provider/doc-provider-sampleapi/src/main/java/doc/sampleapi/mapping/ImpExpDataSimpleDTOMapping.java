package doc.sampleapi.mapping;

import org.mapstruct.*;
import doc.core.sample.domain.ImpExpData;
import doc.sampleapi.dto.ImpExpDataSimpleDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "SampleApiImpExpDataSimpleDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface ImpExpDataSimpleDTOMapping extends MappingBase<ImpExpDataSimpleDTO, ImpExpData> {


}
