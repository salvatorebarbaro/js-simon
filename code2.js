const days= document.getElementById("days");
const hours= document.getElementById("hours");
const minutes= document.getElementById("minutes");
const seconds= document.getElementById("seconds");

// definito data obbiettivo
const dataobbiettivo= new Date("13 Feb, 2024 11:00:00");
const dataobbiettivo2 = dataobbiettivo.getTime();

// impostato aggiornamento ogni secondo
const time = setInterval(timer, 1000);

// richiamo funzione
timer()
 


// funzione
function timer()
{
    if(differenza >0)
    {
        // definizione data odierna 
        const dataodierna = new Date();
        const dataodierna3 = dataodierna.getTime();

        // facciamo differenza 

        const differenza=(dataobbiettivo-dataodierna);


        // ci siamo riportati i valori da ms a secondi ecc
        const secondi = Math.floor((differenza /1000)%60).toString().padStart(2,`0`)

        const minuti = Math.floor((differenza /(1000*60) %60).toString().padStart(2,`0`))

        const ore = Math.floor((differenza /(1000*60*60)% 24).toString().padStart(2,`0`))

        const giorni = Math.floor((differenza /(1000*60*60*24)% 365).toString().padStart(2,`0`))


        // inserimento valori nell'html 
        seconds.innerText=secondi;
        minutes.innerText=minuti;
        hours.innerText=ore;
        days.innerText=giorni;

        console.log(differenza)
    }
    else
    {
        document.getElementById("clock").innerText=`timer scaduto !!!!!`

         // rimuoviamo il setInterval, quindi blocchiamolo, cancelliamo intervallo
         clearInterval(time);

    }

    
}