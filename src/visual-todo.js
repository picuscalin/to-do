export function showTask(){
    let btnplus=document.querySelector(".plus")
    let modal=document.querySelector(".dialog")
    let close=document.querySelector(".close")

    btnplus.addEventListener("click",()=>{
        modal.showModal()
        
    })
}