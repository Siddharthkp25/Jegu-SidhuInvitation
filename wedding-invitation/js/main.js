

window.addEventListener('load', () => { // wait to load the page
  setTimeout(() => {
	$('.overlay').css('display','none');
	 $('body').css('overflow-y','scroll');
    console.log('loaded');
  }, 150)
})

function makeTimer() {

	//		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");	
		var endTime = new Date("24 May 2023 9:56:00 GMT+01:00");			
			endTime = (Date.parse(endTime) / 1000);

			var now = new Date();
			now = (Date.parse(now) / 1000);

			var timeLeft = endTime - now;

			var days = Math.floor(timeLeft / 86400); 
			var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
			var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
			var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
  
			if (hours < "10") { hours = "0" + hours; }
			if (minutes < "10") { minutes = "0" + minutes; }
			if (seconds < "10") { seconds = "0" + seconds; }

			$("#days").html(days + "<span>Days</span>");
			$("#hours").html(hours + "<span>Hours</span>");
			$("#minutes").html(minutes + "<span>Minutes</span>");
			$("#seconds").html(seconds + "<span>Seconds</span>");		

	}

	setInterval(function() { makeTimer(); }, 1000);	 

// var audio = document.getElementById("my_audio");
var btn = document.getElementById("myBtn");

//declare unmute icon variable
let unmuteIcon = '<i class="fas fa-volume-up"></i>'

//declare mute icon variable
let muteIcon = '<i class="fas fa-volume-mute" onclick="mute();"></i>'

// function myFunction() {
//   // toggle the muted property of the video element
//   video.muted = !video.muted;

//   // if the video is muted, set the btn.innerHTML to unmuteIcon
//   // otherwise, set it to the muteIcon
//   if (video.muted) {
//   	video.play();
//   	console.log("clicked");
//     btn.innerHTML = unmuteIcon;
//   } else {
//   	video.play();
//     btn.innerHTML = muteIcon;
//   }
// }

// function myFunction(){
// 	document.getElementById("my_audio").play();
// 	btn.innerHTML = muteIcon;
// }


$('#myBtn').click(function(){

if( $("#my_audio").prop('muted') ) {
          $("#my_audio").prop('muted', false);
          btn.innerHTML = unmuteIcon;
          document.getElementById("my_audio").play();
      // or toggle class, style it with a volume icon sprite, change background-position
    } else {
      $("#my_audio").prop('muted', true);
      btn.innerHTML = muteIcon;
      document.getElementById("my_audio").pause();
    }

});


