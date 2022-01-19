package doc.sampleapi.mapping;

import org.mapstruct.*;
import doc.core.sample.domain.Event;
import doc.sampleapi.dto.EventDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "SampleApiEventDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface EventDTOMapping extends MappingBase<EventDTO, Event> {


}
