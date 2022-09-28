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
// $.get('https://jsonplaceholder.typicode.com/users/1',(data)=>{
// for(let x in data){
//     plc += `${data[x].name},price: ${data[x].price} <br>`
//     show.html(plc)
//         console.log(data[x].username+'price' +data[x].phone)

// }
// console.log(data)
// })

// $.getJSON('https://jsonplaceholder.typicode.com/users/1', data =>{
//     console.log(data)
//     $.each(data,(x,pro)=>{
//         $('.body').append(pro.phone + '<br>')
//     })
// })
// griftan data

// $.ajax({
//     method:"GET",
//     url:"https://jsonplaceholder.typicode.com/posts",
//     dataType:'json'

// })
// .done((data)=>{
//     // console.log(data)
//     $.each(data, (i,val)=>{
//         $('.body').append(`<b>${val.title}</b><br><p>${val.body}<p><br> <hr>`)
//     })
// })
// $('#post').submit((e)=>{
//     var title = $('#title').val();
//     var body = $('#body').val();
//     var url = $(this).attr('action')
//     $.post(url,{title:title,body:body})


//     console.log(title,body +"saved the ipi server")
//     $.done((data)=>{
//         console.log(data)
//     })

// })