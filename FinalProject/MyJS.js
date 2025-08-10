function toggleParagraph(btn) {
    const p = btn.parentElement.querySelector('.myPara');
     const current = getComputedStyle(p).display; 
    if (current === 'none') {
        p.style.display = 'block';
    } else {
        p.style.display = 'none';
    }
}