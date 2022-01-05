package cn.ibizlab.sample.sampleapi.mapping;

import org.mapstruct.*;
import cn.ibizlab.sample.core.sample.domain.ImpExpData;
import cn.ibizlab.sample.sampleapi.dto.ImpExpDataSimpleDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "ImpExpDataSimpleDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface ImpExpDataSimpleDTOMapping extends MappingBase<ImpExpDataSimpleDTO, ImpExpData> {


}
