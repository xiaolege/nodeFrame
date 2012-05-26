/**
 * 返回数组中所有的键名
 * @param array 数组
 * @return array
 */
exports.array_keys = function(array) {
	var i = 0;
	var arr = new Array();
	if (typeof(array) !== 'object') {
		return;
	}
	for (key in array)   {
		arr[i] = key;
		i++;
	}
	return arr;
};

/**
 * 返回数组中所有的值
 * @param array 数组
 * @return array
 */
exports.array_values = function(array) {
	var i = 0;
	var arr = new Array();
	if (typeof(array) !== 'object') {
		return;
	}
	for (key in array)   {
		arr[i] = array[key];
		i++;
	}
	return arr;
};

/**
 * 从数组元素两端添加字符
 * @param array 数组
 * @param string str 预定义字符
 * @return array
 */
exports.array_add = function(array, str) {
	var arr = new Array();
	if (typeof(array) !== 'object') {
		return;
	}
	for (key in array)   {
		arr[key] = str + array[key] + str;
	}
	return arr;
};