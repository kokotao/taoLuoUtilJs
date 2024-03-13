/**
 * @description TODO 这是一系列自集成js方法，在对Dom元素 id class name等赋值取值时总要用jquery js 等指定的$ # . getElementID等特殊符号好生繁琐，
 * todo             故而在想如果能像Java一样形成一系列常用方法提取出来进行方法调用，皆在简化获取值或者简化一些常用js操作，使用之前需要先引用jquery.js layui.js等前置JS
 * @return each function return value
 * @author Albert_Luo
 * @date 2024/1/24 16:33
 */

//use Any name get value
/**
 * @description todo Get the value of an element based on ng-model, id, or class. 根据 ng-model、id 或 class 获取元素的值。
 * @param {string} name - The name of ng-model, id, or class.
 * @returns {string} - The value of the element.
 */
export const getAnyNameValue = function (name) {
    var value = "";

    // Check if the element with ng-model exists
    var ngModelElement = $('[ng-model="' + name + '"]');
    if (ngModelElement.length > 0) {
        // Check if it's an input field
        if (ngModelElement.is('input, textarea, select')) {
            value = ngModelElement.val();
        } else {
            value = ngModelElement.text();
        }
    }

    // If ng-model did not have a value, check by id
    if (!value) {
        var idElement = $('#' + name);
        if (idElement.length > 0) {
            // Check if it's an input field
            if (idElement.is('input, textarea, select')) {
                value = idElement.val();
            } else {
                value = idElement.text();
            }
        }
    }

    // If id also did not have a value, check by class
    if (!value) {
        var classElement = $('.' + name);
        if (classElement.length > 0) {
            // Check if it's an input field
            if (classElement.is('input, textarea, select')) {
                value = classElement.val();
            } else {
                value = classElement.text();
            }
        }
    }
    if (!value) {
        var classElement = $('[name="' + name + '"]');
        if (classElement.length > 0) {
            // Check if it's an input field
            if (classElement.is('input, textarea, select')) {
                value = classElement.val();
            } else {
                value = classElement.text();
            }
        }else if (classElement = $('[data="' + name + '"]').length>0){
            if (classElement.is('input, textarea, select')) {
                value = classElement.val();
            } else {
                value = classElement.text();
            }
        }
    }

    // Return the result
    return value;
}
/**
 * @description 从JSON对象中获取基于ng-model、id或class的元素的值。
 * @param {Object} keyValuePairs - 包含ng-model、id或class作为键的JSON对象。
 * @returns {Object} - 包含键值对的对象。
 * @example:
 *     // 示例用法
 *     let keyValuePairs = {
 *         '房产原值': theOriginalValueOfTheProperty,
 *         '房产原值': fcyz,
 *         '计税比例':jsbl,
 *         '计税比例':taxRatio,
 *     };
 */
export const getValuesFromJson = function (keyValuePairs) {
    var values = {};

    $.each(keyValuePairs, function (key, name) {
       //单个值获取
     var value= getSingleValue(name);

        // 将键值对添加到结果对象
        values[key] = value;
    });

    // 返回结果对象
    return values;
}

/**
 * @description 从JSON对象中获取基于ng-model、id或class的元素的值。
 * @param {Object} name - 包含ng-model、id或class作为键的属性名称。
 * @returns {Object} - 包含值对的对象。
 * @example:
 *     // 示例用法
 */
export const getSingleValue = function (name) {
    var value = "";

    // 检查带有ng-model属性的元素是否存在
    var ngModelElement = $('[ng-model="' + name + '"]');
    if (ngModelElement.length > 0) {
        // 检查它是否是输入字段
        if (ngModelElement.is('input, textarea, select')) {
            value = ngModelElement.val();
        } else {
            value = ngModelElement.text();
        }
    }

    // 如果ng-model没有值，检查通过id获取
    if (!value) {
        var idElement = $('#' + name);
        if (idElement.length > 0) {
            // 检查它是否是输入字段
            if (idElement.is('input, textarea, select')) {
                value = idElement.val();
            } else {
                value = idElement.text();
            }
        }
    }

    // 如果id也没有值，通过class获取
    if (!value) {
        var classElement = $('.' + name);
        if (classElement.length > 0) {
            // 检查它是否是输入字段
            if (classElement.is('input, textarea, select')) {
                value = classElement.val();
            } else {
                value = classElement.text();
            }
        }
    }


    // 返回结果对象
    return value;
}

