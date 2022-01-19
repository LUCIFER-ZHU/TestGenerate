package doc.sampleapi.mapping;

import org.mapstruct.*;
import doc.core.sample.domain.LogicValidData;
import doc.sampleapi.dto.LogicValidDataSimpleDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "SampleApiLogicValidDataSimpleDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface LogicValidDataSimpleDTOMapping extends MappingBase<LogicValidDataSimpleDTO, LogicValidData> {


}
