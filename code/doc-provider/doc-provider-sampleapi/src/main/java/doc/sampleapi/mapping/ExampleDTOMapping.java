package doc.sampleapi.mapping;

import org.mapstruct.*;
import doc.core.sample.domain.Example;
import doc.sampleapi.dto.ExampleDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "SampleApiExampleDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface ExampleDTOMapping extends MappingBase<ExampleDTO, Example> {


}
