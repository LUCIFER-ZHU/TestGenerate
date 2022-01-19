package doc.sampleapi.mapping;

import org.mapstruct.*;
import doc.core.sample.domain.OrderDetail;
import doc.sampleapi.dto.OrderDetailSimpleDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "SampleApiOrderDetailSimpleDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface OrderDetailSimpleDTOMapping extends MappingBase<OrderDetailSimpleDTO, OrderDetail> {


}
