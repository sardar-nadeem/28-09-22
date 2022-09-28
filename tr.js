// $('button').click(()=>{
//     $('h1').load('test.html');
// })


// $('.header').load('header.html');

// $('.footer').load('footer.html');
// $('.body').load('thebodey.html',function(responseTXT,statusTXT,xhr){
//     if(statusTXT == "success"){
//         console.log("data loaded successfuly")
//     }else if(statusTXT == "error"){
//         console.log('some thing wents wrong' + xhr.status + xhr.statusTXT)
//     }
    
// });
// $.get('thebodey.html',function(data){
//     $('.body').html(data)
// })
// $.get('products.json',(data)=>{
//     console.log(data)
// })
// var show = $('.body')
// let plc = '';
// $.get('products.json',(data)=>{
// for(let x in data){
//     plc += `${data[x].name},price: ${data[x].price} <br>`
//     show.html(plc)
//         console.log(data[x].name+'price' +data[x].price)

// }
// console.log(data)
// })

$.getJSON('products.json', data =>{
    console.log(data)
    $.each(data,(x,pro)=>{
        $('.body').append(pro.name + '<br>')
    })
})