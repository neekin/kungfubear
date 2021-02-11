// /order/pay
import { get } from '../request'
export default {
	// 获取支付参数
	pay(order_id) {
		return get({
			url: '/order/pay',
			data:{
				order_id
			}
		})
	}
}
