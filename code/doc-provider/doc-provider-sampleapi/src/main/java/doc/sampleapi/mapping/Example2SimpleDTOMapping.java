package doc.sampleapi.mapping;

import org.mapstruct.*;
import doc.core.sample.domain.Example2;
import doc.sampleapi.dto.Example2SimpleDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "SampleApiExample2SimpleDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface Example2SimpleDTOMapping extends MappingBase<Example2SimpleDTO, Example2> {


}
