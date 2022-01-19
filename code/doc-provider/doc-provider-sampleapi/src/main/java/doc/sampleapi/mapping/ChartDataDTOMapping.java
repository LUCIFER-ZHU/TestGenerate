package doc.sampleapi.mapping;

import org.mapstruct.*;
import doc.core.sample.domain.ChartData;
import doc.sampleapi.dto.ChartDataDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "SampleApiChartDataDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface ChartDataDTOMapping extends MappingBase<ChartDataDTO, ChartData> {


}
