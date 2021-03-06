var testString = "666HAHA";
var isAllLetter = /^[a-zA-Z]+$/.test(testString);//判断testString变量字符串是否全是字母

//计算包含中英文的字符串个数
function getLength(str){
    var Zcount = 0;
    var ZunicodeNum = 0;
    var Ycount = 0;
    for(var i=0;i<str.length;i++){
        if(str.charCodeAt(i)<128 && str.charCodeAt(i)>=0){
            Ycount++; //一个英文占一个字符位
        }else{
            Zcount++;//中文字符个数
            ZunicodeNum+=2; //一个中文在Unicode表中占两字符位
        }
    }
    return ZunicodeNum + Ycount;
}

//是否空对象
function isEmptyObject(obj){
    for(var key in obj){
        return false;
    }
    return true;
}

//根据出生年月判断乘客类型：成人或者儿童。birthday格式1990-11-11 statedDate指定日期格式2020-11-11.返回值ADT-成人 CHD-儿童 INF-婴儿 ''-未知
function psgBirthdayToType(birthday,statedDate){
    var birthdaySplit = birthday.split("-");
    var birthdayYear = parseInt(birthdaySplit[0]);
    var birthdayMonth = birthdaySplit[1];
    var birthdayDay = birthdaySplit[2];

    var boundaryDate = (birthdayYear+12)+"-"+birthdayMonth+"-"+birthdayDay;//12岁的日期
    var badyDate = (birthdayYear+2)+"-"+birthdayMonth+"-"+birthdayDay;//2岁日期

    var boundaryTimestamp = new Date(boundaryDate).getTime();//根据出生日期计算12岁的时间戳
    var badyTimeStamp = new Date(badyDate).getTime();//根据出生日期计算2岁的时间戳
    var statedTimeStamp = new Date(statedDate).getTime();//计算指定日期的时间戳
    //var leastTimestamp = new Date(birthday).getTime() + (15*24*60*60*1000);//计算出生15天之后的时间戳，getTime()得到的时间戳为毫秒
    var leastTimestamp = new Date(birthday).getTime();//计算出生当天的时间戳

    //儿童 指定的时间小于12岁 大于等于2岁
    if(statedTimeStamp<boundaryTimestamp && statedTimeStamp>=badyTimeStamp){
        return "CHD";
    }else if(statedTimeStamp>=boundaryTimestamp){
        //成人 指定的时间 大于等于12岁
        return "ADT";
    }else if(statedTimeStamp<badyTimeStamp && statedTimeStamp>=leastTimestamp){
        //婴儿大于等于15天小于2岁.婴儿大于等于当天小于2岁
        return "INF";
    }else{
        return "";
    }
}


//保留两位小数点
var num1 = 33;var num2 = 22.232;var num3 = 22.235;
num1.toFixed(2);//33.00
num2.toFixed(2);//22.23
num3.toFixed(2);//22.24 四舍五入
