package doc.sampleapi.mapping;

import org.mapstruct.*;
import doc.core.sample.domain.WizardData;
import doc.sampleapi.dto.WizardDataSimpleDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "SampleApiWizardDataSimpleDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface WizardDataSimpleDTOMapping extends MappingBase<WizardDataSimpleDTO, WizardData> {


}
