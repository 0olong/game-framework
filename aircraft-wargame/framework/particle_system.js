class Particle extends ImageFramework {
    constructor(game) {
        super(game, 'fire')
        this.setup()
    }

    setup() {
        this.life = 5
    }

    init(x, y, vx, vy) {
        this.x = x
        this.y = y
        this.vx = vx
        this.vy = vy
    }

    update() {
        this.life--
        this.x += this.vx
        this.y += this.vy
        let factor = 0.2
        this.vx += factor * this.vx
        this.vy += factor * this.vy
    }
}

class ParticleSystem {
    constructor(game) {
        this.game = game
        this.setup()
    }

    static new(game) {
        return new this(game)
    }

    setup() {
        this.duration = 50
        this.x = 150
        this.y = 200
        this.numberOfParticles = 50
        this.particles = []
    }

    update() {
        this.duration--
        if (this.particles.length < this.numberOfParticles) {
            let p = Particle.new(this.game)
            let s = 4
            let vx = randomBetween(-s, s)
            let vy = randomBetween(-s, s)
            p.init(this.x, this.y, vx, vy)
            this.particles.push(p)
        }

        for (let p of this.particles) {
            p.update()
        }

        this.particles = this.particles.filter(p => p.life > 0)
    }

    draw() {
        if (this.duration < 0) {
            return
        }
        for (let p of this.particles) {
            p.draw()
        }
    }
}
