<%--
  Created by IntelliJ IDEA.
  User: xiaochencheng
  Date: 2018/12/10
  Time: 16:10
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery-1.8.3.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery.cookie.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/retoken.js"></script>
<script type="text/javascript">

    //是否非空
    function isEmipty(){
        var linkUserName=$("#divAdd input[name='linkUserName']").val();
        var linkUserPhone=$("#divAdd input[name='linkUserPhone']").val();
        var linkUserCardType=$("#divAdd input[name='linkUserCardType']").val();
        var linkUserIdCard=$("#divAdd input[name='linkUserIdCard']").val();
        var linkUserId=$("#divAdd input[name='linkUserId']").val();

        if(linkUserName==null||linkUserName==""){
            alert("手机号不能为空！");
            return false;
        }
        if(linkUserPhone==null||linkUserPhone==""){
            alert("手机号不能为空！");
            return false;
        }
        if(linkUserCardType==null||linkUserCardType==""){
            alert("手机号不能为空！");
            return false;
        }
        if(linkUserIdCard==null||linkUserIdCard==""){
            alert("手机号不能为空！");
            return false;
        }
        if(linkUserId==null||linkUserId==""){
            alert("手机号不能为空！");
            return false;
        }

    }


    $(function () {
        $("#add").click(function () {
            isEmipty();
            var str={
                "linkUserName":$("#divAdd input[name='linkUserName']").val(),
                "linkUserPhone":$("#divAdd input[name='linkUserPhone']").val(),
                "linkUserCardType":$("#divAdd input[name='linkUserCardType']").val(),
                "linkUserIdCard":$("#divAdd input[name='linkUserIdCard']").val(),
                "linkUserId":$("#divAdd input[name='linkUserId']").val()
            };
            var arrs=JSON.stringify(str);
            $.ajax({
                "url":"http://localhost:8080/itrip-biz/api/userinfo/addlinkuser",
                "type":"POST",
                "dataType":"json",
                "contentType":'application/json',
                "data":arrs,
                "success":function (data) {
                    if(data==true){
                        console.log("添加成功");
                        window.location.href="";
                    }else {
                        console.log("添加失败！");
                        $("#addDiv").html("添加失败！");
                    }
                }
            })
        });
    })
</script>
<head>
    <title>添加</title>
</head>
<body>
      <div id="addDiv">
          <form>
          <table>
              <tr>
                  <td>联系人姓名：<input type="text" name="linkusername"></td>
              </tr>
              <tr>
                  <td>联系电话：<input type="text" name="linkUserPhone"></td>
              </tr>
              <tr>
                  <td>卡类型：<input type="text" name="linkUserCardType"></td>
              </tr>
              <tr>
                  <td>联系人卡：<input type="text" name="linkUserIdCard"></td>
              </tr>
              <tr>
                  <td>卡号：<input type="text" name="linkUserId"></td>
              </tr>
              <tr>
                  <td><input type="button" id="add" value="提交"></td>
                  <td><input type="reset" value="重置"></td>
              </tr>
          </table>

          </form>
      </div>

</body>
</html>
