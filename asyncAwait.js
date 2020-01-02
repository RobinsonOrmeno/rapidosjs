const getNombre = (idPost) =>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
           .then(res =>{ 
               return res.json()
        })
        .then(post =>{
            
            console.log(post.id);
            fetch(`https://jsonplaceholder.typicode.com/users/${post.id}`)
                .then(res =>{
                    return res.json()
                })
                    .then(user =>{
                        $('#nombre').text(user.name)
                        console.log(user.name)
                    })
        })
}


//getNombre(6);




const getNombreAsync = async(idPost)=>{
    try {
        const resPost = await fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)

        const post = await resPost.json()
   //     console.log(post)
        const resUser = await  fetch(`https://jsonplaceholder.typicode.com/users/${post.id}`)
        const user = await resUser.json()
       // console.log(user)
        $('#nombre').text(user.name)

        let t = $('#tablausuarios').DataTable();
         t.row.add([
            user.id,
            user.name,
            user.username,
            user['address'].city
      ]).draw()

    } catch (error) {
        console.log(error)
    }
}

//getNombreAsync(18)

