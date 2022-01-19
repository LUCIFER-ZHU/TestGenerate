package doc.sampleapi.mapping;

import org.mapstruct.*;
import doc.core.sample.domain.LogicValidData;
import doc.sampleapi.dto.LogicValidDataDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "SampleApiLogicValidDataDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface LogicValidDataDTOMapping extends MappingBase<LogicValidDataDTO, LogicValidData> {


}
