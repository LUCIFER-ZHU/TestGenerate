package doc.j2eer8samples;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;


/**
 * 提供外部容器启动服务能力
 */
@Slf4j
public class J2EER8SamplesInitializer extends SpringBootServletInitializer {
    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
        log.info("--正在使用外部容器启动服务--");
        return builder.sources(J2EER8SamplesApplication.class);
    }
}