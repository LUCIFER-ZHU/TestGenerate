package doc.sampleapi.mapping;

import org.mapstruct.*;
import doc.core.sample.domain.LeaveApplication;
import doc.sampleapi.dto.LeaveApplicationSimpleDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "SampleApiLeaveApplicationSimpleDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface LeaveApplicationSimpleDTOMapping extends MappingBase<LeaveApplicationSimpleDTO, LeaveApplication> {


}
