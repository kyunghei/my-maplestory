// get random number for randomizer
function getRandom(max) {
    return Math.floor(Math.random() * max);
}

// creates a new single part hair element with the id 'hairImg'
function createHair() {
    var hairImg = document.createElement("img");
    hairImg.id = "hairImg";
}

// creates a new two part hair element with the id 'hairTop' and 'hairBtm'
function createTwo() {
    var hairTop = document.createElement("img");
    var hairBtm = document.createElement("img");
    hairTop.id = "hairTop";
    hairBtm.id = "hairBtm";
}

hair_btn = document.getElementById("hair-btn");
hair_btn.addEventListener("click", function () {
    if (document.getElementById("hairImg") || document.getElementById("hairTop")) {
        rand_hair = getRandom(41);
        var source = document.getElementById("hair-drag");

        if (rand_hair > 16) {
            if (document.getElementById("hairImg")) {
                document.getElementById("hairImg").remove();
            } else {
                document.getElementById("hairTop").remove();
                document.getElementById("hairBtm").remove();
            }

            // recreate the two hair parts
            var hairTop = document.createElement("img");
            var hairBtm = document.createElement("img");
            hairTop.id = "hairTop";
            hairBtm.id = "hairBtm";


            hairTop.src = `random_look/hair/${rand_hair}.png`;
            hairBtm.src = `random_look/hair/${rand_hair}-1.png`;
            source.appendChild(hairTop);
            source.appendChild(hairBtm);

        }
        else {

            if (document.getElementById("hairImg")) {
                document.getElementById("hairImg").remove();
            } else {
                document.getElementById("hairTop").remove();
                document.getElementById("hairBtm").remove();
            }

            var hairImg = document.createElement("img");
            hairImg.id = "hairImg";

            hairImg.src = `random_look/hair/${rand_hair}.png`
                ;
            source.appendChild(hairImg);

        }







    }
    else {
        rand_hair = getRandom(41);
        var source = document.getElementById("hair-drag");

        // create draggable tag
        var tagLine = document.createElement("div");
        tagLine.className = "tagLine";
        var dragTag = document.createElement("span");
        var tagTxt = document.createTextNode("drag hair");
        dragTag.appendChild(tagTxt);
        tagLine.appendChild(dragTag);
        source.appendChild(tagLine);

        if (rand_hair > 16) {
            var hairTop = document.createElement("img");
            var hairBtm = document.createElement("img");
            hairTop.id = "hairTop";
            hairBtm.id = "hairBtm";


            hairTop.src = `random_look/hair/${rand_hair}.png`;
            hairBtm.src = `random_look/hair/${rand_hair}-1.png`;
            source.appendChild(hairTop);
            source.appendChild(hairBtm);

        }
        else {
            var hairImg = document.createElement("img");
            hairImg.id = "hairImg";

            hairImg.src = `random_look/hair/${rand_hair}.png`
                ;
            source.appendChild(hairImg);

        }
    }

}

);

face_btn = document.getElementById("face-btn");
face_btn.addEventListener("click", function () {
    if (document.getElementById("face-custom")) {
        rand_face = getRandom(27);
        var face_img = document.getElementById("face-custom");
        face_img.src = `random_look/face/${rand_face}.png`
            ;



    }
    else {
        var face_img = document.createElement("img");
        face_img.id = "face-custom"
        rand_face = getRandom(27);

        face_img.src = `random_look/face/${rand_face}.png`;
        var source = document.getElementById("face-drag");
        source.appendChild(face_img);

        // create draggable tag
        var tagLine = document.createElement("div");
        tagLine.className = "tagLine";
        var dragTag = document.createElement("span");
        var tagTxt = document.createTextNode("drag face");
        dragTag.appendChild(tagTxt);
        tagLine.appendChild(dragTag);
        source.appendChild(tagLine);

    }

});

outfitBtn = document.getElementById("outfit-btn");
outfitBtn.addEventListener("click", function () {
    if (document.getElementById("outfitImg")) {
        rand_outfit = getRandom(31);
        var source = document.getElementById("outfit-drag");

        // remove existing clothes
        var outfitImg = document.getElementById("outfitImg");
        outfitImg.remove();

        var outfitImg = document.createElement("img");
        outfitImg.id = "outfitImg";
        outfitImg.src = `random_look/overall/${rand_outfit}.png`;
        source.appendChild(outfitImg);

    }
    else {
        rand_outfit = getRandom(31);
        var source = document.getElementById("outfit-drag");

        var outfitImg = document.createElement("img");
        outfitImg.id = "outfitImg";
        outfitImg.src = `random_look/overall/${rand_outfit}.png`;
        source.appendChild(outfitImg);

        // create draggable tag
        var tagLine = document.createElement("div");
        tagLine.className = "tagLine";
        var dragTag = document.createElement("span");
        var tagTxt = document.createTextNode("drag outfit");
        dragTag.appendChild(tagTxt);
        tagLine.appendChild(dragTag);
        source.appendChild(tagLine);
    }
});


