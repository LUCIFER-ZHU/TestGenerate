package cn.ibizlab.sample.sampleapi.mapping;

import org.mapstruct.*;
import cn.ibizlab.sample.core.sample.domain.LogicValidData2;
import cn.ibizlab.sample.sampleapi.dto.LogicValidData2SimpleDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "SampleApiLogicValidData2SimpleDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface LogicValidData2SimpleDTOMapping extends MappingBase<LogicValidData2SimpleDTO, LogicValidData2> {


}
