const path = require('path');

module.exports = {
  mode: 'production', // 또는 'development'
  entry: './Main.js', // 라이브러리의 메인 파일 경로
  output: {
    path: path.resolve(__dirname, 'dist'), // 빌드 결과물 디렉토리
    filename: 'Arcan.js', // 빌드 파일 이름
    library: 'Arcan', // 전역 변수로 노출될 라이브러리 이름
    libraryTarget: 'umd', // 모듈 시스템 타겟
    globalObject: 'this'
  },
  module: {
    rules: [
      {
        test: /\.js$/, // .js 파일에 대한 처리
        exclude: /node_modules/, // node_modules 폴더 제외
        use: {
          loader: 'babel-loader', // Babel 로더 사용
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
