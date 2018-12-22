<%--
  Created by IntelliJ IDEA.
  User: xiaochencheng
  Date: 2018/12/11
  Time: 15:43
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery-1.8.3.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery.cookie.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/retoken.js"></script>
<script type="text/javascript">

    function isEmipty(){
        var linkusername=$("#AddView input[name='linkusername']").val();
        var linkPhone=$("#AddView input[name='linkPhone']").val();
        var linkIdCard=$("#AddView input[name='linkIdCard']").val();

        if(linkusername==null||linkusername==""){
            alert("联系人姓名不能为空！");
            return false;
        }
        if(linkPhone==null||linkPhone==""){
            alert("手机号不能为空！");
            return false;
        }
        if(linkIdCard==null||linkIdCard==""){
            alert("身份证号不能为空！");
            return false;
        }
    }


    $(function () {
        $("#motify").click(function () {
            isEmipty();
            var str={
                linkusername:$("#AddView input[name='linkusername']").val(),
                linkPhone:$("#AddView input[name='linkPhone']").val(),
                linkIdCardType:0,
                linkIdCard:$("#AddView input[name='linkIdCard']").val()
            };
            var arrs=JSON.stringify(str);
            $.ajax({
                "url":"http://localhost:8080/itrip-biz/api/userinfo/modifylinkuser",
                "type":"GET",
                "data":arrs,
                "dataType":"json",
                "contentType":'application/json',
                "success":function (data) {
                    if (data.success=="true"){
                        console.log("修改成功！");
                        $("#motify").html("修改成功！");
                    }else {
                        console.log("修改失败！");
                        $("#motify").html("修改失败！");
                    }
                },
                beforeSend: function (request) {
                    request.setRequestHeader("token", $.cookie("token"));
                }
            })
        });
    })
</script>
<head>
    <title>修改</title>
</head>
<body>
<div id="addModify">
    <form>
        <table>
            <tr>
                <td>联系人姓名：<input type="text" name="linkusername" id="linkusername" value="${list.linkUserName}"></td>
            </tr>
            <tr>
                <td>联系电话：<input type="text" name="linkPhone" id="linkPhone" value="${list.linkPhone}"></td>
            </tr>
            <tr>
                <td>卡类型：<input type="text" name="linkIdCard" id="linkIdCard" value="${list.linkIdCard}"></td>
            </tr>
            <tr>
                <td><input type="button" id="addtijiao" value="修改"></td>
                <td><input type="reset" value="重置"></td>
            </tr>
        </table>
    </form>
</div>

</body>
</html>
