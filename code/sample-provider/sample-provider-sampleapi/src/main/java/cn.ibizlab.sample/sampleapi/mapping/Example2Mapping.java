package cn.ibizlab.sample.sampleapi.mapping;

import org.mapstruct.*;
import cn.ibizlab.sample.core.sample.domain.Example2;
import cn.ibizlab.sample.sampleapi.dto.Example2DTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "Example2Mapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface Example2Mapping extends MappingBase<Example2DTO, Example2> {


}
