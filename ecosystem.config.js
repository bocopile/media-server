/*
    pm2 설정 및 실행 스크립트
*/

const { SERVICE_PORT } = require("./config.json");

module.exports = {
    apps: [
        {
            // 프로세스 이름
            name: "media_server",
            // 실행 파일 경로
            script: "./app.js",
            // CPU 만큼 프로세스 생성, 0은 CPU 최대까지 사용
            instances: 6,
            // 클러스터 모드로 실행
            exec_mode: "fork", //cluster // fork
            // process.send('ready') 를 대기
            wait_ready: true,
            // 변동 사항이 있을 때, 재시작, 실제 서비스 일 때는 false로 설정
            watch: true,
            // 앱이 수신 대기하지 않는 경우 재로드를 강제 실행하기 전의 시간(ms), 각각의 클러스터를 실행하는데 걸리는 시간 10000 -> 10초
            listen_timeout: 1000,
            // 마지막 SIGKLL 을 보내기 전의 시간(ms), 강제로 서버를 재실행하는 옵션, 주석처리로 둠
            //kill_timeout: 5000,

            // 개발 환경에서의 설정
            env: {
                PORT: SERVICE_PORT,
                NODE_ENV: "development",
            },
            // 배포 환경에서의 설정
            env_production: {
                PORT: SERVICE_PORT,
                NODE_ENV: "production",
            },
        },
    ],
};