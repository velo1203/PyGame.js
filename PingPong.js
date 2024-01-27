// 메인 게임 라이브러리를 임포트합니다.
import Game from "./library/Main.js";

// Game 인스턴스를 생성하고, 'canvas'라는 ID를 가진 HTML 캔버스 요소와 연결합니다.
const game = new Game("canvas");
// 캔버스를 전체 화면으로 설정합니다.
game.display.fullScreen();
// 웹 페이지의 제목을 "Game"으로 설정합니다.
game.display.setCaption("Game");

// 패들 객체를 정의합니다. 이 객체에는 위치, 크기, 색상 정보가 포함됩니다.
const paddle = {
    x: 300, // 시작 x 좌표
    y: game.display.height - 100, // 화면 하단에서 100px 위
    width: 200, // 폭
    height: 20, // 높이
    color: [0, 0, 0] // 색상 (RGB 형식)
};

// 공 객체를 정의합니다. 위치, 반지름, 색상, 이동 속도 정보가 포함됩니다.
const ball = {
    x: 300, // 시작 x 좌표
    y: 300, // 시작 y 좌표
    radius: 10, // 반지름
    color: [0, 0, 0], // 색상 (RGB 형식)
    transX: 5, // x축 이동 속도
    transY: -5 // y축 이동 속도
};

// 플레이어의 점수를 저장하는 변수입니다.
let point = 0;

// 공의 위치를 업데이트하는 함수입니다.
function updateBallPosition() {
    ball.x += ball.transX;
    ball.y += ball.transY;
}

// 충돌 처리를 담당하는 함수입니다.
function handleCollisions() {
    // 벽과의 충돌 처리
    if (ball.x + ball.radius > game.display.width || ball.x - ball.radius < 0) ball.transX *= -1;
    if (ball.y - ball.radius < 0) ball.transY *= -1;

    // 패들과의 충돌 처리
    if (game.collision.check(game.draw.rect(paddle.x, paddle.y, paddle.width, paddle.height, paddle.color), game.draw.circle(ball.x, ball.y, ball.radius, ball.color))) {
        ball.transY *= -1; // 방향 전환
        ball.y = paddle.y - ball.radius; // 공의 위치 조정
        point += 1; // 점수 증가
    }

    // 하단 경계를 넘어가면 게임 오버 처리
    if (ball.y - ball.radius > game.display.height) {
        alert("Game Over! Press OK to restart.");
        resetGame();
    }
}

// 게임을 재시작할 때 호출되는 함수입니다.
function resetGame() {
    ball.x = 300;
    ball.y = 300;
    ball.transX = 5;
    ball.transY = -5;
    point = 0; // 점수 초기화
}

// 사용자 입력 (마우스 이동)을 처리하는 함수입니다.
function handleInput() {
    game.event.getEvents().forEach(event => {
        if (event.type === "Mouse_move") {
            paddle.x = Math.max(Math.min(event.position.x - paddle.width / 2, game.display.width - paddle.width), 0); // 패들 위치 조정
        }
    });
}

// 게임의 그래픽 요소들을 그리는 함수입니다.
function render() {
    game.screen.fill([255, 255, 255]); // 배경을 흰색으로 채움
    game.draw.rect(paddle.x, paddle.y, paddle.width, paddle.height, paddle.color); // 패들 그리기
    game.draw.circle(ball.x, ball.y, ball.radius, ball.color); // 공 그리기
    game.draw.text(`Point: ${point}`, 50, 100, 50, [0, 0, 0]); // 점수 표시
}

// 게임 루프 함수입니다. 이 함수는 게임의 상태를 업데이트하고, 렌더링을 반복적으로 수행합니다.
function loop() {
    updateBallPosition();
    handleCollisions();
    handleInput();
    render();
    game.display.update(loop); // 다음 프레임을 위해 loop 함수를 다시 호출합니다.
}

// 게임 루프를 시작합니다.
loop();
