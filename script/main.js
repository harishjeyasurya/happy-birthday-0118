// Password Protection Logic
window.addEventListener('load', () => {
    const submitBtn = document.getElementById('submitPassword');
    const passwordInput = document.getElementById('passwordInput');
    const errorMessage = document.getElementById('error-message');
    const passwordOverlay = document.getElementById('password-overlay');
    const musicBtn = document.getElementById('music-control');
    const audio = document.querySelector('.song');

    // Music Button Logic
    musicBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            musicBtn.innerHTML = '⏸️';
        } else {
            audio.pause();
            musicBtn.innerHTML = '🎵';
        }
    });

    const checkPassword = () => {
        const password = passwordInput.value;
        if (password === '01022007') {
            // Correct password

            // 1. Play Audio Immediately (Required for Mobile/iOS)
            if (audio) {
                audio.play().then(() => {
                    console.log("Audio started successfully");
                    musicBtn.innerHTML = '⏸️'; // Set icon to pause
                }).catch(error => {
                    console.log("Audio autoplay failed (user can use music btn):", error);
                    musicBtn.innerHTML = '🎵'; // Set icon to play
                });
                musicBtn.style.display = 'block'; // Show control
            }

            // 2. Hide Overlay
            passwordOverlay.style.opacity = '0';
            setTimeout(() => {
                passwordOverlay.style.display = 'none';
                // 3. Start Animation
                animationTimeline();
            }, 500);
        } else {
            // Incorrect password
            errorMessage.style.display = 'block';
            passwordInput.value = '';
        }
    };

    submitBtn.addEventListener('click', checkPassword);

    passwordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            checkPassword();
        }
    });
});


