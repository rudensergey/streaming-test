async function frodo() {
    const testVideoElement = document.createElement('video');
    let isOGGSupported;
    let isWEBMSupported;
    let isMPEG4Supported;
    let isVP8Supported;
    let isVP9Supported;
    let isH264Supported;
    let isH265Supported;
    let isHLSSupported;
    let isMediaSourceSupported;

    // video codecs support

    if (testVideoElement.canPlayType) {
        isOGGSupported =
            testVideoElement.canPlayType('video/ogg;codecs="theora"') || false;

        isWEBMSupported =
            testVideoElement.canPlayType('video/webm; codecs="vp8, vorbis"') ||
            false;

        isMPEG4Supported =
            testVideoElement.canPlayType('video/mp4; codecs="mp4v.20.8"') ||
            false;

        isVP8Supported =
            testVideoElement.canPlayType('video/webm; codecs="vp8"') || false;

        isVP9Supported =
            testVideoElement.canPlayType('video/webm; codecs="vp9"') || false;

        isH264Supported =
            testVideoElement.canPlayType('video/mp4; codecs="avc1.42E01E"') ||
            testVideoElement.canPlayType(
                'video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
            ) ||
            false;

        isH265Supported =
            testVideoElement.canPlayType('video/mp4; codecs="hvc1.1.L0.0"') ||
            testVideoElement.canPlayType('video/mp4; codecs="hev1.1.L0.0"') ||
            false;

        isHLSSupported =
            testVideoElement.canPlayType('application/vnd.apple.mpegURL') ||
            false;

        isMediaSourceSupported =
            'MediaSource' in window
                ? true
                : 'WebKitMediaSource' in window ||
                  'mozMediaSource' in window ||
                  'msMediaSource' in window
                ? true
                : false;
    }

    /* streaming */

    const config = [
        {
            initDataTypes: ['cenc'],
            audioCapabilities: [
                {
                    contentType: 'audio/mp4;codecs="mp4a.40.2"',
                },
            ],
            videoCapabilities: [
                {
                    contentType: 'video/mp4;codecs="avc1.42E01E"',
                },
            ],
        },
    ];

    const isWidevineSupported = await navigator
        .requestMediaKeySystemAccess('com.widevine.alpha', config)
        .then(
            () => true,
            () => false
        );
    const isPlayreadySupported = await navigator
        .requestMediaKeySystemAccess('com.microsoft.playready', config)
        .then(
            () => true,
            () => false
        );
    const isClearKeySupported = await navigator
        .requestMediaKeySystemAccess('org.w3.clearkey', config)
        .then(
            () => true,
            () => false
        );
    const fpsSupported = await navigator
        .requestMediaKeySystemAccess('com.apple.fps', config)
        .then(
            () => true,
            () => false
        );
    const fps1Supported = await navigator
        .requestMediaKeySystemAccess('com.apple.fps.1_0', config)
        .then(
            () => true,
            () => false
        );
    const fps2Supported = await navigator
        .requestMediaKeySystemAccess('com.apple.fps.2_0', config)
        .then(
            () => true,
            () => false
        );
    const fps3Supported = await navigator
        .requestMediaKeySystemAccess('com.apple.fps.3_0', config)
        .then(
            () => true,
            () => false
        );
    const isFairPlaySupported =
        fpsSupported || fps1Supported || fps2Supported || fps3Supported;

    return {
        isH265Supported,
        isOGGSupported,
        isMPEG4Supported,
        isH264Supported,
        isWEBMSupported,
        isVP8Supported,
        isVP9Supported,
        isHLSSupported,
        isMediaSourceSupported,
        EMESupport: {
            isWidevineSupported,
            isPlayreadySupported,
            isClearKeySupported,
            isFairPlaySupported,
            fairPlayVersions: {
                fpsSupported,
                fps1Supported,
                fps2Supported,
                fps3Supported,
            },
        },
    };
}

frodo().then((data) => {
    const {
        isMPEG4Supported,
        isH264Supported,
        isH265Supported,
        isHLSSupported,
        isOGGSupported,
        isWEBMSupported,
        isVP8Supported,
        isVP9Supported,
        isMediaSourceSupported,
        EMESupport: {
            isWidevineSupported,
            isClearKeySupported,
            isFairPlaySupported,
            isPlayreadySupported,
        },
    } = data;

    // drm

    document.getElementById('widevine').innerText = isWidevineSupported;
    isWEBMSupported
        ? (document.getElementById('widevine').className = 'enable')
        : (document.getElementById('widevine').className = 'disable');

    document.getElementById('fairplay').innerText = isFairPlaySupported;
    isFairPlaySupported
        ? (document.getElementById('fairplay').className = 'enable')
        : (document.getElementById('fairplay').className = 'disable');

    document.getElementById('clearkey').innerText = isClearKeySupported;
    isClearKeySupported
        ? (document.getElementById('clearkey').className = 'enable')
        : (document.getElementById('clearkey').className = 'disable');

    document.getElementById('playerready').innerText = isPlayreadySupported;
    isPlayreadySupported
        ? (document.getElementById('playerready').className = 'enable')
        : (document.getElementById('playerready').className = 'disable');

    // streaming

    document.getElementById('hls').innerText = isHLSSupported;
    isHLSSupported
        ? (document.getElementById('hls').className = 'enable')
        : (document.getElementById('hls').className = 'disable');

    document.getElementById('media').innerText = isMediaSourceSupported;
    isMediaSourceSupported
        ? (document.getElementById('media').className = 'enable')
        : (document.getElementById('media').className = 'disable');

    // codecs

    document.getElementById('mpeg4').innerText = isMPEG4Supported;
    isMPEG4Supported
        ? (document.getElementById('mpeg4').className = 'enable')
        : (document.getElementById('mpeg4').className = 'disable');

    document.getElementById('h264').innerText = isH264Supported;
    isH264Supported
        ? (document.getElementById('h264').className = 'enable')
        : (document.getElementById('h264').className = 'disable');

    document.getElementById('h265').innerText = isH265Supported;
    isH265Supported
        ? (document.getElementById('h265').className = 'enable')
        : (document.getElementById('h265').className = 'disable');

    document.getElementById('ogg').innerText = isOGGSupported;
    isOGGSupported
        ? (document.getElementById('ogg').className = 'enable')
        : (document.getElementById('ogg').className = 'disable');

    document.getElementById('webm').innerText = isWEBMSupported;
    isWEBMSupported
        ? (document.getElementById('webm').className = 'enable')
        : (document.getElementById('webm').className = 'disable');

    document.getElementById('vp8').innerText = isVP8Supported;
    isVP8Supported
        ? (document.getElementById('vp8').className = 'enable')
        : (document.getElementById('vp8').className = 'disable');

    document.getElementById('vp9').innerText = isVP9Supported;
    isVP9Supported
        ? (document.getElementById('vp9').className = 'enable')
        : (document.getElementById('vp9').className = 'disable');
});
