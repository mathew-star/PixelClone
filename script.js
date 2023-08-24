const user = document.getElementById('user');
const menu = document.getElementById('side-menu');


let check=true;
    user.addEventListener('click',()=>{
     
      if(check){
        menu.style.display='block';
        check=false;
      }else{
        menu.style.display='none';
        check=true;
      }
        
    })
    
    const btn = document.getElementById('btn');
    const checkboxes = document.querySelectorAll('.form-check-input');
    const applyBtn = document.getElementById('applyBtn');
  
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', () => {
        const checkedCheckboxes = document.querySelectorAll('.form-check-input:checked');
        if (checkedCheckboxes.length === 0) {
          btn.textContent = 'Product Type';
        } else {
          btn.textContent = `Product Type(${checkedCheckboxes.length})`;
        }
      });
    });

