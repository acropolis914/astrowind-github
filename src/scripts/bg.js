var granimInstance = new Granim({
    element: '#canvas-image-blending',
    direction: 'top-bottom',
    isPausedWhenNotInView: true,
    ximage : {
        source: '/images/bg-stars.jpg',
        blendingMode: 'normal'
    },
    states : {
        "default-state": {
            gradients: [
                ['#23383f', '#002144'],
                ['#002144','#23383f'],
                ['#003644','#074437']
            ],
            transitionSpeed: 7000
        }
    }
  });