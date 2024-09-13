class TemplateEngine {
	constructor(template, data) {
		this.template = template
		this.data = data
	}

	render() {
		let output = this.template

		// 正则表达式匹配模板中的变量
		const regex = /{{\s*([^}\s]+)\s*}}/g

		// 匹配模板中的变量，并用数据中对应的值替换
		output = output.replace(regex, (match, variable) => {
			let value = this.data

			// 处理多层级属性访问
			variable.split('.').forEach((prop) => {
				value = value[prop]
			})

			return value
		})

		return output
	}
}

// 示例模板
const template = '<h1>{{ title }}</h1><p>{{ content.text }}</p>'
const data = { title: 'Hello', content: { text: 'World' } }

const engine = new TemplateEngine(template, data)
const rendered = engine.render()
console.log(rendered)
