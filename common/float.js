class floatTools {
	// 加
	add(a, b) {
		return this.fixedFloat(a, b, '+')
	}
	// 减
	minus(a, b) {
		return this.fixedFloat(a, b, '-')
	}
	// 乘
	multiply(a, b) {
		return this.fixedFloat(a, b, '*')
	}
	// 除
	division(a, b) {
		return this.fixedFloat(a, b, '/')
	}

	/**
	 * 解决小数精度问题
	 * @param {*数字} a
	 * @param {*数字} b
	 * @param {*符号} sign
	 * fixedFloat(0.3, 0.2, '-')
	 */
	fixedFloat(a, b, sign) {
		var c = this.handle(a)
		var d = this.handle(b)
		var k = 0

		if (c[1] === 0 && d[1] === 0) {
			return this.operate(+c[0], +d[0], sign, 1)
		} else {
			k = Math.pow(10, Math.max(c[1], d[1]))
			if (c[1] !== d[1]) {
				if (c[1] > d[1]) {
					d[0] += this.padding0(c[1] - d[1])
				} else {
					c[0] += this.padding0(d[1] - c[1])
				}
			}
			return this.operate(+c[0], +d[0], sign, k)
		}
	}

	handle(x) {
		var y = String(x)
		var p = y.lastIndexOf('.')
		if (p === -1) {
			return [y, 0]
		} else {
			return [y.replace('.', ''), y.length - p - 1]
		}
	}

	// v 操作数1, w 操作数2, s 操作符, t 精度
	operate(v, w, s, t) {
		switch (s) {
			case '+':
				return (v + w) / t
			case '-':
				return (v - w) / t
			case '*':
				return (v * w) / (t * t)
			case '/':
				return (v / w)
		}
	}

	// 补0
	padding0(p) {
		var z = ''
		while (p--) {
			z += '0'
		}
		return z
	}
}

const _float = new floatTools();
export default _float;
