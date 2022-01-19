package doc.sampleapi.mapping;

import org.mapstruct.*;
import doc.core.sample.domain.City;
import doc.sampleapi.dto.CityDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "SampleApiCityDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface CityDTOMapping extends MappingBase<CityDTO, City> {


}
