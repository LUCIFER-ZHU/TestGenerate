package cn.ibizlab.sample.sampleapi.mapping;

import org.mapstruct.*;
import cn.ibizlab.sample.core.sample.domain.LogicValidData;
import cn.ibizlab.sample.sampleapi.dto.LogicValidDataSimpleDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "SampleApiLogicValidDataSimpleDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface LogicValidDataSimpleDTOMapping extends MappingBase<LogicValidDataSimpleDTO, LogicValidData> {


}
