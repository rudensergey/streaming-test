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
    const isMediaSourceSupported =
        'MediaSource' in window ||
        'WebKitMediaSource' in window ||
        'mozMediaSource' in window ||
        'msMediaSource' in window;
    const isDashSupported = isMediaSourceSupported;

    // video codecs & streaming

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
    }

    // DRM systems

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

    const DRMSystems = {
        isWidevineSupported: 'com.widevine.alpha',
        isPlayreadySupported: 'com.microsoft.playready',
        isClearKeySupported: 'org.w3.clearkey',
        isFairPlaySupported: 'com.apple.fps',
        fps1Supported: 'com.apple.fps.1_0',
        fps2Supported: 'com.apple.fps.2_0',
        fps3Supported: 'com.apple.fps.3_0',
    };

    function checkDRMSupport(systems, mediaConfig) {
        const promises = [];
        const supportList = {};

        async function checking(key, value) {
            await navigator
                .requestMediaKeySystemAccess(value, mediaConfig)
                .then(
                    () => {
                        supportList[key] = true;
                    },
                    () => {
                        supportList[key] = false;
                    }
                );
        }

        for (const key in systems) {
            if ({}.hasOwnProperty.call(systems, key)) {
                promises.push(checking(key, systems[key]));
            }
        }

        return Promise.all(promises).then(() => {
            supportList.isFairPlaySupported =
                supportList.fpsSupported ||
                supportList.fps1Supported ||
                supportList.fps2Supported ||
                supportList.fps3Supported;
            return supportList;
        });
    }

    const EMESupport = await checkDRMSupport(DRMSystems, config);

    return {
        codecs: {
            isH265Supported,
            isOGGSupported,
            isMPEG4Supported,
            isH264Supported,
            isWEBMSupported,
            isVP8Supported,
            isVP9Supported,
        },
        streaming: { isHLSSupported, isDashSupported, isMediaSourceSupported },
        EMESupport,
    };
}

frodo().then((data) => {
    const {
        codecs: {
            isH265Supported,
            isOGGSupported,
            isMPEG4Supported,
            isH264Supported,
            isWEBMSupported,
            isVP8Supported,
            isVP9Supported,
        },
        streaming: { isHLSSupported, isDashSupported, isMediaSourceSupported },
        EMESupport: {
            isWidevineSupported,
            isPlayreadySupported,
            isClearKeySupported,
            isFairPlaySupported,
            fpsSupported,
            fps1Supported,
            fps2Supported,
            fps3Supported,
        },
    } = data;

    function supportIndicator(value, id) {
        document.getElementById(id).innerText = value;
        value
            ? (document.getElementById(id).className = 'enable')
            : (document.getElementById(id).className = 'disable');
    }

    // drm

    supportIndicator(isWidevineSupported, 'widevine');
    supportIndicator(isFairPlaySupported, 'fairplay');
    supportIndicator(isClearKeySupported, 'clearkey');
    supportIndicator(isPlayreadySupported, 'playerready');

    // streaming

    supportIndicator(isHLSSupported, 'hls');
    supportIndicator(isDashSupported, 'dash');
    supportIndicator(isMediaSourceSupported, 'media');

    // codecs

    supportIndicator(isMPEG4Supported, 'mpeg4');
    supportIndicator(isH264Supported, 'h264');
    supportIndicator(isH265Supported, 'h265');
    supportIndicator(isOGGSupported, 'ogg');
    supportIndicator(isWEBMSupported, 'webm');
    supportIndicator(isVP8Supported, 'vp8');
    supportIndicator(isVP9Supported, 'vp9');
});
