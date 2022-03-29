function main () {
    // scene camera renderer
    const canvas = document.querySelector('#c')
    
    const fov = 50
    // const aspect = 2
    const aspect = canvas.clientWidth / canvas.clientHeight
    const near = 0.1
    const far = 2000

    const camera = new THREE.PerspectiveCamera(fox, aspect, near, far)

    const renderer = new THREE.WebGLRenderer({ canvas })
    const width = canvas.clientWidth
    const height = canvas.clientHeight
    renderer.setSize(width, height)

    const scene = new THREE.Scene()
    const loader = new THREE.TextureLoader()
    loader.load(
        'https image'
        () => {
            
        }
    )
}

main()