class Pipes {
    constructor(game) {
        this.game = game
        this.setup()
        this.addPipes()
    }

    static new(game) {
        return new this(game)
    }

    setup() {
        this.pipes = []
        this.pipeSpace = 150
        this.pipeGap = 200
        this.columsOfPipe = 3
    }

    reset() {
        for (let i = 0; i < this.columsOfPipe; i++) {
            let index = i * 2
            let p1 = this.pipes[index]
            let p2 = this.pipes[index + 1]
            p1.x = 500 + i * this.pipeGap
            p1.y = randonBetween(-150, 0)
            this.resetPipesPostion(p1, p2)
        }
    }

    addPipes() {
        let game = this.game
        for (let i = 0; i < this.columsOfPipe; i++) {
            let p1 = ImageFramework.new(game, 'pipe_down')

            p1.x = 500 + i * this.pipeGap
            p1.y = randomBetween(-150, 0)

            let p2 = ImageFramework.new(game, 'pipe_up')

            this.resetPipesPosition(p1, p2)
            this.pipes.push(p1)
            this.pipes.push(p2)
        }
    }

    resetPipesPosition(p1, p2) {
        p2.x = p1.x
        p2.y = p1.y + p1.h + this.pipeSpace
    }

    debug() {
        this.pipeGap = config.pipeGap.value
        this.pipeSpace = config.pipe_space.value
        window.fps = config.fps.value
    }

    update() {
        for (let i = 0; i < this.columsOfPipe; i++) {
            let index = i * 2
            let p1 = this.pipes[index]
            let p2 = this.pipes[index + 1]
            p1.x -= 5
            this.resetPipesPosition(p1, p2)
            if (p1.x < -p1.w) {
                p1.x = this.pipeGap * this.columsOfPipe
                this.resetPipesPosition(p1, p2)
            }

        }
        window.pipesArray = this.pipes
    }

    draw() {
        let context = this.game.context
        for (let p of this.pipes) {
            context.drawImage(p.texture, p.x, p.y, p.w, p.h)
        }
    }
}
