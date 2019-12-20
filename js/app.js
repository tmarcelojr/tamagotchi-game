class Tamagotchi {
	constructor () {	}
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
			    	$('#main').attr('src', "https://media2.giphy.com/media/VP4Dx417Fgeuk/source.gif")
				}
			}
			if(this.timer % 6 === 0){
		    	this.sleepiness++
		    	if(this.sleepiness >= 10) {
			    	clearInterval(timer)
				}
			}
			if(this.timer % 4 === 0){
		    	this.boredom++
		    	if(this.boredom >= 10) {
			    	clearInterval(timer)
			    	$('#main').attr('src', "https://66.media.tumblr.com/a437d5b853dd7ab80dc0a621e968b87a/tumblr_n46h18P5Je1qegdapo6_250.gifv")
				}
			}
			if(this.timer >= 0){
				this.timer++
			}
			this.printLevels()
		},2000)

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
			$('#main').attr('src', "https://media.giphy.com/media/A1DnR26Wrbby0/giphy.gif")
			setTimeout(() => {
				$('#main').attr('src', 'https://media0.giphy.com/media/DfREKOodsXTws/source.gif')
		},2100);
	}
	else {
		$('#main').attr('src', 'https://pa1.narvii.com/6417/8f0fe22299e93dea81ff940f87ddae4a2647d22a_hq.gif')
		setTimeout(() => {
			$('#main').attr('src', 'https://media0.giphy.com/media/DfREKOodsXTws/source.gif')
		},1500);
		console.log('cant feed');
	}
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
		}, 3000)


	} 
	else {
		$('#main').attr('src', 'https://pa1.narvii.com/6417/8f0fe22299e93dea81ff940f87ddae4a2647d22a_hq.gif')
		setTimeout(() => {
			$('#main').attr('src', 'https://media0.giphy.com/media/DfREKOodsXTws/source.gif')
		},1500);
		console.log('not tired');
	}
})

$('#play').on('click', () => {
	console.log('yay');
	if(game.boredom > 0) {
		game.boredom--
		$('#main').attr('src', "https://www.rpnation.com/gallery/sonictchi-run.30251/full")
		setTimeout(() => { 
			$('#main').attr('src', 'https://66.media.tumblr.com/7dcc141bdfaff706b978d483807fd172/tumblr_n46h18P5Je1qegdapo2_500.gifv')
		},2100);		
		setTimeout(() => {
			$('#main').attr('src', 'https://media0.giphy.com/media/DfREKOodsXTws/source.gif')
		},5100);
	} 
	else {
		$('#main').attr('src', 'https://pa1.narvii.com/6417/8f0fe22299e93dea81ff940f87ddae4a2647d22a_hq.gif')
		setTimeout(() => {
			$('#main').attr('src', 'https://media0.giphy.com/media/DfREKOodsXTws/source.gif')
		},1500);
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




