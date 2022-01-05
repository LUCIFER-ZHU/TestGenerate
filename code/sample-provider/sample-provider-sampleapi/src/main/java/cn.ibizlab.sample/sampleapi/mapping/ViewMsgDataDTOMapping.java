package cn.ibizlab.sample.sampleapi.mapping;

import org.mapstruct.*;
import cn.ibizlab.sample.core.sample.domain.ViewMsgData;
import cn.ibizlab.sample.sampleapi.dto.ViewMsgDataDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "ViewMsgDataDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface ViewMsgDataDTOMapping extends MappingBase<ViewMsgDataDTO, ViewMsgData> {


}
