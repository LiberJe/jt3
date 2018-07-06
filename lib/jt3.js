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
    h('../lib/dependcies/react.min.js'),
    h('../lib/dependcies/react-dom.min.js'),
    h('../lib/core/utils.js'),
    h('../lib/core/api.js'),
    h('../lib/core/generate.js'),
    h('../lib/core/init.js'),
  )

  load.then(() => {
    console.log('load success')
  }, error => {
    console.log('load fail')
  })
}