package cn.ibizlab.sample.sampleapi.mapping;

import org.mapstruct.*;
import cn.ibizlab.sample.core.sample.domain.DynaDashboard;
import cn.ibizlab.sample.sampleapi.dto.DynaDashboardDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "DynaDashboardDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface DynaDashboardDTOMapping extends MappingBase<DynaDashboardDTO, DynaDashboard> {


}
