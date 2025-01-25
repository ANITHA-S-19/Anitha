function handleLogin()
{
    const username=document.getElementById('user').value ;
    const password=document.getElementById('pass').value ;
    const error=document.getElementById('error') 

    const loginData=[
        {username:"Anitha",password:"140805"},
        {username:"Rifa",password:"051105"},
        {username:"Mukila",password:"161105"},
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