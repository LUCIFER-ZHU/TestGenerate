package doc.sampleapi.mapping;

import org.mapstruct.*;
import doc.core.sample.domain.ViewMsgData;
import doc.sampleapi.dto.ViewMsgDataDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "SampleApiViewMsgDataDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface ViewMsgDataDTOMapping extends MappingBase<ViewMsgDataDTO, ViewMsgData> {


}
