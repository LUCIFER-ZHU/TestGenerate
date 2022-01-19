package doc.sampleapi.mapping;

import org.mapstruct.*;
import doc.core.sample.domain.KanbanData;
import doc.sampleapi.dto.KanbanDataDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "SampleApiKanbanDataDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface KanbanDataDTOMapping extends MappingBase<KanbanDataDTO, KanbanData> {


}
