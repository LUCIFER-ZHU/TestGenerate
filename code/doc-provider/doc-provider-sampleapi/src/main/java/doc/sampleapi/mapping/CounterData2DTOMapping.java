package doc.sampleapi.mapping;

import org.mapstruct.*;
import doc.core.sample.domain.CounterData2;
import doc.sampleapi.dto.CounterData2DTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "SampleApiCounterData2DTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface CounterData2DTOMapping extends MappingBase<CounterData2DTO, CounterData2> {


}
