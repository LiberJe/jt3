console.log('prepare to load utils')

window.createScript = (src, type = 'text/javascript') => new Promise((resolve, reject) => {
  let loader
  loader = document.createElement('script')
  loader.setAttribute('src', src)
  loader.setAttribute('type', type)
  loader.addEventListener('load', resolve)
  loader.addEventListener('error', reject)
  document.head.appendChild(loader)
})