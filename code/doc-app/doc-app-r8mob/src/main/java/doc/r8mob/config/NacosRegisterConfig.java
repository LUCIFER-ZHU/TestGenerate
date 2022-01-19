package doc.r8mob.config;

import com.alibaba.cloud.nacos.registry.NacosAutoServiceRegistration;
import cn.ibizlab.util.errors.BadRequestAlertException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;
import org.springframework.util.ObjectUtils;
import org.springframework.util.StringUtils;
import org.springframework.boot.autoconfigure.condition.ConditionalOnExpression;
import javax.management.MBeanServer;
import javax.management.ObjectName;
import javax.management.Query;
import java.lang.management.ManagementFactory;
import java.util.Set;

/**
 * 外部容器启动服务时，自动注册服务到nacos
 */
@Component
@Slf4j
@ConditionalOnExpression("'${ibiz.deploy.packagetype:jar}'.equals('war')")
public class NacosRegisterConfig implements ApplicationRunner {

    @Autowired(required = false)
    private NacosAutoServiceRegistration registration;

    @Value("${server.port:8080}")
    Integer port;

    @Override
    public void run(ApplicationArguments args) {
        log.info("正在尝试将应用程序注册到nacos");
        if (registration != null && port != null) {
            try {
                String containerPort = getContainerPort();
                if(!StringUtils.isEmpty(containerPort)){
                    registration.setPort(new Integer(containerPort));
                }
                else{
                    registration.setPort(port);
                    log.info("无法获取外部容器端口，将使用程序默认端口{}",port);
                }
                registration.start();
            } catch (Exception e) {
                throw new BadRequestAlertException("应用程序注册到nacos失败，"+e,"","");
            }
            log.info("已将应用程序成功注册到nacos");
        }
        else{
            log.info("无法获取应用程序端口，将应用程序注册到nacos请求被忽略。");
        }
    }

    /**
     * 获取外部容器端口
     */
    public String getContainerPort(){
        String port = null;
        try {
            MBeanServer beanServer = ManagementFactory.getPlatformMBeanServer();
            Set<ObjectName> objectNames = beanServer.queryNames(new ObjectName("*:type=Connector,*"), Query.match(Query.attr("protocol"), Query.value("HTTP/1.1")));
            if(!ObjectUtils.isEmpty(objectNames)){
                port = objectNames.iterator().next().getKeyProperty("port");
            }
        }
        catch (Exception e) {
            log.error("获取外部容器端口失败！"+e);
        }
        return port;
    }
}