/**
 * @description 从JSON对象中获取基于ng-model、id或class的元素的值。
 * @param {Object} keyValuePairs - 包含ng-model、id或class作为键的JSON对象。
 * @param {Object} V - 表格的每一行的DOM元素。
 * @returns {Object} - 包含键值对的对象。
 * @example:
 *     // 示例用法
 * let keyValuePairs = {
 *         '房产原值': theOriginalValueOfTheProperty,
 *         '房产原值': fcyz,
 *         '计税比例':jsbl,
 *         '计税比例':taxRatio,
 *     };
 *     $('#cztdsys_jmxxListId tbody tr').each(function (i,v){
            var arr={};
            debugger
            if(i>=1){
                jmmxx.push(getTableValuesFromJson(keyValuePairs,v));
            }
        })
 */
export const getTableValuesFromJson = function (keyValuePairs, V) {
    var values = {};

    $.each(keyValuePairs, function (key, name) {
        var value = "";

        // 检查带有ng-model属性的元素是否存在
        var ngModelElement = $(V).find('[ng-model="' + name + '"]');
        if (ngModelElement.length > 0) {
            // 检查它是否是输入字段
            if (ngModelElement.is('input, textarea, select')) {
                value = ngModelElement.val();
            } else {
                value = ngModelElement.text();
            }
        }

        // 如果ng-model没有值，检查通过id获取
        if (!value) {
            var idElement = $(V).find('#' + name);
            if (idElement.length > 0) {
                // 检查它是否是输入字段
                if (idElement.is('input, textarea, select')) {
                    value = idElement.val();
                } else {
                    value = idElement.text();
                }
            }
        }

        // 如果id也没有值，通过class获取
        if (!value) {
            var classElement = $(V).find('.' + name);
            if (classElement.length > 0) {
                // 检查它是否是输入字段
                if (classElement.is('input, textarea, select')) {
                    value = classElement.val();
                } else {
                    value = classElement.text();
                }
            }
        }

        // 将键值对添加到结果对象
        values[key] = value;
    });

    // 返回结果对象
    return values;
}

/**
 * @description todo Set values for elements based on ng-model, id, or class from a JSON object.根据 id class 等进行赋值
 * @param {Object} values - The JSON object containing keys as ng-model, id, or class and values.
 * @example：传入参数为键值对 例如：
 *                 let sampleValues = {
 *                      fcyz: HouseInformationIsTaxable["房产原值"],
 *                     jsbl: HouseInformationIsTaxable["计税比例"],
 *                     czwyz: HouseInformationIsTaxable["出租房产原值"],
 *                     czfcmj:HouseInformationIsTaxable["出租房产面积"],
 *                     yxqq: HouseInformationIsTaxable["纳税义务有效期起"],
 *                     yxqz: HouseInformationIsTaxable["纳税义务有效期止"],
 *                     jmxzdmxx:HouseInformationIsTaxableM[0]["减免性质代码"],
 *                     jmshj: sum
 *                 };
 */
export const setValuesFromJson = function (values) {
    try{
        $.each(values, function (name, value) {
            // Check if the element with ng-model exists
            var ngModelElement = $('[ng-model="' + name + '"]');
            if (ngModelElement.length > 0) {
                // Check if it's an input field
                if (ngModelElement.is('input, textarea, select')) {
                    ngModelElement.val(value);
                } else {
                    ngModelElement.text(value);
                }
                return; // Move to the next key-value pair
            }

            // If ng-model did not have a value, check by id
            var idElement = $('#' + name);
            if (idElement.length > 0) {
                // Check if it's an input field
                if (idElement.is('input, textarea, select')) {
                    idElement.val(value);
                } else {
                    idElement.text(value);
                }
                return; // Move to the next key-value pair
            }

            // If id also did not have a value, check by class
            var classElement = $('.' + name);
            if (classElement.length > 0) {
                // Check if it's an input field
                if (classElement.is('input, textarea, select')) {
                    classElement.val(value);
                } else {
                    classElement.text(value);
                }
            }
        });
    }catch (e){
        
    }
    
}

/**
 * @description todo Set values for elements based on ng-model, id, or class from a JSON object.根据 id class 等进行单个赋值
 * @param {Object} fromAttrV - 值的来源.
 * @param {Object} setAttrV - 值的去处.
 */
