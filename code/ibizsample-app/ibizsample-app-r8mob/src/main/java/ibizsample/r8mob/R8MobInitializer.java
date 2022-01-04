package ibizsample.r8mob;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;


/**
 * 提供外部容器启动服务能力
 */
@Slf4j
public class R8MobInitializer extends SpringBootServletInitializer {
    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
        log.info("--正在使用外部容器启动服务--");
        return builder.sources(R8MobApplication.class);
    }
}