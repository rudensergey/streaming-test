export enum DRM {
    WIDEVINE = 'com.widevine.alpha',
    PLAYREADY = 'com.microsoft.playready',
    CLEARKEY = 'org.w3.clearkey',
    FAIRPLAY = 'com.apple.fps',
    FPS1 = 'com.apple.fps.1_0',
    FPS2 = 'com.apple.fps.2_0',
    FPS3 = 'com.apple.fps.3_0',
}

export enum CODECS {
    OGG = 'video/ogg;codecs="theora"',
    WEBM = 'video/webm; codecs="vp8, vorbis"',
    MPEG4 = 'video/mp4; codecs="mp4v.20.8"',
    VP8 = 'video/webm; codecs="vp8"',
    VP9 = 'video/webm; codecs="vp9"',
    H264_1 = 'video/mp4; codecs="avc1.42E01E"',
    H265_2 = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"',
    H265 = 'video/mp4; codecs="hvc1.1.L0.0"',
    HLS = 'application/vnd.apple.mpegURL',
}

export enum MEDIA_SOURSES {
    MEDIA = 'MediaSource',
    WEBKIT = 'WebKitMediaSource',
    MOZILA = 'mozMediaSource',
    MICROSOFT = 'msMediaSource',
}

export type drmType =
    | DRM.WIDEVINE
    | DRM.PLAYREADY
    | DRM.CLEARKEY
    | DRM.FAIRPLAY
    | DRM.FPS1
    | DRM.FPS2
    | DRM.FPS3;

export type SupportTypes = Boolean | 'maybe' | 'probably';

export type Config = Array<{
    initDataTypes: Array<string>;
    audioCapabilities: Array<{}>;
    videoCapabilities: Array<{}>;
}>;

export type CompatibilityTypes = Function | Boolean | 'maybe' | 'probably';
export interface ICompatibilityData {
    codecs: {
        isH265Supported: CompatibilityTypes;
        isOGGSupported: CompatibilityTypes;
        isMPEG4Supported: CompatibilityTypes;
        isH264Supported: CompatibilityTypes;
        isWEBMSupported: CompatibilityTypes;
        isVP8Supported: CompatibilityTypes;
        isVP9Supported: CompatibilityTypes;
    };

    streaming: {
        isHLSSupported: CompatibilityTypes;
        isDashSupported: Boolean;
        isMediaSourceSupported: Boolean;
    };

    drm: {
        isWidevineSupported: Function;
        isPlayerReadySupported: Function;
        isClearkeySupported: Function;
        isFairPlaySupported: Function;
    };
}
