package cn.ibizlab.sample.core.sample.domain;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.HashMap;
import java.math.BigInteger;
import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import com.alibaba.fastjson.annotation.JSONField;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import org.springframework.util.ObjectUtils;
import org.springframework.util.DigestUtils;
import org.springframework.util.Assert;
import cn.ibizlab.util.domain.EntityBase;
import cn.ibizlab.util.annotation.DEField;
import cn.ibizlab.util.enums.DEPredefinedFieldType;
import cn.ibizlab.util.enums.DEFieldDefaultValueType;
import cn.ibizlab.util.helper.DataObject;
import cn.ibizlab.util.annotation.Audit;
import cn.ibizlab.util.enums.DupCheck;
import cn.ibizlab.util.domain.EntityMP;
import java.io.Serializable;
import lombok.*;
import lombok.experimental.Accessors;
import org.springframework.data.annotation.Transient;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.baomidou.mybatisplus.annotation.*;
import com.baomidou.mybatisplus.core.toolkit.IdWorker;

@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
@JsonIgnoreProperties(value = "handler")
@TableName(value = "T_CATEGORY", resultMap = "CategoryResultMap")
@ApiModel("类别")
public class Category extends EntityMP implements Serializable
{

    /**
     * 建立人
     */
    @TableField(value = "createman" , fill = FieldFill.INSERT)
    @DEField(name = "createman" , preType = DEPredefinedFieldType.CREATEMAN , dict = "SysOperator")
    @JsonProperty("createman")
    @JSONField(name = "createman")
    @ApiModelProperty("建立人")
    private String createMan;

    /**
     * 类别名称
     */
    @TableField(value = "categoryname")
    @DEField(name = "categoryname")
    @JsonProperty("categoryname")
    @JSONField(name = "categoryname")
    @ApiModelProperty("类别名称")
    private String categoryName;

    /**
     * 类别标识
     */
    @TableId(value = "categoryid" , type = IdType.ASSIGN_UUID)
    @DEField(name = "categoryid" , isKeyField = true)
    @JsonProperty("categoryid")
    @JSONField(name = "categoryid")
    @ApiModelProperty("类别标识")
    private String categoryId;

    /**
     * 建立时间
     */
    @TableField(value = "createdate" , fill = FieldFill.INSERT)
    @DEField(name = "createdate" , preType = DEPredefinedFieldType.CREATEDATE)
    @JsonProperty("createdate")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", locale = "zh", timezone = "GMT+8")
    @JSONField(name = "createdate" , format = "yyyy-MM-dd HH:mm:ss")
    @ApiModelProperty("建立时间")
    private Timestamp createDate;

    /**
     * 更新人
     */
    @TableField(value = "updateman")
    @DEField(name = "updateman" , preType = DEPredefinedFieldType.UPDATEMAN , dict = "SysOperator")
    @JsonProperty("updateman")
    @JSONField(name = "updateman")
    @ApiModelProperty("更新人")
    private String updateMan;

    /**
     * 更新时间
     */
    @TableField(value = "updatedate")
    @DEField(name = "updatedate" , preType = DEPredefinedFieldType.UPDATEDATE)
    @JsonProperty("updatedate")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", locale = "zh", timezone = "GMT+8")
    @JSONField(name = "updatedate" , format = "yyyy-MM-dd HH:mm:ss")
    @ApiModelProperty("更新时间")
    private Timestamp updateDate;

    /**
     * 类别标识
     */
    @TableField(value = "pcategoryid")
    @DEField(name = "pcategoryid")
    @JsonProperty("pcategoryid")
    @JSONField(name = "pcategoryid")
    @ApiModelProperty("类别标识")
    private String pcategoryid;

    /**
     * 类别
     */
    @TableField(value = "pcategoryname" , exist = false)
    @DEField(name = "pcategoryname")
    @JsonProperty("pcategoryname")
    @JSONField(name = "pcategoryname")
    @ApiModelProperty("类别")
    private String pcategoryname;

    /**
     * 类别路径
     */
    @TableField(value = "categorypath")
    @DEField(name = "categorypath")
    @JsonProperty("categorypath")
    @JSONField(name = "categorypath")
    @ApiModelProperty("类别路径")
    private String categoryPath;

    /**
     * 类别路径名称
     */
    @TableField(value = "categorynamepath")
    @DEField(name = "categorynamepath")
    @JsonProperty("categorynamepath")
    @JSONField(name = "categorynamepath")
    @ApiModelProperty("类别路径名称")
    private String categoryNamePath;


    /**
     * 类别
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private cn.ibizlab.sample.core.sample.domain.Category parentCategory;



    /**
     * 设置 [类别名称]
     */
    public Category setCategoryName(String categoryName) {
        this.categoryName = categoryName;
        this.modify("categoryname", categoryName);
        return this;
    }


    /**
     * 格式化日期 [建立时间]
     */
    public String formatCreateDate() {
        if (this.createDate == null) {
            return null;
        }
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        return sdf.format(createDate);
    }


    /**
     * 格式化日期 [更新时间]
     */
    public String formatUpdateDate() {
        if (this.updateDate == null) {
            return null;
        }
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        return sdf.format(updateDate);
    }

    /**
     * 设置 [类别标识]
     */
    public Category setPcategoryid(String pcategoryid) {
        this.pcategoryid = pcategoryid;
        this.modify("pcategoryid", pcategoryid);
        return this;
    }

    /**
     * 设置 [类别]
     */
    public Category setPcategoryname(String pcategoryname) {
        this.pcategoryname = pcategoryname;
        this.modify("pcategoryname", pcategoryname);
        return this;
    }

    /**
     * 设置 [类别路径]
     */
    public Category setCategoryPath(String categoryPath) {
        this.categoryPath = categoryPath;
        this.modify("categorypath", categoryPath);
        return this;
    }

    /**
     * 设置 [类别路径名称]
     */
    public Category setCategoryNamePath(String categoryNamePath) {
        this.categoryNamePath = categoryNamePath;
        this.modify("categorynamepath", categoryNamePath);
        return this;
    }





    /**
     * 复制当前对象数据到目标对象(粘贴重置)
     * @param targetEntity 目标数据对象
     * @param bIncEmpty  是否包括空值
     * @param <T>
     * @return
     */
    @Override
    public <T> T copyTo(T targetEntity, boolean bIncEmpty) {
        this.reset("categoryid");        
        return super.copyTo(targetEntity, bIncEmpty);
    }    
}