export const setSingleValueByAttrName = function (fromAttrV, setAttrV) {
    let value = getSingleValue(fromAttrV);
    // Check if the element with ng-model exists
    var ngModelElement = $('[ng-model="' + setAttrV + '"]');
    if (ngModelElement.length > 0) {
        // Check if it's an input field
        if (ngModelElement.is('input, textarea, select')) {
            ngModelElement.val(value);
        } else {
            ngModelElement.text(value);
        }
        return; // Move to the next key-value pair
    }

    // If ng-model did not have a value, check by id
    var idElement = $('#' + setAttrV);
    if (idElement.length > 0) {
        // Check if it's an input field
        if (idElement.is('input, textarea, select')) {
            idElement.val(value);
        } else {
            idElement.text(value);
        }
        return; // Move to the next key-value pair
    }

    // If id also did not have a value, check by class
    var classElement = $('.' + setAttrV);
    if (classElement.length > 0) {
        // Check if it's an input field
        if (classElement.is('input, textarea, select')) {
            classElement.val(value);
        } else {
            classElement.text(value);
        }
    }
}


/**
 * @description todo Set values for elements based on ng-model, id, or class from a JSON object.根据 id class 等对多行表格进行赋值，自动识别val或text类型进行赋值
 * @param {Object} values - The JSON object containing keys as ng-model, id, or class and values.
 * @param {Object} V 表格每一行的DOM元素
 * @example：传入参数为键值对 例如：
 *                 let sampleValues = {
 *                      fcyz: HouseInformationIsTaxable["房产原值"],
 *                     jsbl: HouseInformationIsTaxable["计税比例"],
 *                     czwyz: HouseInformationIsTaxable["出租房产原值"],
 *                     czfcmj:HouseInformationIsTaxable["出租房产面积"],
 *                     yxqq: HouseInformationIsTaxable["纳税义务有效期起"],
 *                     yxqz: HouseInformationIsTaxable["纳税义务有效期止"],
 *                     jmxzdmxx:HouseInformationIsTaxableM[0]["减免性质代码"],
 *                     jmshj: sum
 *                 };
 * $('#cztdsys_jmxxListId tbody tr').each(function (i,v){
                    jmmxx.push(getTableValuesFromJson(sampleValues,v));
            })
 */
export const setTableValuesFromJson = function (values, V) {
    $.each(values, function (name, value) {
        // Check if the element with ng-model exists
        var ngModelElement = $(V).find('[ng-model="' + name + '"]');
        if (ngModelElement.length > 0) {
            // Check if it's an input field
            if (ngModelElement.is('input, textarea, select')) {
                ngModelElement.val(value);
            } else {
                ngModelElement.text(value);
            }
            return; // Move to the next key-value pair
        }

        // If ng-model did not have a value, check by id
        var idElement = $(V).find('#' + name);
        if (idElement.length > 0) {
            // Check if it's an input field
            if (idElement.is('input, textarea, select')) {
                idElement.val(value);
            } else {
                idElement.text(value);
            }
            return; // Move to the next key-value pair
        }

        // If id also did not have a value, check by class
        var classElement = $(V).find('.' + name);
        if (classElement.length > 0) {
            // Check if it's an input field
            if (classElement.is('input, textarea, select')) {
                classElement.val(value);
            } else {
                classElement.text(value);
            }
        }
    });
}

/**
 * @description todo 根据表格id获取该表格下所有《input》或《select》中的 需要的id class 或者自定义属性的名称
 * @param {String} tableId - 表格id.
 * @param {String} Element 自定义的属性
 * @returns {Array}
 * @example：
 * getElementsFromTable(tableID,class);
 *
 */
export const getElementsFromTable = function (tableId, Element) {
    let elements = [];
    // 初始化两个数组
    let inputElementsArray = [];
    let selectElementsArray = [];
    let selector = "";

    if (tableId) {
        selector = "#" + tableId;
    } else if (Element) {

    } else {
        console.error("请传入对应参数tableId,或Element");
        return elements;
    }

    let table = document.querySelector(selector);

    if (!table) {
        console.error("没有找到有表格，请检查.");
        return elements;
    }

    document.querySelectorAll('#' + tableId + ' tr').forEach(row => {
        // 查找表格行下的所有 td 元素,继续找td 而不是就tr进行查找是保证按照实际DOM元素进行push数组
        let tdElements = row.querySelectorAll('td');
        // 处理 td 元素
        tdElements.forEach(td => {
            // 查找表格行下的所有 input 和 select 元素
            let inputElements = td.querySelectorAll('input');
            let selectElements = td.querySelectorAll('select');
            // 处理 input 元素
            if (inputElements.length > 0) {
                inputElements.forEach(input => {
                    let elem = $(input).attr(Element);
                    if (elem) {
                        elements.push(elem);
                    }
                });
            }
            // 处理 select 元素
            if (selectElements.length > 0) {
                selectElements.forEach(select => {
                    let elem = $(select).attr(Element);
                    if (elem) {
                        elements.push(elem);
                    }
                });
            }
        })

    })


    return elements;
}


