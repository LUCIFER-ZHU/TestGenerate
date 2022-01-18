package cn.ibizlab.sample.sampleapi.mapping;

import org.mapstruct.*;
import cn.ibizlab.sample.core.sample.domain.ViewMsgData;
import cn.ibizlab.sample.sampleapi.dto.ViewMsgDataSimpleDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "SampleApiViewMsgDataSimpleDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface ViewMsgDataSimpleDTOMapping extends MappingBase<ViewMsgDataSimpleDTO, ViewMsgData> {


}
