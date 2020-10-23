const getError = ()=>{
    const generateError = Math.random()<.2
    if(generateError){
        return new Error("Failure in getting drone data!")
    }else{
        return false
    }
}

module.exports=getError