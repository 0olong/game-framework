class Player extends ImageFramework {
    constructor(game) {
        super(game, 'player')
        this.setup()
    }

    setup() {
        this.speed = 5
        this.cooldown = 0
    }

    update() {
        this.speed = config.player_speed
        if (this.cooldown > 0) {
            this.cooldown--
        }

        let enemies = this.game.scene.enemies || []
        for (let e of enemies) {
            if (this.collide(e)) {
                this.kill()
            }
        }
    }

    fire() {
        if (this.cooldown === 0) {
            this.cooldown = config.fire_cooldown
            let x = this.x + this.w / 2
            let y = this.y
            let b = Bullet.new(this.game)
            b.x = x
            b.y = y
            // this.scene.addElement(b)
            this.shootBullet(b)
        }
    }

    moveLeft() {
        this.x -= this.speed
    }

    moveRight() {
        this.x += this.speed
    }

    moveUp() {
        this.y -= this.speed
    }

    moveDown() {
        this.y += this.speed
    }

    collide(enemy) {
        let a = this
        return twoIntersect(a, enemy)
    }

    kill() {
        let game = this.game
        let s = SceneEnd.new(game)
        game.replaceScene(s)
    }

    shootBullet(b) {
        this.scene.playerBullets.push(b)
        this.scene.addElement(b)
    }
}
