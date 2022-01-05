package cn.ibizlab.sample.sampleapi.mapping;

import org.mapstruct.*;
import cn.ibizlab.sample.core.sample.domain.Province;
import cn.ibizlab.sample.sampleapi.dto.ProvinceDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "ProvinceMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface ProvinceMapping extends MappingBase<ProvinceDTO, Province> {


}