// animation timeline
const animationTimeline = () => {
    // split chars that needs to be animated individually
    const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
    const hbd = document.getElementsByClassName("wish-hbd")[0];

    textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
        .split("")
        .join("</span><span>")}</span>`;

    hbd.innerHTML = `<span>${hbd.innerHTML
        .split("")
        .join("</span><span>")}</span>`;

    const ideaTextTrans = {
        opacity: 0,
        y: -20,
        rotationX: 5,
        skewX: "15deg"
    }

    const ideaTextTransLeave = {
        opacity: 0,
        y: 20,
        rotationY: 5,
        skewX: "-15deg"
    }

    // timeline
    const tl = new TimelineMax();

    tl.to(".container", 0.6, {
        visibility: "visible"
    })
        .from(".one", 0.7, {
            opacity: 0,
            y: 10
        })
        .from(".two", 0.4, {
            opacity: 0,
            y: 10
        })
        .to(".one",
            0.7,
            {
                opacity: 0,
                y: 10
            },
            "+=3.5")
        .to(".two",
            0.7,
            {
                opacity: 0,
                y: 10
            },
            "-=1")
        .from(".three", 0.7, {
            opacity: 0,
            y: 10
        })
        .to(".three",
            0.7,
            {
                opacity: 0,
                y: 10
            },
            "+=3")
        .from(".four", 0.7, {
            scale: 0.2,
            opacity: 0,
        })
        .from(".fake-btn", 0.3, {
            scale: 0.2,
            opacity: 0,
        })
        .staggerTo(
            ".hbd-chatbox span",
            1.5, {
            visibility: "visible",
        },
            0.05
        )
        .to(".fake-btn", 0.1, {
            backgroundColor: "rgb(127, 206, 248)",
        },
            "+=4")
        .to(
            ".four",
            0.5, {
            scale: 0.2,
            opacity: 0,
            y: -150
        },
            "+=1")
        .from(".idea-1", 0.7, ideaTextTrans)
        .to(".idea-1", 0.7, ideaTextTransLeave, "+=2.5")
        .from(".idea-2", 0.7, ideaTextTrans)
        .to(".idea-2", 0.7, ideaTextTransLeave, "+=2.5")
        .from(".idea-3", 0.7, ideaTextTrans)
        .to(".idea-3 strong", 0.5, {
            scale: 1.2,
            x: 10,
            backgroundColor: "rgb(21, 161, 237)",
            color: "#fff",
        })
        .to(".idea-3", 0.7, ideaTextTransLeave, "+=2.5")
        .from(".idea-4", 0.7, ideaTextTrans)
        .to(".idea-4", 0.7, ideaTextTransLeave, "+=2.5")
        .from(
            ".idea-5",
            0.7, {
            rotationX: 15,
            rotationZ: -10,
            skewY: "-5deg",
            y: 50,
            z: 10,
            opacity: 0,
        },
            "+=1.5"
        )
        .to(
            ".idea-5 span",
            0.7, {
            rotation: 90,
            x: 8,
        },
            "+=1.4"
        )
        .to(
            ".idea-5",
            0.7, {
            scale: 0.2,
            opacity: 0,
        },
            "+=2"
        )
        .staggerFrom(
            ".idea-6 span",
            0.8, {
            scale: 3,
            opacity: 0,
            rotation: 15,
            ease: Expo.easeOut,
        },
            0.2
        )
        .staggerTo(
            ".idea-6 span",
            0.8, {
            scale: 3,
            opacity: 0,
            rotation: -15,
            ease: Expo.easeOut,
        },
            0.2,
            "+=1.5"
        )
        .staggerFromTo(
            ".baloons img",
            2.5, {
            opacity: 0.9,
            y: 1400,
        }, {
            opacity: 1,
            y: -1000,
        },
            0.2
        )
        .from(
            ".profile-picture",
            0.5, {
            scale: 3.5,
            opacity: 0,
            x: 25,
            y: -25,
            rotationZ: -45,
        },
            "-=2"
        )
        .from(".hat", 0.5, {
            x: -100,
            y: 350,
            rotation: -180,
            opacity: 0,
        })
        .staggerFrom(
            ".wish-hbd span",
            0.7, {
            opacity: 0,
            y: -50,
            // scale: 0.3,
            rotation: 150,
            skewX: "30deg",
            ease: Elastic.easeOut.config(1, 0.5),
        },
            0.1
        )
        .staggerFromTo(
            ".wish-hbd span",
            0.7, {
            scale: 1.4,
            rotationY: 150,
        }, {
            scale: 1,
            rotationY: 0,
            color: "#ff69b4",
            ease: Expo.easeOut,
        },
            0.1,
            "party"
        )
        .from(
            ".wish h5",
            0.5, {
            opacity: 0,
            y: 10,
            skewX: "-15deg",
        },
            "party"
        )
        .staggerTo(
            ".eight svg",
            1.5, {
            visibility: "visible",
            opacity: 0,
            scale: 80,
            repeat: 3,
            repeatDelay: 1.4,
        },
            0.3
        )
        .to(".six", 0.5, {
            opacity: 0,
            y: 30,
            zIndex: "-1",
        });

    // Restart Animation on click


    // --- NEW FEATURES ---

    // 1. Floating Hearts Logic
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 2 + "s"; // 2-5s
        heart.innerText = '❤';
        document.querySelector('.floating-hearts').appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    // Start generating hearts immediately
    setInterval(createHeart, 300);

    // 2. Add Gallery reveal to timeline (Slideshow)
    // 2. Add Gallery reveal to timeline (Slideshow)
    tl.to(".ten", 1, {
        visibility: "visible",
        opacity: 1,
        y: 0
    }, "+=1");

    // Animate decorations
    tl.to(".deco-flower, .deco-star", 1, { opacity: 1, rotation: 10, ease: "power1.inOut" }, "-=1");

    // Animate images one by one
    const images = document.querySelectorAll('.gallery-img');
    images.forEach((img) => {
        // RESET styles for cross-rotation handled by CSS, GSAP scale works on top usually.
        tl.to(img, 1, { opacity: 1 }) // Fade In
            .to(img, 3, { scale: 1.05 }) // Subtle zoom
            .to(img, 1, { opacity: 0 }); // Fade Out
    });

    // Show message briefly
    tl.to(".gallery-message", 1, { opacity: 1, y: 0 })
        .to(".gallery-message", 2, { opacity: 0, y: -20 }, "+=2");

    // Hide Gallery & Decorations
    tl.to(".ten, .decorations", 1, {
        opacity: 0,
        y: -30,
        zIndex: "-1"
    });

    // Seamless Transition to Letter
    // Slide up the letter while the gallery is fading out
    tl.to(".eleven", 1.5, {
        visibility: "visible",
        opacity: 1,
        y: 0
    }, "-=0.5"); // Overlap by 0.5s

    tl.call(fireConfetti); // 3. Fire Confetti when DIARY appears

    function fireConfetti() {
        if (typeof confetti === 'function') {
            var duration = 5 * 1000;
            var animationEnd = Date.now() + duration;
            var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

            var interval = setInterval(function () {
                var timeLeft = animationEnd - Date.now();

                if (timeLeft <= 0) {
                    return clearInterval(interval);
                }

                var particleCount = 50 * (timeLeft / duration);
                // since particles fall down, start a bit higher than random
                confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
                confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
            }, 250);
        }
    }

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }
}