let fleche = document.getElementById('tothemoon');
let doge = document.getElementById('dogecoin')
sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}
const getvalue = async() => {
    try {
        let result = await fetch("http://localhost:4000/getVal");
        let data = await result.json()
        console.log(data)
        let convert = data / 100 * (-225)
        if (data > 40) {
            console.log("DOGE coin to the moon !")
            for (let i = 0; i < 1000; i++) {
                fleche.style.transform = `rotate(${i}deg)`
            }

        } else {
            fleche.style.transform = `rotate(${convert}deg)`
        }
        console.log(convert)
    } catch (err) {
        console.log(err)
    }
}

getvalue()

doge.addEventListener('click', async() => {
    for (let i = 0; i < 1000; i++) {
        fleche.style.transform = `rotate(${i}deg)`
    }
    try {
        let result = await fetch("http://localhost:4000/getVal");
        let data = await result.json()
        console.log(data)
        let convert = data / 100 * (-225)
        if (data > 40) {
            console.log("DOGE coin to the moon !")
            for (let i = 0; i < 1000; i++) {
                fleche.style.transform = `rotate(${i}deg)`
            }

        } else {
            fleche.style.transform = `rotate(${convert}deg)`
        }
        console.log(convert)
    } catch (err) {
        console.log(err)
    }
})