package doc.sampleapi.mapping;

import org.mapstruct.*;
import doc.core.sample.domain.Activity;
import doc.sampleapi.dto.ActivityDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "SampleApiActivityDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface ActivityDTOMapping extends MappingBase<ActivityDTO, Activity> {


}
