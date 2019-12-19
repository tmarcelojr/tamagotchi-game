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
		const ageTimer = setInterval(() => {
	  	this.age++
	  	this.printLevels()
		}, 1000)
		this.timer = ageTimer
	},


	printLevels() {
		$('.age').text(this.age)
	}
}

game.startRound()


