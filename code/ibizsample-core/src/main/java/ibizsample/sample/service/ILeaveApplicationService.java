package ibizsample.sample.service;

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
import om.baomidou.dynamic.datasource.annotation.DS;

import ibizsample.sample.domain.LeaveApplication;
import ibizsample.sample.filter.LeaveApplicationSearchContext;

public interface ILeaveApplicationService extends IService<LeaveApplication> {

    LeaveApplication get(String key);
    List<LeaveApplication> getByIds(Collection<String> idList);
    List<LeaveApplication> getByEntities(Collection<LeaveApplication> entities);

    LeaveApplication getDraft(LeaveApplication et);

    boolean checkKey(LeaveApplication et);

    boolean create(LeaveApplication et);
    boolean createBatch(List<LeaveApplication> list);

    boolean update(LeaveApplication et);
    boolean updateBatch(List<LeaveApplication> list);

    boolean save(LeaveApplication et);
    boolean saveBatch(List<LeaveApplication> list);

    boolean remove(String key);
    boolean removeBatch(Collection<String> idList);

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
    boolean saveByCustomerId(String customerId,List<LeaveApplication> list);

}