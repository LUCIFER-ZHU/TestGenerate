package doc.sampleapi.mapping;

import org.mapstruct.*;
import doc.core.sample.domain.Calculator;
import doc.sampleapi.dto.CalculatorDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "SampleApiCalculatorDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface CalculatorDTOMapping extends MappingBase<CalculatorDTO, Calculator> {


}
