async function getCountries(){
    let countries;
    try{
        const data = await fetch("https://restcountries.com/v3.1/all",
        {
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            },
        })
        countries = await data.json();
        

    }
    catch(err){
        console.log(err)
    }
    return countries;
}
getCountries();



async function  displayCards(){
    let countries = await getCountries();
    console.log(countries)
    const rowele = document.querySelector(".row");
    rowele.innerHTML = "Loading cards...";
    countries.forEach((country)=>{
       
        rowele.innerHTML +=`
        <div class="col-lg-4 col-sm-12">
            <div class="card">
                <div class="header" style="background-color:black">
                    <h5 class="card-title" id="Country" style="color:white">${country.name.common}</h1>
                </div>
                <div class="body" style="background-image: linear-gradient(90deg, rgb(188, 191, 133), rgb(92, 92, 75));">
                    <img src="${country.flags.png}" class="card-image-top" alt="image">
                    <p id="Capital" class="card-text">Capital: ${country.capital}</p>
                    <p id="Region" class="card-text">Region: ${country.region}</p>
                    <p id="Code" class="card-text">Country code: ${country.altSpellings[0]}</p>
                    <p id="${country.name.common}" class="card-text"></p>
                    <button class="btn btn-outline-primary" onclick="()=>{document.getElementById("${country.name.common}").innerHTML = "WEATHER"}">Click for Weather</button>
                    
                </div>
            </div>
          </div>
          
        
        `
    })
}

displayCards()


