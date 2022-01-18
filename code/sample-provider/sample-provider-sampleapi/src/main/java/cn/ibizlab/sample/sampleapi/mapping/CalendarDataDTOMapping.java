package cn.ibizlab.sample.sampleapi.mapping;

import org.mapstruct.*;
import cn.ibizlab.sample.core.sample.domain.CalendarData;
import cn.ibizlab.sample.sampleapi.dto.CalendarDataDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "SampleApiCalendarDataDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface CalendarDataDTOMapping extends MappingBase<CalendarDataDTO, CalendarData> {


}
