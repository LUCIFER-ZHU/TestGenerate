package ibizsample.core.util.config;

import org.springframework.boot.autoconfigure.condition.ConditionalOnExpression;
import org.springframework.context.annotation.Configuration;
import com.baomidou.jobs.starter.EnableJobs;

@EnableJobs
@Configuration
@ConditionalOnExpression("!'${jobs.admin-address:NA}'.equals('NA')")
public class JobConfig {

}
