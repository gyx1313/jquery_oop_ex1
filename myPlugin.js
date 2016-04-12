// window.onload = function(){
// 	$('p').css('color', 'red');
// };

;(function(){
	//定义Myobj构造函数
	var Myobj = function(ele, opts){
		this.element = ele;
		this.defaults = {
			'color' : 'orange',
			'fontSize' : '20px' 
		};
		this.opts = $.extend({}, this.defaults, opts);
	};
	//定义myfun方法
	Myobj.prototype = {
		myfun: function(){
			this.element.css({
				'color': this.opts.color,
				'font-size': this.opts.fontSize
			});
			return this;
		},
		
		clk: function(){
			this.element.click(function(){
				alert('2');
			});
		}
	};

	$.fn.myPlugin = function(options){
		//在插件中使用Myobj对象
		var myobj = new Myobj(this, options);
		//调用其方法
		myobj.myfun();
		myobj.clk();
		//支持链式调用
		return this;
	};
})();