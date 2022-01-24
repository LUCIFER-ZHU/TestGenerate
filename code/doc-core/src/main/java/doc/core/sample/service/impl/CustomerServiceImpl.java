package doc.core.sample.service.impl;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.Map;
import java.util.HashSet;
import java.util.HashMap;
import java.util.Collection;
import java.util.Objects;
import java.util.Optional;
import java.math.BigInteger;
import lombok.extern.slf4j.Slf4j;

import cn.ibizlab.util.security.SpringContextHolder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cglib.beans.BeanCopier;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.util.ObjectUtils;
import org.springframework.util.StringUtils;
import org.springframework.util.Assert;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Value;
import cn.ibizlab.util.errors.BadRequestAlertException;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Lazy;
import doc.core.sample.domain.Customer;
import doc.core.sample.filter.CustomerSearchContext;
import doc.core.sample.service.ICustomerService;
import doc.core.sample.mapper.CustomerMapper;
import cn.ibizlab.util.helper.CachedBeanCopier;
import cn.ibizlab.util.helper.DEFieldCacheMap;
import cn.ibizlab.util.security.AuthenticationUser;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import doc.core.sample.domain.City;
import doc.core.sample.service.ICityService;   
import doc.core.sample.domain.District;
import doc.core.sample.service.IDistrictService;   
import doc.core.sample.domain.Province;
import doc.core.sample.service.IProvinceService;   


/**
 * 实体[客户] 服务对象接口实现
 */
@Slf4j
@Service("CustomerService")
public class CustomerServiceImpl extends ServiceImpl<CustomerMapper,Customer> implements ICustomerService {

    protected ICustomerService getProxyService() {
        return SpringContextHolder.getBean(this.getClass());
    }

    @Autowired
    @Lazy
    protected ICityService cityService;
   
    @Autowired
    @Lazy
    protected IDistrictService districtService;
   
    @Autowired
    @Lazy
    protected IProvinceService provinceService;
   

    protected int batchSize = 500;

    public Customer get(Customer et) {
        Customer rt = this.baseMapper.selectEntity(et);
        Assert.notNull(rt,"数据不存在,客户:"+et.getCustomerId());
        BeanUtils.copyProperties(rt, et);
        return et;
    }
    
    public List<Customer> getByEntities(List<Customer> entities) {
        return this.baseMapper.selectEntities(entities);
    }

    public void fillParentData(Customer et) {
        if(!ObjectUtils.isEmpty(et.getCityId())) {
            City city = et.getCity();
            if(!ObjectUtils.isEmpty(city)) {
                et.setCityName(city.getCityName());   
            }
        }    
        if(!ObjectUtils.isEmpty(et.getPcustomerid())) {
            Customer customer = et.getParentCustomer();
            if(!ObjectUtils.isEmpty(customer)) {
                et.setPcustomername(customer.getCustomerName());   
            }
        }    
        if(!ObjectUtils.isEmpty(et.getDistrictId())) {
            District district = et.getDistrict();
            if(!ObjectUtils.isEmpty(district)) {
                et.setDistrictName(district.getDistrictName());   
            }
        }    
        if(!ObjectUtils.isEmpty(et.getProvinceId())) {
            Province province = et.getProvince();
            if(!ObjectUtils.isEmpty(province)) {
                et.setProvinceName(province.getProvinceName());   
            }
        }    
    }

    public Customer getDraft(Customer et) {
        fillParentData(et);
        return et;
    }

    public boolean checkKey(Customer et) {
        return this.count(Wrappers.lambdaQuery(et))>0;
    }

    @Override
    @Transactional
    public boolean create(Customer et) {
        fillParentData(et);
        if(!this.retBool(this.baseMapper.insert(et))) 
            return false;
        get(et);
        return true;
    }
    @Transactional
    public boolean createBatch(List<Customer> list) {
        list.forEach(et->fillParentData(et));
        this.saveBatch(list, batchSize);        
        return true;
    }

    @Transactional
    public boolean update(Customer et) {
        fillParentData(et);
        if(!update(et, (Wrapper) et.getUpdateWrapper(true)
                .eq("customerid", et.getCustomerId())
            )) {
            return false;
        }
        get(et);
        return true;
    }

    @Transactional
    public boolean updateBatch(List<Customer> list) {
        list.forEach(et->fillParentData(et));
        updateBatchById(list, batchSize);
        return true;
    }

