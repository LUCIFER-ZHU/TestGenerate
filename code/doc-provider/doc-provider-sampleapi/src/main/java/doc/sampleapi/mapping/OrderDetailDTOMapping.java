package doc.sampleapi.mapping;

import org.mapstruct.*;
import doc.core.sample.domain.OrderDetail;
import doc.sampleapi.dto.OrderDetailDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "SampleApiOrderDetailDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface OrderDetailDTOMapping extends MappingBase<OrderDetailDTO, OrderDetail> {


}
