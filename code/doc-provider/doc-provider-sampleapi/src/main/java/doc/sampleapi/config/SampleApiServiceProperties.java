package doc.sampleapi.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import lombok.Data;

@ConfigurationProperties(prefix = "service.sampleapi")
@Data
public class SampleApiServiceProperties {

	private boolean enabled;

	private boolean auth;


}