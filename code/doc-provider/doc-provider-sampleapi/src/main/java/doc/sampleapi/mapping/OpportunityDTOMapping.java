package doc.sampleapi.mapping;

import org.mapstruct.*;
import doc.core.sample.domain.Opportunity;
import doc.sampleapi.dto.OpportunityDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "SampleApiOpportunityDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface OpportunityDTOMapping extends MappingBase<OpportunityDTO, Opportunity> {


}
