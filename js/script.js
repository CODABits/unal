function togglePopup(popupId) {
    var popup = document.getElementById(popupId);
    popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
}

function closePopup(popupId) {
    var popup = document.getElementById(popupId);
    popup.style.display = 'none';
}




function toggleAuthorPopup() {
    const popup = document.getElementById('author-popup');
    popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
}

function closeAuthorPopup() {
    document.getElementById('author-popup').style.display = 'none';
}


