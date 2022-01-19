package doc.sampleapi.mapping;

import org.mapstruct.*;
import doc.core.sample.domain.Contact;
import doc.sampleapi.dto.ContactDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "SampleApiContactDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface ContactDTOMapping extends MappingBase<ContactDTO, Contact> {


}
