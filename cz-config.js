module.exports = {
  types: [
    { value: '✨ Feat', name: '✨  새로운 기능, 페이지 추가' },
    {
      value: '🚚 Chore',
      name: '🚚 자잘한 수정',
    },
    {
      value: '💊 Fix',
      name: '💊 버그 수정',
    },
    {
      value: '🌞 Setting',
      name: '🌞 프로젝트 설정 추가 및 변경',
    },
    { value: '🌙 Install', name: '🌙 패키지 다운' },
    { value: '📝 Docs', name: '📝 문서 관련' },
    {
      value: '💄 Style',
      name: '💄 스타일 수정',
    },
    {
      value: '🤖 Refactor',
      name: '🤖 코드 리펙토링',
    },
    {
      value: '✅ Test',
      name: '✅  테스트 관련',
    },
  ],
  allowCustomScopes: false,
  allowBreakingChanges: ['feat', 'fix'],
  skipQuestions: ['body'],
  subjectLimit: 100,
};
