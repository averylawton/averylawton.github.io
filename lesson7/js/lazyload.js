  const imgs = document.querySelectorAll('[data-src]');

  function preloadImg(img) {
      const src = img.getAttribute("data-src");
      if(!src) {
          return;
      }

      img.src = src;
  }


  function buildThresholdList() {
    let thresholds = [];
    let numSteps = 5;
  
    for (let i=1.0; i<=numSteps; i++) {
      let ratio = i/numSteps;
      thresholds.push(ratio);
    }
  
    thresholds.push(0);
    return thresholds;
  };

  const imgOptions = {
      threshold: 0,
      //rootMargin: buildThresholdList()
    rootMargin: "0px 0px -300px 0px"
  };

  const imgObserver = new IntersectionObserver((entries,
    imgObserver) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } 
            else{
                preloadImg(entry.target);
                entry.target.classList.remove('out-view');
                entry.target.classList.add('in-view');
                imgObserver.unobserve(entry.target);
            }
        })
    }, imgOptions);

    imgs.forEach(image =>{
        imgObserver.observe(image);
    });