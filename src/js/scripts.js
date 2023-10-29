function getCheer() {
    const date = new Date();
    const proosten =  ['Yamas!', 'Proost!', 'Santé!', 'Cheers!', 'Prosit!', 'Skøll!', 'Egészségedre!'];
    return proosten[date.getDay()]
}

window.onload = function(){
    console.error("load")
    const cheerElement = document.getElementById("cheer-of-the-day");
    const cheer = getCheer();
    console.error(cheerElement.textContent, cheer)
    cheerElement.textContent = cheer;
};
