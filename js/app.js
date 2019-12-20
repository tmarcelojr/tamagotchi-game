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
		}, 1000)

	},

	printLevels() {
		$('#age').text(this.age)
		$('#hunger').text(this.hunger)
		$('#sleepiness').text(this.sleepiness)
		$('#boredom').text(this.boredom)
		$('#timer').text(this.timer)

	},

	// feed() {
	// 	$('#feed').on('click', () => {
	// 		console.log('you fed so and so');
	// 		if(this.hunger < 10) {
	// 			this.hunger++
	// 		}
	// 		else {
	// 			console.log('full');
	// 		}
	// 		return
	// 	})
	// }
}


$('#feed').on('click', () => {
	console.log('fed');
	if(game.hunger > 0) {
		game.hunger--
	} else {
		console.log('cant feed');
	}
})

$('#lights-off').on('click', () => {
	console.log('turned off lights');
	if(game.sleepiness > 0) {
		game.sleepiness--
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




game.startRound()

