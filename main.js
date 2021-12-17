const __main = () => {
    // 这个地方是加了一个滑动条来控制帧率
    let input = document.querySelector('#id-input-speed')
    input.addEventListener('input', (event) => {
        let input = event.target
        window.fps = Number(input.value)
    })
    var images = {
        man: 'image/man.png',
        // man2: 'image/man2.png',
        m0: 'image/m-0.png',
        m1: 'image/m-1.png',
        m2: 'image/m-2.png',

        pac: 'image/pac.png',
        block: 'image/block_h.png',
        block_w: 'image/block_w.png',
    }

    var game = new Game(30, images, function(g) {
        // var s = SceneTitle.new(g)
        var s = Scene.new(g)
        g.runWithScene(s)
    })
}
__main()
