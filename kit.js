browse=(function(){
    var ua= navigator.userAgent, tem, 
    M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if(/trident/i.test(M[1])){
        tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE '+(tem[1] || '');
    }
    if(M[1]=== 'Chrome'){
        tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
        if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
    }
    M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
    return M.join(' ');
})();

function initdata() {
  os=navigator.platform.split(' ')[0]
  arch=navigator.platform.split(' ')[0]
  browser=browse.split(' ')[0]
  version=browse.split(' ')[1]
}
function try(exploit,type) {
  try {
    window.open(exploit)
  }
  catch(err) {
    window.location.href=exploit;
  }
}
function detect() {
  
}