/**
 * @description 从JSON对象中获取基于ng-model、id或class的元素的值。
 * @param {Object} answerValues - 包含ng-model、id或class作为键的JSON对象。
 * @returns {Object} - 包含键值对的对象。
 * @example:
 *     // 示例
 *    answerValues = {
 *     "出租面积": "23123",
 *     "承租方纳税人识别号": "312312",
 *     "承租方名称": "123",
 *     "申报租金所属租赁期起": "231231",
 *     "申报租金所属租赁期止": "2024-01-24",
 *     "变更时间": ""
 * }
 */
export const saveStuData = function (answerValues) {
    if (typeof answerValues == 'undefined' || answerValues == '') {
        return "参数不能为空"
    }
    var params = {
        "plugId": window.plugId, "flag": window.flag, "taskId": window.taskId, "myAnswer": JSON.stringify(answerValues)
    }
    ajaxBase.saveTaskData(params, false, null, function (res) {
        layer.closeAll("loading");
        if (res.success == true) {
            return true
        } else {
            top.layer.msg(res.message);
            return false;
        }
    }, function (err) {
        top.layer.closeAll("loading");
        top.layer.msg("保存失败");
        return false;
    });

}
/**
 *@Return:{string}
 * @description TODO 根据tableId获取元素id 或者class名，由strArrkey取objectValues的值赋值给elemId元素
 * @param {Array}strArr 需要赋值顺序数组key
 * @param {string}tableId 表格id
 * @param {string}elemId 元素id 或者class名
 * @param {Object}objectValues key value 由strArrkey取值赋值给elemId
 * @author LTao
 * @date 2024/2/29 14:36
 * @example:
 * var strArr = ['房产原值', '出租房产原值', '出租房产面积', '计税比例', '纳税义务有效期起', '纳税义务有效期止'];
 * var objectValues={
 *     '房产原值':'2000',
 *     '出租房产原值':'1200',
 *     '出租房产面积':'100',
 *     '计税比例':'0.7',
 *     '纳税义务有效期起','2024-02-29',
 *     '纳税义务有效期止','2024-12-31'
 * }
 * setValuesByTableId(strArr,"adValoremRow","id",objectValues)
 */
export const setValuesByTableId = function (strArr,tableId,elemId,objectValues) {
    if (isUndefined(tableId)||isUndefined(elemId)){
        return "参数需要有值"
    }
    if (Object.values(objectValues).length !== 0) {
        var dataInfo = {};
        var tableArr = getElementsFromTable(tableId, elemId);

        if (strArr.length===0||isUndefined(strArr)){
            console.log('No strArr');
            // let index=0;
            // for(var key in objectValues){
            //     dataInfo[tableArr[index]] = objectValues[key];
            //     index++;
            // }
            Object.keys(objectValues).forEach((key,index)=>{
                dataInfo[tableArr[index]] = objectValues[key];
            });
        }else{
            console.log('Yes strArr');
            for (var i = 0; i < tableArr.length; i++) {
                dataInfo[tableArr[i]] = objectValues[strArr[i]];
            }
        }
        setValuesFromJson(dataInfo);
        return dataInfo
    }else{
        return "第四个参数值不能为空"
    }
}

/**
 * @description TODO 设置多行表格的值
 * @param {String}str   拼接的html字符串用于增加表格行；此参数可以为"";
 * @param {Array}strArr   表格ID；
 * @param {String}tableId   属性元素ID；
 * @param {String}attrType   例如 class名 name id等；
 * @param {jsonObject}json   格式化的json；
 * @author Albert_Luo
 * @date 2024/3/12 23:17
 * @example
 *      strArr=['消费税税额','计税(费)率','本期应纳税(费)额','减免性质代码','减免税(费)额','减征比例','减征额','本期已缴税(费)额','本期应补(退)税(费)额']
 *         $('#t5Table tr').each(function (i,v){
 *             $.table.customTableAssignments("",strArr,'t5Table','class',studentAnswerAll['消费税附加税费计算表'])
 *         })
 */
export const customTableAssignments = function (str, strArr, tableId, attrType,json) {

    if (str.length > 0 || str !== "") {
        $('#' + tableId).empty();
        for (let k = 0; k < json.length; k++) {
            $('#' + tableId).append(str);
        }
    }
    var tableArr = LT.getElementsFromTable(tableId, attrType);
    //数组去重
    tableArr =uniqueFn(tableArr);
    $('#' + tableId + ' tr').each(function (j, v) {
        var dataInfo = {};
        for (var i = 0; i < tableArr.length; i++) {
            dataInfo[tableArr[i]] = json[j][strArr[i]];
        }
       setTableValuesFromJson(dataInfo, v);
    })
}

