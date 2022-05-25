```
.
+-- src/
|   +-- screens         화면 View
|   +-- components      자주 사용되는 컴포넌트
|   +-- hooks           custom을 한 hook
|   +-- layout          화면의 레아이웃 구조 
|   +-- navigation      navigator 파일
|   +-- redux           redux 관련 함수
|   +-- utils           사용 가능한 간단한 함수들
|   +-- api             통신과 관련된 데이터.
|   +-- theme           앱에서 사용하는 theme
|   +-- ...
|
+-- assets
|   +-- image           앱에서 사용하는 image
        |   +-- ...
|   +-- font

|
+-- ...
```

### Theme 관련
- ThemeProvider.tsx, ThemeType.ts만 수정

### Commit Convention
- **feat**: 새로운 기능을 추가
- **fix**: 버그 수정
- **style**: 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우
- **docs**: 문서 수정
- **build**: 빌드 시스템 및 의존 패키지 수정
- **ci**: 지속적 통합 (CI) 관련
- **docs**: 문서화 내용 수정
- **refactor**: 버그를 수정하지 않는 코드 개선 작업
- **setting** : 프로젝트 셋팅 및 package.json 수정
- **remove** 파일 삭제하는 작업만 수행한 경우
- **add** : 파일 추가
- **test**: 테스팅 관련
- **comment**:필요한 주석 추가 및 변경


### Sample
- feat(member): add the, apply(), implement(구현()  -> feat(대상)
- fix(member): change, improve
- refactor(member): modify
- style($location): add couple of missing semi colons
- docs
- test
- chore
-> git commit -m "feat(user): mypage ui"


-> git commit -m "feat user myPage ui"
