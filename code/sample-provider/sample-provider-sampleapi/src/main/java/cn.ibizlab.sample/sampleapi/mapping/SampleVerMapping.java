package cn.ibizlab.sample.sampleapi.mapping;

import org.mapstruct.*;
import cn.ibizlab.sample.core.sample.domain.SampleVer;
import cn.ibizlab.sample.sampleapi.dto.SampleVerDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "SampleVerMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface SampleVerMapping extends MappingBase<SampleVerDTO, SampleVer> {


}
