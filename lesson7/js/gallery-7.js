const imgs = document.querySelectorAll('[data-src]');

function preloadImg(img) {
	const src = img.getAttribute("data-src");
	if (!src) {
		return;
	}

	img.src = src;
}

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
		} else {
			preloadImg(entry.target);
			entry.target.classList.remove('out-view');
			entry.target.classList.add('in-view');
			imgObserver.unobserve(entry.target);
		}
	});
}, imgOptions);

imgs.forEach(image => {
	imgObserver.observe(image);
});

//_________________________________________________________________________________________________________//

function() {
    var timeSinceLastSessionIndex = 5;

    var globalSendHitTaskName = '_ga_originalSendHitTask';

    return function (customTaskModel) {

        window[globalSendHitTaskName] = window[globalSendHitTaskName] || customTaskModel.get('sendHitTask');
        var tempFieldObject, dimensionIndex, count, ga, tracker, decorateTimer, decorateIframe, iframe;

        // timeSinceLastSessionIndex
        var ni = (customTaskModel.get('nonInteraction') === true) ? true : false;

        if (typeof timeSinceLastSessionIndex === 'number' && ni === false) {
            var sessionTimeout = 30; // minutes
            sessionTimeout = sessionTimeout * 60 * 1000; // milliseconds
            var lastSession = window.localStorage.getItem("lastSession");
            var dateNow = new Date();
            var timeNow = dateNow.getTime(); // milliseconds
            var elapsed = (lastSession == undefined) ? 0 : (timeNow - lastSession); // milliseconds
            var time = undefined;

            window.localStorage.setItem('lastSession', timeNow);

            if (elapsed > sessionTimeout) {
                time = elapsed / 1000; // seconds
            }

            customTaskModel.set('metric' + timeSinceLastSessionIndex, time);
        }
        // /timeSinceLastSessionIndex

        customTaskModel.set('sendHitTask', function (sendHitTaskModel) {

            var originalSendHitTaskModel = sendHitTaskModel,
                originalSendHitTask = window[globalSendHitTaskName];

            var hitPayload, hitPayloadParts, param, val, regexI, trackingId, snowplowVendor, snowplowVersion, snowplowPath, request, originalTrackingId, hitType, nonInteraction, d;

            try {
                originalSendHitTask(sendHitTaskModel);

            } catch (e) {
                originalSendHitTask(originalSendHitTaskModel);
            }

        });

    };
}