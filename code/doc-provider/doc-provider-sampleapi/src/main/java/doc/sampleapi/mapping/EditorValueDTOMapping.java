package doc.sampleapi.mapping;

import org.mapstruct.*;
import doc.core.sample.domain.EditorValue;
import doc.sampleapi.dto.EditorValueDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "SampleApiEditorValueDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface EditorValueDTOMapping extends MappingBase<EditorValueDTO, EditorValue> {


}
