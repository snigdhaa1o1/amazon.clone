const imgs=document.querySelectorAll('.header-slider ul img');
const prev_btn=document.querySelector('.control-prev');
const next_btn=document.querySelector('.control-next');

let n=0;
function changeslide(){
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display='none';
        }
        imgs[n].style.display='block';
    }
changeslide();
prev_btn.addEventListener('click',(e)=>{
    if(n>0){
        n--;
    }else{
        n=imgs.length-1;
    }
    changeslide();
})
next_btn.addEventListener('click',(e)=>{
    if(n<imgs.length-1){
        n++;
    }else{
        n=0;
    }
    changeslide();
})

const scrollContainer = document.querySelectorAll('.products');
for(const item of scrollContainer){
    item.addEventListener('wheel', (evt) => {
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    });
}
function handleNavigation(selectElement) {
    const url = selectElement.value; // Get the selected option's value
    if (url) {
        window.location.href = url; // Redirect to the URL
    }
}
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Enables smooth scrolling
    });
}
function validateEmail() {
    var pattern = /[a-z]\w+[a-z|.]\w+[@]\w+[.]\w+/;
    // var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var emailId = this.value;
    var msgBox = document.querySelector("#errMsg-2");
    if(!pattern.test(emailId)) {
        msgBox.innerHTML = "Invalid Email Address";
        this.className = "errBorder";
    } else {
        msgBox.innerHTML = "";
        this.className = "successBorder";
    }
}