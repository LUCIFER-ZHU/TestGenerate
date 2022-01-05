package cn.ibizlab.sample.sampleapi.mapping;

import org.mapstruct.*;
import cn.ibizlab.sample.core.sample.domain.LeaveApplication;
import cn.ibizlab.sample.sampleapi.dto.LeaveApplicationDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "LeaveApplicationMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface LeaveApplicationMapping extends MappingBase<LeaveApplicationDTO, LeaveApplication> {


}
