```
.
+-- src/
|   +-- api             통신과 관련된 데이터
|   +-- screens         화면 View
|   +-- components      자주 사용되는 컴포넌트
|   +-- hooks           custom hook
|   +-- layout          화면의 레아이웃 구조 
|   +-- navigations     navigator 파일
|   +-- redux           redux 관련 함수
|   +-- theme           앱에서 사용하는 theme
|   +-- utils           사용 가능한 간단한 함수들
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
- **Feat**: 새로운 기능을 추가
- **Chore**:자잘한 수정
- **Fix**: 버그 수정
- **Style**: 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우
- **Setting**: 프로젝트 셋팅 및 package.json 수정
- **Docs**: 문서화 내용 수정
- **Refactor**: 버그를 수정하지 않는 코드 개선 작업
- **test**: 테스팅 관련
- **remove** 파일 삭제하는 작업만 수행한 경우

[comment]: <> (- **add** : 파일 추가)

[comment]: <> (- **comment**:필요한 주석 추가 및 변경)



### Commit (commitizen사용)
1. yarn commit 입력
2. Select the type of change that you're committing (type 선택)
3. Denote the SCOPE of this change (enter)
4. Write a SHORT, IMPERATIVE tense description of the change (commit 내용 입력)
5. List any ISSUES CLOSED by this change (optional). E.g.: #31, #34: (추후 사용예정)
