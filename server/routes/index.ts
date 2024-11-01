import Email from '../../components/TailwindTest.vue'

export default eventHandler(async (event) => {
  const emailHtml = await render(Email, {
    title: 'some title',
  }, {
    pretty: true,
  })

  return emailHtml
});
