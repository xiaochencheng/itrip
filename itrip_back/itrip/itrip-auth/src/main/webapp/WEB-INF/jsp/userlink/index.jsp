<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery-1.8.3.min.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery.cookie.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/retoken.js"></script>
    <script type="text/javascript">
        //是否非空
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
            $("#search").click(function () {
                var str = {
                    "linkUserName": $("#name").val()
                };
                var arrs = JSON.stringify(str);
                $.ajax({
                    "url": "http://localhost:8001/itrip-biz/api/userinfo/queryuserlinkuser",
                    "type": "POST",
                    "contentType":'application/json',
                    "dataType": "json",
                    "data": arrs,
                    "success": function (data) {
                        console.log(data);
                        if (data.success == "true") {
                            var list = data.data;
                            $("#tabDiv").html("");
                            var tab = $("<table border='1'></table>").append("<tr><td></td><td>id</td><td>userId</td><td>用户名</td><td>电话</td><td>操作</td><td>操作</td></tr>").appendTo($("#tabDiv"));
                            $(list).each(function () {
                                tab.append("<tr><td><input name='deleCheckbox' type='checkbox' value='"+this.id+"'/></td><td>" + this.id + "</td><td>" + this.userId + "</td><td>" + this.linkUserName + "</td><td>" + this.linkPhone + "</td><td><button onclick='xiugai("+this.id+")'>修改</button></td><td><button id='deleteDiv'>删除</button></td></tr>");
                               /* tab.append("<tr><td>" + this.id + "</td><td>" + this.userId + "</td><td>" + this.linkUserName + "</td><td>" + this.linkPhone + "</td><td><a href='http://localhost:8080/itrip-biz/api/userinfo/getIdFind?id="+this.id+"'>修改</a></tr>");*/
                            });
                        } else {
                            alert("token失效，请重新登录");
                        }
                    },
                    beforeSend: function (request) {
                        request.setRequestHeader("token", $.cookie("token"));
                    }
                });
            });

            $("#dell").click(function () {
                var message=confirm("确定要删除吗？");
                if(!message){
                    return;
                }
                    obj = document.getElementsByName("deleCheckbox");
                    check_val = [];
                    for(k in obj){
                        if(obj[k].checked)
                            check_val.push(obj[k].value);
                    }
                    var arrs = JSON.stringify(check_val);
                    $.ajax({
                        "url": "http://localhost:8001/itrip-biz/api/userinfo/deluserlinkuser",
                        "type": "GET",
                        "contentType": 'application/json',
                        "dataType": "json",
                        "data": arrs,
                        "success": function (data) {
                            console.log(data);
                            alert(data);
                            if (data>0){
                                alert("删除成功！");
                                window.location.reload();
                            }else{
                                alert("删除失败！")
                            }
                        },
                        beforeSend: function (request) {
                            request.setRequestHeader("token", $.cookie("token"));
                        }
                    })
            });

            $("#add").click(function () {
                $("#AddView").toggle();
            });

            $("#addtijiao").click(function () {
                isEmipty();
                var str={
                    linkusername:$("#AddView input[name='linkusername']").val(),
                    linkPhone:$("#AddView input[name='linkPhone']").val(),
                    linkIdCardType:0,
                    linkIdCard:$("#AddView input[name='linkIdCard']").val()
                };
                var arrs=JSON.stringify(str);
                $.ajax({
                    "url":"http://localhost:8001/itrip-biz/api/userinfo/adduserlinkuser",
                    "type":"POST",
                    "dataType":"json",
                    "contentType":'application/json',
                    "data":arrs,
                    "success":function (data) {
                        if(data==true){
                            console.log("添加成功");
                        }else {
                            console.log("添加失败！");
                            $("#addDiv").html("添加失败！");
                        }
                    },
                    beforeSend: function (request) {
                        request.setRequestHeader("token", $.cookie("token"));
                    }
                })
            });
            window.sid ="";
            $("#motify").click(function () {
                var str={
                    linkusername:$("#updateDiv input[name='updateName']").val(),
                    linkPhone:$("#updateDiv input[name='updatePhone']").val(),
                    linkIdCardType:0,
                    linkIdCard:$("#updateDiv input[name='updatecard']").val(),
                    id : sid
                };
                var arrs=JSON.stringify(str);
                $.ajax({
                    "url":"http://localhost:8001/itrip-biz/api/userinfo/modifyuserlinkuser",
                    "type":"POST",
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

        });
        function xiugai(id) {
            alert(id);
            var  str={
                "id":id
            };
            var attr=JSON.stringify(str);
            $.ajax({
                "url": "http://localhost:8001/itrip-biz/api/userinfo/getIdFind",
                "type": "POST",
                "contentType":'application/json',
                "dataType": "json",
                "data": attr,
                "success": function (data) {
                    console.log(data);

                        var list=data.data;
                        $(list).each(function () {
                            alert(this.id+ "ddd"+ this.linkUserName);
                            $("#updateName").attr("value",this.linkUserName);
                            $("#updatePhone").attr("value",this.linkPhone);
                            $("#updatecard").attr("value",this.linkIdCard);
                            sid = this.id;
                        })

                },
                beforeSend: function (request) {
                    request.setRequestHeader("token", $.cookie("token"));
                }
            });
        }
    </script>
</head>
<body>
<div>
    旅客姓名：<input type="text" id="name"/>
    <input type="button" id="search" value="获取常用联系人列表"/>
    <a href="${pageContext.request.contextPath}/api/userlinkAdd.html">新增</a>
    <a href="${pageContext.request.contextPath}/api/userlinkModify.html">更新</a>
    <input type="button" id="del" value="删除"/>
    <input type="button" id="update" value="更新"/>
    <input type="button" id="add" value="新增"/>
</div>
<div id="tabDiv">

</div>

<div id="AddView"  style="display: none">
    <form>
        <table>
            <tr>
                <td>联系人姓名：<input type="text" name="linkusername" id="linkusername"></td>
            </tr>
            <tr>
                <td>联系电话：<input type="text" name="linkPhone" id="linkPhone"></td>
            </tr>
            <tr>
                <td>卡类型：<input type="text" name="linkIdCard" id="linkIdCard"></td>
            </tr>
            <tr>
                <td><input type="button" id="addtijiao" value="提交1"></td>
                <td><input type="reset" value="重置"></td>
            </tr>
        </table>
    </form>
</div>
<div id="updateDiv">
    <form>
        <table>
            <tr>
                <td>联系人姓名：<input type="text" name="updateName" id="updateName" value=""></td>
            </tr>
            <tr>
                <td>联系电话：<input type="text" name="updatePhone" id="updatePhone" value=""></td>
            </tr>
            <tr>
                <td>卡：<input type="text" name="updatecard" id="updatecard" value=""></td>
            </tr>
            <tr>
                <td><input type="button" id="motify" value="修改"></td>
                <td><input type="reset" value="重置"></td>
            </tr>
        </table>
    </form>
</div>
<button id="dell">删除11</button>
</body>
</html>
