package doc.sampleapi.mapping;

import org.mapstruct.*;
import doc.core.sample.domain.City;
import doc.sampleapi.dto.CitySimpleDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "SampleApiCitySimpleDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface CitySimpleDTOMapping extends MappingBase<CitySimpleDTO, City> {


}
