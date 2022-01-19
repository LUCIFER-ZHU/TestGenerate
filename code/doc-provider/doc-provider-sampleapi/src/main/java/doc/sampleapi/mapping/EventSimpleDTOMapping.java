package doc.sampleapi.mapping;

import org.mapstruct.*;
import doc.core.sample.domain.Event;
import doc.sampleapi.dto.EventSimpleDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "SampleApiEventSimpleDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface EventSimpleDTOMapping extends MappingBase<EventSimpleDTO, Event> {


}
