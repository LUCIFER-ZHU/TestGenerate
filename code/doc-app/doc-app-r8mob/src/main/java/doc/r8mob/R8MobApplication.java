package doc.r8mob;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.cloud.openfeign.FeignClientsConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.boot.SpringApplication;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;

@Slf4j
@Import({
    FeignClientsConfiguration.class
})
@EnableDiscoveryClient
@Configuration
@EnableFeignClients(basePackages = {"doc.r8mob","cn.ibizlab.util"})
@EnableZuulProxy
@ComponentScan(basePackages = {"doc.r8mob","cn.ibizlab.util"})
@SpringBootApplication(exclude = {
        org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration.class,
})
public class R8MobApplication extends WebMvcConfigurerAdapter {

    public static void main(String[] args) {
        SpringApplication.run(R8MobApplication.class, args);
    }

}
