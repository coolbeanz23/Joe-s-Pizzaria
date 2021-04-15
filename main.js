var ing = []

function sub(){
    ing.push(document.getElementById("i1").value)
    ing.push(document.getElementById("i2").value)
    ing.push(document.getElementById("i3").value)
    ing.push(document.getElementById("i4").value)
    ing.push(document.getElementById("i5").value)
    ing.push(document.getElementById("i6").value)

    document.getElementById("result").textContent=ing
    document.getElementById("submit").style.display="none"
    document.getElementById("sort").style.display="inline-block"
}

function sor(){
    ing.sort()
    document.getElementById("result").textContent=ing
    document.getElementById("sort").style.display="none"
    document.getElementById("order").style.display="inline-block"
}

function ord(){
    document.getElementById("price").textContent="$36.66"
}