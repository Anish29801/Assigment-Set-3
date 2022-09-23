
const btn = document.getElementById("btn");

function hello(){
    let dob = document.getElementById("dob").value;
    console.log(dob); 
    let arr= dob.split('');
    console.log(arr);
    let year= Number(arr.slice(0,4).join(''));
    console.log(year); 
    let month= Number(arr.slice(5,7).join(''));
    console.log(month);    
    let date= Number(arr.slice(8,10).join(''));
    console.log(date);

    const now = new Date();
    let present_date =now.getDate();
    let present_month =now.getMonth();
    let present_year =now.getFullYear();
    
    let diff_date = present_date - date;
    console.log(diff_date);

    let diff_month = present_month - month +1;
    console.log(diff_month);
    
    let diff_year = present_year - year;
    console.log(diff_year);
    if(diff_year >0 || diff_month >0 || diff_date>0){
        var year_show= `Your Age is : ${diff_year} Yrs`;
    }
    else{
        var year_show= `Welcome Time Traveller`;
    }
    document.querySelector(".desc").innerHTML = year_show;
    document.querySelector("#years").innerHTML = Math.abs(diff_year);
    document.querySelector("#months").innerHTML = Math.abs(diff_month);
    document.querySelector("#days").innerHTML = Math.abs(diff_date);

}
btn.addEventListener("click",hello);