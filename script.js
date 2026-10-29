// ====================
// 🔐 فتح الموقع
// ====================

function unlock() {

    const password = document.getElementById("password");

    if (password && password.value === "31/10/2025") {

        window.location.href = "home.html";

    } else if (password) {

        document.getElementById("error").innerText =
            "التاريخ غلط ❤️";

    }
}


// ====================
// ⏳ العداد
// ====================

function updateTimer() {

    const startDate = new Date("2025-10-31T00:00:00");
    const now = new Date();

    const difference = now - startDate;

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );

    if (document.getElementById("days")) {
        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;
    }
}

updateTimer();
setInterval(updateTimer, 1000);


// ====================
// 💌 الرسالة
// ====================

const message =
"           1 Love     1 Year     1 Story ❤️.. " +
"من يوم 31/10/2025 بدأت حكاية يمكن في وقتها ماكنتش عارف إنها هتبقى من أجمل الحكايات اللي عشتها ❤️ " +
"عدّت سنة كاملة، سنة فيها ضحك وكلام وذكريات ومواقف كتير， وكل يوم فيها كان بيضيف حاجة جديدة لحكايتنا. " +
"يمكن السنة دي مكنتش كاملة， ويمكن قابلتنا لحظات صعبة اختلفنا فيها أو زعلنا من بعض， لكن في الآخر فضلنا نرجع لبعض ونكمل. " +
"أنا ممتن لكل لحظة حلوة عشناها سوا， لكل مرة ضحكنا فيها من قلبنا， ولكل كلمة حلوة اتقالت， وحتى لكل موقف صعب علّمنا حاجة عن بعض. " +
"وجودك في حياتي بقى جزء مهم من أيامي， والتفاصيل الصغيرة اللي بينا بقت بالنسبة لي ذكريات كبيرة. " +
"السنة دي بالنسبالي مش مجرد أيام عدّت، دي سنة كاملة من الحكايات والمواقف والضحك والذكريات اللي هفضل فاكرها مهما عدى وقت. " +
"وأجمل حاجة فيها إن كل ده كان معاكي ❤️ " +
"أتمنى إن اللي جاي يكون أحلى من اللي فات، ونفضل نعمل ذكريات أكتر ونعيش لحظات أجمل سوا. " +
"كل سنة وإنتِ جزء جميل من حكايتي، وكل سنة وإحنا بنبدأ فصل جديد من حكايتنا. " +
"ومهما حاولت أكتب， هيفضل عندي كلام كتير مش عارف أوصفه， بس فيه حاجة واحدة متأكد منها... " +
"إني مبسوط إن يوم 31/10/2025 كان بداية الحكاية دي ❤️ " +
"كل سنة وإنتِ بخير، وكل سنة وحكايتنا أجمل من السنة اللي قبلها ❤️✨"+
"كل سنه وانتي منكده عليا ي حبيبتي بس يتقفل علينا باب واحد وانا اردلك دا كلو"+
".. 1 Year , 12 Months , 365 Days , 8760 Hours , 525600 Minutes , 31536000 Seconds ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️...."+
"I always love you ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️ ❤️❤️❤️..."+
"كل سنه وانتي مني وانا منك ي حبيبتي ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️...."+
"كل سنه وانتي مني وانا منك ي حبيبتي ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️...."+
"كل سنه وانتي مني وانا منك ي حبيبتي ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️...."+
"دااااا لو معندكيش مانع ي حبيبتي ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️...."+
"وحتي لو عندك ف انا هفضل لاااازق فيكي ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️....";



let index = 0;

function typeMessage() {

    const letter = document.getElementById("letter");

    if (!letter) {
        return;
    }

    if (index < message.length) {

        letter.innerHTML += message[index];

        index++;

        setTimeout(typeMessage, 40);
    }
}

typeMessage();
function openSurprise() {

    const box = document.getElementById("surpriseBox");

    box.style.display = "block";

}
function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("floating-heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        Math.random() * 20 + 15 + "px";

    heart.style.animationDuration =
        Math.random() * 4 + 5 + "s";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 9000);
}