    @Transactional
    public boolean save(Customer et) {
        if(checkKey(et))
            return getProxyService().update(et);
        else
            return getProxyService().create(et);
    }

    @Transactional
    public boolean saveBatch(List<Customer> list) {
        List<Customer> rt=this.getByEntities(list);
        Set<Serializable> keys=new HashSet<>();
        rt.forEach(et->{
            Serializable key = et.getCustomerId();
            if(!ObjectUtils.isEmpty(key))
                keys.add(key);
        });
        List<Customer> _create=new ArrayList<>();
        List<Customer> _update=new ArrayList<>();
        list.forEach(et-> {
            Serializable key = et.getCustomerId();
            if(keys.contains(key))
                _update.add(et);
            else
                _create.add(et);
        });
        List rtList=new ArrayList<>();
        if(_update.size()>0 && (!getProxyService().updateBatch(_update)))
            return false;
        if(_create.size()>0 && (!getProxyService().createBatch(_create)))
            return false;
        return true;
    }

    @Transactional
    public boolean remove(Customer et) {
        String key = et.getCustomerId();

        if(!remove(new QueryWrapper<Customer>()
                .eq("customerid", et.getCustomerId())
            )) {
            return false;
        }
        return true ;
    }
    
    @Transactional
    public boolean removeBatch(Collection<String> ids) {
        if(!removeByIds(ids))
            return false;
        return true;
    }

    @Transactional
    public Customer getOrderCnt(Customer et) {
        return et;
    }
    @Transactional
    public boolean getOrderCntBatch(List<Customer> list) {
        return true;
    }

    public Page<Customer> searchDefault(CustomerSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<Customer> pages=baseMapper.searchDefault(context.getPages(),context,context.getSelectCond());
        return new PageImpl<Customer>(com.alibaba.fastjson.JSON.parseArray(com.alibaba.fastjson.JSON.toJSONString(pages.getRecords()),Customer.class), context.getPageable(), pages.getTotal());
    }
    public List<Customer> listDefault(CustomerSearchContext context) {
        return com.alibaba.fastjson.JSON.parseArray(com.alibaba.fastjson.JSON.toJSONString(baseMapper.listDefault(context,context.getSelectCond())),Customer.class);
    }

    public List<Customer> selectByCityId(String cityId) {
        return baseMapper.selectByCityId(cityId);
    }

    public boolean removeByCityId(String cityId) {
        return this.remove(new QueryWrapper<Customer>().eq("cityid",cityId));
    }

    public boolean resetByCityId(String cityId) {
        return this.update(new UpdateWrapper<Customer>().set("cityid",null).eq("cityid",cityId));
    }

    public boolean saveByCityId(City city,List<Customer> list) {
        if(list==null)
            return true;
        Set<String> delIds=new HashSet<String>();
        List<Customer> _update=new ArrayList<Customer>();
        List<Customer> _create=new ArrayList<Customer>();
        for(Customer before:selectByCityId(city.getCityId())){
            delIds.add(before.getCustomerId());
        }
        for(Customer sub:list) {
            sub.setCityId(city.getCityId());
            sub.setCity(city);
            if(ObjectUtils.isEmpty(sub.getCustomerId()))
                sub.setCustomerId((String)sub.getDefaultKey(true));
            if(delIds.contains(sub.getCustomerId())) {
                delIds.remove(sub.getCustomerId());
                _update.add(sub);
            }
            else
                _create.add(sub);
        }
        if(_update.size()>0 && (!getProxyService().updateBatch(_update)))
            return false;
        if(_create.size()>0 && (!getProxyService().createBatch(_create)))
            return false;
        if(delIds.size()>0 && (!getProxyService().removeBatch(delIds)))
            return false;
        return true;
    }

    public List<Customer> selectByPcustomerid(String pcustomerid) {
        return baseMapper.selectByPcustomerid(pcustomerid);
    }

    public boolean removeByPcustomerid(String pcustomerid) {
        return this.remove(new QueryWrapper<Customer>().eq("pcustomerid",pcustomerid));
    }

    public boolean resetByPcustomerid(String pcustomerid) {
        return this.update(new UpdateWrapper<Customer>().set("pcustomerid",null).eq("pcustomerid",pcustomerid));
    }

