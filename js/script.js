const birthday="11 july 2024 "

function countdown(){

    const birthDate   = new Date(birthday)
    const currentDate = new Date()

    const totalSeconds=(birthDate-currentDate)/1000

    const days=Math.floor(totalSeconds/(3600*24))
    const hours=Math.floor(totalSeconds%(3600*24)/3600)
    const minutes=Math.floor(totalSeconds%3600/60)
    const seconds=Math.floor(totalSeconds%60)

   document.getElementById('days').innerText=days
   document.getElementById('hours').innerText=hours
   document.getElementById('minutes').innerText=minutes
   document.getElementById('seconds').innerText=seconds

    setInterval(countdown,1000)

}
countdown()