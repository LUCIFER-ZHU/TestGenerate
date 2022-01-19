package doc.sampleapi.mapping;

import org.mapstruct.*;
import doc.core.sample.domain.LogicValidData2;
import doc.sampleapi.dto.LogicValidData2DTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "SampleApiLogicValidData2DTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface LogicValidData2DTOMapping extends MappingBase<LogicValidData2DTO, LogicValidData2> {


}
