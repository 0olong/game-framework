const loadLevel = function(game, n) {
    n = n - 1
    let level = levels[n]
    let blocks = []
    for (let i = 0; i < level.length; i++) {
        let p = level[i]
        let b = Block(game, p)
        blocks.push(b)
    }
    return blocks
}

const enableDebugMode = function(game, enable) {
    if (!enable) {
        return
    }
    window.paused = false
    window.addEventListener('keydown', function(event) {
        let k = event.key
        if (k === 'p') {
            // 暂停功能
            window.paused = !window.paused
        } else if ('1234567'.includes(k)) {
            // 为了 debug 临时加的载入关卡功能
            // blocks = loadLevel(game, Number(k))
        }
    })

    // 控制速度
    // e(' #id-input-speed').addEventListener('input', function(event) {
    //     let input = event.target
    //     // log(event, input.value)
    //     window.fps = Number(input.value)
    // })

    insertControls()
    bindEvents()
}

const templateControl = function(key, item) {
    let t = `<div class="">
                    <label>
                        <input class="auto-slider" type="range"
                            min='${item.min}'
                            max='${item.max}'
                            value="${item.value}"
                            data-value='config.${key}'>
                        ${item._comment}: <span class="label"></span>
                    </label>
                </div>`
    return t
}

const insertControls = function() {
    let div = e('.controls')
    let keys = Object.keys(config)
    for (let k of keys) {
        let item = config[k]
        let html = templateControl(k, item)
        div.insertAdjacentHTML('beforeend', html)
    }
}

const bindEvents = function() {
    bindAll('.auto-slider', 'input', function(event) {
        let target = event.target
        let bindlet = target.dataset.value
        let v = target.value
        eval(bindlet + '.value =' + v)
        //
        let label = target.closest('label').querySelector('.label')
        label.innerText = v
    })
}

const __main = function() {
    let images = {
        bg: 'img/bg_night.png',
        bird0: 'img/b0.png',
        bird1: 'img/b1.png',
        bird2: 'img/b2.png',
        ground: 'img/ground.png',
        pipe_down: 'img/pipe_down.png',
        pipe_up: 'img/pipe_up.png',
        message: 'img/message.png',
        gameover: 'img/gameover.png',

    }
    // let game = Game.instance(30, images, function(g) {
    let game = Game.instance(images, function(g) {
        // let s = Scene.new(g)
        let s = SceneTitle.new(g)
        g.runWithScene(s)
    })
    enableDebugMode(game, true)
}

__main()