/**
 * @param {Array}strArr 需要赋值顺序数组key
 * @param {string}tableId 表格id
 * @param {string}elemId 元素id 或者class名
 * @param {Object}objectValues key value 由strArrkey取值赋值给elemId
 * @description TODO 设置答案表格值与颜色
 * @author LTao
 * @date 2024/3/6 13:02
 */
export const setAnswerValuesByTableId = function (strArr,tableId,elemId,objectValues) {
    if (isUndefined(tableId)||isUndefined(elemId)){
        return "参数需要有值"
    }
    if (Object.values(objectValues).length !== 0) {
        var dataInfo = {};
        var tableArr = getElementsFromTable(tableId, elemId);

        if (strArr.length===0||isUndefined(strArr)){
            console.log('No strArr');
            // let index=0;
            // for(var key in objectValues){
            //     dataInfo[tableArr[index]] = objectValues[key];
            //     index++;
            // }
            Object.keys(objectValues).forEach((key,index)=>{
                dataInfo[tableArr[index]] = objectValues[key];
            });
        }else{
            console.log('Yes strArr');
            for (var i = 0; i < tableArr.length; i++) {
                dataInfo[tableArr[i]] = objectValues[strArr[i]];
            }
        }
        setTableValuesAndColor(tableId,dataInfo);
        return dataInfo
    }else{
        return "第四个参数值不能为空"
    }
}

export const typeColor = function (tableId,infoData,attName){
    var getAtt = $("#"+tableId).find("#" + attName + ", [name='" + attName + "'], [ng-model='" + attName + "'], ." + attName);
    try {
        if (infoData.includes('❀')){
            // getAtt.val(infoData.split('❀')[0]);
            if (getAtt.is('input, textarea, select')) {
                getAtt.val(infoData.split('❀')[0]);
            } else {
                getAtt.text(infoData.split('❀')[0]);
            }
        }else{
            if (getAtt.is('input, textarea, select')) {
                getAtt.val(infoData);
            } else {
                getAtt.text(infoData);
            }
        }
        if (infoData.split('❀')[1]=='2'){
            getAtt.css({"background-color": 'red'});
        }
    }catch (e){
        console.log(attName);
    }
}
export const setAnyTypeValue=function (attName,value){
    var getAtt = $("#" + attName + ", [name='" + attName + "'], [ng-model='" + attName + "'], ." + attName);
    if (getAtt.length==0){
        console.log('请检查，有误！获取到的attName的length=>'+getAtt.length);
    }
    try {
        if (getAtt.is('input, textarea, select')) {
            getAtt.val(value);
        } else {
            getAtt.text(value);
        }
        return 'true';
    }catch (e){
        console.log('请检查，有误！=>'+e);
        return '请检查，有误！=>'+e;
    }
}
/**
  * @param {Object}values json对象格式
 * @description TODO 设置答案表格值与颜色
 * @author LTao
 * @date 2024/3/6 13:02
 */
export const setTableValuesAndColor = function (tableId,values) {
    try{
        $.each(values, function (name, value) {
            typeColor(tableId,value,name);
        });
    }catch (e){
        return e;
    }
}
/**
  * @param {string}paraName 需要获取url中的参数key
 *@Return: 参数值
 * @description TODO 前端截取url获取对应参数key的值
 * @author LTao
 * @date 2024/3/2 14:14
 */
export const getUrlParam = function (paraName) {
    var url = document.location.toString();
    console.log(url);
    var arrObj = url.split("?");
    if (arrObj.length > 1) {
        var arrPara = arrObj[1].split("&");
        var arr;
        for (var i = 0; i < arrPara.length; i++) {
            arr = arrPara[i].split("=");
            if (arr != null && arr[0] == paraName) {
                return arr[1];
            }
        }
        return "";
    } else {
        return "";
    }
}
//TODO ------------------------------------------------------- 零碎DOM操作-------------------------------------------------------start
/**
 * 设置元素属性
 * @param {Object}} attrs
 */
export const setAttr = function (el, attrs) {
    for (const key in attrs) {
        el.setAttribute(key, attrs[key])
    }
    return el
}

/**
 * 手动触发Node已有和自定义事件类型函数
 * @param {Element} Node :：触发对象
 * @param {String} EventType : 触发事件类型
 */
