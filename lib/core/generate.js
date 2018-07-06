
const configElement = document.querySelector('script[config]')
const config = configElement && configElement.getAttribute('config') || ''

console.log(config)