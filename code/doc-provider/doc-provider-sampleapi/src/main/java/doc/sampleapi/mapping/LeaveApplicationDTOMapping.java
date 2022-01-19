package doc.sampleapi.mapping;

import org.mapstruct.*;
import doc.core.sample.domain.LeaveApplication;
import doc.sampleapi.dto.LeaveApplicationDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "SampleApiLeaveApplicationDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface LeaveApplicationDTOMapping extends MappingBase<LeaveApplicationDTO, LeaveApplication> {


}
