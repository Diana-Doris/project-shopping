export function dealResult(){
	return new Promise(resolve=>{
		setTimeout(()=>{
			if(Math.random() < 0.5){
				resolve('退款成功')
			}else{
				resolve('退款失败')
			}
		},0)
		})
}


