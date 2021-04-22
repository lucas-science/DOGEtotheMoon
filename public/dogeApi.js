let fleche = document.getElementById('tothemoon');
let doge = document.getElementById('dogecoin')
let percent = document.getElementById('percent')

sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}
const getvalue = async() => {
    try {
        let result = await fetch("https://dogecoinetothemoon.herokuapp.com/getVal");
        let data = await result.json()
        console.log(data)
        percent.innerHTML = `<p>The pourcentage change of this last 24 hours is : ${data} %</p>`
        let convert = data / 100 * (-225)
        if (data > 40) {
            console.log("DOGE coin to the moon !")
            percent.innerHTML = `
            <p>The pourcentage change of this last 24 hours is : ${data} %</p>
            <iframe src="https://giphy.com/embed/Ogak8XuKHLs6PYcqlp"  frameBorder="0" class="gif"></iframe>
            `
            fleche.style.transform = `rotate(${convert}deg)`

        } else {
            fleche.style.transform = `rotate(${convert}deg)`
        }
        console.log(convert)
        setTimeout(getvalue, 60000)
    } catch (err) {
        console.log(err)
    }
}

getvalue()


doge.addEventListener('click', async() => {
    fleche.style.transform = `rotate(-70deg)`
    percent.innerHTML = `
    <iframe src="https://giphy.com/embed/Ogak8XuKHLs6PYcqlp"  frameBorder="0" class="gif"></iframe>
    `
    await sleep(1500)
    try {
        let result = await fetch("https://dogecoinetothemoon.herokuapp.com/getVal");
        let data = await result.json()
        percent.innerHTML = `<p>The pourcentage change of this last 24 hours is : ${data} %</p>`
        let convert = data / 100 * (-225)
        fleche.style.transform = `rotate(${convert}deg)`
        percent.innerHTML = `
        <p>The pourcentage change of this last 24 hours is : ${data} %</p>
        `
    } catch (err) {
        console.log(err)
    }
})
