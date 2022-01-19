package doc.sampleapi.mapping;

import org.mapstruct.*;
import doc.core.sample.domain.ChartData;
import doc.sampleapi.dto.ChartDataSimpleDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "SampleApiChartDataSimpleDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface ChartDataSimpleDTOMapping extends MappingBase<ChartDataSimpleDTO, ChartData> {


}
