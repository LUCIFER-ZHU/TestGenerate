package cn.ibizlab.sample.sampleapi.mapping;

import org.mapstruct.*;
import cn.ibizlab.sample.core.sample.domain.LeaveApplication;
import cn.ibizlab.sample.sampleapi.dto.LeaveApplicationDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "SampleApiLeaveApplicationDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface LeaveApplicationDTOMapping extends MappingBase<LeaveApplicationDTO, LeaveApplication> {


}
