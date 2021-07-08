const NodeMediaServer = require('node-media-server');

const { HTTP_PORT, RTMP_PORT, MEDIA_ROOT, FFMPEG_ROOT } = require('./config.json');

const config = {
    rtmp: {
        port: `${RTMP_PORT}`,
        chunk_size: 60000,
        gop_cache: true,
        ping: 30,
        ping_timeout: 60
    },
    http: {
        port: `${HTTP_PORT}`,
        mediaroot: `${MEDIA_ROOT}`,
        allow_origin: '*'
    },
    trans: {
        ffmpeg: `${FFMPEG_ROOT}`,
        tasks: [
            {
                app: 'live',
                mp4: true,
                mp4Flags: '[movflags=frag_keyframe+empty_moov]',
            }
        ]
    }
};

var nms = new NodeMediaServer(config)
nms.run();
