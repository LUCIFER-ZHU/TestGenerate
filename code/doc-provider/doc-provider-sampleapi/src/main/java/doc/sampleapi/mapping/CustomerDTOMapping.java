package doc.sampleapi.mapping;

import org.mapstruct.*;
import doc.core.sample.domain.Customer;
import doc.sampleapi.dto.CustomerDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "SampleApiCustomerDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface CustomerDTOMapping extends MappingBase<CustomerDTO, Customer> {


}
