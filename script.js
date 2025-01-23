function handleLogin()
{
    const username=document.getElementById('user').value ;
    const password=document.getElementById('pass').value ;
    const error=document.getElementById('error') 

    const loginData=[
        {username:"Apsala",password:"pass123"},
        {username:"Abi",password:"123pass"},
        {username:"Madhu",password:"123@4"},
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