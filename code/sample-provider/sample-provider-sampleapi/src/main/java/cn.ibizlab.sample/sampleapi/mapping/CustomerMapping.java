package cn.ibizlab.sample.sampleapi.mapping;

import org.mapstruct.*;
import cn.ibizlab.sample.core.sample.domain.Customer;
import cn.ibizlab.sample.sampleapi.dto.CustomerDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "CustomerMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface CustomerMapping extends MappingBase<CustomerDTO, Customer> {


}