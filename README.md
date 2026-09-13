# HAMOM YouTube Manager v3

GitHub → Vercel 자동배포용 저장소입니다.

## v3 기능
- 업무형 관리자 UI
- 채널별 캘린더 / 예약 업로드
- 로컬 PC 영상 선택
- Google Drive Picker 영상 선택
- 최근 YouTube 영상 성과 분석
- Gemini 3.8 Flash 기반 AI 메타 생성
- 제목 3안 / 설명 / 일반 태그 / 해시태그 / 추천 공개시간 / 제목 점수

## Google OAuth
승인된 JavaScript 원본:
- https://hamom-youtube-manager.vercel.app

OAuth 범위에는 YouTube 관련 범위와 Google Drive 읽기 전용 범위가 포함됩니다.

## Google Drive Picker
Google Cloud에서 아래 API를 활성화하세요.
- Google Drive API
- Google Picker API

브라우저 앱의 `연동 설정`에서 Google API Key를 입력하면 Drive 파일 선택 버튼을 사용할 수 있습니다.

## AI 메타
Google AI Studio에서 Gemini API Key를 발급받아 브라우저 앱의 `Gemini API Key`에 입력합니다.
키는 이 브라우저 localStorage에만 저장되며 GitHub 저장소에는 저장되지 않습니다.

## 배포
`main` 브랜치에 커밋하면 연결된 Vercel 프로젝트에 자동 배포됩니다.
