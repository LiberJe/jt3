
{
  window.api = url => new Promise((resolve, reject) => {
    let ajax;
    if (window.XMLHttpRequest) {
      ajax = new XMLHttpRequest()
    } else if (window.ActiveXObject) {
      ajax = new ActiveXObject()
    }
    ajax.open("GET", url)
    ajax.send()
    ajax.onreadystatechange = function() {
      if(ajax.readyState == 4 && ajax.status == 200){
        let res = JSON.parse(ajax.responseText)
        resolve(res)
      }
    }
  })
}