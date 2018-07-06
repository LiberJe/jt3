console.log('prepare to load init')

// init root element
let rootEle = document.createElement('div')
rootEle.setAttribute('id', 'root')
document.body.appendChild(rootEle)

// init root react-dom
const Root = React.createClass({
  render: function render() {
      return React.createElement('div', null, `Hello`)
  }
})

ReactDOM.render(React.createElement(Root, { }), document.getElementById('root'))
