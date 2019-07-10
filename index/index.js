var fetchData = {
	handFeedList: function () {
		$.ajax({
		url: '/sn/api/feed_feedlist',
			type:"post",
			dataType:"json",
			headers: {
				Accept: 'application/json, text/plain, */*',				
			},
			data: {
				from: "news_webapp",
				pd: "webapp",
				os: "iphone",
				mid: "0895EBEA3BA1ED452AE4D9214C15D15C:FG=1",
				ver: "6",
				category_id: "101",
				action: 1,
				display_time: 1562746932691,
				wf: 0
			},
			async:false,
			success: function(data){
				console.log(data)
			},
		});
	},
	handNews: function() {
		var data = {
		  cuid:" 0895EBEA3BA1ED452AE4D9214C15D15C:FG=1",
		  type: "tag",
		  OS: "iphone",
		  ver: 9,
		  from: "webapp",
		  rand: 1562750310768
		}
		var str = 'tn=bdapibaiyue&t=getuserdata'
		$.ajax({
			url: '/news?tn=bdapibaiyue&t=getuserdata',
			type:"post",
			dataType:"json",
			headers: {
				Accept: 'application/json, text/plain, */*',
			    contentType:"application/x-www-form-urlencoded;charset=utf-8"
			},
			data:data,
			async:false,
			success: function(data){
			  console.info(data,2222)
			},
		});
	},
	handeTouTiao: function() {
		// 今日头条
		$.ajax({
			url: '/list/',
			type:"get",
			dataType:"json",
			headers: {
				Accept: 'application/json, text/plain, */*',
			   contentType:"application/x-www-form-urlencoded;charset=utf-8"
			},
			data:{
				tag: "__all__",
				ac: 'wap',
				count: 20,
				format: "json_raw",
				as: "A1D5CDF2C5DF05D",
				cp: "5D259F4015DD4E1",
				min_behot_time: 0,
				_signature: "OPlwEwAAZeIxtQoGCOpuBTj5cA",
				i: '',
			},
			async:false,
			success: function(data){
				console.info(data,2222)
			}}
		);
	},
	_init: function () {
		this.handFeedList()
		this.handNews()
		this.handeTouTiao()
	}	
};
window.onload = function() {
	fetchData._init()
}