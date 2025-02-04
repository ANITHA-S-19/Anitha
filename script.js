function handleLogin()
{
    const username=document.getElementById('user').value ;
    const password=document.getElementById('pass').value ;
    const error=document.getElementById('error') 

    const loginData=[
<<<<<<< HEAD
        {username:"Anitha",password:"140805"},
        {username:"Rifa",password:"051105"},
        {username:"Mukila",password:"161105"},
=======
        {username:"Anitha",password:"1234"},
        {username:"Rifa",password:"5678"},
        {username:"Mukila",password:"9101112"},
>>>>>>> baf5078f95bd0288a912dd503d8810406975c57f
    ]
    const isValid=loginData.some((user)=>user.username===username && user.password===password)
    if (isValid)
    {
        window.location.href='Flexbox.html'
        error.innerText="login Successful";
    }
    else{
        error.innerText="Invalid Credentials";
    }
}
