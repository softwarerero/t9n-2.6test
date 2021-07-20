import { Template } from 'meteor/templating'
import { T9n } from 'meteor-accounts-t9n'
import de from 'meteor-accounts-t9n/build/de.js'
import es from 'meteor-accounts-t9n/build/es.js'

Template.registerHelper('t', (label, language = 'de', args = {}) => {
  language = typeof language === 'object' ? 'de' : language 
  return T9n.get(label, true, args, language)
})
