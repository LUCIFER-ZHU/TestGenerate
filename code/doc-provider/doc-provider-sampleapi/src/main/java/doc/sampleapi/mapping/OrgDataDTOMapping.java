package doc.sampleapi.mapping;

import org.mapstruct.*;
import doc.core.sample.domain.OrgData;
import doc.sampleapi.dto.OrgDataDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "SampleApiOrgDataDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface OrgDataDTOMapping extends MappingBase<OrgDataDTO, OrgData> {


}
