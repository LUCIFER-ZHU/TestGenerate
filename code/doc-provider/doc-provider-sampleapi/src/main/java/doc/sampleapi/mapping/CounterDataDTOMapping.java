package doc.sampleapi.mapping;

import org.mapstruct.*;
import doc.core.sample.domain.CounterData;
import doc.sampleapi.dto.CounterDataDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "SampleApiCounterDataDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface CounterDataDTOMapping extends MappingBase<CounterDataDTO, CounterData> {


}
