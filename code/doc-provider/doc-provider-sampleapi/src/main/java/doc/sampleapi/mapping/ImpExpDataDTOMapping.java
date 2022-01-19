package doc.sampleapi.mapping;

import org.mapstruct.*;
import doc.core.sample.domain.ImpExpData;
import doc.sampleapi.dto.ImpExpDataDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "SampleApiImpExpDataDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface ImpExpDataDTOMapping extends MappingBase<ImpExpDataDTO, ImpExpData> {


}
