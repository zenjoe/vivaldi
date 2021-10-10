import {registerPlugin} from 'writer'
import VivaldiPackage from './VivaldiPackage'

(() => {
    // Register the plugin with the Writer when registerPlugin() is available
    if(registerPlugin) {
        registerPlugin(VivaldiPackage)
    }
    else {
        console.error('Register method not yet available')
    }
})()
