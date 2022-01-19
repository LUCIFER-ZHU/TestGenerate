package doc.sampleapi.mapping;

import org.mapstruct.*;
import doc.core.sample.domain.PersonData;
import doc.sampleapi.dto.PersonDataDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "SampleApiPersonDataDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface PersonDataDTOMapping extends MappingBase<PersonDataDTO, PersonData> {


}
