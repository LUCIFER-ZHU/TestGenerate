package doc.sampleapi.mapping;

import org.mapstruct.*;
import doc.core.sample.domain.Contact;
import doc.sampleapi.dto.ContactSimpleDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "SampleApiContactSimpleDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface ContactSimpleDTOMapping extends MappingBase<ContactSimpleDTO, Contact> {


}
