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
    trigger, getAnyNameValue, getValuesFromJson, setValuesFromJson, saveStuData,setTableValuesFromJson,getElementsFromTable,getTableValuesFromJson,setSingleValueByAttrName,getSingleValue
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
    getSingleValue
};
