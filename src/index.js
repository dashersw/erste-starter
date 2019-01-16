import application from './application'

const onDeviceReady = () => {
  document.body.classList.add(cfg.PLATFORM)
  document.body.classList.add(cfg.ENV)

  if (cfg.PLATFORM == 'device' && typeof device != 'undefined') {
    if (device.platform == 'iOS' && device.model[6] >= 4) { document.body.classList.add('hq') }

    document.body.classList.add(device.platform)
  }
  application()
}

document.addEventListener('deviceready', onDeviceReady)

if (cfg.PLATFORM == 'browser') onDeviceReady()
