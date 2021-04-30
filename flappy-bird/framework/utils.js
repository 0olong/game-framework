const e = sel => document.querySelector(sel)

const es = sel => document.querySelectorAll(sel)

const bindAll = function(selector, eventName, callback) {
    let elements = es(selector)
    for (let i = 0; i < elements.length; i++) {
        let e = elements[i]
        e.addEventListener(eventName, callback)
    }
}

const log = console.log.bind(console)

const imageFromPath = function(path) {
    let img = new Image()
    img.src = path
    return img
}

const rectIntersects01 = function(a, b) {
    let o = a
    if (b.y > o.y && b.y < o.y + o.h) {
        if (b.x > o.x && b.x < o.x + o.w) {
            return true
        }
    }
    return false
}

const rectIntersects = function(a, b) {
    // if (b.y < a.y && b.y + b.h > a.y) {
    //     if (b.x < a.x + a.w && b.x + b.w < a.x + a.w) {
    //         return true
    //     }
    // }
    // return false
    let rect1 = a
    let rect2 = b
    return rect1.x < rect2.x + rect2.w &&
        rect1.x + rect1.w > rect2.x &&
        rect1.y < rect2.y + rect2.h &&
        rect1.h + rect1.y > rect2.y
}

const aInb = function(x, x1, x2) {
    return x >= x1 && x <= x2
}

const randomBetween = function(start, end) {
    let n = Math.random() * (end - start + 1)
    return Math.floor(n + start)
}