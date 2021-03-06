/*
 * @(#)BrandPointBalanceClientController.java 2014-11-24 下午3:49:08
 * Copyright 2014 张昌苗, Inc. All rights reserved. 8637.com
 * PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */
package com.zttx.web.module.client.controller;

import java.util.List;
import java.util.Map;
import org.apache.commons.collections.MapUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import com.zttx.sdk.bean.ClientParameter;
import com.zttx.sdk.bean.JsonMessage;
import com.zttx.sdk.bean.PaginateResult;
import com.zttx.sdk.bean.Pagination;
import com.zttx.sdk.core.GenericController;
import com.zttx.sdk.exception.BusinessException;
import com.zttx.web.consts.ApplicationConst;
import com.zttx.web.consts.ClientConstant;
import com.zttx.web.consts.CommonConst;
import com.zttx.web.module.brand.entity.BrandPointBalanceLog;
import com.zttx.web.module.brand.model.BrandPointBalanceModel;
import com.zttx.web.module.brand.service.BrandPointBalanceLogService;
import com.zttx.web.module.brand.service.BrandPointBalanceService;
import com.zttx.web.utils.ParameterUtils;

/**
 * <p>File：BrandPointBalanceClientController.java</p>
 * <p>Title: </p>
 * <p>Description:</p>
 * <p>Copyright: Copyright (c) 2014 2014-11-24 下午3:49:08</p>
 * <p>Company: 8637.com</p>
 * @author 张昌苗
 * @version 1.0
 */
@Controller
@RequestMapping(value = ApplicationConst.CLIENT + "/brandPointBalance")
public class BrandPointBalanceClientController extends GenericController
{
    @Autowired
    private BrandPointBalanceService    brandPointBalanceService;
    
    @Autowired
    private BrandPointBalanceLogService brandPointBalanceLogService;
    
    /**
     * 保存扣点
     * @author 张昌苗
     */
    @RequestMapping("/save")
    @ResponseBody
    public JsonMessage save(ClientParameter param) throws BusinessException
    {
        Map<String, String> map = ParameterUtils.getMapFromParameter(param);
        String operName = MapUtils.getString(map, "operName");
        String brandsId = MapUtils.getString(map, "brandsId");
        String joinFormStr = MapUtils.getString(map, "joinFormStr");
        String pointStr = MapUtils.getString(map, "pointStr");
        if (StringUtils.isBlank(operName) || StringUtils.isBlank(brandsId) || StringUtils.isBlank(joinFormStr) || StringUtils.isBlank(pointStr)
                || joinFormStr.split(ClientConstant.ARR_SPLIT).length != pointStr.split(ClientConstant.ARR_SPLIT).length) { throw new BusinessException(
                CommonConst.PARAMS_VALID_ERR); }
        String[] joinFormArr = joinFormStr.split(ClientConstant.ARR_SPLIT);
        String[] pointArr = pointStr.split(ClientConstant.ARR_SPLIT);
        brandPointBalanceService.executeChangePoint(brandsId, joinFormArr, pointArr, operName);
        return super.getJsonMessage(CommonConst.SUCCESS);
    }
    
    /**
     * 扣点列表
     * @author 张昌苗
     */
    @RequestMapping("/list")
    @ResponseBody
    public JsonMessage list(ClientParameter param) throws BusinessException
    {
        Map<String, String> map = ParameterUtils.getMapFromParameter(param);
        Pagination page = new Pagination(MapUtils.getIntValue(map, "currentPage"), MapUtils.getIntValue(map, "pageSize"));
        String brandName = MapUtils.getString(map, "brandName");
        String brandsName = MapUtils.getString(map, "brandsName");
        BrandPointBalanceModel filter = new BrandPointBalanceModel();
        filter.setBrandName(brandName);
        filter.setBrandsName(brandsName);
        PaginateResult<Map<String, Object>> paginateResult = brandPointBalanceService.searchPointData(filter, page);
        return super.getJsonMessage(CommonConst.SUCCESS, paginateResult);
    }
    
    /**
     * 扣点详情
     * @author 张昌苗
     */
    @RequestMapping("/view")
    @ResponseBody
    public JsonMessage view(ClientParameter param) throws BusinessException
    {
        Map<String, String> map = ParameterUtils.getMapFromParameter(param);
        String brandsId = MapUtils.getString(map, "brandsId");
        if (StringUtils.isBlank(brandsId)) { throw new BusinessException(CommonConst.PARAMS_VALID_ERR); }
        Map<String, Object> data = brandPointBalanceService.findPointData(brandsId);
        return super.getJsonMessage(CommonConst.SUCCESS, data);
    }
    
    /**
     * 扣点日志
     * @author 张昌苗
     */
    @RequestMapping("/log")
    @ResponseBody
    public JsonMessage log(ClientParameter param) throws BusinessException
    {
        Map<String, String> map = ParameterUtils.getMapFromParameter(param);
        String brandsId = MapUtils.getString(map, "brandsId");
        if (StringUtils.isBlank(brandsId)) { 
        	throw new BusinessException(CommonConst.PARAMS_VALID_ERR); 
        }
        BrandPointBalanceLog filter = new BrandPointBalanceLog();
        filter.setBrandsId(brandsId);
        List<BrandPointBalanceLog> list = brandPointBalanceLogService.findList(filter);
        return super.getJsonMessage(CommonConst.SUCCESS, list);
    }
}
