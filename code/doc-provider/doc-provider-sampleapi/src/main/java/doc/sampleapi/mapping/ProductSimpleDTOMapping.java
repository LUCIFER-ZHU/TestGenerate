package doc.sampleapi.mapping;

import org.mapstruct.*;
import doc.core.sample.domain.Product;
import doc.sampleapi.dto.ProductSimpleDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "SampleApiProductSimpleDTOMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface ProductSimpleDTOMapping extends MappingBase<ProductSimpleDTO, Product> {


}
