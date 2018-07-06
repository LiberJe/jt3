console.log('start loading')

// loading resource
{
  let h = url => () => new Promise((resolve, reject) => {
    let loader
    loader = document.createElement('script')
    loader.setAttribute('src', url)
    loader.addEventListener('load', resolve)
    loader.addEventListener('error', reject)
    document.head.appendChild(loader)
  })

  let q = (...args) => args.reduce((task, next) => task.then(next), Promise.resolve())

  const load = q(
    h('https://unpkg.com/react@15/dist/react.min.js'),
    h('https://unpkg.com/react-dom@15/dist/react-dom.min.js'),
    h('https://unpkg.com/babel-standalone@6.15.0/babel.min.js'),
    h('../lib/script/utils.js'),
    h('../lib/script/init.js'),
  )

  load.then(() => {
    console.log('load success')
  }, error => {
    console.log('load fail')
  })
}