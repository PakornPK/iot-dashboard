export default () => {
    let lstorage = localStorage.getItem('groupsite')
    if(!lstorage){
        localStorage.setItem("groupsite",JSON.stringify([]))
    } 
}