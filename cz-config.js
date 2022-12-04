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
      name: '🌞 프로젝트 셋팅 및 package.json 수정',
    },
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
    {
      value: '📞 Remove',
      name: '📞  파일 삭제하는 작업만 수행한 경우',
    },
  ],
  allowCustomScopes: false,
  allowBreakingChanges: ['feat', 'fix'],
  skipQuestions: ['body'],
  subjectLimit: 100,
};
