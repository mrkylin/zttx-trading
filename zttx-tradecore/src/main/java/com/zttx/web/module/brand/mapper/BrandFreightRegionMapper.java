/*
 * Copyright 2015 Zttx, Inc. All rights reserved. 8637.com
 * PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */
package com.zttx.web.module.brand.mapper;

import com.zttx.sdk.core.GenericMapper;
import com.zttx.sdk.annotation.MyBatisDao;
import com.zttx.web.module.brand.entity.BrandFreightRegion;

import java.util.List;

/**
 * 运费区域表 持久层接口
 * <p>File：BrandFreightRegionDao.java </p>
 * <p>Title: BrandFreightRegionDao </p>
 * <p>Description:BrandFreightRegionDao </p>
 * <p>Copyright: Copyright (c) May 26, 2015</p>
 * <p>Company: 8637.com</p>
 * @author Playguy
 * @version 1.0
 */
@MyBatisDao
public interface BrandFreightRegionMapper extends GenericMapper<BrandFreightRegion>
{

    public void removeByTemplateId(String templateId);

    public void insertList(List<BrandFreightRegion> regionList);

    public List<BrandFreightRegion> listByDetailId(String detailId);
}
