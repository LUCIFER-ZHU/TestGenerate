package doc.sampleapi.mapping;

import org.mapstruct.*;
import doc.core.sample.domain.ProductCategory;
import doc.sampleapi.dto.ProductCategorySimpleDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "SampleApiProductCategorySimpleDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface ProductCategorySimpleDTOMapping extends MappingBase<ProductCategorySimpleDTO, ProductCategory> {


}
