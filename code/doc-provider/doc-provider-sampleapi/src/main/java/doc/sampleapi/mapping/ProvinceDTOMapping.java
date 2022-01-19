package doc.sampleapi.mapping;

import org.mapstruct.*;
import doc.core.sample.domain.Province;
import doc.sampleapi.dto.ProvinceDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "SampleApiProvinceDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface ProvinceDTOMapping extends MappingBase<ProvinceDTO, Province> {


}
