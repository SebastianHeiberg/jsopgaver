
const URL = "http://localhost:8080/api/cars"

document.querySelector("#btn-get-all").onclick = loadAllCars

function loadAllCars() {
    fetch(URL)
    .then(res => res.json())
    .then(cars => makeTable(cars) )

}

document.querySelector("#btnFindCar").onclick = findCar

   
    function findCar(){
        const id = document.querySelector("#text-for-id").value
    
        fetch(`${URL}/${id}`)
        .then(res => res.json())
        .then(car => {
            const foundCar = `<tr><td>${car.id}</td><td>${car.brand}</td><td>${car.pricePrDay}</td></tr>`
            document.querySelector("#tbodyOneCar").innerHTML = foundCar
        })
    }

function makeTable(cars){
    const tableRows = cars.map(car => `
    <tr>
        <td>${car.id}</td>
        <td>${car.brand}</td>
        <td>${car.pricePrDay}</td>
    </tr>
    `)
    const tableRowsAsString = tableRows.join("")
    document.querySelector("#tbodyAllCars").innerHTML = tableRowsAsString
}

document.querySelector("#submit-car").onclick = addCar

function addCar () {
    const brand = document.querySelector("#input-brand").value
    const model = document.querySelector("#input-model").value
    const price = document.querySelector("#input-pricePrDay").value
    const discount = document.querySelector("#input-bestDiscount").value

    fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            brand: brand,
            model: model,
            pricePrDay: price,
            bestDiscount: discount
        })
    })
    .then(res => res.json())
    .then(car =>
        document.querySelector("#return-carData").innerHTML = `
        <p> Success </p> 
        <div class="table-responsive">
                <table class="table table-primary">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Brand</th>
                            <th scope="col">Price Pr. Day</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr><td>${car.id}</td><td>${car.brand}</td><td>${car.pricePrDay}</td></tr>                    
                    </tbody>
                </table>
            </div>
            `
        
        )}
    

        document.querySelector("#btn-search-carToEdit").onclick = findCarToEdit
        document.querySelector("#submit-edited-car").onclick = submitEditedCar

        function findCarToEdit(){
            const id = document.querySelector("#text-for-id2").value
        
            fetch(`${URL}/${id}`)
            .then(res => res.json())
            .then(car => {
                document.querySelector("#edit-brand").value = car.brand
                document.querySelector("#edit-model").value = car.model
                document.querySelector("#edit-bestDiscount").value = car.bestDiscount
                document.querySelector("#edit-pricePrDay").value = car.pricePrDay
            })
        }


        function submitEditedCar () {
            const id = document.querySelector("#text-for-id2").value
            const brand = document.querySelector("#edit-brand").value
            const model = document.querySelector("#edit-model").value
            const price = document.querySelector("#edit-pricePrDay").value
            const discount = document.querySelector("#edit-bestDiscount").value
        
            fetch(`${URL}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: id,
                    brand: brand,
                    model: model,
                    pricePrDay: price,
                    bestDiscount: discount
                })
            })
            .then(res => res.json())

           document.querySelector("#text-for-id2").value = ''
           document.querySelector("#edit-brand").value = ''
           document.querySelector("#edit-model").value = ''
           document.querySelector("#edit-pricePrDay").value = ''
           document.querySelector("#edit-bestDiscount").value = ''
           document.querySelector("#edited-success").innerText = "Car succesfully edited"
           

        
        }



