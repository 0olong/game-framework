class Enemy extends ImageFramework {
    constructor(game) {
        let type = randomBetween(0, 4)
        let name = 'enemy' + type
        super(game, name)
        this.setup()
    }

    setup() {
        this.alive = true
        this.cooldown = 100
        this.speed = randomBetween(2, 5)
        this.x = randomBetween(0, 350)
        this.y = -randomBetween(0, 200)
    }

    update() {
        this.y += this.speed
        if (this.y > 600) {
            this.setup()
        }

        if (this.cooldown > 0) {
            this.cooldown--
        }
        let g = this.game
        if (this.alive && this.cooldown === 0) {
            this.cooldown = config.enemy_cooldown
            let b = EnemyBullet.new(g)
            b.x = this.x + this.w / 2
            b.y = this.y
            this.shootBullet(b)
        }
    }

    kill() {
        this.alive = false
        this.x = -500
    }

    shootBullet(b) {
        this.scene.enemyBullets.push(b)
        this.scene.addElement(b)
    }

    explode(x, y) {
        let g = this.game
        let ps = ParticleSystem.new(g)
        ps.x = x
        ps.y = y
        this.scene.addElement(ps)
    }
}
