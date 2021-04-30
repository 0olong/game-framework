class EnemyBullet extends ImageFramework {
    constructor(game) {
        super(game, 'bullet')
        this.setup()
    }

    setup(game) {
        this.speed = config.bullet_speed
    }

    update(game) {
        this.y += this.speed

        let p = this.scene.player
        if (this.collide(p)) {
            this.kill()
            p.kill()
        }
    }

    kill() {
        this.x = -100
    }

    collide(enemy) {
        let a = this
        return twoIntersect(a, enemy)
    }
}
