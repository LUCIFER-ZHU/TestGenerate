package doc.sampleapi.mapping;

import org.mapstruct.*;
import doc.core.sample.domain.Calculator;
import doc.sampleapi.dto.CalculatorSimpleDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "SampleApiCalculatorSimpleDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface CalculatorSimpleDTOMapping extends MappingBase<CalculatorSimpleDTO, Calculator> {


}
