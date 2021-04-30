class Bullet extends ImageFramework {
    constructor(game) {
        super(game, 'bullet')
        this.setup()
    }

    setup() {
        this.speed = config.bullet_speed
    }

    update() {
        this.y -= this.speed

        let enemies = this.game.scene.enemies || []
        for (let e of enemies) {
            if (this.collide(e)) {
                this.kill()
                e.explode(e.x, e.y)
                e.kill()
            }
        }

        let playerBullets = this.scene.playerBullets || []
        let enemyBullets = this.scene.enemyBullets || []
        for (let pb of playerBullets) {
            for (let eb of enemyBullets) {
                if (pb.collide(eb)) {
                    pb.kill()
                    eb.kill()
                }
            }
        }
    }

    collide(enemy) {
        let a = this
        return twoIntersect(a, enemy)
    }

    kill() {
        this.x = -100
    }
}
