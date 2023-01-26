
const handleHttp= (res, error, errorRow='')=>{
    console.log('Error log:' , errorRow);
    
    res.status(500);
    res.send({error});
}

export default handleHttp;