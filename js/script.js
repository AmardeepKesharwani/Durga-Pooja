
const data = [
    {
        id: 1,
        image: "./assets/image/images.jpeg",
        music: "./assets/music/Pyaara Saaja Hai.mp3",
        text: "pyara saja hai tere"
    },
    {
        id: 2,
        image: "./assets/image/images (1).jpeg",  
        music: "./assets/music/Jai Mata Di.mp3",
        text: "jai mata di jai mata di"
    },
    {
        id: 3,
        image: "./assets/image/images (2).jpeg",   
        music: "./assets/music/Durga Puja.mp3",
        text: "Bengali special Haha Durga"
    },
    {
        id: 4,
        image: "./assets/image/images (3).jpeg",  
        music: "./assets/music/Aigiri Nandini.mp3",
        text: "Aigiri Nandini"
    },
    {
        id: 5,
        image: "./assets/image/images (4).jpeg",   
        music: "./assets/music/Kali Kali Amavas Ki Raat Mai.mp3",
        text: "Jai Jai maha kali"
    },
    {
        id: 6,
        image: "./assets/image/images (5).jpeg",   
        music: "./assets/music/Shyam Bansi Bajate Ho.mp3",
        text: "Vijaya Dashami Bharat milap prarambh"
    },
    {
        id: 7,
        image: "./assets/image/images (6).jpeg",  
        music: "./assets/music/Holi Khele Masane Mein Devotional Song.mp3",
        text: "Holi Khele masane mein"
    },
    {
        id: 8,
        image: "./assets/image/images (7).jpeg",    
        music: "./assets/music/ram ji ki sena chali.mp3",
        text: "Ram ji ki sena chali"
    },
    {
        id: 9,
        image: "./assets/image/images (8).jpeg",  
        music: "./assets/music/Sunty he dode chale aye mohan.mp3",
        text: "Krishna Sudama"
    },
    {
        id: 10,
        image: "./assets/image/images (9).jpeg",  
        music: "./assets/music/Mangal bhawanya.mp3",
        text: "Vijaya Dashmi Bharat milaap samapan"
    },
];

let currData, index = 1;
const music = document.getElementById("music");
$(document).ready(function () {
    $(".btn1").click(function () {
        $(".sec1").fadeOut();
        $(".sec2").fadeIn();
    })
    $(".btn2").click(function () {
        $(".sec2").fadeOut();
        $(".main").fadeIn();
        music.play()
    })
    $(".next-btn").click(function () {
        if(index == 10) return
        index++
        currData = data.find(d => d.id == index);
        next()

        if (index == 2) {
            $(".front").addClass("green");
        }
        if (index == 3) {
            $(".bottom").addClass('bg2');
        }
        if (index == 4) {
            $(".front").removeClass("green");
            $(".bottom").removeClass('bg2');
        }
        if (index == 6) {
            $(".front").addClass("green");
            $(".bottom").addClass('bg3');
        }
        if (index == 8) {
            $(".front").removeClass("green");
            $(".front").addClass("red");
            $(".bottom").removeClass('bg3');
            $(".bottom").addClass('bg4');
        }
        if (index == 9) {
            $(".front").removeClass("red");
            $(".bottom").removeClass('bg4');
            $(".bottom").addClass('bg5');
        }
        if (index == 10) {
            $(".next-btn").hide();
            music.setAttribute('loop', 'true')
        }
    });

});

function next() {

    $(".loader").fadeIn();
    $(".loader h1").text(currData.text);
    setTimeout(() => $(".loader").fadeOut(), 3000);

    music.pause()
    $(".img").attr("src", currData.image);
    music.src = currData.music;
    music.play();
}

music.addEventListener('ended', () => {
    $(".next-btn").click()
})
