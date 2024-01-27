

# **Arcan**
## **Introduction**
이 라이브러리는 자바스크립트 언어로 2D 게임을 만들 수 있는 라이브러리입니다.
매우 간단한 구조를 가지고있습니다. 또한 Pygame 라이브러리와 구조가 매우 유사합니다.

기본적으로 `canvas`를 사용합니다. `canvas`는 `HTML`의 요소입니다. `canvas`를 사용하면 `HTML`에서 그래픽을 그릴 수 있습니다.

이 라이브러리를 만든 목적은 보다 더 쉽게 2D 게임을 웹 기반에서 만듣기 위함입니다.

## 목차
* [Getting started](#getting-started)
* [Game.Display](#gamedisplay)
* [Game.Event](#gameevent)
* [Game.Screen](#gamescreen)
* [Game.Draw](#gamedraw)
* [Game.Image](#gameimage)
* [Utils](#utils)
* [Game.collision](#gamecollision)
* [Game.Sound](#gamesound)

## **Getting started**
```html
<canvas id="canvas"></canvas>
```
html 파일에서 canvas를 생성합니다.
```javascript
const game = new Game("canvas"); //canvas id
```
Game 클래스를 생성합니다. 생성자의 인자로 canvas id를 넣어줍니다.
```javascript
game.display.fullScreen(); //full screen
game.display.setCaption("Game"); //game title
```
canvas의 크기를 브라우저 창에 맞게 조절합니다. 또한 게임의 제목을 설정합니다.
```javascript
game.display.set(400, 400);
```
위처럼 임의로 켄버스의 크기를 조절할 수 있습니다.
```javascript
let running = true;

function gameLoop() {
  game.event.getEvents().forEach((event) => {
    if (event.type === "Key_down") {
      if (event.key === "q") {
        running = false;
      }
    }
  );

  game.screen.fill([255, 255, 255]);

  if (!running) {
    game.quit();
  }
  else{
    game.display.update(gameLoop);
  }
}

gameLoop();
```
게임 루프를 생성합니다. 
게임 루프는 게임이 종료될 때까지 반복됩니다. 

게임 루프 안에서 게임 이벤트를 감지하고, 화면을 채우고, 게임을 종료합니다. 게임 루프가 종료되면 게임이 종료됩니다.

Q를 누르면 ```running```이 ```false```로 바뀝니다. 이후 게임이 종료됩니다.

# **Game.Display**
```javascript
game.display.icon(path); //set game icon
```
게임의 아이콘을 설정합니다. path는 아이콘의 경로입니다.
```javascript
game.display.fullScreen(); //full screen  
```
canvas의 크기를 브라우저 창에 맞게 조절합니다.

```javascript
game.display.set(800,800); //set canvas size
```
canvas의 크기를 임의로 조절합니다.

```javascript
game.display.setCaption("Game"); //set game title
```
게임의 제목을 설정합니다.


```javascript
function gameLoop() {
    //game loop
}
game.display.update(gameLoop); //update display
```
display를 업데이트합니다. 게임 루프 안에서 사용합니다.

# **Game.Event**
```javascript
game.event.getEvents(); //get events
```
이벤트를 가져옵니다. 이벤트는 배열로 반환됩니다.
```javascript
game.event.getEvents().forEach((event) => {
    //event loop
});
```
위처럼 이벤트를 반복문으로 처리할 수 있습니다.

이벤트의 종류는 다음과 같습니다.
* ```Key_down``` : 키를 누를 때 발생합니다. ```event.key```로 누른 키를 알 수 있습니다.
* ```Key_up``` : 키를 뗄 때 발생합니다. ```event.key```로 뗀 키를 알 수 있습니다.
* `Mouse_down` : 마우스를 누를 때 발생합니다. `event.button`으로 누른 버튼을 알 수 있습니다.
* `Mouse_up` : 마우스를 뗄 때 발생합니다. `event.button`으로 뗀 버튼을 알 수 있습니다.
* `Mouse_move` : 마우스를 움직일 때 발생합니다. `event.x`, `event.y`로 마우스의 위치를 알 수 있습니다.
* `Mouse_wheel` : 마우스 휠을 움직일 때 발생합니다. `event.delta`로 휠의 방향을 알 수 있습니다.

```javascript
game.event.getEvents().forEach((event) => {
    if (event.type === "Key_down") {
        if (event.key === "q") {
            running = false;
        }
    }
});
```
위처럼 이벤트의 종류와 키를 확인할 수 있습니다.

# **Game.Screen**
```javascript
game.screen.fill([255,255,255]); //fill screen
```
화면을 채웁니다. 인자로 채울 색을 넣어줍니다. 색은 배열로 넣어줍니다. 배열의 요소는 각각 R, G, B 값입니다.
```javascript
game.screen.alert("Hello World!"); //alert
```
화면에 팝업창을 띄웁니다. 인자로 팝업창에 띄울 메시지를 넣어줍니다.

# **Game.Draw**

```javascript
game.draw.rect(0, 0, 100, 100, [255, 0, 0]);
```
위처럼 사각형을 그릴 수 있습니다. 인자로 `x`, `y`,` width`, `height`, `color`를 넣어줍니다. color는 배열로 넣어줍니다. 배열의 요소는 각각 `R, G, B` 값입니다.

위 코드는 캔버스의 왼쪽 위에 빨간색 사각형을 그립니다.

`return` : `Rect` 의 범위값을 반환합니다
```javascript
{ x: { min: x, max: x + width }, y: { min: y, max: y + height } }
```
위는 `Rect`의 범위값입니다.
객체의 `collision`에 사용할 수 있습니다.

---

```javascript
game.draw.circle(100, 100, 50, [0, 0, 255]);
```
위처럼 원을 그릴 수 있습니다. 인자로 `x`, `y`, `radius`, `color`를 넣어줍니다. color는 배열로 넣어줍니다. 배열의 요소는 각각 `R, G, B` 값입니다.

위 코드는 캔버스의 중앙에 파란색 원을 그립니다.

`return` : `Circle` 의 범위값을 반환합니다
```javascript
{ x: { min: x - radius, max: x + radius }, y: { min: y - radius, max: y + radius } }
```
위는 `Circle`의 범위값입니다.
객체의 `collision`에 사용할 수 있습니다.


```javascript
game.draw.line(0, 0, 100, 100, [0, 255, 0]);
```
위처럼 선을 그릴 수 있습니다. 인자로 `x1`, `y1`, `x2`, `y2`, `color`를 넣어줍니다. color는 배열로 넣어줍니다. 배열의 요소는 각각 `R, G, B` 값입니다.

위 코드는 캔버스의 왼쪽 위에서 오른쪽 아래로 초록색 선을 그립니다.

`return` : `Line` 의 범위값을 반환합니다
```javascript
{ x: { min: x1, max: x2 }, y: { min: y1, max: y2 } };
```
위는 `Line`의 범위값입니다.
객체의 `collision`에 사용할 수 있습니다.

---
    
```javascript
game.draw.text("Hello World!", 0, 0, 20, [0, 0, 0]);
```
위처럼 텍스트를 그릴 수 있습니다. 인자로 `text`, `x`, `y`, `size`, `color`를 넣어줍니다. color는 배열로 넣어줍니다. 배열의 요소는 각각 `R, G, B` 값입니다.

위 코드는 캔버스의 왼쪽 위에 검은색 텍스트를 그립니다.

`return` : `Text` 의 범위값을 반환합니다
```javascript
{ x: { min: x, max: x + text.length * size }, y: { min: y, max: y + size } }
```
위는 `Text`의 범위값입니다.
객체의 `collision`에 사용할 수 있습니다.

# **Game.Image**
```javascript
game.image.load("path"); //load image
```
이미지를 불러옵니다. 인자로 이미지의 경로를 넣어줍니다.
```javascript
game.image.draw("path", x, y,width,height); //draw image
```
이미지를 그립니다. 인자로 이미지의 경로와 `x`, `y`,`width`,`height`를 넣어줍니다.

# Utils
# **Game.collision**
```javascript
let circle = game.draw.circle(X, Y, 100, [0, 255, 0]);
let text = game.draw.text("Hello", 100, 100, 50, [0, 20, 0]);

game.collision.check(circle, text); //check collision
```
객체의 충돌을 감지합니다. 인자로 충돌을 감지할 객체를 넣어줍니다. 객체는 `Rect`, `Circle`, `Line`, `Text`가 될 수 있습니다.

위 코드는 원과 텍스트의 충돌을 감지합니다.

`return` : 충돌이 감지되면 `true`, 아니면 `false`를 반환합니다.


# **Game.Sound**
```javascript
game.sound.load("path"); //load sound
```
사운드를 불러옵니다. 인자로 사운드의 경로를 넣어줍니다.
```javascript
game.sound.load("path").play(); //play sound
```
사운드를 재생합니다. 
```javascript
game.sound.load("path").pause(); //pause sound
```
사운드를 일시정지합니다.
```javascript
game.sound.load("path").stop(); //stop sound
```
사운드를 정지합니다.
```javascript
game.sound.load("path").setVolume(0.5); //set volume
```
사운드의 볼륨을 설정합니다. 인자로 볼륨을 넣어줍니다. 볼륨은 0 ~ 1 사이의 값이어야 합니다.

