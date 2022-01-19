package doc.sampleapi.mapping;

import org.mapstruct.*;
import doc.core.sample.domain.Order;
import doc.sampleapi.dto.OrderSimpleDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "SampleApiOrderSimpleDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface OrderSimpleDTOMapping extends MappingBase<OrderSimpleDTO, Order> {


}
