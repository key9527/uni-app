export function main() {
  const app = createApp({})
  app.use({
    install(app) {
      app.config.globalProperties.plugin1 = ''
    },
  })
}
