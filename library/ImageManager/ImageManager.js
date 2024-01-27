class ImageManager {
  constructor(ctx) {
    this.ctx = ctx;
    this.images = {}; // 이미지를 저장할 객체
  }
  // loadImage 메서드를 사용하여 이미지 로드
  loadImage(path) {
    const img = new Image();
    img.src = path;
    return img; // 이미지 객체를 직접 반환
  }

  // 로드된 이미지를 그리는 메서드
  drawImage(img, x, y, width, height) {
    // 이미지가 로드되면 그립니다.
    img.onload = () => {
      if (width && height) {
        this.ctx.drawImage(img, x, y, width, height);
      } else {
        this.ctx.drawImage(img, x, y);
      }
    };
    
    // 이미지가 이미 로드된 경우, 바로 그립니다.
    if (img.complete) {
      this.ctx.drawImage(img, x, y, width, height);
    }
  }
}

export default ImageManager;
