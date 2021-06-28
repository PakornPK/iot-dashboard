export default () => {
    let lstorage = localStorage.getItem('device')
    if(!lstorage){
        localStorage.setItem("device",JSON.stringify([]))
    } 
}