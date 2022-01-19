package doc.sampleapi.mapping;

import org.mapstruct.*;
import doc.core.sample.domain.Category;
import doc.sampleapi.dto.CategorySimpleDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "SampleApiCategorySimpleDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface CategorySimpleDTOMapping extends MappingBase<CategorySimpleDTO, Category> {


}
