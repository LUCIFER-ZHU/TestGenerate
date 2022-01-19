package doc.sampleapi.mapping;

import org.mapstruct.*;
import doc.core.sample.domain.ProductCategory;
import doc.sampleapi.dto.ProductCategoryDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "SampleApiProductCategoryDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface ProductCategoryDTOMapping extends MappingBase<ProductCategoryDTO, ProductCategory> {


}
