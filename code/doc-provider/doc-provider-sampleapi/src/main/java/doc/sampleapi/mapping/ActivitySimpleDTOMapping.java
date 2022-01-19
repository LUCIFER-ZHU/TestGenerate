package doc.sampleapi.mapping;

import org.mapstruct.*;
import doc.core.sample.domain.Activity;
import doc.sampleapi.dto.ActivitySimpleDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "SampleApiActivitySimpleDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface ActivitySimpleDTOMapping extends MappingBase<ActivitySimpleDTO, Activity> {


}
