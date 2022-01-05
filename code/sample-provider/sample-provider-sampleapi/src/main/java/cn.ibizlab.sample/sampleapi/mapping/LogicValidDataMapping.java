package cn.ibizlab.sample.sampleapi.mapping;

import org.mapstruct.*;
import cn.ibizlab.sample.core.sample.domain.LogicValidData;
import cn.ibizlab.sample.sampleapi.dto.LogicValidDataDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "LogicValidDataMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface LogicValidDataMapping extends MappingBase<LogicValidDataDTO, LogicValidData> {


}
