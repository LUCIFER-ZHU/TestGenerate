package doc.sampleapi.mapping;

import org.mapstruct.*;
import doc.core.sample.domain.CalendarData;
import doc.sampleapi.dto.CalendarDataSimpleDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "SampleApiCalendarDataSimpleDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface CalendarDataSimpleDTOMapping extends MappingBase<CalendarDataSimpleDTO, CalendarData> {


}
