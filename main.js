function llenarDatos(info){
    let puestos = [];
    for (let i = 0; i < 5; i++) {
        //comilla multilienea
        puestos.push(`
        <div class="puesto">
            <div class="tituloP">
                <h2>Numero ${i+1}</h2>
            </div>
            <div class="video">
            <iframe width="250" src="${info[0][0]}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="descripcion">
                <p>Nombre de la cancion: ${info[0][1]} <br>
                Artista: ${info[0][2]} <br>
                Año de Publicacion: ${info[0][3]} <br>
                Genero: ${info[0][4]} <br>
                Pais: ${info[0][5]} </p>
            </div>
        </div>
        `)
        info.splice(0,1);
    }
    return puestos;
}

function generarTops()
{
    let topM = document.getElementById('topM');
    let topK = document.getElementById('topK');
    let infoM = [
        ["https://www.youtube.com/embed/mPVDGOVjRQ0"
        ,"ON","BTS","2020","K-Pop","Corea del Sur"],
        ["https://www.youtube.com/embed/CuklIb9d3fI"
        ,"Permission to Dance","BTS","2021","K-Pop","Corea del Sur"],
        ["https://www.youtube.com/embed/dNCWe_6HAM8"
        ,"Money","LISA","2021","K-Pop","Corea del Sur"],
        ["https://www.youtube.com/embed/op1QYwRAQpI",
        "Stay Whit Me","Punch, ChanYeol","2016","K-Pop","Corea del Sur"],
        ["https://www.youtube.com/embed/x1tAVUAs4Kc",
        "Still With You","Jeon Jungkook","2020","K-Pop","Corea del Sur"]];
    let infoK = [
        ["https://www.youtube.com/embed/iUG6PVdX5Vo"
        ,"I Should Have Know Better","The Beatles","1964","Rock","Inglaterra"],
        ["https://www.youtube.com/embed/adP7JtDWda0"
        ,"Stairway to Heaven ","Led Zeppelin","1971","Hard-Rock","Inglaterra"],
        ["https://www.youtube.com/embed/r6zIGXun57U"
        ,"Legends Never Die","Pentakill-Againist The Current","2017","Pop-Rock","Estados Unidos"],
        ["https://www.youtube.com/embed/ZeMlQEWEg2Q"
        ,"The End","The Doors","1967","Rock","Estados Unidos"],
        ["https://www.youtube.com/embed/scKdbU71eYo"
        ,"Nandemonaiya","Radwimps","2016","Rock","Japon"]];

    topM.innerHTML = llenarDatos(infoM).join(" ");
    topK.innerHTML = llenarDatos(infoK).join(" ");
}
generarTops();