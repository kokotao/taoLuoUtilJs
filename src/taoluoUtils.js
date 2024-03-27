import {
    convertKey, filteredArray, fmtNum,
    fromData,
    getType,
    hide,
    isNull, isNum,
    isNumber, isEmail,
    isType,
    isUndefined, mergeObject,
    pick,
    setAttr,
    trigger, getAnyNameValue, getValuesFromJson, setValuesFromJson, saveStuData,setTableValuesFromJson,getElementsFromTable,getTableValuesFromJson,setSingleValueByAttrName,getSingleValue,doCheckRealCard,
    objectLength,
    isMatch,
    setValuesByTableId,
    setAnswerValuesByTableId,
    typeColor,
    setAnyTypeValue,
    callIframeMethod,
    isNaNToValue,
    isNaNToNullString,
    uniqueFn,customTableAssignments,setTableValuesAndColor,
    checkAndAlertEmptyValues
} from "./albertLuoTaoUtil";
/**
 * @description TODO 这是一系列自集成js方法，在对Dom元素 id class name等赋值取值时总要用jquery js 等指定的$ # . getElementID等特殊符号好生繁琐，
 * todo             故而在想如果能像Java一样形成一系列常用方法提取出来进行方法调用，皆在简化获取值或者简化一些常用js操作，使用之前需要先引用jquery.js layui.js等前置JS
 * @return each function return value
 * @author Albert_Luo
 * @date 2024/1/24 16:33
 */
window.taoLuoUtil = {
    setAttr,
    trigger,
    hide,
    fromData,
    pick,
    isNull,
    isNumber,isEmail,
    getType,
    isType,
    isUndefined,
    mergeObject,
    convertKey,
    filteredArray,
    isNum,
    fmtNum,
    getAnyNameValue,
    getValuesFromJson,
    setValuesFromJson,
    saveStuData,
    setTableValuesFromJson,
    getElementsFromTable,
    getTableValuesFromJson,
    setSingleValueByAttrName,
    getSingleValue,
    doCheckRealCard,
    objectLength,
    setValuesByTableId
};
window.LT = {
    setAttr,
    trigger,
    hide,
    fromData,
    pick,
    isNull,
    isNumber,isEmail,
    getType,
    isType,
    isUndefined,
    mergeObject,
    convertKey,
    filteredArray,
    isNum,
    fmtNum,
    getAnyNameValue,
    getValuesFromJson,
    setValuesFromJson,
    saveStuData,
    setTableValuesFromJson,
    getElementsFromTable,
    getTableValuesFromJson,
    setSingleValueByAttrName,
    getSingleValue,
    doCheckRealCard,
    objectLength,
    setValuesByTableId,
    setAnswerValuesByTableId,
    typeColor,
    callIframeMethod,
    isNaNToValue,
    isNaNToNullString,
    customTableAssignments,
    uniqueFn,setTableValuesAndColor,checkAndAlertEmptyValues,allValuesEmpty
};
//dom option
window.domOption = {
    setAttr,
    trigger,
    getAnyNameValue,
    getSingleValue,
    hide,
    callIframeMethod
};
window.tableOption={
    getValuesFromJson,
    setValuesFromJson,
    setTableValuesFromJson,
    getElementsFromTable,
    getTableValuesFromJson,
    setValuesByTableId,
    setAnswerValuesByTableId,
    customTableAssignments,setTableValuesAndColor
};
window.common={
    getType,
    isType,
    isNum,
    fmtNum,
    isNumber,isEmail,
    saveStuData,
    isUndefined,
    setAnyTypeValue,
    isNaNToValue,
    isNaNToNullString,
    uniqueFn,checkAndAlertEmptyValues,allValuesEmpty
};
window.jsonObject={
    isUndefined,
    mergeObject,
    convertKey,
    objectLength,
    isMatch,
    fromData,checkAndAlertEmptyValues,allValuesEmpty
}
window.arrayOption={
    filteredArray,
    uniqueFn,
}