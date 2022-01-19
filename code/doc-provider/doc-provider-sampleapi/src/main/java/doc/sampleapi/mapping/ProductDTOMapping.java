package doc.sampleapi.mapping;

import org.mapstruct.*;
import doc.core.sample.domain.Product;
import doc.sampleapi.dto.ProductDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "SampleApiProductDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface ProductDTOMapping extends MappingBase<ProductDTO, Product> {


}
