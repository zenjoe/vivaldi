
import {Validator} from 'writer'

class MyValidation extends Validator {
    // Required
    constructor(...args) {
        super(...args)
    }

    validate() {
        const prio = this.newsItem.querySelectorAll('itemMeta > links > link[type="sjm/relevance"]')
        const area = this.newsItem.querySelectorAll('itemMeta > links > link[type="x-im/place"]')
        const cat = this.newsItem.querySelectorAll('itemMeta > links > link[type="x-im/category"]')
        
        if (prio.length === 0){
            this.addWarning('Du mangler at vælge en prioritet!')
        }

        if (area.length === 0){
            this.addWarning('Du mangler at vælge et område!')
        }

        if (cat.length === 0){
            this.addWarning('Du har ikke valgt en kategori.')
        }
          
            
        
    }
}



export default {
    name: 'vivaldi', // TODO: Change "npwriterdevkit" to your plugin name
    id: 'dk.sndk.vivaldi', // TODO: Change this id to you id

    // The configure() is called by the writer when it wants the
    // plugin to initalize itself and its different parts.
    configure: function(config) {

        // Add plugin to main sidebar (can be overriden in plugin config)
        //config.addToSidebar('main', pluginConfig, DevKitComponent)


        config.addValidator(MyValidation)
        //config.addHook(hook.BEFORE_VALIDATE, MyHookBeforeValidate)
        //config.addHook(hook.BEFORE_SAVE, MyHookBeforeSave)
        //config.addHook(hook.AFTER_SAVE, MyHookAfterSave)
    }
}