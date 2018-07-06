
const StringComponent = ({
  value
}) => React.createClass({
  render: function render() {
    return React.createElement('div', null, value)
  }
})