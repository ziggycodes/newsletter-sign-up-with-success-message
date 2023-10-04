(
  function (){
    const btn = document.querySelector("button")
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const email = document.querySelector("input")
    const test = document.querySelector(".test")
  

    function emailTest(){
      const isEmailGood = emailRegex.test(email.value)
      return isEmailGood
    }

    function emailValidator(){
      
      return emailTest()
    }


    btn.addEventListener("click", function(){
      if (emailValidator()){
        window.location.href = '/public/success.html'
      } else{
        email.classList.add("err-input")
        test.classList.remove("hidden")
      }
      
    })

    email.addEventListener("keyup", function(event){
      if (event.key === "Enter"){
        btn.click()
      }
    })
  }
)()