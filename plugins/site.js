export default () => {
    let lstorage = localStorage.getItem('site')
    if(!lstorage){
        localStorage.setItem("site",JSON.stringify([]))
    } 
}