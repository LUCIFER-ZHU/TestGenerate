package cn.ibizlab.sample.sampleapi.mapping;

import org.mapstruct.*;
import cn.ibizlab.sample.core.sample.domain.LeaveApplication;
import cn.ibizlab.sample.sampleapi.dto.LeaveApplicationSimpleDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "SampleApiLeaveApplicationSimpleDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface LeaveApplicationSimpleDTOMapping extends MappingBase<LeaveApplicationSimpleDTO, LeaveApplication> {


}
