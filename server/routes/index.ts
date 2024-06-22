import Email from '../../components/I18nTest.vue'

export default eventHandler(async (event) => {
  const emailHtml = await render(Email, {
    title: 'some title',
  }, {
    pretty: true,
  })

  return emailHtml
});
