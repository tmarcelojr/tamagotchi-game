class Tamagotchi {
	constructor () {
	}
}

const game = {
	hunger: 0,
	sleepiness: 0,
	boredom: 0,
	age: 0, 
	name: '',
	timer: 0,

	startRound() {
		const timer = setInterval(() => {
			if(this.age >= 0){
		    	this.age++
		    	if(this.age >= 100) {
		    	clearInterval(timer)
		        console.log('dead at 100 years old');
				}
			}
			// Use modulo to increase different levels at different times. create a timer counter
			if(this.timer % 2 === 0){
		    	this.hunger++
		    	if(this.hunger >= 10) {
		    	clearInterval(timer)
		        console.log('died of hunger');
				}
			}
			if(this.timer % 6 === 0){
		    	this.sleepiness++
		    	if(this.sleepiness >= 10) {
		    	clearInterval(timer)
		        console.log('died from exhaustion');
				}
			}
			if(this.timer % 4 === 0){
		    	this.boredom++
		    	if(this.boredom >= 10) {
		    	clearInterval(timer)
		        console.log('died from boredom');
				}
			}
			if(this.timer >= 0){
				this.timer++
			}
			this.printLevels()
		}, 2000)

	},

	printLevels() {
		$('#age').text(this.age)
		$('#hunger').text(this.hunger)
		$('#sleepiness').text(this.sleepiness)
		$('#boredom').text(this.boredom)
		$('#timer').text(this.timer)

	},
}


$('#feed').on('click', () => {
	console.log('fed');
	if(game.hunger > 0) {
		game.hunger--		
		setTimeout(() => {
			$('#animation').attr('src', 'https://media.giphy.com/media/A1DnR26Wrbby0/giphy.gif')
			$('#animation').attr('height', '200')
		},1000);
	} else {
		console.log('cant feed');
	}
	$('#animation').attr('src', 'https://pa1.narvii.com/6550/2a57a1d5d981be177e5b7e20404c7b5c637dca61_hq.gif')
})

$('#lights-off').on('click', () => {
	console.log('turned off lights');
	if(game.sleepiness > 0) {
		game.sleepiness--
		$('body').css('background-image', 'linear-gradient(rgba(28, 21, 74, 0.8), rgba(10, 10, 10, 0.4)), url("https://i.imgur.com/hxQkAe2.jpg?1")')
		$('body').css('opacity', '0')
		setTimeout(()=> {
			$('body').css('background-image', 'linear-gradient(rgba(28, 21, 74, 0), rgba(10, 10, 10, 0)), url("https://i.imgur.com/hxQkAe2.jpg?1")')
			$('body').css('opacity', '1')
		}, 4000)


	} else {
		console.log('not tired');
	}
})

$('#play').on('click', () => {
	console.log('yay');
	if(game.boredom > 0) {
		game.boredom--
	} else {
		console.log(`i don't want to play right now`);
	}
})

$('#submit').on('click', (event) => {
	event.preventDefault()
	console.log($("#myText")[0].value);
	const name = $("#myText")[0].value;
  	$("#display-name").text(name);
	game.startRound()
	$('#submit').hide()
	$('#myText').hide()
})



