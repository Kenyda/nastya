var elem = document.getElementById('imgs');
var positionInfo = elem.getBoundingClientRect();
var height = positionInfo.height;
var width = positionInfo.width;
var pictures = document.getElementById('pictures');
var ids = 0;

var lastAdd = new Date();

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function show () {
    ids++;

    adres = "./imgs/" + getRandomInt(1, 25) + ".jpg";
    _top = getRandomInt(60, height - 70 - (height * 0.5));
    left = getRandomInt(0, width-(0.3*width));
    return '<img id="' + ids + '" src="' + adres + '" style="position: fixed; margin-top: ' + _top + 'px; max-width: 30%; max-height: 50%; margin-left: ' + left + 'px; opacity: 1">';   
}

function add (){
    var now = new Date();
    if (now - lastAdd > 1000) {
        pictures.innerHTML += show();
        lastAdd = now;
    }

    for(var i = 0; i < pictures.children.length; i++) {
        pictures.children[i].style.opacity -= 0.01
    }

    for(var i = ids - 10; i >= 0; i--){
        var ud = document.getElementById(i);
        if (ud != null)
            ud.parentNode.removeChild(ud);
    }
}

setInterval (add, 100);

var cons = document.getElementById('pozdr');
var congs =  ['Настюшенька моя!', 'Поздравляю тебя з дномы ражыденя','ясного неба тебе над головой', ' крепкой почвы под ногами', 'попутного ветра тебе в спину','счастя сдаровья.. квартиры, денег, дачи, удачи, внуков крепких, того этого... ', 'я очень рада, что у меня есть такая замечательная сестра, как ты', 'хочу, чтобы ты перестала приунывать и нашла себя в жизни', ' хочу, чтобы ты добилась того, чего даже в самых смелых мечтах представить не можешь, и жила долго и счастливо. ', 'хочу, чтобы тебе хотелось плакать только от счастья, как мне хочется плакать от мыслей  о сессии', 'хочу, чтобы тебя никто не бесил так, как меня бесят мои соседи.', 'Хочу, чтобы твоё сердце было заполнено любовью и радостью, как забиты макаронами раковины в общаге.', ' Хочу, чтобы тебя ждала целая очередь из счастливых моментов, как я жду свою очередь на сдачу лаб.', 'Хочу, чтобы у тебя было столько же счастливых моментов, сколько долгов в конце семестра.', 'Хочу, чтобы неудачи игнорировали тебя так же, как кондуктора в автобусе, когда делаешь морду кирпичом. ', 'Хочу, чтобы твои будни проходили так же весело и беззаботно, как зачёт по татарскому.','хочу, чтобы в твоей душе навсегда поселились гармония и покой, потому что это самое главное в жизни.', 'Я хочу, чтобы у тебя было все хорошо, я желаю тебе этого даже больше, чем себе, потому что я тебя очень сильно люблю. ', 'и самое главное...', 'хочу, чтобы ты не обижалась на меня, за то что поздравляю тебя так поздно...', 'просто я хотела сделать что-то особенное...', '... но не рассчитала свои силы', 'но ты же родилась вечером, так что я не опоздала', 'я тебя очень люблю', 'твоя Катуша.'    ]
var i=0;
function ad (){
    cons.innerHTML = congs[i];
    if(i<congs.length-1){
    i++;
    }
    console.log(i);
}
setInterval (ad, 3000);