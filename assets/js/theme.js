document.body.style.backgroundColor = sessionStorage.getItem('bg');
document.body.style.color = sessionStorage.getItem('cc');
function theme() {
     if ( sessionStorage.getItem('bg') === 'rgb(242, 240, 227)') {
         
            sessionStorage.setItem('bg', 'rgb(68, 52, 79)');
            sessionStorage.setItem('cc', '#F2F0E3');
            
         
     }
    else if (sessionStorage.getItem('bg') == null || undefined) {
        sessionStorage.setItem('bg', 'rgb(68, 52, 79)');
        sessionStorage.setItem('cc', '#F2F0E3');
        
    }
    else if( sessionStorage.getItem('bg') === 'rgb(68, 52, 79)') {
        
        sessionStorage.setItem('bg', 'rgb(242, 240, 227)');
        sessionStorage.setItem('cc', '#333');
        
  
    }

document.body.style.backgroundColor = sessionStorage.getItem('bg');
document.body.style.color = sessionStorage.getItem('cc');

}


