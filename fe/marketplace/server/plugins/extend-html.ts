export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.beforeEach(() => {
    console.log("BBBBBBBBBBEFORE EACH!!!!!!!!!!!!");
  })
  nitroApp.hooks.hook('render:html', (html, { event }) => {
    // This will be an object representation of the html template.
    console.log("hhhhtml", html)
    console.log("eeeeevent", event)
    console.log("ppppprocess", process.server)
    html.head.push('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">')
    html.head.push(`<meta name="description" content="My custom description" />`)
  })
  // You can also intercept the response here.
  nitroApp.hooks.hook('render:response', (response, { event }) => { console.log("rrrrrrrrresponse", response) })
})