export const trigger = function (Node, EventType) {
    if (!Node) return
    // 创建事件类型
    let evt = document.createEvent('Events')
    // 初始化对应类型的事件
    evt.initEvent(EventType, true, true)
    // 如果该节点身上已有该事件类型，则直接触发即可，blur, scroll, select三个不会触发监听的回调函数特殊处理
    if (EventType in Node) {
        Node[EventType]()
        if (['blur', 'scroll', 'select'].includes(EventType)) {
            // 保证监听的回调函数能够触发
            Node.dispatchEvent(evt)
        }
    } else {
        // 手动触发 自定义事件
        Node.dispatchEvent(evt)
    }
}
/**
 * 隐藏所有的指定标签
 * @param  {...any} el
 */
export const hide = function (el) {
    Array.from(document.querySelectorAll(el)).forEach((e) => (e.style.display = "none"));
};
/**
 *  JSON 转 fromData
 *  @param { Object } obj 需要转成formData 的对象
 */
export const fromData = function (obj) {
    return Object.keys(obj).reduce((formData, key) => {
        formData.append(key, obj[key]);
        return formData;
    }, new FormData());
}
/**
  * @param {String}iframeId iframeId
  * @param {String}methodName 方法名
 * @description TODO 根据iframeId调用页面内的方法,可用于嵌套IFrame页面 头部调用 脚页事件等。
 * @author LTao
 * @date 2024/3/12 13:05
 * @example
 * // 示例用法
 * $('#btnSave').on('click', function () {
 *     callIframeMethod("ifr_1", "saveData");
 * });
 */
export const callIframeMethod = function (iframeId, methodName) {
    // 获取 iframe 的 contentWindow
    var iframeContentWindow = $("#" + iframeId)[0].contentWindow;

    // 检查 contentWindow 是否存在以及是否有指定方法
    if (iframeContentWindow && typeof iframeContentWindow[methodName] === 'function') {
        // 调用指定方法
        iframeContentWindow[methodName]();
    } else {
        console.log(methodName + " 方法不存在或不是一个函数");
    }
}
//TODO -------------------------------------------------------对象 字符 数组 数字 null undefined等通用封装-------------------------------------------------------
/**
 * @description: json数组项属性筛选
 * @param {*} arr
 * @param {*} keys
 */
export const pick = function pick(arr, keys) {
    return arr.reduce((p, c) => [...p, keys.reduce((p1, c1) => ({...p1, [c1]: c[c1]}), {})], [])
}

/**
 * @description: 判断传入的值是否是Null类型
 * @param  {*} value ：传入的值
 * @return {Boolean} false 或 true
 */
export const isNull = function (value) {
    return value === null
}

// 是否是数字类型
export const isNumber = function (value) {
    return typeof value === 'number'
}

/**
 * @description: 获取数据类型
 * @param {*} value : 传入的值
 */
export const getType = function (value) {
    return Object.prototype.toString.call(value).slice(8, -1).toLowerCase()
}
/**
 * @description: 判断传入的值和类型 是否匹配
 * @param  {*} value ：传入的值
 * @param  {String} type ：传入的类型
 * @return {Boolean} false 或 true
 */
export const isType = function (val, type) {
    return getType(val) === type
}

/**
 * @description: 判断传入的值是否是undefined类型
 * @param  {*} value ：传入的值
 * @return {Boolean} false 或 true
 */
export const isUndefined = function (value) {
    return typeof value === 'undefined'
}

export const objectLength = function (val){
    return Object.values(val).length;
}

export const baseMerge = function (f, s) {
    for (var i in s) {
        f[i] = f[i] && f[i].toString() === '[object Object]' ? merge(f[i], s[i]) : (f[i] = s[i])
    }
    return f
}
/**
 * 合并两个对象
 * @param { Object } f : 需要合并的第一个对象
 * @param { Object } s ：需要合并的第二个对象
 * @return Object 合并后的对象
 * @example:from：在做社保公积金实训插件的时候总要对两个对象的合并进行操作
 * var a = {
 *   name: "AlbertLuo-java",
 *   age: 18
 * }
 *
 * let b = {
 *   home: '北京市石景山区'
 * }
 *
 * merge(a, b)
 * // =>
 * {
 *   name: "AlbertLuo-java",
 *   age: 18,
 *   home: "北京市石景山区"
 * }
 */
export const mergeObject = function () {
    return Array.from(arguments).reduce((p, c) => baseMerge(p, c), {})
}

