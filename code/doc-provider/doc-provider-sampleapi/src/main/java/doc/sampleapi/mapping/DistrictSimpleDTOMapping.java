package doc.sampleapi.mapping;

import org.mapstruct.*;
import doc.core.sample.domain.District;
import doc.sampleapi.dto.DistrictSimpleDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "SampleApiDistrictSimpleDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface DistrictSimpleDTOMapping extends MappingBase<DistrictSimpleDTO, District> {


}
