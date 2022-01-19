package doc.sampleapi.mapping;

import org.mapstruct.*;
import doc.core.sample.domain.EditorValue;
import doc.sampleapi.dto.EditorValueSimpleDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "SampleApiEditorValueSimpleDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface EditorValueSimpleDTOMapping extends MappingBase<EditorValueSimpleDTO, EditorValue> {


}
