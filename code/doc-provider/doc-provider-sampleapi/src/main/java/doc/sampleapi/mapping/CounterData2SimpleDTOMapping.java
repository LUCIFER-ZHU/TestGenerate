package doc.sampleapi.mapping;

import org.mapstruct.*;
import doc.core.sample.domain.CounterData2;
import doc.sampleapi.dto.CounterData2SimpleDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "SampleApiCounterData2SimpleDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface CounterData2SimpleDTOMapping extends MappingBase<CounterData2SimpleDTO, CounterData2> {


}
