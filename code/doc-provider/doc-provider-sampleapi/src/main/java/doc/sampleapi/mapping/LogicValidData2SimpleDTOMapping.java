package doc.sampleapi.mapping;

import org.mapstruct.*;
import doc.core.sample.domain.LogicValidData2;
import doc.sampleapi.dto.LogicValidData2SimpleDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "SampleApiLogicValidData2SimpleDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface LogicValidData2SimpleDTOMapping extends MappingBase<LogicValidData2SimpleDTO, LogicValidData2> {


}
