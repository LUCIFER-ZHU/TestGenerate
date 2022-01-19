package doc.core.sample.service;

import java.io.Serializable;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.HashMap;
import java.util.Collection;
import java.math.BigInteger;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.scheduling.annotation.Async;
import com.alibaba.fastjson.JSONObject;
import org.springframework.cache.annotation.CacheEvict;

import com.baomidou.mybatisplus.extension.service.IService;
import com.baomidou.dynamic.datasource.annotation.DS;
import cn.ibizlab.util.helper.CachedBeanCopier;
import doc.core.sample.domain.LeaveApplication;
import doc.core.sample.filter.LeaveApplicationSearchContext;

public interface ILeaveApplicationService extends IService<LeaveApplication> {

    LeaveApplication get(LeaveApplication et);
    default LeaveApplication get(String key) {
        return get(new LeaveApplication().setLeaveApplicationId(key));
    }
    default List<LeaveApplication> getByIds(Collection<String> ids) {
        List<LeaveApplication> entities =new ArrayList();
        ids.forEach(key -> entities.add(new LeaveApplication().setLeaveApplicationId(key)));
        return getByEntities(entities);
    }
    List<LeaveApplication> getByEntities(List<LeaveApplication> entities);

    LeaveApplication getDraft(LeaveApplication et);

    boolean checkKey(LeaveApplication et);

    boolean create(LeaveApplication et);
    boolean createBatch(List<LeaveApplication> list);

    boolean update(LeaveApplication et);
    boolean updateBatch(List<LeaveApplication> list);

    boolean save(LeaveApplication et);
    boolean saveBatch(List<LeaveApplication> list);

    default boolean remove(String key) {
        return remove(new LeaveApplication().setLeaveApplicationId(key));
    }
    boolean remove(LeaveApplication et);

    boolean removeBatch(Collection<String> ids);

    LeaveApplication a(LeaveApplication et);
    boolean aBatch(List<LeaveApplication> list);

    LeaveApplication wfError(LeaveApplication et);
    boolean wfErrorBatch(List<LeaveApplication> list);

    LeaveApplication wfFinish(LeaveApplication et);
    boolean wfFinishBatch(List<LeaveApplication> list);

    LeaveApplication wfInit(LeaveApplication et);
    boolean wfInitBatch(List<LeaveApplication> list);

    LeaveApplication wfStart(LeaveApplication et);
    boolean wfStartBatch(List<LeaveApplication> list);

    LeaveApplication wfUpdate(LeaveApplication et);
    boolean wfUpdateBatch(List<LeaveApplication> list);

    Page<LeaveApplication> searchDefault(LeaveApplicationSearchContext context);
    List<LeaveApplication> listDefault(LeaveApplicationSearchContext context);

    List<LeaveApplication> selectByCustomerId(String customerId);
    boolean removeByCustomerId(String customerId);
    boolean resetByCustomerId(String customerId);
    boolean saveByCustomerId(doc.core.sample.domain.Customer customer,List<LeaveApplication> list);
    default boolean saveByCustomerId(String customerId,List<LeaveApplication> list) {
        return saveByCustomerId(new doc.core.sample.domain.Customer().setCustomerId(customerId),list);
    }

}