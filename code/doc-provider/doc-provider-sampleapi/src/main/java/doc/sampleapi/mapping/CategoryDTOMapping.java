package doc.sampleapi.mapping;

import org.mapstruct.*;
import doc.core.sample.domain.Category;
import doc.sampleapi.dto.CategoryDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "SampleApiCategoryDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface CategoryDTOMapping extends MappingBase<CategoryDTO, Category> {


}
