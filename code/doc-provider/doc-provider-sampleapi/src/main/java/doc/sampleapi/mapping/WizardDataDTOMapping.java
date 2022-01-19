package doc.sampleapi.mapping;

import org.mapstruct.*;
import doc.core.sample.domain.WizardData;
import doc.sampleapi.dto.WizardDataDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "SampleApiWizardDataDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface WizardDataDTOMapping extends MappingBase<WizardDataDTO, WizardData> {


}
