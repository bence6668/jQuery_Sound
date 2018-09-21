            $(Document).ready(function(){
            

            var audio = new Audio("Epic_Unease.mp3");


            var one = new Audio("Galactic_Damages.mp3");
            var two = new Audio("Finding_the_Balance.mp3");
            var three = new Audio("Epic_Unease.mp3");
            var four = new Audio("Blue_Skies.mp3");

            var sounds;

            $(document).ready(function () {
                sounds = [one, two, three, four];
            });

            $(document).keydown(function (e) {
                switch (e.which) {
                    case 49:
                        $(".sound").css("font-weight", "initial");
                        $("#one").css("font-weight", "bold");
                        pauseAllSounds();

                        one.play();
                        break;
                    case 50:
                        $(".sound").css("font-weight", "initial");
                        $("#two").css("font-weight", "bold");

                        pauseAllSounds();

                        two.play();
                        break;
                    case 51:
                        $(".sound").css("font-weight", "initial");
                        $("#three").css("font-weight", "bold");

                        pauseAllSounds();
                        three.play();
                        break;
                    case 52:
                        $(".sound").css("font-weight", "initial");
                        $("#four").css("font-weight", "bold");

                        pauseAllSounds();
                        four.play();
                        break;
                    case 81:
                        $(".sound").css("font-weight", "initial");
                        stopAllSounds();
                        break;
                    default:
                        alert("Bitte nur 1, 2, 3, 4 oder Q eingeben." )
                        alert(e.wich);
                        break;
                }

            });

            function stopAllSounds() {
                for (var i = 0; i < sounds.length; i++) {
                    sounds[i].pause();
                    sounds[i].currentTime = 0;
                }
            }

            function pauseAllSounds() {
                for (var i = 0; i < sounds.length; i++) {
                    sounds[i].pause();
                }
            }

            });

           

