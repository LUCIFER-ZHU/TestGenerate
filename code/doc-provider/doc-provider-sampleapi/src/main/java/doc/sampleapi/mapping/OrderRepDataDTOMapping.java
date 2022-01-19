package doc.sampleapi.mapping;

import org.mapstruct.*;
import doc.core.sample.domain.OrderRepData;
import doc.sampleapi.dto.OrderRepDataDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "SampleApiOrderRepDataDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface OrderRepDataDTOMapping extends MappingBase<OrderRepDataDTO, OrderRepData> {


}
