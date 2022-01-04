package ibizsample.core.util.job;

import cn.ibizlab.util.client.IBZUAAFeignClient;
import cn.ibizlab.util.client.IBZLiteFeignClient;
import com.alibaba.fastjson.JSONObject;
import com.alibaba.fastjson.JSONArray;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;
import org.springframework.util.ObjectUtils;
import org.springframework.util.DigestUtils;
import java.io.InputStream;
import java.util.*;

/**
 * 权限：向uaa同步当前系统菜单、权限资源任务类
 */
@Slf4j
@Component
@ConditionalOnProperty( name = "ibiz.enablePermissionValid", havingValue = "true")
public class PermissionSyncJob implements ApplicationRunner {

    @Value("${ ibiz.systemid:iBizSample }")
    private String systemId;
    
    @Value("${ ibiz.systemname:iBizSample }")
    private String systemName;

    @Autowired
    @Lazy
    private IBZUAAFeignClient uaaClient;

    @Autowired
    @Lazy
    IBZLiteFeignClient liteClient;
    
    @Autowired
    @Lazy
    private cn.ibizlab.util.client.IBZWFFeignClient wfClient;

    @Autowired
    @Lazy
    private cn.ibizlab.util.client.IBZNotifyFeignClient notifyClient;   

    
    @Override
    public void run(ApplicationArguments args) {
        try {
            Thread.sleep(10000);
            InputStream permission = this.getClass().getResourceAsStream("/permission/systemResource.json"); //权限资源
            if (!ObjectUtils.isEmpty(permission)) {
                String strPermission = IOUtils.toString(permission, "UTF-8");
                JSONObject system = new JSONObject();
                system.put("pssystemid", systemId);
                system.put("pssystemname", systemName);
                system.put("sysstructure", JSONObject.parseObject(strPermission));
                system.put("md5check", DigestUtils.md5DigestAsHex(strPermission.getBytes()));
                if (uaaClient.syncSysAuthority(system)) {
                    log.info("向[uaa]同步系统资源成功");
                } else {
                    log.error("向[uaa]同步系统资源失败");
                }
            }
        } catch (Exception ex) {
            log.error("向[uaa]同步系统资源失败，请检查[uaa]服务是否正常运行! {}", ex.getMessage());
        }

        try {
            InputStream model = this.getClass().getResourceAsStream("/sysmodel/${sys.codeName}.json"); //系统模型
            if (!ObjectUtils.isEmpty(model)) {
                String strModel = IOUtils.toString(model, "UTF-8");
                if (liteClient.syncSysModel(JSONObject.parseObject(strModel))) {
                    log.info("向[lite]同步模型成功");
                } else {
                    log.error("向[lite]同步模型失败");
                }
            }
        } catch (Exception ex) {
            log.error("向[lite]同步系统模型失败，请检查[lite]服务是否正常运行! {}", ex.getMessage());
        }

        try {
            List<Map<String, Object>> workflows = new ArrayList(); //工作流
            if (!ObjectUtils.isEmpty(this.getClass().getResourceAsStream("/workflow/LeaveApplicationv1.bpmn"))) {
                Map<String, Object> map=new HashMap<String, Object>();
                map.put("LeaveApplicationv1.bpmn", IOUtils.toString(this.getClass().getResourceAsStream("/workflow/LeaveApplicationv1.bpmn"), "UTF-8"));    
                workflows.add(map);
            }        
            if (!ObjectUtils.isEmpty(this.getClass().getResourceAsStream("/workflow/LeaveApplicationv2.bpmn"))) {
                Map<String, Object> map=new HashMap<String, Object>();
                map.put("LeaveApplicationv2.bpmn", IOUtils.toString(this.getClass().getResourceAsStream("/workflow/LeaveApplicationv2.bpmn"), "UTF-8"));    
                workflows.add(map);
            }        
            if (workflows.size() > 0) {
                if (wfClient.deployBpmnFile(workflows)) {
                    log.info("向[wf]部署流程成功");
                } else {
                    log.error("向[wf]部署流程失败");
                }
            }
        } catch (Exception ex) {
            log.error("向[wf]部署流程失败，请检查[wf]服务是否正常运行! {}", ex.getMessage());
        }


        try {
            InputStream template = this.getClass().getResourceAsStream("/msgtempl/systemMsgTempl.json"); //消息模板
            if (!ObjectUtils.isEmpty(template)) {
                String strTemplate = IOUtils.toString(template, "UTF-8");
                JSONObject arg=new JSONObject();
                arg.put("template", JSONArray.parseArray(strTemplate));
                if (notifyClient.createMsgTemplate(arg)) {
                    log.info("向[notify]同步消息模板成功");
                } else {
                    log.error("向[notify]同步消息模板失败");
                }
            }
        } catch (Exception ex) {
            log.error("向[notify]同步消息模板失败，请检查[notify]服务是否正常运行! {}", ex.getMessage());
        }

    }
}