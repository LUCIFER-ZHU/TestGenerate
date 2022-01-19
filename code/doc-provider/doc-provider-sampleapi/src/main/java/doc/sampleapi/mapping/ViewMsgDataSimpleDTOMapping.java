package doc.sampleapi.mapping;

import org.mapstruct.*;
import doc.core.sample.domain.ViewMsgData;
import doc.sampleapi.dto.ViewMsgDataSimpleDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "SampleApiViewMsgDataSimpleDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface ViewMsgDataSimpleDTOMapping extends MappingBase<ViewMsgDataSimpleDTO, ViewMsgData> {


}
