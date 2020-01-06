
const getPokemonAsync = async(idPost)=>{
    try {
        const resPost = await fetch(`https://pokeapi.co/api/v2/pokemon/${idPost}`)

        const post = await resPost.json()

        return post
    
    } catch (error) {
        console.log(error)

        alert(error, "", "error")

    }

   
}

//getPokemonAsync(18)