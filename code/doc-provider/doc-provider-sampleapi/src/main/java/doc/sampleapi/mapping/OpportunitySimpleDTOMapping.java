package doc.sampleapi.mapping;

import org.mapstruct.*;
import doc.core.sample.domain.Opportunity;
import doc.sampleapi.dto.OpportunitySimpleDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "SampleApiOpportunitySimpleDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface OpportunitySimpleDTOMapping extends MappingBase<OpportunitySimpleDTO, Opportunity> {


}
