package doc.sampleapi.mapping;

import org.mapstruct.*;
import doc.core.sample.domain.DeptData;
import doc.sampleapi.dto.DeptDataSimpleDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "SampleApiDeptDataSimpleDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface DeptDataSimpleDTOMapping extends MappingBase<DeptDataSimpleDTO, DeptData> {


}
