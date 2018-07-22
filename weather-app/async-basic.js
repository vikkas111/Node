console.log('starting app');


setTimeout (() => {
   console.log('timeout 1')
},2000)

setTimeout (() => {
    console.log('nO TIMEOUT')
    
},0)

console.log('finish');
