document.addEventListener("DOMContentLoaded", () => {
    const envelope = document.getElementById("envelope");
    const yesBtn = document.getElementById("btnYes");
    const yesBtn2 = document.getElementById("btnYes2");
    const popup = document.getElementById("popup");
    const bgMusic = document.getElementById("bgMusic");
    const popupMusic = document.getElementById("popupMusic");

    let musicStarted = false;

    const startMusic = () => {
        if (!musicStarted) {
            bgMusic.loop = true;
            bgMusic.play().catch(() => {});
            musicStarted = true;
        }
    };

    document.addEventListener("click", startMusic, { once: true });

    envelope.addEventListener("click", () => {
        envelope.classList.add("open");
        envelope.classList.remove("close");
    });

    yesBtn.addEventListener("click", showPopup);
    yesBtn2.addEventListener("click", showPopup);

    function showPopup(e) {
        e.stopPropagation();
        bgMusic.pause();
        bgMusic.currentTime = 0;
        popup.style.display = "block";
        popupMusic.play().catch(() => {});
    }
});
