package doc.sampleapi.mapping;

import org.mapstruct.*;
import doc.core.sample.domain.CounterData;
import doc.sampleapi.dto.CounterDataSimpleDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "SampleApiCounterDataSimpleDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface CounterDataSimpleDTOMapping extends MappingBase<CounterDataSimpleDTO, CounterData> {


}
