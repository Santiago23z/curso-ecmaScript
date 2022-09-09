const promise = () => {
    return new Promise((resolve, reject) =>{
        if (false) {
            resolve('hey!!');
        } else {
            reject('upsssss');
        }
    })
}
``
promise()
    .then(response => console.log(response))
    .catch(err => console.log(err));