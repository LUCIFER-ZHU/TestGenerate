package doc.sampleapi.mapping;

import org.mapstruct.*;
import doc.core.sample.domain.CalendarData;
import doc.sampleapi.dto.CalendarDataDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "SampleApiCalendarDataDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface CalendarDataDTOMapping extends MappingBase<CalendarDataDTO, CalendarData> {


}
