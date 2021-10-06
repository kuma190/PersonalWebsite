function test(element){
    // element.classList.add("navname")
    // element.classList.add("active")

}

function color(element){
    element.classList.toggle("text-black")
}

function makeitdark(){
    document.body.classList.toggle("dark-mode");
    projToken = document.getElementsByClassName("project");
    for ( i = 0; i < projToken.length; i ++ ){
        projToken[i].classList.toggle("project-dark-mode");
    }
    //console.log(document.getElementsByClassName("navbar")[0].classList.remove('bg-light'));
    console.log(document.getElementsByClassName("navbar")[0].classList.toggle('bg-dark'));
    navTextToken = document.getElementsByClassName("navbar")[0].getElementsByTagName("a")
    for ( i = 0; i < navTextToken.length; i ++ ){
        navTextToken[i].classList.toggle("text-white");
    }
    //console.log([0].classList.toggle("text-white"));
    document.getElementById('modeswitch').checked = true;
}

function makeitlight(){
    console.log(document.getElementsByClassName("navbar")[0].classList.toggle('bg-light'));
    document.getElementById('modeswitch').checked = false;
}

function change() {
    console.log(document.getElementsByClassName("project"))
    makeitdark();
    if(document.body.classList.contains('dark-mode')){
        document.getElementById('modeswitch').checked = true; //when the body has the class 'dark' currently
         localStorage.setItem('darkMode', 'enabled'); //store this data if dark mode is on
     }else{
         localStorage.setItem('darkMode', 'disabled'); //store this data if dark mode is off
         makeitlight()
     }
 
 };
 
 if(localStorage.getItem('darkMode') == 'enabled'){
     //document.body.classList.toggle('dark-mode');
     makeitdark();
 };
 
 