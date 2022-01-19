package doc.sampleapi.mapping;

import org.mapstruct.*;
import doc.core.sample.domain.Order;
import doc.sampleapi.dto.OrderDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "SampleApiOrderDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface OrderDTOMapping extends MappingBase<OrderDTO, Order> {


}
