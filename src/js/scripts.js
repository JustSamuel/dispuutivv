function getCheer() {
    const date = new Date();
    const proosten =  ['Yamas!', 'Proost!', 'Santé!', 'Cheers!', 'Prosit!', 'Skøll!', 'Egészségedre!'];
    return ` ${proosten[date.getDay()]}`
}

window.onload = function(){
    const cheerElement = document.getElementById("cheer-of-the-day");
    const cheer = getCheer();
    cheerElement.textContent = cheer;

    const yearElement = document.getElementById("year");
    const year = new Date().getFullYear();
    yearElement.textContent = year;
};
