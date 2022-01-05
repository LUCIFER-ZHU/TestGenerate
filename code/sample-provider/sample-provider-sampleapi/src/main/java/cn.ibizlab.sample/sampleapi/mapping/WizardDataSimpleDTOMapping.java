package cn.ibizlab.sample.sampleapi.mapping;

import org.mapstruct.*;
import cn.ibizlab.sample.core.sample.domain.WizardData;
import cn.ibizlab.sample.sampleapi.dto.WizardDataSimpleDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "WizardDataSimpleDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface WizardDataSimpleDTOMapping extends MappingBase<WizardDataSimpleDTO, WizardData> {


}