    public boolean saveByPcustomerid(Customer customer,List<Customer> list) {
        if(list==null)
            return true;
        Set<String> delIds=new HashSet<String>();
        List<Customer> _update=new ArrayList<Customer>();
        List<Customer> _create=new ArrayList<Customer>();
        for(Customer before:selectByPcustomerid(customer.getCustomerId())){
            delIds.add(before.getCustomerId());
        }
        for(Customer sub:list) {
            sub.setPcustomerid(customer.getCustomerId());
            sub.setParentCustomer(customer);
            if(ObjectUtils.isEmpty(sub.getCustomerId()))
                sub.setCustomerId((String)sub.getDefaultKey(true));
            if(delIds.contains(sub.getCustomerId())) {
                delIds.remove(sub.getCustomerId());
                _update.add(sub);
            }
            else
                _create.add(sub);
        }
        if(_update.size()>0 && (!getProxyService().updateBatch(_update)))
            return false;
        if(_create.size()>0 && (!getProxyService().createBatch(_create)))
            return false;
        if(delIds.size()>0 && (!getProxyService().removeBatch(delIds)))
            return false;
        return true;
    }

    public List<Customer> selectByDistrictId(String districtId) {
        return baseMapper.selectByDistrictId(districtId);
    }

    public boolean removeByDistrictId(String districtId) {
        return this.remove(new QueryWrapper<Customer>().eq("districtid",districtId));
    }

    public boolean resetByDistrictId(String districtId) {
        return this.update(new UpdateWrapper<Customer>().set("districtid",null).eq("districtid",districtId));
    }

    public boolean saveByDistrictId(District district,List<Customer> list) {
        if(list==null)
            return true;
        Set<String> delIds=new HashSet<String>();
        List<Customer> _update=new ArrayList<Customer>();
        List<Customer> _create=new ArrayList<Customer>();
        for(Customer before:selectByDistrictId(district.getDistrictId())){
            delIds.add(before.getCustomerId());
        }
        for(Customer sub:list) {
            sub.setDistrictId(district.getDistrictId());
            sub.setDistrict(district);
            if(ObjectUtils.isEmpty(sub.getCustomerId()))
                sub.setCustomerId((String)sub.getDefaultKey(true));
            if(delIds.contains(sub.getCustomerId())) {
                delIds.remove(sub.getCustomerId());
                _update.add(sub);
            }
            else
                _create.add(sub);
        }
        if(_update.size()>0 && (!getProxyService().updateBatch(_update)))
            return false;
        if(_create.size()>0 && (!getProxyService().createBatch(_create)))
            return false;
        if(delIds.size()>0 && (!getProxyService().removeBatch(delIds)))
            return false;
        return true;
    }

    public List<Customer> selectByProvinceId(String provinceId) {
        return baseMapper.selectByProvinceId(provinceId);
    }

    public boolean removeByProvinceId(String provinceId) {
        return this.remove(new QueryWrapper<Customer>().eq("provinceid",provinceId));
    }

    public boolean resetByProvinceId(String provinceId) {
        return this.update(new UpdateWrapper<Customer>().set("provinceid",null).eq("provinceid",provinceId));
    }

    public boolean saveByProvinceId(Province province,List<Customer> list) {
        if(list==null)
            return true;
        Set<String> delIds=new HashSet<String>();
        List<Customer> _update=new ArrayList<Customer>();
        List<Customer> _create=new ArrayList<Customer>();
        for(Customer before:selectByProvinceId(province.getProvinceId())){
            delIds.add(before.getCustomerId());
        }
        for(Customer sub:list) {
            sub.setProvinceId(province.getProvinceId());
            sub.setProvince(province);
            if(ObjectUtils.isEmpty(sub.getCustomerId()))
                sub.setCustomerId((String)sub.getDefaultKey(true));
            if(delIds.contains(sub.getCustomerId())) {
                delIds.remove(sub.getCustomerId());
                _update.add(sub);
            }
            else
                _create.add(sub);
        }
        if(_update.size()>0 && (!getProxyService().updateBatch(_update)))
            return false;
        if(_create.size()>0 && (!getProxyService().createBatch(_create)))
            return false;
        if(delIds.size()>0 && (!getProxyService().removeBatch(delIds)))
            return false;
        return true;
    }




}