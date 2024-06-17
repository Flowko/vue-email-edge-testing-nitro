import { render } from '@vue-email/render'
import Email from '../../components/Markdown.vue'

export default eventHandler(async (event) => {
  const emailHtml = await render(Email, {
    invitedByEmail: 'anpch@example.com',
    inviteLink: 'https://vercel.com/teams/invite/foo',
    inviteFromIp: '172.0.0.1',
    inviteFromLocation: 'San Francisco, CA',
    invitedByUsername: 'bukinoshita',
    teamName: 'My project',
    username: 'John Doe',
  })

  return emailHtml
});
