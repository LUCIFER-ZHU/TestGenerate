package doc.sampleapi.mapping;

import org.mapstruct.*;
import doc.core.sample.domain.District;
import doc.sampleapi.dto.DistrictDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "SampleApiDistrictDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface DistrictDTOMapping extends MappingBase<DistrictDTO, District> {


}
