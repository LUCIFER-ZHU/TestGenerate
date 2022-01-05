package cn.ibizlab.sample.sampleapi.mapping;

import org.mapstruct.*;
import cn.ibizlab.sample.core.sample.domain.OrderRepData;
import cn.ibizlab.sample.sampleapi.dto.OrderRepDataSimpleDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "OrderRepDataSimpleDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface OrderRepDataSimpleDTOMapping extends MappingBase<OrderRepDataSimpleDTO, OrderRepData> {


}
