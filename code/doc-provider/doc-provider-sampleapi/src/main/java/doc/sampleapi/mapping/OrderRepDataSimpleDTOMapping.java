package doc.sampleapi.mapping;

import org.mapstruct.*;
import doc.core.sample.domain.OrderRepData;
import doc.sampleapi.dto.OrderRepDataSimpleDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "SampleApiOrderRepDataSimpleDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface OrderRepDataSimpleDTOMapping extends MappingBase<OrderRepDataSimpleDTO, OrderRepData> {


}
