package cn.ibizlab.sample.sampleapi.mapping;

import org.mapstruct.*;
import cn.ibizlab.sample.core.sample.domain.OrderDetail;
import cn.ibizlab.sample.sampleapi.dto.OrderDetailSimpleDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "SampleApiOrderDetailSimpleDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface OrderDetailSimpleDTOMapping extends MappingBase<OrderDetailSimpleDTO, OrderDetail> {


}
