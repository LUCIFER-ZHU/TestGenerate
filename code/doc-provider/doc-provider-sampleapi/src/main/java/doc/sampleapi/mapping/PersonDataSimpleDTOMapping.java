package doc.sampleapi.mapping;

import org.mapstruct.*;
import doc.core.sample.domain.PersonData;
import doc.sampleapi.dto.PersonDataSimpleDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "SampleApiPersonDataSimpleDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface PersonDataSimpleDTOMapping extends MappingBase<PersonDataSimpleDTO, PersonData> {


}
