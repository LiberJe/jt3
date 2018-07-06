
{

  // const configElement = document.querySelector('script[config]')
  // const config = configElement && configElement.getAttribute('config') || ''

  // window.api(config)
  //   .then(data => {
  //     console.log(data)
  //   })

  let config = {
    "name": "example page",
    "logo": "",
    "children": [
      {
        "component": "String",
        "args": {
          "value": "hello world"
        }
      }
    ]
  }

  const { name, logo, children} = config
  if (name) {
    document.title = name
  }

  window.componentsLoader = []
  let loaderList = {}
  function walk(target) {
    target.map(item => {
      if (item.children) {
        walk(item.children)
      } else {
        if (!loaderList[item.component]) {
          loaderList = {
            ...loaderList,
            [item.component]: 1,
          }
          componentsLoader.push(window.createScript(`../lib/components/${item.component}/index.js`))
        }
      }
    })
  }

  walk(children)
  
}