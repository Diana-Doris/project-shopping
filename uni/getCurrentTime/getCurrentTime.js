export function getCurrentTime(){
				let currentTime = new Date();
				// console.log(currentTime.getTime())
				let year = currentTime.getFullYear(),
				month = currentTime.getMonth() + 1,
				day = currentTime.getDate(),
				hour = currentTime.getHours(),
				minute = currentTime.getMinutes(),
				second = currentTime.getSeconds();
				let str = year + '-' + month + '-' + day + '  ' + hour + ':' + minute + ':' + second;
				let transitionStr = year + '-' + month + '-' + (day + 5) + '  ' + hour + ':' + minute + ':' + second;
				return {
					str,	
					timer: currentTime.getTime(),
					transitionStr
				};
}