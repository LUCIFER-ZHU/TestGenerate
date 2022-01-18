package cn.ibizlab.sample.sampleapi.mapping;

import org.mapstruct.*;
import cn.ibizlab.sample.core.sample.domain.DynaDashboard;
import cn.ibizlab.sample.sampleapi.dto.DynaDashboardSimpleDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "SampleApiDynaDashboardSimpleDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface DynaDashboardSimpleDTOMapping extends MappingBase<DynaDashboardSimpleDTO, DynaDashboard> {


}