setInterval(createHeart, 700);
function toggleMusic() {

    const music = document.getElementById("music");
    const button = document.querySelector(".music-btn");

    if (music.paused) {

        music.play();

        button.innerHTML = "⏸️ إيقاف الأغنية";

    } else {

        music.pause();

        button.innerHTML = "🎵 تشغيل الأغنية";
    }
}
function toggleMusic() {
    const music = document.getElementById("music");
    const button = document.querySelector(".music-btn");

    if (music.paused) {
        music.play();
        button.innerHTML = "⏸️ إيقاف الأغنية";
    } else {
        music.pause();
        button.innerHTML = "🎵 تشغيل الأغنية";
    }
}
function createHeart() {

    const hearts = document.getElementById("hearts");

    if (!hearts) return;

    const heart = document.createElement("div");

    heart.className = "floating-heart";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 12 + 10 + "px";
    heart.style.animationDuration = Math.random() * 3 + 4 + "s";

    hearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

for (let i = 0; i < 30; i++) {
    setTimeout(createHeart, i * 100);
}

setInterval(createHeart, 250);
function setupMusic() {

    const music = document.getElementById("music");
    const button = document.querySelector(".music-btn");

    if (!music) return;

    // نرجع لنفس مكان الأغنية
    const savedTime = localStorage.getItem("musicTime");

    if (savedTime) {
        music.currentTime = Number(savedTime);
    }

    // نحفظ مكان الأغنية باستمرار
    music.addEventListener("timeupdate", function () {
        localStorage.setItem(
            "musicTime",
            music.currentTime
        );
    });

    // حالة زر الموسيقى
    if (button) {
        button.innerHTML = "🎵";
    }
}

// ====================
// 🎵 الأغنية - حفظ مكانها بين الصفحات
// ====================

function setupMusic() {

    const music = document.getElementById("music");

    if (!music) return;

    const savedTime = localStorage.getItem("musicTime");

    function restoreMusicTime() {

        if (savedTime) {
            const time = Number(savedTime);

            if (time < music.duration) {
                music.currentTime = time;
            }
        }
    }

    // لو البيانات اتحملت بعد تشغيل الكود
    music.addEventListener("loadedmetadata", restoreMusicTime);

    // ولو البيانات كانت اتحملت بالفعل
    if (music.readyState >= 1) {
        restoreMusicTime();
    }

    // حفظ مكان الأغنية باستمرار
    music.addEventListener("timeupdate", function () {

        if (!isNaN(music.currentTime)) {

            localStorage.setItem(
                "musicTime",
                music.currentTime
            );
        }
    });

    // حفظ المكان قبل الانتقال لصفحة تانية
    window.addEventListener("pagehide", function () {

        localStorage.setItem(
            "musicTime",
            music.currentTime
        );
    });
}


function toggleMusic() {

    const music =
        document.getElementById("music");

    const button =
        document.querySelector(".music-btn");

    if (!music || !button) return;

    if (music.paused) {

        music.play()
            .then(() => {

                button.innerHTML = "⏸️";

            })
            .catch(() => {

                button.innerHTML = "🎵";

            });

    } else {

        music.pause();

        button.innerHTML = "🎵";
    }
}


document.addEventListener("DOMContentLoaded", function () {
    setupMusic();
});
function openImage(image) {
    const viewer = document.getElementById("imageViewer");
    const bigImage = document.getElementById("bigImage");

    bigImage.src = image.src;
    viewer.style.display = "flex";
}

function closeImage() {
    document.getElementById("imageViewer").style.display = "none";
}
// ✨ لمعات الخلفية

function createSparkle() {

    const sparkles =
        document.getElementById("sparkles");

    if (!sparkles) return;

    const sparkle =
        document.createElement("div");

    sparkle.className = "sparkle";

    sparkle.innerHTML = "✦";

    sparkle.style.left =
        Math.random() * 100 + "vw";

    sparkle.style.top =
        Math.random() * 100 + "vh";

    sparkle.style.fontSize =
        Math.random() * 8 + 6 + "px";

    sparkle.style.animationDuration =
        Math.random() * 2 + 2 + "s";

    sparkles.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 4000);
}

setInterval(createSparkle, 350);
// ====================
// 🕵️ المهمة السرية
// ====================

function findMissionSymbol(symbol) {

    let found = JSON.parse(
        sessionStorage.getItem("missionSymbols") || "[]"
    );

    if (!found.includes(symbol)) {

        found.push(symbol);

        sessionStorage.setItem(
            "missionSymbols",
            JSON.stringify(found)
        );
    }
}
