package doc.sampleapi.mapping;

import org.mapstruct.*;
import doc.core.sample.domain.KanbanData;
import doc.sampleapi.dto.KanbanDataSimpleDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "SampleApiKanbanDataSimpleDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface KanbanDataSimpleDTOMapping extends MappingBase<KanbanDataSimpleDTO, KanbanData> {


}