/**
 * 转换Key
 * @param {Array|Object} obj 数据源
 * @param {Object} keyMap 映射关系
 * @param {Boolean} isDeep 是否为深度替换， 如果为 true，则第二层、....、第 n 层 的相同 key 会被替换成映射 key
 * @return {Array|Object}
 * @example：当初在做企业财务会计实训插件的时候总要对layui表格的标准数据的key进行替换，来来回回就有了这个方法
 * var a = {
 *     name: '研发部-java-TaoLuo',
 *     age: 25
 * }
 *
 * // 把原始的 name 换成 userNmae， 把原始的age 换成 ageNum
 * convertKey(a, { name: 'userName', age: 'ageNum' }, true)
 * // => { userName: "研发部-java-TaoLuo", ageNum: 25 }
 */
export const convertKey = (obj, keyMap, isDeep) => {
    if (!["array", "object"].includes(getType(obj))) {
        throw new TypeError("The first argument should be either an object or an array！");
    }
    if (Object.prototype.toString.call(keyMap) !== "[object Object]") {
        throw new TypeError("The parameter keyMap should be an object!");
    }
    let res = Array.isArray(obj) ? [] : {};
    if (obj instanceof Object) {
        for (let key in obj) {
            let newKey = Object.keys(keyMap).includes(key) ? keyMap[key] : key;
            res[newKey] = obj[key];

            //是否为深度转换
            if (isDeep && ["array", "object"].includes(getType(obj[key])) && Object.keys(obj[key]).length) {
                res[newKey] = convertKey(obj[key], keyMap, isDeep);
            }
        }
    }
    return res;
};
/**
  * @param {Object} object
  * @param {String} attrs
 *@Return: boolean
 * @description TODO Returns whether an object has a given set of key:value pairs.
 * @author LTao
 * @date 2024/3/1 20:00
 * @example:
 * var stooge = {name: 'moe', age: 32};
 * _.isMatch(stooge, {age: 32});
 * => true
 */
export const isMatch = function (object, attrs) {
    const keys = Object.keys(attrs);
    const length = keys.length;

    if (object == null) {
        return !length;
    }

    const obj = Object(object);

    for (let i = 0; i < length; i++) {
        const key = keys[i];

        if (attrs[key] !== obj[key] || !(key in obj)) {
            return false;
        }
    }

    return true;
}
/**
  * @param {Number}Number 数字类型
  * @param {Object}toValue 任何值
 * @description TODO 对数字进行校验 自定义返回相应的值
 * @author LTao
 * @date 2024/3/12 18:04
 */
export const isNaNToValue = function (Number,toValue){
    return !isNaN(Number)?parseFloat(Number).toFixed(2):toValue;
}

export const isNaNToNullString = function (Number){
    return !isNaN(Number)?parseFloat(Number).toFixed(2):"";
}
/**
 * 转换Key
 * @param {Array} mutilForm 数组对象
 * @param {Object} keyValue 对象的key
 * @param {Object} needValue key需要对应的值进行筛选
 * @return {Array}
 * @example：起初是在做环境保护税插件实训的时候需要对选中的税源编号进行筛选，保证所选的税源一致进入下一步申报 所复写js filter方法
 * const mutilForm = [
 *   { id: 1, name: 'NIANZhao', age: 25 },
 *   { id: 2, name: 'TaoLuo', age: 25 },
 *   { id: 3, name: 'Charlie', age: 35 } ];
 *
 * // js filter过滤指定数组对象,返回对应结构的数组对象
 * filteredArray(mutilForm, 'age', 25)
 * // =>
 * [
 *   { id: 1, name: 'NIANZhao', age: 25 },
 *   { id: 3, name: 'TaoLuo', age: 25 }
 * ]
 */
export const filteredArray = function (mutilForm, keyValue, needValue) {
    return mutilForm.filter(item => item[`${keyValue}`] === needValue);
}


/**
 * @description TODO  通用数组去重方法一：此方法使用对象作为哈希表，通过相同键来实现去重为常量级操作
 * @param {Array}array 数组
 * @return
 * @author Albert_Luo
 * @date 2024/3/12 21:49
 */
// 数组去重
export const uniqueFn=function (array) {
    var result = [];
    var hashObj = {};
    for (var i = 0; i < array.length; i++) {
        if (!hashObj[array[i]]) {
            hashObj[array[i]] = true;
            result.push(array[i]);
        }
    }
    return result;
}

/**
 * 判断是否是有效数字 不包含NaN
 * 是否有效数字：排除 NaN Infinity，数字字符串 或是 数字，都为有效数字
 */
export const isNum = function (n) {
    return typeof n == 'symbol' ? false : !isNaN(parseFloat(n)) && isFinite(n)
}

