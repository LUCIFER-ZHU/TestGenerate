package doc.sampleapi.mapping;

import org.mapstruct.*;
import doc.core.sample.domain.Province;
import doc.sampleapi.dto.ProvinceSimpleDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "SampleApiProvinceSimpleDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface ProvinceSimpleDTOMapping extends MappingBase<ProvinceSimpleDTO, Province> {


}
