package doc.sampleapi.mapping;

import org.mapstruct.*;
import doc.core.sample.domain.Customer;
import doc.sampleapi.dto.CustomerSimpleDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "SampleApiCustomerSimpleDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface CustomerSimpleDTOMapping extends MappingBase<CustomerSimpleDTO, Customer> {


}