/**
 * 数字格式化
 * @param { String | Number } val : 有效数数字
 * @param { Boolean } isThousands : 整数部分是否进行千分位,默认值 false
 * @param { Number } len : 小数部分四舍五入保留到的位数
 * @param { Boolean } isCalc : 计算结果是否 数字化
 */
export const fmtNum = function (val, isThousands = false, len, isCalc) {
    // 无效值处理，，不符合传入规则的值一律返回空字符串
    if (val === undefined || val == null) return ''
    // 无论数字还是字符串数字，最终都转换成字符串数字
    let str = val + ''
    // 进行检测str是否是有效的数字,不是有效直接返回空字符串
    if (!isNum(str)) return ''
    // 是否是整数
    let isInt = !str.includes('.')
    len = len === undefined ? (isInt ? 0 : str.split('.')[1].length) : len
    // 整数部分
    let int = len == 0 ? Math.round(str) + '' : isInt ? str.split('.')[0] : (round(str * 1 + '', len) + '').split('.')[0]
    // str 四舍五入到指定位数
    str = round(str * 1 + '', len) + ''
    // 小数部分
    let dot = len == 0 || isInt ? '' : str.split('.')[1]
    dot = (dot ? dot : '').padEnd(len, 0)
    let ret = (isThousands ? int.replace(/(?=(?!\b)(\d{3})+$)/g, ',') : int) + (dot.length ? '.' + dot : '')
    return isCalc ? Number(ret) : ret
}
/**
 * 四舍五入到指定位数
 * @param {Number} n:小数
 * @param {Number} decimals ：四舍五入到指定位数
 */
export const round = function (n, decimals) {
    if (decimals === undefined) return n
    return Number(Math.round(n + 'e' + (decimals || 0)) + 'e-' + (decimals || 0))
}
//TODO 常用正则表达式
//是否为邮箱
export const isEmail = function (value) {
    return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(value);
}

//身份证号码验证
export function doCheckRealCard(strRealCard) {
    var tmpRealCard = strRealCard;
    var tmpCityCode = {
        11: "北京",
        12: "天津",
        13: "河北",
        14: "山西",
        15: "内蒙古",
        21: "辽宁",
        22: "吉林",
        23: "黑龙江",
        31: "上海",
        32: "江苏",
        33: "浙江",
        34: "安徽",
        35: "福建",
        36: "江西",
        37: "山东",
        41: "河南",
        42: "湖北",
        43: "湖南",
        44: "广东",
        45: "广西",
        46: "海南",
        50: "重庆",
        51: "四川",
        52: "贵州",
        53: "云南",
        54: "西藏",
        61: "陕西",
        62: "甘肃",
        63: "青海",
        64: "宁夏",
        65: "新疆",
        71: "台湾",
        81: "香港",
        82: "澳门",
        91: "国外"
    };

    if (tmpRealCard == '') {
        return '身份证号码不能为空';
    }

    // Check real card.
    var tmpRegx = new RegExp(/(^\d{15}$)|(^\d{17}(\d|x|X)$)/i);
    if (!tmpRegx.exec(tmpRealCard)) {
        return '身份证号码长度必须正确，请核对！';
    }

    // Check 15 length.
    var tmpRegx = new RegExp(/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/);
    if (tmpRegx.exec(tmpRealCard)) {
        tmpBirthday = '19' + tmpRealCard.substring(6, 8) + '-' + tmpRealCard.substring(8, 10) + '-' + tmpRealCard.substring(10, 12);
    } else {
        tmpSum = 0;

        tmpRealCard = tmpRealCard.replace(/x|X$/i, "a");

        for (var i = 17; i >= 0; i--) {
            tmpSum += (Math.pow(2, i) % 11) * parseInt(tmpRealCard.charAt(17 - i), 11);
        }

        if (tmpSum % 11 != 1) {
            return '身份证号码不符相关标准，请核对！';
        }

        tmpBirthday = tmpRealCard.substring(6, 10) + '-' + tmpRealCard.substring(10, 12) + '-' + tmpRealCard.substring(12, 14);
    }

    // Check City.
    if (tmpCityCode[parseInt(tmpRealCard.substring(0, 2))] == null) {
        return '身份证号码证件地区未知，请核对！';
    }

    // Check Birthday.
    var tmpDate = new Date(tmpBirthday.replace(/-/g, "/"));
    if (tmpBirthday != (tmpDate.getFullYear() + '-' + getAppendZore(tmpDate.getMonth() + 1) + '-' + getAppendZore(tmpDate.getDate()))) {
        return '身份证号码出生日期非法，请核对！';
    }
    //alert(tmpBirthday);
    return true;
}