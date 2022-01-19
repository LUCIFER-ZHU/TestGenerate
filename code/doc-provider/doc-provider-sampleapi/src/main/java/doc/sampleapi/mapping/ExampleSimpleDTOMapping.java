package doc.sampleapi.mapping;

import org.mapstruct.*;
import doc.core.sample.domain.Example;
import doc.sampleapi.dto.ExampleSimpleDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "SampleApiExampleSimpleDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface ExampleSimpleDTOMapping extends MappingBase<ExampleSimpleDTO, Example> {


}
