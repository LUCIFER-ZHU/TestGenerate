package doc.sampleapi.mapping;

import org.mapstruct.*;
import doc.core.sample.domain.Example2;
import doc.sampleapi.dto.Example2DTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "SampleApiExample2DTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface Example2DTOMapping extends MappingBase<Example2DTO, Example2> {


}
