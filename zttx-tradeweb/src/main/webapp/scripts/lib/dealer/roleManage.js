var roleManage={insertSumUserm:function(){var a=$("#Form_AddChildren").serialize();$.ajax({type:"POST",url:"insertSumUserm",data:a,dataType:"json",success:function(a){0==a.code?window.location.reload():-1==a.code?remind("error",a.message):setErrMsg("#Form_AddChildren",a.object)},error:function(a,b,c){alert(c)}})},updateSumUserm:function(){var a=$("#Form_updateChildren").serialize();$.ajax({type:"POST",url:"updateSumUserm",data:a,dataType:"json",success:function(a){0==a.code?window.location.reload():-1==a.code?remind("error",a.message):(alert(a.object),setErrMsg("#Form_updateChildren",a.object))},error:function(a,b,c){remind("error",c)}})},updateDealerDept:function(a){var b=$.trim($("#deptSelect"+a).val());null!=b&&""!=b?$.ajax({type:"POST",url:"updateDealerDept",data:{refrenceId:a,deptId:b},dataType:"json",success:function(a){0!=a.code&&remind("error",a.message)},error:function(a,b,c){remind("error",c)}}):remind("error","请选择部门")},updateDealerRole:function(a){var b=$.trim($("#roleSelect"+a).val());null!=b&&""!=b?$.ajax({type:"POST",url:"updateDealerRole",data:{refrenceId:a,roleId:b},dataType:"json",success:function(a){0!=a.code&&remind("error",a.message)},error:function(a,b,c){remind("error",c)}}):remind("error","请选择角色")},updateDealerAccountType:function(a){null!=a&&""!=a&&$.ajax({type:"POST",url:"upDealerAccountType",data:{refrenceId:a},dataType:"json",success:function(a){0!=a.code?alert(a.message):window.location.reload()},error:function(a,b,c){remind("error",c)}})}};window.roleManage=window.$ROL=roleManage;