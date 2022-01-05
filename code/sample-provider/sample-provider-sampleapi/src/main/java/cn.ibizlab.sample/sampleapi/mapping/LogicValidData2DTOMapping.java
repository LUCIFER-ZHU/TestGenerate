package cn.ibizlab.sample.sampleapi.mapping;

import org.mapstruct.*;
import cn.ibizlab.sample.core.sample.domain.LogicValidData2;
import cn.ibizlab.sample.sampleapi.dto.LogicValidData2DTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "LogicValidData2DTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface LogicValidData2DTOMapping extends MappingBase<LogicValidData2DTO, LogicValidData2> {


}
