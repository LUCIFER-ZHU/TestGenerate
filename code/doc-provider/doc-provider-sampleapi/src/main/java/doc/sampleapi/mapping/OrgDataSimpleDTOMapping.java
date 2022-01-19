package doc.sampleapi.mapping;

import org.mapstruct.*;
import doc.core.sample.domain.OrgData;
import doc.sampleapi.dto.OrgDataSimpleDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "SampleApiOrgDataSimpleDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface OrgDataSimpleDTOMapping extends MappingBase<OrgDataSimpleDTO, OrgData> {


}
